# 020 · Rooms of Marrowfield

> **Draft the mansion. Find the hidden room.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `6 min` · `paper (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `rooms-of-marrowfield` → `src/offline-games/rooms-of-marrowfield.txt` |
| **Inspired by (mechanics only)** | Blue Prince (drafting puzzle roguelite) |
| **Players** | Solo score-chase |
| **Session** | 6 min |
| **Palette family** | `paper` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:rooms-of-marrowfield:best`, `arthis:rooms-of-marrowfield:settings` (try/catch) |

### Pitch
An inherited mansion rebuilds itself every day. Each time you open a door, you draft one of three rooms. Find the hidden room before your steps run out.

### Why it can go viral
'Aha!' moments when a clue from day 2 solves a riddle on day 4, and players love sharing their mansion layouts.

### What makes it ours

- **Twist:** Rooms have shapes (dead end, corridor, T, cross), so your draft decides where you can still go.
- **Rule we invented:** Notebook: clues you find are auto-pinned to a corkboard you can open from the pause sheet.
- **What we cut from the reference:** 46+ rooms and deep lore: 24 room types, a 5×7 grid, one mystery.

## 2 · Gameplay

### Core mechanic
Open a door, draft 1 of 3 rooms into that slot, spend steps moving; collect keys, gems and clues.

### Rules

1. 50 steps per day; each move costs 1.
2. Some rooms cost gems to draft; some give keys or steps.
3. Locked doors need keys.
4. At 0 steps the day ends and the mansion resets; clues persist.
5. Reach the hidden room in the top row.

### Win / Lose
- **Win:** Enter the hidden room
- **Lose:** Day 5 ends without finding it

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click doors · 1/2/3 pick room · Space notebook | Tap doors · tap room · Notebook |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Steps · Keys · Day
- **Hint line (shown once, under 60 chars):** "Draft rooms wisely. Steps are few."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Steps), **Play Again**

### Difficulty
Easy: 70 steps · Normal 50 · Hard 40 and fewer keys.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Grid | 5 × 7 |
| Steps | 50/day |
| Days | 5 |
| Room pool | 24 |

## 3 · Look and feel (style kit)

- **Scale unit:** room tile = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FBF6EC/FBF6EC.png) | Far band (sky) | `#FBF6EC` |
| ![](https://placehold.co/28x28/E9DCC3/E9DCC3.png) | Mid band | `#E9DCC3` |
| ![](https://placehold.co/28x28/D9C7A7/D9C7A7.png) | Ground / play surface | `#D9C7A7` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/F25F5C/F25F5C.png) | Accent / rewards | `#F25F5C` |

Catalog colours: `bgColorLight: "#FBF6EC"`, `bgColorDark: "#E9DCC3"`

### Asset sheet (sizes in units)

- Room tiles: 1U rounded squares with simple interior icons (library, kitchen, greenhouse)
- Player token: 0.4U rounded pawn
- Keys and gems: 0.25U
- Corkboard: rounded notes and strings

### Background (three quiet hazed bands)

1. **Far:** parchment sky haze
2. **Mid:** mansion silhouette
3. **Near:** garden hedge

### Juice

- Room tiles flip in with a paper sound
- Clue pin pops
- Hidden room door glows
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **ROOMS OF MARROWFIELD** | A grand mansion blueprint unfolding on a table, title stamped in red ink |
| 2 · Action | **DRAFT!** | Three room cards fanned out above a door |
| 3 · Win | **ROOM FOUND!** | A secret door opening with golden light |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/rooms-of-marrowfield.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/rooms-of-marrowfield.txt .shots/rooms-of-marrowfield --pause`, then open every PNG
- [ ] **Win path:** seeded drafts and fixed path to the hidden room on day 1
- [ ] **Lose path:** walk in circles until day 5 ends
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Rooms of Marrowfield  ·  slug: rooms-of-marrowfield
Brief: Solo score-chase · 6 min · palette family paper (light) · 2D canvas
Pitch: An inherited mansion rebuilds itself every day. Each time you open a door, you draft one of three rooms. Find the hidden room before your steps run out.
Core: Open a door, draft 1 of 3 rooms into that slot, spend steps moving; collect keys, gems and clues.
Rules: (1) 50 steps per day; each move costs 1. (2) Some rooms cost gems to draft; some give keys or steps. (3) Locked doors need keys. (4) At 0 steps the day ends and the mansion resets; clues persist. (5) Reach the hidden room in the top row.
Win: Enter the hidden room · Lose: Day 5 ends without finding it
Controls: desktop Click doors · 1/2/3 pick room · Space notebook · touch Tap doors · tap room · Notebook (max 3 inputs)
HUD: Steps · Keys · Day + pause
Hint: "Draft rooms wisely. Steps are few."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 70 steps · Normal 50 · Hard 40 and fewer keys.
Style kit: unit = room tile = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FBF6EC, Mid band #E9DCC3, Ground / play surface #D9C7A7, Hero #5B8DEF, Accent / rewards #F25F5C
Assets: Room tiles: 1U rounded squares with simple interior icons (library, kitchen, greenhouse); Player token: 0.4U rounded pawn; Keys and gems: 0.25U; Corkboard: rounded notes and strings
Background bands: parchment sky haze / mansion silhouette / garden hedge
Juice: Room tiles flip in with a paper sound; Clue pin pops; Hidden room door glows
Feed cards: 1) Title: A grand mansion blueprint unfolding on a table, title stamped in red ink 2) DRAFT!: Three room cards fanned out above a door 3) ROOM FOUND!: A secret door opening with golden light
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:rooms-of-marrowfield:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
