# 029 · Moving Day

> **Unbox a life, one room at a time.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `4 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `moving-day` → `src/offline-games/moving-day.txt` |
| **Inspired by (mechanics only)** | Unpacking (zen placement storytelling) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:moving-day:best`, `arthis:moving-day:settings` (try/catch) |

### Pitch
Unpack boxes in 4 rooms across one person's life (hostel room to first flat to family home to grandparents' house). Every object tells a story.

### Why it can go viral
Emotional, wordless storytelling with cosy satisfaction.

### What makes it ours

- **Twist:** Returning objects: a cricket bat and a steel tiffin box appear in every move, and where they end up tells the story.
- **Rule we invented:** Memory glow: placing an object in its 'perfect' spot plays a tiny animated memory.
- **What we cut from the reference:** Many levels: 4 rooms.

## 2 · Gameplay

### Core mechanic
Take items out of boxes and place them; items with a home flash red if misplaced when you finish.

### Rules

1. Items come out one at a time per box.
2. Some items must go to specific furniture (books to shelves).
3. Finish when all boxes are empty.
4. Misplaced items flash; fix them to complete.
5. Each room unlocks the next.

### Win / Lose
- **Win:** All 4 rooms done
- **Lose:** (gentle) none

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click/drag items · Space next box · R rotate | Drag · Next box · Rotate |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Room · Items · Stars
- **Hint line (shown once, under 60 chars):** "Unpack. Find each item's home."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Room), **Play Again**

### Difficulty
Easy: hints for tricky items · Normal · Hard: no hints.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rooms | 4 |
| Items per room | 25–40 |
| Perfect spots | 5 per room |

## 3 · Look and feel (style kit)

- **Scale unit:** cupboard = 2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/F2D0B5/F2D0B5.png) | Mid band | `#F2D0B5` |
| ![](https://placehold.co/28x28/FFF4EA/FFF4EA.png) | Ground / play surface | `#FFF4EA` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/F67E7D/F67E7D.png) | Accent / rewards | `#F67E7D` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#F2D0B5"`

### Asset sheet (sizes in units)

- Items: rounded flat objects (steel tiffin, cricket bat, books, plants, photo frames)
- Furniture: rounded shelves, beds, desks
- Boxes: 1U rounded cardboard

### Background (three quiet hazed bands)

1. **Far:** window light haze
2. **Mid:** wall with soft pattern
3. **Near:** floor rug

### Juice

- Item placement thunk
- Memory glow sparkle
- Room completion photo snap
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **MOVING DAY** | Stacked boxes in an empty sunny room, title on a parcel label |
| 2 · Action | **UNPACK!** | A hand lifting a steel tiffin box out of a box |
| 3 · Win | **HOME!** | A cosy finished room with a family photo |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/moving-day.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/moving-day.txt .shots/moving-day --pause`, then open every PNG
- [ ] **Win path:** script correct placements for room 1
- [ ] **Lose path:** finish with misplaced items and verify flashes
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Moving Day  ·  slug: moving-day
Brief: Solo score-chase · 4 min · palette family peach (light) · 2D canvas
Pitch: Unpack boxes in 4 rooms across one person's life (hostel room to first flat to family home to grandparents' house). Every object tells a story.
Core: Take items out of boxes and place them; items with a home flash red if misplaced when you finish.
Rules: (1) Items come out one at a time per box. (2) Some items must go to specific furniture (books to shelves). (3) Finish when all boxes are empty. (4) Misplaced items flash; fix them to complete. (5) Each room unlocks the next.
Win: All 4 rooms done · Lose: (gentle) none
Controls: desktop Click/drag items · Space next box · R rotate · touch Drag · Next box · Rotate (max 3 inputs)
HUD: Room · Items · Stars + pause
Hint: "Unpack. Find each item's home."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: hints for tricky items · Normal · Hard: no hints.
Style kit: unit = cupboard = 2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #F2D0B5, Ground / play surface #FFF4EA, Hero #843B62, Accent / rewards #F67E7D
Assets: Items: rounded flat objects (steel tiffin, cricket bat, books, plants, photo frames); Furniture: rounded shelves, beds, desks; Boxes: 1U rounded cardboard
Background bands: window light haze / wall with soft pattern / floor rug
Juice: Item placement thunk; Memory glow sparkle; Room completion photo snap
Feed cards: 1) Title: Stacked boxes in an empty sunny room, title on a parcel label 2) UNPACK!: A hand lifting a steel tiffin box out of a box 3) HOME!: A cosy finished room with a family photo
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:moving-day:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
