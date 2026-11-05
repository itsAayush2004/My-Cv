# 062 · Tiny Lantern Kids

> **Two tiny kids. One giant house.**

`ARTHIS.space` · `Spooky & Mystery` · `vs CPU | 2 Players (local)` · `3 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `tiny-lantern-kids` → `src/offline-games/tiny-lantern-kids.txt` |
| **Inspired by (mechanics only)** | Little Nightmares (tiny-hero horror platformer) |
| **Players** | vs CPU | 2 Players (local) |
| **Session** | 3 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:tiny-lantern-kids:best`, `arthis:tiny-lantern-kids:settings` (try/catch) |

### Pitch
Two tiny kids (a lantern-holder and a climber) sneak through the house of sleeping giants. Hold hands, boost each other, and stay out of the light.

### Why it can go viral
Atmospheric sneaking and close calls with giants are tense and clip well.

### What makes it ours

- **Twist:** Shared lantern: only the lantern kid sees hidden paths, and only the climber reaches high ledges.
- **Rule we invented:** Snore rhythm: giants' snores mask your footsteps, so you move during the snore.
- **What we cut from the reference:** Long story chapters: one house, 5 rooms.

## 2 · Gameplay

### Core mechanic
Sneak, boost, swap between kids (or play local 2P) and solve room puzzles.

### Rules

1. Hold hands to move together; let go to split up.
2. Boost: the climber stands on the lantern kid to reach ledges.
3. Giants wake if noise passes the meter between snores.
4. Hide under furniture while giants search.
5. 5 rooms to the front door.

### Win / Lose
- **Win:** Open the front door
- **Lose:** Caught 3 times

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows move · Z jump · X hand/swap (P2: WASD + F) | Stick · Jump · Hand/Swap |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Room · Lives · Noise
- **Hint line (shown once, under 60 chars):** "Move while the giants snore."
- **Pause sheet:** Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard
- **End sheet:** result, best (Room), **Play Again**

### Difficulty
Easy: long snores · Normal · Hard: light sleepers and creaky floors.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rooms | 5 |
| Snore cycle | 4 s |
| Noise meter | 100 |
| Lives | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** kid height = 1U (giants 6U)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/2A2F4F/2A2F4F.png) | Mid band | `#2A2F4F` |
| ![](https://placehold.co/28x28/3B3A58/3B3A58.png) | Ground / play surface | `#3B3A58` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Hero | `#FFD166` |
| ![](https://placehold.co/28x28/FF8FAB/FF8FAB.png) | Accent / rewards | `#FF8FAB` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#2A2F4F"`

### Asset sheet (sizes in units)

- Kids: 1U raincoat kid with lantern parented to hand, 1U beanie climber
- Giants: 6U rounded sleeping figures under blankets
- Furniture: oversized rounded chairs, tables, bookshelves
- Keys and switches: 0.4U

### Background (three quiet hazed bands)

1. **Far:** dark wallpaper with lamp haze
2. **Mid:** huge furniture silhouettes
3. **Near:** floorboards with soft light pools

### Juice

- Lantern light flicker
- Snore 'Zzz' rings
- Heartbeat when giants stir
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **TINY LANTERN KIDS** | Two tiny kids holding hands below a giant's bed, title stitched on a pillow |
| 2 · Action | **HUSH!** | Kids frozen as a giant hand passes above |
| 3 · Win | **ESCAPED!** | Kids walking out of the front door into moonlight |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/tiny-lantern-kids.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/tiny-lantern-kids.txt .shots/tiny-lantern-kids --pause`, then open every PNG
- [ ] **Win path:** scripted snore-timed moves through 5 rooms
- [ ] **Lose path:** run continuously in room 1
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Tiny Lantern Kids  ·  slug: tiny-lantern-kids
Brief: vs CPU | 2 Players (local) · 3 min · palette family night (dark) · 2D canvas
Pitch: Two tiny kids (a lantern-holder and a climber) sneak through the house of sleeping giants. Hold hands, boost each other, and stay out of the light.
Core: Sneak, boost, swap between kids (or play local 2P) and solve room puzzles.
Rules: (1) Hold hands to move together; let go to split up. (2) Boost: the climber stands on the lantern kid to reach ledges. (3) Giants wake if noise passes the meter between snores. (4) Hide under furniture while giants search. (5) 5 rooms to the front door.
Win: Open the front door · Lose: Caught 3 times
Controls: desktop Arrows move · Z jump · X hand/swap (P2: WASD + F) · touch Stick · Jump · Hand/Swap (max 3 inputs)
HUD: Room · Lives · Noise + pause
Hint: "Move while the giants snore."
Pause sheet: Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard. Difficulty changes: Easy: long snores · Normal · Hard: light sleepers and creaky floors.
Style kit: unit = kid height = 1U (giants 6U); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #2A2F4F, Ground / play surface #3B3A58, Hero #FFD166, Accent / rewards #FF8FAB
Assets: Kids: 1U raincoat kid with lantern parented to hand, 1U beanie climber; Giants: 6U rounded sleeping figures under blankets; Furniture: oversized rounded chairs, tables, bookshelves; Keys and switches: 0.4U
Background bands: dark wallpaper with lamp haze / huge furniture silhouettes / floorboards with soft light pools
Juice: Lantern light flicker; Snore 'Zzz' rings; Heartbeat when giants stir
Feed cards: 1) Title: Two tiny kids holding hands below a giant's bed, title stitched on a pillow 2) HUSH!: Kids frozen as a giant hand passes above 3) ESCAPED!: Kids walking out of the front door into moonlight
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:tiny-lantern-kids:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
