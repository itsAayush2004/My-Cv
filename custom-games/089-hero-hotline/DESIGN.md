# 089 · Hero Hotline

> **Send the right hero. Fast.**

`ARTHIS.space` · `RPG, Cards & Tactics` · `Solo score-chase` · `4 min` · `arcade (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `hero-hotline` → `src/offline-games/hero-hotline.txt` |
| **Inspired by (mechanics only)** | Dispatch (superhero dispatch management) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `arcade` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:hero-hotline:best`, `arthis:hero-hotline:settings` (try/catch) |

### Pitch
You run a superhero dispatch desk. Calls pop up on the city map; drag the right hero (or pair) onto each one, keep heroes rested, and handle 20 calls before you make 5 mistakes.

### Why it can go viral
Funny hero personalities and fast decisions.

### What makes it ours

- **Twist:** Chemistry: some hero pairs work better together.
- **Rule we invented:** Overtime: heroes sent while tired may fail comically.
- **What we cut from the reference:** Story episodes: short call texts.

## 2 · Gameplay

### Core mechanic
Read calls, match stats, dispatch.

### Rules

1. Heroes have 4 stats: combat, speed, charisma, smarts.
2. Calls need stat thresholds.
3. Heroes need rest after each call.
4. Some pairs have chemistry bonuses.
5. Handle 20 calls; 5 fails lose.

### Win / Lose
- **Win:** 20 calls handled
- **Lose:** 5 fails

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag heroes · Space pause calls · R rest | Drag · Pause · Rest |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Calls · Fails · Shift
- **Hint line (shown once, under 60 chars):** "Send the right hero!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Calls), **Play Again**

### Difficulty
Easy: slow calls · Normal · Hard: overlapping calls and moody heroes.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Calls | 20 |
| Fails allowed | 4 |

## 3 · Look and feel (style kit)

- **Scale unit:** hero card = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/1A0B2E/1A0B2E.png) | Far band (sky) | `#1A0B2E` |
| ![](https://placehold.co/28x28/2E1A5E/2E1A5E.png) | Mid band | `#2E1A5E` |
| ![](https://placehold.co/28x28/2A2342/2A2342.png) | Ground / play surface | `#2A2342` |
| ![](https://placehold.co/28x28/2BD2FF/2BD2FF.png) | Hero | `#2BD2FF` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#1A0B2E"`, `bgColorDark: "#2E1A5E"`

### Asset sheet (sizes in units)

- Hero portrait cards: 1U
- City map with call pins
- Dispatch desk with phones

### Background (three quiet hazed bands)

1. **Far:** night city
2. **Mid:** skyline
3. **Near:** desk

### Juice

- Call ping
- Success stamp
- Fail splat
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HERO HOTLINE** | A dispatch desk over a city map |
| 2 · Action | **DISPATCH!** | Hero flying to a pin |
| 3 · Win | **EMPLOYEE OF THE MONTH!** | Trophy |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/hero-hotline.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/hero-hotline.txt .shots/hero-hotline --pause`, then open every PNG
- [ ] **Win path:** scripted correct matches for 20 calls
- [ ] **Lose path:** ignore calls until 5 fail
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Hero Hotline  ·  slug: hero-hotline
Brief: Solo score-chase · 4 min · palette family arcade (dark) · 2D canvas
Pitch: You run a superhero dispatch desk. Calls pop up on the city map; drag the right hero (or pair) onto each one, keep heroes rested, and handle 20 calls before you make 5 mistakes.
Core: Read calls, match stats, dispatch.
Rules: (1) Heroes have 4 stats: combat, speed, charisma, smarts. (2) Calls need stat thresholds. (3) Heroes need rest after each call. (4) Some pairs have chemistry bonuses. (5) Handle 20 calls; 5 fails lose.
Win: 20 calls handled · Lose: 5 fails
Controls: desktop Drag heroes · Space pause calls · R rest · touch Drag · Pause · Rest (max 3 inputs)
HUD: Calls · Fails · Shift + pause
Hint: "Send the right hero!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow calls · Normal · Hard: overlapping calls and moody heroes.
Style kit: unit = hero card = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1A0B2E, Mid band #2E1A5E, Ground / play surface #2A2342, Hero #2BD2FF, Accent / rewards #FFD166
Assets: Hero portrait cards: 1U; City map with call pins; Dispatch desk with phones
Background bands: night city / skyline / desk
Juice: Call ping; Success stamp; Fail splat
Feed cards: 1) Title: A dispatch desk over a city map 2) DISPATCH!: Hero flying to a pin 3) EMPLOYEE OF THE MONTH!: Trophy
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:hero-hotline:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
