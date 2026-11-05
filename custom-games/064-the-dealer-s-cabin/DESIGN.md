# 064 · The Dealer's Cabin

> **Play his cards. Then leave his cabin.**

`ARTHIS.space` · `Spooky & Mystery` · `vs CPU` · `4 min` · `spooky (dark)` · `2D canvas`

## 1 · The brief

| | |
|---|---|
| **Slug** | `the-dealer-s-cabin` → `src/offline-games/the-dealer-s-cabin.txt` |
| **Inspired by (mechanics only)** | Inscryption (card horror + escape room) |
| **Players** | vs CPU |
| **Session** | 4 min |
| **Palette family** | `spooky` (dark) |
| **Tech** | 2D canvas, Poppins, single HTML file |
| **Storage** | `arthis:the-dealer-s-cabin:best`, `arthis:the-dealer-s-cabin:settings` (try/catch) |

### Pitch
Trapped in a candle-lit cabin, you play creature card duels against a shadowy dealer. Between hands, solve the cabin's escape-room clues to find the way out.

### Why it can go viral
The creepy dealer and clever twists make people talk about it.

### What makes it ours

- **Twist:** Sacrifice to summon: big creatures cost removing your own small ones.
- **Rule we invented:** Candle lives: 2 candles; losing a duel blows one out, and finding a match relights one.
- **What we cut from the reference:** Multi-act meta story: one cabin, 3 duels and 4 room puzzles.

## 2 · Gameplay

### Core mechanic
Card duel on a 4-lane board; damage tips a scale; tip 5 to win.

### Rules

1. Squirrel cards are free fodder.
2. Sacrifice X creatures for a cost-X card.
3. Unblocked attacks tip the scale.
4. Between duels, inspect cabin items for puzzle clues.
5. Beat 3 duels and open the door.

### Win / Lose
- **Win:** Win 3 duels and unlock the door
- **Lose:** Both candles out

### Controls (max 3 inputs)

| Desktop | Touch |
|---|---|
| Drag cards · click to sacrifice · Space ring bell | Drag · tap · Bell |

### HUD, hint and sheets

- **HUD (3 stats + pause, glass panels):** Scale · Candles · Duel
- **Hint line (shown once, under 60 chars):** "Sacrifice to summon. Tip the scale."
- **Pause sheet:** Resume · Restart · Easy | Normal | Hard
- **End sheet:** result, best (Scale), **Play Again**

### Difficulty
Easy: weaker dealer deck · Normal · Hard: dealer plays traps.

### Tuning (starting values)

| Parameter | Value |
|---|---|
| Lanes | 4 |
| Scale win | 5 |
| Candles | 2 |
| Duels | 3 |

## 3 · Look and feel (style kit)

- **Scale unit:** card = 1U
- **Radius scale:** 4 · 8 · 14 · 22 · 999 (pill). No hard 90° edges anywhere.
- **Light:** top-left, one soft contact shadow under every object.
- **Material:** flat matte colour + one lighter top face (+ optional thin darker base).
- **Attention order:** play area → obstacles/pieces → player → background.
- **Minimum size:** nothing under ~6 px on a phone.

### Palette

| Swatch | Role | Hex |
|---|---|---|
| ![](https://placehold.co/28x28/17141F/17141F.png) | Far band (sky) | `#17141F` |
| ![](https://placehold.co/28x28/2B2230/2B2230.png) | Mid band | `#2B2230` |
| ![](https://placehold.co/28x28/3A2C2A/3A2C2A.png) | Ground / play surface | `#3A2C2A` |
| ![](https://placehold.co/28x28/F97316/F97316.png) | Hero | `#F97316` |
| ![](https://placehold.co/28x28/A3E635/A3E635.png) | Accent / rewards | `#A3E635` |

Catalog colours: `bgColorLight: "#17141F"`, `bgColorDark: "#2B2230"`

### Asset sheet (sizes in units)

- Cards: 1U rounded parchment with simple ink creatures
- Dealer: 3U shadow with glowing eyes and gloved hands
- Cabin props: clock, safe, painting, all rounded
- Scale: 2U brass

### Background (three quiet hazed bands)

1. **Far:** dark cabin haze
2. **Mid:** shelves of jars
3. **Near:** wooden table

### Juice

- Candle flicker
- Scale tip clunk
- Card sacrifice ink splash
- Squash and stretch on landings and impacts
- Number pops on every score change
- Light screen shake + 40–80 ms hit-stop on big moments

### Phone scaling
Cap the visible world height and zoom to width (or follow the action with a camera). Never letterbox the play area into a thin strip. Touch buttons ≥ 44 px, in the bottom corners, never over the focal point.

## 4 · Feed cards

| Card | Big word | Scene |
|---|---|---|
| 1 · Title | **THE DEALER'S CABIN** | Glowing eyes over a candle-lit card table, title carved in wood |
| 2 · Action | **SACRIFICE!** | A card dissolving into ink to summon a beast |
| 3 · Win | **ESCAPED!** | Cabin door opening to a forest dawn |

## 5 · Gate and test plan

- [ ] `node scripts/game-lint.mjs src/offline-games/the-dealer-s-cabin.txt`
- [ ] `node scripts/game-shots.cjs src/offline-games/the-dealer-s-cabin.txt .shots/the-dealer-s-cabin --pause`, then open every PNG
- [ ] **Win path:** seeded duels with fixed plays; solve puzzles and exit
- [ ] **Lose path:** end turns without playing
- [ ] Pause freezes and resumes · Play Again resets · no console errors · starts in under 1 s
- [ ] The scene reads as ONE world on phone and laptop

## 6 · Paste-ready ARTHIS prompt

```text
ARTHIS GAME: The Dealer's Cabin  ·  slug: the-dealer-s-cabin
Brief: vs CPU · 4 min · palette family spooky (dark) · 2D canvas
Pitch: Trapped in a candle-lit cabin, you play creature card duels against a shadowy dealer. Between hands, solve the cabin's escape-room clues to find the way out.
Core: Card duel on a 4-lane board; damage tips a scale; tip 5 to win.
Rules: (1) Squirrel cards are free fodder. (2) Sacrifice X creatures for a cost-X card. (3) Unblocked attacks tip the scale. (4) Between duels, inspect cabin items for puzzle clues. (5) Beat 3 duels and open the door.
Win: Win 3 duels and unlock the door · Lose: Both candles out
Controls: desktop Drag cards · click to sacrifice · Space ring bell · touch Drag · tap · Bell (max 3 inputs)
HUD: Scale · Candles · Duel + pause
Hint: "Sacrifice to summon. Tip the scale."
Pause sheet: Resume · Restart · Easy | Normal | Hard. Difficulty changes: Easy: weaker dealer deck · Normal · Hard: dealer plays traps.
Style kit: unit = card = 1U; one radius scale 4/8/14/22/999 (no hard edges); top-left light, one soft contact shadow per object; flat matte + one lighter top face; one prop family per class; nothing under 6 px on phone.
Palette: Far band (sky) #17141F, Mid band #2B2230, Ground / play surface #3A2C2A, Hero #F97316, Accent / rewards #A3E635
Assets: Cards: 1U rounded parchment with simple ink creatures; Dealer: 3U shadow with glowing eyes and gloved hands; Cabin props: clock, safe, painting, all rounded; Scale: 2U brass
Background bands: dark cabin haze / shelves of jars / wooden table
Juice: Candle flicker; Scale tip clunk; Card sacrifice ink splash
Feed cards: 1) Title: Glowing eyes over a candle-lit card table, title carved in wood 2) SACRIFICE!: A card dissolving into ink to summon a beast 3) ESCAPED!: Cabin door opening to a forest dawn
House rules: single self-contained HTML file, Poppins only, starts instantly, no splash/menus/rules modal/emoji/online/shop screens, storage arthis:the-dealer-s-cabin:* in try/catch, win AND lose reachable, Play Again resets, test at 5 sizes.
```

---
*100 Custom Viral Games · ARTHIS.space house style · see [../ARTHIS-STYLE.md](../ARTHIS-STYLE.md)*
