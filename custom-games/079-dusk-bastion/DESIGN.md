# 079 · Dusk Bastion

> **Build by day. Hold by night.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `5 min` · `peach (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `dusk-bastion` → `src/offline-games/dusk-bastion.txt` |
| **Inspired by (mechanics only)** | Thronefall (minimalist builder-defence) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `peach` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:dusk-bastion:best`, `arthis:dusk-bastion:settings` (try/catch) |

### Pitch
By day, ride a knight around a small kingdom and spend gold on glowing build spots: houses, towers, barracks. At dusk the attack lanes light up; at night you fight beside your towers.

### Why it can go viral
Minimal and satisfying build-defend rhythm.

### What makes it ours

- **Twist:** Wave preview: at dusk, lanes glow where enemies will come.
- **Rule we invented:** Pick 1 of 3 perks after each night.
- **What we cut from the reference:** Multiple maps: one kingdom.

## 2 · Gameplay

### Core mechanic
Build then defend.

### Rules

1. Houses earn gold each dawn.
2. Towers shoot automatically.
3. Barracks spawn units.
4. Wave lanes are previewed at dusk.
5. Survive 7 nights.

### Win / Lose
- **Win:** Survive night 7
- **Lose:** Castle falls

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · E build · J attack | Stick · Build · Attack |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Gold · Night · Castle
- **Hint line (shown once, under 60 chars):** "Build by day. Defend by night."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Gold), **Play Again**

### Difficulty
Easy: small waves · Normal · Hard: ogres from night 3 and fewer gold spots.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Nights | 7 |
| House income | 5 gold/dawn |
| Tower range | 5U |
| Castle HP | 100 |

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
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/F7CBA8/F7CBA8.png) | Mid band | `#F7CBA8` |
| ![](https://placehold.co/28x28/EBD9C2/EBD9C2.png) | Ground / play surface | `#EBD9C2` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/F4A261/F4A261.png) | Accent / rewards | `#F4A261` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#F7CBA8"`

### Asset sheet (sizes in units)

- Hero: 1U knight on a 1.5U horse
- Towers: 1.5U rounded archery towers
- Houses: 1U
- Enemies: 0.8U goblins, 1.4U ogres
- Castle: 4U

### Background (three quiet hazed bands)

1. **Far:** sunset sky
2. **Mid:** hills
3. **Near:** grass ground

### Juice

- Build pop
- Arrow trails
- Dawn chime
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **DUSK BASTION** | A tiny kingdom at dusk |
| 2 · Action | **DEFEND!** | Towers firing |
| 3 · Win | **BASTION HOLDS!** | Dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/dusk-bastion.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/dusk-bastion.txt .shots/dusk-bastion --pause`, then open every PNG
- [ ] **Win path:** scripted builds to survive
- [ ] **Lose path:** no builds
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Dusk Bastion  ·  slug: dusk-bastion
Brief: Solo score-chase · 5 min · palette family peach (light) · 3D, three.js r128 from cdnjs
Pitch: By day, ride a knight around a small kingdom and spend gold on glowing build spots: houses, towers, barracks. At dusk the attack lanes light up; at night you fight beside your towers.
Core: Build then defend.
Rules: (1) Houses earn gold each dawn. (2) Towers shoot automatically. (3) Barracks spawn units. (4) Wave lanes are previewed at dusk. (5) Survive 7 nights.
Win: Survive night 7 · Lose: Castle falls
Controls: desktop WASD · E build · J attack · touch Stick · Build · Attack (max 3 inputs)
HUD: Gold · Night · Castle + pause
Hint: "Build by day. Defend by night."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: small waves · Normal · Hard: ogres from night 3 and fewer gold spots.
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #F7CBA8, Ground / play surface #EBD9C2, Hero #843B62, Accent / rewards #F4A261
Assets: Hero: 1U knight on a 1.5U horse; Towers: 1.5U rounded archery towers; Houses: 1U; Enemies: 0.8U goblins, 1.4U ogres; Castle: 4U
Background bands: sunset sky / hills / grass ground
Juice: Build pop; Arrow trails; Dawn chime
Feed cards: 1) Title: A tiny kingdom at dusk 2) DEFEND!: Towers firing 3) BASTION HOLDS!: Dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:dusk-bastion:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
