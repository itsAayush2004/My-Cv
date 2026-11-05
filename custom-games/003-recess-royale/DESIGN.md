# 003 · Recess Royale

> **99 kids. 3 playground games. One bell.**

`ARTHIS.space` · `Party & Social` · `Solo score-chase` · `2 min` · `meadow (light)` · `3D, three.js r128 from cdnjs`

## 1 · The brief

| | |
|---|---|
| **Slug** | `recess-royale` → `src/offline-games/recess-royale.txt` |
| **Inspired by (mechanics only)** | Crab Game / Squid-style elimination |
| **Players** | Solo score-chase |
| **Session** | 2 min |
| **Palette family** | `meadow` (light) |
| **Tech** | 3D, three.js r128 from cdnjs, Poppins, single HTML file |
| **Storage** | `arthis:recess-royale:best`, `arthis:recess-royale:settings` (try/catch) |

### Pitch
A huge school playground tournament. 99 CPU kids and you play 3 classic recess games; each round eliminates kids until one rings the school bell.

### Why it can go viral
Watching dozens of kids freeze mid-run when the teacher turns, and then the one kid who wobbles and gets sent to detention, is pure clip material.

### What makes it ours

- **Twist:** Detention balcony: eliminated kids cheer or boo from above, and their noise briefly hides the teacher's turn sound on Hard.
- **Rule we invented:** Chalk bonus: drawing a quick chalk circle at your feet (hold 1 s) makes you immune to one push.
- **What we cut from the reference:** 100-player online, voice chat and cosmetics: CPU kids with personalities (rusher, careful, pusher).

## 2 · Gameplay

### Core mechanic
Move only when it's safe and survive each mini-round's elimination rule.

### Rules

1. Round 1, Teacher Turns: move while the teacher faces the board; any movement while she looks = out. Reach the line in 40 s.
2. Round 2, Hot Chalk: one glowing chalk passes by touch; whoever holds it at 0 s is out (3 cycles).
3. Round 3, Hopscotch Bridge: pick left or right tile per row; one tile breaks. Pushing is allowed.
4. Kids pushed off or caught go to the detention balcony.
5. Last kid on the far side rings the bell.

### Win / Lose
- **Win:** Ring the bell after round 3
- **Lose:** Eliminated in any round

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| WASD move · Space jump · E push | Joystick · Jump · Push |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Kids left · Round · Time
- **Hint line (shown once, under 60 chars):** "Freeze when the teacher turns!"
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Kids left), **Play Again**

### Difficulty
Easy: teacher turn warns 0.6 s early, bridge shows faint cracks · Normal: 0.3 s · Hard: no warning, CPU kids push more.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Kids | 100 |
| Turn interval | 1.5–4 s random |
| Hot chalk cycle | 12 s |
| Bridge rows | 10 |
| Movement tolerance | 0.15 U/s |

## 3 · Look and feel (style kit)

- **Scale unit:** kid height = 1U (big head, small body)
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/CFEFFF/CFEFFF.png) | Far band (sky) | `#CFEFFF` |
| ![](https://placehold.co/28x28/9ED8F5/9ED8F5.png) | Mid band | `#9ED8F5` |
| ![](https://placehold.co/28x28/8FD694/8FD694.png) | Ground / play surface | `#8FD694` |
| ![](https://placehold.co/28x28/FFB703/FFB703.png) | Hero | `#FFB703` |
| ![](https://placehold.co/28x28/E63946/E63946.png) | Accent / rewards | `#E63946` |

Catalog colours: `bgColorLight: "#CFEFFF"`, `bgColorDark: "#9ED8F5"`

### Asset sheet (sizes in units)

- Kid: 1U, round head 0.5U, backpack, 6 shirt colours
- Teacher: 1.8U, rounded hair bun, turns slowly with a whistle
- Chalk: 0.3U glowing pill
- Bridge tile: 1.2U rounded glass slab on a candy-striped frame
- Playground props (slide, swings, seesaw): 2–3U, one primary-colour rounded family

### Background (three quiet hazed bands)

1. **Far:** bright sky with soft clouds
2. **Mid:** hazy school building silhouette
3. **Near:** low hedge row

### Juice

- Teacher head-turn whoosh + freeze frame
- Eliminated kids puff into chalk dust
- Bell ring with confetti burst
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **RECESS ROYALE** | A sea of kids on a sunny playground facing a giant school bell, chalk-drawn title |
| 2 · Action | **FREEZE!** | Kids frozen in silly poses as the teacher spins around |
| 3 · Win | **LAST KID!** | Your kid ringing the bell, others cheering from the balcony |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/recess-royale.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/recess-royale.txt .shots/recess-royale --pause`, then open every PNG
- [ ] **Win path:** move only during safe windows and choose correct bridge tiles via test seed
- [ ] **Lose path:** walk continuously while the teacher looks
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Recess Royale  ·  slug: recess-royale
Brief: Solo score-chase · 2 min · palette family meadow (light) · 3D, three.js r128 from cdnjs
Pitch: A huge school playground tournament. 99 CPU kids and you play 3 classic recess games; each round eliminates kids until one rings the school bell.
Core: Move only when it's safe and survive each mini-round's elimination rule.
Rules: (1) Round 1, Teacher Turns: move while the teacher faces the board; any movement while she looks = out. Reach the line in 40 s. (2) Round 2, Hot Chalk: one glowing chalk passes by touch; whoever holds it at 0 s is out (3 cycles). (3) Round 3, Hopscotch Bridge: pick left or right tile per row; one tile breaks. Pushing is allowed. (4) Kids pushed off or caught go to the detention balcony. (5) Last kid on the far side rings the bell.
Win: Ring the bell after round 3 · Lose: Eliminated in any round
Controls: desktop WASD move · Space jump · E push · touch Joystick · Jump · Push (max 3 inputs)
HUD: Kids left · Round · Time + pause
Hint: "Freeze when the teacher turns!"
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: teacher turn warns 0.6 s early, bridge shows faint cracks · Normal: 0.3 s · Hard: no warning, CPU kids push more.
Style kit: unit = kid height = 1U (big head, small body); one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #CFEFFF, Mid band #9ED8F5, Ground / play surface #8FD694, Hero #FFB703, Accent / rewards #E63946
Assets: Kid: 1U, round head 0.5U, backpack, 6 shirt colours; Teacher: 1.8U, rounded hair bun, turns slowly with a whistle; Chalk: 0.3U glowing pill; Bridge tile: 1.2U rounded glass slab on a candy-striped frame; Playground props (slide, swings, seesaw): 2–3U, one primary-colour rounded family
Background bands: bright sky with soft clouds / hazy school building silhouette / low hedge row
Juice: Teacher head-turn whoosh + freeze frame; Eliminated kids puff into chalk dust; Bell ring with confetti burst
Feed cards: 1) Title: A sea of kids on a sunny playground facing a giant school bell, chalk-drawn title 2) FREEZE!: Kids frozen in silly poses as the teacher spins around 3) LAST KID!: Your kid ringing the bell, others cheering from the balcony
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:recess-royale:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
