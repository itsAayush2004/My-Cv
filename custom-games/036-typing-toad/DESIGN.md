# 036 · Typing Toad

> **Every key you press, he slaps.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `Solo score-chase` · `endless` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `typing-toad` → `src/offline-games/typing-toad.txt` |
| **Inspired by (mechanics only)** | Bongo Cat (idle desk pet) |
| **Players** | Solo score-chase |
| **Session** | endless |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:typing-toad:best`, `arthis:typing-toad:settings` (try/catch) |

### Pitch
A chubby toad sits on the edge of your screen and slaps a tiny drum with every key or tap. Every 100 slaps opens a chest with hats and outfits.

### Why it can go viral
Wholesome idle companion; rare hats get shown off.

### What makes it ours

- **Twist:** Rhythm streak: tapping in a steady rhythm builds a croak combo that fills chests faster.
- **Rule we invented:** Fly snack: a fly occasionally buzzes by; tap it for a bonus chest.
- **What we cut from the reference:** Steam trading: local collection only.

## 2 · Gameplay

### Core mechanic
Tap or press any key; the toad drums; points fill chests.

### Rules

1. Each tap = 1 point; rhythm streak ×2.
2. 100 points = chest with a random cosmetic (common to legendary).
3. Equip from the pause sheet wardrobe.
4. Fly bonus every 2–4 minutes.

### Win / Lose
- **Win:** (idle) collection milestones
- **Lose:** none

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Any key · Space · click | Tap anywhere |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Taps · Hats · Chest %
- **Hint line (shown once, under 60 chars):** "Every tap counts!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Taps), **Play Again**

### Difficulty
n/a (pause sheet has wardrobe instead).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Chest | 100 points |
| Cosmetics | 40 |
| Fly interval | 2–4 min |

## 3 · Look and feel (style kit)

- **Scale unit:** toad = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/E9F7E1/E9F7E1.png) | Far band (sky) | `#E9F7E1` |
| ![](https://placehold.co/28x28/BFE6A8/BFE6A8.png) | Mid band | `#BFE6A8` |
| ![](https://placehold.co/28x28/FFFFFF/FFFFFF.png) | Ground / play surface | `#FFFFFF` |
| ![](https://placehold.co/28x28/5FAD56/5FAD56.png) | Hero | `#5FAD56` |
| ![](https://placehold.co/28x28/FFB347/FFB347.png) | Accent / rewards | `#FFB347` |

Catalog colours: `bgColorLight: "#E9F7E1"`, `bgColorDark: "#BFE6A8"`

### Asset sheet (sizes in units)

- Toad: 1U round, big eyes, drum parented to hands
- Hats: 0.4U rounded (crown, cap, flower, chef)
- Chest: 0.6U rounded

### Background (three quiet hazed bands)

1. **Far:** soft green haze
2. **Mid:** lily pads
3. **Near:** drum stand

### Juice

- Drum squash per tap
- Croak bubble
- Chest burst
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **TYPING TOAD** | A toad drumming on a lily pad, title on a drum |
| 2 · Action | **CROAK!** | Toad mid-slap with a combo number |
| 3 · Win | **NEW HAT!** | Toad wearing a golden crown |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/typing-toad.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/typing-toad.txt .shots/typing-toad --pause`, then open every PNG
- [ ] **Win path:** simulate 100 taps and verify chest
- [ ] **Lose path:** n/a
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Typing Toad  ·  slug: typing-toad
Brief: Solo score-chase · endless · palette family meadow (light) · 2D canvas
Pitch: A chubby toad sits on the edge of your screen and slaps a tiny drum with every key or tap. Every 100 slaps opens a chest with hats and outfits.
Core: Tap or press any key; the toad drums; points fill chests.
Rules: (1) Each tap = 1 point; rhythm streak ×2. (2) 100 points = chest with a random cosmetic (common to legendary). (3) Equip from the pause sheet wardrobe. (4) Fly bonus every 2–4 minutes.
Win: (idle) collection milestones · Lose: none
Controls: desktop Any key · Space · click · touch Tap anywhere (max 3 inputs)
HUD: Taps · Hats · Chest % + pause
Hint: "Every tap counts!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: n/a (pause sheet has wardrobe instead).
Style kit: unit = toad = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #E9F7E1, Mid band #BFE6A8, Ground / play surface #FFFFFF, Hero #5FAD56, Accent / rewards #FFB347
Assets: Toad: 1U round, big eyes, drum parented to hands; Hats: 0.4U rounded (crown, cap, flower, chef); Chest: 0.6U rounded
Background bands: soft green haze / lily pads / drum stand
Juice: Drum squash per tap; Croak bubble; Chest burst
Feed cards: 1) Title: A toad drumming on a lily pad, title on a drum 2) CROAK!: Toad mid-slap with a combo number 3) NEW HAT!: Toad wearing a golden crown
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:typing-toad:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
