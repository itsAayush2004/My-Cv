# Popular Games 2020 → 2026 — Mechanics, Design & Build Prompts

**240 games** (well past the 200 target): the big releases from 2020 to mid-2026, plus mobile/web/Roblox mega-hits and the older giants that still dominated the 2020s.

Each entry contains:

| Field | What it gives you |
|---|---|
| **Studio · Genre** | Who made it and what kind of game it is |
| **Why it hit** | The hook that made it popular. This is the part worth copying in spirit |
| **Core loop** | The repeat cycle the player lives in (on the bigger entries) |
| **Mechanics** | The systems, rules and numbers that make it work |
| **Design** | Art direction, camera, UI and audio feel |
| **Build prompt** | A ready-to-paste prompt for your game-making system |

## Files

| File | Range |
|---|---|
| [01-2020.md](01-2020.md) | 001–034 |
| [02-2021.md](02-2021.md) | 035–068 |
| [03-2022.md](03-2022.md) | 069–104 |
| [04-2023.md](04-2023.md) | 105–140 |
| [05-2024.md](05-2024.md) | 141–176 |
| [06-2025.md](06-2025.md) | 177–210 |
| [07-2026-and-mobile-roblox.md](07-2026-and-mobile-roblox.md) | 211–224 (2026), 225–234 (mobile/web/Roblox), 235–240 (evergreen giants) |
| [games.json](games.json) | All 240 entries as structured JSON (`id, title, release, year, studio, genre, why_it_hit, core_loop, mechanics, design, build_prompt`) |

## Important: build *inspired-by*, never clones

Every build prompt says **"Build an original…"** on purpose. Use the mechanics and the feel, but give every game **your own name, characters, world, art, music and UI**. Copying a real game's name, characters, art, music or levels causes trademark and copyright problems, and app stores and web portals reject clones. Mechanics and genres are free for everyone to use. Branding and assets are not.

A few entries (for example #181 Schedule I) already include a **reskin suggestion** to keep the theme family-friendly or legal.

## Master prompt template (wrap any entry with this)

```
You are building an ORIGINAL game for my system.

REFERENCE (inspiration only, do not copy names/characters/art/music):
- Genre: {genre}
- Why the reference was popular: {why_it_hit}
- Key mechanics to adapt: {mechanics}
- Design feel to adapt: {design}

TASK:
{build_prompt}

MY CONSTRAINTS:
- Platform: [HTML5 single file / Unity / Godot / Blender assets …]
- Dimension: [2D / 3D] · Target: [phone + desktop] · Players: [solo / local / online]
- Art style & palette: [my house style]
- Scope: [prototype 1 level / full game with N levels]
- Must include: start screen, pause, settings (sound), win/lose screens, mobile touch controls, saving progress.
- Give it a NEW name, NEW characters, NEW world.
```

## Tips for using it in your system

- **Scale down for HTML/mobile.** Huge open-world entries (Elden Ring, Zelda, GTA) can be cut to one core mechanic in a small arena, e.g. "the attach-anything-to-anything building from #106 in one room of puzzles".
- **Best fits for quick web/mobile builds:** 059 Wordle, 139 Suika, 225 Block Blast, 227 Connections, 070 Vampire Survivors, 098 Brotato, 144 Balatro, 155 Buckshot Roulette, 201 BALL x PIT, 067 Royal Match, 102 PowerWash, 062 Townscaper, 065 Dorfromantik, 205 Grow a Garden, 206 Steal a Brainrot, 002/034 party knockouts, 001 social deduction.
- **Mix two entries** to get something new: e.g. *Suika merge + Vampire Survivors upgrades*, *Balatro scoring + Block Blast board*, *Dave the Diver day/night split + Grow a Garden idle loop*.
- **Load `games.json`** to filter by year/genre or to pick random prompts automatically.
- 2026 entries reflect what was known up to mid-2026. Recheck details on very new games before relying on them.

## Full index

**[01-2020.md](01-2020.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 001 | Among Us | (2018, global explosion 2020) | Social deduction / party |
| 002 | Fall Guys: Ultimate Knockout | 2020 | Battle-royale party platformer |
| 003 | Hades | 2020 | Isometric action roguelite |
| 004 | Animal Crossing: New Horizons | 2020 | Life sim / social sim |
| 005 | Genshin Impact | 2020 | Open-world action RPG, gacha |
| 006 | Call of Duty: Warzone | 2020 | Battle royale FPS |
| 007 | Valorant | 2020 | 5v5 tactical hero shooter |
| 008 | Phasmophobia | 2020 | Co-op ghost hunting horror |
| 009 | Ghost of Tsushima | 2020 | Open-world samurai action |
| 010 | The Last of Us Part II | 2020 | Cinematic action-survival |
| 011 | Cyberpunk 2077 | 2020 (redeemed with 2.0 + Phantom Liberty, 2023) | Open-world first-person RPG |
| 012 | DOOM Eternal | 2020 | Arena FPS |
| 013 | Half-Life: Alyx | 2020 | VR first-person action-adventure |
| 014 | Microsoft Flight Simulator | 2020 | Flight simulation |
| 015 | Marvel's Spider-Man: Miles Morales | 2020 | Open-world superhero action |
| 016 | Demon's Souls (Remake) | 2020 | Souls-like action RPG |
| 017 | Ori and the Will of the Wisps | 2020 | Metroidvania platformer |
| 018 | Crusader Kings III | 2020 | Dynasty grand strategy / role-play |
| 019 | Spiritfarer | 2020 | Cosy management about death |
| 020 | Astro's Playroom | 2020 | 3D platformer / tech showcase (free with PS5) |
| 021 | Assassin's Creed Valhalla | 2020 | Open-world action RPG |
| 022 | Final Fantasy VII Remake | 2020 | Action RPG |
| 023 | Legends of Runeterra | 2020 | Digital card game |
| 024 | Teardown | 2020 (EA; 1.0 2022) | Voxel destruction heist sandbox |
| 025 | Paper Mario: The Origami King | 2020 | Adventure / puzzle RPG |
| 026 | Ghostrunner | 2020 | First-person parkour slasher |
| 027 | Immortals Fenyx Rising | 2020 | Open-world mythology adventure |
| 028 | Carrion | 2020 | Reverse-horror metroidvania |
| 029 | Spelunky 2 | 2020 | Roguelike platformer |
| 030 | Star Wars: Squadrons | 2020 | Cockpit space combat |
| 031 | Crash Bandicoot 4: It's About Time | 2020 | Linear 3D platformer |
| 032 | Monster Train | 2020 | Roguelike deckbuilder |
| 033 | Noita | 2020 (1.0) | Pixel-physics roguelite |
| 034 | Stumble Guys | 2020 (mobile; huge 2021–2023) | Mobile party knockout |

**[02-2021.md](02-2021.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 035 | Valheim | 2021 | Co-op survival, building |
| 036 | It Takes Two | 2021 (Game of the Year) | Co-op-only action adventure |
| 037 | Resident Evil Village | 2021 | First-person survival horror/action |
| 038 | Deathloop | 2021 | Time-loop immersive sim FPS |
| 039 | Forza Horizon 5 | 2021 | Open-world arcade racing |
| 040 | Halo Infinite | 2021 | Sci-fi FPS (semi-open campaign + F2P multiplayer) |
| 041 | Psychonauts 2 | 2021 | 3D platformer |
| 042 | Ratchet & Clank: Rift Apart | 2021 | 3D action platformer |
| 043 | Returnal | 2021 | Third-person bullet-hell roguelike |
| 044 | Inscryption | 2021 | Deckbuilder / escape room / meta-horror |
| 045 | Loop Hero | 2021 | Auto-walk roguelike / deck-placement |
| 046 | Metroid Dread | 2021 | 2D sci-fi metroidvania |
| 047 | Pokémon UNITE | 2021 | 5v5 MOBA |
| 048 | New World | 2021 | Action MMO |
| 049 | Death's Door | 2021 | Isometric action-adventure |
| 050 | Kena: Bridge of Spirits | 2021 | 3D action-adventure |
| 051 | Dyson Sphere Program | 2021 | Factory automation / space |
| 052 | Unpacking | 2021 | Zen puzzle / environmental storytelling |
| 053 | Monster Hunter Rise | 2021 | Action monster hunting |
| 054 | Guilty Gear -Strive- | 2021 | 2D anime fighting |
| 055 | Hitman 3 | 2021 | Stealth sandbox |
| 056 | Little Nightmares II | 2021 | 2.5D horror puzzle-platformer |
| 057 | Marvel's Guardians of the Galaxy | 2021 | Third-person squad action |
| 058 | Battlefield 2042 | 2021 | Large-scale military FPS |
| 059 | Wordle | 2021 (viral 2022) | Daily word puzzle |
| 060 | Poppy Playtime | 2021 | First-person horror puzzle (episodic) |
| 061 | Crab Game | 2021 | Free 100-player elimination party FPS |
| 062 | Townscaper | 2021 | Toy town builder |
| 063 | Knockout City | 2021 | Team dodgeball brawler |
| 064 | Age of Empires IV | 2021 | Historical RTS |
| 065 | Dorfromantik | 2021 | Relaxing hex-tile puzzle |
| 066 | Cookie Run: Kingdom | 2021 | Mobile kingdom builder + squad RPG (gacha) |
| 067 | Royal Match | 2021 | Match-3 + renovation |
| 068 | Chivalry 2 | 2021 | 64-player medieval melee |

**[03-2022.md](03-2022.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 069 | Elden Ring | 2022 (Game of the Year) | Open-world souls-like RPG |
| 070 | Vampire Survivors | 2022 (EA Dec 2021) | Auto-attack horde survival roguelite (created the "survivors-like" genre) |
| 071 | God of War Ragnarök | 2022 | Action adventure |
| 072 | Horizon Forbidden West | 2022 | Open-world action RPG |
| 073 | Stray | 2022 | Cat adventure |
| 074 | Tunic | 2022 | Zelda-like with secrets |
| 075 | Neon White | 2022 | Speedrun FPS platformer |
| 076 | Pokémon Legends: Arceus | 2022 | Open-zone creature-catching action RPG |
| 077 | Pokémon Scarlet & Violet | 2022 | Open-world creature RPG |
| 078 | Splatoon 3 | 2022 | Team ink shooter |
| 079 | Xenoblade Chronicles 3 | 2022 | JRPG with real-time combat |
| 080 | Kirby and the Forgotten Land | 2022 | 3D platformer |
| 081 | Cult of the Lamb | 2022 | Roguelite + colony management |
| 082 | Overwatch 2 | 2022 | 5v5 hero shooter (F2P) |
| 083 | Marvel Snap | 2022 | Fast card battler |
| 084 | Lost Ark | 2022 (West) | Isometric action MMORPG |
| 085 | Sifu | 2022 | Kung fu brawler |
| 086 | TMNT: Shredder's Revenge | 2022 | Side-scrolling beat 'em up |
| 087 | Rollerdrome | 2022 | Roller-skating action shooter |
| 088 | Signalis | 2022 | Retro survival horror |
| 089 | Pentiment | 2022 | Narrative mystery |
| 090 | A Plague Tale: Requiem | 2022 | Stealth adventure |
| 091 | Marvel's Midnight Suns | 2022 | Tactical card RPG |
| 092 | Call of Duty: Modern Warfare II | 2022 | Modern military FPS |
| 093 | Gran Turismo 7 | 2022 | Racing sim |
| 094 | Dwarf Fortress (Steam) | 2022 | Colony sim |
| 095 | Rogue Legacy 2 | 2022 | Roguelite platformer |
| 096 | Sonic Frontiers | 2022 | Open-zone high-speed platformer |
| 097 | Dome Keeper | 2022 | Mining + tower defence roguelite |
| 098 | Brotato | 2022 (EA; 1.0 2023) | Arena survivors-like |
| 099 | MultiVersus | 2022 | 2v2 platform fighter (F2P) |
| 100 | Goddess of Victory: NIKKE | 2022 | Mobile rear-view shooter gacha |
| 101 | Eggy Party | 2022 | Mobile party game + UGC |
| 102 | PowerWash Simulator | 2022 | Satisfying cleaning sim |
| 103 | Chained Echoes | 2022 | 16-bit JRPG |
| 104 | Slime Rancher 2 | 2022 (EA) | First-person ranch sim |

**[04-2023.md](04-2023.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 105 | Baldur's Gate 3 | 2023 (Game of the Year) | CRPG, turn-based tactics |
| 106 | The Legend of Zelda: Tears of the Kingdom | 2023 | Open-world physics sandbox adventure |
| 107 | Hogwarts Legacy | 2023 | Open-world magic school RPG |
| 108 | Lethal Company | 2023 | Co-op horror scavenging |
| 109 | Starfield | 2023 | Space exploration RPG |
| 110 | Marvel's Spider-Man 2 | 2023 | Open-world superhero action |
| 111 | Super Mario Bros. Wonder | 2023 | 2D platformer |
| 112 | Armored Core VI: Fires of Rubicon | 2023 | Mech action |
| 113 | Lies of P | 2023 | Souls-like |
| 114 | Alan Wake 2 | 2023 | Psychological survival horror |
| 115 | Hi-Fi Rush | 2023 | Rhythm action |
| 116 | Dave the Diver | 2023 | Diving + sushi restaurant management |
| 117 | Sea of Stars | 2023 | Retro turn-based RPG |
| 118 | Dredge | 2023 | Fishing adventure horror |
| 119 | Cocoon | 2023 | Puzzle adventure |
| 120 | Pizza Tower | 2023 | 2D high-speed platformer |
| 121 | Street Fighter 6 | 2023 | 2D fighting |
| 122 | Mortal Kombat 1 | 2023 | 2D fighting |
| 123 | Diablo IV | 2023 | Isometric action RPG |
| 124 | Honkai: Star Rail | 2023 | Turn-based gacha RPG |
| 125 | Counter-Strike 2 | 2023 | Tactical 5v5 FPS |
| 126 | Final Fantasy XVI | 2023 | Action RPG |
| 127 | Resident Evil 4 (Remake) | 2023 | Third-person action horror |
| 128 | Star Wars Jedi: Survivor | 2023 | Souls-lite action adventure |
| 129 | Remnant II | 2023 | Co-op souls-like shooter |
| 130 | Party Animals | 2023 | Physics brawler party |
| 131 | Cities: Skylines II | 2023 | City builder |
| 132 | Viewfinder | 2023 | Perspective puzzle |
| 133 | Pikmin 4 | 2023 | Creature-command strategy |
| 134 | THE FINALS | 2023 | Team game-show shooter |
| 135 | Sons of the Forest | 2023 | Survival horror |
| 136 | Monopoly GO! | 2023 | Mobile casual board game |
| 137 | Bomb Rush Cyberfunk | 2023 | Trick action / graffiti |
| 138 | The Talos Principle 2 | 2023 | First-person puzzle |
| 139 | Suika Game (Watermelon Game) | 2023 (viral) | Physics merge puzzle |
| 140 | Only Up! | 2023 | Vertical climbing "rage" game |

**[05-2024.md](05-2024.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 141 | Palworld | 2024 | Creature-collecting survival crafting |
| 142 | Helldivers 2 | 2024 | Co-op third-person shooter |
| 143 | Black Myth: Wukong | 2024 | Action RPG (souls-lite) |
| 144 | Balatro | 2024 | Poker roguelike deckbuilder |
| 145 | Final Fantasy VII Rebirth | 2024 | Action RPG |
| 146 | Dragon's Dogma 2 | 2024 | Fantasy action RPG |
| 147 | Stellar Blade | 2024 | Stylish action |
| 148 | Astro Bot | 2024 (Game of the Year) | 3D platformer |
| 149 | Animal Well | 2024 | Puzzle metroidvania |
| 150 | UFO 50 | 2024 | Collection of 50 retro games |
| 151 | Satisfactory | 2024 (1.0) | First-person factory builder |
| 152 | Manor Lords | 2024 (Early Access) | Medieval city builder + tactics |
| 153 | Enshrouded | 2024 (Early Access) | Voxel survival action RPG |
| 154 | Content Warning | 2024 | Co-op horror comedy |
| 155 | Buckshot Roulette | 2024 (Steam) | Turn-based tension gambling duel |
| 156 | Pacific Drive | 2024 | Driving survival roguelite |
| 157 | Metaphor: ReFantazio | 2024 | Fantasy JRPG |
| 158 | Prince of Persia: The Lost Crown | 2024 | 2D action metroidvania |
| 159 | Tekken 8 | 2024 | 3D fighting |
| 160 | Indiana Jones and the Great Circle | 2024 | First-person action-adventure |
| 161 | Call of Duty: Black Ops 6 | 2024 | FPS |
| 162 | Marvel Rivals | 2024 | 6v6 third-person hero shooter (F2P) |
| 163 | Zenless Zone Zero | 2024 | Urban action gacha |
| 164 | Wuthering Waves | 2024 | Open-world action gacha |
| 165 | Deadlock | 2024 (Playtest) | Third-person MOBA-shooter |
| 166 | WEBFISHING | 2024 | Cosy multiplayer social fishing |
| 167 | Thronefall | 2024 (1.0) | Minimalist tower defence / builder |
| 168 | Tiny Glade | 2024 | Relaxing castle/village diorama builder |
| 169 | Nine Sols | 2024 | 2D souls-like ("Taopunk") |
| 170 | Little Kitty, Big City | 2024 | Cosy cat adventure |
| 171 | Mouthwashing | 2024 | Psychological horror narrative |
| 172 | The Plucky Squire | 2024 | Storybook adventure |
| 173 | Frostpunk 2 | 2024 | Survival city builder |
| 174 | Warhammer 40,000: Space Marine 2 | 2024 | Third-person co-op action |
| 175 | Silent Hill 2 (Remake) | 2024 | Psychological survival horror |
| 176 | Supermarket Simulator | 2024 (EA) | First-person shop sim |

**[06-2025.md](06-2025.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 177 | Kingdom Come: Deliverance II | 2025 | Realistic medieval open-world RPG |
| 178 | Monster Hunter Wilds | 2025 | Monster-hunting action |
| 179 | Split Fiction | 2025 | Co-op adventure |
| 180 | Clair Obscur: Expedition 33 | 2025 | Turn-based RPG with real-time reactions |
| 181 | Schedule I | 2025 (Early Access) | Co-op business sim (crime) — **note:** adapt to a legal product theme for your system |
| 182 | R.E.P.O. | 2025 | Co-op physics horror extraction |
| 183 | PEAK | 2025 | Co-op climbing |
| 184 | Mario Kart World | 2025 | Kart racing (open-world) |
| 185 | Donkey Kong Bananza | 2025 | 3D destruction platformer |
| 186 | Death Stranding 2: On the Beach | 2025 | Delivery / traversal action |
| 187 | Assassin's Creed Shadows | 2025 | Open-world stealth action |
| 188 | Blue Prince | 2025 | Roguelike puzzle mansion |
| 189 | Hollow Knight: Silksong | 2025 | 2D metroidvania |
| 190 | Hades II | 2025 (1.0; EA 2024) | Isometric action roguelite |
| 191 | Ghost of Yōtei | 2025 | Open-world samurai action |
| 192 | Battlefield 6 | 2025 | Large-scale military FPS |
| 193 | DOOM: The Dark Ages | 2025 | Medieval-tech FPS |
| 194 | Elden Ring Nightreign | 2025 | Co-op souls roguelite |
| 195 | The Elder Scrolls IV: Oblivion Remastered | 2025 | Open-world fantasy RPG (remaster) |
| 196 | Dune: Awakening | 2025 | Open-world survival MMO |
| 197 | REMATCH | 2025 | 5v5 arcade football |
| 198 | Dispatch | 2025 | Superhero workplace comedy / management |
| 199 | ARC Raiders | 2025 | PvPvE extraction shooter |
| 200 | Megabonk | 2025 | 3D survivors-like |
| 201 | BALL x PIT | 2025 | Brick-breaker roguelite |
| 202 | Pokémon Legends: Z-A | 2025 | Real-time creature action RPG in one city |
| 203 | Kirby Air Riders | 2025 | Party air-racing |
| 204 | Escape from Duckov | 2025 | Top-down single-player extraction looter |
| 205 | Grow a Garden (Roblox) | 2025 | Idle multiplayer gardening |
| 206 | Steal a Brainrot (Roblox) | 2025 | Idle tycoon + steal |
| 207 | 99 Nights in the Forest (Roblox) | 2025 | Co-op survival horror |
| 208 | Bongo Cat | 2025 (Steam) | Idle desktop companion |
| 209 | Silent Hill f | 2025 | Psychological horror |
| 210 | Borderlands 4 | 2025 | Looter-shooter |

**[07-2026-and-mobile-roblox.md](07-2026-and-mobile-roblox.md)**

| # | Game | Released | Genre |
|---|---|---|---|
| 211 | Hytale | 2026 (Early Access, January) | Voxel sandbox adventure RPG |
| 212 | Arknights: Endfield | 2026 | 3D action RPG + factory automation, gacha |
| 213 | Code Vein II | 2026 | Anime souls-like action RPG |
| 214 | Nioh 3 | 2026 | Hardcore action RPG |
| 215 | Resident Evil Requiem | 2026 | Survival horror |
| 216 | Mewgenics | 2026 | Cat-breeding tactics roguelike |
| 217 | Slay the Spire 2 | 2026 (Early Access) | Roguelike deckbuilder (genre-defining series) |
| 218 | Marathon | 2026 | Sci-fi PvPvE extraction shooter |
| 219 | Crimson Desert | 2026 | Open-world action adventure |
| 220 | Pokémon Pokopia | 2026 | Cosy creature life-sim builder |
| 221 | Saros | 2026 | Third-person bullet-hell roguelite |
| 222 | Pragmata | 2026 | Sci-fi action |
| 223 | 007 First Light | 2026 | Spy action stealth |
| 224 | Forza Horizon 6 | 2026 | Open-world racing (Japan setting) |
| 225 | Block Blast! | 2022–2024 (mobile) | Block-placement puzzle |
| 226 | Survivor.io | 2022 | Mobile survivors-like |
| 227 | NYT Connections | 2023 (web) | Daily word grouping puzzle |
| 228 | Squad Busters | 2024 | Mobile squad-collector battle |
| 229 | Pokémon TCG Pocket | 2024 | Mobile collectible card game |
| 230 | Capybara Go! | 2024 | Mobile text roguelike |
| 231 | Last War: Survival / Whiteout Survival | 2023 | Mobile 4X strategy with hybrid minigame ads |
| 232 | DOORS (Roblox) | 2022 | Co-op horror room-runner |
| 233 | Dress to Impress (Roblox) | 2024 | Multiplayer fashion contest |
| 234 | Fisch (Roblox) | 2024 | Multiplayer fishing RPG |
| 235 | Fortnite | 2017, still #1 in the 2020s | Battle royale + creative platform |
| 236 | Minecraft | 2011 | Voxel survival/creative sandbox |
| 237 | Roblox | platform (2006, exploded 2020+) | User-generated game platform |
| 238 | Grand Theft Auto V / Online | 2013 | Open-world action sandbox |
| 239 | Rocket League | 2015 (F2P 2020) | Car football |
| 240 | Apex Legends | 2019 | Hero battle royale |
