# 034 · Runway Rumble

> **One theme. 60 seconds. Strike a pose.**

`ARTHIS.space` · `Idle, Cosy & Tycoon` · `vs CPU` · `3 min` · `candy (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `runway-rumble` → `src/offline-games/runway-rumble.txt` |
| **Inspired by (mechanics only)** | Dress to Impress (fashion contest) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `candy` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:runway-rumble:best`, `arthis:runway-rumble:settings` (try/catch) |

### Pitch
A fashion show vs 5 CPU stylists. A theme is announced (monsoon party, space prom, wedding guest). Style your model in 60 seconds, walk the runway and win the judges' stars.

### Why it can go viral
Funny and creative outfits; the runway walk is a ready-made clip.

### What makes it ours

- **Twist:** Theme tags: every clothing piece carries tags (rainy, sparkly, traditional, sporty), and judges score tag matches plus colour harmony.
- **Rule we invented:** Pose timing: hit the pose button when the spotlight peaks for bonus stars.
- **What we cut from the reference:** Avatar shops and multiplayer voting: CPU judges, 3 rounds.

## 2 · Gameplay

### Core mechanic
Pick pieces for 5 slots (top, bottom, shoes, accessory, colour palette) matching the theme.

### Rules

1. 60 s dressing time per round.
2. Score = theme tags matched + palette harmony + pose timing.
3. CPU stylists show their outfits too.
4. 3 rounds; total stars wins.
5. Unlock new pieces by winning rounds (saved locally).

### Win / Lose
- **Win:** Most stars after 3 rounds
- **Lose:** Not first after round 3

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Click pieces · Q colour palette · Space pose | Tap pieces · Palette · Pose |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Stars · Time · Round
- **Hint line (shown once, under 60 chars):** "Match the theme. Pose on the peak!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Stars), **Play Again**

### Difficulty
Easy: judges forgiving · Normal · Hard: CPU stylists are sharp and judges picky.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Dress time | 60 s |
| Slots | 5 |
| Pieces | 60 |
| Rounds | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** model height = 1U (stylised, big head)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE3EE/FFE3EE.png) | Far band (sky) | `#FFE3EE` |
| ![](https://placehold.co/28x28/F9C6E0/F9C6E0.png) | Mid band | `#F9C6E0` |
| ![](https://placehold.co/28x28/FFF6FA/FFF6FA.png) | Ground / play surface | `#FFF6FA` |
| ![](https://placehold.co/28x28/B5179E/B5179E.png) | Hero | `#B5179E` |
| ![](https://placehold.co/28x28/FFD36E/FFD36E.png) | Accent / rewards | `#FFD36E` |

Catalog colours: `bgColorLight: "#FFE3EE"`, `bgColorDark: "#F9C6E0"`

### Asset sheet (sizes in units)

- Models: 1U rounded doll-like figures, 4 skin tones
- Clothes: flat shapes with lighter top highlights
- Runway: rounded stage with spotlights
- Judges: 3 chunky characters with score paddles

### Background (three quiet hazed bands)

1. **Far:** pink stage haze
2. **Mid:** audience silhouettes
3. **Near:** runway edge lights

### Juice

- Outfit swap sparkle
- Spotlight sweep
- Stars fly into the score
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **RUNWAY RUMBLE** | A model on a sparkly runway, title in glitter letters |
| 2 · Action | **POSE!** | Model striking a pose in a spotlight |
| 3 · Win | **TOP MODEL!** | Trophy and confetti on the runway |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/runway-rumble.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/runway-rumble.txt .shots/runway-rumble --pause`, then open every PNG
- [ ] **Win path:** pick known best tags for each seeded theme
- [ ] **Lose path:** pick random mismatched items
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Runway Rumble  ·  slug: runway-rumble
Brief: vs CPU · 3 min · palette family candy (light) · 2D canvas
Pitch: A fashion show vs 5 CPU stylists. A theme is announced (monsoon party, space prom, wedding guest). Style your model in 60 seconds, walk the runway and win the judges' stars.
Core: Pick pieces for 5 slots (top, bottom, shoes, accessory, colour palette) matching the theme.
Rules: (1) 60 s dressing time per round. (2) Score = theme tags matched + palette harmony + pose timing. (3) CPU stylists show their outfits too. (4) 3 rounds; total stars wins. (5) Unlock new pieces by winning rounds (saved locally).
Win: Most stars after 3 rounds · Lose: Not first after round 3
Controls: desktop Click pieces · Q colour palette · Space pose · touch Tap pieces · Palette · Pose (max 3 inputs)
HUD: Stars · Time · Round + pause
Hint: "Match the theme. Pose on the peak!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: judges forgiving · Normal · Hard: CPU stylists are sharp and judges picky.
Style kit: unit = model height = 1U (stylised, big head); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE3EE, Mid band #F9C6E0, Ground / play surface #FFF6FA, Hero #B5179E, Accent / rewards #FFD36E
Assets: Models: 1U rounded doll-like figures, 4 skin tones; Clothes: flat shapes with lighter top highlights; Runway: rounded stage with spotlights; Judges: 3 chunky characters with score paddles
Background bands: pink stage haze / audience silhouettes / runway edge lights
Juice: Outfit swap sparkle; Spotlight sweep; Stars fly into the score
Feed cards: 1) Title: A model on a sparkly runway, title in glitter letters 2) POSE!: Model striking a pose in a spotlight 3) TOP MODEL!: Trophy and confetti on the runway
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:runway-rumble:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
