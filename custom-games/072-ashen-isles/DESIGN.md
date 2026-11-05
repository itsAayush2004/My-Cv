# 072 · Ashen Isles

> **Chop, build, beat the biome boss.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `6 min` · `snow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `ashen-isles` → `src/offline-games/ashen-isles.txt` |
| **Inspired by (mechanics only)** | Valheim (survival with boss progression) |
| **Players** | Solo score-chase |
| **Session** | 6 min |
| **Palette family** | `snow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:ashen-isles:best`, `arthis:ashen-isles:settings` (try/catch) |

### Pitch
A side-view survival builder across 3 small northern isles. Build a hut with stability colours, craft gear, then summon and beat each isle's boss to unlock the next.

### Why it can go viral
Build-then-boss progression: proud hut screenshots and boss kills.

### What makes it ours

- **Twist:** Stability colours: pieces far from the ground turn red and collapse.
- **Rule we invented:** Rested buff: sleeping in a hut with a fire gives 30% stamina regen.
- **What we cut from the reference:** Open 3D world: 3 isles side-view.

## 2 · Gameplay

### Core mechanic
Gather, build, craft, fight the boss.

### Rules

1. Building pieces need support; far pieces turn red and collapse.
2. Food (berries, meat, stew) raises max HP and stamina.
3. Boss altars need offerings (antlers, troll hide, frost gem).
4. Night raids hit your hut.
5. Beat isle 3's boss to win.

### Win / Lose
- **Win:** Beat the isle 3 boss
- **Lose:** HP 0 three times

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| A/D · J action · K build | Stick · Action · Build |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Wood · Isle
- **Hint line (shown once, under 60 chars):** "Build, eat, then fight the boss."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy · Normal · Hard (raid size).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Isles | 3 |
| Day | 60 s |
| Food slots | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** viking = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/EEF6FF/EEF6FF.png) | Far band (sky) | `#EEF6FF` |
| ![](https://placehold.co/28x28/C3D5E6/C3D5E6.png) | Mid band | `#C3D5E6` |
| ![](https://placehold.co/28x28/DDE6EE/DDE6EE.png) | Ground / play surface | `#DDE6EE` |
| ![](https://placehold.co/28x28/6C9BD2/6C9BD2.png) | Hero | `#6C9BD2` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Accent / rewards | `#FF7B54` |

Catalog colours: `bgColorLight: "#EEF6FF"`, `bgColorDark: "#C3D5E6"`

### Asset sheet (sizes in units)

- Viking: 1U with axe parented to hand
- Build pieces: rounded log walls, roofs, doors
- Stag boss 3U, troll 4U, frost wyrm 5U
- Fires and beds

### Background (three quiet hazed bands)

1. **Far:** pale sky
2. **Mid:** snowy mountains
3. **Near:** snowy ground

### Juice

- Wood chips fly
- Collapse dust
- Boss roar shake
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **ASHEN ISLES** | A viking before a snowy hut, title on a rune stone |
| 2 · Action | **BUILD!** | Hut rising piece by piece |
| 3 · Win | **BOSS SLAIN!** | Viking on the frost wyrm |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/ashen-isles.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/ashen-isles.txt .shots/ashen-isles --pause`, then open every PNG
- [ ] **Win path:** scripted gather/build/boss path
- [ ] **Lose path:** stand in night raids
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Ashen Isles  ·  slug: ashen-isles
Brief: Solo score-chase · 6 min · palette family snow (light) · 2D canvas
Pitch: A side-view survival builder across 3 small northern isles. Build a hut with stability colours, craft gear, then summon and beat each isle's boss to unlock the next.
Core: Gather, build, craft, fight the boss.
Rules: (1) Building pieces need support; far pieces turn red and collapse. (2) Food (berries, meat, stew) raises max HP and stamina. (3) Boss altars need offerings (antlers, troll hide, frost gem). (4) Night raids hit your hut. (5) Beat isle 3's boss to win.
Win: Beat the isle 3 boss · Lose: HP 0 three times
Controls: desktop A/D · J action · K build · touch Stick · Action · Build (max 3 inputs)
HUD: HP · Wood · Isle + pause
Hint: "Build, eat, then fight the boss."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (raid size).
Style kit: unit = viking = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #EEF6FF, Mid band #C3D5E6, Ground / play surface #DDE6EE, Hero #6C9BD2, Accent / rewards #FF7B54
Assets: Viking: 1U with axe parented to hand; Build pieces: rounded log walls, roofs, doors; Stag boss 3U, troll 4U, frost wyrm 5U; Fires and beds
Background bands: pale sky / snowy mountains / snowy ground
Juice: Wood chips fly; Collapse dust; Boss roar shake
Feed cards: 1) Title: A viking before a snowy hut, title on a rune stone 2) BUILD!: Hut rising piece by piece 3) BOSS SLAIN!: Viking on the frost wyrm
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:ashen-isles:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
