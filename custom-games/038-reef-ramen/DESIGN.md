# 038 · Reef & Ramen

> **Dive by day. Serve by night.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `4 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `reef-ramen` → `src/offline-games/reef-ramen.txt` |
| **Inspired by (mechanics only)** | Dave the Diver (dive + restaurant) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:reef-ramen:best`, `arthis:reef-ramen:settings` (try/catch) |

### Pitch
Day: dive a coral reef and harpoon fish before air runs out. Night: run a tiny ramen bar and serve bowls made from your catch.

### Why it can go viral
Two satisfying loops in one; the busy service rush is fun to watch.

### What makes it ours

- **Twist:** Fresh is best: fish caught today give double tips.
- **Rule we invented:** Night specials: combine 2 fish types for a special bowl that pleases VIPs.
- **What we cut from the reference:** Story and dozens of minigames: 3 days.

## 2 · Gameplay

### Core mechanic
Dive: aim and harpoon fish. Night: drag bowls to customers before they leave.

### Rules

1. O₂ is HP; sharks bite O₂.
2. Weight limit 8 fish.
3. Night: each customer orders a bowl; drag it before the timer.
4. Tips scale with speed and freshness.
5. Buy upgrades between days (tank, harpoon, chef helper).

### Win / Lose
- **Win:** ₹500 in 3 days
- **Lose:** Below ₹500

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD swim · mouse aim · click harpoon (night: drag bowls) | Joystick · Aim · Harpoon / drag |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** O₂ · ₹ · Day
- **Hint line (shown once, under 60 chars):** "Dive by day. Serve by night."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (O₂), **Play Again**

### Difficulty
Easy: slow customers · Normal · Hard: sharks and VIPs.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| O₂ | 60 s |
| Weight | 8 fish |
| Customers | 10/night |
| Days | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** diver = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/8DD3E8/8DD3E8.png) | Mid band | `#8DD3E8` |
| ![](https://placehold.co/28x28/F3E3C3/F3E3C3.png) | Ground / play surface | `#F3E3C3` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FF7F50/FF7F50.png) | Accent / rewards | `#FF7F50` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#8DD3E8"`

### Asset sheet (sizes in units)

- Diver: 1U chubby, mask, harpoon parented to hands
- Fish: 0.4–1U rounded flat fish
- Ramen bowls: 0.5U with toppings
- Bar: rounded counter and lanterns

### Background (three quiet hazed bands)

1. **Far:** teal water with light rays / night street haze
2. **Mid:** reef / shop silhouettes
3. **Near:** sand / counter

### Juice

- Harpoon hit sparkles
- Steam from bowls
- Tip coins pop
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **REEF & RAMEN** | A diver above a reef and a ramen bar on the shore, title on a noren curtain |
| 2 · Action | **HARPOON!** | Diver spearing a big fish |
| 3 · Win | **FULL HOUSE!** | Packed ramen bar with happy customers |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/reef-ramen.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/reef-ramen.txt .shots/reef-ramen --pause`, then open every PNG
- [ ] **Win path:** catch 8 fish each day and serve all customers fast
- [ ] **Lose path:** catch nothing
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Reef & Ramen  ·  slug: reef-ramen
Brief: Solo score-chase · 4 min · palette family ocean (light) · 2D canvas
Pitch: Day: dive a coral reef and harpoon fish before air runs out. Night: run a tiny ramen bar and serve bowls made from your catch.
Core: Dive: aim and harpoon fish. Night: drag bowls to customers before they leave.
Rules: (1) O₂ is HP; sharks bite O₂. (2) Weight limit 8 fish. (3) Night: each customer orders a bowl; drag it before the timer. (4) Tips scale with speed and freshness. (5) Buy upgrades between days (tank, harpoon, chef helper).
Win: ₹500 in 3 days · Lose: Below ₹500
Controls: desktop WASD swim · mouse aim · click harpoon (night: drag bowls) · touch Joystick · Aim · Harpoon / drag (max 3 inputs)
HUD: O₂ · ₹ · Day + pause
Hint: "Dive by day. Serve by night."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow customers · Normal · Hard: sharks and VIPs.
Style kit: unit = diver = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #8DD3E8, Ground / play surface #F3E3C3, Hero #2F80ED, Accent / rewards #FF7F50
Assets: Diver: 1U chubby, mask, harpoon parented to hands; Fish: 0.4–1U rounded flat fish; Ramen bowls: 0.5U with toppings; Bar: rounded counter and lanterns
Background bands: teal water with light rays / night street haze / reef / shop silhouettes / sand / counter
Juice: Harpoon hit sparkles; Steam from bowls; Tip coins pop
Feed cards: 1) Title: A diver above a reef and a ramen bar on the shore, title on a noren curtain 2) HARPOON!: Diver spearing a big fish 3) FULL HOUSE!: Packed ramen bar with happy customers
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:reef-ramen:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
