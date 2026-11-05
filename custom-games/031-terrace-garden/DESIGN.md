# 031 · Terrace Garden

> **Grow on the rooftop. Pray for gold rain.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `endless (sessions of 1–3 min)` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `terrace-garden` → `src/offline-games/terrace-garden.txt` |
| **Inspired by (mechanics only)** | Grow a Garden (idle gardening) |
| **Players** | Solo score-chase |
| **Session** | endless (sessions of 1–3 min) |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:terrace-garden:best`, `arthis:terrace-garden:settings` (try/catch) |

### Pitch
A rooftop garden in a busy city. Buy seeds from a rotating cart, plant in pots, and come back as crops grow in real time, even while you're away. Monsoon rains create golden and rainbow mutations worth much more.

### Why it can go viral
Idle and real-time: people check in all day and share their rare golden mango.

### What makes it ours

- **Twist:** Monsoon events: a short rain every few minutes; crops in the rain have a chance to mutate (golden ×5, rainbow ×10).
- **Rule we invented:** Pigeon helpers: buy pigeons that auto-harvest one pot each, and some steal seeds from neighbours (just for fun).
- **What we cut from the reference:** Trading and multiplayer stealing: solo rooftop.

## 2 · Gameplay

### Core mechanic
Plant, wait, harvest, sell, upgrade pots.

### Rules

1. Seed cart restocks every 3 minutes with random seeds.
2. Crops grow on real-time timers (30 s to 20 min).
3. Harvest sells instantly; mutations multiply value.
4. Upgrade: more pots, sprinklers (faster growth), pigeons (auto-harvest).
5. Progress saved locally; offline growth applies on return.

### Win / Lose
- **Win:** Garden value goals (bronze, silver, gold roof)
- **Lose:** none (idle)

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click pot to plant/harvest · S seed cart · U upgrade | Tap · Cart · Upgrade |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** ₹ · Pots · Weather
- **Hint line (shown once, under 60 chars):** "Plant, wait, harvest, repeat."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (₹), **Play Again**

### Difficulty
Pause sheet speed: Relaxed (×0.75 timers) / Normal / Busy (×1.25 prices, ×1.25 timers).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Start pots | 4 |
| Max pots | 24 |
| Cart restock | 3 min |
| Mutation chance | 5% golden, 1% rainbow |

## 3 · Look and feel (style kit)

- **Scale unit:** pot = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/A8E0B5/A8E0B5.png) | Mid band | `#A8E0B5` |
| ![](https://placehold.co/28x28/E9D8B5/E9D8B5.png) | Ground / play surface | `#E9D8B5` |
| ![](https://placehold.co/28x28/3A9D5D/3A9D5D.png) | Hero | `#3A9D5D` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#A8E0B5"`

### Asset sheet (sizes in units)

- Pots: 1U rounded terracotta with lighter rim
- Crops: tomato, chilli, mango, sunflower, tulsi-like herb in 3 growth stages
- Seed cart: 2U rounded wooden cart
- Pigeons: 0.4U chubby
- Water tank and clotheslines (decor)

### Background (three quiet hazed bands)

1. **Far:** city sky haze
2. **Mid:** rooftop skyline with water tanks
3. **Near:** rooftop parapet

### Juice

- Crops pop when ready
- Coins arc to the counter
- Golden shimmer on mutations
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **TERRACE GARDEN** | A sunny rooftop full of pots over a city, title on a painted water tank |
| 2 · Action | **HARVEST!** | A golden mango glowing in the rain |
| 3 · Win | **GOLDEN CROP!** | The rooftop overflowing with plants at sunset |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/terrace-garden.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/terrace-garden.txt .shots/terrace-garden --pause`, then open every PNG
- [ ] **Win path:** fast-forward timers in a throwaway copy and verify harvest/sell/upgrade loop
- [ ] **Lose path:** n/a (no lose)
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Terrace Garden  ·  slug: terrace-garden
Brief: Solo score-chase · endless (sessions of 1–3 min) · palette family meadow (light) · 2D canvas
Pitch: A rooftop garden in a busy city. Buy seeds from a rotating cart, plant in pots, and come back as crops grow in real time, even while you're away. Monsoon rains create golden and rainbow mutations worth much more.
Core: Plant, wait, harvest, sell, upgrade pots.
Rules: (1) Seed cart restocks every 3 minutes with random seeds. (2) Crops grow on real-time timers (30 s to 20 min). (3) Harvest sells instantly; mutations multiply value. (4) Upgrade: more pots, sprinklers (faster growth), pigeons (auto-harvest). (5) Progress saved locally; offline growth applies on return.
Win: Garden value goals (bronze, silver, gold roof) · Lose: none (idle)
Controls: desktop Click pot to plant/harvest · S seed cart · U upgrade · touch Tap · Cart · Upgrade (max 3 inputs)
HUD: ₹ · Pots · Weather + pause
Hint: "Plant, wait, harvest, repeat."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Pause sheet speed: Relaxed (×0.75 timers) / Normal / Busy (×1.25 prices, ×1.25 timers).
Style kit: unit = pot = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #A8E0B5, Ground / play surface #E9D8B5, Hero #3A9D5D, Accent / rewards #FFD166
Assets: Pots: 1U rounded terracotta with lighter rim; Crops: tomato, chilli, mango, sunflower, tulsi-like herb in 3 growth stages; Seed cart: 2U rounded wooden cart; Pigeons: 0.4U chubby; Water tank and clotheslines (decor)
Background bands: city sky haze / rooftop skyline with water tanks / rooftop parapet
Juice: Crops pop when ready; Coins arc to the counter; Golden shimmer on mutations
Feed cards: 1) Title: A sunny rooftop full of pots over a city, title on a painted water tank 2) HARVEST!: A golden mango glowing in the rain 3) GOLDEN CROP!: The rooftop overflowing with plants at sunset
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:terrace-garden:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
