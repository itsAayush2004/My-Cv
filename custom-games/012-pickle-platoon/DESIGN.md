# 012 · Pickle Platoon

> **One pickle. Six weapons. Twenty waves.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `3 min` · `jungle (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `pickle-platoon` → `src/offline-games/pickle-platoon.txt` |
| **Inspired by (mechanics only)** | Brotato (arena survivors) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `jungle` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:pickle-platoon:best`, `arthis:pickle-platoon:settings` (try/catch) |

### Pitch
A brave pickle defends a picnic blanket from waves of bugs. Six weapons fire automatically; between waves, spend crumbs on new weapons and buffs.

### Why it can go viral
Silly builds: six forks orbiting a pickle melting a beetle army.

### What makes it ours

- **Twist:** The picnic blanket shrinks as bugs eat it, so the arena gets smaller wave by wave.
- **Rule we invented:** Brine dash: a dash that leaves a slippery brine trail that slows bugs.
- **What we cut from the reference:** 40 characters and 20 waves of 90 s: 12 short waves (15 s each), 1 pickle.

## 2 · Gameplay

### Core mechanic
Dodge in a shrinking arena while 6 weapons auto-fire; shop between waves.

### Rules

1. Waves last 15 s; survive 12.
2. Crumbs from bugs buy weapons/buffs; you can lock items and reroll for 2 crumbs.
3. Up to 6 weapons; 3 of the same merge into a stronger tier.
4. Blanket shrinks 4% each wave.
5. Wave 12 boss: Queen Ant.

### Win / Lose
- **Win:** Survive wave 12 and beat the Queen Ant
- **Lose:** HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Space dash · click to buy | Drag move · Dash button · tap to buy |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Wave · Crumbs
- **Hint line (shown once, under 60 chars):** "Move. Shop between waves."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: bugs 80% HP · Normal · Hard: 130% HP, faster shrink.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Waves | 12 × 15 s |
| Reroll | 2 crumbs |
| Merge | 3 of same |
| Dash cooldown | 2 s |

## 3 · Look and feel (style kit)

- **Scale unit:** pickle height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/E4F7D9/E4F7D9.png) | Far band (sky) | `#E4F7D9` |
| ![](https://placehold.co/28x28/B8E3A1/B8E3A1.png) | Mid band | `#B8E3A1` |
| ![](https://placehold.co/28x28/F5E6C8/F5E6C8.png) | Ground / play surface | `#F5E6C8` |
| ![](https://placehold.co/28x28/4CAF50/4CAF50.png) | Hero | `#4CAF50` |
| ![](https://placehold.co/28x28/FF6B6B/FF6B6B.png) | Accent / rewards | `#FF6B6B` |

Catalog colours: `bgColorLight: "#E4F7D9"`, `bgColorDark: "#B8E3A1"`

### Asset sheet (sizes in units)

- Pickle: 1U rounded green with bumps as soft dots, tiny legs and eyes
- Weapons: forks, toothpicks, salt shaker, sauce bottle, 0.4–0.6U
- Bugs: ant 0.4U, beetle 0.7U, wasp 0.5U, Queen Ant 2.5U
- Blanket: red-white checker with rounded corners (play area)
- Crumbs: 0.2U golden bits

### Background (three quiet hazed bands)

1. **Far:** sunny sky with soft clouds
2. **Mid:** park trees in haze
3. **Near:** grass edge around the blanket

### Juice

- Bugs pop into crumbs
- Merge flash when 3 weapons combine
- Blanket edge nibble animation
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PICKLE PLATOON** | A pickle hero on a picnic blanket with forks orbiting, title on a picnic basket lid |
| 2 · Action | **SHOP!** | Pickle with a crumb pile choosing glowing weapon cards |
| 3 · Win | **WAVE 12!** | Pickle on top of a defeated Queen Ant, confetti crumbs |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/pickle-platoon.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/pickle-platoon.txt .shots/pickle-platoon --pause`, then open every PNG
- [ ] **Win path:** buy damage weapons each wave and kite in circles to wave 12
- [ ] **Lose path:** stand still on wave 1
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Pickle Platoon  ·  slug: pickle-platoon
Brief: Solo score-chase · 3 min · palette family jungle (light) · 2D canvas
Pitch: A brave pickle defends a picnic blanket from waves of bugs. Six weapons fire automatically; between waves, spend crumbs on new weapons and buffs.
Core: Dodge in a shrinking arena while 6 weapons auto-fire; shop between waves.
Rules: (1) Waves last 15 s; survive 12. (2) Crumbs from bugs buy weapons/buffs; you can lock items and reroll for 2 crumbs. (3) Up to 6 weapons; 3 of the same merge into a stronger tier. (4) Blanket shrinks 4% each wave. (5) Wave 12 boss: Queen Ant.
Win: Survive wave 12 and beat the Queen Ant · Lose: HP 0
Controls: desktop WASD move · Space dash · click to buy · touch Drag move · Dash button · tap to buy (max 3 inputs)
HUD: HP · Wave · Crumbs + pause
Hint: "Move. Shop between waves."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: bugs 80% HP · Normal · Hard: 130% HP, faster shrink.
Style kit: unit = pickle height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #E4F7D9, Mid band #B8E3A1, Ground / play surface #F5E6C8, Hero #4CAF50, Accent / rewards #FF6B6B
Assets: Pickle: 1U rounded green with bumps as soft dots, tiny legs and eyes; Weapons: forks, toothpicks, salt shaker, sauce bottle, 0.4–0.6U; Bugs: ant 0.4U, beetle 0.7U, wasp 0.5U, Queen Ant 2.5U; Blanket: red-white checker with rounded corners (play area); Crumbs: 0.2U golden bits
Background bands: sunny sky with soft clouds / park trees in haze / grass edge around the blanket
Juice: Bugs pop into crumbs; Merge flash when 3 weapons combine; Blanket edge nibble animation
Feed cards: 1) Title: A pickle hero on a picnic blanket with forks orbiting, title on a picnic basket lid 2) SHOP!: Pickle with a crumb pile choosing glowing weapon cards 3) WAVE 12!: Pickle on top of a defeated Queen Ant, confetti crumbs
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:pickle-platoon:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
