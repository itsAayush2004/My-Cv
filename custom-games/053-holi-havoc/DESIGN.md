# 053 · Holi Havoc

> **Paint the town. Most colour wins.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `3 min` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `holi-havoc` → `src/offline-games/holi-havoc.txt` |
| **Inspired by (mechanics only)** | Splatoon (turf painting shooter) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:holi-havoc:best`, `arthis:holi-havoc:settings` (try/catch) |

### Pitch
A festival colour battle: two teams of 3 spray coloured powder over a courtyard. Most area covered after 3 minutes wins.

### Why it can go viral
Bright festive chaos looks fantastic.

### What makes it ours

- **Twist:** Water balloons: lob for a big splash.
- **Rule we invented:** Dhol rally: stand at the drum for 3 s to make your team spray faster for 5 s.
- **What we cut from the reference:** Online and loadouts: 3v3 vs CPU, one weapon + balloon.

## 2 · Gameplay

### Core mechanic
Spray colour to cover the floor; tagged players respawn after 3 s.

### Rules

1. Coverage % of the courtyard floor decides the winner.
2. Moving through your own colour is 40% faster; enemy colour slows you by 30%.
3. Getting splashed 3 times = respawn after 3 s.
4. Water balloons recharge as your team covers more floor.
5. The dhol drum in the centre gives a 5 s spray boost.

### Win / Lose
- **Win:** Higher coverage
- **Lose:** Lower coverage

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse spray · Space balloon | Twin stick · Balloon |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Your % · Their % · Time
- **Hint line (shown once, under 60 chars):** "Paint the floor. Balloon the crowd!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Your %), **Play Again**

### Difficulty
Easy: CPU slow painters · Normal · Hard: CPU balloons often.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Match | 180 s |
| Respawn | 3 s |
| Balloon recharge | 15 s |
| Team size | 3v3 |

## 3 · Look and feel (style kit)

- **Scale unit:** player = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF8EC/FFF8EC.png) | Far band (sky) | `#FFF8EC` |
| ![](https://placehold.co/28x28/FFE0EC/FFE0EC.png) | Mid band | `#FFE0EC` |
| ![](https://placehold.co/28x28/F0F0F0/F0F0F0.png) | Ground / play surface | `#F0F0F0` |
| ![](https://placehold.co/28x28/FF2E93/FF2E93.png) | Hero | `#FF2E93` |
| ![](https://placehold.co/28x28/00BBF9/00BBF9.png) | Accent / rewards | `#00BBF9` |

Catalog colours: `bgColorLight: "#FFF8EC"`, `bgColorDark: "#FFE0EC"`

### Asset sheet (sizes in units)

- Players: 1U kids in white kurtas that get splashed with colour
- Pichkari sprayer: 0.4U held in both hands
- Water balloons: 0.3U
- Courtyard: rounded arches, planters and steps
- Dhol drum: 1U in the centre

### Background (three quiet hazed bands)

1. **Far:** bright festival sky with kites
2. **Mid:** courtyard arches and marigold strings
3. **Near:** stone tiles

### Juice

- Powder clouds puff on hits
- Balloon splash rings
- Coverage bars race at the top
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HOLI HAVOC** | Kids with colour sprayers in a courtyard, title in powder |
| 2 · Action | **SPLASH!** | A balloon exploding in pink |
| 3 · Win | **COLOUR WIN!** | Whole courtyard in team colour |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/holi-havoc.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/holi-havoc.txt .shots/holi-havoc --pause`, then open every PNG
- [ ] **Win path:** sweep spray script to win coverage vs Easy
- [ ] **Lose path:** stand still
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Holi Havoc  ·  slug: holi-havoc
Brief: vs CPU · 3 min · palette family candy (light) · 2D canvas
Pitch: A festival colour battle: two teams of 3 spray coloured powder over a courtyard. Most area covered after 3 minutes wins.
Core: Spray colour to cover the floor; tagged players respawn after 3 s.
Rules: (1) Coverage % of the courtyard floor decides the winner. (2) Moving through your own colour is 40% faster; enemy colour slows you by 30%. (3) Getting splashed 3 times = respawn after 3 s. (4) Water balloons recharge as your team covers more floor. (5) The dhol drum in the centre gives a 5 s spray boost.
Win: Higher coverage · Lose: Lower coverage
Controls: desktop WASD · mouse spray · Space balloon · touch Twin stick · Balloon (max 3 inputs)
HUD: Your % · Their % · Time + pause
Hint: "Paint the floor. Balloon the crowd!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: CPU slow painters · Normal · Hard: CPU balloons often.
Style kit: unit = player = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF8EC, Mid band #FFE0EC, Ground / play surface #F0F0F0, Hero #FF2E93, Accent / rewards #00BBF9
Assets: Players: 1U kids in white kurtas that get splashed with colour; Pichkari sprayer: 0.4U held in both hands; Water balloons: 0.3U; Courtyard: rounded arches, planters and steps; Dhol drum: 1U in the centre
Background bands: bright festival sky with kites / courtyard arches and marigold strings / stone tiles
Juice: Powder clouds puff on hits; Balloon splash rings; Coverage bars race at the top
Feed cards: 1) Title: Kids with colour sprayers in a courtyard, title in powder 2) SPLASH!: A balloon exploding in pink 3) COLOUR WIN!: Whole courtyard in team colour
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:holi-havoc:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
