#!/usr/bin/env node
// Builds every CV version from tools/cv-content.js:
//   cv/<name>.pdf   ATS-safe, one A4 page, real selectable text (Chromium print)
//   cv/<name>.docx  Word version for portals and recruiters that ask for .doc/.docx
//   cv/<name>.txt   plain text for "paste your resume" boxes and a quick ATS self-check
//   index.html      the web page articles, tabs and download links (between the CV:* markers)
//
// Run:  NODE_PATH=$(npm root -g) node tools/build-cv.js
// Needs Playwright with Chromium, and the `docx` npm package (both global here).
const fs = require('fs');
const path = require('path');
const { basics, versions } = require('./cv-content');
const BRAND = require('./brand-icons');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'cv');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function contactItems(v) {
  const map = {
    email: { label: 'Email', text: basics.email, url: 'mailto:' + basics.email },
    phone: { label: 'Phone', text: basics.phone, url: 'tel:' + basics.phoneHref },
    linkedin: { label: 'LinkedIn', ...basics.linkedin },
    github: { label: 'GitHub', ...basics.github },
    portfolio: { label: 'Portfolio', ...basics.portfolio },
    youtube: { label: 'YouTube', ...basics.youtube },
    location: { label: 'Location', text: basics.location },
  };
  return v.contacts.map((k) => map[k]);
}

const socialItems = (v) => (v.socials || []).map((k) => ({ key: k, ...basics.socials[k] }));

// Splits the profile links into two rows of about equal width (each link keeps its priority order
// within its row, and the first link stays first), so long URLs never strand one link on a third line.
function socialRows(v) {
  const items = socialItems(v), w = (x) => x.text.length + 5; // + icon and gap
  const options = [];
  for (let mask = 1; mask < 1 << items.length; mask += 2) {
    const r1 = items.filter((_, i) => mask & (1 << i)), r2 = items.filter((_, i) => !(mask & (1 << i)));
    const cost = Math.max(...[r1, r2].map((r) => r.reduce((t, x) => t + w(x), 0)));
    // Lower rank = the first row holds the higher-priority links.
    const rank = items.reduce((t, _, i) => t + (mask & (1 << i) ? i : 0), 0) / Math.max(1, r1.length);
    options.push({ cost, rank, rows: [r1, r2].filter((r) => r.length) });
  }
  if (!options.length) return [];
  const min = Math.min(...options.map((o) => o.cost));
  return options.filter((o) => o.cost <= min + 6).sort((x, y) => x.rank - y.rank || x.cost - y.cost)[0].rows;
}
const portfolio = () => basics.socials.portfolio;
const PORTFOLIO_FROM = '#7C3AED', PORTFOLIO_TO = '#DB2777'; // violet to pink: stands apart from every brand colour

// Inline SVG icon drawn in currentColor. Brand logos come from Simple Icons; star and globe are drawn here.
function icon(name, cls = 'ic') {
  const inner = BRAND[name] ? `<path fill="currentColor" d="${BRAND[name]}"/>`
    : name === 'star' ? '<path fill="currentColor" d="M12 1.8l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.6l-6.3 3.6 1.5-7.1L1.8 9.2 9 8.4z"/>'
    : '<g fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4.3" ry="10"/><path d="M2 12h20"/></g>';
  return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>`;
}

// Print/Word/text keep this to one line; the web page also lists the schools.
const eduLine = (e) => e.scores.map((s) => `${s[0]}: ${s[1]}`).join(' | ');

// ------------------------------------------------------------------ ATS print HTML
function printHtml(v, pt) {
  const link = (t, u) => `<a href="${esc(u)}">${esc(t)}</a>`;
  const contacts = contactItems(v).map((c) => (c.url ? link(c.text, c.url) : esc(c.text))).join('<span class="sep"> | </span>');
  const pf = portfolio();
  const socLink = (x) => `<a class="so" href="${esc(x.url)}" style="color:${x.text2 || x.color}"><span style="color:${x.color}">${icon(x.icon)}</span>${esc(x.text)}</a>`;
  const socials = socialRows(v).map((r) => `<p class="sos">${r.map(socLink).join('')}</p>`).join('');
  const bullets = (bs) => bs.map((b) => `<p class="b"><span class="dot">•</span>${esc(b)}</p>`).join('');
  const linkRow = (ls) => (ls && ls.length ? `<p class="lk">${ls.map((l) => link(l[0], l[1])).join('<span class="sep"> | </span>')}</p>` : '');
  const sec = (title, body) => `<h2>${esc(title.toUpperCase())}</h2>${body}`;

  const exp = v.experience.map((j) => `
    <div class="row"><span><b>${esc(j.title)}</b> | ${esc(j.org)}, ${esc(j.place)}</span><span class="dt">${esc(j.dates)}</span></div>
    ${linkRow(j.links)}${bullets(j.bullets)}`).join('');
  const proj = v.projects.map((p) => `
    <p class="b"><span class="dot">•</span><b>${esc(p.name)}</b> (${esc(p.tech)}): ${esc(p.bullets.join(' '))}${p.links ? ' ' + p.links.map((l) => link(l[0], l[1])).join(' | ') : ''}</p>`).join('');
  const skills = v.skills.map((s) => `<p class="sk"><b>${esc(s[0])}:</b> ${esc(s[1])}</p>`).join('');
  const e = v.education;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(v.pdfTitle)}</title>
<meta name="author" content="${esc(basics.name)}">
<meta name="keywords" content="${esc(v.headline.join(', '))}">
<style>
@page { size: A4; margin: 11mm 13mm 10mm; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: Carlito, Calibri, "Liberation Sans", Arial, sans-serif; font-size: ${pt}pt; line-height: 1.24; color: #111; }
a { color: #111; text-decoration: none; }
h1 { font-size: ${(pt * 2).toFixed(1)}pt; margin: 0; letter-spacing: .5px; line-height: 1.05; }
.hl { font-size: ${(pt + 1.2).toFixed(1)}pt; font-weight: bold; color: #1f3a8a; margin: 2pt 0 2pt; }
.ct { font-size: ${(pt - 0.6).toFixed(1)}pt; margin: 0; }
.top { display: flex; justify-content: space-between; align-items: center; gap: 12pt; }
.pf { display: inline-flex; align-items: center; gap: 4pt; white-space: nowrap; color: #fff; font-weight: bold; font-size: ${(pt - 0.3).toFixed(1)}pt;
  padding: 3.5pt 9pt 3.5pt 7pt; border-radius: 20pt; background: linear-gradient(100deg, ${PORTFOLIO_FROM}, ${PORTFOLIO_TO}); }
.pf .lb { opacity: .85; font-weight: normal; }
.ic { width: 1.05em; height: 1.05em; vertical-align: -0.17em; margin-right: 2.6pt; }
.pf .ic { margin-right: 0; }
.sos { font-size: ${(pt - 0.7).toFixed(1)}pt; margin: 1.5pt 0 0; display: flex; flex-wrap: wrap; gap: 1.5pt 11pt; }
.sos + .sos { margin-top: 1pt; }
.so { white-space: nowrap; font-weight: bold; }
.sep { color: #666; }
h2 { font-size: ${(pt + 0.6).toFixed(1)}pt; color: #1f3a8a; margin: 6pt 0 2.5pt; padding-bottom: 1pt; border-bottom: 0.8pt solid #1f3a8a; letter-spacing: .6px; }
p { margin: 0; }
.sum { text-align: left; }
.sk { margin: 0 0 1pt; }
.row { display: flex; justify-content: space-between; gap: 10pt; margin-top: 3.5pt; }
.row:first-of-type { margin-top: 0; }
.dt { white-space: nowrap; font-weight: bold; }
.lk { font-size: ${(pt - 0.9).toFixed(1)}pt; color: #333; margin: 0.5pt 0 0.5pt; }
.b { padding-left: 10pt; text-indent: -8pt; margin: 0.8pt 0 0; }
.dot { display: inline-block; width: 8pt; text-indent: 0; }
</style></head><body>
<div class="top"><h1>${esc(basics.name.toUpperCase())}</h1><a class="pf" href="${esc(pf.url)}">${icon('star')}<span>Portfolio:</span><span class="lb">${esc(pf.text)}</span></a></div>
<p class="hl">${esc(v.headline.join(' | '))}</p>
<p class="ct">${contacts}</p>
${socials}
${sec('Summary', `<p class="sum">${esc(v.summary)}</p>`)}
${sec(v.skillsTitle, skills)}
${sec('Experience', exp)}
${v.projects.length ? sec('Projects', proj) : ''}
${sec('Education', `<div class="row"><span><b>${esc(e.degree)}</b> | ${esc(e.school)}</span><span class="dt">${esc(e.dates)}</span></div><p>${esc(eduLine(e))}</p>`)}
</body></html>`;
}

// ------------------------------------------------------------------ plain text
function plainText(v) {
  const out = [];
  out.push(basics.name.toUpperCase(), v.headline.join(' | '));
  out.push(contactItems(v).map((c) => c.text).join(' | '));
  out.push([{ label: 'Portfolio', text: portfolio().text }, ...socialItems(v)].map((x) => `${x.label}: ${x.text}`).join(' | '), '');
  out.push('SUMMARY', v.summary, '');
  out.push(v.skillsTitle.toUpperCase(), ...v.skills.map((s) => `${s[0]}: ${s[1]}`), '');
  out.push('EXPERIENCE');
  v.experience.forEach((j) => {
    out.push(`${j.title} | ${j.org}, ${j.place} | ${j.dates}`);
    if (j.links) out.push(j.links.map((l) => l[0]).join(' | '));
    j.bullets.forEach((b) => out.push('• ' + b));
    out.push('');
  });
  if (v.projects.length) {
    out.push('PROJECTS');
    v.projects.forEach((p) => out.push(`• ${p.name} (${p.tech}): ${p.bullets.join(' ')}${p.links ? ' ' + p.links.map((l) => l[0]).join(' | ') : ''}`));
    out.push('');
  }
  const e = v.education;
  out.push('EDUCATION', `${e.degree} | ${e.school} | ${e.dates}`, eduLine(e), '');
  return out.join('\n');
}

// ------------------------------------------------------------------ Word
async function wordFile(v, file, pt) {
  const D = require('docx');
  const { Document, Packer, Paragraph, TextRun, TabStopType, BorderStyle, ExternalHyperlink, AlignmentType } = D;
  // Word lays text out a little looser than Chromium, so it runs half a point smaller than the PDF.
  const F = 'Calibri', SZ = Math.round(pt * 2) - 1, BLUE = '1F3A8A';
  const run = (text, o = {}) => new TextRun({ text, font: F, size: SZ, ...o });
  const RIGHT = 10466; // twips: A4 width minus margins
  const heading = (t) => new Paragraph({
    children: [run(t.toUpperCase(), { bold: true, size: SZ + 2, color: BLUE })],
    spacing: { before: 140, after: 50 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE, space: 1 } },
  });
  const row = (left, orgText, dates) => new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
    spacing: { before: 70 },
    children: [run(left, { bold: true }), run(orgText), run('\t' + dates, { bold: true })],
  });
  const bullet = (text) => new Paragraph({ bullet: { level: 0 }, spacing: { before: 10 }, children: [run(text)] });
  const hyper = (t, u, o = {}) => new ExternalHyperlink({ link: u, children: [run(t, { color: '111111', ...o })] });
  const joinLinks = (items, o) => items.flatMap((c, i) => [...(i ? [run(' | ', { color: '666666', ...o })] : []), c.url ? hyper(c.text, c.url, o) : run(c.text, o)]);

  const kids = [];
  const pf = portfolio();
  const hex = (c) => c.replace('#', '');
  // Name on the left, highlighted portfolio link right-aligned on the same line (like the PDF).
  kids.push(new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
    children: [run(basics.name.toUpperCase(), { bold: true, size: 40 }), run('\t'),
      new ExternalHyperlink({ link: pf.url, children: [run(` \u2605 Portfolio: ${pf.text} `, { bold: true, size: SZ, color: 'FFFFFF', shading: { type: D.ShadingType.CLEAR, color: 'auto', fill: hex(PORTFOLIO_FROM) } })] })],
  }));
  kids.push(new Paragraph({ spacing: { after: 30 }, children: [run(v.headline.join(' | '), { bold: true, size: SZ + 2, color: BLUE })] }));
  kids.push(new Paragraph({ children: joinLinks(contactItems(v), { size: SZ - 1 }) }));
  // Profile links in brand colours, in two balanced rows so no link is split across lines.
  socialRows(v).forEach((rowItems, i) => kids.push(new Paragraph({
    spacing: { before: i ? 0 : 30 },
    children: rowItems.flatMap((x, j) => [...(j ? [run('    ', { size: SZ - 1 })] : []), hyper(x.text, x.url, { bold: true, size: SZ - 1, color: hex(x.text2 || x.color) })]),
  })));

  kids.push(heading('Summary'), new Paragraph({ children: [run(v.summary)] }));
  kids.push(heading(v.skillsTitle));
  v.skills.forEach((s) => kids.push(new Paragraph({ spacing: { after: 10 }, children: [run(s[0] + ': ', { bold: true }), run(s[1])] })));
  kids.push(heading('Experience'));
  v.experience.forEach((j) => {
    kids.push(row(j.title, ` | ${j.org}, ${j.place}`, j.dates));
    if (j.links) kids.push(new Paragraph({ children: joinLinks(j.links.map((l) => ({ text: l[0], url: l[1] })), { size: SZ - 2, color: '333333' }) }));
    j.bullets.forEach((b) => kids.push(bullet(b)));
  });
  if (v.projects.length) {
    kids.push(heading('Projects'));
    v.projects.forEach((p) => kids.push(new Paragraph({
      bullet: { level: 0 }, spacing: { before: 10 },
      children: [run(p.name, { bold: true }), run(` (${p.tech}): ${p.bullets.join(' ')}`),
        ...(p.links ? [run(' '), ...joinLinks(p.links.map((l) => ({ text: l[0], url: l[1] })))] : [])],
    })));
  }
  const e = v.education;
  kids.push(heading('Education'), row(e.degree, ` | ${e.school}`, e.dates), new Paragraph({ children: [run(eduLine(e))] }));

  const doc = new Document({
    creator: basics.name, title: v.pdfTitle, keywords: v.headline.join(', '),
    styles: { default: { document: { run: { font: F, size: SZ } } } },
    sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 620, bottom: 560, left: 720, right: 720 } } }, children: kids }],
  });
  fs.writeFileSync(file, await Packer.toBuffer(doc));
}

// ------------------------------------------------------------------ web page
function webArticle(v, first) {
  const pf = portfolio();
  const chip = (x, cls, style) => `      <li><a class="${cls}" href="${esc(x.url)}" target="_blank" rel="noopener" title="${esc(x.text)}"${style ? ` style="${style}"` : ''}>${icon(x.icon, 'si')}<span>${esc(x.label)}</span></a></li>`;
  const chips = [chip(pf, 'pf', ''), ...socialItems(v).map((x) => chip(x, 'sc', `--lc:${x.color};--dc:${x.dark || x.color}`))].join('\n');
  const c = contactItems(v).map((x) => `      <li><b>${x.label}</b>${x.url ? `<a href="${esc(x.url)}"${x.url.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(x.text.replace(/^(linkedin\.com\/in\/|github\.com\/|youtube\.com\/)/, ''))}</a>` : esc(x.text)}</li>`).join('\n');
  const links = (ls) => (ls && ls.length ? `\n          <ul class="links">\n${ls.map((l) => `            <li><a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[0])}</a></li>`).join('\n')}\n          </ul>` : '');
  const pts = (bs) => `\n          <ul class="pts">\n${bs.map((b) => `            <li>${esc(b)}</li>`).join('\n')}\n          </ul>`;
  const jobs = v.experience.map((j) => `        <div class="job">
          <header><h3>${esc(j.title)} <span class="at">· ${esc(j.org)}</span></h3><time>${esc(j.dates)}</time></header>
          <p class="where">${esc(j.place)}</p>${links(j.webLinks || j.links)}${pts(j.bullets)}
        </div>`).join('\n');
  const projects = v.projects.map((p) => `        <div class="job">
          <header><h3>${esc(p.name)} <span class="at">· ${esc(p.tech)}</span></h3></header>${links(p.webLinks || (p.links || []).map((l) => ['Code', l[1]]))}${pts(p.bullets)}
        </div>`).join('\n');
  const e = v.education;
  return `  <article class="cv" id="cv-${v.id}" role="tabpanel" aria-labelledby="tab-${v.id}"${first ? '' : ' hidden'}>
    <p class="eyebrow">${esc(v.eyebrow)}</p>
    <h1>${esc(basics.name)}</h1>
    <p class="role">${v.headline.map(esc).join('<i>/</i>')}</p>
    <ul class="contacts">
${c}
    </ul>
    <ul class="socials">
${chips}
    </ul>

    <div class="stats">
${v.stats.map((s) => `      <div class="stat"><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join('\n')}
    </div>

    <section class="blk">
      <h2>Summary</h2>
      <div><p class="summary">${esc(v.summary)}</p></div>
    </section>

    <section class="blk">
      <h2>${esc(v.skillsTitle)}</h2>
      <div>
        <dl class="skills">
${v.skills.map((s) => `          <div><dt>${esc(s[0])}</dt><dd>${esc(s[1])}</dd></div>`).join('\n')}
        </dl>
      </div>
    </section>

    <section class="blk">
      <h2>Experience</h2>
      <div class="jobs">
${jobs}
      </div>
    </section>
${v.projects.length ? `
    <section class="blk">
      <h2>Projects</h2>
      <div class="jobs">
${projects}
      </div>
    </section>
` : ''}
    <section class="blk edu">
      <h2>Education</h2>
      <div>
        <h3>${esc(e.degree)}</h3>
        <div class="meta"><span>${esc(e.school)}</span><time>${esc(e.dates)}</time></div>
        <ul class="scores">
${e.scores.map((s) => `          <li>${esc(s[0])} <b>${esc(s[1])}</b>${s[2] ? ' · ' + esc(s[2]) : ''}</li>`).join('\n')}
        </ul>
      </div>
    </section>
  </article>`;
}

function replaceBetween(src, name, body, js) {
  const a = js ? `/* ${name}:START */` : `<!-- ${name}:START -->`, b = js ? `/* ${name}:END */` : `<!-- ${name}:END -->`;
  const i = src.indexOf(a), j = src.indexOf(b);
  if (i < 0 || j < 0) throw new Error(`index.html is missing the ${name} markers`);
  return src.slice(0, i + a.length) + '\n' + body + '\n' + src.slice(j);
}

function updatePage() {
  const p = path.join(ROOT, 'index.html');
  let s = fs.readFileSync(p, 'utf8');
  s = replaceBetween(s, 'CV:TABS', versions.map((v, i) => `      <button id="tab-${v.id}" role="tab" aria-selected="${i ? 'false' : 'true'}" aria-controls="cv-${v.id}" data-mode="${v.id}"><span class="long">${esc(v.tab)}</span><span class="short">${esc(v.tabShort)}</span></button>`).join('\n'));
  s = replaceBetween(s, 'CV:ARTICLES', versions.map((v, i) => webArticle(v, i === 0)).join('\n\n'));
  const modes = {};
  versions.forEach((v) => { modes[v.id] = { pdf: `cv/${v.file}.pdf`, docx: `cv/${v.file}.docx`, title: `Aayush Kumar CV · ${v.tab}` }; });
  s = replaceBetween(s, 'CV:MODES', `  var MODES = ${JSON.stringify(modes, null, 2).replace(/\n/g, '\n  ')};`, true);
  s = replaceBetween(s, 'CV:SHARE', `  <span>Share a version directly: ${versions.map((v) => `<a href="#${v.id}">#${v.id}</a>`).join(' · ')}</span>`);
  fs.writeFileSync(p, s);
}

// ------------------------------------------------------------------ main
(async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const v of versions) {
    // Largest font size that still fits on one A4 page.
    let done = false, fitPt = 0;
    for (let pt = 10.6; pt >= 9.2; pt = +(pt - 0.2).toFixed(1)) {
      await page.setContent(printHtml(v, pt), { waitUntil: 'load' });
      const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true });
      const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      if (pages === 1) {
        fs.writeFileSync(path.join(OUT, v.file + '.pdf'), pdf);
        console.log(`${v.file}.pdf  1 page at ${pt}pt`);
        done = true; fitPt = pt;
        break;
      }
    }
    if (!done) throw new Error(`${v.id} does not fit on one page even at 9.2pt: cut some text`);
    fs.writeFileSync(path.join(OUT, v.file + '.txt'), plainText(v));
    await wordFile(v, path.join(OUT, v.file + '.docx'), fitPt);
    console.log(`${v.file}.txt, ${v.file}.docx`);
  }
  await browser.close();
  updatePage();
  console.log('index.html updated');
})().catch((e) => { console.error(e); process.exit(1); });
