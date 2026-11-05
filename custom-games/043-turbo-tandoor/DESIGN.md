# 043 · Turbo Tandoor

> **Mach speed chef. Oven about to blow.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `90 s` · `ember (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `turbo-tandoor` → `src/offline-games/turbo-tandoor.txt` |
| **Inspired by (mechanics only)** | Pizza Tower (mach-speed platformer) |
| **Players** | Solo score-chase |
| **Session** | 90 s |
| **Palette family** | `ember` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:turbo-tandoor:best`, `arthis:turbo-tandoor:settings` (try/catch) |

### Pitch
A hyper chef sprints through a kitchen-tower at mach speed, smashing obstacles, then races back down before the tandoor explodes.

### Why it can go viral
Frantic speed and a cartoon art style; P-rank runs are bragging material.

### What makes it ours

- **Twist:** Ingredient combo: smashing 3 food crates in a row keeps the combo meter from draining.
- **Rule we invented:** Naan glide: hold jump at mach 3 to glide on a naan.
- **What we cut from the reference:** Many levels: one tower, there and back.

## 2 · Gameplay

### Core mechanic
Hold run to build 3 speed tiers; smash through blocks; keep the combo alive.

### Rules

1. Mach 1/2/3 by run time; walls stop you below mach 3.
2. Combo meter drains; hits refill.
3. End of level starts a 60 s escape.
4. Rank by points + combo: D to P.
5. Lose all rings = slow.

### Win / Lose
- **Win:** Escape in time
- **Lose:** Timer reaches 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows · Shift run · Z jump | Stick · Run · Jump |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Combo · Points · Time
- **Hint line (shown once, under 60 chars):** "Hold run. Then race back!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Combo), **Play Again**

### Difficulty
Easy: 80 s escape · Normal 60 · Hard 45.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Mach tiers | 3 |
| Escape | 60 s |
| Combo drain | 1.5 s |
| Ranks | D–P |

## 3 · Look and feel (style kit)

- **Scale unit:** chef = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/2A0F12/2A0F12.png) | Far band (sky) | `#2A0F12` |
| ![](https://placehold.co/28x28/5C1E22/5C1E22.png) | Mid band | `#5C1E22` |
| ![](https://placehold.co/28x28/7A3B1E/7A3B1E.png) | Ground / play surface | `#7A3B1E` |
| ![](https://placehold.co/28x28/FFD23F/FFD23F.png) | Hero | `#FFD23F` |
| ![](https://placehold.co/28x28/FF7A3D/FF7A3D.png) | Accent / rewards | `#FF7A3D` |

Catalog colours: `bgColorLight: "#2A0F12"`, `bgColorDark: "#5C1E22"`

### Asset sheet (sizes in units)

- Chef: 1U with tall hat, apron, rubbery limbs
- Crates and pots: 0.8U rounded
- Enemies: angry onions, chilli bombs
- Tandoor: 3U rounded clay oven

### Background (three quiet hazed bands)

1. **Far:** warm kitchen haze
2. **Mid:** pots and pans silhouettes
3. **Near:** tiled floor

### Juice

- Speed lines
- Crate burst with spices
- Combo meter shakes
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **TURBO TANDOOR** | A chef sprinting with a giant tandoor behind, title on a menu board |
| 2 · Action | **MACH!** | Chef smashing through crates with flames |
| 3 · Win | **P RANK!** | Chef striking a pose with a giant P |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/turbo-tandoor.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/turbo-tandoor.txt .shots/turbo-tandoor --pause`, then open every PNG
- [ ] **Win path:** recorded speedrun inputs to escape
- [ ] **Lose path:** stop running at the escape start
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Turbo Tandoor  ·  slug: turbo-tandoor
Brief: Solo score-chase · 90 s · palette family ember (dark) · 2D canvas
Pitch: A hyper chef sprints through a kitchen-tower at mach speed, smashing obstacles, then races back down before the tandoor explodes.
Core: Hold run to build 3 speed tiers; smash through blocks; keep the combo alive.
Rules: (1) Mach 1/2/3 by run time; walls stop you below mach 3. (2) Combo meter drains; hits refill. (3) End of level starts a 60 s escape. (4) Rank by points + combo: D to P. (5) Lose all rings = slow.
Win: Escape in time · Lose: Timer reaches 0
Controls: desktop Arrows · Shift run · Z jump · touch Stick · Run · Jump (max 3 inputs)
HUD: Combo · Points · Time + pause
Hint: "Hold run. Then race back!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 80 s escape · Normal 60 · Hard 45.
Style kit: unit = chef = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #2A0F12, Mid band #5C1E22, Ground / play surface #7A3B1E, Hero #FFD23F, Accent / rewards #FF7A3D
Assets: Chef: 1U with tall hat, apron, rubbery limbs; Crates and pots: 0.8U rounded; Enemies: angry onions, chilli bombs; Tandoor: 3U rounded clay oven
Background bands: warm kitchen haze / pots and pans silhouettes / tiled floor
Juice: Speed lines; Crate burst with spices; Combo meter shakes
Feed cards: 1) Title: A chef sprinting with a giant tandoor behind, title on a menu board 2) MACH!: Chef smashing through crates with flames 3) P RANK!: Chef striking a pose with a giant P
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:turbo-tandoor:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
