# 056 · Dodge Dynasty

> **Catch it. Throw it. Throw your friend.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU | 2 Players (local)` · `2 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `dodge-dynasty` → `src/offline-games/dodge-dynasty.txt` |
| **Inspired by (mechanics only)** | Knockout City (dodgeball brawler) |
| **Players** | vs CPU | 2 Players (local) |
| **Session** | 2 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:dodge-dynasty:best`, `arthis:dodge-dynasty:settings` (try/catch) |

### Pitch
3v3 dodgeball on rooftops. Throw, catch with timing, pass to power up, or curl into a ball for a teammate to throw.

### Why it can go viral
Last-second catches and team throws.

### What makes it ours

- **Twist:** Curl-up: become the ball for a teammate.
- **Rule we invented:** Moon ball: low-gravity ball spawns mid-match.
- **What we cut from the reference:** Online: CPU or local.

## 2 · Gameplay

### Core mechanic
Catch on the flash, throw to KO.

### Rules

1. 3v3 on a rooftop; 2 hits = KO.
2. Catch window 200 ms when a ball is about to hit you.
3. Passing to a teammate charges the next throw's speed.
4. Curl into a ball and let a teammate throw you as a super shot.
5. First team to 10 KOs wins.

### Win / Lose
- **Win:** 10 KOs first
- **Lose:** Enemy gets 10

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J throw · K catch | Stick · Throw · Catch |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** KOs · Power · Time
- **Hint line (shown once, under 60 chars):** "Catch on the flash. Pass to charge!"
- **Pause sheet:** Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard
- **End sheet:** result, best (KOs), **Play Again**

### Difficulty
Easy: slow throws · Normal · Hard: fake throws.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| KO goal | 10 |
| Catch window | 200 ms |
| Hits to KO | 2 |
| Moon ball spawn | every 30 s |

## 3 · Look and feel (style kit)

- **Scale unit:** player = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/FFD0B0/FFD0B0.png) | Mid band | `#FFD0B0` |
| ![](https://placehold.co/28x28/F7E1CF/F7E1CF.png) | Ground / play surface | `#F7E1CF` |
| ![](https://placehold.co/28x28/F67E7D/F67E7D.png) | Hero | `#F67E7D` |
| ![](https://placehold.co/28x28/2EC4B6/2EC4B6.png) | Accent / rewards | `#2EC4B6` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#FFD0B0"`

### Asset sheet (sizes in units)

- Players: 1U sporty kids with headbands
- Balls: 0.4U rubber balls; moon ball 0.5U
- Rooftop: rounded water tanks and chimneys
- Edges: soft railings

### Background (three quiet hazed bands)

1. **Far:** sunset sky
2. **Mid:** city skyline
3. **Near:** rooftop floor

### Juice

- Catch freeze-frame
- Throw speed trail
- KO pop with stars
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **DODGE DYNASTY** | Teams on a rooftop with dodgeballs, title on a water tank |
| 2 · Action | **CATCH!** | A perfect catch freeze-frame |
| 3 · Win | **KNOCKOUT!** | Team cheering with balls in the air |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/dodge-dynasty.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/dodge-dynasty.txt .shots/dodge-dynasty --pause`, then open every PNG
- [ ] **Win path:** scripted catch + throw vs Easy
- [ ] **Lose path:** never catch
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Dodge Dynasty  ·  slug: dodge-dynasty
Brief: vs CPU | 2 Players (local) · 2 min · palette family peach (light) · 2D canvas
Pitch: 3v3 dodgeball on rooftops. Throw, catch with timing, pass to power up, or curl into a ball for a teammate to throw.
Core: Catch on the flash, throw to KO.
Rules: (1) 3v3 on a rooftop; 2 hits = KO. (2) Catch window 200 ms when a ball is about to hit you. (3) Passing to a teammate charges the next throw's speed. (4) Curl into a ball and let a teammate throw you as a super shot. (5) First team to 10 KOs wins.
Win: 10 KOs first · Lose: Enemy gets 10
Controls: desktop WASD · J throw · K catch · touch Stick · Throw · Catch (max 3 inputs)
HUD: KOs · Power · Time + pause
Hint: "Catch on the flash. Pass to charge!"
Pause sheet: Resume · Restart · vs CPU | 2 Players · Easy | Normal | Hard. Difficulty changes: Easy: slow throws · Normal · Hard: fake throws.
Style kit: unit = player = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #FFD0B0, Ground / play surface #F7E1CF, Hero #F67E7D, Accent / rewards #2EC4B6
Assets: Players: 1U sporty kids with headbands; Balls: 0.4U rubber balls; moon ball 0.5U; Rooftop: rounded water tanks and chimneys; Edges: soft railings
Background bands: sunset sky / city skyline / rooftop floor
Juice: Catch freeze-frame; Throw speed trail; KO pop with stars
Feed cards: 1) Title: Teams on a rooftop with dodgeballs, title on a water tank 2) CATCH!: A perfect catch freeze-frame 3) KNOCKOUT!: Team cheering with balls in the air
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:dodge-dynasty:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
