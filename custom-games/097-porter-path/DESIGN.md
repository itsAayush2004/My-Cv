# 097 · Porter Path

> **Stack the load. Lean to stay up.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `Solo score-chase` · `4 min` · `snow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `porter-path` → `src/offline-games/porter-path.txt` |
| **Inspired by (mechanics only)** | Death Stranding (balance delivery) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `snow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:porter-path:best`, `arthis:porter-path:settings` (try/catch) |

### Pitch
A Himalayan porter carries a tall stack of cargo along mountain paths. Lean to keep balance on slopes, place ladders and ropes, and deliver to 5 villages.

### Why it can go viral
Wobbly balance moments are tense and funny.

### What makes it ours

- **Twist:** Stack shape affects balance.
- **Rule we invented:** Prayer-flag checkpoints.
- **What we cut from the reference:** Big world: 5 deliveries.

## 2 · Gameplay

### Core mechanic
Walk, lean, place tools.

### Rules

1. Stack weight vs balance.
2. Slopes tilt the stack; lean to counter.
3. Ladders and ropes persist.
4. Cargo has HP.
5. Deliver to 5 villages.

### Win / Lose
- **Win:** 5 deliveries
- **Lose:** Cargo destroyed

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| A/D lean · W/S walk · E place | Lean · Walk · Place |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Cargo · Balance · Stars
- **Hint line (shown once, under 60 chars):** "Lean to keep your balance."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Cargo), **Play Again**

### Difficulty
Easy: wide balance zone · Normal · Hard: wind gusts.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Deliveries | 5 |

## 3 · Look and feel (style kit)

- **Scale unit:** porter = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/EEF6FF/EEF6FF.png) | Far band (sky) | `#EEF6FF` |
| ![](https://placehold.co/28x28/C7D9EA/C7D9EA.png) | Mid band | `#C7D9EA` |
| ![](https://placehold.co/28x28/E3E8EE/E3E8EE.png) | Ground / play surface | `#E3E8EE` |
| ![](https://placehold.co/28x28/6C9BD2/6C9BD2.png) | Hero | `#6C9BD2` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Accent / rewards | `#FF7B54` |

Catalog colours: `bgColorLight: "#EEF6FF"`, `bgColorDark: "#C7D9EA"`

### Asset sheet (sizes in units)

- Porter: 1U with stacked cargo
- Ladders
- Mountain villages

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** snowy peaks
3. **Near:** path

### Juice

- Stack wobble
- Snow puffs
- Delivery stamp
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PORTER PATH** | A porter with a towering stack on a mountain trail, title on prayer flags |
| 2 · Action | **BALANCE!** | Porter leaning hard on a steep slope |
| 3 · Win | **DELIVERED!** | Villagers cheering the porter |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/porter-path.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/porter-path.txt .shots/porter-path --pause`, then open every PNG
- [ ] **Win path:** scripted lean timing for all 5 deliveries
- [ ] **Lose path:** walk without leaning on the first slope
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Porter Path  ·  slug: porter-path
Brief: Solo score-chase · 4 min · palette family snow (light) · 2D canvas
Pitch: A Himalayan porter carries a tall stack of cargo along mountain paths. Lean to keep balance on slopes, place ladders and ropes, and deliver to 5 villages.
Core: Walk, lean, place tools.
Rules: (1) Stack weight vs balance. (2) Slopes tilt the stack; lean to counter. (3) Ladders and ropes persist. (4) Cargo has HP. (5) Deliver to 5 villages.
Win: 5 deliveries · Lose: Cargo destroyed
Controls: desktop A/D lean · W/S walk · E place · touch Lean · Walk · Place (max 3 inputs)
HUD: Cargo · Balance · Stars + pause
Hint: "Lean to keep your balance."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: wide balance zone · Normal · Hard: wind gusts.
Style kit: unit = porter = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #EEF6FF, Mid band #C7D9EA, Ground / play surface #E3E8EE, Hero #6C9BD2, Accent / rewards #FF7B54
Assets: Porter: 1U with stacked cargo; Ladders; Mountain villages
Background bands: sky / snowy peaks / path
Juice: Stack wobble; Snow puffs; Delivery stamp
Feed cards: 1) Title: A porter with a towering stack on a mountain trail, title on prayer flags 2) BALANCE!: Porter leaning hard on a steep slope 3) DELIVERED!: Villagers cheering the porter
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:porter-path:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
