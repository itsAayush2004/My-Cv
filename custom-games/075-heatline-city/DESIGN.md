# 075 · Heatline City

> **Keep the heat on. Keep them hoping.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `8 min` · `snow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `heatline-city` → `src/offline-games/heatline-city.txt` |
| **Inspired by (mechanics only)** | Frostpunk (survival city) |
| **Players** | Solo score-chase |
| **Session** | 8 min |
| **Palette family** | `snow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:heatline-city:best`, `arthis:heatline-city:settings` (try/catch) |

### Pitch
A city huddles around a giant heater in an endless winter. Place districts in the warm rings, keep coal and food flowing, vote laws through a small council, and survive 5 storms.

### Why it can go viral
Tough choices and the storm countdown create tension.

### What makes it ours

- **Twist:** Heat rings: anything outside the heater's warm rings slowly freezes.
- **Rule we invented:** Council votes: laws need a majority of 3 faction seats.
- **What we cut from the reference:** Deep faction politics: 2 factions, 6 laws.

## 2 · Gameplay

### Core mechanic
Place districts, balance resources, pass laws.

### Rules

1. Districts: housing, food, coal, workshop.
2. Heat rings: districts nearer the heater stay warm.
3. Storms drop temperature for 30 s.
4. Unrest rises with cold and hunger.
5. Council votes on laws (overtime, soup kitchens).

### Win / Lose
- **Win:** Survive storm 5
- **Lose:** Heat 0 or unrest full

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click place · V vote · Space speed | Tap · Vote · Speed |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Heat · Fuel · Unrest
- **Hint line (shown once, under 60 chars):** "Keep the heat on."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Heat), **Play Again**

### Difficulty
Easy: short storms · Normal · Hard: long storms and an angrier council.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Storms | 5 |
| Storm length | 30 s |
| Heat rings | 3 |
| Laws | 6 |

## 3 · Look and feel (style kit)

- **Scale unit:** district = 2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/EEF6FF/EEF6FF.png) | Far band (sky) | `#EEF6FF` |
| ![](https://placehold.co/28x28/C9DCEB/C9DCEB.png) | Mid band | `#C9DCEB` |
| ![](https://placehold.co/28x28/DCE6EF/DCE6EF.png) | Ground / play surface | `#DCE6EF` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Hero | `#FF7B54` |
| ![](https://placehold.co/28x28/2B3A55/2B3A55.png) | Accent / rewards | `#2B3A55` |

Catalog colours: `bgColorLight: "#EEF6FF"`, `bgColorDark: "#C9DCEB"`

### Asset sheet (sizes in units)

- Heater: 4U glowing round tower
- Districts: 2U rounded blocks (housing, food, coal, workshop)
- Snow drifts: soft white mounds
- Citizens: 0.3U dots in coats
- Council table: rounded with 3 seats

### Background (three quiet hazed bands)

1. **Far:** white sky with snowfall
2. **Mid:** ice cliffs
3. **Near:** snow plain

### Juice

- Steam plumes
- Storm whiteout
- Vote stamp
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HEATLINE CITY** | A glowing heater in a snowy crater |
| 2 · Action | **VOTE!** | Council stamping a law |
| 3 · Win | **CITY ENDURES!** | City lights at dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/heatline-city.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/heatline-city.txt .shots/heatline-city --pause`, then open every PNG
- [ ] **Win path:** scripted builds and votes to survive
- [ ] **Lose path:** no coal
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Heatline City  ·  slug: heatline-city
Brief: Solo score-chase · 8 min · palette family snow (light) · 2D canvas
Pitch: A city huddles around a giant heater in an endless winter. Place districts in the warm rings, keep coal and food flowing, vote laws through a small council, and survive 5 storms.
Core: Place districts, balance resources, pass laws.
Rules: (1) Districts: housing, food, coal, workshop. (2) Heat rings: districts nearer the heater stay warm. (3) Storms drop temperature for 30 s. (4) Unrest rises with cold and hunger. (5) Council votes on laws (overtime, soup kitchens).
Win: Survive storm 5 · Lose: Heat 0 or unrest full
Controls: desktop Click place · V vote · Space speed · touch Tap · Vote · Speed (max 3 inputs)
HUD: Heat · Fuel · Unrest + pause
Hint: "Keep the heat on."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: short storms · Normal · Hard: long storms and an angrier council.
Style kit: unit = district = 2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #EEF6FF, Mid band #C9DCEB, Ground / play surface #DCE6EF, Hero #FF7B54, Accent / rewards #2B3A55
Assets: Heater: 4U glowing round tower; Districts: 2U rounded blocks (housing, food, coal, workshop); Snow drifts: soft white mounds; Citizens: 0.3U dots in coats; Council table: rounded with 3 seats
Background bands: white sky with snowfall / ice cliffs / snow plain
Juice: Steam plumes; Storm whiteout; Vote stamp
Feed cards: 1) Title: A glowing heater in a snowy crater 2) VOTE!: Council stamping a law 3) CITY ENDURES!: City lights at dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:heatline-city:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
