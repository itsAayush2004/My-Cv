# 052 · Gully Cricket Smash

> **Street cricket. Window = six. Window broken = out.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU | 2 Players (local)` · `3 min` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `gully-cricket-smash` → `src/offline-games/gully-cricket-smash.txt` |
| **Inspired by (mechanics only)** | REMATCH (arcade one-player sport) |
| **Players** | vs CPU | 2 Players (local) |
| **Session** | 3 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:gully-cricket-smash:best`, `arthis:gully-cricket-smash:settings` (try/catch) |

### Pitch
Classic Indian gully cricket: bat against a CPU bowler in a narrow street. Timing shots into gaps scores runs; hit the neighbour's window and you're out.

### Why it can go viral
Huge nostalgia and funny street rules.

### What makes it ours

- **Twist:** Gully rules: one-tip-one-hand catch, wall = 4, over the roof = 6, window = out.
- **Rule we invented:** Aunty alert: a balcony aunty sometimes catches the ball (CPU fielder).
- **What we cut from the reference:** Full matches: 3 overs per innings.

## 2 · Gameplay

### Core mechanic
Time your swing (early, perfect, late) and aim a direction.

### Rules

1. 3 overs (18 balls) to chase a target.
2. Swing timing decides power; direction from arrow.
3. Wickets: bowled, caught, window.
4. 2P: one bats, one bowls (bowler picks line and speed).
5. 3 wickets.

### Win / Lose
- **Win:** Chase the target
- **Lose:** All out or balls finished short

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| A/D aim · Space swing · S defend | Swipe aim · Swing · Defend |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Runs · Balls · Wickets
- **Hint line (shown once, under 60 chars):** "Swing on the bounce!"
- **Pause sheet:** Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard
- **End sheet:** result, best (Runs), **Play Again**

### Difficulty
Easy: slow bowling · Normal · Hard: yorkers and bouncers.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Overs | 3 |
| Target | 30–45 |
| Perfect window | 80 ms |

## 3 · Look and feel (style kit)

- **Scale unit:** batter = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/F2E3C6/F2E3C6.png) | Mid band | `#F2E3C6` |
| ![](https://placehold.co/28x28/E8D9B5/E8D9B5.png) | Ground / play surface | `#E8D9B5` |
| ![](https://placehold.co/28x28/2E86AB/2E86AB.png) | Hero | `#2E86AB` |
| ![](https://placehold.co/28x28/F18F01/F18F01.png) | Accent / rewards | `#F18F01` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#F2E3C6"`

### Asset sheet (sizes in units)

- Batter: 1U with bat parented to hands
- Bowler: 1U
- Street: rounded houses with balconies and windows
- Stumps: crate-wicket

### Background (three quiet hazed bands)

1. **Far:** sky with kites
2. **Mid:** houses and wires
3. **Near:** street

### Juice

- Bat crack
- Window shatter (comic)
- Six lands on a roof with a cheer
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **GULLY CRICKET SMASH** | Kids playing cricket in a narrow street, title on a wall |
| 2 · Action | **SIX!** | Ball flying over the roof |
| 3 · Win | **CHAMPIONS!** | Team lifting the batter |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/gully-cricket-smash.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/gully-cricket-smash.txt .shots/gully-cricket-smash --pause`, then open every PNG
- [ ] **Win path:** perfect-timing script to chase
- [ ] **Lose path:** miss every ball
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Gully Cricket Smash  ·  slug: gully-cricket-smash
Brief: vs CPU | 2 Players (local) · 3 min · palette family meadow (light) · 2D canvas
Pitch: Classic Indian gully cricket: bat against a CPU bowler in a narrow street. Timing shots into gaps scores runs; hit the neighbour's window and you're out.
Core: Time your swing (early, perfect, late) and aim a direction.
Rules: (1) 3 overs (18 balls) to chase a target. (2) Swing timing decides power; direction from arrow. (3) Wickets: bowled, caught, window. (4) 2P: one bats, one bowls (bowler picks line and speed). (5) 3 wickets.
Win: Chase the target · Lose: All out or balls finished short
Controls: desktop A/D aim · Space swing · S defend · touch Swipe aim · Swing · Defend (max 3 inputs)
HUD: Runs · Balls · Wickets + pause
Hint: "Swing on the bounce!"
Pause sheet: Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard. Difficulty changes: Easy: slow bowling · Normal · Hard: yorkers and bouncers.
Style kit: unit = batter = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #F2E3C6, Ground / play surface #E8D9B5, Hero #2E86AB, Accent / rewards #F18F01
Assets: Batter: 1U with bat parented to hands; Bowler: 1U; Street: rounded houses with balconies and windows; Stumps: crate-wicket
Background bands: sky with kites / houses and wires / street
Juice: Bat crack; Window shatter (comic); Six lands on a roof with a cheer
Feed cards: 1) Title: Kids playing cricket in a narrow street, title on a wall 2) SIX!: Ball flying over the roof 3) CHAMPIONS!: Team lifting the batter
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:gully-cricket-smash:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
