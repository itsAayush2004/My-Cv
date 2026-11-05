# 032 · Snatch the Snack

> **Buy the snacks. Steal better ones.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `vs CPU` · `3 min` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `snatch-the-snack` → `src/offline-games/snatch-the-snack.txt` |
| **Inspired by (mechanics only)** | Steal a Brainrot (idle steal tycoon) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:snatch-the-snack:best`, `arthis:snatch-the-snack:settings` (try/catch) |

### Pitch
Silly snack characters (a dancing samosa, a sneaky jalebi) ride a central conveyor. Buy them to earn coins per second in your base, then sneak into 3 CPU bases to steal rarer snacks while their locks are down.

### Why it can go viral
Chaotic chase moments (running home with a legendary snack while the owner chases you) are pure fun.

### What makes it ours

- **Twist:** Rarity tiers glow, and legendary snacks walk slower on the conveyor, so everyone rushes them.
- **Rule we invented:** Spice trap: place one trap at your door that makes thieves sneeze and drop what they carry.
- **What we cut from the reference:** Online players and rebirth grind: 3 CPU rivals, 3-minute match.

## 2 · Gameplay

### Core mechanic
Buy snacks from the belt, place them in your base for income, and steal from rivals when their lock timer is down.

### Rules

1. Snacks earn coins/sec by rarity (common to legendary).
2. Base lock: press to lock for 10 s (cooldown 20 s).
3. Carrying a stolen snack slows you to 70%.
4. Touching the thief makes them drop it.
5. Richest after 3 minutes wins.

### Win / Lose
- **Win:** Most coins at 3:00
- **Lose:** Not the richest at 3:00

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · E buy/grab · Space lock | Joystick · Grab · Lock |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Coins/s · Snacks · Time
- **Hint line (shown once, under 60 chars):** "Steal when their lock is open!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Coins/s), **Play Again**

### Difficulty
Easy: CPU slow to defend · Normal · Hard: CPU locks smartly and steals from you.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Match | 180 s |
| Lock | 10 s, 20 s cooldown |
| Carry slow | 70% |
| Bases | 4 |

## 3 · Look and feel (style kit)

- **Scale unit:** snack character = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/FFD1E3/FFD1E3.png) | Mid band | `#FFD1E3` |
| ![](https://placehold.co/28x28/F6F0FF/F6F0FF.png) | Ground / play surface | `#F6F0FF` |
| ![](https://placehold.co/28x28/FF6F91/FF6F91.png) | Hero | `#FF6F91` |
| ![](https://placehold.co/28x28/5BC0EB/5BC0EB.png) | Accent / rewards | `#5BC0EB` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#FFD1E3"`

### Asset sheet (sizes in units)

- Snacks: samosa, jalebi, ladoo, vada pav, gol gappa, 1U with legs and faces
- Bases: 4U rounded platforms with pedestals
- Conveyor: rounded belt in the centre
- Lock dome: soft glass bubble over a base

### Background (three quiet hazed bands)

1. **Far:** pink sky haze
2. **Mid:** candy-coloured city blocks
3. **Near:** street edge

### Juice

- Snacks dance on pedestals
- Coin trickle sounds
- Lock dome pop
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SNATCH THE SNACK** | Snack characters riding a conveyor between bases, title in neon |
| 2 · Action | **SNATCH!** | A player running with a glowing legendary samosa |
| 3 · Win | **RICHEST!** | Coin mountain in your base with dancing snacks |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/snatch-the-snack.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/snatch-the-snack.txt .shots/snatch-the-snack --pause`, then open every PNG
- [ ] **Win path:** scripted buys + steals to finish richest
- [ ] **Lose path:** buy nothing, stay idle
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Snatch the Snack  ·  slug: snatch-the-snack
Brief: vs CPU · 3 min · palette family candy (light) · 2D canvas
Pitch: Silly snack characters (a dancing samosa, a sneaky jalebi) ride a central conveyor. Buy them to earn coins per second in your base, then sneak into 3 CPU bases to steal rarer snacks while their locks are down.
Core: Buy snacks from the belt, place them in your base for income, and steal from rivals when their lock timer is down.
Rules: (1) Snacks earn coins/sec by rarity (common to legendary). (2) Base lock: press to lock for 10 s (cooldown 20 s). (3) Carrying a stolen snack slows you to 70%. (4) Touching the thief makes them drop it. (5) Richest after 3 minutes wins.
Win: Most coins at 3:00 · Lose: Not the richest at 3:00
Controls: desktop WASD move · E buy/grab · Space lock · touch Joystick · Grab · Lock (max 3 inputs)
HUD: Coins/s · Snacks · Time + pause
Hint: "Steal when their lock is open!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: CPU slow to defend · Normal · Hard: CPU locks smartly and steals from you.
Style kit: unit = snack character = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #FFD1E3, Ground / play surface #F6F0FF, Hero #FF6F91, Accent / rewards #5BC0EB
Assets: Snacks: samosa, jalebi, ladoo, vada pav, gol gappa, 1U with legs and faces; Bases: 4U rounded platforms with pedestals; Conveyor: rounded belt in the centre; Lock dome: soft glass bubble over a base
Background bands: pink sky haze / candy-coloured city blocks / street edge
Juice: Snacks dance on pedestals; Coin trickle sounds; Lock dome pop
Feed cards: 1) Title: Snack characters riding a conveyor between bases, title in neon 2) SNATCH!: A player running with a glowing legendary samosa 3) RICHEST!: Coin mountain in your base with dancing snacks
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:snatch-the-snack:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
