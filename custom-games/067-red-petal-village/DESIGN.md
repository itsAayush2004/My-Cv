# 067 · Red Petal Village

> **The flowers are spreading. So is the fear.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `4 min` · `spooky (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `red-petal-village` → `src/offline-games/red-petal-village.txt` |
| **Inspired by (mechanics only)** | Silent Hill f (Japanese folk horror) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `spooky` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:red-petal-village:best`, `arthis:red-petal-village:settings` (try/catch) |

### Pitch
A schoolgirl walks through a hillside village overgrown with red flowers. Melee with breaking tools, focus to slow time, and reach the shrine.

### Why it can go viral
Beautiful, eerie red-flower visuals that look striking in screenshots.

### What makes it ours

- **Twist:** Focus slows time but drains sanity.
- **Rule we invented:** Charms give passive buffs (3 slots).
- **What we cut from the reference:** Long campaign: one village.

## 2 · Gameplay

### Core mechanic
Melee and focus counters; find 3 shrine bells.

### Rules

1. Weapons (bat, pipe, broom) break after 20 hits.
2. Focus slows time for 2 s but drains 10 sanity.
3. Sanity drains near red flowers.
4. Find 3 shrine bells in houses to open the shrine.
5. Charms (3 slots) give passive bonuses.

### Win / Lose
- **Win:** Reach the shrine
- **Lose:** HP or sanity 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J attack · K focus | Stick · Attack · Focus |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Sanity · Bells
- **Hint line (shown once, under 60 chars):** "Focus slows time. It costs you."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy · Normal · Hard (flower spread).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Bells | 3 |
| Weapon durability | 20 hits |
| Focus cost | 10 sanity |
| Charm slots | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** girl = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/17141F/17141F.png) | Far band (sky) | `#17141F` |
| ![](https://placehold.co/28x28/2F2234/2F2234.png) | Mid band | `#2F2234` |
| ![](https://placehold.co/28x28/3A2A33/3A2A33.png) | Ground / play surface | `#3A2A33` |
| ![](https://placehold.co/28x28/E63946/E63946.png) | Hero | `#E63946` |
| ![](https://placehold.co/28x28/F1FAEE/F1FAEE.png) | Accent / rewards | `#F1FAEE` |

Catalog colours: `bgColorLight: "#17141F"`, `bgColorDark: "#2F2234"`

### Asset sheet (sizes in units)

- Schoolgirl: 1U with a bat parented to her hands
- Red flowers: soft round petals in clusters
- Petal ghosts: 1.2U rounded
- Village houses: rounded wooden walls and tiled roofs
- Shrine gate: 4U

### Background (three quiet hazed bands)

1. **Far:** red-tinged fog
2. **Mid:** hillside houses
3. **Near:** stone path

### Juice

- Petal bursts on hits
- Colour drains during focus
- Bell ring echoes
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **RED PETAL VILLAGE** | A schoolgirl on a path covered in red flowers, title in brushstroke |
| 2 · Action | **FOCUS!** | Time slowing with petals frozen in the air |
| 3 · Win | **SHRINE REACHED!** | The shrine gate glowing at dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/red-petal-village.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/red-petal-village.txt .shots/red-petal-village --pause`, then open every PNG
- [ ] **Win path:** scripted bell collection and shrine run
- [ ] **Lose path:** stand in flowers until sanity 0
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Red Petal Village  ·  slug: red-petal-village
Brief: Solo score-chase · 4 min · palette family spooky (dark) · 2D canvas
Pitch: A schoolgirl walks through a hillside village overgrown with red flowers. Melee with breaking tools, focus to slow time, and reach the shrine.
Core: Melee and focus counters; find 3 shrine bells.
Rules: (1) Weapons (bat, pipe, broom) break after 20 hits. (2) Focus slows time for 2 s but drains 10 sanity. (3) Sanity drains near red flowers. (4) Find 3 shrine bells in houses to open the shrine. (5) Charms (3 slots) give passive bonuses.
Win: Reach the shrine · Lose: HP or sanity 0
Controls: desktop WASD · J attack · K focus · touch Stick · Attack · Focus (max 3 inputs)
HUD: HP · Sanity · Bells + pause
Hint: "Focus slows time. It costs you."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (flower spread).
Style kit: unit = girl = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #17141F, Mid band #2F2234, Ground / play surface #3A2A33, Hero #E63946, Accent / rewards #F1FAEE
Assets: Schoolgirl: 1U with a bat parented to her hands; Red flowers: soft round petals in clusters; Petal ghosts: 1.2U rounded; Village houses: rounded wooden walls and tiled roofs; Shrine gate: 4U
Background bands: red-tinged fog / hillside houses / stone path
Juice: Petal bursts on hits; Colour drains during focus; Bell ring echoes
Feed cards: 1) Title: A schoolgirl on a path covered in red flowers, title in brushstroke 2) FOCUS!: Time slowing with petals frozen in the air 3) SHRINE REACHED!: The shrine gate glowing at dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:red-petal-village:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
