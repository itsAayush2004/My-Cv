# 004 · Pillow Fort Panic

> **The sleepover is a war zone.**

`ARTHIS.space` · `Party & Social` · `vs CPU | 2 Players (local)` · `2 min` · `peach (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `pillow-fort-panic` → `src/offline-games/pillow-fort-panic.txt` |
| **Inspired by (mechanics only)** | Party Animals (physics brawler) |
| **Players** | vs CPU | 2 Players (local) |
| **Session** | 2 min |
| **Palette family** | `peach` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:pillow-fort-panic:best`, `arthis:pillow-fort-panic:settings` (try/catch) |

### Pitch
Fluffy animals in pyjamas brawl on a giant bed. Grab, bonk and toss rivals off the mattress or into the toy box. Last one awake wins.

### Why it can go viral
Floppy wrestling: carrying a sleepy panda and dropping it into a laundry basket is hilarious, and the pyjamas are adorable.

### What makes it ours

- **Twist:** A Sleep meter: every bonk makes you drowsier, and a full meter puts you to sleep (ragdoll) for 3 s, so even a cornered fighter can wake up and turn it around.
- **Rule we invented:** Warm milk mug: drink it to empty your sleep meter (spawns every 20 s on the nightstand).
- **What we cut from the reference:** 8-player online, cosmetics and 20 maps: 1 bedroom arena, 3 CPU animals or 2 local players + CPUs.

## 2 · Gameplay

### Core mechanic
Grab rivals with floppy arms and toss them out of the bed area before they toss you.

### Rules

1. 4 animals per round; leaving the bed's edge (into toy box, floor lava-carpet, window) = out.
2. Bonk (pillow swing) adds 1 sleep; a charged bonk adds 3. Full sleep (6) = 3 s ragdoll.
3. Grab holds a rival; release while moving to throw.
4. Warm milk resets sleep; a cookie gives a 4 s bigger bonk.
5. First to 3 round wins takes the match.

### Win / Lose
- **Win:** Win 3 rounds
- **Lose:** CPU (or player 2) wins 3 rounds first

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · J bonk (hold to charge) · K grab/throw (P2: arrows + 1/2) | Joystick · Bonk · Grab |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Wins · Sleep · Time
- **Hint line (shown once, under 60 chars):** "Grab them. Toss them off the bed!"
- **Pause sheet:** Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard
- **End sheet:** result, best (Wins), **Play Again**

### Difficulty
Easy: CPU grabs rarely · Normal: balanced · Hard: CPU targets sleepy players and grabs milk first.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Bonk knockback | 3 U/s |
| Charged bonk | ×2.5 |
| Sleep max | 6 |
| Sleep time | 3 s |
| Round | 60 s cap |

## 3 · Look and feel (style kit)

- **Scale unit:** animal height = 1U (panda, sloth, frog, goat)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/E6C8F0/E6C8F0.png) | Mid band | `#E6C8F0` |
| ![](https://placehold.co/28x28/FFB997/FFB997.png) | Ground / play surface | `#FFB997` |
| ![](https://placehold.co/28x28/B8A1E3/B8A1E3.png) | Hero | `#B8A1E3` |
| ![](https://placehold.co/28x28/FF6B6B/FF6B6B.png) | Accent / rewards | `#FF6B6B` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#E6C8F0"`

### Asset sheet (sizes in units)

- Animals: 1U, round bodies, stubby arms, matching pyjamas with stripes
- Pillows: 0.6U soft rounded rectangles
- Bed: 10U mattress with puffy quilt bumps (play area)
- Toy box: 2U rounded wooden crate
- Milk mug and cookie: 0.3U, rounded

### Background (three quiet hazed bands)

1. **Far:** lavender wall with soft night-light glow
2. **Mid:** blurred posters and shelves
3. **Near:** headboard and blanket folds

### Juice

- Feather burst on every bonk
- Zzz bubbles grow with sleep
- Slow-mo on the final ring-out
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PILLOW FORT PANIC** | Four pyjama animals on a huge bed, title stitched into a quilted pillow |
| 2 · Action | **BONK!** | A panda bonking a frog mid-air in a cloud of feathers |
| 3 · Win | **LAST AWAKE!** | The winner standing on the pillow pile as others snore |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/pillow-fort-panic.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/pillow-fort-panic.txt .shots/pillow-fort-panic --pause`, then open every PNG
- [ ] **Win path:** script grabs to toss all 3 CPUs out across 3 rounds
- [ ] **Lose path:** stand still near the edge until thrown out 3 rounds
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Pillow Fort Panic  ·  slug: pillow-fort-panic
Brief: vs CPU | 2 Players (local) · 2 min · palette family peach (light) · 3D, three.js r128 from cdnjs
Pitch: Fluffy animals in pyjamas brawl on a giant bed. Grab, bonk and toss rivals off the mattress or into the toy box. Last one awake wins.
Core: Grab rivals with floppy arms and toss them out of the bed area before they toss you.
Rules: (1) 4 animals per round; leaving the bed's edge (into toy box, floor lava-carpet, window) = out. (2) Bonk (pillow swing) adds 1 sleep; a charged bonk adds 3. Full sleep (6) = 3 s ragdoll. (3) Grab holds a rival; release while moving to throw. (4) Warm milk resets sleep; a cookie gives a 4 s bigger bonk. (5) First to 3 round wins takes the match.
Win: Win 3 rounds · Lose: CPU (or player 2) wins 3 rounds first
Controls: desktop WASD move · J bonk (hold to charge) · K grab/throw (P2: arrows + 1/2) · touch Joystick · Bonk · Grab (max 3 inputs)
HUD: Wins · Sleep · Time + pause
Hint: "Grab them. Toss them off the bed!"
Pause sheet: Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard. Difficulty changes: Easy: CPU grabs rarely · Normal: balanced · Hard: CPU targets sleepy players and grabs milk first.
Style kit: unit = animal height = 1U (panda, sloth, frog, goat); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #E6C8F0, Ground / play surface #FFB997, Hero #B8A1E3, Accent / rewards #FF6B6B
Assets: Animals: 1U, round bodies, stubby arms, matching pyjamas with stripes; Pillows: 0.6U soft rounded rectangles; Bed: 10U mattress with puffy quilt bumps (play area); Toy box: 2U rounded wooden crate; Milk mug and cookie: 0.3U, rounded
Background bands: lavender wall with soft night-light glow / blurred posters and shelves / headboard and blanket folds
Juice: Feather burst on every bonk; Zzz bubbles grow with sleep; Slow-mo on the final ring-out
Feed cards: 1) Title: Four pyjama animals on a huge bed, title stitched into a quilted pillow 2) BONK!: A panda bonking a frog mid-air in a cloud of feathers 3) LAST AWAKE!: The winner standing on the pillow pile as others snore
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:pillow-fort-panic:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
