# 024 · Crate Crush

> **Stack the warehouse. Clear the lines.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `3 min` · `sand (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `crate-crush` → `src/offline-games/crate-crush.txt` |
| **Inspired by (mechanics only)** | Block Blast! (8×8 block puzzle) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `sand` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:crate-crush:best`, `arthis:crate-crush:settings` (try/catch) |

### Pitch
A warehouse forklift game: place 3 crate shapes at a time on an 8×8 floor. Full rows or columns ship out. Chain clears for combos.

### Why it can go viral
No timer and big combo bursts make it the perfect calm-but-satisfying scroll game.

### What makes it ours

- **Twist:** Fragile crates: some pieces carry a fragile tag; clearing them in a combo gives double points.
- **Rule we invented:** Truck bonus: clearing 3 lines in one move calls a truck that clears one extra random line.
- **What we cut from the reference:** Endless modes list: one classic mode.

## 2 · Gameplay

### Core mechanic
Drag 3 shapes per turn onto the grid; complete rows/columns to clear.

### Rules

1. 3 shapes appear per turn; place all to get new ones.
2. Full row or column clears.
3. Multiple lines in one move = combo multiplier.
4. Clearing on consecutive moves = streak bonus.
5. Game over when none of the remaining shapes fit.

### Win / Lose
- **Win:** Beat your best score
- **Lose:** No remaining shape fits

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag shapes · R rotate (Easy only) · Space hint | Drag · Rotate (Easy) · Hint |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Score · Best · Combo
- **Hint line (shown once, under 60 chars):** "Clear lines. Chain combos!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Score), **Play Again**

### Difficulty
Easy: rotation allowed · Normal: no rotation · Hard: bigger shapes more often.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Grid | 8 × 8 |
| Shapes per turn | 3 |
| Combo multiplier | +50% per extra line |
| Streak bonus | +10 per move |

## 3 · Look and feel (style kit)

- **Scale unit:** cell = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF1D6/FFF1D6.png) | Far band (sky) | `#FFF1D6` |
| ![](https://placehold.co/28x28/F4C47A/F4C47A.png) | Mid band | `#F4C47A` |
| ![](https://placehold.co/28x28/EBD3A5/EBD3A5.png) | Ground / play surface | `#EBD3A5` |
| ![](https://placehold.co/28x28/E07A5F/E07A5F.png) | Hero | `#E07A5F` |
| ![](https://placehold.co/28x28/3D9A8B/3D9A8B.png) | Accent / rewards | `#3D9A8B` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#F4C47A"`

### Asset sheet (sizes in units)

- Crates: 1U rounded cubes, wood colour with lighter top face, painted stripes for colours
- Grid floor: rounded concrete tiles
- Truck: 3U rounded delivery van

### Background (three quiet hazed bands)

1. **Far:** warm warehouse light haze
2. **Mid:** shelves of boxes
3. **Near:** floor edge

### Juice

- Crates thump into place
- Line clear slides out with wood chips
- Combo text slams
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CRATE CRUSH** | A cheerful forklift beside an 8×8 crate grid, title stencilled on a crate |
| 2 · Action | **COMBO!** | Three lines bursting at once |
| 3 · Win | **NEW BEST!** | Truck driving away with crates and confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/crate-crush.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/crate-crush.txt .shots/crate-crush --pause`, then open every PNG
- [ ] **Win path:** seeded shapes with known placements to beat a set best
- [ ] **Lose path:** place shapes randomly until no fit
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Crate Crush  ·  slug: crate-crush
Brief: Solo score-chase · 3 min · palette family sand (light) · 2D canvas
Pitch: A warehouse forklift game: place 3 crate shapes at a time on an 8×8 floor. Full rows or columns ship out. Chain clears for combos.
Core: Drag 3 shapes per turn onto the grid; complete rows/columns to clear.
Rules: (1) 3 shapes appear per turn; place all to get new ones. (2) Full row or column clears. (3) Multiple lines in one move = combo multiplier. (4) Clearing on consecutive moves = streak bonus. (5) Game over when none of the remaining shapes fit.
Win: Beat your best score · Lose: No remaining shape fits
Controls: desktop Drag shapes · R rotate (Easy only) · Space hint · touch Drag · Rotate (Easy) · Hint (max 3 inputs)
HUD: Score · Best · Combo + pause
Hint: "Clear lines. Chain combos!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: rotation allowed · Normal: no rotation · Hard: bigger shapes more often.
Style kit: unit = cell = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F4C47A, Ground / play surface #EBD3A5, Hero #E07A5F, Accent / rewards #3D9A8B
Assets: Crates: 1U rounded cubes, wood colour with lighter top face, painted stripes for colours; Grid floor: rounded concrete tiles; Truck: 3U rounded delivery van
Background bands: warm warehouse light haze / shelves of boxes / floor edge
Juice: Crates thump into place; Line clear slides out with wood chips; Combo text slams
Feed cards: 1) Title: A cheerful forklift beside an 8×8 crate grid, title stencilled on a crate 2) COMBO!: Three lines bursting at once 3) NEW BEST!: Truck driving away with crates and confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:crate-crush:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
