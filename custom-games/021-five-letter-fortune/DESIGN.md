# 021 · Five Letter Fortune

> **One word a day. Six tries. Share the grid.**

`ARTHIS.space` · `Puzzle & Casual` · `Solo score-chase` · `2 min` · `paper (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `five-letter-fortune` → `src/offline-games/five-letter-fortune.txt` |
| **Inspired by (mechanics only)** | Wordle (daily word guess) |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `paper` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:five-letter-fortune:best`, `arthis:five-letter-fortune:settings` (try/catch) |

### Pitch
A fortune-teller's daily 5-letter word. Guess it in 6 tries with colour feedback, and a fortune cookie reveals a funny prophecy based on how fast you solved it.

### Why it can go viral
The shareable result grid plus a silly prophecy line ('3 tries: you will find a lost sock') makes people post it.

### What makes it ours

- **Twist:** Fortune hint: once per day, crack a cookie to reveal one letter's position, which costs a star in your result.
- **Rule we invented:** Streak lanterns: each day of your streak lights a lantern on the shelf (saved locally).
- **What we cut from the reference:** Accounts and leaderboards: local streak only.

## 2 · Gameplay

### Core mechanic
Type 5-letter guesses; tiles flip green (right spot), gold (in word), grey (absent).

### Rules

1. Word chosen by date seed from a curated list.
2. Only valid words accepted (shake on invalid).
3. On-screen keyboard shows letter states.
4. Hard mode (pause sheet difficulty) forces using revealed hints.
5. After solving: share text copies the grid + prophecy.

### Win / Lose
- **Win:** Solve within 6 tries
- **Lose:** 6 wrong guesses (word revealed)

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Type letters · Enter submit · Backspace delete | On-screen keyboard (letters · Enter · Delete) |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Try · Streak · Best
- **Hint line (shown once, under 60 chars):** "Green: right spot. Gold: wrong spot."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Try), **Play Again**

### Difficulty
Easy: common words, free cookie · Normal: standard list · Hard: hard mode rules.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Word length | 5 |
| Tries | 6 |
| Flip time | 250 ms per tile |
| List size | 2,000 answers |

## 3 · Look and feel (style kit)

- **Scale unit:** letter tile = 1U
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
| ![](https://placehold.co/28x28/FFFFFF/FFFFFF.png) | Ground / play surface | `#FFFFFF` |
| ![](https://placehold.co/28x28/3DAA6D/3DAA6D.png) | Hero | `#3DAA6D` |
| ![](https://placehold.co/28x28/F2B33D/F2B33D.png) | Accent / rewards | `#F2B33D` |

Catalog colours: `bgColorLight: "#FBF6EC"`, `bgColorDark: "#E9DCC3"`

### Asset sheet (sizes in units)

- Tiles: 1U rounded squares, lighter top face
- Keyboard keys: 0.7U pills
- Fortune cookie: 1U rounded crescent that cracks
- Lantern shelf: small 0.5U lanterns

### Background (three quiet hazed bands)

1. **Far:** warm paper with soft fibre haze
2. **Mid:** faint stars and moons pattern
3. **Near:** wooden desk edge

### Juice

- Tile flip with colour reveal
- Row bounce on win
- Cookie crack with paper fortune slide-out
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **FIVE LETTER FORTUNE** | A fortune-teller's table with letter tiles and a crystal ball, title in gold |
| 2 · Action | **GUESS!** | A row of tiles flipping green and gold |
| 3 · Win | **SOLVED!** | Fortune cookie cracking open with confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/five-letter-fortune.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/five-letter-fortune.txt .shots/five-letter-fortune --pause`, then open every PNG
- [ ] **Win path:** seed a known word and type it on try 3
- [ ] **Lose path:** type 6 wrong valid words
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Five Letter Fortune  ·  slug: five-letter-fortune
Brief: Solo score-chase · 2 min · palette family paper (light) · 2D canvas
Pitch: A fortune-teller's daily 5-letter word. Guess it in 6 tries with colour feedback, and a fortune cookie reveals a funny prophecy based on how fast you solved it.
Core: Type 5-letter guesses; tiles flip green (right spot), gold (in word), grey (absent).
Rules: (1) Word chosen by date seed from a curated list. (2) Only valid words accepted (shake on invalid). (3) On-screen keyboard shows letter states. (4) Hard mode (pause sheet difficulty) forces using revealed hints. (5) After solving: share text copies the grid + prophecy.
Win: Solve within 6 tries · Lose: 6 wrong guesses (word revealed)
Controls: desktop Type letters · Enter submit · Backspace delete · touch On-screen keyboard (letters · Enter · Delete) (max 3 inputs)
HUD: Try · Streak · Best + pause
Hint: "Green: right spot. Gold: wrong spot."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: common words, free cookie · Normal: standard list · Hard: hard mode rules.
Style kit: unit = letter tile = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FBF6EC, Mid band #E9DCC3, Ground / play surface #FFFFFF, Hero #3DAA6D, Accent / rewards #F2B33D
Assets: Tiles: 1U rounded squares, lighter top face; Keyboard keys: 0.7U pills; Fortune cookie: 1U rounded crescent that cracks; Lantern shelf: small 0.5U lanterns
Background bands: warm paper with soft fibre haze / faint stars and moons pattern / wooden desk edge
Juice: Tile flip with colour reveal; Row bounce on win; Cookie crack with paper fortune slide-out
Feed cards: 1) Title: A fortune-teller's table with letter tiles and a crystal ball, title in gold 2) GUESS!: A row of tiles flipping green and gold 3) SOLVED!: Fortune cookie cracking open with confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:five-letter-fortune:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
