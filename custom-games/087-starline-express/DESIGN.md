# 087 · Starline Express

> **Break their toughness. Fire your ultimate.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `4 min` · `space (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `starline-express` → `src/offline-games/starline-express.txt` |
| **Inspired by (mechanics only)** | Honkai: Star Rail (turn-based gacha RPG) |
| **Players** | vs CPU |
| **Session** | 4 min |
| **Palette family** | `space` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:starline-express:best`, `arthis:starline-express:settings` (try/catch) |

### Pitch
The crew of a starline train fights turn-based battles across planets. Share skill points, break enemy toughness with their weak elements, and drop ultimates at the perfect moment.

### Why it can go viral
Flashy ultimates and satisfying weakness breaks.

### What makes it ours

- **Twist:** Skill points shared across the team.
- **Rule we invented:** Weakness break delays enemies.
- **What we cut from the reference:** Gacha: fixed crew of 4.

## 2 · Gameplay

### Core mechanic
Turn-based combat with speed order.

### Rules

1. Basic attack +1 skill point; skill −1 skill point.
2. Enemies have toughness bars broken only by their weakness elements.
3. Broken enemies lose their next turn.
4. Ultimates can be fired anytime when charged.
5. Speed decides turn order on a timeline; 3 battles.

### Win / Lose
- **Win:** Boss down
- **Lose:** Party down

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click actions · Q ult · Space confirm | Tap · Ult · Confirm |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · SP · Turn
- **Hint line (shown once, under 60 chars):** "Break the toughness bar!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: low toughness · Normal · Hard: bosses with two weakness shifts.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Battles | 3 |
| Skill points | 5 max |

## 3 · Look and feel (style kit)

- **Scale unit:** hero = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/0B1026/0B1026.png) | Far band (sky) | `#0B1026` |
| ![](https://placehold.co/28x28/1F2A5A/1F2A5A.png) | Mid band | `#1F2A5A` |
| ![](https://placehold.co/28x28/2B3466/2B3466.png) | Ground / play surface | `#2B3466` |
| ![](https://placehold.co/28x28/4EE6C1/4EE6C1.png) | Hero | `#4EE6C1` |
| ![](https://placehold.co/28x28/8C7CFF/8C7CFF.png) | Accent / rewards | `#8C7CFF` |

Catalog colours: `bgColorLight: "#0B1026"`, `bgColorDark: "#1F2A5A"`

### Asset sheet (sizes in units)

- Crew: 4 heroes at 1U with distinct colours
- Space monsters: 1–3U
- Train interior and platform

### Background (three quiet hazed bands)

1. **Far:** starfield
2. **Mid:** ringed planet
3. **Near:** platform

### Juice

- Toughness shatter
- Ultimate cut-in
- Timeline slide
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **STARLINE EXPRESS** | A crew by a starship train |
| 2 · Action | **BREAK!** | Toughness shattering |
| 3 · Win | **VICTORY!** | Crew posing |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/starline-express.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/starline-express.txt .shots/starline-express --pause`, then open every PNG
- [ ] **Win path:** seeded fights using weakness skills to win
- [ ] **Lose path:** pass every turn
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Starline Express  ·  slug: starline-express
Brief: vs CPU · 4 min · palette family space (dark) · 2D canvas
Pitch: The crew of a starline train fights turn-based battles across planets. Share skill points, break enemy toughness with their weak elements, and drop ultimates at the perfect moment.
Core: Turn-based combat with speed order.
Rules: (1) Basic attack +1 skill point; skill −1 skill point. (2) Enemies have toughness bars broken only by their weakness elements. (3) Broken enemies lose their next turn. (4) Ultimates can be fired anytime when charged. (5) Speed decides turn order on a timeline; 3 battles.
Win: Boss down · Lose: Party down
Controls: desktop Click actions · Q ult · Space confirm · touch Tap · Ult · Confirm (max 3 inputs)
HUD: HP · SP · Turn + pause
Hint: "Break the toughness bar!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: low toughness · Normal · Hard: bosses with two weakness shifts.
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #0B1026, Mid band #1F2A5A, Ground / play surface #2B3466, Hero #4EE6C1, Accent / rewards #8C7CFF
Assets: Crew: 4 heroes at 1U with distinct colours; Space monsters: 1–3U; Train interior and platform
Background bands: starfield / ringed planet / platform
Juice: Toughness shatter; Ultimate cut-in; Timeline slide
Feed cards: 1) Title: A crew by a starship train 2) BREAK!: Toughness shattering 3) VICTORY!: Crew posing
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:starline-express:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
