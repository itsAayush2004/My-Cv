# 076 · Little Castle Doodle

> **Draw a wall. It becomes a castle.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `endless` · `meadow (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `little-castle-doodle` → `src/offline-games/little-castle-doodle.txt` |
| **Inspired by (mechanics only)** | Tiny Glade (cosy castle doodling) |
| **Players** | Solo score-chase |
| **Session** | endless |
| **Palette family** | `meadow` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:little-castle-doodle:best`, `arthis:little-castle-doodle:settings` (try/catch) |

### Pitch
A cosy sandbox on a grassy hill. Doodle a wall and it grows battlements, towers and gates; drag out a cottage and it shapes its own roof and windows. No goals, just a castle postcard.

### Why it can go viral
Postcard-pretty creations that people screenshot.

### What makes it ours

- **Twist:** Auto details: windows, ivy and flags appear as structures grow.
- **Rule we invented:** Sheep wander and graze on any open grass.
- **What we cut from the reference:** Goals and scores: pure creation.

## 2 · Gameplay

### Core mechanic
Draw and drag to build.

### Rules

1. Draw walls; they grow battlements and towers at corners.
2. Drag house blobs; roofs and windows appear.
3. Paths auto-pave between doors.
4. Day/night slider.
5. Postcard mode hides UI.

### Win / Lose
- **Win:** (sandbox)
- **Lose:** (sandbox)

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag draw · Q tool · RMB erase | Drag · Tool · Erase |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Pieces · Tool · Time
- **Hint line (shown once, under 60 chars):** "Draw walls. Watch them grow."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Pieces), **Play Again**

### Difficulty
Pause sheet offers Morning / Golden hour / Night lighting instead of difficulty.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Max pieces | 400 |

## 3 · Look and feel (style kit)

- **Scale unit:** cottage = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/B9E4A8/B9E4A8.png) | Mid band | `#B9E4A8` |
| ![](https://placehold.co/28x28/EDE6D6/EDE6D6.png) | Ground / play surface | `#EDE6D6` |
| ![](https://placehold.co/28x28/C8553D/C8553D.png) | Hero | `#C8553D` |
| ![](https://placehold.co/28x28/F4D35E/F4D35E.png) | Accent / rewards | `#F4D35E` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#B9E4A8"`

### Asset sheet (sizes in units)

- Walls: 0.6U-thick rounded stone that auto-adds battlements
- Towers: 2U round with cone roofs
- Cottages: 1U with rounded roofs
- Sheep: 0.4U fluffy
- Flags, ivy and lanterns: small decor

### Background (three quiet hazed bands)

1. **Far:** soft blue sky
2. **Mid:** rolling hills
3. **Near:** grass meadow

### Juice

- Grow animation
- Birds fly by
- Lantern glow at night
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LITTLE CASTLE DOODLE** | A castle on a hill |
| 2 · Action | **DOODLE!** | A wall drawing itself |
| 3 · Win | **POSTCARD!** | Castle at sunset |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/little-castle-doodle.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/little-castle-doodle.txt .shots/little-castle-doodle --pause`, then open every PNG
- [ ] **Win path:** build test
- [ ] **Lose path:** n/a
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Little Castle Doodle  ·  slug: little-castle-doodle
Brief: Solo score-chase · endless · palette family meadow (light) · 3D, three.js r128 from cdnjs
Pitch: A cosy sandbox on a grassy hill. Doodle a wall and it grows battlements, towers and gates; drag out a cottage and it shapes its own roof and windows. No goals, just a castle postcard.
Core: Draw and drag to build.
Rules: (1) Draw walls; they grow battlements and towers at corners. (2) Drag house blobs; roofs and windows appear. (3) Paths auto-pave between doors. (4) Day/night slider. (5) Postcard mode hides UI.
Win: (sandbox) · Lose: (sandbox)
Controls: desktop Drag draw · Q tool · RMB erase · touch Drag · Tool · Erase (max 3 inputs)
HUD: Pieces · Tool · Time + pause
Hint: "Draw walls. Watch them grow."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Pause sheet offers Morning / Golden hour / Night lighting instead of difficulty.
Style kit: unit = cottage = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #B9E4A8, Ground / play surface #EDE6D6, Hero #C8553D, Accent / rewards #F4D35E
Assets: Walls: 0.6U-thick rounded stone that auto-adds battlements; Towers: 2U round with cone roofs; Cottages: 1U with rounded roofs; Sheep: 0.4U fluffy; Flags, ivy and lanterns: small decor
Background bands: soft blue sky / rolling hills / grass meadow
Juice: Grow animation; Birds fly by; Lantern glow at night
Feed cards: 1) Title: A castle on a hill 2) DOODLE!: A wall drawing itself 3) POSTCARD!: Castle at sunset
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:little-castle-doodle:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
