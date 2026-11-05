# 096 · Punch Planet Core

> **Punch everything. Go down.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `Solo score-chase` · `3 min` · `jungle (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `punch-planet-core` → `src/offline-games/punch-planet-core.txt` |
| **Inspired by (mechanics only)** | Donkey Kong Bananza (voxel destruction platformer) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `jungle` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:punch-planet-core:best`, `arthis:punch-planet-core:settings` (try/catch) |

### Pitch
A big-armed gorilla punches straight down through a planet's layers (grass, rock, crystal caves, magma, glowing core), ripping out chunks to throw and surf on.

### Why it can go viral
Smashing everything is pure joy.

### What makes it ours

- **Twist:** Layers have different materials and behaviours.
- **Rule we invented:** Chunk surf: ride a thrown chunk down slopes.
- **What we cut from the reference:** Big world: 5 layers.

## 2 · Gameplay

### Core mechanic
Punch, rip, throw, dig down.

### Rules

1. 5 layers: grass, rock, crystal, magma, core.
2. Gems unlock stronger punches.
3. Each layer has hazards.
4. 3 lives.
5. Reach the core.

### Win / Lose
- **Win:** Reach the core
- **Lose:** 3 lives lost

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J punch · Space jump | Stick · Punch · Jump |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Depth · Gems · Lives
- **Hint line (shown once, under 60 chars):** "Punch everything. Go down."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Depth), **Play Again**

### Difficulty
Easy: soft layers · Normal · Hard: magma rises faster.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Layers | 5 |
| Lives | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** gorilla = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/E4F7D9/E4F7D9.png) | Far band (sky) | `#E4F7D9` |
| ![](https://placehold.co/28x28/B5DFA0/B5DFA0.png) | Mid band | `#B5DFA0` |
| ![](https://placehold.co/28x28/C9A27A/C9A27A.png) | Ground / play surface | `#C9A27A` |
| ![](https://placehold.co/28x28/8B5E34/8B5E34.png) | Hero | `#8B5E34` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#E4F7D9"`, `bgColorDark: "#B5DFA0"`

### Asset sheet (sizes in units)

- Gorilla: 1U with big arms
- Voxel layers
- Gems: 0.3U

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** cliffs
3. **Near:** ground

### Juice

- Chunk debris
- Punch shake
- Gem chime
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PUNCH PLANET CORE** | A gorilla mid-punch cracking the ground, title carved in rock |
| 2 · Action | **PUNCH!** | Rock chunks exploding outward |
| 3 · Win | **CORE!** | Gorilla beside the glowing planet core |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/punch-planet-core.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/punch-planet-core.txt .shots/punch-planet-core --pause`, then open every PNG
- [ ] **Win path:** scripted dig route to the core
- [ ] **Lose path:** jump into magma 3 times
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Punch Planet Core  ·  slug: punch-planet-core
Brief: Solo score-chase · 3 min · palette family jungle (light) · 3D, three.js r128 from cdnjs
Pitch: A big-armed gorilla punches straight down through a planet's layers (grass, rock, crystal caves, magma, glowing core), ripping out chunks to throw and surf on.
Core: Punch, rip, throw, dig down.
Rules: (1) 5 layers: grass, rock, crystal, magma, core. (2) Gems unlock stronger punches. (3) Each layer has hazards. (4) 3 lives. (5) Reach the core.
Win: Reach the core · Lose: 3 lives lost
Controls: desktop WASD · J punch · Space jump · touch Stick · Punch · Jump (max 3 inputs)
HUD: Depth · Gems · Lives + pause
Hint: "Punch everything. Go down."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: soft layers · Normal · Hard: magma rises faster.
Style kit: unit = gorilla = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #E4F7D9, Mid band #B5DFA0, Ground / play surface #C9A27A, Hero #8B5E34, Accent / rewards #FFD166
Assets: Gorilla: 1U with big arms; Voxel layers; Gems: 0.3U
Background bands: sky / cliffs / ground
Juice: Chunk debris; Punch shake; Gem chime
Feed cards: 1) Title: A gorilla mid-punch cracking the ground, title carved in rock 2) PUNCH!: Rock chunks exploding outward 3) CORE!: Gorilla beside the glowing planet core
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:punch-planet-core:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
