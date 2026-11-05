# 088 · Elemental Isles

> **Swap heroes. Trigger reactions.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `3 min` · `meadow (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `elemental-isles` → `src/offline-games/elemental-isles.txt` |
| **Inspired by (mechanics only)** | Genshin Impact (elemental reactions) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:elemental-isles:best`, `arthis:elemental-isles:settings` (try/catch) |

### Pitch
On floating islands, swap instantly between fire, water and ice heroes. Hit a stone golem with one element then another to trigger freeze, steam and melt reactions.

### Why it can go viral
Colourful reaction combos.

### What makes it ours

- **Twist:** Reactions need two elements in sequence.
- **Rule we invented:** Wind spreads the last element to nearby enemies.
- **What we cut from the reference:** Open world and gacha: one arena.

## 2 · Gameplay

### Core mechanic
Swap and react.

### Rules

1. Swap heroes instantly (fire, water, ice).
2. Applying a second element triggers a reaction (freeze, steam, melt).
3. Energy from hits charges ultimates.
4. The golem has 3 phases.
5. 3-minute limit.

### Win / Lose
- **Win:** Golem down
- **Lose:** All heroes down

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J attack · K swap | Stick · Attack · Swap |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Combo · Time
- **Hint line (shown once, under 60 chars):** "Swap heroes to trigger reactions!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: slow golem · Normal · Hard: golem resists the last element used.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Heroes | 3 |
| Golem phases | 3 |

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
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/A9E5BB/A9E5BB.png) | Mid band | `#A9E5BB` |
| ![](https://placehold.co/28x28/EAF4E2/EAF4E2.png) | Ground / play surface | `#EAF4E2` |
| ![](https://placehold.co/28x28/FF8A65/FF8A65.png) | Hero | `#FF8A65` |
| ![](https://placehold.co/28x28/7B61FF/7B61FF.png) | Accent / rewards | `#7B61FF` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#A9E5BB"`

### Asset sheet (sizes in units)

- Heroes: 1U with element colours
- Golem: 4U rounded stone
- Floating islands

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** floating isles
3. **Near:** arena floor

### Juice

- Reaction bursts
- Swap flash
- Ultimate camera
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **ELEMENTAL ISLES** | Heroes on floating islands |
| 2 · Action | **FREEZE!** | Enemy frozen |
| 3 · Win | **VICTORY!** | Golem crumbling |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/elemental-isles.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/elemental-isles.txt .shots/elemental-isles --pause`, then open every PNG
- [ ] **Win path:** scripted swaps triggering reactions to win
- [ ] **Lose path:** attack with one hero only
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Elemental Isles  ·  slug: elemental-isles
Brief: vs CPU · 3 min · palette family meadow (light) · 3D, three.js r128 from cdnjs
Pitch: On floating islands, swap instantly between fire, water and ice heroes. Hit a stone golem with one element then another to trigger freeze, steam and melt reactions.
Core: Swap and react.
Rules: (1) Swap heroes instantly (fire, water, ice). (2) Applying a second element triggers a reaction (freeze, steam, melt). (3) Energy from hits charges ultimates. (4) The golem has 3 phases. (5) 3-minute limit.
Win: Golem down · Lose: All heroes down
Controls: desktop WASD · J attack · K swap · touch Stick · Attack · Swap (max 3 inputs)
HUD: HP · Combo · Time + pause
Hint: "Swap heroes to trigger reactions!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow golem · Normal · Hard: golem resists the last element used.
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #A9E5BB, Ground / play surface #EAF4E2, Hero #FF8A65, Accent / rewards #7B61FF
Assets: Heroes: 1U with element colours; Golem: 4U rounded stone; Floating islands
Background bands: sky / floating isles / arena floor
Juice: Reaction bursts; Swap flash; Ultimate camera
Feed cards: 1) Title: Heroes on floating islands 2) FREEZE!: Enemy frozen 3) VICTORY!: Golem crumbling
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:elemental-isles:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
