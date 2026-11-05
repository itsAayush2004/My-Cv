# 071 · Critter Crew Colony

> **Catch critters. Put them to work.**

`ARTHIS.space` · `Builders & Strategy` · `Solo score-chase` · `6 min` · `meadow (light)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `critter-crew-colony` → `src/offline-games/critter-crew-colony.txt` |
| **Inspired by (mechanics only)** | Palworld (creature-collecting base builder) |
| **Players** | Solo score-chase |
| **Session** | 6 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:critter-crew-colony:best`, `arthis:critter-crew-colony:settings` (try/catch) |

### Pitch
Stranded on a grassy island, you catch cute critters with throwable orbs and assign them to base stations (logging, mining, farming, cooking). Build up the base and light the rescue beacon by day 5.

### Why it can go viral
Watching your critter crew busily run the base is adorable and satisfying.

### What makes it ours

- **Twist:** Work traits: every critter has 1–2 work skills with levels, so a Lv3 lumber beaver chops 3× faster than a Lv1.
- **Rule we invented:** Critter mood: overworked critters sit down and sulk; a hot spring station restores them.
- **What we cut from the reference:** Guns, breeding trees and 100+ species: 12 critters, simple orbs, one island.

## 2 · Gameplay

### Core mechanic
Throw orbs to catch, then drag critters onto stations; stations convert resources automatically.

### Rules

1. Catch chance shown before throwing (higher when the critter is tired from chasing).
2. Stations: log pile, quarry, berry farm, campfire kitchen, workbench.
3. Critters need food from the kitchen.
4. A night raid of wild boars each evening hits the base fence.
5. Beacon needs 50 wood, 30 stone, 10 crystals.

### Win / Lose
- **Win:** Light the beacon by day 5
- **Lose:** Base fence destroyed

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · LMB throw orb · E assign/build | Joystick · Throw · Assign |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Critters · Wood · Day
- **Hint line (shown once, under 60 chars):** "Catch critters. Put them to work!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Critters), **Play Again**

### Difficulty
Easy: small raids, high catch rates · Normal · Hard: big raids and moody critters.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Days | 5 × 60 s |
| Orbs | 10 + craftable |
| Critter types | 12 |
| Raid size | 4 → 12 boars |

## 3 · Look and feel (style kit)

- **Scale unit:** player height = 1U, critters 0.5–1.2U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/A6E3A1/A6E3A1.png) | Mid band | `#A6E3A1` |
| ![](https://placehold.co/28x28/E8F1D8/E8F1D8.png) | Ground / play surface | `#E8F1D8` |
| ![](https://placehold.co/28x28/FF8A65/FF8A65.png) | Hero | `#FF8A65` |
| ![](https://placehold.co/28x28/FFD166/FFD166.png) | Accent / rewards | `#FFD166` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#A6E3A1"`

### Asset sheet (sizes in units)

- Player: 1U explorer with satchel, orb in hand
- Critters: lumber beaver, rock tortoise, berry bunny, fire fox, crystal moth (rounded, big eyes)
- Stations: 1.5U rounded wooden structures
- Fence: rounded logs
- Beacon: 4U stone tower with flame bowl

### Background (three quiet hazed bands)

1. **Far:** bright sky with puffy clouds
2. **Mid:** island hills and far sea
3. **Near:** grass edge with flowers

### Juice

- Orb wobble 1-2-3 then click
- Critters carry logs with tiny steps
- Beacon flame burst
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **CRITTER CREW COLONY** | An explorer surrounded by working critters on an island base, title on a wooden sign |
| 2 · Action | **CATCH!** | An orb flying toward a surprised fox |
| 3 · Win | **BEACON LIT!** | The beacon blazing with critters cheering |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/critter-crew-colony.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/critter-crew-colony.txt .shots/critter-crew-colony --pause`, then open every PNG
- [ ] **Win path:** seeded catches and assignments to complete the beacon
- [ ] **Lose path:** catch nothing and wait for raids
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Critter Crew Colony  ·  slug: critter-crew-colony
Brief: Solo score-chase · 6 min · palette family meadow (light) · 2D canvas
Pitch: Stranded on a grassy island, you catch cute critters with throwable orbs and assign them to base stations (logging, mining, farming, cooking). Build up the base and light the rescue beacon by day 5.
Core: Throw orbs to catch, then drag critters onto stations; stations convert resources automatically.
Rules: (1) Catch chance shown before throwing (higher when the critter is tired from chasing). (2) Stations: log pile, quarry, berry farm, campfire kitchen, workbench. (3) Critters need food from the kitchen. (4) A night raid of wild boars each evening hits the base fence. (5) Beacon needs 50 wood, 30 stone, 10 crystals.
Win: Light the beacon by day 5 · Lose: Base fence destroyed
Controls: desktop WASD move · LMB throw orb · E assign/build · touch Joystick · Throw · Assign (max 3 inputs)
HUD: Critters · Wood · Day + pause
Hint: "Catch critters. Put them to work!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: small raids, high catch rates · Normal · Hard: big raids and moody critters.
Style kit: unit = player height = 1U, critters 0.5–1.2U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #A6E3A1, Ground / play surface #E8F1D8, Hero #FF8A65, Accent / rewards #FFD166
Assets: Player: 1U explorer with satchel, orb in hand; Critters: lumber beaver, rock tortoise, berry bunny, fire fox, crystal moth (rounded, big eyes); Stations: 1.5U rounded wooden structures; Fence: rounded logs; Beacon: 4U stone tower with flame bowl
Background bands: bright sky with puffy clouds / island hills and far sea / grass edge with flowers
Juice: Orb wobble 1-2-3 then click; Critters carry logs with tiny steps; Beacon flame burst
Feed cards: 1) Title: An explorer surrounded by working critters on an island base, title on a wooden sign 2) CATCH!: An orb flying toward a surprised fox 3) BEACON LIT!: The beacon blazing with critters cheering
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:critter-crew-colony:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
