# 014 · Ricochet Depths

> **Aim the bounce. Fuse the balls.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `3 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `ricochet-depths` → `src/offline-games/ricochet-depths.txt` |
| **Inspired by (mechanics only)** | BALL x PIT (brick-breaker roguelite) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:ricochet-depths:best`, `arthis:ricochet-depths:settings` (try/catch) |

### Pitch
At the bottom of a coral trench, a little diver shoots bouncing pearls up at rows of creatures sinking toward them. Level up pearl types and fuse them into wild combos.

### Why it can go viral
Satisfying ricochet chains: one perfect angle clears a whole row in a chain of pops.

### What makes it ours

- **Twist:** Creatures sink one row each volley; armoured crabs block bounces until cracked.
- **Rule we invented:** Fusion shell: when two pearl types are max level, drop them in the shell to fuse (fire + ice = steam pearl that hits all neighbours).
- **What we cut from the reference:** Base-building meta: one run, 10 waves, pick-1-of-3 upgrades.

## 2 · Gameplay

### Core mechanic
Aim and release a volley of bouncing pearls; they return to you; creatures sink each turn.

### Rules

1. Each volley fires all your pearls in a line.
2. Creatures move down one row per volley; reaching the bottom costs a heart.
3. Level up after each wave: pick a new pearl type or upgrade.
4. Pearl types: fire (burn), ice (slow), split (forks), heavy (pierces).
5. Wave 10 is a giant jellyfish boss.

### Win / Lose
- **Win:** Clear wave 10
- **Lose:** All 3 hearts lost

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Mouse aim · click shoot · Space speed-up | Drag aim · release to shoot · Fast button |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Wave · Pearls · Hearts
- **Hint line (shown once, under 60 chars):** "Aim the bounce. Fuse pearls!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Wave), **Play Again**

### Difficulty
Easy: creatures sink every 2 volleys · Normal every volley · Hard + armoured rows.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Start pearls | 5 |
| Pearls per level | +2 |
| Rows per wave | 6 |
| Hearts | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** diver height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/7FD1E8/7FD1E8.png) | Mid band | `#7FD1E8` |
| ![](https://placehold.co/28x28/BDE6F1/BDE6F1.png) | Ground / play surface | `#BDE6F1` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FFC857/FFC857.png) | Accent / rewards | `#FFC857` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#7FD1E8"`

### Asset sheet (sizes in units)

- Diver: 1U rounded suit with fishbowl helmet, pearl launcher held in hands
- Pearls: 0.25U glossy circles, colour per type
- Creatures: puffer 0.8U, crab 0.9U (armour plate), starfish 0.7U, jelly boss 4U
- Coral walls: rounded side bumpers

### Background (three quiet hazed bands)

1. **Far:** light rays in teal water
2. **Mid:** coral reef silhouettes
3. **Near:** sand floor

### Juice

- Pearl trails
- Pop rings on hits
- Fusion swirl animation
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **RICOCHET DEPTHS** | Diver aiming up through a coral trench at glowing creatures, title on a giant clam |
| 2 · Action | **FUSE!** | Two pearls merging into a glowing steam pearl |
| 3 · Win | **DEPTHS CLEARED!** | Diver on the defeated jellyfish, pearls raining |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/ricochet-depths.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/ricochet-depths.txt .shots/ricochet-depths --pause`, then open every PNG
- [ ] **Win path:** auto-aim script at lowest row; pick split/heavy; clear 10
- [ ] **Lose path:** fire straight up repeatedly without aiming
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Ricochet Depths  ·  slug: ricochet-depths
Brief: Solo score-chase · 3 min · palette family ocean (light) · 2D canvas
Pitch: At the bottom of a coral trench, a little diver shoots bouncing pearls up at rows of creatures sinking toward them. Level up pearl types and fuse them into wild combos.
Core: Aim and release a volley of bouncing pearls; they return to you; creatures sink each turn.
Rules: (1) Each volley fires all your pearls in a line. (2) Creatures move down one row per volley; reaching the bottom costs a heart. (3) Level up after each wave: pick a new pearl type or upgrade. (4) Pearl types: fire (burn), ice (slow), split (forks), heavy (pierces). (5) Wave 10 is a giant jellyfish boss.
Win: Clear wave 10 · Lose: All 3 hearts lost
Controls: desktop Mouse aim · click shoot · Space speed-up · touch Drag aim · release to shoot · Fast button (max 3 inputs)
HUD: Wave · Pearls · Hearts + pause
Hint: "Aim the bounce. Fuse pearls!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: creatures sink every 2 volleys · Normal every volley · Hard + armoured rows.
Style kit: unit = diver height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #7FD1E8, Ground / play surface #BDE6F1, Hero #2F80ED, Accent / rewards #FFC857
Assets: Diver: 1U rounded suit with fishbowl helmet, pearl launcher held in hands; Pearls: 0.25U glossy circles, colour per type; Creatures: puffer 0.8U, crab 0.9U (armour plate), starfish 0.7U, jelly boss 4U; Coral walls: rounded side bumpers
Background bands: light rays in teal water / coral reef silhouettes / sand floor
Juice: Pearl trails; Pop rings on hits; Fusion swirl animation
Feed cards: 1) Title: Diver aiming up through a coral trench at glowing creatures, title on a giant clam 2) FUSE!: Two pearls merging into a glowing steam pearl 3) DEPTHS CLEARED!: Diver on the defeated jellyfish, pearls raining
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:ricochet-depths:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
