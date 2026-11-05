# 094 · Smash Heist Voxel

> **Plan first. Then smash and RUN.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `Solo score-chase` · `2 min` · `sand (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `smash-heist-voxel` → `src/offline-games/smash-heist-voxel.txt` |
| **Inspired by (mechanics only)** | Teardown (voxel destruction heist) |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `sand` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:smash-heist-voxel:best`, `arthis:smash-heist-voxel:settings` (try/catch) |

### Pitch
A fully destructible voxel town block. Plan freely, then grabbing the first loot starts a 45 s alarm: smash through walls you prepared to reach every loot and the getaway van.

### Why it can go viral
Planning a perfect route then smashing through it is incredibly satisfying.

### What makes it ours

- **Twist:** Prep phase: unlimited time to cut holes and place ramps before the alarm.
- **Rule we invented:** Paint spray: mark walls to remember your route.
- **What we cut from the reference:** Many tools: hammer + plank + spray.

## 2 · Gameplay

### Core mechanic
Destroy voxels, place planks, grab loot, escape.

### Rules

1. Loot: 4 items.
2. First grab starts 45 s alarm.
3. Hammer breaks wood/brick (not steel).
4. Planks bridge gaps.
5. Reach the van before 0.

### Win / Lose
- **Win:** All loot + van in time
- **Lose:** Timer runs out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · LMB smash · RMB plank | Stick · Smash · Plank |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Loot · Time · Planks
- **Hint line (shown once, under 60 chars):** "Plan first. Then grab and RUN."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Loot), **Play Again**

### Difficulty
Easy: 60 s alarm · Normal: 45 s · Hard: 35 s and a steel wall.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Alarm | 45 s |
| Planks | 6 |
| Loot | 4 |
| Voxel size | 0.1U |

## 3 · Look and feel (style kit)

- **Scale unit:** player = 1U, voxel = 0.1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF1D6/FFF1D6.png) | Far band (sky) | `#FFF1D6` |
| ![](https://placehold.co/28x28/F4C47A/F4C47A.png) | Mid band | `#F4C47A` |
| ![](https://placehold.co/28x28/E9D6B3/E9D6B3.png) | Ground / play surface | `#E9D6B3` |
| ![](https://placehold.co/28x28/E07A5F/E07A5F.png) | Hero | `#E07A5F` |
| ![](https://placehold.co/28x28/3D9A8B/3D9A8B.png) | Accent / rewards | `#3D9A8B` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#F4C47A"`

### Asset sheet (sizes in units)

- Thief: 1U with hammer parented to hands
- Voxel buildings: rounded-chunk bricks
- Van: 2U rounded
- Loot: safe, painting, vase, gold bar

### Background (three quiet hazed bands)

1. **Far:** warm sky
2. **Mid:** town rooftops
3. **Near:** street

### Juice

- Voxel debris
- Alarm red pulse
- Van door slam
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SMASH HEIST VOXEL** | A voxel town with a getaway van, title in brick letters |
| 2 · Action | **SMASH!** | A wall exploding into voxels |
| 3 · Win | **CLEAN GETAWAY!** | Van speeding off with loot |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/smash-heist-voxel.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/smash-heist-voxel.txt .shots/smash-heist-voxel --pause`, then open every PNG
- [ ] **Win path:** prepared path and scripted heist run under 45 s
- [ ] **Lose path:** grab the first loot and wait for the alarm
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Smash Heist Voxel  ·  slug: smash-heist-voxel
Brief: Solo score-chase · 2 min · palette family sand (light) · 3D, three.js r128 from cdnjs
Pitch: A fully destructible voxel town block. Plan freely, then grabbing the first loot starts a 45 s alarm: smash through walls you prepared to reach every loot and the getaway van.
Core: Destroy voxels, place planks, grab loot, escape.
Rules: (1) Loot: 4 items. (2) First grab starts 45 s alarm. (3) Hammer breaks wood/brick (not steel). (4) Planks bridge gaps. (5) Reach the van before 0.
Win: All loot + van in time · Lose: Timer runs out
Controls: desktop WASD · LMB smash · RMB plank · touch Stick · Smash · Plank (max 3 inputs)
HUD: Loot · Time · Planks + pause
Hint: "Plan first. Then grab and RUN."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 60 s alarm · Normal: 45 s · Hard: 35 s and a steel wall.
Style kit: unit = player = 1U, voxel = 0.1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F4C47A, Ground / play surface #E9D6B3, Hero #E07A5F, Accent / rewards #3D9A8B
Assets: Thief: 1U with hammer parented to hands; Voxel buildings: rounded-chunk bricks; Van: 2U rounded; Loot: safe, painting, vase, gold bar
Background bands: warm sky / town rooftops / street
Juice: Voxel debris; Alarm red pulse; Van door slam
Feed cards: 1) Title: A voxel town with a getaway van, title in brick letters 2) SMASH!: A wall exploding into voxels 3) CLEAN GETAWAY!: Van speeding off with loot
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:smash-heist-voxel:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
