# 054 · Signal Spike

> **Plant the spike. One life a round.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `4 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `signal-spike` → `src/offline-games/signal-spike.txt` |
| **Inspired by (mechanics only)** | Valorant / CS2 (tactical rounds) |
| **Players** | vs CPU |
| **Session** | 4 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:signal-spike:best`, `arthis:signal-spike:settings` (try/catch) |

### Pitch
Top-down 3v3 tactical rounds vs CPU. Attackers plant a signal spike at A or B; defenders stop them. One life per round, first to 5.

### Why it can go viral
Clutch 1v3 rounds make great clips.

### What makes it ours

- **Twist:** Each agent has one ability: smoke, flash or wall.
- **Rule we invented:** Spike hum: the spike's sound reveals its position on the minimap.
- **What we cut from the reference:** Economy and 5v5: simple loadouts.

## 2 · Gameplay

### Core mechanic
Move, peek and shoot; plant or defuse the spike.

### Rules

1. One life per round; first to 5 rounds.
2. Attackers plant the spike at A or B (3 s); defenders defuse (5 s).
3. Each agent has 1 ability per round: smoke, flash or wall.
4. Round time 45 s; spike timer 30 s.
5. Sides swap after round 4.

### Win / Lose
- **Win:** 5 rounds
- **Lose:** Enemy gets 5

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse shoot · Q ability | Twin stick · Ability |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Rounds · Ammo · Time
- **Hint line (shown once, under 60 chars):** "Plant at A or B. One life a round."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Rounds), **Play Again**

### Difficulty
Easy: slow CPU reactions · Normal · Hard: CPU uses abilities.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rounds | first to 5 |
| Round time | 45 s |
| Plant | 3 s |
| Defuse | 5 s |

## 3 · Look and feel (style kit)

- **Scale unit:** agent = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/22304F/22304F.png) | Mid band | `#22304F` |
| ![](https://placehold.co/28x28/2D3B5C/2D3B5C.png) | Ground / play surface | `#2D3B5C` |
| ![](https://placehold.co/28x28/FF4655/FF4655.png) | Hero | `#FF4655` |
| ![](https://placehold.co/28x28/7FDBFF/7FDBFF.png) | Accent / rewards | `#7FDBFF` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#22304F"`

### Asset sheet (sizes in units)

- Agents: 1U, rounded armour with team colour stripes
- Spike: 0.5U glowing capsule
- Map: rounded walls, crates and doorways
- Smoke: soft grey dome
- Wall: rounded energy panel

### Background (three quiet hazed bands)

1. **Far:** night sky haze
2. **Mid:** building silhouettes
3. **Near:** ground tiles

### Juice

- Muzzle flash
- Spike pulse rings
- Round-win banner slide
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SIGNAL SPIKE** | Agents near a glowing spike site, title as a hologram |
| 2 · Action | **PLANT!** | Agent planting under smoke |
| 3 · Win | **ACE!** | Agent standing alone with 5 tags |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/signal-spike.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/signal-spike.txt .shots/signal-spike --pause`, then open every PNG
- [ ] **Win path:** scripted holds/peeks vs Easy to win 5
- [ ] **Lose path:** walk into enemy fire
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Signal Spike  ·  slug: signal-spike
Brief: vs CPU · 4 min · palette family night (dark) · 2D canvas
Pitch: Top-down 3v3 tactical rounds vs CPU. Attackers plant a signal spike at A or B; defenders stop them. One life per round, first to 5.
Core: Move, peek and shoot; plant or defuse the spike.
Rules: (1) One life per round; first to 5 rounds. (2) Attackers plant the spike at A or B (3 s); defenders defuse (5 s). (3) Each agent has 1 ability per round: smoke, flash or wall. (4) Round time 45 s; spike timer 30 s. (5) Sides swap after round 4.
Win: 5 rounds · Lose: Enemy gets 5
Controls: desktop WASD · mouse shoot · Q ability · touch Twin stick · Ability (max 3 inputs)
HUD: Rounds · Ammo · Time + pause
Hint: "Plant at A or B. One life a round."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow CPU reactions · Normal · Hard: CPU uses abilities.
Style kit: unit = agent = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #22304F, Ground / play surface #2D3B5C, Hero #FF4655, Accent / rewards #7FDBFF
Assets: Agents: 1U, rounded armour with team colour stripes; Spike: 0.5U glowing capsule; Map: rounded walls, crates and doorways; Smoke: soft grey dome; Wall: rounded energy panel
Background bands: night sky haze / building silhouettes / ground tiles
Juice: Muzzle flash; Spike pulse rings; Round-win banner slide
Feed cards: 1) Title: Agents near a glowing spike site, title as a hologram 2) PLANT!: Agent planting under smoke 3) ACE!: Agent standing alone with 5 tags
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:signal-spike:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
