# 083 · Dice & Dungeon Crew

> **Roll the d20. Shove them off the ledge.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `5 min` · `paper (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `dice-dungeon-crew` → `src/offline-games/dice-dungeon-crew.txt` |
| **Inspired by (mechanics only)** | Baldur's Gate 3 (dice tactics) |
| **Players** | vs CPU |
| **Session** | 5 min |
| **Palette family** | `paper` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:dice-dungeon-crew:best`, `arthis:dice-dungeon-crew:settings` (try/catch) |

### Pitch
A tabletop-style party of 3 heroes fights through 3 rooms with visible dice rolls, high ground, shoves and elemental surfaces.

### Why it can go viral
Natural 20s and comic shove kills make great shared moments.

### What makes it ours

- **Twist:** Surfaces: oil + fire burns, water + lightning shocks.
- **Rule we invented:** Inspiration: rolling a 1 gives an inspiration token to reroll later.
- **What we cut from the reference:** Dialogue tree depth: short scenes.

## 2 · Gameplay

### Core mechanic
Each hero: move, action, bonus action; dice decide hits.

### Rules

1. Each hero: move, 1 action, 1 bonus action per turn.
2. Attack = d20 + bonus vs armour; shown with a rolling die.
3. High ground gives +2.
4. Shove enemies off ledges or into fire.
5. Surfaces: oil + fire burns; water + lightning shocks.

### Win / Lose
- **Win:** Defeat the boss
- **Lose:** Party down

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click move/act · Space end turn · Q bonus | Tap · End · Bonus |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Actions · Turn
- **Hint line (shown once, under 60 chars):** "High ground gives +2. Shove!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy · Normal · Hard (enemy AC).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Party | 3 |
| Rooms | 3 + boss |
| High ground | +2 |

## 3 · Look and feel (style kit)

- **Scale unit:** hero = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FBF6EC/FBF6EC.png) | Far band (sky) | `#FBF6EC` |
| ![](https://placehold.co/28x28/E7DDC8/E7DDC8.png) | Mid band | `#E7DDC8` |
| ![](https://placehold.co/28x28/D9CBB0/D9CBB0.png) | Ground / play surface | `#D9CBB0` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/F25F5C/F25F5C.png) | Accent / rewards | `#F25F5C` |

Catalog colours: `bgColorLight: "#FBF6EC"`, `bgColorDark: "#E7DDC8"`

### Asset sheet (sizes in units)

- Heroes: 1U fighter, wizard, rogue
- Enemies: 0.8U goblins, 1U skeletons, boss ogre 2U
- d20: 0.6U rounded die
- Dungeon: rounded stone tiles, ledges and barrels

### Background (three quiet hazed bands)

1. **Far:** dungeon haze
2. **Mid:** pillars
3. **Near:** stone floor

### Juice

- Dice roll and bounce
- Nat 20 golden burst
- Shove fall with dust
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **DICE & DUNGEON CREW** | A party around a giant d20 |
| 2 · Action | **ROLL!** | A d20 landing on 20 |
| 3 · Win | **NAT 20!** | Boss falling |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/dice-dungeon-crew.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/dice-dungeon-crew.txt .shots/dice-dungeon-crew --pause`, then open every PNG
- [ ] **Win path:** seeded dice to win
- [ ] **Lose path:** end turns
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Dice & Dungeon Crew  ·  slug: dice-dungeon-crew
Brief: vs CPU · 5 min · palette family paper (light) · 2D canvas
Pitch: A tabletop-style party of 3 heroes fights through 3 rooms with visible dice rolls, high ground, shoves and elemental surfaces.
Core: Each hero: move, action, bonus action; dice decide hits.
Rules: (1) Each hero: move, 1 action, 1 bonus action per turn. (2) Attack = d20 + bonus vs armour; shown with a rolling die. (3) High ground gives +2. (4) Shove enemies off ledges or into fire. (5) Surfaces: oil + fire burns; water + lightning shocks.
Win: Defeat the boss · Lose: Party down
Controls: desktop Click move/act · Space end turn · Q bonus · touch Tap · End · Bonus (max 3 inputs)
HUD: HP · Actions · Turn + pause
Hint: "High ground gives +2. Shove!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (enemy AC).
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FBF6EC, Mid band #E7DDC8, Ground / play surface #D9CBB0, Hero #5B8DEF, Accent / rewards #F25F5C
Assets: Heroes: 1U fighter, wizard, rogue; Enemies: 0.8U goblins, 1U skeletons, boss ogre 2U; d20: 0.6U rounded die; Dungeon: rounded stone tiles, ledges and barrels
Background bands: dungeon haze / pillars / stone floor
Juice: Dice roll and bounce; Nat 20 golden burst; Shove fall with dust
Feed cards: 1) Title: A party around a giant d20 2) ROLL!: A d20 landing on 20 3) NAT 20!: Boss falling
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:dice-dungeon-crew:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
