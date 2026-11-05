# 061 · Plushworks Factory

> **Grab, connect, then RUN.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `3 min` · `candy (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `plushworks-factory` → `src/offline-games/plushworks-factory.txt` |
| **Inspired by (mechanics only)** | Poppy Playtime (grab-hand toy horror) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `candy` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:plushworks-factory:best`, `arthis:plushworks-factory:settings` (try/catch) |

### Pitch
Explore an abandoned plush-toy factory with a backpack of two stretchy grab-hands. Carry power between nodes to reopen the factory, then escape the giant plush that wakes up.

### Why it can go viral
The cute-turned-creepy mascot reveal and the vent chase are classic reaction clips.

### What makes it ours

- **Twist:** Two hands, two colours: blue grabs and pulls, pink carries electricity, and some puzzles need both at once.
- **Rule we invented:** Squeak trail: stepping on plush toys squeaks and draws the mascot, so you watch your feet.
- **What we cut from the reference:** Episodic chapters and lore tapes: one factory floor and one chase.

## 2 · Gameplay

### Core mechanic
Aim hands to grab handles, swing over gaps and carry power from nodes to doors.

### Rules

1. Blue hand: grab, pull levers, swing on hooks.
2. Pink hand: absorb power at a node, then release into a socket within 6 s.
3. Power 4 doors to reach the exit hall.
4. The mascot wakes at door 3 and chases through vents.
5. Caught = lose one of 3 lives (restart at the last door).

### Win / Lose
- **Win:** Reach the exit hall
- **Lose:** Caught 3 times

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Mouse look · LMB blue hand · RMB pink hand (WASD move) | Stick · Blue · Pink (drag to look) |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Doors · Lives · Time
- **Hint line (shown once, under 60 chars):** "Pink carries power. Blue pulls."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Doors), **Play Again**

### Difficulty
Easy: slow chase, power lasts 9 s · Normal 6 s · Hard: fast chase, 4 s.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Power carry time | 6 s |
| Hand reach | 8 U |
| Chase speed | 1.1× player |
| Doors | 4 |

## 3 · Look and feel (style kit)

- **Scale unit:** player height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/E6D3F2/E6D3F2.png) | Mid band | `#E6D3F2` |
| ![](https://placehold.co/28x28/F5EEF8/F5EEF8.png) | Ground / play surface | `#F5EEF8` |
| ![](https://placehold.co/28x28/5BC0EB/5BC0EB.png) | Hero | `#5BC0EB` |
| ![](https://placehold.co/28x28/FF5D8F/FF5D8F.png) | Accent / rewards | `#FF5D8F` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#E6D3F2"`

### Asset sheet (sizes in units)

- Grab-pack hands: 0.3U rounded mitts on stretchy cables
- Mascot: 4U tall fluffy plush with a stitched smile (cute in light, creepy in dark)
- Nodes and sockets: 0.5U glowing pills
- Conveyor belts and toy bins: rounded pastel machines
- Vents: 1U rounded tunnels

### Background (three quiet hazed bands)

1. **Far:** pastel factory haze
2. **Mid:** giant toy machines in silhouette
3. **Near:** tiled floor with conveyor stripes

### Juice

- Cable stretch wobble
- Spark arcs carrying power
- Plush squeak and head-turn sting
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PLUSHWORKS FACTORY** | Two stretchy hands reaching toward a giant smiling plush in a pastel factory, title in toy blocks |
| 2 · Action | **GRAB!** | Hands swinging across a gap over conveyor belts |
| 3 · Win | **ESCAPED!** | Player bursting out into daylight as the plush slumps |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/plushworks-factory.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/plushworks-factory.txt .shots/plushworks-factory --pause`, then open every PNG
- [ ] **Win path:** scripted hand sequence powering 4 doors and running the vent route
- [ ] **Lose path:** stand still after the mascot wakes
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Plushworks Factory  ·  slug: plushworks-factory
Brief: Solo score-chase · 3 min · palette family candy (light) · 3D, three.js r128 from cdnjs
Pitch: Explore an abandoned plush-toy factory with a backpack of two stretchy grab-hands. Carry power between nodes to reopen the factory, then escape the giant plush that wakes up.
Core: Aim hands to grab handles, swing over gaps and carry power from nodes to doors.
Rules: (1) Blue hand: grab, pull levers, swing on hooks. (2) Pink hand: absorb power at a node, then release into a socket within 6 s. (3) Power 4 doors to reach the exit hall. (4) The mascot wakes at door 3 and chases through vents. (5) Caught = lose one of 3 lives (restart at the last door).
Win: Reach the exit hall · Lose: Caught 3 times
Controls: desktop Mouse look · LMB blue hand · RMB pink hand (WASD move) · touch Stick · Blue · Pink (drag to look) (max 3 inputs)
HUD: Doors · Lives · Time + pause
Hint: "Pink carries power. Blue pulls."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow chase, power lasts 9 s · Normal 6 s · Hard: fast chase, 4 s.
Style kit: unit = player height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #E6D3F2, Ground / play surface #F5EEF8, Hero #5BC0EB, Accent / rewards #FF5D8F
Assets: Grab-pack hands: 0.3U rounded mitts on stretchy cables; Mascot: 4U tall fluffy plush with a stitched smile (cute in light, creepy in dark); Nodes and sockets: 0.5U glowing pills; Conveyor belts and toy bins: rounded pastel machines; Vents: 1U rounded tunnels
Background bands: pastel factory haze / giant toy machines in silhouette / tiled floor with conveyor stripes
Juice: Cable stretch wobble; Spark arcs carrying power; Plush squeak and head-turn sting
Feed cards: 1) Title: Two stretchy hands reaching toward a giant smiling plush in a pastel factory, title in toy blocks 2) GRAB!: Hands swinging across a gap over conveyor belts 3) ESCAPED!: Player bursting out into daylight as the plush slumps
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:plushworks-factory:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
