# 016 · Ember Stair

> **Climb out of the forge god's mountain.**

`ARTHIS.space` · `Roguelites & Survivors` · `Solo score-chase` · `4 min` · `ember (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `ember-stair` → `src/offline-games/ember-stair.txt` |
| **Inspired by (mechanics only)** | Hades (isometric action roguelite) |
| **Players** | Solo score-chase |
| **Session** | 4 min |
| **Palette family** | `ember` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:ember-stair:best`, `arthis:ember-stair:settings` (try/catch) |

### Pitch
A young blacksmith escapes a volcano god's forge, room by room. Choose blessings from three elemental spirits after each chamber, and beat the Forge Warden.

### Why it can go viral
Builds feel personal: a lava dash with an ice hammer creates amazing combos.

### What makes it ours

- **Twist:** Doors show which spirit's blessing waits behind them, so you plan your build route.
- **Rule we invented:** Anvil rooms: every 3rd room you can temper one blessing to the next rarity.
- **What we cut from the reference:** Hub narrative, many weapons and meta trees: 1 hammer, 9 rooms, 3 spirits.

## 2 · Gameplay

### Core mechanic
Fight through 9 rooms with attack, dash and a thrown spark; pick blessings that change each button.

### Rules

1. After each room pick 1 of 3 blessings from the spirit shown on the door.
2. Spirits: Lava (burn), Frost (slow/freeze), Storm (chain).
3. Dash has 0.25 s of invincibility.
4. Room 9 is the Forge Warden (2 phases).
5. Heal fountains in rooms 4 and 7.

### Win / Lose
- **Win:** Defeat the Forge Warden
- **Lose:** HP 0

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · J hammer · K dash | Joystick · Hammer · Dash (spark auto-throws on hold) |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Room · Embers
- **Hint line (shown once, under 60 chars):** "Pick doors by the spirit you want."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: enemy damage ×0.7 · Normal · Hard: ×1.3 and elite rooms.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Rooms | 9 |
| Dash i-frames | 0.25 s |
| Warden HP | 2,500 |
| Blessings per room | 3 choices |

## 3 · Look and feel (style kit)

- **Scale unit:** smith height = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/2A0F12/2A0F12.png) | Far band (sky) | `#2A0F12` |
| ![](https://placehold.co/28x28/5C1E22/5C1E22.png) | Mid band | `#5C1E22` |
| ![](https://placehold.co/28x28/6E2B23/6E2B23.png) | Ground / play surface | `#6E2B23` |
| ![](https://placehold.co/28x28/FFD23F/FFD23F.png) | Hero | `#FFD23F` |
| ![](https://placehold.co/28x28/FF7A3D/FF7A3D.png) | Accent / rewards | `#FF7A3D` |

Catalog colours: `bgColorLight: "#2A0F12"`, `bgColorDark: "#5C1E22"`

### Asset sheet (sizes in units)

- Smith: 1U apron, big hammer parented to hands
- Enemies: magma slimes 0.6U, rock golems 1.4U, ember bats 0.5U
- Warden: 3U rounded armour giant with glowing seams
- Arena: rounded basalt tiles with lava cracks

### Background (three quiet hazed bands)

1. **Far:** red smoky haze
2. **Mid:** giant chains and anvils in silhouette
3. **Near:** dark basalt floor edge

### Juice

- Hit-stop on hammer hits
- Blessing colour trails on attacks
- Lava splash particles
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **EMBER STAIR** | A smith with a hammer before a glowing forge gate, title cast in molten metal |
| 2 · Action | **DASH!** | Smith dashing through a lava wave leaving a frost trail |
| 3 · Win | **ESCAPED!** | Smith at the volcano rim at sunrise |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/ember-stair.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/ember-stair.txt .shots/ember-stair --pause`, then open every PNG
- [ ] **Win path:** scripted route picking Frost then Lava; defeat the Warden
- [ ] **Lose path:** take no blessings and stand still in room 1
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Ember Stair  ·  slug: ember-stair
Brief: Solo score-chase · 4 min · palette family ember (dark) · 2D canvas
Pitch: A young blacksmith escapes a volcano god's forge, room by room. Choose blessings from three elemental spirits after each chamber, and beat the Forge Warden.
Core: Fight through 9 rooms with attack, dash and a thrown spark; pick blessings that change each button.
Rules: (1) After each room pick 1 of 3 blessings from the spirit shown on the door. (2) Spirits: Lava (burn), Frost (slow/freeze), Storm (chain). (3) Dash has 0.25 s of invincibility. (4) Room 9 is the Forge Warden (2 phases). (5) Heal fountains in rooms 4 and 7.
Win: Defeat the Forge Warden · Lose: HP 0
Controls: desktop WASD · J hammer · K dash · touch Joystick · Hammer · Dash (spark auto-throws on hold) (max 3 inputs)
HUD: HP · Room · Embers + pause
Hint: "Pick doors by the spirit you want."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: enemy damage ×0.7 · Normal · Hard: ×1.3 and elite rooms.
Style kit: unit = smith height = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #2A0F12, Mid band #5C1E22, Ground / play surface #6E2B23, Hero #FFD23F, Accent / rewards #FF7A3D
Assets: Smith: 1U apron, big hammer parented to hands; Enemies: magma slimes 0.6U, rock golems 1.4U, ember bats 0.5U; Warden: 3U rounded armour giant with glowing seams; Arena: rounded basalt tiles with lava cracks
Background bands: red smoky haze / giant chains and anvils in silhouette / dark basalt floor edge
Juice: Hit-stop on hammer hits; Blessing colour trails on attacks; Lava splash particles
Feed cards: 1) Title: A smith with a hammer before a glowing forge gate, title cast in molten metal 2) DASH!: Smith dashing through a lava wave leaving a frost trail 3) ESCAPED!: Smith at the volcano rim at sunrise
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:ember-stair:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
