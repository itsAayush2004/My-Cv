# 046 · Seven Decades

> **Every loss ages you. Win before 70.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `3 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `seven-decades` → `src/offline-games/seven-decades.txt` |
| **Inspired by (mechanics only)** | Sifu (aging kung fu brawler) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:seven-decades:best`, `arthis:seven-decades:settings` (try/catch) |

### Pitch
A young martial artist climbs a dojo tower. Each defeat ages you and makes you stronger but frailer. Beat the master before you turn 70.

### Why it can go viral
Players compare the age they finished at ('beat it at 34!'), which naturally creates a skill ladder to share.

### What makes it ours

- **Twist:** Age is your health bar for the whole run: defeat makes you older, stronger and frailer.
- **Rule we invented:** Wisdom moves unlock with age: at 40 a counter-throw, at 60 a palm-wave that knocks back a crowd.
- **What we cut from the reference:** Long levels and skill trees: 4 compact floors and age-based unlocks.

## 2 · Gameplay

### Core mechanic
Fight waves with punch, parry, dodge; break structure for takedowns.

### Rules

1. Each defeat adds years (2, then 4, 6, 8…).
2. Every decade gives +10% damage and −10% max HP.
3. Fill an enemy's structure meter with hits and parries for a takedown.
4. Each floor ends with a boss; beating a boss without dying lowers the death counter by 1.
5. Turning 70 ends the run.

### Win / Lose
- **Win:** Defeat the master
- **Lose:** Reach age 70

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Arrows · J punch · K parry/dodge | Stick · Punch · Parry |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Age · Floor
- **Hint line (shown once, under 60 chars):** "Defeat ages you. Fight smart."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: +1 year per defeat · Normal: +2, then grows · Hard: enemies parry and feint.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Start age | 20 |
| Floors | 4 |
| Parry window | 180 ms |
| Structure meter | 100 |

## 3 · Look and feel (style kit)

- **Scale unit:** fighter = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/F2C6A8/F2C6A8.png) | Mid band | `#F2C6A8` |
| ![](https://placehold.co/28x28/E9D2B8/E9D2B8.png) | Ground / play surface | `#E9D2B8` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/F67E7D/F67E7D.png) | Accent / rewards | `#F67E7D` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#F2C6A8"`

### Asset sheet (sizes in units)

- Fighter: 1U martial artist whose hair turns grey with each decade, sash trail
- Thugs: 1U rounded street fighters; brutes 1.2U with padded vests
- Master: 1.2U calm elder in a robe
- Dojo props: rounded bamboo, paper lanterns, tatami mats
- Tea shrine: 0.8U low table with a steaming cup

### Background (three quiet hazed bands)

1. **Far:** sunset haze over a valley
2. **Mid:** dojo rooftops with curled eaves
3. **Near:** polished wooden floor

### Juice

- Age counter ticks up with a bell
- Takedowns trigger slow motion
- Parry sparks and a short hit-stop
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SEVEN DECADES** | A young fighter at the foot of a tall dojo tower at sunset, title in brushstroke |
| 2 · Action | **PARRY!** | Fighter deflecting a kick in a burst of sparks |
| 3 · Win | **MASTERED!** | A grey-haired fighter bowing to the master |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/seven-decades.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/seven-decades.txt .shots/seven-decades --pause`, then open every PNG
- [ ] **Win path:** perfect-parry script through all 4 floors
- [ ] **Lose path:** stand still until age 70
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Seven Decades  ·  slug: seven-decades
Brief: Solo score-chase · 3 min · palette family peach (light) · 2D canvas
Pitch: A young martial artist climbs a dojo tower. Each defeat ages you and makes you stronger but frailer. Beat the master before you turn 70.
Core: Fight waves with punch, parry, dodge; break structure for takedowns.
Rules: (1) Each defeat adds years (2, then 4, 6, 8…). (2) Every decade gives +10% damage and −10% max HP. (3) Fill an enemy's structure meter with hits and parries for a takedown. (4) Each floor ends with a boss; beating a boss without dying lowers the death counter by 1. (5) Turning 70 ends the run.
Win: Defeat the master · Lose: Reach age 70
Controls: desktop Arrows · J punch · K parry/dodge · touch Stick · Punch · Parry (max 3 inputs)
HUD: HP · Age · Floor + pause
Hint: "Defeat ages you. Fight smart."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: +1 year per defeat · Normal: +2, then grows · Hard: enemies parry and feint.
Style kit: unit = fighter = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #F2C6A8, Ground / play surface #E9D2B8, Hero #843B62, Accent / rewards #F67E7D
Assets: Fighter: 1U martial artist whose hair turns grey with each decade, sash trail; Thugs: 1U rounded street fighters; brutes 1.2U with padded vests; Master: 1.2U calm elder in a robe; Dojo props: rounded bamboo, paper lanterns, tatami mats; Tea shrine: 0.8U low table with a steaming cup
Background bands: sunset haze over a valley / dojo rooftops with curled eaves / polished wooden floor
Juice: Age counter ticks up with a bell; Takedowns trigger slow motion; Parry sparks and a short hit-stop
Feed cards: 1) Title: A young fighter at the foot of a tall dojo tower at sunset, title in brushstroke 2) PARRY!: Fighter deflecting a kick in a burst of sparks 3) MASTERED!: A grey-haired fighter bowing to the master
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:seven-decades:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
