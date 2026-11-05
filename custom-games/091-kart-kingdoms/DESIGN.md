# 091 · Kart Kingdoms

> **Drift, jump, grind, survive the cut.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `vs CPU | 2 Players (local)` · `2 min` · `meadow (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `kart-kingdoms` → `src/offline-games/kart-kingdoms.txt` |
| **Inspired by (mechanics only)** | Mario Kart World (connected kart racing) |
| **Players** | vs CPU | 2 Players (local) |
| **Session** | 2 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:kart-kingdoms:best`, `arthis:kart-kingdoms:settings` (try/catch) |

### Pitch
Toy karts race across one connected kingdom of roads: meadow, castle town and seaside cliffs. Every checkpoint cuts the last two racers until one wins.

### Why it can go viral
Knockout tension at each checkpoint and big drift-boost moments.

### What makes it ours

- **Twist:** Rails and walls are rideable: jump onto fences to grind, and charge-jump to wall-ride short stretches.
- **Rule we invented:** Crown chase: the leader carries a crown that slows them 5%, so races stay close.
- **What we cut from the reference:** 24 racers and 30 tracks: 8 racers, one connected route.

## 2 · Gameplay

### Core mechanic
Drift to charge boosts, charge-jump onto rails, use one held item.

### Rules

1. 8 racers (CPU, or 2 local players with split screen).
2. Checkpoints at 25/50/75%: last 2 are knocked out.
3. Drift for 1–3 boost tiers.
4. Item boxes: banana peel, shell, mushroom, shield.
5. Crown slows the leader 5%.

### Win / Lose
- **Win:** Cross the line 1st
- **Lose:** Knocked out at a checkpoint or finish below 1st

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows steer · Space drift/jump · Shift item (P2: WASD, Q, E) | Steer pad · Drift/Jump · Item |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Place · Lap · Item
- **Hint line (shown once, under 60 chars):** "Drift, jump, grind!"
- **Pause sheet:** Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard
- **End sheet:** result, best (Place), **Play Again**

### Difficulty
Easy: CPU 88% pace, fewer shells · Normal · Hard: 105% pace and smart item use.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Racers | 8 |
| Boost tiers | 0.6/1.2/2 s |
| Knockout | last 2 per checkpoint |
| Race length | ~110 s |

## 3 · Look and feel (style kit)

- **Scale unit:** kart = 1U, driver seated inside
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/A6E3A1/A6E3A1.png) | Mid band | `#A6E3A1` |
| ![](https://placehold.co/28x28/E8E2D0/E8E2D0.png) | Ground / play surface | `#E8E2D0` |
| ![](https://placehold.co/28x28/FF5D5D/FF5D5D.png) | Hero | `#FF5D5D` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#A6E3A1"`

### Asset sheet (sizes in units)

- Karts: 1U rounded go-karts with drivers seated inside (fox, panda, robot, goat)
- Item boxes: 0.6U rounded glowing cubes
- Rails and fences: rounded posts
- Banana peel 0.3U, shell 0.4U, shield bubble 1.2U
- Checkpoint arches: 4U flag gates

### Background (three quiet hazed bands)

1. **Far:** bright sky with balloons
2. **Mid:** castle and cliffs in haze
3. **Near:** roadside hedges and flags

### Juice

- Drift sparks change colour per tier
- Knockout banner slams with crowd 'ooh'
- Item hit spin with stars
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **KART KINGDOMS** | Toy karts racing under a giant flag arch, title on a checkered banner |
| 2 · Action | **BOOST!** | A kart blasting out of a purple drift spark |
| 3 · Win | **1ST!** | Winner kart on a podium with confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/kart-kingdoms.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/kart-kingdoms.txt .shots/kart-kingdoms --pause`, then open every PNG
- [ ] **Win path:** scripted racing line with perfect drifts finishing 1st
- [ ] **Lose path:** drive into walls until knocked out
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Kart Kingdoms  ·  slug: kart-kingdoms
Brief: vs CPU | 2 Players (local) · 2 min · palette family meadow (light) · 3D, three.js r128 from cdnjs
Pitch: Toy karts race across one connected kingdom of roads: meadow, castle town and seaside cliffs. Every checkpoint cuts the last two racers until one wins.
Core: Drift to charge boosts, charge-jump onto rails, use one held item.
Rules: (1) 8 racers (CPU, or 2 local players with split screen). (2) Checkpoints at 25/50/75%: last 2 are knocked out. (3) Drift for 1–3 boost tiers. (4) Item boxes: banana peel, shell, mushroom, shield. (5) Crown slows the leader 5%.
Win: Cross the line 1st · Lose: Knocked out at a checkpoint or finish below 1st
Controls: desktop Arrows steer · Space drift/jump · Shift item (P2: WASD, Q, E) · touch Steer pad · Drift/Jump · Item (max 3 inputs)
HUD: Place · Lap · Item + pause
Hint: "Drift, jump, grind!"
Pause sheet: Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard. Difficulty changes: Easy: CPU 88% pace, fewer shells · Normal · Hard: 105% pace and smart item use.
Style kit: unit = kart = 1U, driver seated inside; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #A6E3A1, Ground / play surface #E8E2D0, Hero #FF5D5D, Accent / rewards #FFD166
Assets: Karts: 1U rounded go-karts with drivers seated inside (fox, panda, robot, goat); Item boxes: 0.6U rounded glowing cubes; Rails and fences: rounded posts; Banana peel 0.3U, shell 0.4U, shield bubble 1.2U; Checkpoint arches: 4U flag gates
Background bands: bright sky with balloons / castle and cliffs in haze / roadside hedges and flags
Juice: Drift sparks change colour per tier; Knockout banner slams with crowd 'ooh'; Item hit spin with stars
Feed cards: 1) Title: Toy karts racing under a giant flag arch, title on a checkered banner 2) BOOST!: A kart blasting out of a purple drift spark 3) 1ST!: Winner kart on a podium with confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:kart-kingdoms:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
