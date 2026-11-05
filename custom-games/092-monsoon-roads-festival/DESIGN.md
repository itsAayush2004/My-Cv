# 092 · Monsoon Roads Festival

> **Drift the ghats. Chase the rain.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `vs CPU` · `2 min` · `ocean (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `monsoon-roads-festival` → `src/offline-games/monsoon-roads-festival.txt` |
| **Inspired by (mechanics only)** | Forza Horizon (festival open-road racing) |
| **Players** | vs CPU |
| **Session** | 2 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:monsoon-roads-festival:best`, `arthis:monsoon-roads-festival:settings` (try/catch) |

### Pitch
A road-racing festival through Western Ghats-style mountain roads in monsoon season. Win drift battles, chain skill combos and beat 3 CPU rivals.

### Why it can go viral
Rain-soaked drifting with waterfalls in the background looks gorgeous.

### What makes it ours

- **Twist:** Wet grip: puddles make you slide wider, but drifting through them doubles skill points.
- **Rule we invented:** Chai stall ramp: hit marked ramps for jump points and a festival cheer.
- **What we cut from the reference:** Open world and car collection: 3 events on one mountain loop.

## 2 · Gameplay

### Core mechanic
Race with drift and boost; skill combos fill a festival meter.

### Rules

1. 3 events: sprint race, drift battle, speed trap run.
2. Skill chain: drift + near miss + airborne multiply.
3. Crashing breaks the chain.
4. Rain intensity changes every lap.
5. Festival meter full = bonus nitro.

### Win / Lose
- **Win:** Win 2 of 3 events
- **Lose:** Win fewer than 2

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows · Space handbrake/drift · Shift nitro | Steer · Drift · Nitro |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Place · Skill · Lap
- **Hint line (shown once, under 60 chars):** "Drift wide in the rain."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Place), **Play Again**

### Difficulty
Easy: grippy tyres · Normal · Hard: heavy rain and faster rivals.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Events | 3 |
| Skill chain window | 2.5 s |
| Rivals | 3 |
| Lap | ~40 s |

## 3 · Look and feel (style kit)

- **Scale unit:** car = 1U, driver inside
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/9FD3E6/9FD3E6.png) | Mid band | `#9FD3E6` |
| ![](https://placehold.co/28x28/C9D6D0/C9D6D0.png) | Ground / play surface | `#C9D6D0` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Accent / rewards | `#FF7B54` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#9FD3E6"`

### Asset sheet (sizes in units)

- Cars: 1U rounded hatchbacks and jeeps with drivers inside
- Waterfalls: soft white ribbons
- Chai stalls and ramps: rounded wood
- Puddles: glossy blue ellipses
- Road signs: rounded

### Background (three quiet hazed bands)

1. **Far:** rain-grey sky with clouds
2. **Mid:** green mountains with waterfalls
3. **Near:** wet road edge with railings

### Juice

- Spray trails from tyres
- Skill chain text grows
- Lightning flash on lap change
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **MONSOON ROADS FESTIVAL** | A car drifting on a mountain road with a waterfall, title on a festival banner |
| 2 · Action | **DRIFT!** | Spray arc behind a sliding car |
| 3 · Win | **FESTIVAL KING!** | Car under a festival arch with confetti in rain |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/monsoon-roads-festival.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/monsoon-roads-festival.txt .shots/monsoon-roads-festival --pause`, then open every PNG
- [ ] **Win path:** scripted lines winning sprint + drift
- [ ] **Lose path:** crash repeatedly
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Monsoon Roads Festival  ·  slug: monsoon-roads-festival
Brief: vs CPU · 2 min · palette family ocean (light) · 3D, three.js r128 from cdnjs
Pitch: A road-racing festival through Western Ghats-style mountain roads in monsoon season. Win drift battles, chain skill combos and beat 3 CPU rivals.
Core: Race with drift and boost; skill combos fill a festival meter.
Rules: (1) 3 events: sprint race, drift battle, speed trap run. (2) Skill chain: drift + near miss + airborne multiply. (3) Crashing breaks the chain. (4) Rain intensity changes every lap. (5) Festival meter full = bonus nitro.
Win: Win 2 of 3 events · Lose: Win fewer than 2
Controls: desktop Arrows · Space handbrake/drift · Shift nitro · touch Steer · Drift · Nitro (max 3 inputs)
HUD: Place · Skill · Lap + pause
Hint: "Drift wide in the rain."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: grippy tyres · Normal · Hard: heavy rain and faster rivals.
Style kit: unit = car = 1U, driver inside; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #9FD3E6, Ground / play surface #C9D6D0, Hero #2F80ED, Accent / rewards #FF7B54
Assets: Cars: 1U rounded hatchbacks and jeeps with drivers inside; Waterfalls: soft white ribbons; Chai stalls and ramps: rounded wood; Puddles: glossy blue ellipses; Road signs: rounded
Background bands: rain-grey sky with clouds / green mountains with waterfalls / wet road edge with railings
Juice: Spray trails from tyres; Skill chain text grows; Lightning flash on lap change
Feed cards: 1) Title: A car drifting on a mountain road with a waterfall, title on a festival banner 2) DRIFT!: Spray arc behind a sliding car 3) FESTIVAL KING!: Car under a festival arch with confetti in rain
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:monsoon-roads-festival:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
