# 023 · Planet Merge

> **Drop rocks. Make a sun.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `3 min` · `space (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `planet-merge` → `src/offline-games/planet-merge.txt` |
| **Inspired by (mechanics only)** | Suika Game (physics merge) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `space` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:planet-merge:best`, `arthis:planet-merge:settings` (try/catch) |

### Pitch
Drop space rocks into a cosmic jar. Two of the same merge into the next bigger body: pebble, moon, planet, gas giant, star, sun.

### Why it can go viral
The chain reaction (one drop merges 4 times in a row into a gas giant) is incredibly satisfying to watch and share.

### What makes it ours

- **Twist:** Gravity wells: bigger bodies slowly pull smaller ones toward them, creating gentle chain merges.
- **Rule we invented:** Comet: every 15 merges, a comet drop smashes one body down a tier (save your jar).
- **What we cut from the reference:** Leaderboards: local best only.

## 2 · Gameplay

### Core mechanic
Move and drop; equal bodies merge on contact; don't let anything stay above the line.

### Rules

1. 11 tiers from dust to sun.
2. Next body preview shown.
3. A body above the red line for 2 s = game over.
4. Merges score their tier value; chains multiply.
5. Making a sun = win (keep playing for score).

### Win / Lose
- **Win:** Create a sun
- **Lose:** Overflow above the line

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Mouse move · click drop · Space comet | Drag · release to drop · Comet |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Score · Best · Next
- **Hint line (shown once, under 60 chars):** "Merge two of the same!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Score), **Play Again**

### Difficulty
Easy: first 4 tiers only drop · Normal: first 5 · Hard: first 5 + faster line timer.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Tiers | 11 |
| Drop tiers | 5 |
| Line timer | 2 s |
| Comet every | 15 merges |

## 3 · Look and feel (style kit)

- **Scale unit:** dust body = 0.5U, sun = 6U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/0B1026/0B1026.png) | Far band (sky) | `#0B1026` |
| ![](https://placehold.co/28x28/1F2A5A/1F2A5A.png) | Mid band | `#1F2A5A` |
| ![](https://placehold.co/28x28/2A3570/2A3570.png) | Ground / play surface | `#2A3570` |
| ![](https://placehold.co/28x28/4EE6C1/4EE6C1.png) | Hero | `#4EE6C1` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#0B1026"`, `bgColorDark: "#1F2A5A"`

### Asset sheet (sizes in units)

- Bodies: perfect circles with one lighter top highlight and cute faces
- Jar: rounded glass container with soft rim
- Comet: 0.8U with soft tail

### Background (three quiet hazed bands)

1. **Far:** deep space with soft nebula haze
2. **Mid:** distant star dots
3. **Near:** jar shelf

### Juice

- Merge pop with a ring
- Chain counter shakes
- Sun creation fills screen with warm light
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PLANET MERGE** | A jar of cute planets in space, title in starry letters |
| 2 · Action | **MERGE!** | Two moons squishing into a planet |
| 3 · Win | **A SUN!** | A happy sun bursting out of the jar |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/planet-merge.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/planet-merge.txt .shots/planet-merge --pause`, then open every PNG
- [ ] **Win path:** scripted merge order that makes a sun
- [ ] **Lose path:** drop all bodies on one side until overflow
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Planet Merge  ·  slug: planet-merge
Brief: Solo score-chase · 3 min · palette family space (dark) · 2D canvas
Pitch: Drop space rocks into a cosmic jar. Two of the same merge into the next bigger body: pebble, moon, planet, gas giant, star, sun.
Core: Move and drop; equal bodies merge on contact; don't let anything stay above the line.
Rules: (1) 11 tiers from dust to sun. (2) Next body preview shown. (3) A body above the red line for 2 s = game over. (4) Merges score their tier value; chains multiply. (5) Making a sun = win (keep playing for score).
Win: Create a sun · Lose: Overflow above the line
Controls: desktop Mouse move · click drop · Space comet · touch Drag · release to drop · Comet (max 3 inputs)
HUD: Score · Best · Next + pause
Hint: "Merge two of the same!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: first 4 tiers only drop · Normal: first 5 · Hard: first 5 + faster line timer.
Style kit: unit = dust body = 0.5U, sun = 6U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #0B1026, Mid band #1F2A5A, Ground / play surface #2A3570, Hero #4EE6C1, Accent / rewards #FFD166
Assets: Bodies: perfect circles with one lighter top highlight and cute faces; Jar: rounded glass container with soft rim; Comet: 0.8U with soft tail
Background bands: deep space with soft nebula haze / distant star dots / jar shelf
Juice: Merge pop with a ring; Chain counter shakes; Sun creation fills screen with warm light
Feed cards: 1) Title: A jar of cute planets in space, title in starry letters 2) MERGE!: Two moons squishing into a planet 3) A SUN!: A happy sun bursting out of the jar
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:planet-merge:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
