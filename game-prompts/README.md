# Popular Games 2020 → 2026: ARTHIS.space Prompt Pack

**240 games**: the big releases from 2020 to mid-2026, plus mobile, web and Roblox mega-hits and the older giants that still dominated the 2020s.
**Every prompt is written in the ARTHIS.space house style.** Read **[ARTHIS-STYLE.md](ARTHIS-STYLE.md)** first.

Each entry has:

| Field | What it gives you |
|---|---|
| **Studio · Genre** | Who made the reference game and what kind it is |
| **Why it hit** | The hook that made it popular (copy the spirit, not the content) |
| **Mechanics / Design** | How the reference works and feels |
| **ARTHIS prompt** | Paste-ready brief: original title + slug, players, session, palette family, the ONE core mechanic, win/lose, max 3 inputs, a 3-stat HUD, a hint under 60 chars, pause-sheet options, style kit, feed-card words and the house rules |

Big games are **reshaped** into ARTHIS mini-games: online modes become CPU bots or local 2P, campaigns become one tight 30 s to 5 min loop, and there are no menus, shops or splash screens.

## Files

| File | Range |
|---|---|
| [ARTHIS-STYLE.md](ARTHIS-STYLE.md) | House rules, style kit, 13 palette families, feed cards, phone scaling, gate checklist |
| [01-2020.md](01-2020.md) | 001–034 |
| [02-2021.md](02-2021.md) | 035–068 |
| [03-2022.md](03-2022.md) | 069–104 |
| [04-2023.md](04-2023.md) | 105–140 |
| [05-2024.md](05-2024.md) | 141–176 |
| [06-2025.md](06-2025.md) | 177–210 |
| [07-2026-and-mobile-roblox.md](07-2026-and-mobile-roblox.md) | 211–224 (2026) · 225–234 (mobile/web/Roblox) · 235–240 (evergreen giants) |
| [games.json](games.json) | All entries, including `arthis_title`, `arthis_slug`, `arthis_prompt` |
| [_arthis/](_arthis/) | Source data for the ARTHIS adaptations + `convert.py` to regenerate |

## How to use with the ARTHIS pipeline

1. Pick an entry, copy its ```text block.
2. Give it to the `arthis-new-game` flow (or your game factory) as the brief. It already states players · session · palette family · slug, so no interview is needed.
3. Check the slug is free in `src/data/offlineGames.ts`.
4. Run the gate (lint, 5-size shots, win and lose paths) from ARTHIS-STYLE.md §6.

Quick-win picks for the feed: 059 Five Letters · 139 Planet Merge · 225 Crate Crush · 227 Quad Clues · 070 Lantern Swarm · 144 Lucky Dice Parlor · 155 Fuse Box Roulette · 201 Ricochet Depths · 067 Palace Match · 102 Scrub Shine · 231 Crowd Math Run · 015 Web Swing City.

## Full index

**[01-2020.md](01-2020.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 001 | Among Us | (2018, global explosion 2020) | **Vent Detective** | `vent-detective` |
| 002 | Fall Guys: Ultimate Knockout | 2020 | **Wobble Show** | `wobble-show` |
| 003 | Hades | 2020 | **Underworld Dash** | `underworld-dash` |
| 004 | Animal Crossing: New Horizons | 2020 | **Isle Days** | `isle-days` |
| 005 | Genshin Impact | 2020 | **Element Swap** | `element-swap` |
| 006 | Call of Duty: Warzone | 2020 | **Zone Drop** | `zone-drop` |
| 007 | Valorant | 2020 | **Spike Site** | `spike-site` |
| 008 | Phasmophobia | 2020 | **Ghost Notes** | `ghost-notes` |
| 009 | Ghost of Tsushima | 2020 | **Wind Blade** | `wind-blade` |
| 010 | The Last of Us Part II | 2020 | **Last Ration** | `last-ration` |
| 011 | Cyberpunk 2077 | 2020 (redeemed with 2.0 + Phantom Liberty, 2023) | **Neon Augment** | `neon-augment` |
| 012 | DOOM Eternal | 2020 | **Rip Arena** | `rip-arena` |
| 013 | Half-Life: Alyx | 2020 | **Grab Glove Lab** | `grab-glove-lab` |
| 014 | Microsoft Flight Simulator | 2020 | **Little Landing** | `little-landing` |
| 015 | Marvel's Spider-Man: Miles Morales | 2020 | **Web Swing City** | `web-swing-city` |
| 016 | Demon's Souls (Remake) | 2020 | **Fog Knight** | `fog-knight` |
| 017 | Ori and the Will of the Wisps | 2020 | **Glow Bash** | `glow-bash` |
| 018 | Crusader Kings III | 2020 | **Crown & Kin** | `crown-kin` |
| 019 | Spiritfarer | 2020 | **Ferry of Lights** | `ferry-of-lights` |
| 020 | Astro's Playroom | 2020 | **Pocket Bot** | `pocket-bot` |
| 021 | Assassin's Creed Valhalla | 2020 | **Longboat Raid** | `longboat-raid` |
| 022 | Final Fantasy VII Remake | 2020 | **Gauge Strike** | `gauge-strike` |
| 023 | Legends of Runeterra | 2020 | **Rune Lanes** | `rune-lanes` |
| 024 | Teardown | 2020 (EA; 1.0 2022) | **Voxel Heist** | `voxel-heist` |
| 025 | Paper Mario: The Origami King | 2020 | **Ring Puzzle Brawl** | `ring-puzzle-brawl` |
| 026 | Ghostrunner | 2020 | **Wire Runner** | `wire-runner` |
| 027 | Immortals Fenyx Rising | 2020 | **Glide Myths** | `glide-myths` |
| 028 | Carrion | 2020 | **Blob Escape** | `blob-escape` |
| 029 | Spelunky 2 | 2020 | **Cave Ropes** | `cave-ropes` |
| 030 | Star Wars: Squadrons | 2020 | **Pip Pilots** | `pip-pilots` |
| 031 | Crash Bandicoot 4: It's About Time | 2020 | **Crate Dash** | `crate-dash` |
| 032 | Monster Train | 2020 | **Tower Train** | `tower-train` |
| 033 | Noita | 2020 (1.0) | **Pixel Alchemist** | `pixel-alchemist` |
| 034 | Stumble Guys | 2020 (mobile; huge 2021–2023) | **Bumper Rush** | `bumper-rush` |

**[02-2021.md](02-2021.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 035 | Valheim | 2021 | **Rune Hearth** | `rune-hearth` |
| 036 | It Takes Two | 2021 (Game of the Year) | **Tiny Tag Team** | `tiny-tag-team` |
| 037 | Resident Evil Village | 2021 | **Castle Night** | `castle-night` |
| 038 | Deathloop | 2021 | **Loop Hunter** | `loop-hunter` |
| 039 | Forza Horizon 5 | 2021 | **Festival Drift** | `festival-drift` |
| 040 | Halo Infinite | 2021 | **Grapple Arena** | `grapple-arena` |
| 041 | Psychonauts 2 | 2021 | **Mind Levels** | `mind-levels` |
| 042 | Ratchet & Clank: Rift Apart | 2021 | **Rift Ricochet** | `rift-ricochet` |
| 043 | Returnal | 2021 | **Orb Storm** | `orb-storm` |
| 044 | Inscryption | 2021 | **Candle Cards** | `candle-cards` |
| 045 | Loop Hero | 2021 | **Road Loop** | `road-loop` |
| 046 | Metroid Dread | 2021 | **Stalker Halls** | `stalker-halls` |
| 047 | Pokémon UNITE | 2021 | **Dunk Arena** | `dunk-arena` |
| 048 | New World | 2021 | **Weapon Paths** | `weapon-paths` |
| 049 | Death's Door | 2021 | **Crow Reaper** | `crow-reaper` |
| 050 | Kena: Bridge of Spirits | 2021 | **Sprout Spirits** | `sprout-spirits` |
| 051 | Dyson Sphere Program | 2021 | **Star Factory** | `star-factory` |
| 052 | Unpacking | 2021 | **Box by Box** | `box-by-box` |
| 053 | Monster Hunter Rise | 2021 | **Wire Hunt** | `wire-hunt` |
| 054 | Guilty Gear -Strive- | 2021 | **Rock Duel** | `rock-duel` |
| 055 | Hitman 3 | 2021 | **Disguise Day** | `disguise-day` |
| 056 | Little Nightmares II | 2021 | **Tiny Pair** | `tiny-pair` |
| 057 | Marvel's Guardians of the Galaxy | 2021 | **Squad Calls** | `squad-calls` |
| 058 | Battlefield 2042 | 2021 | **Storm Front** | `storm-front` |
| 059 | Wordle | 2021 (viral 2022) | **Five Letters** | `five-letters` |
| 060 | Poppy Playtime | 2021 | **Grab Pack Factory** | `grab-pack-factory` |
| 061 | Crab Game | 2021 | **Recess Rounds** | `recess-rounds` |
| 062 | Townscaper | 2021 | **Harbor Doodle** | `harbor-doodle` |
| 063 | Knockout City | 2021 | **Dodge Crew** | `dodge-crew` |
| 064 | Age of Empires IV | 2021 | **Age Towns** | `age-towns` |
| 065 | Dorfromantik | 2021 | **Hex Valley** | `hex-valley` |
| 066 | Cookie Run: Kingdom | 2021 | **Cookie Kingdom Clash** | `cookie-kingdom-clash` |
| 067 | Royal Match | 2021 | **Palace Match** | `palace-match` |
| 068 | Chivalry 2 | 2021 | **Siege Shout** | `siege-shout` |

**[03-2022.md](03-2022.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 069 | Elden Ring | 2022 (Game of the Year) | **Ashen Tree** | `ashen-tree` |
| 070 | Vampire Survivors | 2022 (EA Dec 2021) | **Lantern Swarm** | `lantern-swarm` |
| 071 | God of War Ragnarök | 2022 | **Axe Recall** | `axe-recall` |
| 072 | Horizon Forbidden West | 2022 | **Robo Beast Hunt** | `robo-beast-hunt` |
| 073 | Stray | 2022 | **Alley Paws** | `alley-paws` |
| 074 | Tunic | 2022 | **Fox Manual** | `fox-manual` |
| 075 | Neon White | 2022 | **Card Sprint** | `card-sprint` |
| 076 | Pokémon Legends: Arceus | 2022 | **Sneak Catch** | `sneak-catch` |
| 077 | Pokémon Scarlet & Violet | 2022 | **Crystal Raid** | `crystal-raid` |
| 078 | Splatoon 3 | 2022 | **Paint Splash** | `paint-splash` |
| 079 | Xenoblade Chronicles 3 | 2022 | **Titan Fusion** | `titan-fusion` |
| 080 | Kirby and the Forgotten Land | 2022 | **Stretch Pop** | `stretch-pop` |
| 081 | Cult of the Lamb | 2022 | **Lamb Rites** | `lamb-rites` |
| 082 | Overwatch 2 | 2022 | **Payload Push** | `payload-push` |
| 083 | Marvel Snap | 2022 | **Three Shrines** | `three-shrines` |
| 084 | Lost Ark | 2022 (West) | **Island Ark Raid** | `island-ark-raid` |
| 085 | Sifu | 2022 | **Aging Fist** | `aging-fist` |
| 086 | TMNT: Shredder's Revenge | 2022 | **Shell Squad** | `shell-squad` |
| 087 | Rollerdrome | 2022 | **Skate Shot** | `skate-shot` |
| 088 | Signalis | 2022 | **Six Slots** | `six-slots` |
| 089 | Pentiment | 2022 | **Manuscript Mystery** | `manuscript-mystery` |
| 090 | A Plague Tale: Requiem | 2022 | **Rat Light** | `rat-light` |
| 091 | Marvel's Midnight Suns | 2022 | **Hero Hand** | `hero-hand` |
| 092 | Call of Duty: Modern Warfare II | 2022 | **Ledge Ops** | `ledge-ops` |
| 093 | Gran Turismo 7 | 2022 | **Cafe Grand Prix** | `cafe-grand-prix` |
| 094 | Dwarf Fortress (Steam) | 2022 | **Dwarf Hold** | `dwarf-hold` |
| 095 | Rogue Legacy 2 | 2022 | **Heir Castle** | `heir-castle` |
| 096 | Sonic Frontiers | 2022 | **Boost Field** | `boost-field` |
| 097 | Dome Keeper | 2022 | **Dome Drill** | `dome-drill` |
| 098 | Brotato | 2022 (EA; 1.0 2023) | **Pickle Platoon** | `pickle-platoon` |
| 099 | MultiVersus | 2022 | **Ring Out Duo** | `ring-out-duo` |
| 100 | Goddess of Victory: NIKKE | 2022 | **Cover Burst** | `cover-burst` |
| 101 | Eggy Party | 2022 | **Egg Rush** | `egg-rush` |
| 102 | PowerWash Simulator | 2022 | **Scrub Shine** | `scrub-shine` |
| 103 | Chained Echoes | 2022 | **Overdrive Party** | `overdrive-party` |
| 104 | Slime Rancher 2 | 2022 (EA) | **Slime Barn** | `slime-barn` |

**[04-2023.md](04-2023.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 105 | Baldur's Gate 3 | 2023 (Game of the Year) | **Dice Party Quest** | `dice-party-quest` |
| 106 | The Legend of Zelda: Tears of the Kingdom | 2023 | **Glue & Go** | `glue-go` |
| 107 | Hogwarts Legacy | 2023 | **Spell School** | `spell-school` |
| 108 | Lethal Company | 2023 | **Scrap Quota** | `scrap-quota` |
| 109 | Starfield | 2023 | **Ship Snap** | `ship-snap` |
| 110 | Marvel's Spider-Man 2 | 2023 | **Twin Swing** | `twin-swing` |
| 111 | Super Mario Bros. Wonder | 2023 | **Bloom Shift** | `bloom-shift` |
| 112 | Armored Core VI: Fires of Rubicon | 2023 | **Mech Garage** | `mech-garage` |
| 113 | Lies of P | 2023 | **Puppet Parry** | `puppet-parry` |
| 114 | Alan Wake 2 | 2023 | **Mind Board** | `mind-board` |
| 115 | Hi-Fi Rush | 2023 | **Beat Brawler** | `beat-brawler` |
| 116 | Dave the Diver | 2023 | **Reef & Ramen** | `reef-ramen` |
| 117 | Sea of Stars | 2023 | **Lock Breaker RPG** | `lock-breaker-rpg` |
| 118 | Dredge | 2023 | **Fog Trawler** | `fog-trawler` |
| 119 | Cocoon | 2023 | **Orb Worlds** | `orb-worlds` |
| 120 | Pizza Tower | 2023 | **Turbo Tandoor** | `turbo-tandoor` |
| 121 | Street Fighter 6 | 2023 | **Drive Duel** | `drive-duel` |
| 122 | Mortal Kombat 1 | 2023 | **Assist Fighter** | `assist-fighter` |
| 123 | Diablo IV | 2023 | **Loot Crypt** | `loot-crypt` |
| 124 | Honkai: Star Rail | 2023 | **Starline Turns** | `starline-turns` |
| 125 | Counter-Strike 2 | 2023 | **Smoke Site** | `smoke-site` |
| 126 | Final Fantasy XVI | 2023 | **Summon Clash** | `summon-clash` |
| 127 | Resident Evil 4 (Remake) | 2023 | **Village Siege** | `village-siege` |
| 128 | Star Wars Jedi: Survivor | 2023 | **Laser Stance** | `laser-stance` |
| 129 | Remnant II | 2023 | **Root World** | `root-world` |
| 130 | Party Animals | 2023 | **Pillow Fort Panic** | `pillow-fort-panic` |
| 131 | Cities: Skylines II | 2023 | **Mini Metro City** | `mini-metro-city` |
| 132 | Viewfinder | 2023 | **Snapshot World** | `snapshot-world` |
| 133 | Pikmin 4 | 2023 | **Sprout Squad** | `sprout-squad` |
| 134 | THE FINALS | 2023 | **Vault Show** | `vault-show` |
| 135 | Sons of the Forest | 2023 | **Log Island** | `log-island` |
| 136 | Monopoly GO! | 2023 | **Bazaar Dice** | `bazaar-dice` |
| 137 | Bomb Rush Cyberfunk | 2023 | **Tag Rush** | `tag-rush` |
| 138 | The Talos Principle 2 | 2023 | **Beam Logic** | `beam-logic` |
| 139 | Suika Game (Watermelon Game) | 2023 (viral) | **Planet Merge** | `planet-merge` |
| 140 | Only Up! | 2023 | **Junk Tower** | `junk-tower` |

**[05-2024.md](05-2024.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 141 | Palworld | 2024 | **Critter Crew Camp** | `critter-crew-camp` |
| 142 | Helldivers 2 | 2024 | **Code Drop** | `code-drop` |
| 143 | Black Myth: Wukong | 2024 | **Staff Sage** | `staff-sage` |
| 144 | Balatro | 2024 | **Lucky Dice Parlor** | `lucky-dice-parlor` |
| 145 | Final Fantasy VII Rebirth | 2024 | **Lane Cards** | `lane-cards` |
| 146 | Dragon's Dogma 2 | 2024 | **Climb the Beast** | `climb-the-beast` |
| 147 | Stellar Blade | 2024 | **Perfect Parry** | `perfect-parry` |
| 148 | Astro Bot | 2024 (Game of the Year) | **Toybox Bot** | `toybox-bot` |
| 149 | Animal Well | 2024 | **Lumen Burrow** | `lumen-burrow` |
| 150 | UFO 50 | 2024 | **Retro Cartridge** | `retro-cartridge` |
| 151 | Satisfactory | 2024 (1.0) | **Belt Planet** | `belt-planet` |
| 152 | Manor Lords | 2024 (Early Access) | **Hamlet Roads** | `hamlet-roads` |
| 153 | Enshrouded | 2024 (Early Access) | **Fog Flame** | `fog-flame` |
| 154 | Content Warning | 2024 | **Spook Clip** | `spook-clip` |
| 155 | Buckshot Roulette | 2024 (Steam) | **Fuse Box Roulette** | `fuse-box-roulette` |
| 156 | Pacific Drive | 2024 | **Wagon Anomaly** | `wagon-anomaly` |
| 157 | Metaphor: ReFantazio | 2024 | **Calendar Quest** | `calendar-quest` |
| 158 | Prince of Persia: The Lost Crown | 2024 | **Shadow Marker** | `shadow-marker` |
| 159 | Tekken 8 | 2024 | **Heat Fighter** | `heat-fighter` |
| 160 | Indiana Jones and the Great Circle | 2024 | **Whip & Tomb** | `whip-tomb` |
| 161 | Call of Duty: Black Ops 6 | 2024 | **Dive Shot** | `dive-shot` |
| 162 | Marvel Rivals | 2024 | **Team-Up Heroes** | `team-up-heroes` |
| 163 | Zenless Zone Zero | 2024 | **Chain Switch** | `chain-switch` |
| 164 | Wuthering Waves | 2024 | **Echo Catcher** | `echo-catcher` |
| 165 | Deadlock | 2024 (Playtest) | **Lane Shooter** | `lane-shooter` |
| 166 | WEBFISHING | 2024 | **Dock Chat Fish** | `dock-chat-fish` |
| 167 | Thronefall | 2024 (1.0) | **Dusk Bastion** | `dusk-bastion` |
| 168 | Tiny Glade | 2024 | **Little Castle Doodle** | `little-castle-doodle` |
| 169 | Nine Sols | 2024 | **Talisman Deflect** | `talisman-deflect` |
| 170 | Little Kitty, Big City | 2024 | **Kitten Home** | `kitten-home` |
| 171 | Mouthwashing | 2024 | **Truck Echo** | `truck-echo` |
| 172 | The Plucky Squire | 2024 | **Page Hopper** | `page-hopper` |
| 173 | Frostpunk 2 | 2024 | **Heatline City** | `heatline-city` |
| 174 | Warhammer 40,000: Space Marine 2 | 2024 | **Swarm Wall** | `swarm-wall` |
| 175 | Silent Hill 2 (Remake) | 2024 | **Static Fog Town** | `static-fog-town` |
| 176 | Supermarket Simulator | 2024 (EA) | **Kirana King** | `kirana-king` |

**[06-2025.md](06-2025.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 177 | Kingdom Come: Deliverance II | 2025 | **Direction Duel** | `direction-duel` |
| 178 | Monster Hunter Wilds | 2025 | **Weather Hunt** | `weather-hunt` |
| 179 | Split Fiction | 2025 | **Two Tales** | `two-tales` |
| 180 | Clair Obscur: Expedition 33 | 2025 | **Parry Opera** | `parry-opera` |
| 181 | Schedule I | 2025 (Early Access) | **Street Snack Empire** | `street-snack-empire` |
| 182 | R.E.P.O. | 2025 | **Clank & Carry** | `clank-carry` |
| 183 | PEAK | 2025 | **Ridge Runners** | `ridge-runners` |
| 184 | Mario Kart World | 2025 | **World Kart** | `world-kart` |
| 185 | Donkey Kong Bananza | 2025 | **Punch Planet Core** | `punch-planet-core` |
| 186 | Death Stranding 2: On the Beach | 2025 | **Porter Path** | `porter-path` |
| 187 | Assassin's Creed Shadows | 2025 | **Shinobi & Samurai** | `shinobi-samurai` |
| 188 | Blue Prince | 2025 | **Rooms of Marrowfield** | `rooms-of-marrowfield` |
| 189 | Hollow Knight: Silksong | 2025 | **Silk Monarch** | `silk-monarch` |
| 190 | Hades II | 2025 (1.0; EA 2024) | **Witch Ascent** | `witch-ascent` |
| 191 | Ghost of Yōtei | 2025 | **Revenge Six** | `revenge-six` |
| 192 | Battlefield 6 | 2025 | **Breakthrough** | `breakthrough` |
| 193 | DOOM: The Dark Ages | 2025 | **Shield Saw** | `shield-saw` |
| 194 | Elden Ring Nightreign | 2025 | **Three Nights** | `three-nights` |
| 195 | The Elder Scrolls IV: Oblivion Remastered | 2025 | **Spellmaker** | `spellmaker` |
| 196 | Dune: Awakening | 2025 | **Sand Rhythm** | `sand-rhythm` |
| 197 | REMATCH | 2025 | **Gully Five** | `gully-five` |
| 198 | Dispatch | 2025 | **Hero Hotline** | `hero-hotline` |
| 199 | ARC Raiders | 2025 | **Topside Raid** | `topside-raid` |
| 200 | Megabonk | 2025 | **Hopskull Arena** | `hopskull-arena` |
| 201 | BALL x PIT | 2025 | **Ricochet Depths** | `ricochet-depths` |
| 202 | Pokémon Legends: Z-A | 2025 | **City Battle Zone** | `city-battle-zone` |
| 203 | Kirby Air Riders | 2025 | **Glide Prix** | `glide-prix` |
| 204 | Escape from Duckov | 2025 | **Pond Raid** | `pond-raid` |
| 205 | Grow a Garden (Roblox) | 2025 | **Terrace Garden** | `terrace-garden` |
| 206 | Steal a Brainrot (Roblox) | 2025 | **Snatch the Snack** | `snatch-the-snack` |
| 207 | 99 Nights in the Forest (Roblox) | 2025 | **Bonfire Nights** | `bonfire-nights` |
| 208 | Bongo Cat | 2025 (Steam) | **Typing Toad** | `typing-toad` |
| 209 | Silent Hill f | 2025 | **Red Petal Village** | `red-petal-village` |
| 210 | Borderlands 4 | 2025 | **Gun Lottery** | `gun-lottery` |

**[07-2026-and-mobile-roblox.md](07-2026-and-mobile-roblox.md)**

| # | Reference game | Released | ARTHIS title | Slug |
|---|---|---|---|---|
| 211 | Hytale | 2026 (Early Access, January) | **Block Realm** | `block-realm` |
| 212 | Arknights: Endfield | 2026 | **Field Factory Fighter** | `field-factory-fighter` |
| 213 | Code Vein II | 2026 | **Blood Code** | `blood-code` |
| 214 | Nioh 3 | 2026 | **Yokai Stances** | `yokai-stances` |
| 215 | Resident Evil Requiem | 2026 | **Hotel Requiem** | `hotel-requiem` |
| 216 | Mewgenics | 2026 | **Cat Clan Tactics** | `cat-clan-tactics` |
| 217 | Slay the Spire 2 | 2026 (Early Access) | **Paper Lantern Climb** | `paper-lantern-climb` |
| 218 | Marathon | 2026 | **Acid Runner** | `acid-runner` |
| 219 | Crimson Desert | 2026 | **Grapple Knight** | `grapple-knight` |
| 220 | Pokémon Pokopia | 2026 | **Shape Shifter Village** | `shape-shifter-village` |
| 221 | Saros | 2026 | **Eclipse Shield** | `eclipse-shield` |
| 222 | Pragmata | 2026 | **Hack & Shoot** | `hack-shoot` |
| 223 | 007 First Light | 2026 | **Young Agent** | `young-agent` |
| 224 | Forza Horizon 6 | 2026 | **Monsoon Roads** | `monsoon-roads` |
| 225 | Block Blast! | 2022–2024 (mobile) | **Crate Crush** | `crate-crush` |
| 226 | Survivor.io | 2022 | **Thumb Survivor** | `thumb-survivor` |
| 227 | NYT Connections | 2023 (web) | **Quad Clues** | `quad-clues` |
| 228 | Squad Busters | 2024 | **Squad Snowball** | `squad-snowball` |
| 229 | Pokémon TCG Pocket | 2024 | **Pocket Critter Cards** | `pocket-critter-cards` |
| 230 | Capybara Go! | 2024 | **Capy Days** | `capy-days` |
| 231 | Last War: Survival / Whiteout Survival | 2023 | **Crowd Math Run** | `crowd-math-run` |
| 232 | DOORS (Roblox) | 2022 | **Hush Hotel** | `hush-hotel` |
| 233 | Dress to Impress (Roblox) | 2024 | **Runway Rumble** | `runway-rumble` |
| 234 | Fisch (Roblox) | 2024 | **Reel Legends** | `reel-legends` |
| 235 | Fortnite | 2017, still #1 in the 2020s | **Blockfall Royale** | `blockfall-royale` |
| 236 | Minecraft | 2011 | **Cube Craft Nights** | `cube-craft-nights` |
| 237 | Roblox | platform (2006, exploded 2020+) | **Hub of Minis** | `hub-of-minis` |
| 238 | Grand Theft Auto V / Online | 2013 | **Stunt City** | `stunt-city` |
| 239 | Rocket League | 2015 (F2P 2020) | **Turbo Tuk-Tuk League** | `turbo-tuk-tuk-league` |
| 240 | Apex Legends | 2019 | **Wingsuit Royale** | `wingsuit-royale` |
