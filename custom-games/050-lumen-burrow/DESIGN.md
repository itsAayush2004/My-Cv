# 050 · Lumen Burrow

> **No sword. Just clever toys.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `4 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `lumen-burrow` → `src/offline-games/lumen-burrow.txt` |
| **Inspired by (mechanics only)** | Animal Well (tool puzzle metroidvania) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:lumen-burrow:best`, `arthis:lumen-burrow:settings` (try/catch) |

### Pitch
A glowing blob explores dark burrows with no weapons: a bubble wand, a frisbee, firecrackers and a yo-yo, each with surprising second uses. Find 6 secret eggs.

### Why it can go viral
Secret-hunting and 'how did you find that?' moments.

### What makes it ours

- **Twist:** Every tool has 2 uses (bubble = platform or float; frisbee = distract or ride).
- **Rule we invented:** Echo hint: hold still for 3 s to hear a faint chime from the nearest egg.
- **What we cut from the reference:** Huge map: 15 rooms.

## 2 · Gameplay

### Core mechanic
Use tools to solve rooms and avoid creatures.

### Rules

1. 4 tools found in order: bubble wand, frisbee, firecracker, yo-yo.
2. Bubble: stand on it (2 s) or float up slowly.
3. Frisbee: distract dogs or ride it across gaps.
4. Firecrackers scare ghosts away; yo-yo presses far buttons.
5. 6 eggs hidden; creatures cost a heart and reset the room.

### Win / Lose
- **Win:** Collect 6 eggs
- **Lose:** (gentle) hearts reset to room start

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows · Z jump · X use tool (Q swap) | Stick · Jump · Tool |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Eggs · Tool · Time
- **Hint line (shown once, under 60 chars):** "Every tool has a second use."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Eggs), **Play Again**

### Difficulty
Easy: egg shimmer · Normal · Hard: no echo hint.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rooms | 15 |
| Tools | 4 |
| Eggs | 6 |
| Bubble time | 2 s |

## 3 · Look and feel (style kit)

- **Scale unit:** blob = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/1F2B4A/1F2B4A.png) | Mid band | `#1F2B4A` |
| ![](https://placehold.co/28x28/2A3656/2A3656.png) | Ground / play surface | `#2A3656` |
| ![](https://placehold.co/28x28/7FDBFF/7FDBFF.png) | Hero | `#7FDBFF` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#1F2B4A"`

### Asset sheet (sizes in units)

- Blob: 1U glowing round hero
- Tools: 0.4U each, rounded
- Ghost cat: 1.4U translucent
- Dog: 1U chunky
- Burrow tiles: rounded stone with glowing moss

### Background (three quiet hazed bands)

1. **Far:** deep blue haze
2. **Mid:** glowing plants and roots
3. **Near:** tunnel floor with moss

### Juice

- Bubble pop sparkle
- Firecracker flash lights the room
- Egg sparkle on pickup
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LUMEN BURROW** | A glowing blob in a dark burrow, title in bioluminescent letters |
| 2 · Action | **BUBBLE!** | Blob standing on a bubble |
| 3 · Win | **ALL EGGS!** | Six glowing eggs on a shelf |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/lumen-burrow.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/lumen-burrow.txt .shots/lumen-burrow --pause`, then open every PNG
- [ ] **Win path:** scripted route that collects all 6 eggs
- [ ] **Lose path:** touch the ghost and verify room reset
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Lumen Burrow  ·  slug: lumen-burrow
Brief: Solo score-chase · 4 min · palette family night (dark) · 2D canvas
Pitch: A glowing blob explores dark burrows with no weapons: a bubble wand, a frisbee, firecrackers and a yo-yo, each with surprising second uses. Find 6 secret eggs.
Core: Use tools to solve rooms and avoid creatures.
Rules: (1) 4 tools found in order: bubble wand, frisbee, firecracker, yo-yo. (2) Bubble: stand on it (2 s) or float up slowly. (3) Frisbee: distract dogs or ride it across gaps. (4) Firecrackers scare ghosts away; yo-yo presses far buttons. (5) 6 eggs hidden; creatures cost a heart and reset the room.
Win: Collect 6 eggs · Lose: (gentle) hearts reset to room start
Controls: desktop Arrows · Z jump · X use tool (Q swap) · touch Stick · Jump · Tool (max 3 inputs)
HUD: Eggs · Tool · Time + pause
Hint: "Every tool has a second use."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: egg shimmer · Normal · Hard: no echo hint.
Style kit: unit = blob = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #1F2B4A, Ground / play surface #2A3656, Hero #7FDBFF, Accent / rewards #FFD166
Assets: Blob: 1U glowing round hero; Tools: 0.4U each, rounded; Ghost cat: 1.4U translucent; Dog: 1U chunky; Burrow tiles: rounded stone with glowing moss
Background bands: deep blue haze / glowing plants and roots / tunnel floor with moss
Juice: Bubble pop sparkle; Firecracker flash lights the room; Egg sparkle on pickup
Feed cards: 1) Title: A glowing blob in a dark burrow, title in bioluminescent letters 2) BUBBLE!: Blob standing on a bubble 3) ALL EGGS!: Six glowing eggs on a shelf
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:lumen-burrow:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
