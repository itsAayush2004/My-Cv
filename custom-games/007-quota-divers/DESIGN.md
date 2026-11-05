# 007 · Quota Divers

> **The company needs scrap. The deep needs a snack.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `3 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `quota-divers` → `src/offline-games/quota-divers.txt` |
| **Inspired by (mechanics only)** | Lethal Company (co-op salvage horror) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:quota-divers:best`, `arthis:quota-divers:settings` (try/catch) |

### Pitch
You're a cheap deep-sea salvage diver. Grab scrap from a sunken ship to hit the company's quota in 3 dives, with oxygen and creatures against you.

### Why it can go viral
Greed versus air: hauling one more heavy statue and barely making it back is a perfect tense clip.

### What makes it ours

- **Twist:** Oxygen comes from the sub on a hose: the hose length limits how deep you go, and heavier loads burn O₂ faster.
- **Rule we invented:** Sonar ping: tap to reveal scrap and creatures for 1 s, but creatures hear it.
- **What we cut from the reference:** 4-player voice and moons: solo diver, one wreck with 3 dives.

## 2 · Gameplay

### Core mechanic
Swim down, grab scrap (weight slows you), return to the sub before O₂ runs out.

### Rules

1. 3 dives; quota must be met by the end of dive 3.
2. Scrap: light (fast), medium, heavy (half speed, 2× O₂).
3. Lantern fish lure you with light: don't follow it into the dark.
4. Hatch crabs only move while you're lit; switch off your lamp to freeze them.
5. Returning to the sub banks scrap value.

### Win / Lose
- **Win:** Quota met after dive 3
- **Lose:** O₂ empty or quota missed

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD swim · E grab/drop · Space sonar | Joystick · Grab · Sonar |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** O₂ · Banked · Dive
- **Hint line (shown once, under 60 chars):** "Heavy scrap burns air. Get back!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (O₂), **Play Again**

### Difficulty
Easy: quota 300 · Normal: 450 · Hard: 600 and more creatures.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| O₂ | 60 s per dive |
| Heavy O₂ cost | ×2 |
| Quota (Normal) | 450 |
| Sonar cooldown | 5 s |
| Hose length | 14 U |

## 3 · Look and feel (style kit)

- **Scale unit:** diver height = 1U (round brass helmet)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/0A2A3D/0A2A3D.png) | Far band (sky) | `#0A2A3D` |
| ![](https://placehold.co/28x28/123E57/123E57.png) | Mid band | `#123E57` |
| ![](https://placehold.co/28x28/1E5F74/1E5F74.png) | Ground / play surface | `#1E5F74` |
| ![](https://placehold.co/28x28/FF8C42/FF8C42.png) | Hero | `#FF8C42` |
| ![](https://placehold.co/28x28/7CFFCB/7CFFCB.png) | Accent / rewards | `#7CFFCB` |

Catalog colours: `bgColorLight: "#0A2A3D"`, `bgColorDark: "#123E57"`

### Asset sheet (sizes in units)

- Diver: 1U, big rounded brass helmet, lamp on helmet
- Sub: 3U rounded yellow sub with hose reel
- Scrap: 0.3–0.8U (cup, bell, statue, anchor), one rusty-brass family
- Lantern fish: 0.7U, glowing lure
- Hatch crab: 0.8U rounded shell
- Wreck walls: rounded planks and portholes

### Background (three quiet hazed bands)

1. **Far:** teal water haze with light rays
2. **Mid:** silhouette of the shipwreck
3. **Near:** seabed sand with soft ripples

### Juice

- Bubble trails
- Helmet glass fogs at low O₂
- Sonar ring ripple
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **QUOTA DIVERS** | A brass-helmet diver above a sunken ship, title on a rusty company crate |
| 2 · Action | **GRAB IT!** | Diver hauling a statue as a lantern fish glows behind |
| 3 · Win | **QUOTA MET!** | Diver on the sub ladder with a mountain of scrap |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/quota-divers.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/quota-divers.txt .shots/quota-divers --pause`, then open every PNG
- [ ] **Win path:** collect light scrap near the sub each dive to reach quota
- [ ] **Lose path:** swim far and wait until O₂ is gone
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Quota Divers  ·  slug: quota-divers
Brief: Solo score-chase · 3 min · palette family ocean (light) · 2D canvas
Pitch: You're a cheap deep-sea salvage diver. Grab scrap from a sunken ship to hit the company's quota in 3 dives, with oxygen and creatures against you.
Core: Swim down, grab scrap (weight slows you), return to the sub before O₂ runs out.
Rules: (1) 3 dives; quota must be met by the end of dive 3. (2) Scrap: light (fast), medium, heavy (half speed, 2× O₂). (3) Lantern fish lure you with light: don't follow it into the dark. (4) Hatch crabs only move while you're lit; switch off your lamp to freeze them. (5) Returning to the sub banks scrap value.
Win: Quota met after dive 3 · Lose: O₂ empty or quota missed
Controls: desktop WASD swim · E grab/drop · Space sonar · touch Joystick · Grab · Sonar (max 3 inputs)
HUD: O₂ · Banked · Dive + pause
Hint: "Heavy scrap burns air. Get back!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: quota 300 · Normal: 450 · Hard: 600 and more creatures.
Style kit: unit = diver height = 1U (round brass helmet); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #0A2A3D, Mid band #123E57, Ground / play surface #1E5F74, Hero #FF8C42, Accent / rewards #7CFFCB
Assets: Diver: 1U, big rounded brass helmet, lamp on helmet; Sub: 3U rounded yellow sub with hose reel; Scrap: 0.3–0.8U (cup, bell, statue, anchor), one rusty-brass family; Lantern fish: 0.7U, glowing lure; Hatch crab: 0.8U rounded shell; Wreck walls: rounded planks and portholes
Background bands: teal water haze with light rays / silhouette of the shipwreck / seabed sand with soft ripples
Juice: Bubble trails; Helmet glass fogs at low O₂; Sonar ring ripple
Feed cards: 1) Title: A brass-helmet diver above a sunken ship, title on a rusty company crate 2) GRAB IT!: Diver hauling a statue as a lantern fish glows behind 3) QUOTA MET!: Diver on the sub ladder with a mountain of scrap
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:quota-divers:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
