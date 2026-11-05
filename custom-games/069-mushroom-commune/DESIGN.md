# 069 · Mushroom Commune

> **Raid the woods. Keep your followers happy.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `5 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `mushroom-commune` → `src/offline-games/mushroom-commune.txt` |
| **Inspired by (mechanics only)** | Cult of the Lamb (roguelite + colony) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:mushroom-commune:best`, `arthis:mushroom-commune:settings` (try/catch) |

### Pitch
A tiny mushroom shaman leads a forest commune. Run short dungeon raids to rescue followers, then keep the camp fed, rested and cheerful.

### Why it can go viral
Cute-creepy tone and two loops (raids and camp) feeding each other.

### What makes it ours

- **Twist:** Rules: choose camp rules with trade-offs (feasts = happy but less food).
- **Rule we invented:** Spore song: a daily dance that boosts happiness.
- **What we cut from the reference:** Dark sacrifice themes: kept wholesome.

## 2 · Gameplay

### Core mechanic
Raid 3 rooms, return, manage needs.

### Rules

1. Followers need food, rest and joy.
2. Raids (3 rooms) rescue followers and gather berries and wood.
3. Build: farm, kitchen, shrine, beds.
4. Joy at 0: followers leave one by one.
5. Reach 10 followers by day 7.

### Win / Lose
- **Win:** 10 followers by day 7
- **Lose:** All followers leave

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J attack · E interact | Stick · Attack · Interact |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Joy · Food · Followers
- **Hint line (shown once, under 60 chars):** "Raid, rescue, keep them happy."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Joy), **Play Again**

### Difficulty
Easy · Normal · Hard (need drain).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Days | 7 |
| Raid rooms | 3 |
| Joy drain | 5/day |
| Goal | 10 followers |

## 3 · Look and feel (style kit)

- **Scale unit:** shaman = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/F3D2C1/F3D2C1.png) | Mid band | `#F3D2C1` |
| ![](https://placehold.co/28x28/E9C9B0/E9C9B0.png) | Ground / play surface | `#E9C9B0` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/6BCB77/6BCB77.png) | Accent / rewards | `#6BCB77` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#F3D2C1"`

### Asset sheet (sizes in units)

- Shaman: 1U mushroom with a glowing staff
- Followers: 0.8U forest critters (frog, rabbit, owl)
- Camp buildings: rounded huts and stalls
- Raid enemies: thorny sprites

### Background (three quiet hazed bands)

1. **Far:** forest haze
2. **Mid:** trees
3. **Near:** camp clearing

### Juice

- Spore sparkles
- Happy hearts
- Raid slash arcs
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **MUSHROOM COMMUNE** | A mushroom shaman with critter followers in a forest camp |
| 2 · Action | **RAID!** | Shaman slashing thorn sprites |
| 3 · Win | **FLOCK GROWN!** | Camp with 10 happy followers at sunset |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/mushroom-commune.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/mushroom-commune.txt .shots/mushroom-commune --pause`, then open every PNG
- [ ] **Win path:** scripted raids and builds to 10 followers
- [ ] **Lose path:** never feed followers
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Mushroom Commune  ·  slug: mushroom-commune
Brief: Solo score-chase · 5 min · palette family peach (light) · 2D canvas
Pitch: A tiny mushroom shaman leads a forest commune. Run short dungeon raids to rescue followers, then keep the camp fed, rested and cheerful.
Core: Raid 3 rooms, return, manage needs.
Rules: (1) Followers need food, rest and joy. (2) Raids (3 rooms) rescue followers and gather berries and wood. (3) Build: farm, kitchen, shrine, beds. (4) Joy at 0: followers leave one by one. (5) Reach 10 followers by day 7.
Win: 10 followers by day 7 · Lose: All followers leave
Controls: desktop WASD · J attack · E interact · touch Stick · Attack · Interact (max 3 inputs)
HUD: Joy · Food · Followers + pause
Hint: "Raid, rescue, keep them happy."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (need drain).
Style kit: unit = shaman = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #F3D2C1, Ground / play surface #E9C9B0, Hero #843B62, Accent / rewards #6BCB77
Assets: Shaman: 1U mushroom with a glowing staff; Followers: 0.8U forest critters (frog, rabbit, owl); Camp buildings: rounded huts and stalls; Raid enemies: thorny sprites
Background bands: forest haze / trees / camp clearing
Juice: Spore sparkles; Happy hearts; Raid slash arcs
Feed cards: 1) Title: A mushroom shaman with critter followers in a forest camp 2) RAID!: Shaman slashing thorn sprites 3) FLOCK GROWN!: Camp with 10 happy followers at sunset
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:mushroom-commune:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
