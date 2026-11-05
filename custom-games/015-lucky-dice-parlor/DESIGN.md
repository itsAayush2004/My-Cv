# 015 · Lucky Dice Parlor

> **Roll. Keep. Multiply. Repeat.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `5 min` · `arcade (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `lucky-dice-parlor` → `src/offline-games/lucky-dice-parlor.txt` |
| **Inspired by (mechanics only)** | Balatro (poker roguelike scoring) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `arcade` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:lucky-dice-parlor:best`, `arthis:lucky-dice-parlor:settings` (try/catch) |

### Pitch
A neon dice parlor where you roll 5 dice, keep the best and reroll twice, then score combos as chips × mult. Collect charm tiles that break the maths in delightful ways.

### Why it can go viral
The 'number goes crazy' moment, when a hand scores 2 million because three charms chain, is irresistible to share.

### What makes it ours

- **Twist:** Dice faces can be upgraded: enchant a die so its 6 counts as two 6s, or its 1 turns golden for money.
- **Rule we invented:** Hot dice: rolling the same face on all 5 dice triggers a bonus round with doubled mult.
- **What we cut from the reference:** Poker cards and big content lists: 5 dice, 20 charms, 8 antes.

## 2 · Gameplay

### Core mechanic
Roll 5 dice, keep any, reroll up to twice, then score the hand vs a target.

### Rules

1. Hands: pair, two pair, three, straight, full house, four, five-of-a-kind; each has base chips × mult.
2. 3 hands per round to beat the target.
3. Between rounds, buy up to 5 charm tiles with coins earned this run (e.g., +3 mult per even die, ×2 if the hand has a 1).
4. Every 3rd round is a boss with a rule (6s count as 0).
5. 8 antes; target grows each ante.

### Win / Lose
- **Win:** Clear ante 8
- **Lose:** Fail to reach a round's target

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click dice to keep · Space roll · Enter score | Tap dice · Roll · Score |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Score · Target · Rolls
- **Hint line (shown once, under 60 chars):** "Keep dice. Build big multipliers!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Score), **Play Again**

### Difficulty
Easy: targets ×0.8 · Normal · Hard: ×1.3 and bosses every 2nd round.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Hands per round | 3 |
| Rerolls | 2 |
| Charm slots | 5 |
| Ante target growth | ×1.6 |

## 3 · Look and feel (style kit)

- **Scale unit:** die size = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/1A0B2E/1A0B2E.png) | Far band (sky) | `#1A0B2E` |
| ![](https://placehold.co/28x28/3D1A6E/3D1A6E.png) | Mid band | `#3D1A6E` |
| ![](https://placehold.co/28x28/2B6E4F/2B6E4F.png) | Ground / play surface | `#2B6E4F` |
| ![](https://placehold.co/28x28/FFE66D/FFE66D.png) | Hero | `#FFE66D` |
| ![](https://placehold.co/28x28/FF3CAC/FF3CAC.png) | Accent / rewards | `#FF3CAC` |

Catalog colours: `bgColorLight: "#1A0B2E"`, `bgColorDark: "#3D1A6E"`

### Asset sheet (sizes in units)

- Dice: 1U rounded cubes, pip dots, lighter top face
- Charm tiles: 1.2U rounded cards with simple symbol shapes
- Table felt: rounded green slab
- Score meter: pill-shaped chips × mult display

### Background (three quiet hazed bands)

1. **Far:** dark violet parlor with neon haze
2. **Mid:** blurred slot machines and signs
3. **Near:** felt table edge

### Juice

- Dice tumble and bounce
- Chips × mult numbers slam and shake
- Charm glows when it triggers, in order
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LUCKY DICE PARLOR** | Five glowing dice on neon felt, title as a parlor sign |
| 2 · Action | **×MULT!** | Dice exploding into a giant multiplier number |
| 3 · Win | **JACKPOT!** | Coins and charm tiles raining over the table |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/lucky-dice-parlor.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/lucky-dice-parlor.txt .shots/lucky-dice-parlor --pause`, then open every PNG
- [ ] **Win path:** seeded rolls and fixed charm purchases that clear ante 8
- [ ] **Lose path:** score only 'high die' hands
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Lucky Dice Parlor  ·  slug: lucky-dice-parlor
Brief: Solo score-chase · 5 min · palette family arcade (dark) · 2D canvas
Pitch: A neon dice parlor where you roll 5 dice, keep the best and reroll twice, then score combos as chips × mult. Collect charm tiles that break the maths in delightful ways.
Core: Roll 5 dice, keep any, reroll up to twice, then score the hand vs a target.
Rules: (1) Hands: pair, two pair, three, straight, full house, four, five-of-a-kind; each has base chips × mult. (2) 3 hands per round to beat the target. (3) Between rounds, buy up to 5 charm tiles with coins earned this run (e.g., +3 mult per even die, ×2 if the hand has a 1). (4) Every 3rd round is a boss with a rule (6s count as 0). (5) 8 antes; target grows each ante.
Win: Clear ante 8 · Lose: Fail to reach a round's target
Controls: desktop Click dice to keep · Space roll · Enter score · touch Tap dice · Roll · Score (max 3 inputs)
HUD: Score · Target · Rolls + pause
Hint: "Keep dice. Build big multipliers!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: targets ×0.8 · Normal · Hard: ×1.3 and bosses every 2nd round.
Style kit: unit = die size = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1A0B2E, Mid band #3D1A6E, Ground / play surface #2B6E4F, Hero #FFE66D, Accent / rewards #FF3CAC
Assets: Dice: 1U rounded cubes, pip dots, lighter top face; Charm tiles: 1.2U rounded cards with simple symbol shapes; Table felt: rounded green slab; Score meter: pill-shaped chips × mult display
Background bands: dark violet parlor with neon haze / blurred slot machines and signs / felt table edge
Juice: Dice tumble and bounce; Chips × mult numbers slam and shake; Charm glows when it triggers, in order
Feed cards: 1) Title: Five glowing dice on neon felt, title as a parlor sign 2) ×MULT!: Dice exploding into a giant multiplier number 3) JACKPOT!: Coins and charm tiles raining over the table
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:lucky-dice-parlor:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
