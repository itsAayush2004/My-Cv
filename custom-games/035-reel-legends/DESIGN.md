# 035 · Reel Legends

> **Cast, reel, chase the legend.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `4 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `reel-legends` → `src/offline-games/reel-legends.txt` |
| **Inspired by (mechanics only)** | Fisch (fishing RPG) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:reel-legends:best`, `arthis:reel-legends:settings` (try/catch) |

### Pitch
Fish around 3 small islands with a reel minigame. Fill a bestiary, upgrade rods, and land the island's legend fish.

### Why it can go viral
Rare catch reveals and the legend fight make great moments to share.

### What makes it ours

- **Twist:** The reel bar has to follow the fish icon; heavier fish swim more wildly.
- **Rule we invented:** Bait mixing: combine 2 baits for a third effect (shrimp + glow = deep lure).
- **What we cut from the reference:** Online and big world: 3 islands, 20 fish.

## 2 · Gameplay

### Core mechanic
Cast with a power bar, then keep the reel bar on the fish until the catch meter fills.

### Rules

1. Cast power decides depth zone.
2. Keep the reel bar on the fish to fill the meter; off-target drains it.
3. Rods have luck (rarity) and control (bar size).
4. Islands: harbour, reef, volcano cove.
5. Legend fish appears after 10 species caught.

### Win / Lose
- **Win:** Catch the legend fish
- **Lose:** (gentle) none: bestiary %

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Hold Space cast/reel · Q bait · Tab island | Hold · Bait · Island |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Bestiary · Rod
- **Hint line (shown once, under 60 chars):** "Keep the bar on the fish!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
Easy: bigger bar · Normal · Hard: smaller bar and faster fish.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Fish | 20 |
| Bar size | 30% |
| Meter fill | 3–8 s |
| Islands | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** fisher = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/9FD9EA/9FD9EA.png) | Mid band | `#9FD9EA` |
| ![](https://placehold.co/28x28/5BB7D1/5BB7D1.png) | Ground / play surface | `#5BB7D1` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FFC857/FFC857.png) | Accent / rewards | `#FFC857` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#9FD9EA"`

### Asset sheet (sizes in units)

- Fisher: 1U with bucket hat, rod parented to hands
- Fish: 0.4–2U rounded flat fish shapes with lighter backs
- Dock: rounded planks
- Boat: 2U rounded

### Background (three quiet hazed bands)

1. **Far:** sky haze
2. **Mid:** island silhouettes
3. **Near:** water surface

### Juice

- Splash on cast
- Reel tension shake
- Fish flip reveal card
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **REEL LEGENDS** | A fisher on a dock with a shadow of a giant fish below, title on a buoy |
| 2 · Action | **REEL!** | Rod bending as a fish leaps |
| 3 · Win | **LEGEND CAUGHT!** | Fisher holding a glowing giant fish |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/reel-legends.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/reel-legends.txt .shots/reel-legends --pause`, then open every PNG
- [ ] **Win path:** scripted reel tracking to catch 10 species and the legend
- [ ] **Lose path:** n/a (gentle)
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Reel Legends  ·  slug: reel-legends
Brief: Solo score-chase · 4 min · palette family ocean (light) · 2D canvas
Pitch: Fish around 3 small islands with a reel minigame. Fill a bestiary, upgrade rods, and land the island's legend fish.
Core: Cast with a power bar, then keep the reel bar on the fish until the catch meter fills.
Rules: (1) Cast power decides depth zone. (2) Keep the reel bar on the fish to fill the meter; off-target drains it. (3) Rods have luck (rarity) and control (bar size). (4) Islands: harbour, reef, volcano cove. (5) Legend fish appears after 10 species caught.
Win: Catch the legend fish · Lose: (gentle) none: bestiary %
Controls: desktop Hold Space cast/reel · Q bait · Tab island · touch Hold · Bait · Island (max 3 inputs)
HUD: Coins · Bestiary · Rod + pause
Hint: "Keep the bar on the fish!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: bigger bar · Normal · Hard: smaller bar and faster fish.
Style kit: unit = fisher = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #9FD9EA, Ground / play surface #5BB7D1, Hero #2F80ED, Accent / rewards #FFC857
Assets: Fisher: 1U with bucket hat, rod parented to hands; Fish: 0.4–2U rounded flat fish shapes with lighter backs; Dock: rounded planks; Boat: 2U rounded
Background bands: sky haze / island silhouettes / water surface
Juice: Splash on cast; Reel tension shake; Fish flip reveal card
Feed cards: 1) Title: A fisher on a dock with a shadow of a giant fish below, title on a buoy 2) REEL!: Rod bending as a fish leaps 3) LEGEND CAUGHT!: Fisher holding a glowing giant fish
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:reel-legends:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
