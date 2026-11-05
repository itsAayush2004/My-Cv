# 058 · Blockfall Royale

> **Build a wall. Peek. Win.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `3 min` · `meadow (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `blockfall-royale` → `src/offline-games/blockfall-royale.txt` |
| **Inspired by (mechanics only)** | Fortnite (build battle royale) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:blockfall-royale:best`, `arthis:blockfall-royale:settings` (try/catch) |

### Pitch
A cartoon battle royale vs 11 CPU on a small island: harvest materials and instantly place walls and ramps for cover.

### Why it can go viral
Build fights look epic in clips: a wall pops up just in time to block a shot.

### What makes it ours

- **Twist:** Instant building: harvest materials and place walls or ramps in front of you in one tap.
- **Rule we invented:** Bouncy pad: one buildable launch pad per life.
- **What we cut from the reference:** 100 players and seasons: 12 players on one small island.

## 2 · Gameplay

### Core mechanic
Shoot, harvest and build cover.

### Rules

1. Harvest materials from trees and rocks.
2. Wall or ramp costs 10 materials.
3. The storm shrinks every 40 s and damages outside.
4. Chests hold better blasters.
5. Last player standing wins.

### Win / Lose
- **Win:** Last standing
- **Lose:** Eliminated

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse shoot · Q build | Twin stick · Build |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Alive · Mats · Storm
- **Hint line (shown once, under 60 chars):** "Build a wall, then peek!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Alive), **Play Again**

### Difficulty
Easy: bots don't build · Normal · Hard: bots build.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Players | 12 |
| Storm phases | 40 s |
| Wall cost | 10 |
| Start mats | 30 |

## 3 · Look and feel (style kit)

- **Scale unit:** player = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/A6E3A1/A6E3A1.png) | Mid band | `#A6E3A1` |
| ![](https://placehold.co/28x28/E9F5DB/E9F5DB.png) | Ground / play surface | `#E9F5DB` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Accent / rewards | `#FFB703` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#A6E3A1"`

### Asset sheet (sizes in units)

- Players: 1U cartoon characters
- Walls and ramps: 2U rounded wooden panels
- Island: rounded hills, trees and huts
- Chests: 0.6U golden

### Background (three quiet hazed bands)

1. **Far:** bright sky
2. **Mid:** sea
3. **Near:** island hills

### Juice

- Build pop with dust
- Storm wall shimmer
- Victory confetti
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **BLOCKFALL ROYALE** | Cartoon players building ramps on a sunny island, title in chunky blocks |
| 2 · Action | **BUILD!** | A wall popping up just in time |
| 3 · Win | **VICTORY!** | Winner on top of a tower |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/blockfall-royale.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/blockfall-royale.txt .shots/blockfall-royale --pause`, then open every PNG
- [ ] **Win path:** script vs Easy bots to be last standing
- [ ] **Lose path:** walk into the storm
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Blockfall Royale  ·  slug: blockfall-royale
Brief: vs CPU · 3 min · palette family meadow (light) · 3D, three.js r128 from cdnjs
Pitch: A cartoon battle royale vs 11 CPU on a small island: harvest materials and instantly place walls and ramps for cover.
Core: Shoot, harvest and build cover.
Rules: (1) Harvest materials from trees and rocks. (2) Wall or ramp costs 10 materials. (3) The storm shrinks every 40 s and damages outside. (4) Chests hold better blasters. (5) Last player standing wins.
Win: Last standing · Lose: Eliminated
Controls: desktop WASD · mouse shoot · Q build · touch Twin stick · Build (max 3 inputs)
HUD: Alive · Mats · Storm + pause
Hint: "Build a wall, then peek!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: bots don't build · Normal · Hard: bots build.
Style kit: unit = player = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #A6E3A1, Ground / play surface #E9F5DB, Hero #5B8DEF, Accent / rewards #FFB703
Assets: Players: 1U cartoon characters; Walls and ramps: 2U rounded wooden panels; Island: rounded hills, trees and huts; Chests: 0.6U golden
Background bands: bright sky / sea / island hills
Juice: Build pop with dust; Storm wall shimmer; Victory confetti
Feed cards: 1) Title: Cartoon players building ramps on a sunny island, title in chunky blocks 2) BUILD!: A wall popping up just in time 3) VICTORY!: Winner on top of a tower
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:blockfall-royale:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
