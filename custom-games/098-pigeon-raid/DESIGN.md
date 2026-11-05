# 098 · Pigeon Raid

> **Quiet is safe. Extract!**

`ARTHIS.space` · `Racing, Physics & Crowd` · `Solo score-chase` · `4 min` · `sand (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `pigeon-raid` → `src/offline-games/pigeon-raid.txt` |
| **Inspired by (mechanics only)** | ARC Raiders / Escape from Duckov (extraction) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `sand` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:pigeon-raid:best`, `arthis:pigeon-raid:settings` (try/catch) |

### Pitch
A squad of street pigeons raids city rooftops for shiny loot, sneaking past robot sweepers that hear noise, and flaps back to the loft before the timer runs out.

### Why it can go viral
Greedy extractions and narrow escapes.

### What makes it ours

- **Twist:** Weight vs speed.
- **Rule we invented:** Breadcrumb lure.
- **What we cut from the reference:** PvP: solo.

## 2 · Gameplay

### Core mechanic
Loot and extract.

### Rules

1. Loot weight slows you.
2. Noise attracts sweeper robots.
3. Extract at the loft.
4. Raid timer.
5. Lose loot on knock-out.

### Win / Lose
- **Win:** Extract with loot 3 times
- **Lose:** Knocked out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · E loot · Space flap | Stick · Loot · Flap |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Loot · HP · Time
- **Hint line (shown once, under 60 chars):** "Quiet is safe. Extract!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Loot), **Play Again**

### Difficulty
Easy: deaf sweepers · Normal · Hard: more sweepers and shorter timer.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Raids | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** pigeon = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF1D6/FFF1D6.png) | Far band (sky) | `#FFF1D6` |
| ![](https://placehold.co/28x28/EED5A8/EED5A8.png) | Mid band | `#EED5A8` |
| ![](https://placehold.co/28x28/E7DCC6/E7DCC6.png) | Ground / play surface | `#E7DCC6` |
| ![](https://placehold.co/28x28/6C757D/6C757D.png) | Hero | `#6C757D` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Accent / rewards | `#FF7B54` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#EED5A8"`

### Asset sheet (sizes in units)

- Pigeons: 1U
- Sweeper robots: 1.2U
- Rooftops

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** skyline
3. **Near:** roofs

### Juice

- Feathers
- Alarm
- Extraction flap
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PIGEON RAID** | Pigeons with tiny backpacks on a rooftop, title on a chimney |
| 2 · Action | **EXTRACT!** | Pigeons flapping off with loot |
| 3 · Win | **MADE IT!** | The loft piled high with shiny treasures |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/pigeon-raid.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/pigeon-raid.txt .shots/pigeon-raid --pause`, then open every PNG
- [ ] **Win path:** scripted quiet route and extraction 3 times
- [ ] **Lose path:** flap noisily into a sweeper
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Pigeon Raid  ·  slug: pigeon-raid
Brief: Solo score-chase · 4 min · palette family sand (light) · 2D canvas
Pitch: A squad of street pigeons raids city rooftops for shiny loot, sneaking past robot sweepers that hear noise, and flaps back to the loft before the timer runs out.
Core: Loot and extract.
Rules: (1) Loot weight slows you. (2) Noise attracts sweeper robots. (3) Extract at the loft. (4) Raid timer. (5) Lose loot on knock-out.
Win: Extract with loot 3 times · Lose: Knocked out
Controls: desktop WASD · E loot · Space flap · touch Stick · Loot · Flap (max 3 inputs)
HUD: Loot · HP · Time + pause
Hint: "Quiet is safe. Extract!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: deaf sweepers · Normal · Hard: more sweepers and shorter timer.
Style kit: unit = pigeon = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #EED5A8, Ground / play surface #E7DCC6, Hero #6C757D, Accent / rewards #FF7B54
Assets: Pigeons: 1U; Sweeper robots: 1.2U; Rooftops
Background bands: sky / skyline / roofs
Juice: Feathers; Alarm; Extraction flap
Feed cards: 1) Title: Pigeons with tiny backpacks on a rooftop, title on a chimney 2) EXTRACT!: Pigeons flapping off with loot 3) MADE IT!: The loft piled high with shiny treasures
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:pigeon-raid:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
