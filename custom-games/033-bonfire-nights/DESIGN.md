# 033 · Bonfire Nights

> **Feed the fire. Light the deer.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `5 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `bonfire-nights` → `src/offline-games/bonfire-nights.txt` |
| **Inspired by (mechanics only)** | 99 Nights in the Forest (campfire survival) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:bonfire-nights:best`, `arthis:bonfire-nights:settings` (try/catch) |

### Pitch
Lost in a forest, you keep a campfire alive through 10 nights. Gather wood by day, rescue lost kids, and keep a shadowy deer-creature away with your flashlight.

### Why it can go viral
Night tension and the deer stare-down make great short clips.

### What makes it ours

- **Twist:** The fire's light radius is your safe zone and shrinks as wood burns.
- **Rule we invented:** Kid helpers: each rescued kid automatically gathers a log every night.
- **What we cut from the reference:** 99 nights and co-op classes: 10 nights solo.

## 2 · Gameplay

### Core mechanic
Day: gather logs. Night: stay near the fire and beam the deer away.

### Rules

1. Day 40 s, night 30 s.
2. Fire burns 1 log per 6 s; 0 logs = fire out.
3. Flashlight on the deer for 1.5 s pushes it back; battery recharges by the fire.
4. 4 lost kids hidden in the forest; rescue them by day.
5. Upgrade the fire (stones, then a pit) to slow burning.

### Win / Lose
- **Win:** Survive night 10
- **Lose:** Fire goes out, or the deer reaches you

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · E gather/rescue · F flashlight | Joystick · Gather · Light |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Logs · Night · Battery
- **Hint line (shown once, under 60 chars):** "Feed the fire. Light the deer."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Logs), **Play Again**

### Difficulty
Easy: slow burn · Normal · Hard: deer comes twice per night.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Nights | 10 |
| Burn rate | 1 log/6 s |
| Light push | 1.5 s |
| Kids | 4 |

## 3 · Look and feel (style kit)

- **Scale unit:** player height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/22304F/22304F.png) | Mid band | `#22304F` |
| ![](https://placehold.co/28x28/2D3A30/2D3A30.png) | Ground / play surface | `#2D3A30` |
| ![](https://placehold.co/28x28/FF9F1C/FF9F1C.png) | Hero | `#FF9F1C` |
| ![](https://placehold.co/28x28/FFE8A3/FFE8A3.png) | Accent / rewards | `#FFE8A3` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#22304F"`

### Asset sheet (sizes in units)

- Player: 1U in a puffer jacket, flashlight parented to hand
- Trees: 3U rounded pines, one family
- Logs: 0.5U
- Deer creature: 2U dark silhouette with glowing eyes (not gory)
- Kids: 0.7U lost campers

### Background (three quiet hazed bands)

1. **Far:** night sky with soft stars
2. **Mid:** dark tree line haze
3. **Near:** forest floor

### Juice

- Fire sparks rise
- Flashlight beam flare on the deer
- Night counter flips with a gong
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **BONFIRE NIGHTS** | A camper by a campfire in a dark forest, title glowing in the smoke |
| 2 · Action | **LIGHT!** | Flashlight beam hitting glowing deer eyes |
| 3 · Win | **NIGHT 10!** | Dawn breaking over the camp with rescued kids |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/bonfire-nights.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/bonfire-nights.txt .shots/bonfire-nights --pause`, then open every PNG
- [ ] **Win path:** scripted gather routes and beam timing to night 10
- [ ] **Lose path:** never add wood
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Bonfire Nights  ·  slug: bonfire-nights
Brief: Solo score-chase · 5 min · palette family night (dark) · 2D canvas
Pitch: Lost in a forest, you keep a campfire alive through 10 nights. Gather wood by day, rescue lost kids, and keep a shadowy deer-creature away with your flashlight.
Core: Day: gather logs. Night: stay near the fire and beam the deer away.
Rules: (1) Day 40 s, night 30 s. (2) Fire burns 1 log per 6 s; 0 logs = fire out. (3) Flashlight on the deer for 1.5 s pushes it back; battery recharges by the fire. (4) 4 lost kids hidden in the forest; rescue them by day. (5) Upgrade the fire (stones, then a pit) to slow burning.
Win: Survive night 10 · Lose: Fire goes out, or the deer reaches you
Controls: desktop WASD move · E gather/rescue · F flashlight · touch Joystick · Gather · Light (max 3 inputs)
HUD: Logs · Night · Battery + pause
Hint: "Feed the fire. Light the deer."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow burn · Normal · Hard: deer comes twice per night.
Style kit: unit = player height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #22304F, Ground / play surface #2D3A30, Hero #FF9F1C, Accent / rewards #FFE8A3
Assets: Player: 1U in a puffer jacket, flashlight parented to hand; Trees: 3U rounded pines, one family; Logs: 0.5U; Deer creature: 2U dark silhouette with glowing eyes (not gory); Kids: 0.7U lost campers
Background bands: night sky with soft stars / dark tree line haze / forest floor
Juice: Fire sparks rise; Flashlight beam flare on the deer; Night counter flips with a gong
Feed cards: 1) Title: A camper by a campfire in a dark forest, title glowing in the smoke 2) LIGHT!: Flashlight beam hitting glowing deer eyes 3) NIGHT 10!: Dawn breaking over the camp with rescued kids
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:bonfire-nights:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
