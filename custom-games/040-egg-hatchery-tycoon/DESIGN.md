# 040 · Egg Hatchery Tycoon

> **Hatch, merge, upgrade, repeat.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `endless` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `egg-hatchery-tycoon` → `src/offline-games/egg-hatchery-tycoon.txt` |
| **Inspired by (mechanics only)** | Pet Simulator / idle hatchers (Roblox) |
| **Players** | Solo score-chase |
| **Session** | endless |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:egg-hatchery-tycoon:best`, `arthis:egg-hatchery-tycoon:settings` (try/catch) |

### Pitch
Tap eggs to hatch cute pets that earn coins. Merge 3 of the same pet into a stronger one, unlock new egg biomes, and fill the pet book.

### Why it can go viral
Rare hatch animations (golden glow, shiny pets) are classic share moments.

### What makes it ours

- **Twist:** Lucky hour: every 2 minutes a 15-second lucky window boosts rare odds.
- **Rule we invented:** Pet parade: equip 5 pets that walk behind you and boost different stats.
- **What we cut from the reference:** Trading and online: solo collection.

## 2 · Gameplay

### Core mechanic
Tap to hatch eggs with coins, merge pets, unlock biomes.

### Rules

1. Eggs cost coins and show odds.
2. Pets earn passive coins.
3. 3 same pets merge into the next tier.
4. Biomes: meadow, beach, snow, candy, space.
5. Pet book tracks 30 pets.

### Win / Lose
- **Win:** (idle) fill the pet book
- **Lose:** none

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click egg · M merge · Space hatch ×3 | Tap egg · Merge · ×3 |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Pets · Biome
- **Hint line (shown once, under 60 chars):** "Hatch eggs. Merge three!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
n/a

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Pets | 30 |
| Merge | 3 → 1 |
| Lucky hour | 15 s every 2 min |

## 3 · Look and feel (style kit)

- **Scale unit:** pet = 0.6U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/FFD3B6/FFD3B6.png) | Mid band | `#FFD3B6` |
| ![](https://placehold.co/28x28/FFF7EF/FFF7EF.png) | Ground / play surface | `#FFF7EF` |
| ![](https://placehold.co/28x28/F67E7D/F67E7D.png) | Hero | `#F67E7D` |
| ![](https://placehold.co/28x28/6BCB77/6BCB77.png) | Accent / rewards | `#6BCB77` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#FFD3B6"`

### Asset sheet (sizes in units)

- Eggs: 1U rounded with biome patterns
- Pets: 0.6U rounded critters
- Hatchery: rounded incubator machine

### Background (three quiet hazed bands)

1. **Far:** peach sky haze
2. **Mid:** biome silhouettes
3. **Near:** hatchery floor

### Juice

- Egg wobble and crack
- Rare hatch spotlight
- Merge swirl
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **EGG HATCHERY TYCOON** | A giant golden egg in a cosy hatchery, title on a sign |
| 2 · Action | **HATCH!** | Egg cracking with rainbow light |
| 3 · Win | **SHINY!** | A rare sparkling pet |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/egg-hatchery-tycoon.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/egg-hatchery-tycoon.txt .shots/egg-hatchery-tycoon --pause`, then open every PNG
- [ ] **Win path:** simulate coin income and hatches to fill the book in a test copy
- [ ] **Lose path:** n/a
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Egg Hatchery Tycoon  ·  slug: egg-hatchery-tycoon
Brief: Solo score-chase · endless · palette family peach (light) · 2D canvas
Pitch: Tap eggs to hatch cute pets that earn coins. Merge 3 of the same pet into a stronger one, unlock new egg biomes, and fill the pet book.
Core: Tap to hatch eggs with coins, merge pets, unlock biomes.
Rules: (1) Eggs cost coins and show odds. (2) Pets earn passive coins. (3) 3 same pets merge into the next tier. (4) Biomes: meadow, beach, snow, candy, space. (5) Pet book tracks 30 pets.
Win: (idle) fill the pet book · Lose: none
Controls: desktop Click egg · M merge · Space hatch ×3 · touch Tap egg · Merge · ×3 (max 3 inputs)
HUD: Coins · Pets · Biome + pause
Hint: "Hatch eggs. Merge three!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: n/a
Style kit: unit = pet = 0.6U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #FFD3B6, Ground / play surface #FFF7EF, Hero #F67E7D, Accent / rewards #6BCB77
Assets: Eggs: 1U rounded with biome patterns; Pets: 0.6U rounded critters; Hatchery: rounded incubator machine
Background bands: peach sky haze / biome silhouettes / hatchery floor
Juice: Egg wobble and crack; Rare hatch spotlight; Merge swirl
Feed cards: 1) Title: A giant golden egg in a cosy hatchery, title on a sign 2) HATCH!: Egg cracking with rainbow light 3) SHINY!: A rare sparkling pet
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:egg-hatchery-tycoon:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
