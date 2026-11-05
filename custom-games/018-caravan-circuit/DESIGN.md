# 018 · Caravan Circuit

> **The caravan walks. You build the road.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `4 min` · `sand (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `caravan-circuit` → `src/offline-games/caravan-circuit.txt` |
| **Inspired by (mechanics only)** | Loop Hero (auto-walk tile placement) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `sand` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:caravan-circuit:best`, `arthis:caravan-circuit:settings` (try/catch) |

### Pitch
A merchant caravan loops around a desert road on its own. You place tile cards: oases heal, bandit camps drop loot, dunes add HP. Survive 4 loops and the Sand Wyrm.

### Why it can go viral
The 'my perfect board' screenshot: everyone's road looks different.

### What makes it ours

- **Twist:** The camel's mood: placing too many dangerous tiles in a row makes the camel stubborn and slow.
- **Rule we invented:** Mirage tiles copy the effect of a neighbouring tile at half strength.
- **What we cut from the reference:** Classes and base camp meta: one caravan, 4 loops.

## 2 · Gameplay

### Core mechanic
Drag tile cards around the loop; the caravan auto-fights and auto-heals based on your placements.

### Rules

1. Bandit camps spawn fights and loot; oases heal 10% per pass.
2. 3 dunes in a row make a dune ridge (+15% max HP).
3. Loot auto-equips if better.
4. After 12 tiles the Sand Wyrm appears on the loop.
5. Retreat at camp keeps loot; death keeps 40%.

### Win / Lose
- **Win:** Defeat the Sand Wyrm
- **Lose:** Caravan HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag tiles · Space speed · R retreat | Drag · Speed · Retreat |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Loop · Loot
- **Hint line (shown once, under 60 chars):** "Place tiles. The caravan walks."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: bandits weaker · Normal · Hard: wyrm at 10 tiles.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Loop length | 24 tiles |
| Wyrm trigger | 12 tiles placed |
| Oasis heal | 10% |
| Speed | 1 tile/s |

## 3 · Look and feel (style kit)

- **Scale unit:** camel height = 1U
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

- Caravan: camel 1U + merchant rider seated on it + cart 1U
- Tiles: 1U rounded squares (oasis, dune, camp, ruin)
- Bandits: 0.8U chunky silhouettes
- Sand Wyrm: 5U curling body made of rounded segments

### Background (three quiet hazed bands)

1. **Far:** warm sky haze
2. **Mid:** far mesas
3. **Near:** dune ripples

### Juice

- Tiles thump into place
- Loot jingles
- Wyrm emerges with a sand burst
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CARAVAN CIRCUIT** | A camel caravan on a desert loop road, title on a hanging cloth banner |
| 2 · Action | **PLACE!** | A hand placing an oasis tile next to the road |
| 3 · Win | **WYRM SLAIN!** | The caravan cheering on the coiled wyrm |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/caravan-circuit.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/caravan-circuit.txt .shots/caravan-circuit --pause`, then open every PNG
- [ ] **Win path:** place oasis/dune ridge every 3 tiles; beat the wyrm
- [ ] **Lose path:** place only bandit camps
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Caravan Circuit  ·  slug: caravan-circuit
Brief: Solo score-chase · 4 min · palette family sand (light) · 2D canvas
Pitch: A merchant caravan loops around a desert road on its own. You place tile cards: oases heal, bandit camps drop loot, dunes add HP. Survive 4 loops and the Sand Wyrm.
Core: Drag tile cards around the loop; the caravan auto-fights and auto-heals based on your placements.
Rules: (1) Bandit camps spawn fights and loot; oases heal 10% per pass. (2) 3 dunes in a row make a dune ridge (+15% max HP). (3) Loot auto-equips if better. (4) After 12 tiles the Sand Wyrm appears on the loop. (5) Retreat at camp keeps loot; death keeps 40%.
Win: Defeat the Sand Wyrm · Lose: Caravan HP 0
Controls: desktop Drag tiles · Space speed · R retreat · touch Drag · Speed · Retreat (max 3 inputs)
HUD: HP · Loop · Loot + pause
Hint: "Place tiles. The caravan walks."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: bandits weaker · Normal · Hard: wyrm at 10 tiles.
Style kit: unit = camel height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F4C47A, Ground / play surface #EBD3A5, Hero #E07A5F, Accent / rewards #3D9A8B
Assets: Caravan: camel 1U + merchant rider seated on it + cart 1U; Tiles: 1U rounded squares (oasis, dune, camp, ruin); Bandits: 0.8U chunky silhouettes; Sand Wyrm: 5U curling body made of rounded segments
Background bands: warm sky haze / far mesas / dune ripples
Juice: Tiles thump into place; Loot jingles; Wyrm emerges with a sand burst
Feed cards: 1) Title: A camel caravan on a desert loop road, title on a hanging cloth banner 2) PLACE!: A hand placing an oasis tile next to the road 3) WYRM SLAIN!: The caravan cheering on the coiled wyrm
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:caravan-circuit:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
