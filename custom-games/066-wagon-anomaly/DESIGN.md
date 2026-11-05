# 066 · Wagon Anomaly

> **Your car is your shelter. Keep it running.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `4 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `wagon-anomaly` → `src/offline-games/wagon-anomaly.txt` |
| **Inspired by (mechanics only)** | Pacific Drive (survival driving) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:wagon-anomaly:best`, `arthis:wagon-anomaly:settings` (try/catch) |

### Pitch
Drive an old station wagon through a strange anomaly zone. Patch parts, scavenge scrap and escape through the gateway before the storm closes.

### Why it can go viral
Wild anomalies and last-second duct-tape repairs create great 'we barely made it' moments.

### What makes it ours

- **Twist:** Per-part damage: doors, tyres, battery and lights break separately and change how the car behaves.
- **Rule we invented:** Duct tape: a quick fix that holds a part together for 20 s.
- **What we cut from the reference:** Garage meta-progression: a single run.

## 2 · Gameplay

### Core mechanic
Drive, stop to repair, scavenge, and reach the gate.

### Rules

1. 5 car parts with HP: tyres, doors, battery, lights, engine.
2. Broken tyres slow you; no lights in dark sections hides the road.
3. Repairs cost scrap from roadside wrecks.
4. Anomalies: lightning orbs, gravity pullers, mannequins that grab the car.
5. The storm closes the road behind you.

### Win / Lose
- **Win:** Reach the gateway
- **Lose:** Car destroyed

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows drive · E repair · Space horn | Steer · Repair · Horn |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Car · Scrap · Storm
- **Hint line (shown once, under 60 chars):** "Patch the car. Beat the storm."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Car), **Play Again**

### Difficulty
Easy · Normal · Hard (more anomalies).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Parts | 5 |
| Storm | 120 s |
| Tape duration | 20 s |
| Scrap per pile | 1–3 |

## 3 · Look and feel (style kit)

- **Scale unit:** car = 2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/E8C4A8/E8C4A8.png) | Mid band | `#E8C4A8` |
| ![](https://placehold.co/28x28/D8B48F/D8B48F.png) | Ground / play surface | `#D8B48F` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/2EC4B6/2EC4B6.png) | Accent / rewards | `#2EC4B6` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#E8C4A8"`

### Asset sheet (sizes in units)

- Station wagon: 2U rounded with the driver seated inside
- Scrap piles: 0.6U
- Lightning orbs: 0.8U glowing
- Mannequins: 1U smooth pale figures
- Gateway: 4U glowing arch

### Background (three quiet hazed bands)

1. **Far:** sunset haze with odd lights
2. **Mid:** strange towers and pylons
3. **Near:** cracked road and kerbs

### Juice

- Sparks on damage
- Duct tape slap sound
- Lightning flashes
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **WAGON ANOMALY** | An old station wagon on a glowing road at dusk, title on a road sign |
| 2 · Action | **REPAIR!** | Driver taping a door as lightning cracks |
| 3 · Win | **ESCAPED!** | Car bursting through the glowing gateway |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/wagon-anomaly.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/wagon-anomaly.txt .shots/wagon-anomaly --pause`, then open every PNG
- [ ] **Win path:** scripted repairs and route to the gate
- [ ] **Lose path:** crash into anomalies repeatedly
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Wagon Anomaly  ·  slug: wagon-anomaly
Brief: Solo score-chase · 4 min · palette family peach (light) · 2D canvas
Pitch: Drive an old station wagon through a strange anomaly zone. Patch parts, scavenge scrap and escape through the gateway before the storm closes.
Core: Drive, stop to repair, scavenge, and reach the gate.
Rules: (1) 5 car parts with HP: tyres, doors, battery, lights, engine. (2) Broken tyres slow you; no lights in dark sections hides the road. (3) Repairs cost scrap from roadside wrecks. (4) Anomalies: lightning orbs, gravity pullers, mannequins that grab the car. (5) The storm closes the road behind you.
Win: Reach the gateway · Lose: Car destroyed
Controls: desktop Arrows drive · E repair · Space horn · touch Steer · Repair · Horn (max 3 inputs)
HUD: Car · Scrap · Storm + pause
Hint: "Patch the car. Beat the storm."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (more anomalies).
Style kit: unit = car = 2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #E8C4A8, Ground / play surface #D8B48F, Hero #843B62, Accent / rewards #2EC4B6
Assets: Station wagon: 2U rounded with the driver seated inside; Scrap piles: 0.6U; Lightning orbs: 0.8U glowing; Mannequins: 1U smooth pale figures; Gateway: 4U glowing arch
Background bands: sunset haze with odd lights / strange towers and pylons / cracked road and kerbs
Juice: Sparks on damage; Duct tape slap sound; Lightning flashes
Feed cards: 1) Title: An old station wagon on a glowing road at dusk, title on a road sign 2) REPAIR!: Driver taping a door as lightning cracks 3) ESCAPED!: Car bursting through the glowing gateway
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:wagon-anomaly:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
