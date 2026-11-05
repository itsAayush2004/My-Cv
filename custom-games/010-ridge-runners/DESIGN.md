# 010 · Ridge Runners

> **Scouts. Rope. A mountain that says no.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `4 min` · `snow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `ridge-runners` → `src/offline-games/ridge-runners.txt` |
| **Inspired by (mechanics only)** | PEAK (co-op climbing) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `snow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:ridge-runners:best`, `arthis:ridge-runners:settings` (try/catch) |

### Pitch
A scout climbs a daily-seeded mountain from beach to summit, managing stamina, snacks and cold to fire the rescue flare.

### Why it can go viral
The same mountain for everyone each day means players compare their best height and time with friends.

### What makes it ours

- **Twist:** Stamina's maximum shrinks from hunger and cold, so food and campfires really matter.
- **Rule we invented:** Merit badges: odd achievements (ate a mystery berry, 10 m without resting) give a tiny perk next run.
- **What we cut from the reference:** 4-player co-op and items galore: solo scout with 4 item types.

## 2 · Gameplay

### Core mechanic
Hold to grip and climb walls while stamina drains; rest on ledges and eat to recover.

### Rules

1. Climbing drains stamina; on ledges it refills.
2. Hunger and cold reduce max stamina; eat snacks and warm at campfires.
3. Rope: place an anchor to rest mid-wall once per section.
4. Biomes: beach → jungle (poison berries) → snow (cold) → summit.
5. Same seed for everyone each day.

### Win / Lose
- **Win:** Reach the summit and fire the flare
- **Lose:** Fall from a section start with no rope, or stamina 0 mid-wall

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| A/D move · Space jump · Shift hold grip | Joystick · Jump · Grip (hold) |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Height · Stamina · Snacks
- **Hint line (shown once, under 60 chars):** "Grip, rest, eat, climb."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Height), **Play Again**

### Difficulty
Easy: slow drain, more ledges · Normal · Hard: fast drain, fewer snacks.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Stamina | 100 |
| Climb drain | 9/s |
| Cold max loss | 1 per 4 s |
| Sections | 8 |

## 3 · Look and feel (style kit)

- **Scale unit:** scout height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/E8F4FF/E8F4FF.png) | Far band (sky) | `#E8F4FF` |
| ![](https://placehold.co/28x28/A9D6E5/A9D6E5.png) | Mid band | `#A9D6E5` |
| ![](https://placehold.co/28x28/F8F9FA/F8F9FA.png) | Ground / play surface | `#F8F9FA` |
| ![](https://placehold.co/28x28/D62828/D62828.png) | Hero | `#D62828` |
| ![](https://placehold.co/28x28/2D6A4F/2D6A4F.png) | Accent / rewards | `#2D6A4F` |

Catalog colours: `bgColorLight: "#E8F4FF"`, `bgColorDark: "#A9D6E5"`

### Asset sheet (sizes in units)

- Scout: 1U, khaki shirt, red neckerchief, backpack
- Rock walls: rounded boulders with lighter top faces
- Ledges: 1–2U rounded shelves
- Snacks: 0.3U (banana, granola), rope coil 0.4U
- Campfire: 0.8U rounded logs + soft flame

### Background (three quiet hazed bands)

1. **Far:** pale sky with soft clouds
2. **Mid:** distant blue peaks
3. **Near:** near pine and snow silhouettes

### Juice

- Grip strain shake when stamina is low
- Breath puffs in snow
- Flare burst at the summit
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **RIDGE RUNNERS** | A scout at the beach looking up at a huge mountain, title on a trail sign |
| 2 · Action | **GRIP!** | Scout hanging by one hand above a drop |
| 3 · Win | **SUMMIT!** | Scout firing a red flare at the snowy top |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/ridge-runners.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/ridge-runners.txt .shots/ridge-runners --pause`, then open every PNG
- [ ] **Win path:** seeded climb with timed rests and eating to the summit
- [ ] **Lose path:** release grip mid-wall
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Ridge Runners  ·  slug: ridge-runners
Brief: Solo score-chase · 4 min · palette family snow (light) · 2D canvas
Pitch: A scout climbs a daily-seeded mountain from beach to summit, managing stamina, snacks and cold to fire the rescue flare.
Core: Hold to grip and climb walls while stamina drains; rest on ledges and eat to recover.
Rules: (1) Climbing drains stamina; on ledges it refills. (2) Hunger and cold reduce max stamina; eat snacks and warm at campfires. (3) Rope: place an anchor to rest mid-wall once per section. (4) Biomes: beach → jungle (poison berries) → snow (cold) → summit. (5) Same seed for everyone each day.
Win: Reach the summit and fire the flare · Lose: Fall from a section start with no rope, or stamina 0 mid-wall
Controls: desktop A/D move · Space jump · Shift hold grip · touch Joystick · Jump · Grip (hold) (max 3 inputs)
HUD: Height · Stamina · Snacks + pause
Hint: "Grip, rest, eat, climb."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow drain, more ledges · Normal · Hard: fast drain, fewer snacks.
Style kit: unit = scout height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #E8F4FF, Mid band #A9D6E5, Ground / play surface #F8F9FA, Hero #D62828, Accent / rewards #2D6A4F
Assets: Scout: 1U, khaki shirt, red neckerchief, backpack; Rock walls: rounded boulders with lighter top faces; Ledges: 1–2U rounded shelves; Snacks: 0.3U (banana, granola), rope coil 0.4U; Campfire: 0.8U rounded logs + soft flame
Background bands: pale sky with soft clouds / distant blue peaks / near pine and snow silhouettes
Juice: Grip strain shake when stamina is low; Breath puffs in snow; Flare burst at the summit
Feed cards: 1) Title: A scout at the beach looking up at a huge mountain, title on a trail sign 2) GRIP!: Scout hanging by one hand above a drop 3) SUMMIT!: Scout firing a red flare at the snowy top
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:ridge-runners:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
