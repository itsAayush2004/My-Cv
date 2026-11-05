# 048 · Pocket Bot Planets

> **A tiny robot. Planets full of surprises.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `2 min` · `candy (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `pocket-bot-planets` → `src/offline-games/pocket-bot-planets.txt` |
| **Inspired by (mechanics only)** | Astro Bot (joyful 3D platformer) |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `candy` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:pocket-bot-planets:best`, `arthis:pocket-bot-planets:settings` (try/catch) |

### Pitch
A tiny robot hops between toy planets. Each planet gives a power-up suit (sponge swell, balloon float, time-freeze watch). Rescue 5 hidden bots per planet.

### Why it can go viral
Pure joy: every planet has a new suit that changes how you play, and kids love the bot-rescue celebrations.

### What makes it ours

- **Twist:** Each planet's suit changes how the whole level works.
- **Rule we invented:** Bot cheer: rescued bots follow you and cheer at hard jumps.
- **What we cut from the reference:** Many worlds: 3 planets.

## 2 · Gameplay

### Core mechanic
Platform with hover jump and spin; use the planet suit to solve its challenges.

### Rules

1. 3 planets, each with its own suit: sponge (soak water, swell, spray), balloon (inflate and float), time-watch (freeze moving platforms 3 s).
2. 5 hidden bots per planet in secret spots.
3. Coins open the gate to planet 3.
4. Hover jump lasts 0.6 s.
5. 3 lives; checkpoints mid-planet.

### Win / Lose
- **Win:** Reach planet 3's goal with 10+ bots
- **Lose:** Lose 3 lives

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · Space jump/hover · J spin/suit | Stick · Jump · Spin |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Bots · Coins · Lives
- **Hint line (shown once, under 60 chars):** "Find the hidden bots!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Bots), **Play Again**

### Difficulty
Easy: extra hover · Normal · Hard: fewer coins.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Planets | 3 |
| Bots | 15 |
| Hover | 0.6 s |
| Lives | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** bot = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/C9F2E3/C9F2E3.png) | Mid band | `#C9F2E3` |
| ![](https://placehold.co/28x28/FFF7FB/FFF7FB.png) | Ground / play surface | `#FFF7FB` |
| ![](https://placehold.co/28x28/5BC0EB/5BC0EB.png) | Hero | `#5BC0EB` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#C9F2E3"`

### Asset sheet (sizes in units)

- Robot: 1U round white bot with blue visor and jet feet
- Sponge suit: swells to 2U
- Balloon suit: round, 1.6U
- Bots to rescue: 0.6U with waving arms
- Planets: rounded toy worlds made of blocks, pipes and candy

### Background (three quiet hazed bands)

1. **Far:** pastel space with soft stars
2. **Mid:** floating toy islands
3. **Near:** planet surface edge

### Juice

- Everything bounces on landing
- Rescued bots do a cheer dance
- Suit transform pop with stars
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **POCKET BOT PLANETS** | A tiny robot on a toy planet, title in balloon letters |
| 2 · Action | **HOVER!** | Robot hovering over a gap |
| 3 · Win | **BOTS SAVED!** | Bots cheering on a spaceship |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/pocket-bot-planets.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/pocket-bot-planets.txt .shots/pocket-bot-planets --pause`, then open every PNG
- [ ] **Win path:** recorded inputs rescuing 10+ bots and reaching the final goal
- [ ] **Lose path:** jump off planet edges 3 times
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Pocket Bot Planets  ·  slug: pocket-bot-planets
Brief: Solo score-chase · 2 min · palette family candy (light) · 3D, three.js r128 from cdnjs
Pitch: A tiny robot hops between toy planets. Each planet gives a power-up suit (sponge swell, balloon float, time-freeze watch). Rescue 5 hidden bots per planet.
Core: Platform with hover jump and spin; use the planet suit to solve its challenges.
Rules: (1) 3 planets, each with its own suit: sponge (soak water, swell, spray), balloon (inflate and float), time-watch (freeze moving platforms 3 s). (2) 5 hidden bots per planet in secret spots. (3) Coins open the gate to planet 3. (4) Hover jump lasts 0.6 s. (5) 3 lives; checkpoints mid-planet.
Win: Reach planet 3's goal with 10+ bots · Lose: Lose 3 lives
Controls: desktop WASD · Space jump/hover · J spin/suit · touch Stick · Jump · Spin (max 3 inputs)
HUD: Bots · Coins · Lives + pause
Hint: "Find the hidden bots!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: extra hover · Normal · Hard: fewer coins.
Style kit: unit = bot = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #C9F2E3, Ground / play surface #FFF7FB, Hero #5BC0EB, Accent / rewards #FFD36E
Assets: Robot: 1U round white bot with blue visor and jet feet; Sponge suit: swells to 2U; Balloon suit: round, 1.6U; Bots to rescue: 0.6U with waving arms; Planets: rounded toy worlds made of blocks, pipes and candy
Background bands: pastel space with soft stars / floating toy islands / planet surface edge
Juice: Everything bounces on landing; Rescued bots do a cheer dance; Suit transform pop with stars
Feed cards: 1) Title: A tiny robot on a toy planet, title in balloon letters 2) HOVER!: Robot hovering over a gap 3) BOTS SAVED!: Bots cheering on a spaceship
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:pocket-bot-planets:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
