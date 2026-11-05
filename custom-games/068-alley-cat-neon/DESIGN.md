# 068 · Alley Cat Neon

> **A stray cat. A city of robots.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `3 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `alley-cat-neon` → `src/offline-games/alley-cat-neon.txt` |
| **Inspired by (mechanics only)** | Stray (cat adventure) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:alley-cat-neon:best`, `arthis:alley-cat-neon:settings` (try/catch) |

### Pitch
A stray cat explores a rainy neon city run by friendly robots. Jump ledges, knock things off shelves, meow to distract, and outrun a swarm of glowing critters.

### Why it can go viral
Cat behaviour (knocking things off shelves) is adorable and instantly viral.

### What makes it ours

- **Twist:** Meow button distracts robots and opens paths.
- **Rule we invented:** Nap spots heal and skip time.
- **What we cut from the reference:** Long story: one district.

## 2 · Gameplay

### Core mechanic
Context jumps and stealthy navigation.

### Rules

1. Jump only to highlighted ledges.
2. Knock objects down to make bridges or distractions.
3. Meow distracts robots for 2 s.
4. Swarm chase: outrun glowing critters to a door.
5. Collect 5 fish snacks; reach the rooftop.

### Win / Lose
- **Win:** Reach the rooftop light
- **Lose:** Caught 3 times

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows · Space jump · E meow | Stick · Jump · Meow |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Lives · Fish · Time
- **Hint line (shown once, under 60 chars):** "Jump ledges. Meow to distract!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Lives), **Play Again**

### Difficulty
Easy · Normal · Hard (swarm speed).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Fish snacks | 5 |
| Lives | 3 |
| Meow distract | 2 s |
| Swarm speed | 1.05× cat |

## 3 · Look and feel (style kit)

- **Scale unit:** cat = 0.6U, robots = 1.2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/262B52/262B52.png) | Mid band | `#262B52` |
| ![](https://placehold.co/28x28/2E3358/2E3358.png) | Ground / play surface | `#2E3358` |
| ![](https://placehold.co/28x28/FF9F1C/FF9F1C.png) | Hero | `#FF9F1C` |
| ![](https://placehold.co/28x28/7FDBFF/7FDBFF.png) | Accent / rewards | `#7FDBFF` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#262B52"`

### Asset sheet (sizes in units)

- Cat: 0.6U orange tabby with expressive tail
- Robots: 1.2U rounded with screen faces
- Swarm: 0.3U glowing blobs
- Shelves, pots, cans: rounded props
- Neon signs: rounded panels

### Background (three quiet hazed bands)

1. **Far:** neon rain haze
2. **Mid:** towers with lit windows
3. **Near:** alley floor with puddles

### Juice

- Rain splashes
- Meow speech bubble
- Objects crash with a bounce
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **ALLEY CAT NEON** | An orange cat on a neon ledge in the rain, title as a glowing sign |
| 2 · Action | **MEOW!** | Robots turning toward a meowing cat |
| 3 · Win | **HOME ROOF!** | Cat on the rooftop at dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/alley-cat-neon.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/alley-cat-neon.txt .shots/alley-cat-neon --pause`, then open every PNG
- [ ] **Win path:** scripted ledge route to the roof
- [ ] **Lose path:** run into the swarm
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Alley Cat Neon  ·  slug: alley-cat-neon
Brief: Solo score-chase · 3 min · palette family night (dark) · 2D canvas
Pitch: A stray cat explores a rainy neon city run by friendly robots. Jump ledges, knock things off shelves, meow to distract, and outrun a swarm of glowing critters.
Core: Context jumps and stealthy navigation.
Rules: (1) Jump only to highlighted ledges. (2) Knock objects down to make bridges or distractions. (3) Meow distracts robots for 2 s. (4) Swarm chase: outrun glowing critters to a door. (5) Collect 5 fish snacks; reach the rooftop.
Win: Reach the rooftop light · Lose: Caught 3 times
Controls: desktop Arrows · Space jump · E meow · touch Stick · Jump · Meow (max 3 inputs)
HUD: Lives · Fish · Time + pause
Hint: "Jump ledges. Meow to distract!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (swarm speed).
Style kit: unit = cat = 0.6U, robots = 1.2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #262B52, Ground / play surface #2E3358, Hero #FF9F1C, Accent / rewards #7FDBFF
Assets: Cat: 0.6U orange tabby with expressive tail; Robots: 1.2U rounded with screen faces; Swarm: 0.3U glowing blobs; Shelves, pots, cans: rounded props; Neon signs: rounded panels
Background bands: neon rain haze / towers with lit windows / alley floor with puddles
Juice: Rain splashes; Meow speech bubble; Objects crash with a bounce
Feed cards: 1) Title: An orange cat on a neon ledge in the rain, title as a glowing sign 2) MEOW!: Robots turning toward a meowing cat 3) HOME ROOF!: Cat on the rooftop at dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:alley-cat-neon:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
