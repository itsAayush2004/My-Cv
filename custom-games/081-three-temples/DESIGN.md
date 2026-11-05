# 081 · Three Temples

> **Twelve cards. Three temples. Six turns.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `3 min` · `paper (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `three-temples` → `src/offline-games/three-temples.txt` |
| **Inspired by (mechanics only)** | Marvel Snap (location card battler) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `paper` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:three-temples:best`, `arthis:three-temples:settings` (try/catch) |

### Pitch
A fast card duel across three temple sites, each revealing a random blessing or curse. Play cards simultaneously with the CPU and win 2 of 3 temples by total power.

### Why it can go viral
3-minute matches with big last-turn swings and a 'double the stakes' bluff.

### What makes it ours

- **Twist:** Temple rules change everything: 'cards here +3', 'no cards after turn 4', 'swap sides at the end'.
- **Rule we invented:** Bell of Doubling: ring it to double the stakes; the opponent can bow out early to lose less.
- **What we cut from the reference:** Collection grind and ranks: 3 starter decks to pick from in the pause sheet.

## 2 · Gameplay

### Core mechanic
Each turn, spend energy equal to the turn number to play cards at any temple; cards reveal at once.

### Rules

1. 6 turns; energy = turn number.
2. Temples reveal one per turn (turns 1–3).
3. Highest total power wins a temple; 2 of 3 wins the match.
4. Cards have reveal effects (+2 here, move a card, destroy the weakest).
5. Stakes start at 1 and double with the bell; bowing out loses only the current stake.

### Win / Lose
- **Win:** Win 2 of 3 temples
- **Lose:** Opponent wins 2 of 3

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag cards · Space end turn · D ring bell | Drag · End turn · Bell |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Turn · Energy · Stakes
- **Hint line (shown once, under 60 chars):** "Win 2 of 3. Ring the bell when sure!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Turn), **Play Again**

### Difficulty
Easy: CPU random plays · Normal: CPU plays to temple rules · Hard: CPU bluffs with the bell.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Deck | 12 cards |
| Turns | 6 |
| Card pool | 36 |
| Temple rules | 18 |

## 3 · Look and feel (style kit)

- **Scale unit:** card = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FBF6EC/FBF6EC.png) | Far band (sky) | `#FBF6EC` |
| ![](https://placehold.co/28x28/EADFC8/EADFC8.png) | Mid band | `#EADFC8` |
| ![](https://placehold.co/28x28/F3EAD8/F3EAD8.png) | Ground / play surface | `#F3EAD8` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/F25F5C/F25F5C.png) | Accent / rewards | `#F25F5C` |

Catalog colours: `bgColorLight: "#FBF6EC"`, `bgColorDark: "#EADFC8"`

### Asset sheet (sizes in units)

- Cards: 1U rounded parchment with bold simple illustrations and a power gem
- Temples: 3U rounded stone shrines with glowing rule plaque
- Energy gem: 0.5U
- Bell: 0.8U brass

### Background (three quiet hazed bands)

1. **Far:** warm parchment sky haze
2. **Mid:** far hills and temple roofs
3. **Near:** stone table edge

### Juice

- Cards flip on reveal
- Power numbers tick and bounce
- Temple win glow beam
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **THREE TEMPLES** | Three glowing shrines with cards fanned before them, title in carved stone |
| 2 · Action | **DOUBLE!** | A brass bell ringing with the stakes ×2 |
| 3 · Win | **VICTORY!** | Two temples lit in your colour |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/three-temples.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/three-temples.txt .shots/three-temples --pause`, then open every PNG
- [ ] **Win path:** seeded hands with fixed plays winning 2 temples
- [ ] **Lose path:** pass every turn
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Three Temples  ·  slug: three-temples
Brief: vs CPU · 3 min · palette family paper (light) · 2D canvas
Pitch: A fast card duel across three temple sites, each revealing a random blessing or curse. Play cards simultaneously with the CPU and win 2 of 3 temples by total power.
Core: Each turn, spend energy equal to the turn number to play cards at any temple; cards reveal at once.
Rules: (1) 6 turns; energy = turn number. (2) Temples reveal one per turn (turns 1–3). (3) Highest total power wins a temple; 2 of 3 wins the match. (4) Cards have reveal effects (+2 here, move a card, destroy the weakest). (5) Stakes start at 1 and double with the bell; bowing out loses only the current stake.
Win: Win 2 of 3 temples · Lose: Opponent wins 2 of 3
Controls: desktop Drag cards · Space end turn · D ring bell · touch Drag · End turn · Bell (max 3 inputs)
HUD: Turn · Energy · Stakes + pause
Hint: "Win 2 of 3. Ring the bell when sure!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: CPU random plays · Normal: CPU plays to temple rules · Hard: CPU bluffs with the bell.
Style kit: unit = card = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FBF6EC, Mid band #EADFC8, Ground / play surface #F3EAD8, Hero #5B8DEF, Accent / rewards #F25F5C
Assets: Cards: 1U rounded parchment with bold simple illustrations and a power gem; Temples: 3U rounded stone shrines with glowing rule plaque; Energy gem: 0.5U; Bell: 0.8U brass
Background bands: warm parchment sky haze / far hills and temple roofs / stone table edge
Juice: Cards flip on reveal; Power numbers tick and bounce; Temple win glow beam
Feed cards: 1) Title: Three glowing shrines with cards fanned before them, title in carved stone 2) DOUBLE!: A brass bell ringing with the stakes ×2 3) VICTORY!: Two temples lit in your colour
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:three-temples:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
