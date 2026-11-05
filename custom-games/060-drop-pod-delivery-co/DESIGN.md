# 060 · Drop Pod Delivery Co.

> **Type the code. Throw the beacon. Pray.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `3 min` · `ember (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `drop-pod-delivery-co` → `src/offline-games/drop-pod-delivery-co.txt` |
| **Inspired by (mechanics only)** | Helldivers 2 (stratagem co-op) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `ember` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:drop-pod-delivery-co:best`, `arthis:drop-pod-delivery-co:settings` (try/catch) |

### Pitch
Top-down co-op with 2 CPU couriers delivering supplies on a bug planet. Call drops (airstrike, turret, resupply) by entering arrow codes, then hold extraction.

### Why it can go viral
Friendly-fire chaos and code-typing panic make perfect comic clips.

### What makes it ours

- **Twist:** Codes speed up as you repeat them, so muscle memory makes you a pro.
- **Rule we invented:** Sticky beacon: lands exactly where thrown, even on a bug.
- **What we cut from the reference:** Galactic war map and loadouts: one mission.

## 2 · Gameplay

### Core mechanic
Shoot bugs, type codes, throw beacons, extract.

### Rules

1. Enter a 4–6 arrow code to arm a drop.
2. Drops: airstrike, turret, resupply.
3. Each drop has a cooldown.
4. Friendly fire is always on.
5. Hold the extraction zone for 60 s.

### Win / Lose
- **Win:** Extracted
- **Lose:** All lives lost

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse · Q code (arrows) | Twin stick · Code pad |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Drops · Time
- **Hint line (shown once, under 60 chars):** "Type the code. Throw the beacon!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy · Normal · Hard (bug waves).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Extraction | 60 s |
| Lives | 3 |
| Code length | 4–6 |
| Drop cooldown | 15–40 s |

## 3 · Look and feel (style kit)

- **Scale unit:** courier = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/2A0F12/2A0F12.png) | Far band (sky) | `#2A0F12` |
| ![](https://placehold.co/28x28/4D1C1A/4D1C1A.png) | Mid band | `#4D1C1A` |
| ![](https://placehold.co/28x28/5E3A24/5E3A24.png) | Ground / play surface | `#5E3A24` |
| ![](https://placehold.co/28x28/FFD23F/FFD23F.png) | Hero | `#FFD23F` |
| ![](https://placehold.co/28x28/7FDBFF/7FDBFF.png) | Accent / rewards | `#7FDBFF` |

Catalog colours: `bgColorLight: "#2A0F12"`, `bgColorDark: "#4D1C1A"`

### Asset sheet (sizes in units)

- Couriers: 1U armoured
- Bugs: 0.6–2U rounded beetles
- Drop pods: 1.5U
- Extraction ship: 4U

### Background (three quiet hazed bands)

1. **Far:** red sky
2. **Mid:** rock spires
3. **Near:** rocky ground

### Juice

- Pod impact shake
- Airstrike flashes
- Code-entry beeps
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **DROP POD DELIVERY CO.** | Couriers in armour on a red planet, title on a cargo pod |
| 2 · Action | **INCOMING!** | A drop pod falling with a fiery trail |
| 3 · Win | **EXTRACTED!** | Dropship lifting off |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/drop-pod-delivery-co.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/drop-pod-delivery-co.txt .shots/drop-pod-delivery-co --pause`, then open every PNG
- [ ] **Win path:** script codes and hold extraction
- [ ] **Lose path:** stand still
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Drop Pod Delivery Co.  ·  slug: drop-pod-delivery-co
Brief: vs CPU · 3 min · palette family ember (dark) · 2D canvas
Pitch: Top-down co-op with 2 CPU couriers delivering supplies on a bug planet. Call drops (airstrike, turret, resupply) by entering arrow codes, then hold extraction.
Core: Shoot bugs, type codes, throw beacons, extract.
Rules: (1) Enter a 4–6 arrow code to arm a drop. (2) Drops: airstrike, turret, resupply. (3) Each drop has a cooldown. (4) Friendly fire is always on. (5) Hold the extraction zone for 60 s.
Win: Extracted · Lose: All lives lost
Controls: desktop WASD · mouse · Q code (arrows) · touch Twin stick · Code pad (max 3 inputs)
HUD: HP · Drops · Time + pause
Hint: "Type the code. Throw the beacon!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (bug waves).
Style kit: unit = courier = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #2A0F12, Mid band #4D1C1A, Ground / play surface #5E3A24, Hero #FFD23F, Accent / rewards #7FDBFF
Assets: Couriers: 1U armoured; Bugs: 0.6–2U rounded beetles; Drop pods: 1.5U; Extraction ship: 4U
Background bands: red sky / rock spires / rocky ground
Juice: Pod impact shake; Airstrike flashes; Code-entry beeps
Feed cards: 1) Title: Couriers in armour on a red planet, title on a cargo pod 2) INCOMING!: A drop pod falling with a fiery trail 3) EXTRACTED!: Dropship lifting off
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:drop-pod-delivery-co:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
