# 070 · Last Ferry

> **Carry spirits home. Cook their favourite meal.**

`ARTHIS.space` · `Spooky & Mystery` · `Solo score-chase` · `5 min` · `peach (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `last-ferry` → `src/offline-games/last-ferry.txt` |
| **Inspired by (mechanics only)** | Spiritfarer (cosy afterlife management) |
| **Players** | Solo score-chase |
| **Session** | 5 min |
| **Palette family** | `peach` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:last-ferry:best`, `arthis:last-ferry:settings` (try/catch) |

### Pitch
A gentle ferry keeper carries 5 animal spirits across a twilight sea. Build cabins, cook favourite meals and say farewell at the glowing gate.

### Why it can go viral
Emotional, wholesome moments of farewell people talk about.

### What makes it ours

- **Twist:** Each spirit has a favourite dish and a final wish.
- **Rule we invented:** Lantern fishing between islands.
- **What we cut from the reference:** Large world: 5 islands.

## 2 · Gameplay

### Core mechanic
Build, gather, cook, deliver.

### Rules

1. Build cabins on a ferry grid.
2. Gather wood, fish and herbs in small minigames.
3. Cook each spirit's favourite meal to raise mood.
4. At full mood, sail to the gate for a farewell.
5. 5 spirits.

### Win / Lose
- **Win:** All 5 farewells
- **Lose:** (gentle) none

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD · E use · Q build | Stick · Use · Build |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Mood · Wood · Day
- **Hint line (shown once, under 60 chars):** "Cook what they love."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Mood), **Play Again**

### Difficulty
n/a gentle (pause: Calm / Normal).

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Spirits | 5 |
| Islands | 5 |
| Cabins | 6 |

## 3 · Look and feel (style kit)

- **Scale unit:** keeper = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/FFE8D6/FFE8D6.png) | Far band (sky) | `#FFE8D6` |
| ![](https://placehold.co/28x28/F6C7B6/F6C7B6.png) | Mid band | `#F6C7B6` |
| ![](https://placehold.co/28x28/D7E3FC/D7E3FC.png) | Ground / play surface | `#D7E3FC` |
| ![](https://placehold.co/28x28/843B62/843B62.png) | Hero | `#843B62` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Accent / rewards | `#FFB703` |

Catalog colours: `bgColorLight: "#FFE8D6"`, `bgColorDark: "#F6C7B6"`

### Asset sheet (sizes in units)

- Keeper: 1U with lantern
- Spirits: deer, owl, bear, fox, turtle in soft glowing forms
- Ferry: rounded wooden boat with cabins
- Islands: small rounded isles

### Background (three quiet hazed bands)

1. **Far:** twilight sky
2. **Mid:** islands
3. **Near:** calm sea

### Juice

- Lantern glow
- Farewell light pillar
- Cooking steam
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LAST FERRY** | A ferry with lanterns at twilight |
| 2 · Action | **COOK!** | Keeper serving soup to a deer spirit |
| 3 · Win | **FAREWELL!** | A spirit drifting into a pillar of light |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/last-ferry.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/last-ferry.txt .shots/last-ferry --pause`, then open every PNG
- [ ] **Win path:** scripted cooking for each spirit
- [ ] **Lose path:** n/a (gentle)
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Last Ferry  ·  slug: last-ferry
Brief: Solo score-chase · 5 min · palette family peach (light) · 2D canvas
Pitch: A gentle ferry keeper carries 5 animal spirits across a twilight sea. Build cabins, cook favourite meals and say farewell at the glowing gate.
Core: Build, gather, cook, deliver.
Rules: (1) Build cabins on a ferry grid. (2) Gather wood, fish and herbs in small minigames. (3) Cook each spirit's favourite meal to raise mood. (4) At full mood, sail to the gate for a farewell. (5) 5 spirits.
Win: All 5 farewells · Lose: (gentle) none
Controls: desktop WASD · E use · Q build · touch Stick · Use · Build (max 3 inputs)
HUD: Mood · Wood · Day + pause
Hint: "Cook what they love."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: n/a gentle (pause: Calm / Normal).
Style kit: unit = keeper = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #FFE8D6, Mid band #F6C7B6, Ground / play surface #D7E3FC, Hero #843B62, Accent / rewards #FFB703
Assets: Keeper: 1U with lantern; Spirits: deer, owl, bear, fox, turtle in soft glowing forms; Ferry: rounded wooden boat with cabins; Islands: small rounded isles
Background bands: twilight sky / islands / calm sea
Juice: Lantern glow; Farewell light pillar; Cooking steam
Feed cards: 1) Title: A ferry with lanterns at twilight 2) COOK!: Keeper serving soup to a deer spirit 3) FAREWELL!: A spirit drifting into a pillar of light
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:last-ferry:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
