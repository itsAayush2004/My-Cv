# 002 · Jellyjam Gauntlet

> **20 gummies. One golden spoon.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `90 s` · `candy (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `jellyjam-gauntlet` → `src/offline-games/jellyjam-gauntlet.txt` |
| **Inspired by (mechanics only)** | Fall Guys / Stumble Guys (party knockout) |
| **Players** | Solo score-chase |
| **Session** | 90 s |
| **Palette family** | `candy` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:jellyjam-gauntlet:best`, `arthis:jellyjam-gauntlet:settings` (try/catch) |

### Pitch
Wobbly gummy candies race across a giant kitchen-counter game show. Survive 3 knockout rounds against 19 CPU gummies to grab the Golden Spoon.

### Why it can go viral
Squishy fails (a gummy flattened by a rolling pin and slowly re-inflating) are instantly shareable, and every round is short enough to rematch.

### What makes it ours

- **Twist:** Gummies stick together on fast collisions: you can get glued to a rival for 1.5 s and drag each other into or out of trouble.
- **Rule we invented:** Sugar rush: collecting 3 sprinkles gives a 3 s speed burst with a rainbow trail.
- **What we cut from the reference:** 60-player online lobbies, cosmetics shop and round voting: 3 fixed rounds vs CPU.

## 2 · Gameplay

### Core mechanic
Run, jump and dive through moving kitchen hazards; qualify above the cut line each round.

### Rules

1. Round 1, Whisk Run: first 12 of 20 to the finish qualify.
2. Round 2, Sugar Glass: tiles crack 0.8 s after you step on them; last 6 standing qualify.
3. Round 3, Cake Crown: climb a slowly spinning cake and grab the spoon on top.
4. Collisions faster than 6 U/s glue gummies together for 1.5 s.
5. Falling off respawns you at the last checkpoint (rounds 1 and 3) or eliminates you (round 2).

### Win / Lose
- **Win:** Grab the Golden Spoon in round 3
- **Lose:** Miss the qualifying cut in any round

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Space jump · Shift dive | Joystick · Jump · Dive |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Round · Place · Time
- **Hint line (shown once, under 60 chars):** "Jump the whisks. Dive for the line!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Round), **Play Again**

### Difficulty
Easy: CPU gummies 85% speed, slow whisks · Normal: 100% · Hard: 110% CPU speed, whisks ×1.4, tiles crack in 0.6 s.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Run speed | 6 U/s |
| Jump | 1.4 U |
| Dive | 2.5 U |
| Glass crack | 0.8 s |
| Round time cap | 40 s |

## 3 · Look and feel (style kit)

- **Scale unit:** gummy height = 1U
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
| ![](https://placehold.co/28x28/C9F2E3/C9F2E3.png) | Ground / play surface | `#C9F2E3` |
| ![](https://placehold.co/28x28/FF4D6D/FF4D6D.png) | Hero | `#FF4D6D` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#FFC4DD"`

### Asset sheet (sizes in units)

- Gummy: 1U rounded bear-ish bean, translucent-looking flat colour with a lighter top face and dot eyes
- Whisk: 3U spinning loops, chrome-grey rounded wires
- Rolling pin: 4U long, rounded wood tube
- Sugar glass tile: 1.5U hex, pale mint with lighter top
- Cake: 8U tiered, frosting drips with rounded edges
- Sprinkle pickup: 0.3U pill shapes

### Background (three quiet hazed bands)

1. **Far:** pink kitchen wall with soft haze
2. **Mid:** blurred cupboards and jars
3. **Near:** counter edge with a soft cream gradient

### Juice

- Squash on every landing, jiggle on idle
- Sprinkle confetti on qualify
- Slow-motion on the spoon grab
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **JELLYJAM GAUNTLET** | Gummies lined up at the start line on a giant kitchen counter, title in glossy candy letters |
| 2 · Action | **DIVE!** | A red gummy diving under a spinning whisk with others flying |
| 3 · Win | **SPOON GET!** | Your gummy holding the golden spoon on top of a cake, confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/jellyjam-gauntlet.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/jellyjam-gauntlet.txt .shots/jellyjam-gauntlet --pause`, then open every PNG
- [ ] **Win path:** race with scripted inputs to qualify in all 3 rounds and touch the spoon
- [ ] **Lose path:** stand still at the start of round 1 so the cut fills
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Jellyjam Gauntlet  ·  slug: jellyjam-gauntlet
Brief: Solo score-chase · 90 s · palette family candy (light) · 3D, three.js r128 from cdnjs
Pitch: Wobbly gummy candies race across a giant kitchen-counter game show. Survive 3 knockout rounds against 19 CPU gummies to grab the Golden Spoon.
Core: Run, jump and dive through moving kitchen hazards; qualify above the cut line each round.
Rules: (1) Round 1, Whisk Run: first 12 of 20 to the finish qualify. (2) Round 2, Sugar Glass: tiles crack 0.8 s after you step on them; last 6 standing qualify. (3) Round 3, Cake Crown: climb a slowly spinning cake and grab the spoon on top. (4) Collisions faster than 6 U/s glue gummies together for 1.5 s. (5) Falling off respawns you at the last checkpoint (rounds 1 and 3) or eliminates you (round 2).
Win: Grab the Golden Spoon in round 3 · Lose: Miss the qualifying cut in any round
Controls: desktop WASD move · Space jump · Shift dive · touch Joystick · Jump · Dive (max 3 inputs)
HUD: Round · Place · Time + pause
Hint: "Jump the whisks. Dive for the line!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: CPU gummies 85% speed, slow whisks · Normal: 100% · Hard: 110% CPU speed, whisks ×1.4, tiles crack in 0.6 s.
Style kit: unit = gummy height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #FFC4DD, Ground / play surface #C9F2E3, Hero #FF4D6D, Accent / rewards #FFD36E
Assets: Gummy: 1U rounded bear-ish bean, translucent-looking flat colour with a lighter top face and dot eyes; Whisk: 3U spinning loops, chrome-grey rounded wires; Rolling pin: 4U long, rounded wood tube; Sugar glass tile: 1.5U hex, pale mint with lighter top; Cake: 8U tiered, frosting drips with rounded edges; Sprinkle pickup: 0.3U pill shapes
Background bands: pink kitchen wall with soft haze / blurred cupboards and jars / counter edge with a soft cream gradient
Juice: Squash on every landing, jiggle on idle; Sprinkle confetti on qualify; Slow-motion on the spoon grab
Feed cards: 1) Title: Gummies lined up at the start line on a giant kitchen counter, title in glossy candy letters 2) DIVE!: A red gummy diving under a spinning whisk with others flying 3) SPOON GET!: Your gummy holding the golden spoon on top of a cake, confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:jellyjam-gauntlet:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
