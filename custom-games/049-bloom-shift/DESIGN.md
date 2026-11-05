# 049 · Bloom Shift

> **Touch the flower. The level goes weird.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `2 min` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `bloom-shift` → `src/offline-games/bloom-shift.txt` |
| **Inspired by (mechanics only)** | Super Mario Bros. Wonder (2D platformer) |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:bloom-shift:best`, `arthis:bloom-shift:settings` (try/catch) |

### Pitch
A cheerful sprout hero runs and jumps through bright levels. Grabbing a Bloom Flower transforms the level for 20 seconds: pipes dance, gravity flips, enemies sing.

### Why it can go viral
Every bloom is a surprise worth sharing ('the level turned upside down!').

### What makes it ours

- **Twist:** 3 different bloom effects per level, randomised.
- **Rule we invented:** Badge: pick 1 badge (wall climb, float, dash) before each level from the pause sheet.
- **What we cut from the reference:** Big world map: 4 levels.

## 2 · Gameplay

### Core mechanic
Run-and-jump platforming with a surprise transformation.

### Rules

1. Grab the Bloom Flower to start a 20 s transformation (one of 3 per level, random).
2. During the bloom, grab the bloom seed to end it with a reward.
3. Stomp enemies; spikes hurt.
4. 3 secret seeds per level.
5. Reach the flag; 3 lives.

### Win / Lose
- **Win:** Reach the final flag
- **Lose:** Lose 3 lives

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows · Z jump · X run | Stick · Jump · Run |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Lives · Seeds
- **Hint line (shown once, under 60 chars):** "Touch the flower. Expect anything!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
Easy: more lives · Normal · Hard: fewer checkpoints.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Levels | 4 |
| Bloom time | 20 s |
| Run speed | 7 U/s |
| Lives | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** sprout = 1U
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
| ![](https://placehold.co/28x28/FFF3D6/FFF3D6.png) | Ground / play surface | `#FFF3D6` |
| ![](https://placehold.co/28x28/FF6B6B/FF6B6B.png) | Hero | `#FF6B6B` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#A6E3A1"`

### Asset sheet (sizes in units)

- Sprout: 1U round hero with a leaf hat and big eyes
- Beetles 0.6U, snails 0.7U, bees 0.5U
- Pipes and blocks: rounded with lighter top faces
- Bloom flower: 1U glowing bloom
- Flag: 4U pole

### Background (three quiet hazed bands)

1. **Far:** bright sky with clouds
2. **Mid:** rolling hills
3. **Near:** bushes and flowers

### Juice

- Bloom swirl transition
- Squash and stretch on stomps
- Flag fanfare with petals
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **BLOOM SHIFT** | A sprout hero in a flower world, title in petals |
| 2 · Action | **WONDER!** | The level flipping upside down |
| 3 · Win | **FLAG!** | Sprout on top of the flag |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/bloom-shift.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/bloom-shift.txt .shots/bloom-shift --pause`, then open every PNG
- [ ] **Win path:** recorded route to the flag on all 4 levels
- [ ] **Lose path:** run into enemies 3 times
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Bloom Shift  ·  slug: bloom-shift
Brief: Solo score-chase · 2 min · palette family meadow (light) · 2D canvas
Pitch: A cheerful sprout hero runs and jumps through bright levels. Grabbing a Bloom Flower transforms the level for 20 seconds: pipes dance, gravity flips, enemies sing.
Core: Run-and-jump platforming with a surprise transformation.
Rules: (1) Grab the Bloom Flower to start a 20 s transformation (one of 3 per level, random). (2) During the bloom, grab the bloom seed to end it with a reward. (3) Stomp enemies; spikes hurt. (4) 3 secret seeds per level. (5) Reach the flag; 3 lives.
Win: Reach the final flag · Lose: Lose 3 lives
Controls: desktop Arrows · Z jump · X run · touch Stick · Jump · Run (max 3 inputs)
HUD: Coins · Lives · Seeds + pause
Hint: "Touch the flower. Expect anything!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: more lives · Normal · Hard: fewer checkpoints.
Style kit: unit = sprout = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #A6E3A1, Ground / play surface #FFF3D6, Hero #FF6B6B, Accent / rewards #FFD166
Assets: Sprout: 1U round hero with a leaf hat and big eyes; Beetles 0.6U, snails 0.7U, bees 0.5U; Pipes and blocks: rounded with lighter top faces; Bloom flower: 1U glowing bloom; Flag: 4U pole
Background bands: bright sky with clouds / rolling hills / bushes and flowers
Juice: Bloom swirl transition; Squash and stretch on stomps; Flag fanfare with petals
Feed cards: 1) Title: A sprout hero in a flower world, title in petals 2) WONDER!: The level flipping upside down 3) FLAG!: Sprout on top of the flag
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:bloom-shift:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
