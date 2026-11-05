# 055 · Myth Squad

> **Six heroes. One payload. Big ultimates.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `3 min` · `ocean (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `myth-squad` → `src/offline-games/myth-squad.txt` |
| **Inspired by (mechanics only)** | Overwatch / Marvel Rivals (hero shooter) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `ocean` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:myth-squad:best`, `arthis:myth-squad:settings` (try/catch) |

### Pitch
Top-down 3v3 hero brawl vs CPU. Pick one of 4 mythic heroes (tank, blaster, healer, ninja) from the pause sheet and push a payload.

### Why it can go viral
Ultimates and team-ups are flashy.

### What makes it ours

- **Twist:** Team-up: if a healer is near the tank, the tank's shield grows.
- **Rule we invented:** Map hazard: a sacred bell that stuns everyone nearby when rung.
- **What we cut from the reference:** Big roster: 4 heroes.

## 2 · Gameplay

### Core mechanic
Escort the payload by staying near it; abilities charge the ultimate.

### Rules

1. Payload moves only when attackers are near and no defenders contest it.
2. Heroes: tank (shield), blaster (burst), healer (beam), ninja (dash).
3. Ultimates charge by dealing damage or healing.
4. Respawn 4 s; checkpoint at 50% adds 60 s.
5. Healer next to the tank grows the tank's shield.

### Win / Lose
- **Win:** Payload delivered
- **Lose:** Timer runs out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse attack · Q ability (E ult) | Twin stick · Ability |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Payload · Ult · Time
- **Hint line (shown once, under 60 chars):** "Stay on the cart. Charge your ult."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Payload), **Play Again**

### Difficulty
Easy: weak CPU · Normal · Hard: CPU focuses healer.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Heroes | 4 |
| Respawn | 4 s |
| Payload speed | 1 U/s |
| Match | 180 s |

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
| ![](https://placehold.co/28x28/D7F3FF/D7F3FF.png) | Far band (sky) | `#D7F3FF` |
| ![](https://placehold.co/28x28/A6DCF2/A6DCF2.png) | Mid band | `#A6DCF2` |
| ![](https://placehold.co/28x28/E9F1F7/E9F1F7.png) | Ground / play surface | `#E9F1F7` |
| ![](https://placehold.co/28x28/2F80ED/2F80ED.png) | Hero | `#2F80ED` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Accent / rewards | `#FFB703` |

Catalog colours: `bgColorLight: "#D7F3FF"`, `bgColorDark: "#A6DCF2"`

### Asset sheet (sizes in units)

- Heroes: 1U chunky silhouettes with clear role colours
- Payload: 2U rounded cart with a glowing relic
- Map: rounded temple ruins and bridges
- Sacred bell: 1U

### Background (three quiet hazed bands)

1. **Far:** clear sky
2. **Mid:** temple silhouettes
3. **Near:** stone road

### Juice

- Ultimate camera zoom
- Checkpoint bell ring
- Hit numbers pop
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **MYTH SQUAD** | Four heroes around a payload, title on a banner |
| 2 · Action | **ULT!** | A hero unleashing a giant wave |
| 3 · Win | **DELIVERED!** | Team celebrating at the gate |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/myth-squad.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/myth-squad.txt .shots/myth-squad --pause`, then open every PNG
- [ ] **Win path:** stay near payload with damage script vs Easy
- [ ] **Lose path:** stay away from payload
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Myth Squad  ·  slug: myth-squad
Brief: vs CPU · 3 min · palette family ocean (light) · 2D canvas
Pitch: Top-down 3v3 hero brawl vs CPU. Pick one of 4 mythic heroes (tank, blaster, healer, ninja) from the pause sheet and push a payload.
Core: Escort the payload by staying near it; abilities charge the ultimate.
Rules: (1) Payload moves only when attackers are near and no defenders contest it. (2) Heroes: tank (shield), blaster (burst), healer (beam), ninja (dash). (3) Ultimates charge by dealing damage or healing. (4) Respawn 4 s; checkpoint at 50% adds 60 s. (5) Healer next to the tank grows the tank's shield.
Win: Payload delivered · Lose: Timer runs out
Controls: desktop WASD · mouse attack · Q ability (E ult) · touch Twin stick · Ability (max 3 inputs)
HUD: Payload · Ult · Time + pause
Hint: "Stay on the cart. Charge your ult."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: weak CPU · Normal · Hard: CPU focuses healer.
Style kit: unit = hero = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #D7F3FF, Mid band #A6DCF2, Ground / play surface #E9F1F7, Hero #2F80ED, Accent / rewards #FFB703
Assets: Heroes: 1U chunky silhouettes with clear role colours; Payload: 2U rounded cart with a glowing relic; Map: rounded temple ruins and bridges; Sacred bell: 1U
Background bands: clear sky / temple silhouettes / stone road
Juice: Ultimate camera zoom; Checkpoint bell ring; Hit numbers pop
Feed cards: 1) Title: Four heroes around a payload, title on a banner 2) ULT!: A hero unleashing a giant wave 3) DELIVERED!: Team celebrating at the gate
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:myth-squad:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
