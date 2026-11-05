# 085 · Cat Clan Tactics

> **Breed strong cats. Pick their collars.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `Solo score-chase` · `6 min` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `cat-clan-tactics` → `src/offline-games/cat-clan-tactics.txt` |
| **Inspired by (mechanics only)** | Mewgenics (cat breeding tactics) |
| **Players** | Solo score-chase |
| **Session** | 6 min |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:cat-clan-tactics:best`, `arthis:cat-clan-tactics:settings` (try/catch) |

### Pitch
A cosy house full of cats. Pairs breed overnight and kittens inherit their parents' stats and odd mutations. Put collars on your best 4 and send them on grid-battle adventures.

### Why it can go viral
Weird and wonderful cat combinations people love to show.

### What makes it ours

- **Twist:** Inheritance: kittens mix both parents' stats and quirks.
- **Rule we invented:** Collars: fighter, mage, tank, hunter.
- **What we cut from the reference:** Gross-out humour: kept cute.

## 2 · Gameplay

### Core mechanic
Grid tactics with breeding between runs.

### Rules

1. Two cats in the house breed overnight; kittens inherit a mix of stats and quirks.
2. Pick 4 cats and give each a collar (fighter, mage, tank, hunter).
3. Grid battles: move then act.
4. Cats age; old cats retire.
5. Clear 5 adventures.

### Win / Lose
- **Win:** 5 adventures cleared
- **Lose:** Clan wiped

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click select/move/act · Space end · Q collar | Tap · End · Collar |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Cats · Gold · Run
- **Hint line (shown once, under 60 chars):** "Breed strong cats. Pick collars."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Cats), **Play Again**

### Difficulty
Easy: weak enemies · Normal · Hard: elite enemies and faster ageing.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Adventures | 5 |
| Squad | 4 |
| Collars | 4 |
| Max cats | 12 |

## 3 · Look and feel (style kit)

- **Scale unit:** cat = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/FDD5C4/FDD5C4.png) | Mid band | `#FDD5C4` |
| ![](https://placehold.co/28x28/FFF3EA/FFF3EA.png) | Ground / play surface | `#FFF3EA` |
| ![](https://placehold.co/28x28/FF6F91/FF6F91.png) | Hero | `#FF6F91` |
| ![](https://placehold.co/28x28/5BC0EB/5BC0EB.png) | Accent / rewards | `#5BC0EB` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#FDD5C4"`

### Asset sheet (sizes in units)

- Cats: 1U with fun mutations (extra tail, big ears, odd eyes)
- Collars: coloured bands with charms
- Grid tiles: rounded
- Enemies: 1U rats and crows

### Background (three quiet hazed bands)

1. **Far:** cosy house haze
2. **Mid:** furniture
3. **Near:** wooden floor

### Juice

- Kitten pop
- Pounce trail
- Level-up sparkle
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CAT CLAN TACTICS** | Cats in collars on a grid |
| 2 · Action | **POUNCE!** | A cat leaping |
| 3 · Win | **CLAN LEGEND!** | Cat family portrait |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/cat-clan-tactics.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/cat-clan-tactics.txt .shots/cat-clan-tactics --pause`, then open every PNG
- [ ] **Win path:** seeded breeding plus scripted battle moves clearing 5 adventures
- [ ] **Lose path:** send only kittens and end turns
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Cat Clan Tactics  ·  slug: cat-clan-tactics
Brief: Solo score-chase · 6 min · palette family candy (light) · 2D canvas
Pitch: A cosy house full of cats. Pairs breed overnight and kittens inherit their parents' stats and odd mutations. Put collars on your best 4 and send them on grid-battle adventures.
Core: Grid tactics with breeding between runs.
Rules: (1) Two cats in the house breed overnight; kittens inherit a mix of stats and quirks. (2) Pick 4 cats and give each a collar (fighter, mage, tank, hunter). (3) Grid battles: move then act. (4) Cats age; old cats retire. (5) Clear 5 adventures.
Win: 5 adventures cleared · Lose: Clan wiped
Controls: desktop Click select/move/act · Space end · Q collar · touch Tap · End · Collar (max 3 inputs)
HUD: Cats · Gold · Run + pause
Hint: "Breed strong cats. Pick collars."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: weak enemies · Normal · Hard: elite enemies and faster ageing.
Style kit: unit = cat = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #FDD5C4, Ground / play surface #FFF3EA, Hero #FF6F91, Accent / rewards #5BC0EB
Assets: Cats: 1U with fun mutations (extra tail, big ears, odd eyes); Collars: coloured bands with charms; Grid tiles: rounded; Enemies: 1U rats and crows
Background bands: cosy house haze / furniture / wooden floor
Juice: Kitten pop; Pounce trail; Level-up sparkle
Feed cards: 1) Title: Cats in collars on a grid 2) POUNCE!: A cat leaping 3) CLAN LEGEND!: Cat family portrait
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:cat-clan-tactics:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
