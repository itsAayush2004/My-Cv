# 093 · Glide Grand Prix

> **One button. All gas. No brakes.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `vs CPU` · `90 s` · `candy (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `glide-grand-prix` → `src/offline-games/glide-grand-prix.txt` |
| **Inspired by (mechanics only)** | Kirby Air Riders (one-button racing) |
| **Players** | vs CPU |
| **Session** | 90 s |
| **Palette family** | `candy` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:glide-grand-prix:best`, `arthis:glide-grand-prix:settings` (try/catch) |

### Pitch
Riders auto-accelerate on star-gliders. Hold the one button to brake and charge, release to boost. First 60 s: collect stat power-ups in a floating city; then race.

### Why it can go viral
Simple controls, chaotic results: perfect for anyone to pick up from the feed.

### What makes it ours

- **Twist:** Build then race: your city-trial power-ups decide your machine's stats for the final race.
- **Rule we invented:** Slipstream ribbons: riding behind another rider fills your charge faster.
- **What we cut from the reference:** Many modes: trial + one race.

## 2 · Gameplay

### Core mechanic
Hold to charge in corners, release to boost; collect stat orbs.

### Rules

1. Phase 1 (60 s): collect speed, glide, turn, boost orbs.
2. Phase 2: 2-lap race vs 7 CPU.
3. Holding the button slows you and charges boost.
4. Release boost = speed burst.
5. Ramps: glide stat extends airtime.

### Win / Lose
- **Win:** Finish 1st
- **Lose:** Finish below 1st

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows steer · hold Space charge · Shift (none) | Tilt/steer · Hold |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Place · Charge · Time
- **Hint line (shown once, under 60 chars):** "Hold to charge. Release to boost!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Place), **Play Again**

### Difficulty
Easy: slower CPU · Normal · Hard: CPU drafts you.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Trial | 60 s |
| Laps | 2 |
| Racers | 8 |
| Orb types | 4 |

## 3 · Look and feel (style kit)

- **Scale unit:** rider = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/FFC4DD/FFC4DD.png) | Mid band | `#FFC4DD` |
| ![](https://placehold.co/28x28/FFF0F6/FFF0F6.png) | Ground / play surface | `#FFF0F6` |
| ![](https://placehold.co/28x28/7B61FF/7B61FF.png) | Hero | `#7B61FF` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#FFC4DD"`

### Asset sheet (sizes in units)

- Riders: 1U round puffs on star-gliders
- Stat orbs: 0.4U coloured
- Floating city: rounded pastel towers
- Ramps and rings

### Background (three quiet hazed bands)

1. **Far:** pink sky with stars
2. **Mid:** floating islands
3. **Near:** cloud road

### Juice

- Charge glow grows
- Boost streaks
- Stat orb chime
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **GLIDE GRAND PRIX** | Riders on star-gliders over a pastel city, title in balloon letters |
| 2 · Action | **BOOST!** | A rider launching off a ramp with streaks |
| 3 · Win | **1ST!** | Rider on a cloud podium |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/glide-grand-prix.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/glide-grand-prix.txt .shots/glide-grand-prix --pause`, then open every PNG
- [ ] **Win path:** scripted collect + charge/boost to win
- [ ] **Lose path:** never release the button
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Glide Grand Prix  ·  slug: glide-grand-prix
Brief: vs CPU · 90 s · palette family candy (light) · 3D, three.js r128 from cdnjs
Pitch: Riders auto-accelerate on star-gliders. Hold the one button to brake and charge, release to boost. First 60 s: collect stat power-ups in a floating city; then race.
Core: Hold to charge in corners, release to boost; collect stat orbs.
Rules: (1) Phase 1 (60 s): collect speed, glide, turn, boost orbs. (2) Phase 2: 2-lap race vs 7 CPU. (3) Holding the button slows you and charges boost. (4) Release boost = speed burst. (5) Ramps: glide stat extends airtime.
Win: Finish 1st · Lose: Finish below 1st
Controls: desktop Arrows steer · hold Space charge · Shift (none) · touch Tilt/steer · Hold (max 3 inputs)
HUD: Place · Charge · Time + pause
Hint: "Hold to charge. Release to boost!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slower CPU · Normal · Hard: CPU drafts you.
Style kit: unit = rider = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #FFC4DD, Ground / play surface #FFF0F6, Hero #7B61FF, Accent / rewards #FFD36E
Assets: Riders: 1U round puffs on star-gliders; Stat orbs: 0.4U coloured; Floating city: rounded pastel towers; Ramps and rings
Background bands: pink sky with stars / floating islands / cloud road
Juice: Charge glow grows; Boost streaks; Stat orb chime
Feed cards: 1) Title: Riders on star-gliders over a pastel city, title in balloon letters 2) BOOST!: A rider launching off a ramp with streaks 3) 1ST!: Rider on a cloud podium
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:glide-grand-prix:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
