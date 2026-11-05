# 045 · Bassline Brawler

> **Hit on the beat. The world grooves.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `2 min` · `arcade (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `bassline-brawler` → `src/offline-games/bassline-brawler.txt` |
| **Inspired by (mechanics only)** | Hi-Fi Rush (rhythm action) |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `arcade` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:bassline-brawler:best`, `arthis:bassline-brawler:settings` (try/catch) |

### Pitch
A guitar-armed brawler fights robots in a city that pulses to the music. On-beat hits do double damage and extend combos.

### Why it can go viral
Rhythm combat looks amazing in clips.

### What makes it ours

- **Twist:** Beat cat: a little cat bobs to the beat so players who can't hear well still feel the rhythm.
- **Rule we invented:** Encore: a perfect 8-hit combo triggers a cinematic finisher.
- **What we cut from the reference:** Big campaign: one track, one boss.

## 2 · Gameplay

### Core mechanic
Attack on beat for ×2; dodge on beat for counters.

### Rules

1. Beat window ±90 ms.
2. On-beat light/heavy chain combos.
3. Boss parry phase: press in rhythm.
4. Rank by combo and accuracy.
5. Track 120 BPM.

### Win / Lose
- **Win:** Beat the boss track
- **Lose:** HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| J light · K heavy · Space dodge | Light · Heavy · Dodge |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Combo · Rank
- **Hint line (shown once, under 60 chars):** "Hit on the beat!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: 100 BPM ±120 ms · Normal 120 ±90 · Hard 140 ±70.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| BPM | 120 |
| Window | ±90 ms |
| Boss notes | 32 |

## 3 · Look and feel (style kit)

- **Scale unit:** brawler = 1U
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
| ![](https://placehold.co/28x28/2C1B4E/2C1B4E.png) | Ground / play surface | `#2C1B4E` |
| ![](https://placehold.co/28x28/2BD2FF/2BD2FF.png) | Hero | `#2BD2FF` |
| ![](https://placehold.co/28x28/FF3CAC/FF3CAC.png) | Accent / rewards | `#FF3CAC` |

Catalog colours: `bgColorLight: "#1A0B2E"`, `bgColorDark: "#3D1A6E"`

### Asset sheet (sizes in units)

- Brawler: 1U, guitar parented to hands
- Robots: 1U rounded
- Boss: 4U DJ robot
- Beat cat: 0.4U

### Background (three quiet hazed bands)

1. **Far:** neon sky
2. **Mid:** pulsing skyline
3. **Near:** stage floor

### Juice

- Everything bounces on beat
- Combo text pops
- Speaker bass ripple
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **BASSLINE BRAWLER** | A guitar hero on a neon street, title as a neon sign |
| 2 · Action | **ON BEAT!** | Hero smashing a robot with sound waves |
| 3 · Win | **S RANK!** | Hero mid-guitar-solo with confetti |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/bassline-brawler.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/bassline-brawler.txt .shots/bassline-brawler --pause`, then open every PNG
- [ ] **Win path:** scripted on-beat inputs to win
- [ ] **Lose path:** miss every beat
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Bassline Brawler  ·  slug: bassline-brawler
Brief: Solo score-chase · 2 min · palette family arcade (dark) · 2D canvas
Pitch: A guitar-armed brawler fights robots in a city that pulses to the music. On-beat hits do double damage and extend combos.
Core: Attack on beat for ×2; dodge on beat for counters.
Rules: (1) Beat window ±90 ms. (2) On-beat light/heavy chain combos. (3) Boss parry phase: press in rhythm. (4) Rank by combo and accuracy. (5) Track 120 BPM.
Win: Beat the boss track · Lose: HP 0
Controls: desktop J light · K heavy · Space dodge · touch Light · Heavy · Dodge (max 3 inputs)
HUD: HP · Combo · Rank + pause
Hint: "Hit on the beat!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 100 BPM ±120 ms · Normal 120 ±90 · Hard 140 ±70.
Style kit: unit = brawler = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1A0B2E, Mid band #3D1A6E, Ground / play surface #2C1B4E, Hero #2BD2FF, Accent / rewards #FF3CAC
Assets: Brawler: 1U, guitar parented to hands; Robots: 1U rounded; Boss: 4U DJ robot; Beat cat: 0.4U
Background bands: neon sky / pulsing skyline / stage floor
Juice: Everything bounces on beat; Combo text pops; Speaker bass ripple
Feed cards: 1) Title: A guitar hero on a neon street, title as a neon sign 2) ON BEAT!: Hero smashing a robot with sound waves 3) S RANK!: Hero mid-guitar-solo with confetti
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:bassline-brawler:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
