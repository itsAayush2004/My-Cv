# 026 · Wall Wash Wonders

> **Spray. Sparkle. Reveal the mural.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `2–3 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `wall-wash-wonders` → `src/offline-games/wall-wash-wonders.txt` |
| **Inspired by (mechanics only)** | PowerWash Simulator (satisfying cleaning) |
| **Players** | Solo score-chase |
| **Session** | 2–3 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:wall-wash-wonders:best`, `arthis:wall-wash-wonders:settings` (try/catch) |

### Pitch
Pressure-wash a dirty city wall to reveal a hidden painted mural underneath. Every section chimes when it's 100% clean.

### Why it can go viral
The reveal: grime peeling away to show a bright mural (an elephant parade, a monsoon street) is ASMR-level satisfying.

### What makes it ours

- **Twist:** Layers: mud, then soot, then old posters, and each needs a different nozzle.
- **Rule we invented:** Sparkle combo: cleaning without stopping for 3 s builds a sparkle meter that widens your spray.
- **What we cut from the reference:** Big map list: 5 murals.

## 2 · Gameplay

### Core mechanic
Hold to spray; dirt mask erodes in real time; switch nozzle for different grime.

### Rules

1. 3 nozzles: narrow (soot), wide (mud), scraper (posters).
2. Wrong nozzle cleans 25% speed.
3. Each section pings at 100%.
4. Finish under the par time for 3 stars.
5. Mural reveals fully at 100%.

### Win / Lose
- **Win:** Wall 100% clean
- **Lose:** (gentle) none: stars by time

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Mouse hold spray · Q nozzle · Space zoom | Drag spray · Nozzle · Zoom |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Clean % · Sections · Time
- **Hint line (shown once, under 60 chars):** "Spray until it sparkles."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Clean %), **Play Again**

### Difficulty
Easy: thin grime · Normal · Hard: thick layers and tight par times.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Murals | 5 |
| Mask resolution | 256 × 160 |
| Par time | 120 s |
| Sparkle build | 3 s |

## 3 · Look and feel (style kit)

- **Scale unit:** washer person = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/A8DDEE/A8DDEE.png) | Mid band | `#A8DDEE` |
| ![](https://placehold.co/28x28/E8F7FC/E8F7FC.png) | Ground / play surface | `#E8F7FC` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FFC857/FFC857.png) | Accent / rewards | `#FFC857` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#A8DDEE"`

### Asset sheet (sizes in units)

- Washer: 1U, rain boots, spray wand parented to hands, hose curls
- Wall: 10U wide rounded bricks; mural in flat shapes
- Grime: soft blobs, soot, curled posters
- Bucket and hose reel: 0.5U

### Background (three quiet hazed bands)

1. **Far:** clear blue sky
2. **Mid:** soft city skyline
3. **Near:** pavement with puddles

### Juice

- Section chime + sparkle burst
- Water droplets and mist
- Mural reveal camera pull-back
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **WALL WASH WONDERS** | A washer facing a grimy wall with a glimpse of colour, title painted |
| 2 · Action | **SPARKLE!** | A spray beam revealing a bright elephant mural |
| 3 · Win | **SPOTLESS!** | The full mural shining with the washer bowing |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/wall-wash-wonders.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/wall-wash-wonders.txt .shots/wall-wash-wonders --pause`, then open every PNG
- [ ] **Win path:** scripted spray sweep with correct nozzles to 100%
- [ ] **Lose path:** not applicable: play until par to verify stars
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Wall Wash Wonders  ·  slug: wall-wash-wonders
Brief: Solo score-chase · 2–3 min · palette family ocean (light) · 2D canvas
Pitch: Pressure-wash a dirty city wall to reveal a hidden painted mural underneath. Every section chimes when it's 100% clean.
Core: Hold to spray; dirt mask erodes in real time; switch nozzle for different grime.
Rules: (1) 3 nozzles: narrow (soot), wide (mud), scraper (posters). (2) Wrong nozzle cleans 25% speed. (3) Each section pings at 100%. (4) Finish under the par time for 3 stars. (5) Mural reveals fully at 100%.
Win: Wall 100% clean · Lose: (gentle) none: stars by time
Controls: desktop Mouse hold spray · Q nozzle · Space zoom · touch Drag spray · Nozzle · Zoom (max 3 inputs)
HUD: Clean % · Sections · Time + pause
Hint: "Spray until it sparkles."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: thin grime · Normal · Hard: thick layers and tight par times.
Style kit: unit = washer person = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #A8DDEE, Ground / play surface #E8F7FC, Hero #2F80ED, Accent / rewards #FFC857
Assets: Washer: 1U, rain boots, spray wand parented to hands, hose curls; Wall: 10U wide rounded bricks; mural in flat shapes; Grime: soft blobs, soot, curled posters; Bucket and hose reel: 0.5U
Background bands: clear blue sky / soft city skyline / pavement with puddles
Juice: Section chime + sparkle burst; Water droplets and mist; Mural reveal camera pull-back
Feed cards: 1) Title: A washer facing a grimy wall with a glimpse of colour, title painted 2) SPARKLE!: A spray beam revealing a bright elephant mural 3) SPOTLESS!: The full mural shining with the washer bowing
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:wall-wash-wonders:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
