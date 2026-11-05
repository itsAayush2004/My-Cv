# 078 · Metro Mini City

> **Draw the lines. Keep the city moving.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `6 min` · `paper (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `metro-mini-city` → `src/offline-games/metro-mini-city.txt` |
| **Inspired by (mechanics only)** | Cities: Skylines (city builder, made mini) |
| **Players** | Solo score-chase |
| **Session** | 6 min |
| **Palette family** | `paper` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:metro-mini-city:best`, `arthis:metro-mini-city:settings` (try/catch) |

### Pitch
Zone tiny city blocks on a paper map and draw bus lines so citizens get from home to work and shops. Keep lines from overloading as rush hours hit, and reach 5,000 people.

### Why it can go viral
Clean map-like visuals and calm problem solving.

### What makes it ours

- **Twist:** Traffic meter: overloaded bus lines jam and fill it.
- **Rule we invented:** Rush hour every 60 s doubles commuters.
- **What we cut from the reference:** Services and budgets: zones and lines only.

## 2 · Gameplay

### Core mechanic
Zone and route.

### Rules

1. Zones: home, shop, work.
2. Bus lines connect zones.
3. Overloaded lines jam and fill the traffic meter.
4. Rush hour every 60 s.
5. Upgrade buses with money.

### Win / Lose
- **Win:** 5,000 population
- **Lose:** Traffic meter full

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag line · click zone · Q tool | Drag · tap · Tool |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Pop · Money · Traffic
- **Hint line (shown once, under 60 chars):** "Draw roads. Watch it grow."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Pop), **Play Again**

### Difficulty
Easy: slow demand · Normal · Hard: rush hour every 40 s.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Goal | 5,000 |
| Rush hour | every 60 s |
| Bus capacity | 20 |
| Lines | 5 max |

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
| ![](https://placehold.co/28x28/FBF6EC/FBF6EC.png) | Far band (sky) | `#FBF6EC` |
| ![](https://placehold.co/28x28/E7DDC8/E7DDC8.png) | Mid band | `#E7DDC8` |
| ![](https://placehold.co/28x28/F2EBDD/F2EBDD.png) | Ground / play surface | `#F2EBDD` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/F25F5C/F25F5C.png) | Accent / rewards | `#F25F5C` |

Catalog colours: `bgColorLight: "#FBF6EC"`, `bgColorDark: "#E7DDC8"`

### Asset sheet (sizes in units)

- City blocks: 1U rounded squares in zone colours
- Buses: 0.4U rounded pills
- Stops: 0.3U circles
- River and bridges: soft blue band
- Parks: rounded green patches

### Background (three quiet hazed bands)

1. **Far:** paper background
2. **Mid:** river
3. **Near:** street grid

### Juice

- Buses glide
- Population counter
- Jam warning
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **METRO MINI CITY** | A paper city map |
| 2 · Action | **ZONE!** | Blocks popping up |
| 3 · Win | **MEGACITY!** | Busy lines at night |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/metro-mini-city.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/metro-mini-city.txt .shots/metro-mini-city --pause`, then open every PNG
- [ ] **Win path:** scripted lines to the goal
- [ ] **Lose path:** no lines
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Metro Mini City  ·  slug: metro-mini-city
Brief: Solo score-chase · 6 min · palette family paper (light) · 2D canvas
Pitch: Zone tiny city blocks on a paper map and draw bus lines so citizens get from home to work and shops. Keep lines from overloading as rush hours hit, and reach 5,000 people.
Core: Zone and route.
Rules: (1) Zones: home, shop, work. (2) Bus lines connect zones. (3) Overloaded lines jam and fill the traffic meter. (4) Rush hour every 60 s. (5) Upgrade buses with money.
Win: 5,000 population · Lose: Traffic meter full
Controls: desktop Drag line · click zone · Q tool · touch Drag · tap · Tool (max 3 inputs)
HUD: Pop · Money · Traffic + pause
Hint: "Draw roads. Watch it grow."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow demand · Normal · Hard: rush hour every 40 s.
Style kit: unit = block = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FBF6EC, Mid band #E7DDC8, Ground / play surface #F2EBDD, Hero #5B8DEF, Accent / rewards #F25F5C
Assets: City blocks: 1U rounded squares in zone colours; Buses: 0.4U rounded pills; Stops: 0.3U circles; River and bridges: soft blue band; Parks: rounded green patches
Background bands: paper background / river / street grid
Juice: Buses glide; Population counter; Jam warning
Feed cards: 1) Title: A paper city map 2) ZONE!: Blocks popping up 3) MEGACITY!: Busy lines at night
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:metro-mini-city:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
