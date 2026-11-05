# 084 · Parry Opera

> **Turn-based. Real-time defence. Pure drama.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `vs CPU` · `4 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `parry-opera` → `src/offline-games/parry-opera.txt` |
| **Inspired by (mechanics only)** | Clair Obscur: Expedition 33 (reactive turn-based) |
| **Players** | vs CPU |
| **Session** | 4 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:parry-opera:best`, `arthis:parry-opera:settings` (try/catch) |

### Pitch
A painted-opera RPG: pick skills on your turn, then dodge or parry every enemy hit in real time. A perfect parry chain triggers a counter.

### Why it can go viral
Perfect parry sequences are thrilling to watch and share.

### What makes it ours

- **Twist:** Every enemy attack has a readable rhythm.
- **Rule we invented:** Encore gauge fills with perfect parries for a finisher.
- **What we cut from the reference:** Long campaign: 3 fights.

## 2 · Gameplay

### Core mechanic
Choose skills; defend with timing.

### Rules

1. Your turn: spend AP on skills (each has a timed button press for bonus).
2. Enemy turn: parry (150 ms) or dodge (250 ms) each hit.
3. Parry every hit of a combo = counter-attack.
4. Perfect parries fill the Encore gauge for a finisher.
5. 3 heroes; 3 fights.

### Win / Lose
- **Win:** Final boss down
- **Lose:** Party down

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click skills · Space parry · Shift dodge | Tap · Parry · Dodge |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · AP · Encore
- **Hint line (shown once, under 60 chars):** "Parry every hit to counter!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy 220 ms · Normal 150 · Hard 100.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Fights | 3 |
| Parry window | 150 ms |
| Dodge window | 250 ms |

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
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/F2C9B8/F2C9B8.png) | Mid band | `#F2C9B8` |
| ![](https://placehold.co/28x28/E8D4C4/E8D4C4.png) | Ground / play surface | `#E8D4C4` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Accent / rewards | `#FFB703` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#F2C9B8"`

### Asset sheet (sizes in units)

- Heroes: 1U painted-opera costumes
- Masked enemies: 1–3U
- Stage props: rounded set pieces and curtains

### Background (three quiet hazed bands)

1. **Far:** painted sky backdrop
2. **Mid:** stage curtains
3. **Near:** wooden stage floor

### Juice

- Parry flash
- Counter slow-motion
- Encore spotlight
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **PARRY OPERA** | Heroes on a painted stage |
| 2 · Action | **PARRY!** | Sword meeting a blade |
| 3 · Win | **ENCORE!** | Spotlight finisher |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/parry-opera.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/parry-opera.txt .shots/parry-opera --pause`, then open every PNG
- [ ] **Win path:** scripted parries to win
- [ ] **Lose path:** never defend
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Parry Opera  ·  slug: parry-opera
Brief: vs CPU · 4 min · palette family peach (light) · 2D canvas
Pitch: A painted-opera RPG: pick skills on your turn, then dodge or parry every enemy hit in real time. A perfect parry chain triggers a counter.
Core: Choose skills; defend with timing.
Rules: (1) Your turn: spend AP on skills (each has a timed button press for bonus). (2) Enemy turn: parry (150 ms) or dodge (250 ms) each hit. (3) Parry every hit of a combo = counter-attack. (4) Perfect parries fill the Encore gauge for a finisher. (5) 3 heroes; 3 fights.
Win: Final boss down · Lose: Party down
Controls: desktop Click skills · Space parry · Shift dodge · touch Tap · Parry · Dodge (max 3 inputs)
HUD: HP · AP · Encore + pause
Hint: "Parry every hit to counter!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy 220 ms · Normal 150 · Hard 100.
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #F2C9B8, Ground / play surface #E8D4C4, Hero #843B62, Accent / rewards #FFB703
Assets: Heroes: 1U painted-opera costumes; Masked enemies: 1–3U; Stage props: rounded set pieces and curtains
Background bands: painted sky backdrop / stage curtains / wooden stage floor
Juice: Parry flash; Counter slow-motion; Encore spotlight
Feed cards: 1) Title: Heroes on a painted stage 2) PARRY!: Sword meeting a blade 3) ENCORE!: Spotlight finisher
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:parry-opera:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
