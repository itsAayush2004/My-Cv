# 022 · Quad Clues

> **Sixteen tiles. Four secret groups.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `3 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `quad-clues` → `src/offline-games/quad-clues.txt` |
| **Inspired by (mechanics only)** | NYT Connections (grouping puzzle) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:quad-clues:best`, `arthis:quad-clues:settings` (try/catch) |

### Pitch
A daily puzzle of 16 picture-word tiles. Find the 4 hidden groups of 4 before you make 4 mistakes.

### Why it can go viral
'One away!' heartbreak and sneaky red herrings get people texting each other about the puzzle.

### What makes it ours

- **Twist:** Picture tiles: some tiles are drawn icons instead of words, so groups can be visual (round things) as well as verbal.
- **Rule we invented:** Shuffle charm: one free shuffle that also briefly lights the tile that belongs to the easiest group.
- **What we cut from the reference:** Archives and accounts: one daily seed plus a practice mode in the pause sheet.

## 2 · Gameplay

### Core mechanic
Select 4 tiles and submit; a correct group locks into a coloured bar.

### Rules

1. Groups are colour-ranked by difficulty (sun, leaf, sky, plum).
2. 4 mistakes allowed.
3. 'One away' appears when 3 of 4 are right.
4. Shuffle anytime.
5. Share grid shows the order you found them.

### Win / Lose
- **Win:** All 4 groups found
- **Lose:** 4 mistakes

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click tiles · Enter submit · S shuffle | Tap tiles · Submit · Shuffle |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Groups · Mistakes · Streak
- **Hint line (shown once, under 60 chars):** "Find four groups of four."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Groups), **Play Again**

### Difficulty
Easy: picture-heavy, clear groups · Normal · Hard: more red herrings.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Tiles | 16 |
| Mistakes | 4 |
| Daily seed | date |
| Practice puzzles | 30 |

## 3 · Look and feel (style kit)

- **Scale unit:** tile = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/FFD1B8/FFD1B8.png) | Mid band | `#FFD1B8` |
| ![](https://placehold.co/28x28/FFF6EE/FFF6EE.png) | Ground / play surface | `#FFF6EE` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/F67E7D/F67E7D.png) | Accent / rewards | `#F67E7D` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#FFD1B8"`

### Asset sheet (sizes in units)

- Tiles: 1U rounded rectangles with word or simple icon
- Group bars: 4U pill bars in 4 colours
- Mistake dots: 0.2U circles

### Background (three quiet hazed bands)

1. **Far:** peach sky haze
2. **Mid:** soft paper confetti shapes
3. **Near:** desk edge

### Juice

- Selected tiles lift with a shadow
- Group locks in with a slide and chime
- Wrong guess wobble
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **QUAD CLUES** | Sixteen tiles on a cosy desk, title in bold rounded letters |
| 2 · Action | **ONE AWAY!** | Three glowing tiles and one grey |
| 3 · Win | **PERFECT!** | Four coloured bars stacked with confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/quad-clues.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/quad-clues.txt .shots/quad-clues --pause`, then open every PNG
- [ ] **Win path:** seeded puzzle; submit the 4 known groups
- [ ] **Lose path:** submit 4 wrong groups
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Quad Clues  ·  slug: quad-clues
Brief: Solo score-chase · 3 min · palette family peach (light) · 2D canvas
Pitch: A daily puzzle of 16 picture-word tiles. Find the 4 hidden groups of 4 before you make 4 mistakes.
Core: Select 4 tiles and submit; a correct group locks into a coloured bar.
Rules: (1) Groups are colour-ranked by difficulty (sun, leaf, sky, plum). (2) 4 mistakes allowed. (3) 'One away' appears when 3 of 4 are right. (4) Shuffle anytime. (5) Share grid shows the order you found them.
Win: All 4 groups found · Lose: 4 mistakes
Controls: desktop Click tiles · Enter submit · S shuffle · touch Tap tiles · Submit · Shuffle (max 3 inputs)
HUD: Groups · Mistakes · Streak + pause
Hint: "Find four groups of four."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: picture-heavy, clear groups · Normal · Hard: more red herrings.
Style kit: unit = tile = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #FFD1B8, Ground / play surface #FFF6EE, Hero #843B62, Accent / rewards #F67E7D
Assets: Tiles: 1U rounded rectangles with word or simple icon; Group bars: 4U pill bars in 4 colours; Mistake dots: 0.2U circles
Background bands: peach sky haze / soft paper confetti shapes / desk edge
Juice: Selected tiles lift with a shadow; Group locks in with a slide and chime; Wrong guess wobble
Feed cards: 1) Title: Sixteen tiles on a cosy desk, title in bold rounded letters 2) ONE AWAY!: Three glowing tiles and one grey 3) PERFECT!: Four coloured bars stacked with confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:quad-clues:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
