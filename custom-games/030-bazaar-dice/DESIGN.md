# 030 · Bazaar Dice

> **Roll round the market. Build the landmarks.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `3 min` · `sand (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `bazaar-dice` → `src/offline-games/bazaar-dice.txt` |
| **Inspired by (mechanics only)** | Monopoly GO! (dice board) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `sand` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:bazaar-dice:best`, `arthis:bazaar-dice:settings` (try/catch) |

### Pitch
Roll dice around a busy Indian market board: land on stalls for coins, hit chance tiles, and build 5 landmarks (clock tower, gate, fountain, bridge, train station) to finish the board.

### Why it can go viral
Risky multiplier rolls and quick progress feel great; finishing a board is a shareable moment.

### What makes it ours

- **Twist:** Chai stop: landing on the chai stall refills 2 dice but skips your next coin tile.
- **Rule we invented:** Monkey thief: a cheeky monkey tile steals coins unless you roll doubles to chase it.
- **What we cut from the reference:** Friends, raids and events: solo board progression.

## 2 · Gameplay

### Core mechanic
Roll 2 dice to move; earn coins; spend coins to build landmarks.

### Rules

1. Start with 30 dice; dice refill slowly over the run (1 per 10 s).
2. Multiplier ×1/×2/×5 spends more dice per roll for more coins.
3. Corner tiles: bonus, jail (lose turn), chai, festival (double coins).
4. 5 landmarks × 3 stages each.
5. Out of dice and coins = run over.

### Win / Lose
- **Win:** All 5 landmarks built
- **Lose:** Out of dice with landmarks unfinished

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Space roll · Q multiplier · click build | Roll · Multiplier · Build |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Dice · Board
- **Hint line (shown once, under 60 chars):** "Roll, earn, build landmarks."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
Easy: 40 dice · Normal 30 · Hard 22.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Board tiles | 24 |
| Dice | 30 |
| Landmark cost | 200–600 |
| Multipliers | ×1/×2/×5 |

## 3 · Look and feel (style kit)

- **Scale unit:** pawn = 1U (auto-rickshaw token)
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
| ![](https://placehold.co/28x28/FDE7C2/FDE7C2.png) | Ground / play surface | `#FDE7C2` |
| ![](https://placehold.co/28x28/E07A5F/E07A5F.png) | Hero | `#E07A5F` |
| ![](https://placehold.co/28x28/3D9A8B/3D9A8B.png) | Accent / rewards | `#3D9A8B` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#F4C47A"`

### Asset sheet (sizes in units)

- Pawn: 1U rounded auto-rickshaw with driver seated inside
- Board tiles: 1.2U rounded stalls (fruit, spices, bangles, chai)
- Landmarks: 2–4U rounded buildings in 3 stages
- Dice: 0.8U rounded

### Background (three quiet hazed bands)

1. **Far:** warm sky haze
2. **Mid:** market rooftops and kites
3. **Near:** board edge with rangoli pattern

### Juice

- Dice bounce and roll
- Coin fountain on tiles
- Landmark build with dust puff
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **BAZAAR DICE** | An auto-rickshaw pawn on a colourful market board, title on a shop banner |
| 2 · Action | **ROLL!** | Dice flying with ×5 glowing |
| 3 · Win | **BOARD DONE!** | All landmarks lit up with fireworks |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/bazaar-dice.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/bazaar-dice.txt .shots/bazaar-dice --pause`, then open every PNG
- [ ] **Win path:** seeded rolls to complete landmarks
- [ ] **Lose path:** roll ×5 until out of dice
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Bazaar Dice  ·  slug: bazaar-dice
Brief: Solo score-chase · 3 min · palette family sand (light) · 2D canvas
Pitch: Roll dice around a busy Indian market board: land on stalls for coins, hit chance tiles, and build 5 landmarks (clock tower, gate, fountain, bridge, train station) to finish the board.
Core: Roll 2 dice to move; earn coins; spend coins to build landmarks.
Rules: (1) Start with 30 dice; dice refill slowly over the run (1 per 10 s). (2) Multiplier ×1/×2/×5 spends more dice per roll for more coins. (3) Corner tiles: bonus, jail (lose turn), chai, festival (double coins). (4) 5 landmarks × 3 stages each. (5) Out of dice and coins = run over.
Win: All 5 landmarks built · Lose: Out of dice with landmarks unfinished
Controls: desktop Space roll · Q multiplier · click build · touch Roll · Multiplier · Build (max 3 inputs)
HUD: Coins · Dice · Board + pause
Hint: "Roll, earn, build landmarks."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 40 dice · Normal 30 · Hard 22.
Style kit: unit = pawn = 1U (auto-rickshaw token); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F4C47A, Ground / play surface #FDE7C2, Hero #E07A5F, Accent / rewards #3D9A8B
Assets: Pawn: 1U rounded auto-rickshaw with driver seated inside; Board tiles: 1.2U rounded stalls (fruit, spices, bangles, chai); Landmarks: 2–4U rounded buildings in 3 stages; Dice: 0.8U rounded
Background bands: warm sky haze / market rooftops and kites / board edge with rangoli pattern
Juice: Dice bounce and roll; Coin fountain on tiles; Landmark build with dust puff
Feed cards: 1) Title: An auto-rickshaw pawn on a colourful market board, title on a shop banner 2) ROLL!: Dice flying with ×5 glowing 3) BOARD DONE!: All landmarks lit up with fireworks
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:bazaar-dice:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
