# 037 · Kirana King

> **Shelve fast. Give exact change.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `4 min` · `sand (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `kirana-king` → `src/offline-games/kirana-king.txt` |
| **Inspired by (mechanics only)** | Supermarket Simulator (shop sim) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `sand` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:kirana-king:best`, `arthis:kirana-king:settings` (try/catch) |

### Pitch
Run a busy Indian corner store for 5 days. Order stock, shelve it, set fair prices, scan items and give exact change before customers lose patience.

### Why it can go viral
Relatable and satisfying; the rush hour chaos is fun to watch.

### What makes it ours

- **Twist:** Haggling aunty: some customers counter-offer, and you accept, decline or meet in the middle.
- **Rule we invented:** Udhaar book: regulars can buy on credit and pay back later (or not).
- **What we cut from the reference:** Big 3D store: one compact top-down shop.

## 2 · Gameplay

### Core mechanic
Restock shelves, then serve the checkout queue with correct change.

### Rules

1. Order boxes in the morning (arrive at noon).
2. Prices above market drop customer mood.
3. Checkout: scan items, type change from note buttons.
4. Customers leave when patience runs out.
5. Earn enough to expand shelves.

### Win / Lose
- **Win:** ₹10,000 profit by day 5
- **Lose:** Below ₹10,000 at day 5

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click/drag items · Space scan · number keys change | Drag · Scan · tap notes |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** ₹ · Day · Rating
- **Hint line (shown once, under 60 chars):** "Shelve fast. Give exact change."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (₹), **Play Again**

### Difficulty
Easy: patient customers · Normal · Hard: rush hours and hagglers.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Days | 5 |
| Day length | 50 s |
| Patience | 12 s |
| Products | 15 |

## 3 · Look and feel (style kit)

- **Scale unit:** shopkeeper = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF1D6/FFF1D6.png) | Far band (sky) | `#FFF1D6` |
| ![](https://placehold.co/28x28/F4D6A0/F4D6A0.png) | Mid band | `#F4D6A0` |
| ![](https://placehold.co/28x28/FFF8EC/FFF8EC.png) | Ground / play surface | `#FFF8EC` |
| ![](https://placehold.co/28x28/E07A5F/E07A5F.png) | Hero | `#E07A5F` |
| ![](https://placehold.co/28x28/3D9A8B/3D9A8B.png) | Accent / rewards | `#3D9A8B` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#F4D6A0"`

### Asset sheet (sizes in units)

- Shopkeeper: 1U, cap, apron
- Products: biscuit packets, chai tins, rice bags, soaps, 0.3U rounded
- Shelves: rounded wood
- Customers: 1U varied (aunty, student, kid)

### Background (three quiet hazed bands)

1. **Far:** street sky haze
2. **Mid:** shop signboards
3. **Near:** shop floor

### Juice

- Scanner beep
- Coins and notes slide
- Happy customer hearts
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **KIRANA KING** | A shopkeeper behind a crowded counter, title on a shop sign |
| 2 · Action | **SCAN!** | Rush hour queue with flying items |
| 3 · Win | **KIRANA KING!** | Shop expanded with neon sign and a crown |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/kirana-king.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/kirana-king.txt .shots/kirana-king --pause`, then open every PNG
- [ ] **Win path:** serve every customer correctly for 5 days
- [ ] **Lose path:** ignore the queue
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Kirana King  ·  slug: kirana-king
Brief: Solo score-chase · 4 min · palette family sand (light) · 2D canvas
Pitch: Run a busy Indian corner store for 5 days. Order stock, shelve it, set fair prices, scan items and give exact change before customers lose patience.
Core: Restock shelves, then serve the checkout queue with correct change.
Rules: (1) Order boxes in the morning (arrive at noon). (2) Prices above market drop customer mood. (3) Checkout: scan items, type change from note buttons. (4) Customers leave when patience runs out. (5) Earn enough to expand shelves.
Win: ₹10,000 profit by day 5 · Lose: Below ₹10,000 at day 5
Controls: desktop Click/drag items · Space scan · number keys change · touch Drag · Scan · tap notes (max 3 inputs)
HUD: ₹ · Day · Rating + pause
Hint: "Shelve fast. Give exact change."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: patient customers · Normal · Hard: rush hours and hagglers.
Style kit: unit = shopkeeper = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F4D6A0, Ground / play surface #FFF8EC, Hero #E07A5F, Accent / rewards #3D9A8B
Assets: Shopkeeper: 1U, cap, apron; Products: biscuit packets, chai tins, rice bags, soaps, 0.3U rounded; Shelves: rounded wood; Customers: 1U varied (aunty, student, kid)
Background bands: street sky haze / shop signboards / shop floor
Juice: Scanner beep; Coins and notes slide; Happy customer hearts
Feed cards: 1) Title: A shopkeeper behind a crowded counter, title on a shop sign 2) SCAN!: Rush hour queue with flying items 3) KIRANA KING!: Shop expanded with neon sign and a crown
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:kirana-king:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
