# 051 · Turbo Tuk-Tuk League

> **Rocket rickshaws. Giant football.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU | 2 Players (local)` · `3 min` · `sand (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `turbo-tuk-tuk-league` → `src/offline-games/turbo-tuk-tuk-league.txt` |
| **Inspired by (mechanics only)** | Rocket League (car football) |
| **Players** | vs CPU | 2 Players (local) |
| **Session** | 3 min |
| **Palette family** | `sand` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:turbo-tuk-tuk-league:best`, `arthis:turbo-tuk-tuk-league:settings` (try/catch) |

### Pitch
Rocket-boosted auto-rickshaws play 2v2 football in a dusty stadium. Boost, jump, flip and fly to smack a giant ball into the goal.

### Why it can go viral
Aerial goals with rickshaws are hilarious and spectacular.

### What makes it ours

- **Twist:** Horn bump: honk to push nearby rickshaws a little (cooldown).
- **Rule we invented:** Chai pads: refill boost on the field.
- **What we cut from the reference:** Online ranked: CPU and local 2P.

## 2 · Gameplay

### Core mechanic
Drive, boost and jump to hit the ball into the opponent's goal.

### Rules

1. 2v2, 3 minutes.
2. Boost meter refills on pads.
3. Jump, double jump, flip.
4. Goals reset kickoff.
5. Overtime golden goal.

### Win / Lose
- **Win:** More goals at full time
- **Lose:** Fewer goals

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · Space jump · Shift boost (P2: arrows, Enter, RShift) | Stick · Jump · Boost |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Score · Boost · Time
- **Hint line (shown once, under 60 chars):** "Boost into the ball!"
- **Pause sheet:** Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard
- **End sheet:** result, best (Score), **Play Again**

### Difficulty
Easy: CPU slow to rotate · Normal · Hard: CPU aerials.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Match | 180 s |
| Ball size | 2.5U |
| Boost | 100, −33/s |

## 3 · Look and feel (style kit)

- **Scale unit:** rickshaw = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFF1D6/FFF1D6.png) | Far band (sky) | `#FFF1D6` |
| ![](https://placehold.co/28x28/F4C47A/F4C47A.png) | Mid band | `#F4C47A` |
| ![](https://placehold.co/28x28/8FCB7A/8FCB7A.png) | Ground / play surface | `#8FCB7A` |
| ![](https://placehold.co/28x28/FFC300/FFC300.png) | Hero | `#FFC300` |
| ![](https://placehold.co/28x28/2EC4B6/2EC4B6.png) | Accent / rewards | `#2EC4B6` |

Catalog colours: `bgColorLight: "#FFF1D6"`, `bgColorDark: "#F4C47A"`

### Asset sheet (sizes in units)

- Rickshaw: 1U rounded three-wheeler with driver seated inside and rocket booster
- Ball: 2.5U striped
- Stadium: rounded walls with banners
- Chai pads: glowing circles

### Background (three quiet hazed bands)

1. **Far:** dusty sky
2. **Mid:** stadium crowd silhouettes
3. **Near:** pitch lines

### Juice

- Boost flames
- Goal explosion of marigold petals
- Crowd cheer
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **TURBO TUK-TUK LEAGUE** | Rocket rickshaws racing toward a giant ball, title on a stadium banner |
| 2 · Action | **GOAL!** | A rickshaw flipping the ball into the net |
| 3 · Win | **CHAMPIONS!** | Rickshaws circling with a trophy |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/turbo-tuk-tuk-league.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/turbo-tuk-tuk-league.txt .shots/turbo-tuk-tuk-league --pause`, then open every PNG
- [ ] **Win path:** scripted drives to score 3 vs Easy CPU
- [ ] **Lose path:** drive into own goal area
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Turbo Tuk-Tuk League  ·  slug: turbo-tuk-tuk-league
Brief: vs CPU | 2 Players (local) · 3 min · palette family sand (light) · 3D, three.js r128 from cdnjs
Pitch: Rocket-boosted auto-rickshaws play 2v2 football in a dusty stadium. Boost, jump, flip and fly to smack a giant ball into the goal.
Core: Drive, boost and jump to hit the ball into the opponent's goal.
Rules: (1) 2v2, 3 minutes. (2) Boost meter refills on pads. (3) Jump, double jump, flip. (4) Goals reset kickoff. (5) Overtime golden goal.
Win: More goals at full time · Lose: Fewer goals
Controls: desktop WASD · Space jump · Shift boost (P2: arrows, Enter, RShift) · touch Stick · Jump · Boost (max 3 inputs)
HUD: Score · Boost · Time + pause
Hint: "Boost into the ball!"
Pause sheet: Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard. Difficulty changes: Easy: CPU slow to rotate · Normal · Hard: CPU aerials.
Style kit: unit = rickshaw = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFF1D6, Mid band #F4C47A, Ground / play surface #8FCB7A, Hero #FFC300, Accent / rewards #2EC4B6
Assets: Rickshaw: 1U rounded three-wheeler with driver seated inside and rocket booster; Ball: 2.5U striped; Stadium: rounded walls with banners; Chai pads: glowing circles
Background bands: dusty sky / stadium crowd silhouettes / pitch lines
Juice: Boost flames; Goal explosion of marigold petals; Crowd cheer
Feed cards: 1) Title: Rocket rickshaws racing toward a giant ball, title on a stadium banner 2) GOAL!: A rickshaw flipping the ball into the net 3) CHAMPIONS!: Rickshaws circling with a trophy
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:turbo-tuk-tuk-league:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
