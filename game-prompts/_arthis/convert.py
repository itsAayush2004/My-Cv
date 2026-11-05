"""Rewrites every entry's build prompt into the ARTHIS.space house format.
Run from game-prompts/_arthis:  python3 convert.py"""
import re, glob, json, os, importlib.util
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
A = {}
for f in sorted(glob.glob(os.path.join(HERE, "a*.py"))):
    s = importlib.util.spec_from_file_location("m", f); m = importlib.util.module_from_spec(s); s.loader.exec_module(m); A.update(m.A)
assert sorted(A) == list(range(1, 241)), set(range(1, 241)) - set(A)
FAM = {"meadow":"light","candy":"light","sand":"light","ocean":"light","snow":"light","jungle":"light","paper":"light","peach":"light",
       "night":"dark","arcade":"dark","space":"dark","ember":"dark","spooky":"dark"}
MODE = {"S":"Solo score-chase","C":"vs CPU","C2":"vs CPU | 2 Players (local)"}
def slug(t): return re.sub(r"[^a-z0-9]+","-",t.lower()).strip("-")
slugs = {}
for i,(t,*_) in A.items():
    sl = slug(t); assert sl not in slugs, f"dup slug {sl}"; slugs[sl]=i
def prompt(i):
    t,mode,sess,pal,dim,core,wl,ctrl,hud,hint,diff,act,win = A[i]
    assert len(hint) < 60, (i, hint, len(hint)); assert pal in FAM, (i, pal)
    w,_,l = wl.partition(" / ")
    hs = " · ".join(hud.split("|")) + " + pause"
    pause = "Resume · Restart · " + ("vs CPU | 2 Players · " if mode=="C2" else "") + f"Easy | Normal | Hard ({diff})"
    tech = "3D three.js r128" if dim=="3D" else "2D canvas"
    return (f"ARTHIS GAME: {t}  ·  slug: {slug(t)}\n"
            f"Brief: {MODE[mode]} · {sess} · palette family {pal} ({FAM[pal]}) · {tech}\n"
            f"Core: {core}\n"
            f"{w.replace('Win:','Win:').strip()} · {l.strip()}\n"
            f"Controls: {ctrl} (max 3 inputs)\n"
            f"HUD: {hs}\n"
            f"Hint: \"{hint}\"\n"
            f"Pause sheet: {pause}\n"
            f"Style kit: hero = 1U, one radius scale (no hard edges), top-left light + one contact shadow per object, flat matte + lighter top face, 3 hazed background bands, juice on every action, nothing under 6 px on phone\n"
            f"Feed cards: Title / {act} / {win}\n"
            f"Rules: single HTML file, Poppins only, starts instantly, no splash/menus/emoji/online/shops, storage arthis:{slug(t)}:*, win + lose reachable, test at 5 sizes.")
pat = re.compile(r"- \*\*Build prompt[^\n]*\*\*\s*\n> [^\n]+")
data = json.load(open(os.path.join(ROOT,"games.json")))
byid = {g["id"]:g for g in data}
for f in sorted(glob.glob(os.path.join(ROOT,"0*.md"))):
    txt = open(f).read()
    parts = re.split(r"\n(?=### )", txt)
    out = []
    for b in parts:
        m = re.match(r"### (\d+) ", b)
        if m:
            i = int(m.group(1)); p = prompt(i); t = A[i][0]
            new = f"- **ARTHIS prompt: _{t}_** (original title · slug `{slug(t)}`)\n\n```text\n{p}\n```"
            if pat.search(b): b = pat.sub(lambda _: new, b, count=1)
            elif "ARTHIS prompt" in b: b = re.sub(r"- \*\*ARTHIS prompt.*?```text\n.*?\n```", lambda _: new, b, count=1, flags=re.S)
            else: raise SystemExit(f"no prompt in {i}")
            g = byid[i]; g["arthis_title"]=t; g["arthis_slug"]=slug(t); g["arthis_prompt"]=p
            g.pop("build_prompt", None)
        out.append(b)
    txt = "\n".join(out)
    txt = re.sub(r"> Format for every entry:.*?\n> Build prompts describe.*?\n", "> Every entry: facts → why it got popular → mechanics → design → an **ARTHIS prompt** (house style: see [ARTHIS-STYLE.md](ARTHIS-STYLE.md)).\n> Each ARTHIS prompt gives the game an original title and slug; the real game is only the mechanical reference.\n", txt, flags=re.S)
    open(f,"w").write(txt)
json.dump(data, open(os.path.join(ROOT,"games.json"),"w"), indent=2, ensure_ascii=False)
print("converted", len(A))
