# 027 · Ghat Builder

> **Tap the river. Watch a town grow.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `endless` · `peach (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `ghat-builder` → `src/offline-games/ghat-builder.txt` |
| **Inspired by (mechanics only)** | Townscaper (toy town builder) |
| **Players** | Solo score-chase |
| **Session** | endless |
| **Palette family** | `peach` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:ghat-builder:best`, `arthis:ghat-builder:settings` (try/catch) |

### Pitch
A relaxing river-town builder inspired by Indian ghats. Tap the water's edge to add blocks; they shape themselves into steps, temples-free domes, balconies, arches and boats.

### Why it can go viral
Every creation is unique and beautiful; postcard screenshots get shared.

### What makes it ours

- **Twist:** Steps auto-form: blocks next to water become ghat stairs, and lanterns appear at dusk.
- **Rule we invented:** Festival button: at dusk, launch floating diyas (oil lamps) that drift down the river.
- **What we cut from the reference:** Goals and scores: pure sandbox with a postcard mode.

## 2 · Gameplay

### Core mechanic
Tap to add or remove coloured blocks; neighbours decide the shape.

### Rules

1. Blocks on water edges become steps.
2. Stacked blocks gain balconies and domes.
3. Gaps under blocks become arches.
4. Day/night slider in pause sheet.
5. Postcard: hides UI for a clean screenshot.

### Win / Lose
- **Win:** (sandbox) none
- **Lose:** (sandbox) none

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| LMB add · RMB remove · Q colour | Tap add · long-press remove · Colour |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Blocks · Colour · Time of day
- **Hint line (shown once, under 60 chars):** "Tap the river edge to build."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Blocks), **Play Again**

### Difficulty
Pause sheet offers Calm / Golden hour / Night instead of difficulty.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Grid | irregular, 400 cells |
| Colours | 8 |
| Max height | 6 blocks |

## 3 · Look and feel (style kit)

- **Scale unit:** block = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/FFC9A3/FFC9A3.png) | Mid band | `#FFC9A3` |
| ![](https://placehold.co/28x28/7FC8D9/7FC8D9.png) | Ground / play surface | `#7FC8D9` |
| ![](https://placehold.co/28x28/F67E7D/F67E7D.png) | Hero | `#F67E7D` |
| ![](https://placehold.co/28x28/F4D35E/F4D35E.png) | Accent / rewards | `#F4D35E` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#FFC9A3"`

### Asset sheet (sizes in units)

- Blocks: rounded cubes that resolve into stairs, balconies, small domes, arches
- Boats: 1.5U rounded wooden boats
- Diyas: 0.2U glowing lamps
- Kites on rooftops (decor)

### Background (three quiet hazed bands)

1. **Far:** peach sky haze
2. **Mid:** far riverbank silhouette
3. **Near:** calm water with soft ripples

### Juice

- Blocks pop in with a bounce
- Water ripples
- Diyas float with soft glow
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **GHAT BUILDER** | A colourful riverside town of steps and domes at sunset, title on a boat |
| 2 · Action | **BUILD!** | A finger tap making stairs grow into the river |
| 3 · Win | **POSTCARD!** | Floating lamps on the river at dusk |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/ghat-builder.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/ghat-builder.txt .shots/ghat-builder --pause`, then open every PNG
- [ ] **Win path:** place 50 blocks and verify shape rules and postcard mode
- [ ] **Lose path:** n/a (no lose state)
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Ghat Builder  ·  slug: ghat-builder
Brief: Solo score-chase · endless · palette family peach (light) · 3D, three.js r128 from cdnjs
Pitch: A relaxing river-town builder inspired by Indian ghats. Tap the water's edge to add blocks; they shape themselves into steps, temples-free domes, balconies, arches and boats.
Core: Tap to add or remove coloured blocks; neighbours decide the shape.
Rules: (1) Blocks on water edges become steps. (2) Stacked blocks gain balconies and domes. (3) Gaps under blocks become arches. (4) Day/night slider in pause sheet. (5) Postcard: hides UI for a clean screenshot.
Win: (sandbox) none · Lose: (sandbox) none
Controls: desktop LMB add · RMB remove · Q colour · touch Tap add · long-press remove · Colour (max 3 inputs)
HUD: Blocks · Colour · Time of day + pause
Hint: "Tap the river edge to build."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Pause sheet offers Calm / Golden hour / Night instead of difficulty.
Style kit: unit = block = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #FFC9A3, Ground / play surface #7FC8D9, Hero #F67E7D, Accent / rewards #F4D35E
Assets: Blocks: rounded cubes that resolve into stairs, balconies, small domes, arches; Boats: 1.5U rounded wooden boats; Diyas: 0.2U glowing lamps; Kites on rooftops (decor)
Background bands: peach sky haze / far riverbank silhouette / calm water with soft ripples
Juice: Blocks pop in with a bounce; Water ripples; Diyas float with soft glow
Feed cards: 1) Title: A colourful riverside town of steps and domes at sunset, title on a boat 2) BUILD!: A finger tap making stairs grow into the river 3) POSTCARD!: Floating lamps on the river at dusk
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:ghat-builder:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
