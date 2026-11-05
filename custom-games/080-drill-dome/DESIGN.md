# 080 · Drill Dome

> **Dig deep. Run back. Hold the dome.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `4 min` · `space (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `drill-dome` → `src/offline-games/drill-dome.txt` |
| **Inspired by (mechanics only)** | Dome Keeper (mining + defence) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `space` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:drill-dome:best`, `arthis:drill-dome:settings` (try/catch) |

### Pitch
A keeper digs beneath a glass dome on an alien world, hauling iron, water and crystal between waves. When the alarm sounds, rush back up and aim the dome laser at the monsters.

### Why it can go viral
Tense race between greed and defence.

### What makes it ours

- **Twist:** Carry weight slows you, so greed costs defence time.
- **Rule we invented:** Drill upgrades unlock faster tunnelling.
- **What we cut from the reference:** Multiple domes: one.

## 2 · Gameplay

### Core mechanic
Dig and defend.

### Rules

1. Mine iron, water and crystal below the dome.
2. Carrying weight slows you.
3. Wave timer shown at top.
4. Aim the dome laser.
5. Survive 8 waves.

### Win / Lose
- **Win:** Survive wave 8
- **Lose:** Dome destroyed

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse aim · Space laser | Stick · Aim · Laser |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Dome · Iron · Wave
- **Hint line (shown once, under 60 chars):** "Dig, then rush back to defend!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Dome), **Play Again**

### Difficulty
Easy: long wave gaps · Normal · Hard: short gaps and armoured monsters.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Waves | 8 |
| Wave gap | 40 s |
| Carry limit | 6 |
| Dome HP | 100 |

## 3 · Look and feel (style kit)

- **Scale unit:** keeper = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/0B1026/0B1026.png) | Far band (sky) | `#0B1026` |
| ![](https://placehold.co/28x28/1F2A5A/1F2A5A.png) | Mid band | `#1F2A5A` |
| ![](https://placehold.co/28x28/3A2E4F/3A2E4F.png) | Ground / play surface | `#3A2E4F` |
| ![](https://placehold.co/28x28/4EE6C1/4EE6C1.png) | Hero | `#4EE6C1` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#0B1026"`, `bgColorDark: "#1F2A5A"`

### Asset sheet (sizes in units)

- Keeper: 1U with drill parented to hands
- Dome: 4U glass bubble with laser
- Monsters: 1–2U rounded alien critters
- Ore veins: glowing rounded rocks
- Tunnels: rounded dark rock

### Background (three quiet hazed bands)

1. **Far:** starry space
2. **Mid:** alien hills
3. **Near:** rock strata

### Juice

- Rock crumble
- Laser beam
- Wave alarm
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **DRILL DOME** | A dome on an alien planet |
| 2 · Action | **DRILL!** | Keeper tunnelling |
| 3 · Win | **DOME HOLDS!** | Waves defeated |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/drill-dome.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/drill-dome.txt .shots/drill-dome --pause`, then open every PNG
- [ ] **Win path:** scripted to survive
- [ ] **Lose path:** no mining
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Drill Dome  ·  slug: drill-dome
Brief: Solo score-chase · 4 min · palette family space (dark) · 2D canvas
Pitch: A keeper digs beneath a glass dome on an alien world, hauling iron, water and crystal between waves. When the alarm sounds, rush back up and aim the dome laser at the monsters.
Core: Dig and defend.
Rules: (1) Mine iron, water and crystal below the dome. (2) Carrying weight slows you. (3) Wave timer shown at top. (4) Aim the dome laser. (5) Survive 8 waves.
Win: Survive wave 8 · Lose: Dome destroyed
Controls: desktop WASD · mouse aim · Space laser · touch Stick · Aim · Laser (max 3 inputs)
HUD: Dome · Iron · Wave + pause
Hint: "Dig, then rush back to defend!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: long wave gaps · Normal · Hard: short gaps and armoured monsters.
Style kit: unit = keeper = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #0B1026, Mid band #1F2A5A, Ground / play surface #3A2E4F, Hero #4EE6C1, Accent / rewards #FFD166
Assets: Keeper: 1U with drill parented to hands; Dome: 4U glass bubble with laser; Monsters: 1–2U rounded alien critters; Ore veins: glowing rounded rocks; Tunnels: rounded dark rock
Background bands: starry space / alien hills / rock strata
Juice: Rock crumble; Laser beam; Wave alarm
Feed cards: 1) Title: A dome on an alien planet 2) DRILL!: Keeper tunnelling 3) DOME HOLDS!: Waves defeated
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:drill-dome:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
