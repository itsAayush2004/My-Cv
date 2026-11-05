# 017 · Paper Lantern Climb

> **A deck, a map, a tower of paper.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `6 min` · `paper (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `paper-lantern-climb` → `src/offline-games/paper-lantern-climb.txt` |
| **Inspired by (mechanics only)** | Slay the Spire (roguelike deckbuilder) |
| **Players** | Solo score-chase |
| **Session** | 6 min |
| **Palette family** | `paper` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:paper-lantern-climb:best`, `arthis:paper-lantern-climb:settings` (try/catch) |

### Pitch
Climb a folded-paper tower node by node: fights, events, shops and campfires. Build a deck of ink cards and beat the Origami Dragon at the top.

### Why it can go viral
Crazy card synergies, and the clear readable intent icons, make every fight a puzzle worth sharing.

### What makes it ours

- **Twist:** Fold: once per fight, fold your hand in half and play the two halves as one combined card.
- **Rule we invented:** Ink pools: unspent energy becomes ink that boosts your next card.
- **What we cut from the reference:** 4 characters and 3 acts: one character, one act of 12 nodes.

## 2 · Gameplay

### Core mechanic
Spend 3 energy per turn on attack, block and power cards while reading enemy intents.

### Rules

1. Draw 5 cards each turn; 3 energy.
2. Enemy intent icons show their next move.
3. Win a fight → pick 1 of 3 cards.
4. Campfire: heal 30% or upgrade a card.
5. Node 12: Origami Dragon boss.

### Win / Lose
- **Win:** Defeat the Origami Dragon
- **Lose:** HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag cards · Space end turn · F fold | Drag · End turn · Fold |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Energy · Floor
- **Hint line (shown once, under 60 chars):** "Read the intent. Block or strike."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: enemies −20% HP · Normal · Hard: +20% and elites on every row.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Energy | 3 |
| Hand | 5 |
| Nodes | 12 |
| Start deck | 10 cards |

## 3 · Look and feel (style kit)

- **Scale unit:** hero height = 1U (paper-craft monk)
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
| ![](https://placehold.co/28x28/F3E9D6/F3E9D6.png) | Ground / play surface | `#F3E9D6` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/F25F5C/F25F5C.png) | Accent / rewards | `#F25F5C` |

Catalog colours: `bgColorLight: "#FBF6EC"`, `bgColorDark: "#E9DCC3"`

### Asset sheet (sizes in units)

- Hero: 1U folded-paper monk with ink brush
- Cards: 1.4U rounded paper cards with simple ink symbols
- Enemies: paper cranes 0.9U, ink blots 0.8U, origami dragon 4U
- Map nodes: rounded stamps

### Background (three quiet hazed bands)

1. **Far:** warm paper sky with soft fibre haze
2. **Mid:** folded paper mountains
3. **Near:** paper floor with fold creases

### Juice

- Cards crinkle when played
- Ink splash on hits
- Fold animation flips the hand
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PAPER LANTERN CLIMB** | A paper monk at the base of a folded tower, title brush-painted |
| 2 · Action | **BLOCK!** | Ink shield absorbing a crane strike |
| 3 · Win | **SPIRE DOWN!** | The origami dragon unfolding into confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/paper-lantern-climb.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/paper-lantern-climb.txt .shots/paper-lantern-climb --pause`, then open every PNG
- [ ] **Win path:** fixed seed and greedy-play script to reach and beat node 12
- [ ] **Lose path:** end turn without playing cards
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Paper Lantern Climb  ·  slug: paper-lantern-climb
Brief: Solo score-chase · 6 min · palette family paper (light) · 2D canvas
Pitch: Climb a folded-paper tower node by node: fights, events, shops and campfires. Build a deck of ink cards and beat the Origami Dragon at the top.
Core: Spend 3 energy per turn on attack, block and power cards while reading enemy intents.
Rules: (1) Draw 5 cards each turn; 3 energy. (2) Enemy intent icons show their next move. (3) Win a fight → pick 1 of 3 cards. (4) Campfire: heal 30% or upgrade a card. (5) Node 12: Origami Dragon boss.
Win: Defeat the Origami Dragon · Lose: HP 0
Controls: desktop Drag cards · Space end turn · F fold · touch Drag · End turn · Fold (max 3 inputs)
HUD: HP · Energy · Floor + pause
Hint: "Read the intent. Block or strike."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: enemies −20% HP · Normal · Hard: +20% and elites on every row.
Style kit: unit = hero height = 1U (paper-craft monk); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FBF6EC, Mid band #E9DCC3, Ground / play surface #F3E9D6, Hero #5B8DEF, Accent / rewards #F25F5C
Assets: Hero: 1U folded-paper monk with ink brush; Cards: 1.4U rounded paper cards with simple ink symbols; Enemies: paper cranes 0.9U, ink blots 0.8U, origami dragon 4U; Map nodes: rounded stamps
Background bands: warm paper sky with soft fibre haze / folded paper mountains / paper floor with fold creases
Juice: Cards crinkle when played; Ink splash on hits; Fold animation flips the hand
Feed cards: 1) Title: A paper monk at the base of a folded tower, title brush-painted 2) BLOCK!: Ink shield absorbing a crane strike 3) SPIRE DOWN!: The origami dragon unfolding into confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:paper-lantern-climb:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
