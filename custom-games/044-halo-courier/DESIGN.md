# 044 · Halo Courier

> **Fire the card. Or burn it to fly.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `60 s` · `ocean (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `halo-courier` → `src/offline-games/halo-courier.txt` |
| **Inspired by (mechanics only)** | Neon White (card-gun speedrun) |
| **Players** | Solo score-chase |
| **Session** | 60 s |
| **Palette family** | `ocean` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:halo-courier:best`, `arthis:halo-courier:settings` (try/catch) |

### Pitch
An angel courier races through cloud levels. Cards are weapons, or discard them for a movement burst. Clear all targets fast.

### Why it can go viral
Speedrun routes spread fast: players post 'I found a skip' clips, and the medal ladder (bronze → ace) keeps them retrying.

### What makes it ours

- **Twist:** Every card is two things: fire it as a weapon, or burn it for a movement burst. The best routes discard almost everything.
- **Rule we invented:** Gift parcels hidden off the racing line hold short lore cards; collecting all 6 unlocks a golden halo trail.
- **What we cut from the reference:** Story scenes, dialogue and a 90-level campaign: 6 short sky levels, 3 card types.

## 2 · Gameplay

### Core mechanic
Pick up cards; fire to destroy targets or discard to move.

### Rules

1. Hold up to 2 cards; picking up a third replaces the oldest.
2. Pistol card: shoot, or discard for a double jump.
3. Spread card: shoot a cone, or discard for a fast forward dash.
4. Slam card: shoot a heavy shot, or discard for a ground slam that breaks floors.
5. Destroy every target balloon, then touch the gate; restart is instant and the best-run ghost replays.

### Win / Lose
- **Win:** Finish under the gold time
- **Lose:** (instant retry)

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse · LMB fire · RMB discard | Stick · Fire · Discard |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Time · Targets · Medal
- **Hint line (shown once, under 60 chars):** "Fire it or discard it to fly!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Time), **Play Again**

### Difficulty
Easy: relaxed medal times and slow balloon drift · Normal: standard · Hard: ace-level times and moving targets.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Levels | 6 |
| Card types | 3 |
| Restart | < 0.3 s |
| Ace time (level 1) | 9.5 s |

## 3 · Look and feel (style kit)

- **Scale unit:** courier = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/E6F7FF/E6F7FF.png) | Far band (sky) | `#E6F7FF` |
| ![](https://placehold.co/28x28/BDE6FF/BDE6FF.png) | Mid band | `#BDE6FF` |
| ![](https://placehold.co/28x28/FFFFFF/FFFFFF.png) | Ground / play surface | `#FFFFFF` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FFC857/FFC857.png) | Accent / rewards | `#FFC857` |

Catalog colours: `bgColorLight: "#E6F7FF"`, `bgColorDark: "#BDE6FF"`

### Asset sheet (sizes in units)

- Courier: 1U masked angel with small rounded wings and halo, cards held fanned in one hand
- Cards: 0.5U glowing rounded rectangles (gold pistol, blue spread, red slam)
- Targets: 1U round demon balloons with tiny horns that pop into confetti
- Platforms: rounded marble slabs with gold trims, floating on clouds
- Gate: 3U glowing ring with a pearl rim

### Background (three quiet hazed bands)

1. **Far:** bright blue sky with soft sun bloom
2. **Mid:** tall cloud towers in haze
3. **Near:** near cloud wisps drifting past

### Juice

- Discard shatters the card into light shards
- Target pops freeze the frame for 50 ms
- Ghost trail of your best run in faint gold
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HALO COURIER** | A masked courier with glowing cards fanned out above a sea of clouds, title in gold leaf |
| 2 · Action | **DISCARD!** | Courier dashing through the air as a card shatters into light |
| 3 · Win | **ACE MEDAL!** | Courier at the gate holding a shining ace medal |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/halo-courier.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/halo-courier.txt .shots/halo-courier --pause`, then open every PNG
- [ ] **Win path:** recorded inputs that finish every level under gold
- [ ] **Lose path:** walk off the first platform and verify instant restart
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Halo Courier  ·  slug: halo-courier
Brief: Solo score-chase · 60 s · palette family ocean (light) · 3D, three.js r128 from cdnjs
Pitch: An angel courier races through cloud levels. Cards are weapons, or discard them for a movement burst. Clear all targets fast.
Core: Pick up cards; fire to destroy targets or discard to move.
Rules: (1) Hold up to 2 cards; picking up a third replaces the oldest. (2) Pistol card: shoot, or discard for a double jump. (3) Spread card: shoot a cone, or discard for a fast forward dash. (4) Slam card: shoot a heavy shot, or discard for a ground slam that breaks floors. (5) Destroy every target balloon, then touch the gate; restart is instant and the best-run ghost replays.
Win: Finish under the gold time · Lose: (instant retry)
Controls: desktop WASD · mouse · LMB fire · RMB discard · touch Stick · Fire · Discard (max 3 inputs)
HUD: Time · Targets · Medal + pause
Hint: "Fire it or discard it to fly!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: relaxed medal times and slow balloon drift · Normal: standard · Hard: ace-level times and moving targets.
Style kit: unit = courier = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #E6F7FF, Mid band #BDE6FF, Ground / play surface #FFFFFF, Hero #2F80ED, Accent / rewards #FFC857
Assets: Courier: 1U masked angel with small rounded wings and halo, cards held fanned in one hand; Cards: 0.5U glowing rounded rectangles (gold pistol, blue spread, red slam); Targets: 1U round demon balloons with tiny horns that pop into confetti; Platforms: rounded marble slabs with gold trims, floating on clouds; Gate: 3U glowing ring with a pearl rim
Background bands: bright blue sky with soft sun bloom / tall cloud towers in haze / near cloud wisps drifting past
Juice: Discard shatters the card into light shards; Target pops freeze the frame for 50 ms; Ghost trail of your best run in faint gold
Feed cards: 1) Title: A masked courier with glowing cards fanned out above a sea of clouds, title in gold leaf 2) DISCARD!: Courier dashing through the air as a card shatters into light 3) ACE MEDAL!: Courier at the gate holding a shining ace medal
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:halo-courier:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
