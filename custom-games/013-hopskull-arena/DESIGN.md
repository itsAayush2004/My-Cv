# 013 · Hopskull Arena

> **Bunny-hop or get buried.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `2 min` · `night (dark)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `hopskull-arena` → `src/offline-games/hopskull-arena.txt` |
| **Inspired by (mechanics only)** | Megabonk (3D survivors with movement tech) |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `night` (dark) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:hopskull-arena:best`, `arthis:hopskull-arena:settings` (try/catch) |

### Pitch
A cheerful skeleton in sneakers bunny-hops around a graveyard arena while auto-weapons smash waves of spooky-cute ghouls.

### Why it can go viral
Movement tech plus huge numbers: chaining hops faster and faster through a horde looks amazing.

### What makes it ours

- **Twist:** Hop momentum: each well-timed hop (jump on landing) increases speed up to ×1.8, and stopping resets it.
- **Rule we invented:** Shrines: standing in a shrine circle for 3 s grants a random buff, but enemies swarm it.
- **What we cut from the reference:** Long stages and big character roster: one 2-minute arena.

## 2 · Gameplay

### Core mechanic
Chain bunny-hops to outrun the horde while weapons fire automatically.

### Rules

1. Jump the instant you land for +10% speed (max ×1.8).
2. Slide keeps speed on downhill paths.
3. Level-ups offer 1 of 3 weapons or stat tomes.
4. Chests need 10 coins.
5. 2:00 boss: the Grave Knight.

### Win / Lose
- **Win:** Defeat the Grave Knight
- **Lose:** HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Space jump · Shift slide | Joystick · Jump · Slide |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Speed · Time
- **Hint line (shown once, under 60 chars):** "Jump on landing to go faster!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: hop window 220 ms · Normal 160 ms · Hard 110 ms and more ghouls.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Hop bonus | +10% |
| Max speed | ×1.8 |
| Hop window | 160 ms |
| Boss at | 2:00 |

## 3 · Look and feel (style kit)

- **Scale unit:** skeleton height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/1B1730/1B1730.png) | Far band (sky) | `#1B1730` |
| ![](https://placehold.co/28x28/2E2650/2E2650.png) | Mid band | `#2E2650` |
| ![](https://placehold.co/28x28/3B3463/3B3463.png) | Ground / play surface | `#3B3463` |
| ![](https://placehold.co/28x28/F7F7F7/F7F7F7.png) | Hero | `#F7F7F7` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Accent / rewards | `#FFB703` |

Catalog colours: `bgColorLight: "#1B1730"`, `bgColorDark: "#2E2650"`

### Asset sheet (sizes in units)

- Skeleton: 1U, round skull, chunky sneakers, scarf trail
- Ghouls: 0.7–1.2U blobby sheet ghosts and pumpkin heads
- Weapons: bone boomerang, candle orbs, bat swarm
- Arena: rounded gravestones 0.6U, crypt 3U
- Shrine: 2U glowing ring

### Background (three quiet hazed bands)

1. **Far:** purple night sky with moon haze
2. **Mid:** hills with crooked trees
3. **Near:** graveyard fence

### Juice

- Speed lines at high momentum
- Ghouls burst into candy
- Shrine buff fanfare
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HOPSKULL ARENA** | A sneaker skeleton mid-hop over a graveyard, title on a tombstone |
| 2 · Action | **HOP!** | Skeleton bunny-hopping over a ghoul horde with speed lines |
| 3 · Win | **SURVIVED!** | Skeleton dancing on the Grave Knight's helmet |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/hopskull-arena.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/hopskull-arena.txt .shots/hopskull-arena --pause`, then open every PNG
- [ ] **Win path:** perfect-hop script and pick damage tomes; beat the boss
- [ ] **Lose path:** stop moving at 0:10
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Hopskull Arena  ·  slug: hopskull-arena
Brief: Solo score-chase · 2 min · palette family night (dark) · 3D, three.js r128 from cdnjs
Pitch: A cheerful skeleton in sneakers bunny-hops around a graveyard arena while auto-weapons smash waves of spooky-cute ghouls.
Core: Chain bunny-hops to outrun the horde while weapons fire automatically.
Rules: (1) Jump the instant you land for +10% speed (max ×1.8). (2) Slide keeps speed on downhill paths. (3) Level-ups offer 1 of 3 weapons or stat tomes. (4) Chests need 10 coins. (5) 2:00 boss: the Grave Knight.
Win: Defeat the Grave Knight · Lose: HP 0
Controls: desktop WASD move · Space jump · Shift slide · touch Joystick · Jump · Slide (max 3 inputs)
HUD: HP · Speed · Time + pause
Hint: "Jump on landing to go faster!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: hop window 220 ms · Normal 160 ms · Hard 110 ms and more ghouls.
Style kit: unit = skeleton height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1B1730, Mid band #2E2650, Ground / play surface #3B3463, Hero #F7F7F7, Accent / rewards #FFB703
Assets: Skeleton: 1U, round skull, chunky sneakers, scarf trail; Ghouls: 0.7–1.2U blobby sheet ghosts and pumpkin heads; Weapons: bone boomerang, candle orbs, bat swarm; Arena: rounded gravestones 0.6U, crypt 3U; Shrine: 2U glowing ring
Background bands: purple night sky with moon haze / hills with crooked trees / graveyard fence
Juice: Speed lines at high momentum; Ghouls burst into candy; Shrine buff fanfare
Feed cards: 1) Title: A sneaker skeleton mid-hop over a graveyard, title on a tombstone 2) HOP!: Skeleton bunny-hopping over a ghoul horde with speed lines 3) SURVIVED!: Skeleton dancing on the Grave Knight's helmet
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:hopskull-arena:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
