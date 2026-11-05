# 008 · Spooky Views

> **Film the monster. Go viral. Don't be the footage.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `3 min` · `arcade (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `spooky-views` → `src/offline-games/spooky-views.txt` |
| **Inspired by (mechanics only)** | Content Warning (horror-comedy filming) |
| **Players** | Solo score-chase |
| **Session** | 3 min |
| **Palette family** | `arcade` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:spooky-views:best`, `arthis:spooky-views:settings` (try/catch) |

### Pitch
A wannabe creator explores an abandoned neon mall with one camcorder. Capture creepy-cute monsters in frame for views, then escape before the film runs out.

### Why it can go viral
Each run ends with a fake 'video' card and a view count; players compare their best clip scores.

### What makes it ours

- **Twist:** Framing matters: the closer and more centred the monster, the more views, but closer means danger.
- **Rule we invented:** Emote props: an air horn or a dance makes monsters react, and a reaction shot gives ×2 views.
- **What we cut from the reference:** Co-op crews and upload feeds: solo filmmaker, one mall, 4 monsters.

## 2 · Gameplay

### Core mechanic
Hold record while keeping monsters in the frame box for views, then run to the exit.

### Rules

1. 60 s of film; recording drains it.
2. Views = rarity × framing (distance + centredness) × reaction bonus.
3. Mannequin moves only when not recorded; Jester chases noise; Puddle Hand grabs if you stand still.
4. Getting caught drops the camera (lose recorded views).
5. Reach the exit to 'upload'.

### Win / Lose
- **Win:** Upload 100k+ views
- **Lose:** Caught, or exit reached with under 100k views

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Space record · E emote | Joystick · Record · Emote |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Views · Film · Time
- **Hint line (shown once, under 60 chars):** "Frame the monster. Go viral."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Views), **Play Again**

### Difficulty
Easy: 70k target · Normal: 100k · Hard: 140k, faster monsters.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Film | 60 s |
| View target | 100k |
| Monsters | 4 |
| Framing sweet spot | 2–3 U |

## 3 · Look and feel (style kit)

- **Scale unit:** creator height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/1A1423/1A1423.png) | Far band (sky) | `#1A1423` |
| ![](https://placehold.co/28x28/3D1A6E/3D1A6E.png) | Mid band | `#3D1A6E` |
| ![](https://placehold.co/28x28/2A2342/2A2342.png) | Ground / play surface | `#2A2342` |
| ![](https://placehold.co/28x28/FF3CAC/FF3CAC.png) | Hero | `#FF3CAC` |
| ![](https://placehold.co/28x28/2BD2FF/2BD2FF.png) | Accent / rewards | `#2BD2FF` |

Catalog colours: `bgColorLight: "#1A1423"`, `bgColorDark: "#3D1A6E"`

### Asset sheet (sizes in units)

- Creator: 1U, cap, camcorder parented to hands
- Monsters: 1.2–2U chunky creepy-cute shapes, one neon-outlined family
- Mall props (benches, fountains, escalators): rounded, glossy
- Frame box: rounded viewfinder overlay

### Background (three quiet hazed bands)

1. **Far:** dark atrium with neon haze
2. **Mid:** shop fronts with pink and cyan signs
3. **Near:** tiled floor with reflections

### Juice

- REC dot pulse
- View counter rolls up
- Heart particles on reaction shots
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SPOOKY VIEWS** | A creator filming in a neon mall, title as a glowing shop sign |
| 2 · Action | **REC!** | Viewfinder framing a mannequin creeping closer |
| 3 · Win | **VIRAL!** | The creator outside at dawn, a giant view counter above |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/spooky-views.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/spooky-views.txt .shots/spooky-views --pause`, then open every PNG
- [ ] **Win path:** record each monster at sweet-spot distance then exit
- [ ] **Lose path:** walk into the Puddle Hand and stand still
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Spooky Views  ·  slug: spooky-views
Brief: Solo score-chase · 3 min · palette family arcade (dark) · 2D canvas
Pitch: A wannabe creator explores an abandoned neon mall with one camcorder. Capture creepy-cute monsters in frame for views, then escape before the film runs out.
Core: Hold record while keeping monsters in the frame box for views, then run to the exit.
Rules: (1) 60 s of film; recording drains it. (2) Views = rarity × framing (distance + centredness) × reaction bonus. (3) Mannequin moves only when not recorded; Jester chases noise; Puddle Hand grabs if you stand still. (4) Getting caught drops the camera (lose recorded views). (5) Reach the exit to 'upload'.
Win: Upload 100k+ views · Lose: Caught, or exit reached with under 100k views
Controls: desktop WASD move · Space record · E emote · touch Joystick · Record · Emote (max 3 inputs)
HUD: Views · Film · Time + pause
Hint: "Frame the monster. Go viral."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: 70k target · Normal: 100k · Hard: 140k, faster monsters.
Style kit: unit = creator height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1A1423, Mid band #3D1A6E, Ground / play surface #2A2342, Hero #FF3CAC, Accent / rewards #2BD2FF
Assets: Creator: 1U, cap, camcorder parented to hands; Monsters: 1.2–2U chunky creepy-cute shapes, one neon-outlined family; Mall props (benches, fountains, escalators): rounded, glossy; Frame box: rounded viewfinder overlay
Background bands: dark atrium with neon haze / shop fronts with pink and cyan signs / tiled floor with reflections
Juice: REC dot pulse; View counter rolls up; Heart particles on reaction shots
Feed cards: 1) Title: A creator filming in a neon mall, title as a glowing shop sign 2) REC!: Viewfinder framing a mannequin creeping closer 3) VIRAL!: The creator outside at dawn, a giant view counter above
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:spooky-views:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
