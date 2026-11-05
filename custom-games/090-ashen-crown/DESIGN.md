# 090 · Ashen Crown

> **Explore, level, return, win.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `Solo score-chase` · `5 min` · `ember (dark)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `ashen-crown` → `src/offline-games/ashen-crown.txt` |
| **Inspired by (mechanics only)** | Elden Ring (open souls-like) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `ember` (dark) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:ashen-crown:best`, `arthis:ashen-crown:settings` (try/catch) |

### Pitch
A compact open field around a giant golden tree with 3 optional dungeons. Too hard? Explore, collect runes, level up, then return to beat the Crown Guardian.

### Why it can go viral
Freedom to choose your path, and the triumph of the boss.

### What makes it ours

- **Twist:** Choose your path to the guardian.
- **Rule we invented:** Spirit summon helps once per fight.
- **What we cut from the reference:** Huge world: compact.

## 2 · Gameplay

### Core mechanic
Stamina combat and exploration.

### Rules

1. Runes from enemies level your stats.
2. 3 optional dungeons with mini-bosses.
3. Runes dropped on death; recover once.
4. Spirit summon helps once per fight.
5. Challenge the guardian any time.

### Win / Lose
- **Win:** Guardian down
- **Lose:** 3 deaths

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J attack · K roll | Stick · Attack · Roll |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Runes · Level
- **Hint line (shown once, under 60 chars):** "Too hard? Explore, level, return."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: guardian −40% damage · Normal · Hard: guardian second phase.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Dungeons | 3 |
| Lives | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** knight = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/2A0F12/2A0F12.png) | Far band (sky) | `#2A0F12` |
| ![](https://placehold.co/28x28/4D2A1C/4D2A1C.png) | Mid band | `#4D2A1C` |
| ![](https://placehold.co/28x28/5C3A22/5C3A22.png) | Ground / play surface | `#5C3A22` |
| ![](https://placehold.co/28x28/FFD23F/FFD23F.png) | Hero | `#FFD23F` |
| ![](https://placehold.co/28x28/FF7A3D/FF7A3D.png) | Accent / rewards | `#FF7A3D` |

Catalog colours: `bgColorLight: "#2A0F12"`, `bgColorDark: "#4D2A1C"`

### Asset sheet (sizes in units)

- Knight: 1U
- Golden tree: 10U glowing
- Guardian: 4U armoured
- Dungeon entrances

### Background (three quiet hazed bands)

1. **Far:** amber sky
2. **Mid:** golden tree
3. **Near:** field

### Juice

- Roll dust
- Rune pickup
- Boss roar
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **ASHEN CROWN** | A knight before a golden tree |
| 2 · Action | **ROLL!** | Dodging a boss swing |
| 3 · Win | **GUARDIAN DOWN!** | Knight with crown |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/ashen-crown.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/ashen-crown.txt .shots/ashen-crown --pause`, then open every PNG
- [ ] **Win path:** scripted dungeon clears and guardian fight
- [ ] **Lose path:** idle at the guardian
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Ashen Crown  ·  slug: ashen-crown
Brief: Solo score-chase · 5 min · palette family ember (dark) · 3D, three.js r128 from cdnjs
Pitch: A compact open field around a giant golden tree with 3 optional dungeons. Too hard? Explore, collect runes, level up, then return to beat the Crown Guardian.
Core: Stamina combat and exploration.
Rules: (1) Runes from enemies level your stats. (2) 3 optional dungeons with mini-bosses. (3) Runes dropped on death; recover once. (4) Spirit summon helps once per fight. (5) Challenge the guardian any time.
Win: Guardian down · Lose: 3 deaths
Controls: desktop WASD · J attack · K roll · touch Stick · Attack · Roll (max 3 inputs)
HUD: HP · Runes · Level + pause
Hint: "Too hard? Explore, level, return."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: guardian −40% damage · Normal · Hard: guardian second phase.
Style kit: unit = knight = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #2A0F12, Mid band #4D2A1C, Ground / play surface #5C3A22, Hero #FFD23F, Accent / rewards #FF7A3D
Assets: Knight: 1U; Golden tree: 10U glowing; Guardian: 4U armoured; Dungeon entrances
Background bands: amber sky / golden tree / field
Juice: Roll dust; Rune pickup; Boss roar
Feed cards: 1) Title: A knight before a golden tree 2) ROLL!: Dodging a boss swing 3) GUARDIAN DOWN!: Knight with crown
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:ashen-crown:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
