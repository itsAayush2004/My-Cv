# ARTHIS.space House Style: rules every prompt in this pack follows

Every build prompt in **game-prompts/** and **custom-games/** is written to this standard.
Sources: the ARTHIS game skills (new-game, redesign, game-factory) and the public `itsAayush2004/arthis.space` showcase (feed screenshots and logo).
If your local `docs/ARTHIS-GAME-STANDARD.md` / `ARTHIS-TASTE-PROFILE.md` disagree with this file, those docs win.

---

## 1. What an ARTHIS game is

ARTHIS.space is a **TikTok-style vertical feed of mini-games**: swipe up for the next game and tap **Play**. Every card is one complete, self-contained game that is playable in seconds.

| Rule | Value |
|---|---|
| File | ONE self-contained HTML file → `src/offline-games/<slug>.txt` |
| Tech | Plain HTML + vanilla JS + canvas/CSS. No framework, no build step, no React/JSX |
| 3D | Only **three.js r128** from cdnjs. Nothing else external |
| Font | **Poppins** only |
| Start | **Instantly**: no splash, no title screen, no Play button inside the game (the feed card has the Play button) |
| Players | **vs CPU by default**. Local 2 Players only where it genuinely works (board, duel, sport) |
| Session | 30–60 s for arcade/reflex · 2–5 min for matches · longer only for builders/sims |
| Inputs | Desktop **and** touch, **max 3 inputs** |
| HUD | **Max 3 stats + a pause button**, on glass panels |
| Hint | **One hint line under 60 characters**, shown once at start |
| Pause sheet | Resume · Restart · `vs CPU \| 2 Players` (if supported) · `Easy \| Normal \| Hard` |
| End sheet | Result + best + **Play Again** (resets everything) |
| Storage | Keys `arthis:<slug>:<key>`, every read/write in `try/catch` |
| Slug | kebab-case, unique in `src/data/offlineGames.ts` |
| Files | LF line endings, native viewport meta tag, no `window.__*` test hooks in the final file |

### Never ship
Splash screens or in-game Play buttons · menus and mode-select screens · rules modals · settings screens · **emoji as art** · embedded images or external URLs · **online multiplayer**, shops, level editors, character select · more than 3 HUD stats · hard-edged or spiky shapes · mixed radii, lights or materials in one scene · a phone view where the play area is a thin strip.

> **In-run upgrade picks are fine** (choose 1 of 3, buy a charm between rounds with points earned in that run). What's banned is store/shop *screens*, real-money or meta-currency shops.

> Big online games (battle royales, MMOs, social deduction) are **reshaped**: online lobbies become CPU bots, long campaigns become one tight 30 s–5 min loop, and shops or meta progression become a single local best score.

---

## 2. The style kit (art cohesion: every object, every game)

1. **One radius scale.** No hard 90° edge anywhere. Pick radii from one scale (e.g. 4 / 8 / 14 / 22 / 999 px or equivalent world units) and use only those.
2. **One light direction**, top-left by default, with **one soft contact shadow** under every object.
3. **One material language:** flat matte colour plus a **single lighter top face** (and an optional thin darker base). No gradients-everywhere, no mixed realism.
4. **Scale discipline off a single unit.** Choose one unit (e.g. player height = 1U) and size every asset as a multiple of it.
5. **One prop family per class.** All trees share one shape language, all coins match, all enemies match.
6. **Nothing under ~6 px on a phone.**
7. **Attention order:** play area → obstacles/pieces → player → background.
8. **Background = three quiet, hazed bands** (far / mid / near) that never compete with the play area.

### Asset craft
Real rigs: limbs and heads move. Held items are parented to hands, and drivers sit **inside** vehicles.
**Everything scrolls when the player moves**, so the scenery is never static under a moving player.
Trails and ground shadows on moving things. Eased movement with run cycles.
**Juice on every action:** squash and stretch, particles, number pops, light screen shake, hit-stop.

### Character look (from the feed)
Chunky, rounded cartoon mascots with big expressive eyes, bold dark outlines on cover art, soft cel shading and readable silhouettes. Examples: a blue cube runner, a strawberry hero.

---

## 3. Palette families

Use a **light family** unless the theme is space, night, arcade or fighting. Don't reuse a neighbour game's family in the feed. In the catalog, `bgColorLight`/`bgColorDark` echo the game's palette.

| Key | Mood | Sky / far | Mid | Hero | Accent | Ink |
|---|---|---|---|---|---|---|
| `meadow` (light) | sunny outdoors | `#CFEFFF` | `#8FD694` | `#FF8A65` | `#FFD166` | `#2E3A59` |
| `candy` (light) | sweet, cute | `#FFE3EE` | `#C9F2E3` | `#FF6F91` | `#FFD36E` | `#4A3B5C` |
| `sand` (light) | desert, beach, warm | `#FFF1D6` | `#F4C47A` | `#E07A5F` | `#3D9A8B` | `#3B2F2A` |
| `ocean` (light) | water, sky, cool | `#D7F3FF` | `#7FD1E8` | `#2F80ED` | `#FFC857` | `#1D3557` |
| `snow` (light) | winter, clean | `#EEF6FF` | `#BFD7EA` | `#6C9BD2` | `#FF7B54` | `#2B3A55` |
| `jungle` (light) | nature, adventure | `#E4F7D9` | `#7CC47F` | `#2E8B57` | `#FFB347` | `#24382B` |
| `paper` (light) | doodle, puzzle, board | `#FBF6EC` | `#E9DCC3` | `#5B8DEF` | `#F25F5C` | `#2D2A32` |
| `peach` (light) | sunset, cosy | `#FFE8D6` | `#FFB997` | `#F67E7D` | `#843B62` | `#3A2E39` |
| `night` (dark) | night, stealth | `#141B33` | `#2A3A6B` | `#7FDBFF` | `#FFD166` | `#F4F1E8` |
| `arcade` (dark) | neon, rhythm, retro | `#1A0B2E` | `#3D1A6E` | `#2BD2FF` | `#FF3CAC` | `#FFE66D` |
| `space` (dark) | space, sci-fi | `#0B1026` | `#1F2A5A` | `#4EE6C1` | `#8C7CFF` | `#FFF3B0` |
| `ember` (dark) | fighting, lava, war | `#2A0F12` | `#5C1E22` | `#FF7A3D` | `#FFD23F` | `#F8EDE3` |
| `spooky` (dark) | horror-lite, mystery | `#17141F` | `#352C45` | `#A3E635` | `#F97316` | `#EDE7F6` |

**Site chrome** (feed UI, not the game): ARTHIS yellow `#FFC800` (logo and Play pill), near-black `#1A1A1A`, feed background tinted per game (purple `#3B0F6B`, wine `#7A1F3D`, deep teal `#12343B`). The game file never draws this chrome.

---

## 4. Feed cards (3 cover images per game)

Each game gets **three portrait cards** (about 9:16, large rounded corners), drawn in the same illustrated style:

1. **Title card:** the mascot hero in its world with the game name in chunky 3D lettering on the ground or a sign.
2. **Action card:** the defining moment with a one-word shout (`JUMP!`, `MERGE!`, `DODGE!`).
3. **Win card:** the hero celebrating with confetti or light rays and `YOU WIN!`, `SURVIVED!` or `NEW BEST!`.

These are site assets (generated separately, e.g. `npm run new:game-assets -- <slug>`). The game itself never embeds images.

---

## 5. Phone scaling

Test at 5 sizes (small phone, large phone, tablet, laptop, wide desktop) in portrait and landscape.
Never letterbox the play area into a thin strip: **cap the visible world height and zoom to width**, or follow the action with a camera. Touch targets are at least 44 px. Controls never cover the play area's focal point.

---

## 6. The gate (before shipping)

```bash
node scripts/game-lint.mjs <file>
node scripts/game-shots.cjs <file> .shots/<slug> --pause
npm run build && npm run preview   # open /game/<slug>
```

Checklist: no console errors · nothing overlaps or is cut off · starts instantly · pause freezes and resumes · **win AND lose reachable** · Play Again resets · storage in try/catch · one hint line under 60 chars · open every screenshot and confirm the scene reads as **one world**. "Correct but messy" is a fail.

---

## 7. ARTHIS prompt shape (used by every entry)

```text
ARTHIS GAME: <Title>  ·  slug: <slug>
Brief: <players> · <session> · palette family <key> (<light/dark>) · <2D canvas | 3D three.js r128>
Core: <the ONE defining mechanic + rules>
Win / Lose: <…> / <…>
Controls: desktop <…> · touch <…> (max 3 inputs)
HUD: <stat 1> · <stat 2> · <stat 3> + pause
Hint: "<under 60 chars>"
Pause sheet: Resume · Restart · <vs CPU | 2 Players> · Easy | Normal | Hard (<what difficulty changes>)
Style kit: <unit>, one radius scale (no hard edges), top-left light + contact shadows, flat matte + lighter top face, 3 hazed background bands
Feed cards: Title / <ACTION WORD!> / <WIN WORD!>
Rules: single HTML file, Poppins only, starts instantly, no splash/menus/emoji/online/shops, storage arthis:<slug>:*, win+lose reachable, test at 5 sizes.
```
