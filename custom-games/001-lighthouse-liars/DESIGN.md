# 001 · Lighthouse Liars

> **Keep the lamp lit. Trust no keeper.**

`ARTHIS.space` · `Party & Social` · `vs CPU` · `2–3 min` · `night (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `lighthouse-liars` → `src/offline-games/lighthouse-liars.txt` |
| **Inspired by (mechanics only)** | Among Us (social deduction) |
| **Players** | vs CPU |
| **Session** | 2–3 min |
| **Palette family** | `night` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:lighthouse-liars:best`, `arthis:lighthouse-liars:settings` (try/catch) |

### Pitch
You and 5 CPU keepers must light a stormy island lighthouse before dawn. One keeper is secretly Drowned and sabotages the island. Do tasks, watch who wanders, and vote them into the sea.

### Why it can go viral
The ejection moment, when the voted keeper is washed away by a wave and reveals a teal sea-spirit face, is a perfect 3-second clip, and every vote feels like a detective win.

### What makes it ours

- **Twist:** The lighthouse beam sweeps the island every 12 s: anyone inside it is shown on the minimap for 1 s, so you catch the Drowned by timing your glances to the light.
- **Rule we invented:** Wet footprints: the Drowned leaves teal footprints for 6 s after a sabotage, giving you a trail to follow.
- **What we cut from the reference:** Online lobbies, chat and kill animations: CPU keepers with readable behaviour and a soft 'soaked' knock-out.

## 2 · Gameplay

### Core mechanic
Walk to glowing task spots and hold to fill them (2–4 s each) while watching CPU keepers' movements; when the bell rings, pick the suspect from evidence chips.

### Rules

1. 8 task spots fill the Lamp meter; 100% = keepers win.
2. The Drowned soaks a keeper every 25 s when unseen; soaked keepers sit out (shown as a puddle).
3. Finding a puddle or a sabotage rings the bell: a vote sheet lists keepers with evidence chips (seen near puddle, skipped tasks, in beam).
4. Voting out the Drowned wins; a wrong vote costs one keeper.
5. Storm sabotage: two valves must be held within 20 s (you hold one, a CPU keeper heads to the other).

### Win / Lose
- **Win:** Lamp meter 100% or the Drowned voted out
- **Lose:** Only 2 keepers left dry, or storm timer runs out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · E hold task / report · Space open vote | Joystick · Use button (hold) · Vote button |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Lamp % · Keepers · Time
- **Hint line (shown once, under 60 chars):** "Do tasks. Watch who skips them."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Lamp %), **Play Again**

### Difficulty
Easy: soak every 35 s and evidence chips are always true · Normal: 25 s, one decoy chip · Hard: 18 s, two decoy chips, and the beam sweeps every 16 s.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Task fill time | 2–4 s |
| Soak cooldown | 25 s |
| Beam period | 12 s |
| Footprint life | 6 s |
| Vision radius | 4.5 U |

## 3 · Look and feel (style kit)

- **Scale unit:** keeper height = 1U (a round bean in a yellow raincoat)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/1B2A4A/1B2A4A.png) | Far band (sky) | `#1B2A4A` |
| ![](https://placehold.co/28x28/2E4A62/2E4A62.png) | Mid band | `#2E4A62` |
| ![](https://placehold.co/28x28/3D5A73/3D5A73.png) | Ground / play surface | `#3D5A73` |
| ![](https://placehold.co/28x28/FFC93C/FFC93C.png) | Hero | `#FFC93C` |
| ![](https://placehold.co/28x28/1FB5A6/1FB5A6.png) | Accent / rewards | `#1FB5A6` |

Catalog colours: `bgColorLight: "#1B2A4A"`, `bgColorDark: "#2E4A62"`

### Asset sheet (sizes in units)

- Keeper: 1U bean, yellow raincoat with lighter top face, dot eyes, coloured hat to tell them apart
- Lighthouse: 6U tall, rounded stone stripes, glowing lamp cap
- Task stations (lever, rope coil, radio, pump): 0.6U each, one rounded metal prop family
- Puddle: 0.9U soft teal ellipse
- Rocks and fences: 0.5–1U pebble shapes, same matte grey family

### Background (three quiet hazed bands)

1. **Far:** deep navy sky with soft rain haze
2. **Mid:** hazy silhouette of far islands
3. **Near:** dark sea strip with gentle wave bands

### Juice

- Lightning flash when the bell rings
- Raindrops splash rings on the ground
- Vote chips pop in one by one with a wood-knock sound
- Wave sweep animation on ejection
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **LIGHTHOUSE LIARS** | Six raincoat keepers on the rocks below a glowing lighthouse, title carved into a driftwood sign |
| 2 · Action | **SUS!** | A keeper pointing at a dripping teal-faced suspect under the sweeping beam |
| 3 · Win | **LAMP LIT!** | Keepers cheering as the lamp blazes gold through parting storm clouds |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/lighthouse-liars.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/lighthouse-liars.txt .shots/lighthouse-liars --pause`, then open every PNG
- [ ] **Win path:** fill all 8 tasks while voting correctly at the first bell
- [ ] **Lose path:** stand idle until the Drowned soaks keepers down to 2
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Lighthouse Liars  ·  slug: lighthouse-liars
Brief: vs CPU · 2–3 min · palette family night (dark) · 2D canvas
Pitch: You and 5 CPU keepers must light a stormy island lighthouse before dawn. One keeper is secretly Drowned and sabotages the island. Do tasks, watch who wanders, and vote them into the sea.
Core: Walk to glowing task spots and hold to fill them (2–4 s each) while watching CPU keepers' movements; when the bell rings, pick the suspect from evidence chips.
Rules: (1) 8 task spots fill the Lamp meter; 100% = keepers win. (2) The Drowned soaks a keeper every 25 s when unseen; soaked keepers sit out (shown as a puddle). (3) Finding a puddle or a sabotage rings the bell: a vote sheet lists keepers with evidence chips (seen near puddle, skipped tasks, in beam). (4) Voting out the Drowned wins; a wrong vote costs one keeper. (5) Storm sabotage: two valves must be held within 20 s (you hold one, a CPU keeper heads to the other).
Win: Lamp meter 100% or the Drowned voted out · Lose: Only 2 keepers left dry, or storm timer runs out
Controls: desktop WASD move · E hold task / report · Space open vote · touch Joystick · Use button (hold) · Vote button (max 3 inputs)
HUD: Lamp % · Keepers · Time + pause
Hint: "Do tasks. Watch who skips them."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: soak every 35 s and evidence chips are always true · Normal: 25 s, one decoy chip · Hard: 18 s, two decoy chips, and the beam sweeps every 16 s.
Style kit: unit = keeper height = 1U (a round bean in a yellow raincoat); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #1B2A4A, Mid band #2E4A62, Ground / play surface #3D5A73, Hero #FFC93C, Accent / rewards #1FB5A6
Assets: Keeper: 1U bean, yellow raincoat with lighter top face, dot eyes, coloured hat to tell them apart; Lighthouse: 6U tall, rounded stone stripes, glowing lamp cap; Task stations (lever, rope coil, radio, pump): 0.6U each, one rounded metal prop family; Puddle: 0.9U soft teal ellipse; Rocks and fences: 0.5–1U pebble shapes, same matte grey family
Background bands: deep navy sky with soft rain haze / hazy silhouette of far islands / dark sea strip with gentle wave bands
Juice: Lightning flash when the bell rings; Raindrops splash rings on the ground; Vote chips pop in one by one with a wood-knock sound; Wave sweep animation on ejection
Feed cards: 1) Title: Six raincoat keepers on the rocks below a glowing lighthouse, title carved into a driftwood sign 2) SUS!: A keeper pointing at a dripping teal-faced suspect under the sweeping beam 3) LAMP LIT!: Keepers cheering as the lamp blazes gold through parting storm clouds
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:lighthouse-liars:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
