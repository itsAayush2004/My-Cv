"""Builds every ARTHIS custom-game doc from data_*.py.  Run: python3 build.py"""
import glob, importlib.util, json, os, re
HERE = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.dirname(HERE)
CATS = {"party":"Party & Social","rogue":"Roguelites & Survivors","puzzle":"Puzzle & Casual","idle":"Idle, Cosy & Tycoon",
        "action":"Action & Platformers","versus":"Versus & Sports","horror":"Spooky & Mystery","builder":"Builders & Strategy",
        "rpg":"RPG, Cards & Tactics","drive":"Racing, Physics & Crowd"}
FAM = {"meadow":"light","candy":"light","sand":"light","ocean":"light","snow":"light","jungle":"light","paper":"light","peach":"light",
       "night":"dark","arcade":"dark","space":"dark","ember":"dark","spooky":"dark"}
MODE = {"S":"Solo score-chase","C":"vs CPU","C2":"vs CPU | 2 Players (local)"}
PAL_ROLES = ["Far band (sky)","Mid band","Ground / play surface","Hero","Accent / rewards"]
def slug(s): return re.sub(r"[^a-z0-9]+","-",s.lower()).strip("-")

def load():
    G=[]
    for f in sorted(glob.glob(os.path.join(HERE,"data_*.py"))):
        s=importlib.util.spec_from_file_location("m",f); m=importlib.util.module_from_spec(s); s.loader.exec_module(m); G+=m.GAMES
    E={}
    for f in sorted(glob.glob(os.path.join(HERE,"enrich_*.py"))):
        s=importlib.util.spec_from_file_location("e",f); m=importlib.util.module_from_spec(s); s.loader.exec_module(m)
        for k,v in m.E.items(): E.setdefault(k,{}).update(v)
    for g in G:
        if g["id"] in E: g.update(E[g["id"]])
    seen=set()
    for g in G:
        g["slug"]=slug(g["name"]); g["folder"]=f'{g["id"]:03d}-{g["slug"]}'; g["category"]=CATS[g["cat"]]
        assert g["id"] not in seen, g["id"]; seen.add(g["id"])
        assert len(g["hint"])<60, (g["id"],g["hint"]); assert len(g["hud"])==3, g["id"]; assert g["fam"] in FAM, g["id"]
        assert len(g["pal"])==5 and len(g["cards"])==3, g["id"]
    return sorted(G,key=lambda g:g["id"])

def tech(g): return "3D, three.js r128 from cdnjs" if g["dim"]=="3D" else "2D canvas"
def pause(g): return "Resume · Restart · "+("vs CPU | 2 Players · " if g["mode"]=="C2" else "")+"Easy | Normal | Hard"

def prompt(g):
    return "\n".join([
      f'ARTHIS GAME: {g["name"]}  ·  slug: {g["slug"]}',
      f'Brief: {MODE[g["mode"]]} · {g["sess"]} · palette family {g["fam"]} ({FAM[g["fam"]]}) · {tech(g)}',
      f'Pitch: {g["pitch"]}',
      f'Core: {g["core"]}',
      "Rules: " + " ".join(f"({i}) {r}" for i,r in enumerate(g["rules"],1)),
      f'Win: {g["win"]} · Lose: {g["lose"]}',
      f'Controls: desktop {g["ctrl"][0]} · touch {g["ctrl"][1]} (max 3 inputs)',
      f'HUD: {" · ".join(g["hud"])} + pause',
      f'Hint: "{g["hint"]}"',
      f'Pause sheet: {pause(g)}. Difficulty changes: {g["diff"]}',
      f'Style kit: unit = {g["unit"]}; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.',
      "Palette: " + ", ".join(f"{r} {h}" for r,h in zip(PAL_ROLES,g["pal"])),
      "Assets: " + "; ".join(g["assets"]),
      "Background bands: " + " / ".join(g["bands"]),
      "Juice: " + "; ".join(g["juice"]),
      f'Feed cards: 1) Title: {g["cards"][0][1]} 2) {g["cards"][1][0]}: {g["cards"][1][1]} 3) {g["cards"][2][0]}: {g["cards"][2][1]}',
      f'House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:{g["slug"]}:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.'])

def md(g):
    L=[]; a=L.append
    a(f'# {g["id"]:03d} · {g["name"]}\n')
    a(f'> **{g["tag"]}**\n')
    a(f'`ARTHIS.space` · `{g["category"]}` · `{MODE[g["mode"]]}` · `{g["sess"]}` · `{g["fam"]} ({FAM[g["fam"]]})` · `{tech(g)}`\n')
    a("## 1 · The brief\n")
    a("| | |\n|---|---|")
    for k,v in [("Slug",f'`{g["slug"]}` → `src/offline-games/{g["slug"]}.txt`'),("Inspired by (mechanics only)",g["insp"]),("Players",MODE[g["mode"]]),
                ("Session",g["sess"]),("Palette family",f'`{g["fam"]}` ({FAM[g["fam"]]})'),("Tech",tech(g)+", Poppins, single HTML file"),
                ("Storage",f'`arthis:{g["slug"]}:best`, `arthis:{g["slug"]}:settings` (try/catch)')]:
        a(f"| **{k}** | {v} |")
    a(f'\n### Pitch\n{g["pitch"]}\n')
    a(f'### Why it can go viral\n{g["hook"]}\n')
    a("### What makes it ours\n")
    a(f'- **Twist:** {g["twist"]}\n- **Rule we invented:** {g["invent"]}\n- **What we cut from the reference:** {g["cut"]}\n')
    a("## 2 · Gameplay\n")
    a(f'### Core mechanic\n{g["core"]}\n')
    a("### Rules\n"); [a(f"{i}. {r}") for i,r in enumerate(g["rules"],1)]
    a(f'\n### Win / Lose\n- 🏆 **Win:** {g["win"]}\n- 💥 **Lose:** {g["lose"]}\n'.replace("🏆 ","").replace("💥 ",""))
    a("### Controls (max 3 inputs)\n\n| Desktop | Touch |\n|---|---|")
    a(f'| {g["ctrl"][0]} | {g["ctrl"][1]} |\n')
    a("### HUD, hint and sheets\n")
    a(f'- **HUD (3 stats + pause, glass panels):** {" · ".join(g["hud"])}')
    a(f'- **Hint line (shown once, under 60 chars):** "{g["hint"]}"')
    a(f'- **Pause sheet:** {pause(g)}')
    a(f'- **End sheet:** result, best ({g["hud"][0]}), **Play Again**\n')
    a(f'### Difficulty\n{g["diff"]}\n')
    a("### Tuning (starting values)\n\n| Parameter | Value |\n|---|---|"); [a(f"| {k} | {v} |") for k,v in g["tune"]]
    a("\n## 3 · Look and feel (style kit)\n")
    a(f'- **Scale unit:** {g["unit"]}\n- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.\n- **Light:** top-left, one soft contact shadow under every object.\n- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).\n- **Attention order:** play area → obstacles/pieces → player → background.\n- **Minimum size:** nothing under ~6 px on a phone.\n')
    a("### Palette\n\n| Swatch | Role | Hex |\n|---|---|---|")
    for r,h in zip(PAL_ROLES,g["pal"]): a(f'| ![](https://placehold.co/28x28/{h[1:]}/{h[1:]}.png) | {r} | `{h}` |')
    a(f'\nCatalog colours: `bgColorLight: "{g["pal"][0]}"`, `bgColorDark: "{g["pal"][1]}"`\n')
    a("### Asset sheet (sizes in units)\n"); [a(f"- {x}") for x in g["assets"]]
    a("\n### Background (three quiet hazed bands)\n"); [a(f"{i}. **{n}:** {d}") for i,(n,d) in enumerate(zip(["Far","Mid","Near"],g["bands"]),1)]
    a("\n### Juice\n"); [a(f"- {x}") for x in g["juice"]+["Squash and stretch on landings and impacts","Number pops on every score change","Light screen shake + 40–80 ms hit-stop on big moments"]]
    a("\n### Phone scaling\nCap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.\n")
    a("## 4 · Feed cards\n\n| Card | Big word | Scene |\n|---|---|---|")
    for n,(w,s) in zip(["1 · Title","2 · Action","3 · Win"],g["cards"]): a(f"| {n} | **{w}** | {s} |")
    a("\n## 5 · Gate and test plan\n")
    a(f'- [ ] `node scripts/game-lint.mjs src/offline-games/{g["slug"]}.txt`\n- [ ] `node scripts/game-shots.cjs src/offline-games/{g["slug"]}.txt .shots/{g["slug"]} --pause`, then open every PNG\n- [ ] **Win path:** {g["test"][0]}\n- [ ] **Lose path:** {g["test"][1]}\n- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s\n- [ ] The scene reads as ONE world on phone and laptop\n')
    a("## 6 · Paste-ready ARTHIS prompt\n\n```text\n"+prompt(g)+"\n```\n")
    a("---\n*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*\n")
    return "\n".join(L)

def main():
    G=load()
    for g in G:
        d=os.path.join(OUT,g["folder"]); os.makedirs(d,exist_ok=True)
        open(os.path.join(d,"DESIGN.md"),"w").write(md(g)); g["arthis_prompt"]=prompt(g)
    json.dump(G,open(os.path.join(OUT,"games.json"),"w"),indent=2,ensure_ascii=False)
    R=["# 100 Custom Viral Games · ARTHIS.space Design Pack\n",
       "One hundred **original** ARTHIS mini-games. Each one takes the mechanic behind a viral hit from 2020–2026 and gives it a new name, world, twist, palette and style kit, built to the ARTHIS.space house standard (instant start, no menus, max 3 inputs, a 3-stat HUD, one cohesive rounded art set).\n",
       "| | |\n|---|---|",
       "| **House rules** | [ARTHIS-STYLE.md](ARTHIS-STYLE.md) |",
       "| **Visual catalog** | [catalog.html](catalog.html): open in a browser |",
       "| **Data** | [games.json](games.json) |",
       "| **Regenerate** | `python3 _source/build.py` (edit `_source/data_*.py`) |\n",
       "Each `DESIGN.md` has: brief table · pitch · viral hook · twist / invented rule / what we cut · core mechanic · rules · win/lose · controls · HUD + hint + sheets · difficulty · tuning · style kit · palette swatches · asset sheet · 3 background bands · juice · phone scaling · 3 feed cards · gate and test plan · paste-ready ARTHIS prompt.\n"]
    for c,cn in CATS.items():
        R.append(f"\n## {cn}\n\n| # | Game | Tagline | Players · Session | Palette | Inspired by |\n|---|---|---|---|---|---|")
        for g in [x for x in G if x["cat"]==c]:
            R.append(f'| {g["id"]:03d} | [**{g["name"]}**]({g["folder"]}/DESIGN.md) | {g["tag"]} | {MODE[g["mode"]]} · {g["sess"]} | `{g["fam"]}` | {g["insp"]} |')
    open(os.path.join(OUT,"README.md"),"w").write("\n".join(R)+"\n")
    print(len(G),"games built")
main()

def catalog():
    G=load()
    for g in G: g["arthis_prompt"]=prompt(g)
    keep=["id","cat","category","name","slug","tag","insp","mode","sess","fam","dim","pal","pitch","hook","twist","invent","cut","core","rules","win","lose","ctrl","hud","hint","diff","assets","cards","arthis_prompt"]
    data=[{k:g[k] for k in keep} for g in G]
    t=open(os.path.join(HERE,"catalog_template.html")).read()
    t=t.replace("__GAMES__",json.dumps(data,ensure_ascii=False).replace("</","<\\/")).replace("__CATS__",json.dumps(CATS)).replace("__MODES__",json.dumps(MODE))
    open(os.path.join(OUT,"catalog.html"),"w").write(t)
    print("catalog.html", len(t)//1024, "KB")
catalog()
