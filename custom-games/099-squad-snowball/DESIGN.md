# 099 · Squad Snowball

> **Grow your squad. Steal gems.**

`ARTHIS.space` · `Racing, Physics & Crowd` · `vs CPU` · `3 min` · `snow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `squad-snowball` → `src/offline-games/squad-snowball.txt` |
| **Inspired by (mechanics only)** | Squad Busters (squad collector battle) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `snow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:squad-snowball:best`, `arthis:squad-snowball:settings` (try/catch) |

### Pitch
Walk around a snowy arena opening chests for characters who join your growing squad. Merge 3 of the same into a super version and battle CPU squads for gems.

### Why it can go viral
Chaotic squad battles.

### What makes it ours

- **Twist:** Merge 3 same.
- **Rule we invented:** Snowball cannon.
- **What we cut from the reference:** Online: CPU.

## 2 · Gameplay

### Core mechanic
Collect, merge, fight.

### Rules

1. Chests give characters.
2. Merge 3 of the same into a super version.
3. Gems from fights.
4. 3-minute match.
5. Most gems wins.

### Win / Lose
- **Win:** Most gems
- **Lose:** Fewer gems

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · E open · Space cannon | Stick · Open · Cannon |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Gems · Squad · Time
- **Hint line (shown once, under 60 chars):** "Grow your squad. Steal gems!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Gems), **Play Again**

### Difficulty
Easy: small CPU squads · Normal · Hard: CPU merges fast.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Match | 180 s |

## 3 · Look and feel (style kit)

- **Scale unit:** unit = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/EEF6FF/EEF6FF.png) | Far band (sky) | `#EEF6FF` |
| ![](https://placehold.co/28x28/CFE0F0/CFE0F0.png) | Mid band | `#CFE0F0` |
| ![](https://placehold.co/28x28/E8EEF4/E8EEF4.png) | Ground / play surface | `#E8EEF4` |
| ![](https://placehold.co/28x28/5B8DEF/5B8DEF.png) | Hero | `#5B8DEF` |
| ![](https://placehold.co/28x28/FF6B6B/FF6B6B.png) | Accent / rewards | `#FF6B6B` |

Catalog colours: `bgColorLight: "#EEF6FF"`, `bgColorDark: "#CFE0F0"`

### Asset sheet (sizes in units)

- Characters: 0.8U
- Chests: 0.6U
- Snow arena

### Background (three quiet hazed bands)

1. **Far:** sky
2. **Mid:** mountains
3. **Near:** snow

### Juice

- Merge pop
- Gem burst
- Snow puff
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SQUAD SNOWBALL** | A growing squad crossing a snowy arena, title on an ice sign |
| 2 · Action | **MERGE!** | Three characters merging in a flash |
| 3 · Win | **SQUAD BOSS!** | Your squad on a mountain of gems |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/squad-snowball.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/squad-snowball.txt .shots/squad-snowball --pause`, then open every PNG
- [ ] **Win path:** scripted chest route and fights to most gems
- [ ] **Lose path:** stand idle
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Squad Snowball  ·  slug: squad-snowball
Brief: vs CPU · 3 min · palette family snow (light) · 2D canvas
Pitch: Walk around a snowy arena opening chests for characters who join your growing squad. Merge 3 of the same into a super version and battle CPU squads for gems.
Core: Collect, merge, fight.
Rules: (1) Chests give characters. (2) Merge 3 of the same into a super version. (3) Gems from fights. (4) 3-minute match. (5) Most gems wins.
Win: Most gems · Lose: Fewer gems
Controls: desktop WASD · E open · Space cannon · touch Stick · Open · Cannon (max 3 inputs)
HUD: Gems · Squad · Time + pause
Hint: "Grow your squad. Steal gems!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: small CPU squads · Normal · Hard: CPU merges fast.
Style kit: unit = unit = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #EEF6FF, Mid band #CFE0F0, Ground / play surface #E8EEF4, Hero #5B8DEF, Accent / rewards #FF6B6B
Assets: Characters: 0.8U; Chests: 0.6U; Snow arena
Background bands: sky / mountains / snow
Juice: Merge pop; Gem burst; Snow puff
Feed cards: 1) Title: A growing squad crossing a snowy arena, title on an ice sign 2) MERGE!: Three characters merging in a flash 3) SQUAD BOSS!: Your squad on a mountain of gems
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:squad-snowball:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
