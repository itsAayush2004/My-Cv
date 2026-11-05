# 074 · Hamlet Roads

> **Draw a road. A village grows.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `8 min` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `hamlet-roads` → `src/offline-games/hamlet-roads.txt` |
| **Inspired by (mechanics only)** | Manor Lords (organic town builder) |
| **Players** | Solo score-chase |
| **Session** | 8 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:hamlet-roads:best`, `arthis:hamlet-roads:settings` (try/catch) |

### Pitch
Draw winding roads across a green valley and watch cottages fill the plots along them. Give families jobs, stock food and firewood before winter, and grow the hamlet to 30 families.

### Why it can go viral
Organic villages look beautiful and every one is different.

### What makes it ours

- **Twist:** No grid at all: plots follow the curve of the roads you draw.
- **Rule we invented:** Market day every season boosts approval for 20 s.
- **What we cut from the reference:** Battles and armies: peaceful growth only.

## 2 · Gameplay

### Core mechanic
Draw roads, zone plots, assign jobs.

### Rules

1. Families need food and firewood.
2. Winter doubles firewood use.
3. Approval affects how fast families arrive.
4. Jobs: farm, woodcutter, market, well.
5. Reach 30 families.

### Win / Lose
- **Win:** 30 families by year 2
- **Lose:** Approval 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag road · click build · Q assign | Drag · tap · Assign |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Families · Food · Approval
- **Hint line (shown once, under 60 chars):** "Draw roads. Plots fill in."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Families), **Play Again**

### Difficulty
Easy: mild winters, fast arrivals · Normal · Hard: harsh winters (firewood ×3) and slower approval.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Year | 4 seasons × 45 s |
| Goal | 30 families |
| Winter firewood | ×2 |
| Plot width | 1–2U |

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
| ![](https://placehold.co/28x28/B5E0A0/B5E0A0.png) | Mid band | `#B5E0A0` |
| ![](https://placehold.co/28x28/E9E2C8/E9E2C8.png) | Ground / play surface | `#E9E2C8` |
| ![](https://placehold.co/28x28/B5651D/B5651D.png) | Hero | `#B5651D` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#B5E0A0"`

### Asset sheet (sizes in units)

- Cottage: 1U rounded thatch with a lighter roof top
- Farm field: 3U rounded patch with crop rows
- Woodcutter hut 1.2U, market stall 1U, well 0.6U
- Villagers: 0.3U tiny walkers
- Trees: 1.5U rounded

### Background (three quiet hazed bands)

1. **Far:** clear sky
2. **Mid:** green hills
3. **Near:** meadow with flowers

### Juice

- Houses pop up
- Season tints
- Market bell
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HAMLET ROADS** | A curvy village in a green valley |
| 2 · Action | **BUILD!** | A road drawn with plots appearing |
| 3 · Win | **TOWN THRIVES!** | Snowy village glowing |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/hamlet-roads.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/hamlet-roads.txt .shots/hamlet-roads --pause`, then open every PNG
- [ ] **Win path:** scripted roads and jobs to 30 families
- [ ] **Lose path:** no food
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Hamlet Roads  ·  slug: hamlet-roads
Brief: Solo score-chase · 8 min · palette family meadow (light) · 2D canvas
Pitch: Draw winding roads across a green valley and watch cottages fill the plots along them. Give families jobs, stock food and firewood before winter, and grow the hamlet to 30 families.
Core: Draw roads, zone plots, assign jobs.
Rules: (1) Families need food and firewood. (2) Winter doubles firewood use. (3) Approval affects how fast families arrive. (4) Jobs: farm, woodcutter, market, well. (5) Reach 30 families.
Win: 30 families by year 2 · Lose: Approval 0
Controls: desktop Drag road · click build · Q assign · touch Drag · tap · Assign (max 3 inputs)
HUD: Families · Food · Approval + pause
Hint: "Draw roads. Plots fill in."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: mild winters, fast arrivals · Normal · Hard: harsh winters (firewood ×3) and slower approval.
Style kit: unit = cottage = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #B5E0A0, Ground / play surface #E9E2C8, Hero #B5651D, Accent / rewards #FFD166
Assets: Cottage: 1U rounded thatch with a lighter roof top; Farm field: 3U rounded patch with crop rows; Woodcutter hut 1.2U, market stall 1U, well 0.6U; Villagers: 0.3U tiny walkers; Trees: 1.5U rounded
Background bands: clear sky / green hills / meadow with flowers
Juice: Houses pop up; Season tints; Market bell
Feed cards: 1) Title: A curvy village in a green valley 2) BUILD!: A road drawn with plots appearing 3) TOWN THRIVES!: Snowy village glowing
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:hamlet-roads:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
