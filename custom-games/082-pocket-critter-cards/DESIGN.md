# 082 · Pocket Critter Cards

> **Rip a pack. Build a deck. Win three.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `3 min` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `pocket-critter-cards` → `src/offline-games/pocket-critter-cards.txt` |
| **Inspired by (mechanics only)** | Pokémon TCG Pocket (pack opening + quick TCG) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:pocket-critter-cards:best`, `arthis:pocket-critter-cards:settings` (try/catch) |

### Pitch
Open two daily packs with a satisfying swipe, collect critter cards with shiny parallax art, then battle the CPU in quick 20-card matches.

### Why it can go viral
Pack openings and rare reveals are made for sharing.

### What makes it ours

- **Twist:** Energy flows automatically each turn, so matches are fast and simple.
- **Rule we invented:** Wonder swap: once a day, swap a duplicate for a random card from a 'friend' CPU binder.
- **What we cut from the reference:** Online trading: local binder.

## 2 · Gameplay

### Core mechanic
Attach energy, attack, knock out critters to score points.

### Rules

1. 20-card deck from your binder.
2. 1 energy per turn is generated automatically; attach to one critter.
3. Attack when the critter has enough energy.
4. Knock-out = 1 point (EX critters = 2).
5. First to 3 points wins; 2 free packs per day.

### Win / Lose
- **Win:** 3 points first
- **Lose:** CPU gets 3 points

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag cards · Space end turn · click attack | Drag · End · Attack |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Points · Energy · Turn
- **Hint line (shown once, under 60 chars):** "Swipe the pack open!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Points), **Play Again**

### Difficulty
Easy: weak CPU deck · Normal · Hard: CPU uses evolutions well.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Deck | 20 |
| Pack | 5 cards |
| Card pool | 60 |
| Points to win | 3 |

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
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/FFD1E8/FFD1E8.png) | Mid band | `#FFD1E8` |
| ![](https://placehold.co/28x28/FFF7FB/FFF7FB.png) | Ground / play surface | `#FFF7FB` |
| ![](https://placehold.co/28x28/7B61FF/7B61FF.png) | Hero | `#7B61FF` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#FFD1E8"`

### Asset sheet (sizes in units)

- Cards: 1U rounded with parallax illustration layers
- Packs: 1.4U foil wrappers with rounded corners
- Critters: 0.8U round cute creatures (on cards and in battle)
- Energy orbs: 0.3U

### Background (three quiet hazed bands)

1. **Far:** pastel haze
2. **Mid:** floating card silhouettes
3. **Near:** play mat

### Juice

- Pack tear swipe with foil shine
- Rare card glow burst
- KO card spin and fade
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **POCKET CRITTER CARDS** | A glowing pack about to be torn |
| 2 · Action | **RIP!** | Pack bursting with light |
| 3 · Win | **CHAMPION!** | Three KO points glowing |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/pocket-critter-cards.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/pocket-critter-cards.txt .shots/pocket-critter-cards --pause`, then open every PNG
- [ ] **Win path:** seeded deck plays to 3 points
- [ ] **Lose path:** end turns
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Pocket Critter Cards  ·  slug: pocket-critter-cards
Brief: vs CPU · 3 min · palette family candy (light) · 2D canvas
Pitch: Open two daily packs with a satisfying swipe, collect critter cards with shiny parallax art, then battle the CPU in quick 20-card matches.
Core: Attach energy, attack, knock out critters to score points.
Rules: (1) 20-card deck from your binder. (2) 1 energy per turn is generated automatically; attach to one critter. (3) Attack when the critter has enough energy. (4) Knock-out = 1 point (EX critters = 2). (5) First to 3 points wins; 2 free packs per day.
Win: 3 points first · Lose: CPU gets 3 points
Controls: desktop Drag cards · Space end turn · click attack · touch Drag · End · Attack (max 3 inputs)
HUD: Points · Energy · Turn + pause
Hint: "Swipe the pack open!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: weak CPU deck · Normal · Hard: CPU uses evolutions well.
Style kit: unit = card = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #FFD1E8, Ground / play surface #FFF7FB, Hero #7B61FF, Accent / rewards #FFD36E
Assets: Cards: 1U rounded with parallax illustration layers; Packs: 1.4U foil wrappers with rounded corners; Critters: 0.8U round cute creatures (on cards and in battle); Energy orbs: 0.3U
Background bands: pastel haze / floating card silhouettes / play mat
Juice: Pack tear swipe with foil shine; Rare card glow burst; KO card spin and fade
Feed cards: 1) Title: A glowing pack about to be torn 2) RIP!: Pack bursting with light 3) CHAMPION!: Three KO points glowing
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:pocket-critter-cards:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
