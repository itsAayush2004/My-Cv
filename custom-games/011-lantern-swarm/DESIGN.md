# 011 · Lantern Swarm

> **Light the festival. Survive the moths.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `90 s` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `lantern-swarm` → `src/offline-games/lantern-swarm.txt` |
| **Inspired by (mechanics only)** | Vampire Survivors (auto-attack horde) |
| **Players** | Solo score-chase |
| **Session** | 90 s |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:lantern-swarm:best`, `arthis:lantern-swarm:settings` (try/catch) |

### Pitch
A lantern-keeper walks through a night festival as thousands of shadow moths swarm in. Lanterns, sparklers and kites attack on their own; you just move, collect glow and pick upgrades.

### Why it can go viral
Power-fantasy escalation: the screen goes from 10 moths to 600 with fireworks everywhere. The final 10 seconds look incredible in clips.

### What makes it ours

- **Twist:** Moths are drawn to your light radius: a bigger light means more XP but a bigger swarm, so you can dim it to escape.
- **Rule we invented:** Festival evolutions: a max-level weapon plus its paired charm at a wish tree becomes a festival super-weapon (sparkler + star charm = firework rain).
- **What we cut from the reference:** 30-minute runs, 50 characters and meta shop: 90-second runs, 1 hero, 6 weapons, 6 charms.

## 2 · Gameplay

### Core mechanic
Move only; weapons auto-fire; collect glow orbs to level and choose 1 of 3 upgrades.

### Rules

1. Max 4 weapons + 4 charms.
2. Every level-up pauses on a 3-card pick.
3. Big moths drop wish lanterns that grant an evolution if eligible.
4. At 90 s the Moth Queen arrives; beat her to win.
5. Light radius: hold Shift to dim (fewer spawns, slower XP).

### Win / Lose
- **Win:** Defeat the Moth Queen at 90 s
- **Lose:** HP reaches 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Shift dim light · Space pick card | Drag anywhere to move · Dim button · tap card |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Level · Time
- **Hint line (shown once, under 60 chars):** "Just move. Your lanterns do the rest."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: spawn ×0.7 · Normal ×1 · Hard ×1.4 and faster moths.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Base spawn | 8/s → 40/s |
| XP to level | 5, then ×1.25 |
| Max on screen | 600 |
| Queen HP | 4,000 |

## 3 · Look and feel (style kit)

- **Scale unit:** keeper height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/141B33/141B33.png) | Far band (sky) | `#141B33` |
| ![](https://placehold.co/28x28/2A3A6B/2A3A6B.png) | Mid band | `#2A3A6B` |
| ![](https://placehold.co/28x28/3B3F6B/3B3F6B.png) | Ground / play surface | `#3B3F6B` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Hero | `#FFD166` |
| ![](https://placehold.co/28x28/FF8FAB/FF8FAB.png) | Accent / rewards | `#FF8FAB` |

Catalog colours: `bgColorLight: "#141B33"`, `bgColorDark: "#2A3A6B"`

### Asset sheet (sizes in units)

- Keeper: 1U, round hat, paper lantern held in hand
- Moths: 0.4U (small), 0.9U (big), soft dark-violet with glowing eye dots
- Weapons: paper lanterns 0.5U orbiting, sparkler streaks, kite blades 0.8U
- Glow orbs: 0.2U, gold
- Stalls: 2U rounded festival booths along the edges

### Background (three quiet hazed bands)

1. **Far:** deep blue sky with soft stars
2. **Mid:** festival roofs and string lights in haze
3. **Near:** lantern-lit stone path

### Juice

- Moths pop into gold dust
- Level-up screen burst with chimes
- Firework rain evolution lights the whole screen
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LANTERN SWARM** | A keeper holding a lantern on a festival street, title in glowing paper-lantern letters |
| 2 · Action | **LEVEL UP!** | Keeper surrounded by orbiting lanterns and a moth swarm |
| 3 · Win | **SURVIVED!** | Fireworks over the festival as the queen dissolves |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/lantern-swarm.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/lantern-swarm.txt .shots/lantern-swarm --pause`, then open every PNG
- [ ] **Win path:** test seed with god-mode off: move in circles and pick damage cards; reach 90 s and beat the queen
- [ ] **Lose path:** stand still in a corner
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Lantern Swarm  ·  slug: lantern-swarm
Brief: Solo score-chase · 90 s · palette family night (dark) · 2D canvas
Pitch: A lantern-keeper walks through a night festival as thousands of shadow moths swarm in. Lanterns, sparklers and kites attack on their own; you just move, collect glow and pick upgrades.
Core: Move only; weapons auto-fire; collect glow orbs to level and choose 1 of 3 upgrades.
Rules: (1) Max 4 weapons + 4 charms. (2) Every level-up pauses on a 3-card pick. (3) Big moths drop wish lanterns that grant an evolution if eligible. (4) At 90 s the Moth Queen arrives; beat her to win. (5) Light radius: hold Shift to dim (fewer spawns, slower XP).
Win: Defeat the Moth Queen at 90 s · Lose: HP reaches 0
Controls: desktop WASD move · Shift dim light · Space pick card · touch Drag anywhere to move · Dim button · tap card (max 3 inputs)
HUD: HP · Level · Time + pause
Hint: "Just move. Your lanterns do the rest."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: spawn ×0.7 · Normal ×1 · Hard ×1.4 and faster moths.
Style kit: unit = keeper height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #141B33, Mid band #2A3A6B, Ground / play surface #3B3F6B, Hero #FFD166, Accent / rewards #FF8FAB
Assets: Keeper: 1U, round hat, paper lantern held in hand; Moths: 0.4U (small), 0.9U (big), soft dark-violet with glowing eye dots; Weapons: paper lanterns 0.5U orbiting, sparkler streaks, kite blades 0.8U; Glow orbs: 0.2U, gold; Stalls: 2U rounded festival booths along the edges
Background bands: deep blue sky with soft stars / festival roofs and string lights in haze / lantern-lit stone path
Juice: Moths pop into gold dust; Level-up screen burst with chimes; Firework rain evolution lights the whole screen
Feed cards: 1) Title: A keeper holding a lantern on a festival street, title in glowing paper-lantern letters 2) LEVEL UP!: Keeper surrounded by orbiting lanterns and a moth swarm 3) SURVIVED!: Fireworks over the festival as the queen dissolves
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:lantern-swarm:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
