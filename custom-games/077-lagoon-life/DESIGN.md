# 077 · Lagoon Life

> **One island week. Fish, sell, decorate.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `7 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `lagoon-life` → `src/offline-games/lagoon-life.txt` |
| **Inspired by (mechanics only)** | Animal Crossing (cosy island life) |
| **Players** | Solo score-chase |
| **Session** | 7 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:lagoon-life:best`, `arthis:lagoon-life:settings` (try/catch) |

### Pitch
One week on a tiny lagoon island, each day 60 seconds. Shake palms, fish, net bugs, sell at the hut and decorate to earn island stars; new neighbours move in as stars rise.

### Why it can go viral
Cosy routine and decorated islands people love to show off.

### What makes it ours

- **Twist:** Daily special: one item sells for double each day.
- **Rule we invented:** Message bottles wash ashore with furniture recipes.
- **What we cut from the reference:** Real-time year: one week.

## 2 · Gameplay

### Core mechanic
Gather, sell, decorate.

### Rules

1. Fishing: tap when the bobber dips.
2. Bug net: sneak up slowly.
3. Sell at the hut; daily special sells double.
4. Furniture raises island stars.
5. Neighbours arrive at 2, 3 and 4 stars.

### Win / Lose
- **Win:** 5 stars by day 7
- **Lose:** (gentle)

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · E action · Q tool | Stick · Action · Tool |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins · Day · Stars
- **Hint line (shown once, under 60 chars):** "Shake trees, fish, sell, decorate."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins), **Play Again**

### Difficulty
Gentle game: Easy doubles prices; Hard halves daily time.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Days | 7 × 60 s |
| Goal | 5 stars |
| Fish | 12 species |
| Bugs | 8 species |

## 3 · Look and feel (style kit)

- **Scale unit:** villager = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/B5E8D5/B5E8D5.png) | Mid band | `#B5E8D5` |
| ![](https://placehold.co/28x28/F6E7C1/F6E7C1.png) | Ground / play surface | `#F6E7C1` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FF8A65/FF8A65.png) | Accent / rewards | `#FF8A65` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#B5E8D5"`

### Asset sheet (sizes in units)

- Villager: 1U with straw hat, net/rod parented to hands
- Palms: 3U rounded fronds
- Furniture: 0.6–1U rounded pieces
- Fish and bugs: 0.3–0.8U
- Shop hut: 2U

### Background (three quiet hazed bands)

1. **Far:** clear sky
2. **Mid:** turquoise sea
3. **Near:** sand beach

### Juice

- Coin pop
- Star chime
- Neighbour arrival
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LAGOON LIFE** | A cosy island |
| 2 · Action | **CATCH!** | Fish leaping |
| 3 · Win | **5 STARS!** | Decorated island |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/lagoon-life.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/lagoon-life.txt .shots/lagoon-life --pause`, then open every PNG
- [ ] **Win path:** scripted to 5 stars
- [ ] **Lose path:** n/a
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Lagoon Life  ·  slug: lagoon-life
Brief: Solo score-chase · 7 min · palette family ocean (light) · 2D canvas
Pitch: One week on a tiny lagoon island, each day 60 seconds. Shake palms, fish, net bugs, sell at the hut and decorate to earn island stars; new neighbours move in as stars rise.
Core: Gather, sell, decorate.
Rules: (1) Fishing: tap when the bobber dips. (2) Bug net: sneak up slowly. (3) Sell at the hut; daily special sells double. (4) Furniture raises island stars. (5) Neighbours arrive at 2, 3 and 4 stars.
Win: 5 stars by day 7 · Lose: (gentle)
Controls: desktop WASD · E action · Q tool · touch Stick · Action · Tool (max 3 inputs)
HUD: Coins · Day · Stars + pause
Hint: "Shake trees, fish, sell, decorate."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Gentle game: Easy doubles prices; Hard halves daily time.
Style kit: unit = villager = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #B5E8D5, Ground / play surface #F6E7C1, Hero #2F80ED, Accent / rewards #FF8A65
Assets: Villager: 1U with straw hat, net/rod parented to hands; Palms: 3U rounded fronds; Furniture: 0.6–1U rounded pieces; Fish and bugs: 0.3–0.8U; Shop hut: 2U
Background bands: clear sky / turquoise sea / sand beach
Juice: Coin pop; Star chime; Neighbour arrival
Feed cards: 1) Title: A cosy island 2) CATCH!: Fish leaping 3) 5 STARS!: Decorated island
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:lagoon-life:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
