# 009 · Clank & Carry

> **Fragile antiques. Clumsy robots.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `3 min` · `snow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `clank-carry` → `src/offline-games/clank-carry.txt` |
| **Inspired by (mechanics only)** | R.E.P.O. (physics carry horror) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `snow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:clank-carry:best`, `arthis:clank-carry:settings` (try/catch) |

### Pitch
A tiny delivery robot carries priceless antiques out of a museum at night. Every bump drops the price, and ghosts make it worse.

### Why it can go viral
The moment a $12,000 vase becomes a $3 vase after one wobble down the stairs is instantly funny and shareable.

### What makes it ours

- **Twist:** Tractor-beam physics: items swing on a springy beam, so you have to steer smoothly, not fast.
- **Rule we invented:** Bubble wrap pickup: wrap one item to make it immune to the next 2 bumps.
- **What we cut from the reference:** 6-player co-op and shop: solo robot, one museum floor, 8 items.

## 2 · Gameplay

### Core mechanic
Lift items with a springy beam and carry them to the truck without bumping them.

### Rules

1. Each item shows its value; bumps over 2 U/s reduce it by 15%.
2. Truck quota must be met before dawn (timer).
3. Portrait eyes: freeze when they look at you, or a ghost knocks your item.
4. Armour knight patrols; touching him drops your item.
5. Battery drains while carrying; recharge docks on the walls.

### Win / Lose
- **Win:** Deliver the quota before dawn
- **Lose:** Battery empty or dawn arrives below quota

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Space beam on/off · Q/E rotate item | Joystick · Beam · Rotate |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Value · Quota · Battery
- **Hint line (shown once, under 60 chars):** "Gentle! Every bump costs money."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Value), **Play Again**

### Difficulty
Easy: −10% per bump · Normal: −15% · Hard: −22% and 2 knights.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Quota | $20,000 |
| Battery | 90 s carrying |
| Bump threshold | 2 U/s |
| Items | 8 |

## 3 · Look and feel (style kit)

- **Scale unit:** robot height = 1U (boxy rounded bot with screen face)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/EEF1F7/EEF1F7.png) | Far band (sky) | `#EEF1F7` |
| ![](https://placehold.co/28x28/C7D0DE/C7D0DE.png) | Mid band | `#C7D0DE` |
| ![](https://placehold.co/28x28/8D99AE/8D99AE.png) | Ground / play surface | `#8D99AE` |
| ![](https://placehold.co/28x28/FF8C42/FF8C42.png) | Hero | `#FF8C42` |
| ![](https://placehold.co/28x28/99FFDD/99FFDD.png) | Accent / rewards | `#99FFDD` |

Catalog colours: `bgColorLight: "#EEF1F7"`, `bgColorDark: "#C7D0DE"`

### Asset sheet (sizes in units)

- Robot: 1U rounded box, screen face with emoji-like expressions drawn in shapes
- Antiques: 0.4–1.2U (vase, clock, statue, dino egg), marble/gold family
- Price tag: rounded pill above each item
- Truck: 4U rounded van at the dock
- Knight: 1.6U rounded armour

### Background (three quiet hazed bands)

1. **Far:** pale museum wall with skylight haze
2. **Mid:** pillars and framed paintings
3. **Near:** polished floor with reflections

### Juice

- Price tag shakes and turns red on bumps
- Coins burst on delivery
- Robot face reacts to danger
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CLANK & CARRY** | A tiny robot lifting a giant vase in a grand museum hall, title on a brass plaque |
| 2 · Action | **CAREFUL!** | The robot wobbling on stairs as the price tag drops |
| 3 · Win | **DELIVERED!** | Robot by the truck full of treasures at sunrise |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/clank-carry.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/clank-carry.txt .shots/clank-carry --pause`, then open every PNG
- [ ] **Win path:** carry items slowly along a safe path to meet quota
- [ ] **Lose path:** drag items into walls until battery or time runs out
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Clank & Carry  ·  slug: clank-carry
Brief: Solo score-chase · 3 min · palette family snow (light) · 2D canvas
Pitch: A tiny delivery robot carries priceless antiques out of a museum at night. Every bump drops the price, and ghosts make it worse.
Core: Lift items with a springy beam and carry them to the truck without bumping them.
Rules: (1) Each item shows its value; bumps over 2 U/s reduce it by 15%. (2) Truck quota must be met before dawn (timer). (3) Portrait eyes: freeze when they look at you, or a ghost knocks your item. (4) Armour knight patrols; touching him drops your item. (5) Battery drains while carrying; recharge docks on the walls.
Win: Deliver the quota before dawn · Lose: Battery empty or dawn arrives below quota
Controls: desktop WASD move · Space beam on/off · Q/E rotate item · touch Joystick · Beam · Rotate (max 3 inputs)
HUD: Value · Quota · Battery + pause
Hint: "Gentle! Every bump costs money."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: −10% per bump · Normal: −15% · Hard: −22% and 2 knights.
Style kit: unit = robot height = 1U (boxy rounded bot with screen face); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #EEF1F7, Mid band #C7D0DE, Ground / play surface #8D99AE, Hero #FF8C42, Accent / rewards #99FFDD
Assets: Robot: 1U rounded box, screen face with emoji-like expressions drawn in shapes; Antiques: 0.4–1.2U (vase, clock, statue, dino egg), marble/gold family; Price tag: rounded pill above each item; Truck: 4U rounded van at the dock; Knight: 1.6U rounded armour
Background bands: pale museum wall with skylight haze / pillars and framed paintings / polished floor with reflections
Juice: Price tag shakes and turns red on bumps; Coins burst on delivery; Robot face reacts to danger
Feed cards: 1) Title: A tiny robot lifting a giant vase in a grand museum hall, title on a brass plaque 2) CAREFUL!: The robot wobbling on stairs as the price tag drops 3) DELIVERED!: Robot by the truck full of treasures at sunrise
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:clank-carry:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
