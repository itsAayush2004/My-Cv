# 059 · Wingsuit Royale

> **Glide in. Ping. Respawn your friends.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `4 min` · `ocean (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `wingsuit-royale` → `src/offline-games/wingsuit-royale.txt` |
| **Inspired by (mechanics only)** | Apex Legends (squad royale) |
| **Players** | vs CPU |
| **Session** | 4 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:wingsuit-royale:best`, `arthis:wingsuit-royale:settings` (try/catch) |

### Pitch
Trios vs CPU squads: glide in by wingsuit, loot, ping enemies and bring teammates back at respawn beacons.

### Why it can go viral
Clutch respawns: carrying a friend's banner to a beacon while being chased.

### What makes it ours

- **Twist:** Wingsuit redeploy towers let you re-glide across the map.
- **Rule we invented:** Banner chase: grab a downed friend's banner within 60 s and run it to a beacon to bring them back.
- **What we cut from the reference:** 60-player lobbies and ranked: 4 CPU squads.

## 2 · Gameplay

### Core mechanic
Squad fights with abilities and respawn banners.

### Rules

1. Squads of 3 (you + 2 CPU allies).
2. Ping wheel marks enemies and loot.
3. Downed allies drop banners lasting 60 s.
4. The ring closes in 4 phases.
5. Last squad standing wins.

### Win / Lose
- **Win:** Last squad
- **Lose:** Squad out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse · Q ability | Twin stick · Ability |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Alive · Kills · Ring
- **Hint line (shown once, under 60 chars):** "Ping enemies. Respawn friends."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Alive), **Play Again**

### Difficulty
Easy · Normal · Hard (bot aim).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Squads | 4 |
| Banner time | 60 s |
| Ring phases | 4 |
| Squad size | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** legend = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/9BD3EA/9BD3EA.png) | Mid band | `#9BD3EA` |
| ![](https://placehold.co/28x28/E6F2EA/E6F2EA.png) | Ground / play surface | `#E6F2EA` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Accent / rewards | `#FF7B54` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#9BD3EA"`

### Asset sheet (sizes in units)

- Legends: 1U heroes with distinct silhouettes
- Respawn beacons: 2U rounded towers
- Redeploy towers with balloons
- Map: cliffs, bridges and towers

### Background (three quiet hazed bands)

1. **Far:** sky with wingsuit trails
2. **Mid:** mountains
3. **Near:** ground

### Juice

- Wingsuit trails
- Ping markers bounce
- Respawn ship drop
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **WINGSUIT ROYALE** | Wingsuits diving onto an island at sunrise, title on a balloon tower |
| 2 · Action | **PING!** | Glowing ping markers over an enemy squad |
| 3 · Win | **CHAMPIONS!** | Squad posing on a cliff |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/wingsuit-royale.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/wingsuit-royale.txt .shots/wingsuit-royale --pause`, then open every PNG
- [ ] **Win path:** script vs Easy squads to win
- [ ] **Lose path:** stay outside the ring
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Wingsuit Royale  ·  slug: wingsuit-royale
Brief: vs CPU · 4 min · palette family ocean (light) · 3D, three.js r128 from cdnjs
Pitch: Trios vs CPU squads: glide in by wingsuit, loot, ping enemies and bring teammates back at respawn beacons.
Core: Squad fights with abilities and respawn banners.
Rules: (1) Squads of 3 (you + 2 CPU allies). (2) Ping wheel marks enemies and loot. (3) Downed allies drop banners lasting 60 s. (4) The ring closes in 4 phases. (5) Last squad standing wins.
Win: Last squad · Lose: Squad out
Controls: desktop WASD · mouse · Q ability · touch Twin stick · Ability (max 3 inputs)
HUD: Alive · Kills · Ring + pause
Hint: "Ping enemies. Respawn friends."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy · Normal · Hard (bot aim).
Style kit: unit = legend = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #9BD3EA, Ground / play surface #E6F2EA, Hero #2F80ED, Accent / rewards #FF7B54
Assets: Legends: 1U heroes with distinct silhouettes; Respawn beacons: 2U rounded towers; Redeploy towers with balloons; Map: cliffs, bridges and towers
Background bands: sky with wingsuit trails / mountains / ground
Juice: Wingsuit trails; Ping markers bounce; Respawn ship drop
Feed cards: 1) Title: Wingsuits diving onto an island at sunrise, title on a balloon tower 2) PING!: Glowing ping markers over an enemy squad 3) CHAMPIONS!: Squad posing on a cliff
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:wingsuit-royale:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
