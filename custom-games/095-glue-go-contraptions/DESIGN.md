# 095 · Glue & Go Contraptions

> **Glue anything. Build a ride.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `Solo score-chase` · `4 min` · `meadow (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `glue-go-contraptions` → `src/offline-games/glue-go-contraptions.txt` |
| **Inspired by (mechanics only)** | Zelda TOTK Ultrahand (physics building) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:glue-go-contraptions:best`, `arthis:glue-go-contraptions:settings` (try/catch) |

### Pitch
Glue planks, wheels, fans, balloons and rockets into wobbly contraptions to cross 5 increasingly tricky gaps between floating islands. Rewind one object's motion once per puzzle.

### Why it can go viral
Wild contraptions and hilarious failures.

### What makes it ours

- **Twist:** Battery: powered parts drain a shared battery.
- **Rule we invented:** Blueprint: save a contraption and reuse it.
- **What we cut from the reference:** Open world: 5 puzzle gaps.

## 2 · Gameplay

### Core mechanic
Grab, rotate, glue, power on.

### Rules

1. Parts: plank, wheel, fan, balloon, rocket.
2. Glue joints break above their load.
3. Powered parts drain a shared battery.
4. Rewind one object's motion once per puzzle.
5. Cross 5 gaps.

### Win / Lose
- **Win:** Cross gap 5
- **Lose:** (none) parts-used rank

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Mouse grab/glue · R rotate · Q rewind | Drag · Rotate · Rewind |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Gap · Parts · Battery
- **Hint line (shown once, under 60 chars):** "Glue parts. Build a ride!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Gap), **Play Again**

### Difficulty
Easy: big battery · Normal · Hard: crosswinds on gaps 3–5.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Gaps | 5 |
| Battery | 20 s |

## 3 · Look and feel (style kit)

- **Scale unit:** hero = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/B5E8A6/B5E8A6.png) | Mid band | `#B5E8A6` |
| ![](https://placehold.co/28x28/ECE5D0/ECE5D0.png) | Ground / play surface | `#ECE5D0` |
| ![](https://placehold.co/28x28/43AA8B/43AA8B.png) | Hero | `#43AA8B` |
| ![](https://placehold.co/28x28/F8961E/F8961E.png) | Accent / rewards | `#F8961E` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#B5E8A6"`

### Asset sheet (sizes in units)

- Hero: 1U
- Parts: rounded wooden and stone pieces
- Floating islands with gaps

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** floating islands
3. **Near:** grass

### Juice

- Glue sparkle
- Fan whirl
- Success fanfare
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **GLUE & GO CONTRAPTIONS** | A wobbly fan-powered cart on a cliff edge, title on a wooden sign |
| 2 · Action | **GLUE!** | Glowing glue joints snapping parts together |
| 3 · Win | **ENGINEER!** | Contraption landing safely on the far island |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/glue-go-contraptions.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/glue-go-contraptions.txt .shots/glue-go-contraptions --pause`, then open every PNG
- [ ] **Win path:** prebuilt blueprints crossing all 5 gaps
- [ ] **Lose path:** n/a (no lose)
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Glue & Go Contraptions  ·  slug: glue-go-contraptions
Brief: Solo score-chase · 4 min · palette family meadow (light) · 3D, three.js r128 from cdnjs
Pitch: Glue planks, wheels, fans, balloons and rockets into wobbly contraptions to cross 5 increasingly tricky gaps between floating islands. Rewind one object's motion once per puzzle.
Core: Grab, rotate, glue, power on.
Rules: (1) Parts: plank, wheel, fan, balloon, rocket. (2) Glue joints break above their load. (3) Powered parts drain a shared battery. (4) Rewind one object's motion once per puzzle. (5) Cross 5 gaps.
Win: Cross gap 5 · Lose: (none) parts-used rank
Controls: desktop Mouse grab/glue · R rotate · Q rewind · touch Drag · Rotate · Rewind (max 3 inputs)
HUD: Gap · Parts · Battery + pause
Hint: "Glue parts. Build a ride!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: big battery · Normal · Hard: crosswinds on gaps 3–5.
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #B5E8A6, Ground / play surface #ECE5D0, Hero #43AA8B, Accent / rewards #F8961E
Assets: Hero: 1U; Parts: rounded wooden and stone pieces; Floating islands with gaps
Background bands: sky / floating islands / grass
Juice: Glue sparkle; Fan whirl; Success fanfare
Feed cards: 1) Title: A wobbly fan-powered cart on a cliff edge, title on a wooden sign 2) GLUE!: Glowing glue joints snapping parts together 3) ENGINEER!: Contraption landing safely on the far island
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:glue-go-contraptions:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
