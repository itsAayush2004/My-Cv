# 086 · Haunted Express

> **Defend three floors of a ghost train.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `4 min` · `ember (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `haunted-express` → `src/offline-games/haunted-express.txt` |
| **Inspired by (mechanics only)** | Monster Train (floor-defence deckbuilder) |
| **Players** | vs CPU |
| **Session** | 4 min |
| **Palette family** | `ember` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:haunted-express:best`, `arthis:haunted-express:settings` (try/catch) |

### Pitch
A ghost train races through the night. Play spirit units onto its 3 carriages while invaders climb from the back carriage toward the boiler heart. Survive 8 waves.

### Why it can go viral
Satisfying stacked combos as the train races through the night.

### What makes it ours

- **Twist:** Units on the same floor buff each other.
- **Rule we invented:** Whistle: once per fight, push all invaders back one floor.
- **What we cut from the reference:** Many clans: 2 clans.

## 2 · Gameplay

### Core mechanic
Deckbuilder with floor lanes.

### Rules

1. 3 floors (carriages) plus the boiler heart.
2. Invaders enter the bottom carriage and climb each turn.
3. Units on the same floor buff each other.
4. Whistle once per fight pushes invaders back.
5. Pick 1 of 3 cards after each wave; 8 waves.

### Win / Lose
- **Win:** Survive wave 8
- **Lose:** Heart destroyed

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag cards · Space end · W whistle | Drag · End · Whistle |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Heart · Energy · Wave
- **Hint line (shown once, under 60 chars):** "Stack floors. Keep them off the heart."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Heart), **Play Again**

### Difficulty
Easy: slow climbers · Normal · Hard: invaders climb 2 floors on some turns.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Waves | 8 |
| Energy | 3 |
| Floors | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** card = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/2A0F12/2A0F12.png) | Far band (sky) | `#2A0F12` |
| ![](https://placehold.co/28x28/4A1E22/4A1E22.png) | Mid band | `#4A1E22` |
| ![](https://placehold.co/28x28/5A2A2A/5A2A2A.png) | Ground / play surface | `#5A2A2A` |
| ![](https://placehold.co/28x28/FFD23F/FFD23F.png) | Hero | `#FFD23F` |
| ![](https://placehold.co/28x28/7FDBFF/7FDBFF.png) | Accent / rewards | `#7FDBFF` |

Catalog colours: `bgColorLight: "#2A0F12"`, `bgColorDark: "#4A1E22"`

### Asset sheet (sizes in units)

- Spirit units: 1U glowing lanterns, owls and knights
- Invaders: 1U rounded shadows
- Train carriages: 4U rounded interiors
- Boiler heart: 2U glowing

### Background (three quiet hazed bands)

1. **Far:** night sky
2. **Mid:** moon over hills
3. **Near:** rails

### Juice

- Steam puffs
- Floor climb arrows
- Whistle blast
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HAUNTED EXPRESS** | A ghost train at night |
| 2 · Action | **HOLD!** | Spirits defending a carriage |
| 3 · Win | **LINE HELD!** | Train arriving at dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/haunted-express.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/haunted-express.txt .shots/haunted-express --pause`, then open every PNG
- [ ] **Win path:** seeded card plays surviving 8 waves
- [ ] **Lose path:** end every turn without playing
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Haunted Express  ·  slug: haunted-express
Brief: vs CPU · 4 min · palette family ember (dark) · 2D canvas
Pitch: A ghost train races through the night. Play spirit units onto its 3 carriages while invaders climb from the back carriage toward the boiler heart. Survive 8 waves.
Core: Deckbuilder with floor lanes.
Rules: (1) 3 floors (carriages) plus the boiler heart. (2) Invaders enter the bottom carriage and climb each turn. (3) Units on the same floor buff each other. (4) Whistle once per fight pushes invaders back. (5) Pick 1 of 3 cards after each wave; 8 waves.
Win: Survive wave 8 · Lose: Heart destroyed
Controls: desktop Drag cards · Space end · W whistle · touch Drag · End · Whistle (max 3 inputs)
HUD: Heart · Energy · Wave + pause
Hint: "Stack floors. Keep them off the heart."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow climbers · Normal · Hard: invaders climb 2 floors on some turns.
Style kit: unit = card = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #2A0F12, Mid band #4A1E22, Ground / play surface #5A2A2A, Hero #FFD23F, Accent / rewards #7FDBFF
Assets: Spirit units: 1U glowing lanterns, owls and knights; Invaders: 1U rounded shadows; Train carriages: 4U rounded interiors; Boiler heart: 2U glowing
Background bands: night sky / moon over hills / rails
Juice: Steam puffs; Floor climb arrows; Whistle blast
Feed cards: 1) Title: A ghost train at night 2) HOLD!: Spirits defending a carriage 3) LINE HELD!: Train arriving at dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:haunted-express:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
