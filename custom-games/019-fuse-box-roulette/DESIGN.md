# 019 · Fuse Box Roulette

> **Zap him. Or zap yourself and go again.**

`ARTHIS.space` · `Roguelites & Survivors` · `vs CPU` · `2 min` · `spooky (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `fuse-box-roulette` → `src/offline-games/fuse-box-roulette.txt` |
| **Inspired by (mechanics only)** | Buckshot Roulette (tense turn duel) |
| **Players** | vs CPU |
| **Session** | 2 min |
| **Palette family** | `spooky` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:fuse-box-roulette:best`, `arthis:fuse-box-roulette:settings` (try/catch) |

### Pitch
A smiling puppet dealer challenges you to a fuse-box duel. Fuses are live or blank, and the counts are shown but the order is hidden. Zap the dealer, or zap yourself and take an extra turn if it's blank.

### Why it can go viral
Huge tension in seconds; the 'I zapped myself on a 50/50 and lived' moment gets screams on stream.

### What makes it ours

- **Twist:** The dealer bluffs: he sometimes taps an item without using it to mess with your read.
- **Rule we invented:** Static meter: each blank you survive on yourself charges a meter; at 3 you can see the next fuse once.
- **What we cut from the reference:** Gore and guns: a cartoon fuse-box with sparks and a puppet that loses 'charges'.

## 2 · Gameplay

### Core mechanic
Each turn choose: zap the dealer or zap yourself, using items to tilt the odds.

### Rules

1. Rounds load 2–8 fuses; live/blank counts shown.
2. Live on dealer = −1 dealer charge; live on you = −1 your charge.
3. Blank on yourself = take another turn.
4. Items (2 per round): peek, eject, skip dealer turn, double zap, +1 charge.
5. 3 rounds; charges carry over.

### Win / Lose
- **Win:** Dealer charges 0
- **Lose:** Your charges 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click target · click items · Space confirm | Tap target · tap items · Confirm |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** You · Dealer · Round
- **Hint line (shown once, under 60 chars):** "Blank on yourself? Go again."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (You), **Play Again**

### Difficulty
Easy: dealer plays randomly · Normal: plays odds · Hard: plays odds and bluffs.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Charges | 4 each |
| Fuses per round | 2–8 |
| Items per round | 2 |
| Rounds | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** fuse size = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/17141F/17141F.png) | Far band (sky) | `#17141F` |
| ![](https://placehold.co/28x28/2B2533/2B2533.png) | Mid band | `#2B2533` |
| ![](https://placehold.co/28x28/352C45/352C45.png) | Ground / play surface | `#352C45` |
| ![](https://placehold.co/28x28/A3E635/A3E635.png) | Hero | `#A3E635` |
| ![](https://placehold.co/28x28/F97316/F97316.png) | Accent / rewards | `#F97316` |

Catalog colours: `bgColorLight: "#17141F"`, `bgColorDark: "#2B2533"`

### Asset sheet (sizes in units)

- Dealer: 3U puppet with rounded jaw, top hat, glowing eyes (friendly-creepy)
- Fuse box: 2U rounded metal box with sparks
- Fuses: 1U glass capsules (green live glow, grey blank)
- Items: 0.6U rounded tokens (magnifier, eject lever, clock, double plug, battery)

### Background (three quiet hazed bands)

1. **Far:** dark room with a single hanging-lamp haze
2. **Mid:** shelves of jars in shadow
3. **Near:** wooden table edge

### Juice

- Spark burst on live zaps
- Lamp sway after each shot
- Dealer laugh bob
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **FUSE BOX ROULETTE** | A puppet dealer behind a sparking fuse box, title on a warning sign |
| 2 · Action | **ZAP!** | Green lightning arcing toward the dealer |
| 3 · Win | **SURVIVED!** | Lamp swinging, dealer slumped, your charges glowing |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/fuse-box-roulette.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/fuse-box-roulette.txt .shots/fuse-box-roulette --pause`, then open every PNG
- [ ] **Win path:** seeded fuse order where scripted choices win
- [ ] **Lose path:** always zap yourself
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Fuse Box Roulette  ·  slug: fuse-box-roulette
Brief: vs CPU · 2 min · palette family spooky (dark) · 2D canvas
Pitch: A smiling puppet dealer challenges you to a fuse-box duel. Fuses are live or blank, and the counts are shown but the order is hidden. Zap the dealer, or zap yourself and take an extra turn if it's blank.
Core: Each turn choose: zap the dealer or zap yourself, using items to tilt the odds.
Rules: (1) Rounds load 2–8 fuses; live/blank counts shown. (2) Live on dealer = −1 dealer charge; live on you = −1 your charge. (3) Blank on yourself = take another turn. (4) Items (2 per round): peek, eject, skip dealer turn, double zap, +1 charge. (5) 3 rounds; charges carry over.
Win: Dealer charges 0 · Lose: Your charges 0
Controls: desktop Click target · click items · Space confirm · touch Tap target · tap items · Confirm (max 3 inputs)
HUD: You · Dealer · Round + pause
Hint: "Blank on yourself? Go again."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: dealer plays randomly · Normal: plays odds · Hard: plays odds and bluffs.
Style kit: unit = fuse size = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #17141F, Mid band #2B2533, Ground / play surface #352C45, Hero #A3E635, Accent / rewards #F97316
Assets: Dealer: 3U puppet with rounded jaw, top hat, glowing eyes (friendly-creepy); Fuse box: 2U rounded metal box with sparks; Fuses: 1U glass capsules (green live glow, grey blank); Items: 0.6U rounded tokens (magnifier, eject lever, clock, double plug, battery)
Background bands: dark room with a single hanging-lamp haze / shelves of jars in shadow / wooden table edge
Juice: Spark burst on live zaps; Lamp sway after each shot; Dealer laugh bob
Feed cards: 1) Title: A puppet dealer behind a sparking fuse box, title on a warning sign 2) ZAP!: Green lightning arcing toward the dealer 3) SURVIVED!: Lamp swinging, dealer slumped, your charges glowing
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:fuse-box-roulette:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
