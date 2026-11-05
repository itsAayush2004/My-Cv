# 041 · Moth Monarch

> **A tiny moth with a needle. A fallen kingdom.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `4 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `moth-monarch` → `src/offline-games/moth-monarch.txt` |
| **Inspired by (mechanics only)** | Hollow Knight / Silksong (metroidvania) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:moth-monarch:best`, `arthis:moth-monarch:settings` (try/catch) |

### Pitch
A small moth knight explores a lantern-lit insect kingdom. Attacks fill a silk meter you spend to heal instantly. Beat 2 bosses to reclaim the crown.

### Why it can go viral
Tight combat and beautiful silhouettes; boss victories are proud clips.

### What makes it ours

- **Twist:** Lantern checkpoints: lighting a lantern gives a checkpoint but wakes nearby enemies.
- **Rule we invented:** Crest swap at benches changes your attack pattern (quick needle, heavy spin, long lunge).
- **What we cut from the reference:** Huge map: one region with 12 rooms.

## 2 · Gameplay

### Core mechanic
Fast platforming with needle attacks; fill silk by hitting enemies and bind to heal.

### Rules

1. Silk fills from hits; 3 silk = one heal (bind).
2. Pogo: down-attack bounces off enemies and spikes.
3. Bosses at room 6 and room 12.
4. Dropped coins recovered at your death spot.
5. 3 lives per run.

### Win / Lose
- **Win:** Beat the Hollow Queen (boss 2)
- **Lose:** All 3 lives lost

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows move · Z jump · X attack (hold X = bind) | Stick · Jump · Attack (hold = bind) |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Silk · Coins
- **Hint line (shown once, under 60 chars):** "Hit to fill silk. Hold to heal."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: boss damage ×0.6 · Normal · Hard: ×1.4.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rooms | 12 |
| Bind cost | 3 silk |
| Jump | 2.4U |
| Bosses | 2 |

## 3 · Look and feel (style kit)

- **Scale unit:** moth knight = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/253159/253159.png) | Mid band | `#253159` |
| ![](https://placehold.co/28x28/2F3B5E/2F3B5E.png) | Ground / play surface | `#2F3B5E` |
| ![](https://placehold.co/28x28/E9E4FF/E9E4FF.png) | Hero | `#E9E4FF` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#253159"`

### Asset sheet (sizes in units)

- Moth knight: 1U, fluffy collar, needle parented to hand, cloak trail
- Bugs: beetles 0.8U, wasps 0.6U, snail guard 1.4U
- Bosses: Mantis Duke 3U, Hollow Queen 4U
- Lanterns: 0.6U rounded

### Background (three quiet hazed bands)

1. **Far:** deep blue haze
2. **Mid:** giant mushroom silhouettes
3. **Near:** root-tangled ground

### Juice

- Hit sparks + hit-stop
- Silk thread swirl on bind
- Cloak flutter
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **MOTH MONARCH** | A tiny moth knight before a lantern-lit kingdom, title in silver thread |
| 2 · Action | **BIND!** | Knight wrapped in glowing silk mid-heal |
| 3 · Win | **CROWNED!** | Knight holding the crown above the defeated queen |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/moth-monarch.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/moth-monarch.txt .shots/moth-monarch --pause`, then open every PNG
- [ ] **Win path:** scripted route + boss patterns to win
- [ ] **Lose path:** jump into spikes until lives are gone
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Moth Monarch  ·  slug: moth-monarch
Brief: Solo score-chase · 4 min · palette family night (dark) · 2D canvas
Pitch: A small moth knight explores a lantern-lit insect kingdom. Attacks fill a silk meter you spend to heal instantly. Beat 2 bosses to reclaim the crown.
Core: Fast platforming with needle attacks; fill silk by hitting enemies and bind to heal.
Rules: (1) Silk fills from hits; 3 silk = one heal (bind). (2) Pogo: down-attack bounces off enemies and spikes. (3) Bosses at room 6 and room 12. (4) Dropped coins recovered at your death spot. (5) 3 lives per run.
Win: Beat the Hollow Queen (boss 2) · Lose: All 3 lives lost
Controls: desktop Arrows move · Z jump · X attack (hold X = bind) · touch Stick · Jump · Attack (hold = bind) (max 3 inputs)
HUD: HP · Silk · Coins + pause
Hint: "Hit to fill silk. Hold to heal."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: boss damage ×0.6 · Normal · Hard: ×1.4.
Style kit: unit = moth knight = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #253159, Ground / play surface #2F3B5E, Hero #E9E4FF, Accent / rewards #FFD166
Assets: Moth knight: 1U, fluffy collar, needle parented to hand, cloak trail; Bugs: beetles 0.8U, wasps 0.6U, snail guard 1.4U; Bosses: Mantis Duke 3U, Hollow Queen 4U; Lanterns: 0.6U rounded
Background bands: deep blue haze / giant mushroom silhouettes / root-tangled ground
Juice: Hit sparks + hit-stop; Silk thread swirl on bind; Cloak flutter
Feed cards: 1) Title: A tiny moth knight before a lantern-lit kingdom, title in silver thread 2) BIND!: Knight wrapped in glowing silk mid-heal 3) CROWNED!: Knight holding the crown above the defeated queen
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:moth-monarch:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
