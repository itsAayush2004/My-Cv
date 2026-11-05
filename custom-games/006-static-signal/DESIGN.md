# 006 · Static Signal

> **Tune in. Something tunes back.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `3–4 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `static-signal` → `src/offline-games/static-signal.txt` |
| **Inspired by (mechanics only)** | Phasmophobia (ghost investigation) |
| **Players** | Solo score-chase |
| **Session** | 3–4 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:static-signal:best`, `arthis:static-signal:settings` (try/catch) |

### Pitch
You're the host of a late-night radio show investigating a haunted farmhouse. Use 3 radio-gadget tools to find 3 clues, name the spirit live on air, and get out before your nerve runs out.

### Why it can go viral
Players share the 'logbook' moment (three ticks, one answer), and the spirit's radio reply sound is creepy enough to clip.

### What makes it ours

- **Twist:** Listeners call in with hints. True calls play a station jingle and fake calls come from the spirit, so you learn to trust the jingle.
- **Rule we invented:** Nerve tea: sitting at the van for 3 s restores nerve but costs 15 s of time.
- **What we cut from the reference:** Co-op voice, 12 locations and gear shop: one farmhouse with 6 rooms, 8 spirit types, 3 tools.

## 2 · Gameplay

### Core mechanic
Sweep rooms with tools, read their meters, tick clues in the logbook and name the spirit.

### Rules

1. Each spirit leaves exactly 3 of 6 clues: cold spot, EMF 5, radio reply, glowing prints, floating orb, writing.
2. Tools: thermometer, EMF dial, spirit radio (cycle with Q).
3. Nerve drains in dark rooms; at 30% the spirit can hunt (lights flicker, hide or flee to the van).
4. Fill the logbook and press Broadcast to name the spirit.
5. Wrong name = lose.

### Win / Lose
- **Win:** Correct spirit broadcast
- **Lose:** Nerve hits 0 during a hunt or wrong name

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · E use tool · Q switch tool | Joystick · Use · Switch |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Nerve · Clues · Time
- **Hint line (shown once, under 60 chars):** "Find 3 clues. Trust the jingle."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Nerve), **Play Again**

### Difficulty
Easy: 6 spirit types, hunts rare · Normal: 8 types · Hard: 8 types, faster nerve drain, fake calls sound closer to real.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Nerve drain (dark) | 1.2%/s |
| Hunt threshold | 30% |
| Hunt length | 15 s |
| Rooms | 6 |
| Time limit | 4 min |

## 3 · Look and feel (style kit)

- **Scale unit:** host height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/0B132B/0B132B.png) | Far band (sky) | `#0B132B` |
| ![](https://placehold.co/28x28/1F2E4D/1F2E4D.png) | Mid band | `#1F2E4D` |
| ![](https://placehold.co/28x28/3A506B/3A506B.png) | Ground / play surface | `#3A506B` |
| ![](https://placehold.co/28x28/F2A65A/F2A65A.png) | Hero | `#F2A65A` |
| ![](https://placehold.co/28x28/D7263D/D7263D.png) | Accent / rewards | `#D7263D` |

Catalog colours: `bgColorLight: "#0B132B"`, `bgColorDark: "#1F2E4D"`

### Asset sheet (sizes in units)

- Host: 1U, headphones, flashlight parented to hand
- Tools: 0.4U chunky rounded gadgets with amber dials
- Farmhouse furniture: rounded, one warm-wood family
- Spirit: 1.4U soft glowing silhouette, only seen during hunts
- Van: 3U rounded camper with antenna

### Background (three quiet hazed bands)

1. **Far:** midnight sky with stars and soft haze
2. **Mid:** dark tree line
3. **Near:** porch boards with moonlight stripes

### Juice

- Radio needle jitter near the spirit
- Breath fog in cold rooms
- Static burst when a hunt starts
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **STATIC SIGNAL** | A radio host with headphones before a moonlit farmhouse, title on a glowing ON-AIR sign |
| 2 · Action | **TUNE IN!** | The spirit radio crackling with a ghostly hand reaching from the static |
| 3 · Win | **ON AIR!** | The host broadcasting from the van as dawn breaks |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/static-signal.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/static-signal.txt .shots/static-signal --pause`, then open every PNG
- [ ] **Win path:** seeded spirit; use tools in the right rooms and broadcast the right answer
- [ ] **Lose path:** sit in a dark room until nerve hits 0
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Static Signal  ·  slug: static-signal
Brief: Solo score-chase · 3–4 min · palette family night (dark) · 2D canvas
Pitch: You're the host of a late-night radio show investigating a haunted farmhouse. Use 3 radio-gadget tools to find 3 clues, name the spirit live on air, and get out before your nerve runs out.
Core: Sweep rooms with tools, read their meters, tick clues in the logbook and name the spirit.
Rules: (1) Each spirit leaves exactly 3 of 6 clues: cold spot, EMF 5, radio reply, glowing prints, floating orb, writing. (2) Tools: thermometer, EMF dial, spirit radio (cycle with Q). (3) Nerve drains in dark rooms; at 30% the spirit can hunt (lights flicker, hide or flee to the van). (4) Fill the logbook and press Broadcast to name the spirit. (5) Wrong name = lose.
Win: Correct spirit broadcast · Lose: Nerve hits 0 during a hunt or wrong name
Controls: desktop WASD move · E use tool · Q switch tool · touch Joystick · Use · Switch (max 3 inputs)
HUD: Nerve · Clues · Time + pause
Hint: "Find 3 clues. Trust the jingle."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 6 spirit types, hunts rare · Normal: 8 types · Hard: 8 types, faster nerve drain, fake calls sound closer to real.
Style kit: unit = host height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #0B132B, Mid band #1F2E4D, Ground / play surface #3A506B, Hero #F2A65A, Accent / rewards #D7263D
Assets: Host: 1U, headphones, flashlight parented to hand; Tools: 0.4U chunky rounded gadgets with amber dials; Farmhouse furniture: rounded, one warm-wood family; Spirit: 1.4U soft glowing silhouette, only seen during hunts; Van: 3U rounded camper with antenna
Background bands: midnight sky with stars and soft haze / dark tree line / porch boards with moonlight stripes
Juice: Radio needle jitter near the spirit; Breath fog in cold rooms; Static burst when a hunt starts
Feed cards: 1) Title: A radio host with headphones before a moonlit farmhouse, title on a glowing ON-AIR sign 2) TUNE IN!: The spirit radio crackling with a ghostly hand reaching from the static 3) ON AIR!: The host broadcasting from the van as dawn breaks
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:static-signal:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
