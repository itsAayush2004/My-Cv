# 005 · Hush Hotel

> **50 rooms. Every guest has one rule.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `4 min` · `spooky (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `hush-hotel` → `src/offline-games/hush-hotel.txt` |
| **Inspired by (mechanics only)** | DOORS (Roblox room-runner horror) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `spooky` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:hush-hotel:best`, `arthis:hush-hotel:settings` (try/catch) |

### Pitch
Check in and run through 50 rooms of a creepy hotel to reach checkout. Strange guests appear, and each has one rule. Break it and you're checked out.

### Why it can go viral
Kids love explaining the rules ('when the lights flicker, HIDE!'), and every new guest is a small jump-scare moment.

### What makes it ours

- **Twist:** The guestbook: surviving a new guest adds a hand-drawn page about them, so the game teaches itself and players collect all 6 pages.
- **Rule we invented:** Bell charm: ring it to make the next guest skip one room (1 charm per 15 rooms).
- **What we cut from the reference:** Multiplayer, shop and 100+ rooms: 50 rooms, 6 guests, lives instead of revives.

## 2 · Gameplay

### Core mechanic
Walk room to room, find the key or switch, and react to each guest's rule in time.

### Rules

1. Each room has a locked door; a key hides in a drawer, or a switch powers the lift.
2. Flicker Man: lights flicker → hide in a wardrobe within 2.5 s.
3. Maid: when she enters, don't face her; turn away.
4. Radio: while it plays, stand completely still.
5. Bellhop: he follows footsteps; walk slowly (hold sneak). Twins: answer only the first knock.

### Win / Lose
- **Win:** Reach room 50 and check out
- **Lose:** Lose all 3 lives

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · E use/hide · Shift sneak | Joystick · Use/Hide · Sneak |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Room · Lives · Charms
- **Hint line (shown once, under 60 chars):** "Learn each guest's rule."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Room), **Play Again**

### Difficulty
Easy: hide window 3.5 s, guests at 15% per room · Normal: 2.5 s, 22% · Hard: 1.8 s, 32%, darker rooms.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rooms | 50 |
| Guest chance | 22% per room |
| Hide window | 2.5 s |
| Lives | 3 |
| Room size | 8 × 5 U |

## 3 · Look and feel (style kit)

- **Scale unit:** guest (player) height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/17141F/17141F.png) | Far band (sky) | `#17141F` |
| ![](https://placehold.co/28x28/3A2433/3A2433.png) | Mid band | `#3A2433` |
| ![](https://placehold.co/28x28/5C1A1B/5C1A1B.png) | Ground / play surface | `#5C1A1B` |
| ![](https://placehold.co/28x28/C9A227/C9A227.png) | Hero | `#C9A227` |
| ![](https://placehold.co/28x28/3BCEAC/3BCEAC.png) | Accent / rewards | `#3BCEAC` |

Catalog colours: `bgColorLight: "#17141F"`, `bgColorDark: "#3A2433"`

### Asset sheet (sizes in units)

- Player: 1U kid in a bellhop cap, lantern parented to hand
- Doors: 1.6U rounded arches with brass handles
- Wardrobe and bed: 1.8U, rounded wood family
- Guests: 1.2–1.6U simple silhouettes with ONE odd feature (no gore)
- Keys and switches: 0.3U brass, glowing outline

### Background (three quiet hazed bands)

1. **Far:** dark wallpaper with faint damask haze
2. **Mid:** hall of distant doors
3. **Near:** carpet runner with a lighter centre stripe

### Juice

- Light flicker shader
- Door creak + slow open
- Heartbeat pulse ring when a guest is near
- Guestbook page flip on unlock
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **HUSH HOTEL** | A tiny bellhop kid with a lantern in front of a grand creepy hotel door, brass title plaque |
| 2 · Action | **HIDE!** | The kid peeking from a wardrobe as the lights flicker |
| 3 · Win | **CHECKED OUT!** | Sunlight bursting through the exit doors, guestbook full |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/hush-hotel.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/hush-hotel.txt .shots/hush-hotel --pause`, then open every PNG
- [ ] **Win path:** seeded run where you follow each rule correctly to room 50
- [ ] **Lose path:** ignore the Flicker Man three times
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Hush Hotel  ·  slug: hush-hotel
Brief: Solo score-chase · 4 min · palette family spooky (dark) · 2D canvas
Pitch: Check in and run through 50 rooms of a creepy hotel to reach checkout. Strange guests appear, and each has one rule. Break it and you're checked out.
Core: Walk room to room, find the key or switch, and react to each guest's rule in time.
Rules: (1) Each room has a locked door; a key hides in a drawer, or a switch powers the lift. (2) Flicker Man: lights flicker → hide in a wardrobe within 2.5 s. (3) Maid: when she enters, don't face her; turn away. (4) Radio: while it plays, stand completely still. (5) Bellhop: he follows footsteps; walk slowly (hold sneak). Twins: answer only the first knock.
Win: Reach room 50 and check out · Lose: Lose all 3 lives
Controls: desktop WASD move · E use/hide · Shift sneak · touch Joystick · Use/Hide · Sneak (max 3 inputs)
HUD: Room · Lives · Charms + pause
Hint: "Learn each guest's rule."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: hide window 3.5 s, guests at 15% per room · Normal: 2.5 s, 22% · Hard: 1.8 s, 32%, darker rooms.
Style kit: unit = guest (player) height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #17141F, Mid band #3A2433, Ground / play surface #5C1A1B, Hero #C9A227, Accent / rewards #3BCEAC
Assets: Player: 1U kid in a bellhop cap, lantern parented to hand; Doors: 1.6U rounded arches with brass handles; Wardrobe and bed: 1.8U, rounded wood family; Guests: 1.2–1.6U simple silhouettes with ONE odd feature (no gore); Keys and switches: 0.3U brass, glowing outline
Background bands: dark wallpaper with faint damask haze / hall of distant doors / carpet runner with a lighter centre stripe
Juice: Light flicker shader; Door creak + slow open; Heartbeat pulse ring when a guest is near; Guestbook page flip on unlock
Feed cards: 1) Title: A tiny bellhop kid with a lantern in front of a grand creepy hotel door, brass title plaque 2) HIDE!: The kid peeking from a wardrobe as the lights flicker 3) CHECKED OUT!: Sunlight bursting through the exit doors, guestbook full
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:hush-hotel:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
