# 065 · Fog Trawler

> **Fish by day. Make port by night.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `4 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `fog-trawler` → `src/offline-games/fog-trawler.txt` |
| **Inspired by (mechanics only)** | Dredge (fishing horror) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:fog-trawler:best`, `arthis:fog-trawler:settings` (try/catch) |

### Pitch
A small trawler fishes a misty archipelago. By day, timing minigames and a Tetris cargo hold; by night, fog brings panic, phantom rocks and something huge.

### Why it can go viral
The calm-to-creepy switch at sunset gives great moments.

### What makes it ours

- **Twist:** Panic meter: rises at night; high panic shows things that aren't there.
- **Rule we invented:** Mutated fish sell for triple but raise panic when stored.
- **What we cut from the reference:** Big map and research: 3 islands, 3 days.

## 2 · Gameplay

### Core mechanic
Catch fish with timing rings, pack the hold, sell at port before night deepens.

### Rules

1. Fishing: stop the needle in the green zone (3 rings).
2. Fish have shapes; fit them in a 6×4 hold.
3. Night starts at 60% of the day; panic rises outside port lights.
4. Sea creature appears at panic 80%.
5. Sell at ports for coins; upgrade lights and engine.

### Win / Lose
- **Win:** Earn 300 coins by day 3
- **Lose:** Boat sunk (3 hits)

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD sail · Space fish · R rotate cargo | Stick · Fish · Rotate |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Panic · Day
- **Hint line (shown once, under 60 chars):** "Fish by day. Port by night."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
Easy: slow panic · Normal · Hard: fast panic, more rocks.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Day | 70 s |
| Hold | 6 × 4 |
| Hull | 3 hits |
| Target | 300 |

## 3 · Look and feel (style kit)

- **Scale unit:** boat = 2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/1E2E44/1E2E44.png) | Mid band | `#1E2E44` |
| ![](https://placehold.co/28x28/2C4256/2C4256.png) | Ground / play surface | `#2C4256` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Hero | `#FFD166` |
| ![](https://placehold.co/28x28/7CFFCB/7CFFCB.png) | Accent / rewards | `#7CFFCB` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#1E2E44"`

### Asset sheet (sizes in units)

- Trawler: 2U rounded hull with captain seated in cabin
- Fish: rounded shapes in cargo cells
- Rocks: rounded dark boulders
- Sea creature: huge silhouette with glowing eyes

### Background (three quiet hazed bands)

1. **Far:** fog sky
2. **Mid:** island silhouettes
3. **Near:** sea surface

### Juice

- Lantern glow cone
- Fish flop into hold
- Fog swirl
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **FOG TRAWLER** | A small trawler with a lantern in thick fog, title on a buoy |
| 2 · Action | **REEL!** | A glowing mutated fish leaping |
| 3 · Win | **SAFE HARBOR!** | Boat at a lit pier |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/fog-trawler.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/fog-trawler.txt .shots/fog-trawler --pause`, then open every PNG
- [ ] **Win path:** scripted fishing and port timing to 300
- [ ] **Lose path:** stay out at night
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Fog Trawler  ·  slug: fog-trawler
Brief: Solo score-chase · 4 min · palette family night (dark) · 2D canvas
Pitch: A small trawler fishes a misty archipelago. By day, timing minigames and a Tetris cargo hold; by night, fog brings panic, phantom rocks and something huge.
Core: Catch fish with timing rings, pack the hold, sell at port before night deepens.
Rules: (1) Fishing: stop the needle in the green zone (3 rings). (2) Fish have shapes; fit them in a 6×4 hold. (3) Night starts at 60% of the day; panic rises outside port lights. (4) Sea creature appears at panic 80%. (5) Sell at ports for coins; upgrade lights and engine.
Win: Earn 300 coins by day 3 · Lose: Boat sunk (3 hits)
Controls: desktop WASD sail · Space fish · R rotate cargo · touch Stick · Fish · Rotate (max 3 inputs)
HUD: Coins · Panic · Day + pause
Hint: "Fish by day. Port by night."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow panic · Normal · Hard: fast panic, more rocks.
Style kit: unit = boat = 2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #1E2E44, Ground / play surface #2C4256, Hero #FFD166, Accent / rewards #7CFFCB
Assets: Trawler: 2U rounded hull with captain seated in cabin; Fish: rounded shapes in cargo cells; Rocks: rounded dark boulders; Sea creature: huge silhouette with glowing eyes
Background bands: fog sky / island silhouettes / sea surface
Juice: Lantern glow cone; Fish flop into hold; Fog swirl
Feed cards: 1) Title: A small trawler with a lantern in thick fog, title on a buoy 2) REEL!: A glowing mutated fish leaping 3) SAFE HARBOR!: Boat at a lit pier
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:fog-trawler:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
