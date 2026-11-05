# 073 · Conveyor Planet

> **Mine it, belt it, ship it.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `8 min` · `sand (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `conveyor-planet` → `src/offline-games/conveyor-planet.txt` |
| **Inspired by (mechanics only)** | Satisfactory / Dyson Sphere Program (factory) |
| **Players** | Solo score-chase |
| **Session** | 8 min |
| **Palette family** | `sand` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:conveyor-planet:best`, `arthis:conveyor-planet:settings` (try/catch) |

### Pitch
Build a top-down factory on a sandy alien planet: miners, belts, smelters and assemblers. Hit 3 delivery phases to launch a rocket.

### Why it can go viral
A sprawling, humming factory is mesmerising to watch.

### What makes it ours

- **Twist:** Power matters: machines slow down in proportion to any power shortfall, so the grid is part of the puzzle.
- **Rule we invented:** Sandstorms bury unsheltered belts for 5 s; cheap awnings protect them.
- **What we cut from the reference:** 3D first-person: top-down 2D grid.

## 2 · Gameplay

### Core mechanic
Place machines and connect belts to meet rates.

### Rules

1. Ore → plates → gears → circuits → rocket parts.
2. Belts move 1 item/s; splitters divide.
3. Power from burners and solar; machines slow if power is short.
4. Each phase demands a rate per minute.
5. Sandstorms bury belts for 5 s unless sheltered.

### Win / Lose
- **Win:** Launch the rocket
- **Lose:** (none) time rank

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click place · R rotate · X delete | Tap · Rotate · Delete |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Rate · Power · Phase
- **Hint line (shown once, under 60 chars):** "Belt it all together."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Rate), **Play Again**

### Difficulty
Easy · Normal · Hard (recipes).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Phases | 3 |
| Belt speed | 1 item/s |

## 3 · Look and feel (style kit)

- **Scale unit:** machine = 2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF1D6/FFF1D6.png) | Far band (sky) | `#FFF1D6` |
| ![](https://placehold.co/28x28/F2D49B/F2D49B.png) | Mid band | `#F2D49B` |
| ![](https://placehold.co/28x28/E9D8B8/E9D8B8.png) | Ground / play surface | `#E9D8B8` |
| ![](https://placehold.co/28x28/E07A5F/E07A5F.png) | Hero | `#E07A5F` |
| ![](https://placehold.co/28x28/3D9A8B/3D9A8B.png) | Accent / rewards | `#3D9A8B` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#F2D49B"`

### Asset sheet (sizes in units)

- Miner: 1.5U rounded drill rig on an ore patch
- Smelter, assembler: 2U rounded machines with a glowing top window
- Belts: 0.5U-wide rounded tracks with moving chevrons
- Solar panel: 1U rounded tile; burner: 1U chimney
- Rocket: 6U on a launch pad

### Background (three quiet hazed bands)

1. **Far:** warm desert haze
2. **Mid:** red mesas
3. **Near:** sand with soft ripples

### Juice

- Items glide on belts
- Phase-complete burst
- Rocket launch flame
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CONVEYOR PLANET** | A factory on a sandy planet |
| 2 · Action | **BUILD!** | Belts snaking between machines |
| 3 · Win | **LAUNCHED!** | Rocket lift-off |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/conveyor-planet.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/conveyor-planet.txt .shots/conveyor-planet --pause`, then open every PNG
- [ ] **Win path:** prebuilt layout that meets all phases
- [ ] **Lose path:** n/a
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Conveyor Planet  ·  slug: conveyor-planet
Brief: Solo score-chase · 8 min · palette family sand (light) · 2D canvas
Pitch: Build a top-down factory on a sandy alien planet: miners, belts, smelters and assemblers. Hit 3 delivery phases to launch a rocket.
Core: Place machines and connect belts to meet rates.
Rules: (1) Ore → plates → gears → circuits → rocket parts. (2) Belts move 1 item/s; splitters divide. (3) Power from burners and solar; machines slow if power is short. (4) Each phase demands a rate per minute. (5) Sandstorms bury belts for 5 s unless sheltered.
Win: Launch the rocket · Lose: (none) time rank
Controls: desktop Click place · R rotate · X delete · touch Tap · Rotate · Delete (max 3 inputs)
HUD: Rate · Power · Phase + pause
Hint: "Belt it all together."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (recipes).
Style kit: unit = machine = 2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F2D49B, Ground / play surface #E9D8B8, Hero #E07A5F, Accent / rewards #3D9A8B
Assets: Miner: 1.5U rounded drill rig on an ore patch; Smelter, assembler: 2U rounded machines with a glowing top window; Belts: 0.5U-wide rounded tracks with moving chevrons; Solar panel: 1U rounded tile; burner: 1U chimney; Rocket: 6U on a launch pad
Background bands: warm desert haze / red mesas / sand with soft ripples
Juice: Items glide on belts; Phase-complete burst; Rocket launch flame
Feed cards: 1) Title: A factory on a sandy planet 2) BUILD!: Belts snaking between machines 3) LAUNCHED!: Rocket lift-off
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:conveyor-planet:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
