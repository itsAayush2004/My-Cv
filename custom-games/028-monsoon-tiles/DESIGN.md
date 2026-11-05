# 028 · Monsoon Tiles

> **Place hex tiles. Let the rain bloom them.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `5 min` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `monsoon-tiles` → `src/offline-games/monsoon-tiles.txt` |
| **Inspired by (mechanics only)** | Dorfromantik (hex tile placement) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:monsoon-tiles:best`, `arthis:monsoon-tiles:settings` (try/catch) |

### Pitch
Lay hex tiles of paddy fields, villages, rivers and rail into a growing landscape. Monsoon quests ask for exact group sizes; completing them earns more tiles.

### Why it can go viral
Calm puzzle with beautiful landscapes people screenshot.

### What makes it ours

- **Twist:** Monsoon clouds pass every 10 tiles and double the score of all river-connected tiles.
- **Rule we invented:** Rail lines: completing a railway loop gives 5 bonus tiles.
- **What we cut from the reference:** Endless biome unlocks: one ruleset.

## 2 · Gameplay

### Core mechanic
Place the next tile from the stack; matching edges score points.

### Rules

1. Perfect placement (all edges match) = +1 tile.
2. Quests: 'paddy group of exactly 8'.
3. Completing quests adds tiles.
4. Rivers and rail must connect correctly.
5. Game ends when the stack is empty.

### Win / Lose
- **Win:** Beat the target score
- **Lose:** Stack empty below target

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click place · R rotate · Space zoom | Tap place · Rotate · Zoom |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Score · Tiles · Quests
- **Hint line (shown once, under 60 chars):** "Match edges. Finish quests for tiles."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Score), **Play Again**

### Difficulty
Easy: target 2,000 · Normal 4,000 · Hard 6,000.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Start stack | 40 |
| Perfect bonus | +1 tile |
| Quest reward | +5 tiles |
| Monsoon every | 10 tiles |

## 3 · Look and feel (style kit)

- **Scale unit:** hex = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/9FD8B2/9FD8B2.png) | Mid band | `#9FD8B2` |
| ![](https://placehold.co/28x28/E8F5E1/E8F5E1.png) | Ground / play surface | `#E8F5E1` |
| ![](https://placehold.co/28x28/3A9D5D/3A9D5D.png) | Hero | `#3A9D5D` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Accent / rewards | `#FFB703` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#9FD8B2"`

### Asset sheet (sizes in units)

- Hex tiles: 1U rounded hex with chunky paddy rows, palms, huts, river ribbons
- Trains: 0.4U rounded engines
- Clouds: soft white blobs

### Background (three quiet hazed bands)

1. **Far:** sky haze
2. **Mid:** far hills
3. **Near:** tile board shadow

### Juice

- Tile drop bounce
- Quest complete chime and flag
- Rain shimmer on rivers
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **MONSOON TILES** | A hex landscape of paddies and rivers under rain clouds, title on a rail sign |
| 2 · Action | **PERFECT!** | A tile clicking in with all edges glowing |
| 3 · Win | **VALLEY BLOOMS!** | Sunlight over a huge green landscape |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/monsoon-tiles.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/monsoon-tiles.txt .shots/monsoon-tiles --pause`, then open every PNG
- [ ] **Win path:** seeded stack and placement plan reaching the target
- [ ] **Lose path:** place tiles with mismatched edges
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Monsoon Tiles  ·  slug: monsoon-tiles
Brief: Solo score-chase · 5 min · palette family meadow (light) · 2D canvas
Pitch: Lay hex tiles of paddy fields, villages, rivers and rail into a growing landscape. Monsoon quests ask for exact group sizes; completing them earns more tiles.
Core: Place the next tile from the stack; matching edges score points.
Rules: (1) Perfect placement (all edges match) = +1 tile. (2) Quests: 'paddy group of exactly 8'. (3) Completing quests adds tiles. (4) Rivers and rail must connect correctly. (5) Game ends when the stack is empty.
Win: Beat the target score · Lose: Stack empty below target
Controls: desktop Click place · R rotate · Space zoom · touch Tap place · Rotate · Zoom (max 3 inputs)
HUD: Score · Tiles · Quests + pause
Hint: "Match edges. Finish quests for tiles."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: target 2,000 · Normal 4,000 · Hard 6,000.
Style kit: unit = hex = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #9FD8B2, Ground / play surface #E8F5E1, Hero #3A9D5D, Accent / rewards #FFB703
Assets: Hex tiles: 1U rounded hex with chunky paddy rows, palms, huts, river ribbons; Trains: 0.4U rounded engines; Clouds: soft white blobs
Background bands: sky haze / far hills / tile board shadow
Juice: Tile drop bounce; Quest complete chime and flag; Rain shimmer on rivers
Feed cards: 1) Title: A hex landscape of paddies and rivers under rain clouds, title on a rail sign 2) PERFECT!: A tile clicking in with all edges glowing 3) VALLEY BLOOMS!: Sunlight over a huge green landscape
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:monsoon-tiles:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
