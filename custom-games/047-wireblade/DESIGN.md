# 047 · Wireblade

> **One hit kills. You included.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `60 s` · `arcade (dark)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `wireblade` → `src/offline-games/wireblade.txt` |
| **Inspired by (mechanics only)** | Ghostrunner (one-hit parkour slasher) |
| **Players** | Solo score-chase |
| **Session** | 60 s |
| **Palette family** | `arcade` (dark) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:wireblade:best`, `arthis:wireblade:settings` (try/catch) |

### Pitch
A cyber ninja runs walls, grapples and slices through a neon tower where one hit kills both ways.

### Why it can go viral
Short, intense runs where one hit ends it; the 'flow' clips through neon halls are hypnotic.

### What makes it ours

- **Twist:** Time slows to 40% while you air-dash, so you can thread through bullet lines.
- **Rule we invented:** Combo kills refill your dash charge, rewarding aggressive chains.
- **What we cut from the reference:** Story, upgrade trees and long levels: 5 short floors.

## 2 · Gameplay

### Core mechanic
Wall-run, grapple, dash and slash.

### Rules

1. One hit kills you and one hit kills enemies.
2. Wall-run on neon panels for 1.2 s.
3. Air dash: 1 charge, refilled by kills or landing.
4. Restart at the floor start in under 0.5 s.
5. Rank by time and deaths.

### Win / Lose
- **Win:** Reach the top
- **Lose:** (retry) rank by time

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · Space jump · LMB slash (Shift dash) | Stick · Jump · Slash |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Time · Deaths · Floor
- **Hint line (shown once, under 60 chars):** "One hit kills. Dash the bullets."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Time), **Play Again**

### Difficulty
Easy: slower bullets · Normal · Hard: snipers and shielded guards.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Floors | 5 |
| Dash slow-mo | 0.4× |
| Wall-run | 1.2 s |
| Restart | < 0.5 s |

## 3 · Look and feel (style kit)

- **Scale unit:** ninja = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/1A0B2E/1A0B2E.png) | Far band (sky) | `#1A0B2E` |
| ![](https://placehold.co/28x28/2A145A/2A145A.png) | Mid band | `#2A145A` |
| ![](https://placehold.co/28x28/241848/241848.png) | Ground / play surface | `#241848` |
| ![](https://placehold.co/28x28/2BD2FF/2BD2FF.png) | Hero | `#2BD2FF` |
| ![](https://placehold.co/28x28/FF3CAC/FF3CAC.png) | Accent / rewards | `#FF3CAC` |

Catalog colours: `bgColorLight: "#1A0B2E"`, `bgColorDark: "#2A145A"`

### Asset sheet (sizes in units)

- Ninja: 1U cyber-ninja with katana parented to hand and a long scarf trail
- Guards: 1U rounded armour with glowing visors
- Snipers: 1U with long rifles and laser sights
- Walls: rounded neon panels with glowing seams
- Exit lift: 2U rounded capsule

### Background (three quiet hazed bands)

1. **Far:** magenta-cyan haze
2. **Mid:** distant tower lights
3. **Near:** near pipes and cables

### Juice

- Slice slow-motion with a white flash
- Neon trail behind the ninja
- Glass panels shatter into rounded shards
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **WIREBLADE** | A cyber-ninja on a glowing wall above a neon city, title as a hologram |
| 2 · Action | **DASH!** | Ninja slicing between bullets in slow motion |
| 3 · Win | **S RANK!** | Ninja silhouetted at the tower top |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/wireblade.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/wireblade.txt .shots/wireblade --pause`, then open every PNG
- [ ] **Win path:** recorded input run clearing all floors
- [ ] **Lose path:** run straight into a guard
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Wireblade  ·  slug: wireblade
Brief: Solo score-chase · 60 s · palette family arcade (dark) · 3D, three.js r128 from cdnjs
Pitch: A cyber ninja runs walls, grapples and slices through a neon tower where one hit kills both ways.
Core: Wall-run, grapple, dash and slash.
Rules: (1) One hit kills you and one hit kills enemies. (2) Wall-run on neon panels for 1.2 s. (3) Air dash: 1 charge, refilled by kills or landing. (4) Restart at the floor start in under 0.5 s. (5) Rank by time and deaths.
Win: Reach the top · Lose: (retry) rank by time
Controls: desktop WASD · Space jump · LMB slash (Shift dash) · touch Stick · Jump · Slash (max 3 inputs)
HUD: Time · Deaths · Floor + pause
Hint: "One hit kills. Dash the bullets."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slower bullets · Normal · Hard: snipers and shielded guards.
Style kit: unit = ninja = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1A0B2E, Mid band #2A145A, Ground / play surface #241848, Hero #2BD2FF, Accent / rewards #FF3CAC
Assets: Ninja: 1U cyber-ninja with katana parented to hand and a long scarf trail; Guards: 1U rounded armour with glowing visors; Snipers: 1U with long rifles and laser sights; Walls: rounded neon panels with glowing seams; Exit lift: 2U rounded capsule
Background bands: magenta-cyan haze / distant tower lights / near pipes and cables
Juice: Slice slow-motion with a white flash; Neon trail behind the ninja; Glass panels shatter into rounded shards
Feed cards: 1) Title: A cyber-ninja on a glowing wall above a neon city, title as a hologram 2) DASH!: Ninja slicing between bullets in slow motion 3) S RANK!: Ninja silhouetted at the tower top
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:wireblade:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
