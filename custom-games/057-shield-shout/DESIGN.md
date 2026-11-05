# 057 · Shield & Shout

> **Parry their swing. Push the ram.**

`ARTHIS.space` · `Versus & Sports` · `vs CPU` · `3 min` · `ember (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `shield-shout` → `src/offline-games/shield-shout.txt` |
| **Inspired by (mechanics only)** | Chivalry 2 (directional melee) |
| **Players** | vs CPU |
| **Session** | 3 min |
| **Palette family** | `ember` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:shield-shout:best`, `arthis:shield-shout:settings` (try/catch) |

### Pitch
A side-on castle siege. Escort a battering ram to the gate while duelling defenders with directional attacks.

### Why it can go viral
Satisfying parries and comic chaos.

### What makes it ours

- **Twist:** Battle shout: stuns nearby enemies briefly.
- **Rule we invented:** Ram crew: CPU allies push the ram faster while you protect them.
- **What we cut from the reference:** 64 players: small skirmishes.

## 2 · Gameplay

### Core mechanic
Attack high, mid or low; parry by matching the direction.

### Rules

1. Attacks have a direction: high, mid or low.
2. Parry by holding parry in the attack's direction.
3. Battle shout (cooldown 10 s) stuns nearby enemies 1 s.
4. The ram moves when allies push and no defenders are near.
5. Gate breaks after 10 ram hits.

### Win / Lose
- **Win:** Break the gate
- **Lose:** Timer runs out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| A/D · J attack (W/S direction) · K parry | Stick · Attack · Parry |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** HP · Gate · Time
- **Hint line (shown once, under 60 chars):** "Match their direction to parry."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (HP), **Play Again**

### Difficulty
Easy: slow swings · Normal · Hard: feints.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Gate hits | 10 |
| Parry window | 200 ms |
| Shout cooldown | 10 s |
| Respawn | 3 s |

## 3 · Look and feel (style kit)

- **Scale unit:** knight = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/2A0F12/2A0F12.png) | Far band (sky) | `#2A0F12` |
| ![](https://placehold.co/28x28/4A1A1E/4A1A1E.png) | Mid band | `#4A1A1E` |
| ![](https://placehold.co/28x28/5A2A22/5A2A22.png) | Ground / play surface | `#5A2A22` |
| ![](https://placehold.co/28x28/FFD23F/FFD23F.png) | Hero | `#FFD23F` |
| ![](https://placehold.co/28x28/E85D3A/E85D3A.png) | Accent / rewards | `#E85D3A` |

Catalog colours: `bgColorLight: "#2A0F12"`, `bgColorDark: "#4A1A1E"`

### Asset sheet (sizes in units)

- Knights: 1U rounded armour, sword parented to hand
- Battering ram: 3U rounded log on wheels
- Castle gate: 4U wooden doors with iron bands
- Defenders with shields

### Background (three quiet hazed bands)

1. **Far:** smoky orange sky
2. **Mid:** castle walls
3. **Near:** dirt road

### Juice

- Sparks on parry
- Ram thud with screen shake
- Shout ring wave
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **SHIELD & SHOUT** | Knights pushing a ram to a castle gate, title on a shield |
| 2 · Action | **PARRY!** | Swords clashing with sparks |
| 3 · Win | **GATE BROKEN!** | Knights pouring through |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/shield-shout.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/shield-shout.txt .shots/shield-shout --pause`, then open every PNG
- [ ] **Win path:** parry script and push to break the gate
- [ ] **Lose path:** idle
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: Shield & Shout  ·  slug: shield-shout
Brief: vs CPU · 3 min · palette family ember (dark) · 2D canvas
Pitch: A side-on castle siege. Escort a battering ram to the gate while duelling defenders with directional attacks.
Core: Attack high, mid or low; parry by matching the direction.
Rules: (1) Attacks have a direction: high, mid or low. (2) Parry by holding parry in the attack's direction. (3) Battle shout (cooldown 10 s) stuns nearby enemies 1 s. (4) The ram moves when allies push and no defenders are near. (5) Gate breaks after 10 ram hits.
Win: Break the gate · Lose: Timer runs out
Controls: desktop A/D · J attack (W/S direction) · K parry · touch Stick · Attack · Parry (max 3 inputs)
HUD: HP · Gate · Time + pause
Hint: "Match their direction to parry."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: slow swings · Normal · Hard: feints.
Style kit: unit = knight = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #2A0F12, Mid band #4A1A1E, Ground / play surface #5A2A22, Hero #FFD23F, Accent / rewards #E85D3A
Assets: Knights: 1U rounded armour, sword parented to hand; Battering ram: 3U rounded log on wheels; Castle gate: 4U wooden doors with iron bands; Defenders with shields
Background bands: smoky orange sky / castle walls / dirt road
Juice: Sparks on parry; Ram thud with screen shake; Shout ring wave
Feed cards: 1) Title: Knights pushing a ram to a castle gate, title on a shield 2) PARRY!: Swords clashing with sparks 3) GATE BROKEN!: Knights pouring through
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:shield-shout:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
