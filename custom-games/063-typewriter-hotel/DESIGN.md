# 063 · Typewriter Hotel

> **Six slots. One key. Something in the halls.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `5 min` · `spooky (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `typewriter-hotel` → `src/offline-games/typewriter-hotel.txt` |
| **Inspired by (mechanics only)** | Resident Evil (survival horror) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `spooky` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:typewriter-hotel:best`, `arthis:typewriter-hotel:settings` (try/catch) |

### Pitch
Classic survival horror in a shuttered hotel: a 6-slot inventory, key-item puzzles, typewriter save rooms and an unkillable tall stalker who hunts by sound.

### Why it can go viral
The stalker's footsteps getting louder through walls is a perfect tension clip.

### What makes it ours

- **Twist:** Inventory Tetris-lite: weapons take 2 slots, keys 1, and you must leave things in the save-room trunk.
- **Rule we invented:** Typewriter ribbons: saving costs a ribbon; you find only 3.
- **What we cut from the reference:** Long campaign and many weapons: one hotel, a pistol and a knife.

## 2 · Gameplay

### Core mechanic
Explore rooms, solve key puzzles, manage scarce ammo and avoid the stalker.

### Rules

1. 6 inventory slots; trunk in save rooms.
2. Shambling guests can be shot or avoided; the stalker cannot be killed.
3. Running makes noise; walking doesn't.
4. 3 key items open the lobby exit (brass key, crest, fuse).
5. Healing herbs combine for more healing.

### Win / Lose
- **Win:** Open the lobby doors
- **Lose:** HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · mouse aim/shoot · E use/pick | Twin stick (aim-fire) · Use |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Ammo · Keys
- **Hint line (shown once, under 60 chars):** "Walk quietly. He hears running."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: more ammo, slow stalker · Normal · Hard: less ammo, stalker patrols wider.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Slots | 6 |
| Starting ammo | 12 |
| Stalker hearing | 8 U running |
| Rooms | 14 |

## 3 · Look and feel (style kit)

- **Scale unit:** player height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/17141F/17141F.png) | Far band (sky) | `#17141F` |
| ![](https://placehold.co/28x28/2E2533/2E2533.png) | Mid band | `#2E2533` |
| ![](https://placehold.co/28x28/3A2E3D/3A2E3D.png) | Ground / play surface | `#3A2E3D` |
| ![](https://placehold.co/28x28/C9A227/C9A227.png) | Hero | `#C9A227` |
| ![](https://placehold.co/28x28/A3E635/A3E635.png) | Accent / rewards | `#A3E635` |

Catalog colours: `bgColorLight: "#17141F"`, `bgColorDark: "#2E2533"`

### Asset sheet (sizes in units)

- Hero: 1U in a coat, flashlight + pistol parented to hands
- Guests: 1U shamblers, simple and not gory
- Stalker: 2U tall figure in a hat
- Hotel props: rounded beds, desks, typewriters, potted plants

### Background (three quiet hazed bands)

1. **Far:** dark wallpaper with lamp haze
2. **Mid:** hallway of doors
3. **Near:** carpet runner

### Juice

- Flashlight beam dust
- Door creak slow-open
- Typewriter clack on save
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **TYPEWRITER HOTEL** | A lone figure with a flashlight at a grand hotel desk, title typed on paper |
| 2 · Action | **RUN!** | A tall shadow at the end of a corridor |
| 3 · Win | **CHECKED OUT!** | Lobby doors open to dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/typewriter-hotel.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/typewriter-hotel.txt .shots/typewriter-hotel --pause`, then open every PNG
- [ ] **Win path:** scripted route to collect 3 key items and exit
- [ ] **Lose path:** sprint near the stalker
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Typewriter Hotel  ·  slug: typewriter-hotel
Brief: Solo score-chase · 5 min · palette family spooky (dark) · 2D canvas
Pitch: Classic survival horror in a shuttered hotel: a 6-slot inventory, key-item puzzles, typewriter save rooms and an unkillable tall stalker who hunts by sound.
Core: Explore rooms, solve key puzzles, manage scarce ammo and avoid the stalker.
Rules: (1) 6 inventory slots; trunk in save rooms. (2) Shambling guests can be shot or avoided; the stalker cannot be killed. (3) Running makes noise; walking doesn't. (4) 3 key items open the lobby exit (brass key, crest, fuse). (5) Healing herbs combine for more healing.
Win: Open the lobby doors · Lose: HP 0
Controls: desktop WASD · mouse aim/shoot · E use/pick · touch Twin stick (aim-fire) · Use (max 3 inputs)
HUD: HP · Ammo · Keys + pause
Hint: "Walk quietly. He hears running."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: more ammo, slow stalker · Normal · Hard: less ammo, stalker patrols wider.
Style kit: unit = player height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #17141F, Mid band #2E2533, Ground / play surface #3A2E3D, Hero #C9A227, Accent / rewards #A3E635
Assets: Hero: 1U in a coat, flashlight + pistol parented to hands; Guests: 1U shamblers, simple and not gory; Stalker: 2U tall figure in a hat; Hotel props: rounded beds, desks, typewriters, potted plants
Background bands: dark wallpaper with lamp haze / hallway of doors / carpet runner
Juice: Flashlight beam dust; Door creak slow-open; Typewriter clack on save
Feed cards: 1) Title: A lone figure with a flashlight at a grand hotel desk, title typed on paper 2) RUN!: A tall shadow at the end of a corridor 3) CHECKED OUT!: Lobby doors open to dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:typewriter-hotel:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
