# 100 · Crowd Math Run

> **Pick the bigger gate.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `Solo score-chase` · `60 s` · `ocean (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `crowd-math-run` → `src/offline-games/crowd-math-run.txt` |
| **Inspired by (mechanics only)** | Last War / runner gate-math ads |
| **Players** | Solo score-chase |
| **Session** | 60 s |
| **Palette family** | `ocean` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:crowd-math-run:best`, `arthis:crowd-math-run:settings` (try/catch) |

### Pitch
Steer a running crowd through maths gates (×2, +10, −5), clash with enemy crowds, cross bridges that need a minimum crowd, and storm a castle at the end of 3 levels.

### Why it can go viral
The gate maths everyone has seen in ads, finally playable properly.

### What makes it ours

- **Twist:** Gates move.
- **Rule we invented:** Bridge planks need 20 runners.
- **What we cut from the reference:** Base building: just the run.

## 2 · Gameplay

### Core mechanic
Steer left/right.

### Rules

1. Gates modify the crowd (×2, +10, −5).
2. Enemy crowds subtract from yours.
3. The castle needs crowd > its HP.
4. Bridges need a minimum crowd.
5. 3 levels.

### Win / Lose
- **Win:** Storm the castle
- **Lose:** Crowd 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| A/D or mouse drag · Space dash · — | Drag |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Crowd · Gates · Distance
- **Hint line (shown once, under 60 chars):** "Pick the bigger gate!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Crowd), **Play Again**

### Difficulty
Easy: friendly gates · Normal · Hard: moving gates and bigger enemy crowds.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Levels | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** runner = 0.3U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/A5D8F3/A5D8F3.png) | Mid band | `#A5D8F3` |
| ![](https://placehold.co/28x28/EAF4FA/EAF4FA.png) | Ground / play surface | `#EAF4FA` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FFC857/FFC857.png) | Accent / rewards | `#FFC857` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#A5D8F3"`

### Asset sheet (sizes in units)

- Runners: 0.3U
- Gates: 2U arches
- Castle: 6U

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** sea
3. **Near:** track

### Juice

- Crowd multiply pop
- Clash
- Castle collapse
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CROWD MATH RUN** | A crowd charging toward glowing ×2 and +10 gates, title on the gate |
| 2 · Action | **×2!** | The crowd doubling in a burst |
| 3 · Win | **CASTLE TAKEN!** | Castle crumbling under a wave of runners |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/crowd-math-run.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/crowd-math-run.txt .shots/crowd-math-run --pause`, then open every PNG
- [ ] **Win path:** scripted gate choices reaching the castle
- [ ] **Lose path:** always pick negative gates
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Crowd Math Run  ·  slug: crowd-math-run
Brief: Solo score-chase · 60 s · palette family ocean (light) · 3D, three.js r128 from cdnjs
Pitch: Steer a running crowd through maths gates (×2, +10, −5), clash with enemy crowds, cross bridges that need a minimum crowd, and storm a castle at the end of 3 levels.
Core: Steer left/right.
Rules: (1) Gates modify the crowd (×2, +10, −5). (2) Enemy crowds subtract from yours. (3) The castle needs crowd > its HP. (4) Bridges need a minimum crowd. (5) 3 levels.
Win: Storm the castle · Lose: Crowd 0
Controls: desktop A/D or mouse drag · Space dash · — · touch Drag (max 3 inputs)
HUD: Crowd · Gates · Distance + pause
Hint: "Pick the bigger gate!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: friendly gates · Normal · Hard: moving gates and bigger enemy crowds.
Style kit: unit = runner = 0.3U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #A5D8F3, Ground / play surface #EAF4FA, Hero #2F80ED, Accent / rewards #FFC857
Assets: Runners: 0.3U; Gates: 2U arches; Castle: 6U
Background bands: sky / sea / track
Juice: Crowd multiply pop; Clash; Castle collapse
Feed cards: 1) Title: A crowd charging toward glowing ×2 and +10 gates, title on the gate 2) ×2!: The crowd doubling in a burst 3) CASTLE TAKEN!: Castle crumbling under a wave of runners
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:crowd-math-run:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
