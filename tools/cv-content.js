// Single source of truth for every CV version.
// Edit facts here, then run `node tools/build-cv.js` to rebuild the PDFs, Word files,
// plain-text files and the web page (index.html) so they always say the same thing.
//
// Rules this content follows (from the CV Forge ATS work and real Indeed India job posts):
//  - Only real facts: no invented numbers, skills or seniority.
//  - Standard section names, one column, real bullet characters, plain-text links.
//  - Job-post wording in the headline, summary and skills (Software Engineer, Backend,
//    Unity Developer, Social Media Marketing...), so keyword filters find it.
//  - Every bullet starts with an action verb and carries a number where one exists.
//  - One A4 page per version.

const basics = {
  name: 'Aayush Kumar',
  email: 'aayushkumarofficial21@gmail.com',
  phone: '+91 98290 92369',
  phoneHref: '+919829092369',
  location: 'Jaipur, Rajasthan, India',
  linkedin: { text: 'linkedin.com/in/aayush-kumar-872ab1323', url: 'https://www.linkedin.com/in/aayush-kumar-872ab1323' },
  github: { text: 'github.com/itsAayush2004', url: 'https://github.com/itsAayush2004' },
  portfolio: { text: 'itsaayush2004.github.io/portfolio', url: 'https://itsaayush2004.github.io/portfolio/' },
  youtube: { text: 'youtube.com/@AKVerseOfficial', url: 'https://www.youtube.com/@AKVerseOfficial' },
};

const L = {
  space: ['arthis.space', 'https://arthis.space/'],
  land: ['arthis.land', 'https://arthis.land/'],
  relay: ['github.com/itsAayush2004/arthisland-relay', 'https://github.com/itsAayush2004/arthisland-relay'],
  spaceRepo: ['Space repo', 'https://github.com/itsAayush2004/arthis.space'],
  landRepo: ['Land repo', 'https://github.com/itsAayush2004/arthis.land'],
  portfolio: ['itsaayush2004.github.io/portfolio', 'https://itsaayush2004.github.io/portfolio/'],
  portfolioCode: ['Code', 'https://github.com/itsAayush2004/portfolio'],
  atlas: ['TravelAtlas', 'https://github.com/itsAayush2004/TravelAtlas'],
  forge: ['github.com/itsAayush2004/cv-forge', 'https://github.com/itsAayush2004/cv-forge'],
  youtube: ['youtube.com/@AKVerseOfficial', 'https://www.youtube.com/@AKVerseOfficial'],
};

const education = {
  degree: 'B.Tech, Electronics and Communication Engineering',
  school: 'Malaviya National Institute of Technology (MNIT, NIT Jaipur)',
  dates: '2022 – 2026',
  scores: [
    ['JEE Advanced', 'AIR 8956'],
    ['JEE Main', '98.9 percentile'],
    ['Class XII', '86.7%', 'Jayshree Periwal High School (2022)'],
    ['Class X', '90.4%', 'Step By Step High School, Jaipur'],
  ],
};

// ---------------------------------------------------------------- SOFTWARE ENGINEERING
const software = {
  id: 'software',
  tab: 'Software Engineering',
  tabShort: 'Software',
  file: 'Aayush_Kumar_CV_Software_Engineer',
  pdfTitle: 'Aayush Kumar - Software Engineer CV',
  eyebrow: 'CV · Software Engineering',
  headline: ['Software Engineer', 'Backend (Python, FastAPI)', 'Full-Stack', 'AI / LLM'],
  contacts: ['email', 'phone', 'linkedin', 'github', 'portfolio', 'location'],
  stats: [
    ['10,000', 'daily active users on ARTHIS.space'],
    ['4,500+', 'users served by my FastAPI + LLM APIs'],
    ['−40%', 'API latency at Clymora'],
    ['99.8%', 'uptime at 9,000 peak daily requests'],
  ],
  summary:
    'Software Engineer with a B.Tech from NIT Jaipur (2026) and production experience in backend, full-stack and AI engineering. ' +
    'At Clymora, built async Python (FastAPI) REST APIs and RAG pipelines that serve LLM inference to 4,500+ users at 99.8% uptime, and cut API latency by 40%. ' +
    'As founder-developer of ARTHIS.space, scaled a 70+ game web platform, its React Native Android and iOS apps and a Python real-time multiplayer server to 10,000 daily active users on PostgreSQL (Supabase). ' +
    'Strong in Python, JavaScript/TypeScript, C++, data structures and algorithms, and system design.',
  skillsTitle: 'Technical Skills',
  skills: [
    ['Languages', 'Python, JavaScript, TypeScript, C++, C#, Java, SQL, HTML, CSS'],
    ['Backend', 'FastAPI (async), Node.js, REST API design, WebSocket, TCP sockets, PostgreSQL, Supabase, database design, Row Level Security, authentication, data pipelines, third-party API integration'],
    ['AI / ML', 'LLM integration, RAG pipelines, vector databases, fine-tuning, transformer models (GPT-2), NLP, prompt engineering, AI agents, Model Context Protocol (MCP), Ollama'],
    ['Frontend and Mobile', 'React, Vite, React Native (Expo), Android, iOS, Three.js, WebGL, HTML5 Canvas, responsive design'],
    ['DevOps and Tools', 'Git, GitHub Actions, CI/CD, Linux, Docker, Cloudflare Workers, web security, performance optimization, technical documentation'],
    ['CS Fundamentals', 'Data structures and algorithms, OOP, design patterns, system design, concurrency, multithreading, socket programming, software testing, debugging, Agile, SDLC'],
  ],
  experience: [
    {
      title: 'Founder and Software Engineer', org: 'Arthis Technologies', place: 'Jaipur', dates: 'Jun 2026 – Present',
      links: [L.space, L.land, L.relay],
      webLinks: [L.space, L.land, ['Relay code', L.relay[1]], L.spaceRepo, L.landRepo],
      bullets: [
        'Built and scaled ARTHIS.space, a swipeable web platform of 70+ HTML5 single- and multiplayer games (Three.js, 2D Canvas, WebRTC), from 1 to 10,000 daily active users on Supabase and PostgreSQL.',
        'Designed a zero-dependency real-time multiplayer server (TCP and WebSocket) in pure Python, hosting 2–4 player rooms for Unity clients.',
        'Shipped Android and iOS apps in React Native (Expo) with a live game-preview feed and AdMob ads, optimized for low-end devices.',
        'Engineered a zero-cost 5-layer code-protection pipeline (obfuscation, AES-GCM encryption, Cloudflare Worker key service, WebAssembly VM) that secures 78 games.',
        'Built Arthis.Land, a React and Vite metaverse whose Unity WebGL viewer loads .glb rooms at runtime; automated CI/CD with GitHub Actions and wrote its architecture and security docs.',
        'Built a multi-agent AI game generator (build, score, fix loop) on Claude and Ollama, with RAG search and fine-tuning.',
      ],
    },
    {
      title: 'Backend Developer Intern (AI)', org: 'Clymora', place: 'Jaipur', dates: 'Jan 2026 – Jun 2026',
      bullets: [
        'Designed and shipped 6 production REST API endpoints in async Python (FastAPI), serving LLM inference to 4,500+ users.',
        'Cut API latency by 40% by rebuilding data pipelines and adding concurrent request handling, at 9,000 peak daily requests.',
        'Built RAG pipelines on vector databases to ground LLM answers in internal data; trained a GPT-2 model from scratch.',
        'Tested, deployed and monitored AI services on Linux in a 4-engineer Agile team.',
      ],
    },
    {
      title: 'Freelance 3D Animator and Tools Developer', org: 'AKVerse', place: 'Jaipur', dates: 'Dec 2024 – Jan 2026',
      webLinks: [['YouTube', L.youtube[1]]],
      bullets: [
        'Developed 28 Blender Python add-ons (lip-sync, camera rigs, IK posing, render automation), replacing manual animation.',
        'Automated YouTube Shorts production (Claude API, edge-tts, Blender, FFmpeg) for AKVerse, a 21,000+ subscriber channel.',
      ],
    },
  ],
  projects: [
    {
      name: 'CV Forge', tech: 'JavaScript, Node.js, Playwright', links: [L.forge],
      bullets: ['ATS CV tailoring app: extracts must-have keywords from a job post, scores CV match 0–100 and exports PDF and Word; tested on 25 real job posts.'],
    },
    {
      name: '3D Portfolio and TravelAtlas', tech: 'Three.js, WebGL', links: [L.portfolio],
      webLinks: [['Portfolio', L.portfolio[1]], L.portfolioCode, L.atlas],
      bullets: ['Built a scroll-driven 3D gallery portfolio that doubles as a CV, and an interactive 3D globe charting 30+ travelled places.'],
    },
    {
      name: 'HexaBed', tech: 'Unity, C#',
      bullets: ['Built a procedural hex-grid terrain generator with GLB asset placement that removes manual level layout.'],
    },
  ],
  education,
};

// ---------------------------------------------------------------- GAME DEVELOPMENT
const game = {
  id: 'game',
  tab: 'Game Development',
  tabShort: 'Games',
  file: 'Aayush_Kumar_CV_Game_Developer',
  pdfTitle: 'Aayush Kumar - Game Developer CV',
  eyebrow: 'CV · Game Development',
  headline: ['Game Developer', 'Unity (C#)', 'HTML5 and WebGL', 'Real-Time Multiplayer'],
  contacts: ['email', 'phone', 'linkedin', 'github', 'portfolio', 'location'],
  stats: [
    ['70+', 'HTML5 games shipped, single and multiplayer'],
    ['10,000', 'daily active users on ARTHIS.space'],
    ['2–4', 'player real-time rooms on my own relay'],
    ['28', 'Blender Python add-ons written'],
  ],
  summary:
    'Game Developer with a B.Tech from NIT Jaipur (2026) who has shipped 70+ HTML5 single- and multiplayer games and grown ARTHIS.space to 10,000 daily active users. ' +
    'Builds gameplay in Unity (C#), Three.js/WebGL and 2D Canvas, wrote a real-time multiplayer relay server (TCP and WebSocket) for Unity clients, and ships to web, Android and iOS. ' +
    'Also a 3D artist and tools programmer (28 Blender Python add-ons) with backend experience in Python and FastAPI.',
  skillsTitle: 'Technical Skills',
  skills: [
    ['Engines and Graphics', 'Unity, C#, Unity WebGL, Unreal Engine, Three.js, WebGL, HTML5 Canvas, Blender, Blender Python API'],
    ['Gameplay', 'Gameplay programming, game design, game mechanics, rapid prototyping, procedural generation, physics, casual and mobile games'],
    ['Multiplayer and Backend', 'Real-time multiplayer networking, WebRTC, PeerJS, WebSocket, TCP, Python, FastAPI, Node.js, Supabase, PostgreSQL'],
    ['Platforms', 'Web, Android, iOS, React Native (Expo), Google AdMob, performance optimization for low-end devices'],
    ['Languages', 'C#, C++, JavaScript, TypeScript, Python, SQL, HTML, CSS'],
    ['Fundamentals and Tools', 'OOP, design patterns, data structures and algorithms, Git, GitHub Actions, CI/CD, debugging, AI tools (Claude, Ollama, ComfyUI)'],
  ],
  experience: [
    {
      title: 'Founder and Game Developer', org: 'Arthis Technologies', place: 'Jaipur', dates: 'Jun 2026 – Present',
      links: [L.space, L.land, L.relay],
      webLinks: [L.space, L.land, ['Relay code', L.relay[1]], L.spaceRepo, L.landRepo],
      bullets: [
        'Shipped 70+ HTML5 single- and multiplayer games (Three.js, 2D Canvas, WebRTC) on ARTHIS.space, a swipeable game feed that grew from 1 to 10,000 daily active users.',
        'Wrote a zero-dependency real-time multiplayer relay (TCP and WebSocket) in pure Python, hosting 2–4 player rooms for Unity clients.',
        'Built Arthis.Land, a metaverse with a Unity WebGL viewer that loads .glb rooms at runtime inside a React and Vite site, with CI/CD on GitHub Actions.',
        'Published Android and iOS apps in React Native (Expo) with a live game-preview feed and AdMob ads, tuned for low-end devices.',
        'Secured 78 games with a zero-cost 5-layer protection pipeline (obfuscation, AES-GCM encryption, Cloudflare Worker keys, WebAssembly VM).',
        'Built a multi-agent AI gameplay generator (build, score, fix loop) on Claude and Ollama, and gave all 70+ games one visual identity with ComfyUI logos and banners.',
      ],
    },
    {
      title: 'Freelance 3D Animator and Tools Developer', org: 'AKVerse', place: 'Jaipur', dates: 'Dec 2024 – Jan 2026',
      links: [L.youtube],
      webLinks: [['YouTube', L.youtube[1]]],
      bullets: [
        'Developed 28 Blender Python add-ons (lip-sync, camera rigs, IK posing, render automation) that replaced frame-by-frame manual animation.',
        'Built low-poly 3D dioramas, characters and props for a 21,000+ subscriber YouTube channel, and published 3D asset packs on Sketchfab.',
      ],
    },
    {
      title: 'Backend Developer Intern (AI)', org: 'Clymora', place: 'Jaipur', dates: 'Jan 2026 – Jun 2026',
      bullets: [
        'Shipped 6 production REST API endpoints in async FastAPI serving 4,500+ users at 99.8% uptime.',
        'Cut API latency by 40% with concurrent request handling, sustaining 9,000 peak daily requests.',
      ],
    },
  ],
  projects: [
    {
      name: 'HexaBed', tech: 'Unity, C#',
      bullets: ['Built a procedural hex-grid terrain generator with GLB asset placement that removes manual level layout.'],
    },
    {
      name: '3D Portfolio and TravelAtlas', tech: 'Three.js, WebGL', links: [L.portfolio],
      webLinks: [['Portfolio', L.portfolio[1]], L.portfolioCode, L.atlas],
      bullets: ['Built a scroll-driven 3D gallery portfolio, an interactive 3D globe of 30+ travelled places, and turned my GitHub contribution graph into a playable game.'],
    },
  ],
  education,
};

// ---------------------------------------------------------------- DIGITAL MARKETING
const marketing = {
  id: 'marketing',
  tab: 'Digital Marketing',
  tabShort: 'Marketing',
  file: 'Aayush_Kumar_CV_Digital_Marketing',
  pdfTitle: 'Aayush Kumar - Digital Marketing CV',
  eyebrow: 'CV · Digital Marketing',
  headline: ['Digital Marketing', 'Social Media and Content Marketing', 'Video and YouTube Growth'],
  contacts: ['email', 'phone', 'linkedin', 'youtube', 'portfolio', 'location'],
  stats: [
    ['21,000+', 'YouTube subscribers on AKVerse'],
    ['4,500+', 'Instagram followers'],
    ['1 → 10K', 'daily active users at ARTHIS.space launch'],
    ['70+', 'games given one visual identity'],
  ],
  summary:
    'Digital marketer and content creator with a B.Tech from NIT Jaipur (2026) who builds audiences from zero. ' +
    'Grew AKVerse to 21,000+ YouTube subscribers and 4,500+ Instagram followers with storytelling-led short-form video, and led the brand, launch and growth of ARTHIS.space from 1 to 10,000 daily active users. ' +
    'Hands-on across social media marketing, content strategy, scriptwriting, video editing (Premiere Pro, After Effects), YouTube SEO, Google Analytics, AdMob and AdSense monetization, and AI-powered content automation.',
  skillsTitle: 'Core Skills',
  skills: [
    ['Marketing', 'Digital marketing, social media marketing, content marketing, content strategy, campaign planning and execution, growth marketing, organic growth, user acquisition, brand identity, product marketing, go-to-market launch, community building, audience engagement'],
    ['Content and Copy', 'Content creation, storytelling, copywriting, scriptwriting, hook writing, short-form video (YouTube Shorts, Instagram Reels), content calendar planning, bilingual content (English and Hindi)'],
    ['SEO and Analytics', 'YouTube SEO, search engine optimization (SEO), keyword research, metadata optimization, Google Analytics, Google Search Console, audience retention analysis, KPI tracking, data analysis (Python, SQL)'],
    ['Creative Tools', 'Adobe Premiere Pro, Adobe After Effects, Canva, CapCut, Blender 3D, ComfyUI, FFmpeg, video editing, graphic design, motion graphics, thumbnail design, landing page design'],
    ['Monetization', 'Google AdMob, Google AdSense, ad placement strategy, creator monetization'],
    ['AI and Automation', 'ChatGPT, Claude, Midjourney, Flux, Ideogram, MiniMax, prompt engineering, AI image and video generation, n8n workflow automation, marketing automation'],
  ],
  experience: [
    {
      title: 'Founder, Content Creator and Animator', org: 'AKVerse (YouTube and Instagram)', place: 'Jaipur', dates: 'Dec 2024 – Present',
      links: [L.youtube],
      webLinks: [['YouTube channel', L.youtube[1]]],
      bullets: [
        'Grew a creator brand to 21,000+ YouTube subscribers and 4,500+ Instagram followers with storytelling-led long-form and short-form video.',
        'Created original series (Kaleshi Family mini-drama, Dr Lodha reels) inspired by Panchayat and TMKOC, writing Hinglish scripts with hooks, cold opens and cliffhangers to lift audience retention.',
        'Wrote a full SEO pack for every upload (titles, descriptions, tags, hashtags) to grow search discovery on YouTube and Instagram.',
        'Built an AI-assisted production workflow (script, image, video, captions, After Effects, Premiere Pro) and automated YouTube Shorts with the Claude API, edge-tts, Blender and FFmpeg, shortening the publishing cycle.',
        'Designed the brand’s visual identity: 3D Blender dioramas, recurring characters, animated title cards and thumbnails; published 3D asset packs on Sketchfab.',
      ],
    },
    {
      title: 'Founder, Product and Growth', org: 'Arthis Technologies (ARTHIS.space, Arthis.Land)', place: 'Jaipur', dates: 'Jun 2026 – Present',
      links: [L.space, L.land],
      webLinks: [L.space, L.land, ['GitHub', basics.github.url]],
      bullets: [
        'Led brand, launch and growth of ARTHIS.space, a swipeable feed of 70+ browser games, scaling it from 1 to 10,000 daily active users.',
        'Planned and ran promotional campaigns, tracking traffic and engagement with Google Analytics and Google Search Console.',
        'Launched Android and iOS apps with a short-video style game feed built for engagement, monetized with AdMob.',
        'Gave 70+ games one visual identity with a 2-colour key-art system (logo and 3 story banners each) in ComfyUI.',
        'Managed brand decisions across 3 products, including app renames (Dotspace, DotLand), launcher icon redesigns and a trademark-safe game rename.',
        'Built landing and download pages for both websites, prepared them for Google AdSense, and turned my GitHub contribution graph into a playable game as a personal-brand hook.',
      ],
    },
    {
      title: 'Backend Developer Intern (AI)', org: 'Clymora', place: 'Jaipur', dates: 'Jan 2026 – Jun 2026',
      bullets: [
        'Shipped 6 AI-powered API features used by 4,500+ users at 99.8% uptime in a 4-person Agile team.',
        'Cut response time by 40% at 9,000 peak daily requests, a technical base for analytics and marketing automation.',
      ],
    },
  ],
  projects: [],
  education,
};

module.exports = { basics, versions: [software, game, marketing] };
