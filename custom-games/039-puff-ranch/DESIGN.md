# 039 · Puff Ranch

> **Vacuum fluffballs. Sell their sparkles.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `4 min` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `puff-ranch` → `src/offline-games/puff-ranch.txt` |
| **Inspired by (mechanics only)** | Slime Rancher (ranch sim) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:puff-ranch:best`, `arthis:puff-ranch:settings` (try/catch) |

### Pitch
Vacuum up bouncy puffballs, feed them fruit to make sparkle gems, mix two kinds into hybrids, and sell gems at a fluctuating market.

### Why it can go viral
Adorable creatures and hybrid reveals.

### What makes it ours

- **Twist:** Market swings: prices rise and fall every 30 s; selling at peak doubles profit.
- **Rule we invented:** Hybrid nursery: two puffs in one pen hatch a hybrid after 20 s.
- **What we cut from the reference:** 3D exploration: one ranch with 3 meadows.

## 2 · Gameplay

### Core mechanic
Suck up puffs and food, shoot them into pens, collect gems and sell.

### Rules

1. Pens hold 6 puffs; overcrowded pens escape.
2. Each puff eats a specific food.
3. Gems sell at the market board.
4. Hybrids produce two gem types.
5. Reach 1,000 coins by day 5.

### Win / Lose
- **Win:** 1,000 coins by day 5
- **Lose:** Below target

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · LMB suck · RMB shoot | Joystick · Suck · Shoot |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Day · Puffs
- **Hint line (shown once, under 60 chars):** "Feed puffs. Sell at the peak!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
Easy: stable market · Normal · Hard: wild market and escapes.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Days | 5 × 45 s |
| Pen capacity | 6 |
| Market cycle | 30 s |
| Puff types | 5 |

## 3 · Look and feel (style kit)

- **Scale unit:** puff = 0.6U, rancher = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/D8F3DC/D8F3DC.png) | Mid band | `#D8F3DC` |
| ![](https://placehold.co/28x28/FFF5E1/FFF5E1.png) | Ground / play surface | `#FFF5E1` |
| ![](https://placehold.co/28x28/7B61FF/7B61FF.png) | Hero | `#7B61FF` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#D8F3DC"`

### Asset sheet (sizes in units)

- Rancher: 1U with backpack vacuum parented to hands
- Puffs: 0.6U round, 5 colours, cute faces
- Pens: rounded fences
- Fruit trees: 2.5U rounded

### Background (three quiet hazed bands)

1. **Far:** pastel sky
2. **Mid:** rolling hills
3. **Near:** grass

### Juice

- Puffs bounce and squish
- Gems sparkle
- Market arrow pops
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PUFF RANCH** | A rancher surrounded by colourful puffballs, title on a barn |
| 2 · Action | **SUCK!** | Puffs swirling into the vacuum |
| 3 · Win | **RANCH STAR!** | Rancher on a mountain of gems |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/puff-ranch.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/puff-ranch.txt .shots/puff-ranch --pause`, then open every PNG
- [ ] **Win path:** feed and sell at peaks to hit target
- [ ] **Lose path:** do nothing
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Puff Ranch  ·  slug: puff-ranch
Brief: Solo score-chase · 4 min · palette family candy (light) · 2D canvas
Pitch: Vacuum up bouncy puffballs, feed them fruit to make sparkle gems, mix two kinds into hybrids, and sell gems at a fluctuating market.
Core: Suck up puffs and food, shoot them into pens, collect gems and sell.
Rules: (1) Pens hold 6 puffs; overcrowded pens escape. (2) Each puff eats a specific food. (3) Gems sell at the market board. (4) Hybrids produce two gem types. (5) Reach 1,000 coins by day 5.
Win: 1,000 coins by day 5 · Lose: Below target
Controls: desktop WASD · LMB suck · RMB shoot · touch Joystick · Suck · Shoot (max 3 inputs)
HUD: Coins · Day · Puffs + pause
Hint: "Feed puffs. Sell at the peak!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: stable market · Normal · Hard: wild market and escapes.
Style kit: unit = puff = 0.6U, rancher = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #D8F3DC, Ground / play surface #FFF5E1, Hero #7B61FF, Accent / rewards #FFD36E
Assets: Rancher: 1U with backpack vacuum parented to hands; Puffs: 0.6U round, 5 colours, cute faces; Pens: rounded fences; Fruit trees: 2.5U rounded
Background bands: pastel sky / rolling hills / grass
Juice: Puffs bounce and squish; Gems sparkle; Market arrow pops
Feed cards: 1) Title: A rancher surrounded by colourful puffballs, title on a barn 2) SUCK!: Puffs swirling into the vacuum 3) RANCH STAR!: Rancher on a mountain of gems
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:puff-ranch:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
