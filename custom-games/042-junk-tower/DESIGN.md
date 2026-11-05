# 042 · Junk Tower

> **One tower. No checkpoints. Don't look down.**

`ARTHIS.space` · `Action & Platformers` · `Solo score-chase` · `3–8 min` · `ocean (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `junk-tower` → `src/offline-games/junk-tower.txt` |
| **Inspired by (mechanics only)** | Only Up! (vertical rage climb) |
| **Players** | Solo score-chase |
| **Session** | 3–8 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:junk-tower:best`, `arthis:junk-tower:settings` (try/catch) |

### Pitch
Climb a floating tower of everyday junk (pipes, cranes, sofas, auto-rickshaws) into the sky. One fall can send you right back.

### Why it can go viral
Agonising falls and triumphant summits are streamer gold.

### What makes it ours

- **Twist:** Wind gusts: telegraphed with flags, they push you mid-jump.
- **Rule we invented:** Height ghost: your best climb's ghost shows, so you race yourself.
- **What we cut from the reference:** Story: pure climb.

## 2 · Gameplay

### Core mechanic
Run and jump between floating objects; precise landings.

### Rules

1. No checkpoints.
2. Wind flags show the next gust direction.
3. Ledge grab saves near misses (0.2 s window).
4. Height meter + best line.
5. Reach the golden balloon at the top.

### Win / Lose
- **Win:** Touch the golden balloon
- **Lose:** (none): best height recorded

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · Space jump · Shift sprint | Joystick · Jump · Sprint |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Height · Best · Falls
- **Hint line (shown once, under 60 chars):** "Watch the flags. Mind the wind."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Height), **Play Again**

### Difficulty
Easy: soft respawn at each 50 m · Normal: no checkpoints · Hard: stronger wind.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Height | 300 m |
| Jump | 2.2U |
| Ledge grab | 0.2 s |
| Gust | every 6 s |

## 3 · Look and feel (style kit)

- **Scale unit:** climber = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/A9DCF0/A9DCF0.png) | Mid band | `#A9DCF0` |
| ![](https://placehold.co/28x28/FFFFFF/FFFFFF.png) | Ground / play surface | `#FFFFFF` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FF7B54/FF7B54.png) | Accent / rewards | `#FF7B54` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#A9DCF0"`

### Asset sheet (sizes in units)

- Climber: 1U, hoodie, backpack
- Junk: pipes, sofas, cranes, rickshaws, 2–8U, rounded
- Flags: 0.6U
- Balloon: 3U golden

### Background (three quiet hazed bands)

1. **Far:** sky haze
2. **Mid:** far clouds
3. **Near:** near cloud wisps

### Juice

- Landing dust
- Fall whoosh
- Best line flash
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **JUNK TOWER** | A tower of junk vanishing into clouds, title on a crane sign |
| 2 · Action | **CLIMB!** | Climber mid-jump between a sofa and a pipe |
| 3 · Win | **TOP!** | Climber holding the golden balloon above clouds |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/junk-tower.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/junk-tower.txt .shots/junk-tower --pause`, then open every PNG
- [ ] **Win path:** replay recorded inputs to reach the balloon
- [ ] **Lose path:** walk off the first platform
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Junk Tower  ·  slug: junk-tower
Brief: Solo score-chase · 3–8 min · palette family ocean (light) · 3D, three.js r128 from cdnjs
Pitch: Climb a floating tower of everyday junk (pipes, cranes, sofas, auto-rickshaws) into the sky. One fall can send you right back.
Core: Run and jump between floating objects; precise landings.
Rules: (1) No checkpoints. (2) Wind flags show the next gust direction. (3) Ledge grab saves near misses (0.2 s window). (4) Height meter + best line. (5) Reach the golden balloon at the top.
Win: Touch the golden balloon · Lose: (none): best height recorded
Controls: desktop WASD · Space jump · Shift sprint · touch Joystick · Jump · Sprint (max 3 inputs)
HUD: Height · Best · Falls + pause
Hint: "Watch the flags. Mind the wind."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: soft respawn at each 50 m · Normal: no checkpoints · Hard: stronger wind.
Style kit: unit = climber = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #A9DCF0, Ground / play surface #FFFFFF, Hero #2F80ED, Accent / rewards #FF7B54
Assets: Climber: 1U, hoodie, backpack; Junk: pipes, sofas, cranes, rickshaws, 2–8U, rounded; Flags: 0.6U; Balloon: 3U golden
Background bands: sky haze / far clouds / near cloud wisps
Juice: Landing dust; Fall whoosh; Best line flash
Feed cards: 1) Title: A tower of junk vanishing into clouds, title on a crane sign 2) CLIMB!: Climber mid-jump between a sofa and a pipe 3) TOP!: Climber holding the golden balloon above clouds
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:junk-tower:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
