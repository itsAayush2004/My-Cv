# 025 · Bakery Bloom Match

> **Match treats. Rebuild the village bakery.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `90 s` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `bakery-bloom-match` → `src/offline-games/bakery-bloom-match.txt` |
| **Inspired by (mechanics only)** | Royal Match (match-3 with goals) |
| **Players** | Solo score-chase |
| **Session** | 90 s |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:bakery-bloom-match:best`, `arthis:bakery-bloom-match:settings` (try/catch) |

### Pitch
Swap pastries to match 3 and finish level goals. Stars rebuild a village bakery piece by piece.

### Why it can go viral
Huge combo explosions (rocket + bomb) and the cosy rebuild give the 'just one more' feeling.

### What makes it ours

- **Twist:** Oven tiles: matching next to an oven bakes the tile into a golden version worth double.
- **Rule we invented:** Baker's helper: a little mouse runs across the board when you make 3 combos in a row and nibbles 3 blockers.
- **What we cut from the reference:** Lives and boosters shop: endless retries.

## 2 · Gameplay

### Core mechanic
Swap adjacent tiles to make matches and meet the level goal within the move limit.

### Rules

1. 4 in line → rolling pin (clears line).
2. 2×2 → whisk (spins to a goal tile).
3. L/T → cake bomb.
4. 5 in line → sprinkle orb (clears a colour).
5. Goals: collect pastries, clear flour sacks, free cupcakes.

### Win / Lose
- **Win:** Goal met in the move limit
- **Lose:** Out of moves

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click/drag swap · Space shuffle (once) · — | Swipe · Shuffle |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Moves · Goal · Stars
- **Hint line (shown once, under 60 chars):** "Match 4 for a rolling pin!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Moves), **Play Again**

### Difficulty
Easy: +5 moves · Normal · Hard: −4 moves.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Board | 8 × 9 |
| Moves | 22 |
| Colours | 5 |
| Levels | 20 |

## 3 · Look and feel (style kit)

- **Scale unit:** tile = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/FFC4DD/FFC4DD.png) | Mid band | `#FFC4DD` |
| ![](https://placehold.co/28x28/FFF6F9/FFF6F9.png) | Ground / play surface | `#FFF6F9` |
| ![](https://placehold.co/28x28/FF6F91/FF6F91.png) | Hero | `#FF6F91` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#FFC4DD"`

### Asset sheet (sizes in units)

- Pastries: croissant, donut, macaron, cupcake, cookie, 0.8U rounded
- Blockers: flour sacks 1U, jam jars 1U
- Power-ups: rolling pin, whisk, cake bomb, sprinkle orb
- Bakery building: 6U, rebuilt in 5 stages

### Background (three quiet hazed bands)

1. **Far:** pink sky with soft clouds
2. **Mid:** village rooftops
3. **Near:** bakery counter edge

### Juice

- Tiles squish on swap
- Combo shockwaves
- Bakery piece drops in with dust puff
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **BAKERY BLOOM MATCH** | A cute bakery with a pastry board in front, title in icing letters |
| 2 · Action | **COMBO!** | A rolling pin and cake bomb exploding together |
| 3 · Win | **LEVEL CLEAR!** | The rebuilt bakery with a ribbon |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/bakery-bloom-match.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/bakery-bloom-match.txt .shots/bakery-bloom-match --pause`, then open every PNG
- [ ] **Win path:** seeded board with a known winning swap sequence
- [ ] **Lose path:** make random swaps until moves run out
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Bakery Bloom Match  ·  slug: bakery-bloom-match
Brief: Solo score-chase · 90 s · palette family candy (light) · 2D canvas
Pitch: Swap pastries to match 3 and finish level goals. Stars rebuild a village bakery piece by piece.
Core: Swap adjacent tiles to make matches and meet the level goal within the move limit.
Rules: (1) 4 in line → rolling pin (clears line). (2) 2×2 → whisk (spins to a goal tile). (3) L/T → cake bomb. (4) 5 in line → sprinkle orb (clears a colour). (5) Goals: collect pastries, clear flour sacks, free cupcakes.
Win: Goal met in the move limit · Lose: Out of moves
Controls: desktop Click/drag swap · Space shuffle (once) · — · touch Swipe · Shuffle (max 3 inputs)
HUD: Moves · Goal · Stars + pause
Hint: "Match 4 for a rolling pin!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: +5 moves · Normal · Hard: −4 moves.
Style kit: unit = tile = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #FFC4DD, Ground / play surface #FFF6F9, Hero #FF6F91, Accent / rewards #FFD36E
Assets: Pastries: croissant, donut, macaron, cupcake, cookie, 0.8U rounded; Blockers: flour sacks 1U, jam jars 1U; Power-ups: rolling pin, whisk, cake bomb, sprinkle orb; Bakery building: 6U, rebuilt in 5 stages
Background bands: pink sky with soft clouds / village rooftops / bakery counter edge
Juice: Tiles squish on swap; Combo shockwaves; Bakery piece drops in with dust puff
Feed cards: 1) Title: A cute bakery with a pastry board in front, title in icing letters 2) COMBO!: A rolling pin and cake bomb exploding together 3) LEVEL CLEAR!: The rebuilt bakery with a ribbon
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:bakery-bloom-match:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
