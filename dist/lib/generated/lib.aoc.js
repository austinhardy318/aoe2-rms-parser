"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "general": [
        {
            "name": "DEATH_MATCH",
            "description": "Deathmatch game type is selected."
        },
        {
            "name": "REGICIDE",
            "description": "Regicide game type is selected."
        },
        {
            "name": "TINY_MAP",
            "description": "Tiny map is selected, 120x120 tiles."
        },
        {
            "name": "SMALL_MAP",
            "description": "Small map is selected, 144x144 tiles."
        },
        {
            "name": "MEDIUM_MAP",
            "description": "Medium map is selected, 168x168 tiles."
        },
        {
            "name": "LARGE_MAP",
            "description": "Large map is selected, 200x200 tiles."
        },
        {
            "name": "HUGE_MAP",
            "description": "Huge map is selected, 220x220 tiles."
        },
        {
            "name": "GIGANTIC_MAP",
            "description": "Gigantic map is selected, 240x240 tiles."
        },
        {
            "name": "FIXED_POSITIONS",
            "description": "\"Team Together\" box is checked."
        },
        {
            "name": "HIGH_RESOURCES",
            "description": "High resources."
        },
        {
            "name": "MEDIUM_RESOURCES",
            "description": "Medium resources."
        },
        {
            "name": "LOW_RESOURCES",
            "description": "Low resources."
        },
        {
            "name": "DEFAULT_RESOURCES",
            "description": "Default resources."
        }
    ],
    "terrains": [
        {
            "name": "GRASS",
            "value": 0,
            "description": "Grass terrain. Default."
        },
        {
            "name": "WATER",
            "value": 1,
            "description": "Water terrain."
        },
        {
            "name": "BEACH",
            "value": 2,
            "description": "Beach terrain. Automatically placed around coasts. Sailable. No buildings except walls and docks."
        },
        {
            "name": "DIRT3",
            "value": 3,
            "description": "Greenish dirt terrain."
        },
        {
            "name": "SHALLOW",
            "value": 4,
            "description": "Shallow terrain. Grassy water, sailable and walkable."
        },
        {
            "name": "LEAVES",
            "value": 5,
            "description": "Forest leaves terrain. Terrain left when temperate or tropical forest is chopped."
        },
        {
            "name": "DIRT",
            "value": 6,
            "description": "Dirt terrain. Includes some cactus objects."
        },
        {
            "value": 7,
            "description": "Planted farms terrain. Not actual farms!"
        },
        {
            "value": 8,
            "description": "Expired farms terrain. Not actual farms!"
        },
        {
            "name": "GRASS3",
            "value": 9,
            "description": "Brownish grass terrain."
        },
        {
            "name": "FOREST",
            "value": 10,
            "description": "Oak forest terrain."
        },
        {
            "name": "DIRT2",
            "value": 11,
            "description": "Dirt and grass mix terrain."
        },
        {
            "name": "GRASS2",
            "value": 12,
            "description": "Bright grass terrain."
        },
        {
            "name": "PALM_DESERT",
            "value": 13,
            "description": "Palm forest terrain. Leaves behind DESERT when chopped."
        },
        {
            "name": "DESERT",
            "value": 14,
            "description": "Desert terrain."
        },
        {
            "value": 15,
            "description": "Water terrain. Like `WATER` but has no beaches. Not dockable."
        },
        {
            "value": 16,
            "description": "Grass terrain. Looks like `GRASS`, automatically placed under cliffs."
        },
        {
            "name": "JUNGLE",
            "value": 17,
            "description": "Jungle forest terrain."
        },
        {
            "name": "BAMBOO",
            "value": 18,
            "description": "Bamboo forest terrain."
        },
        {
            "name": "PINE_FOREST",
            "value": 19,
            "description": "Pine forest terrain."
        },
        {
            "name": "FOREST",
            "value": 20,
            "description": "Oak forest terrain. Looks exactly like `FOREST` but the trees are called \"Oak forest\"."
        },
        {
            "name": "SNOW_FOREST",
            "value": 21,
            "description": "Snowy forest terrain. Leaves behind GRASS_SNOW when chopped."
        },
        {
            "name": "DEEP_WATER",
            "value": 22,
            "description": "Dark water terrain. Not dockable."
        },
        {
            "name": "MED_WATER",
            "value": 23,
            "description": "Darker water terrain. Not dockable."
        },
        {
            "name": "ROAD",
            "value": 24,
            "description": "Road terrain. You can't place gold, stone, berries on any type of road."
        },
        {
            "name": "ROAD2",
            "value": 25,
            "description": "Ruined road terrain. You can't place gold, stone, berries on any type of road."
        },
        {
            "value": 26,
            "description": "Ice terrain. Like `ICE` but sailable."
        },
        {
            "value": 27,
            "description": "Dirt and grass mix terrain with no beach. Like DIRT2 but has no sandy beaches, still dockable."
        },
        {
            "value": 28,
            "description": "Water terrain.Like `WATER` but walkable and has no beaches. Not sailable."
        },
        {
            "value": 29,
            "description": "Ploughed farms terrain. Not actual farms!"
        },
        {
            "value": 30,
            "description": "Growing farms terrain. Not actual farms!"
        },
        {
            "value": 31,
            "description": "Almost grown farms terrain. Not actual farms!"
        },
        {
            "name": "SNOW",
            "value": 32,
            "description": "Snow terrain."
        },
        {
            "name": "DIRT_SNOW",
            "value": 33,
            "description": "Snowy dirt terrain with icy beaches."
        },
        {
            "name": "GRASS_SNOW",
            "value": 34,
            "description": "Snowy grass terrain. Left behind when snowy forest is chopped."
        },
        {
            "name": "ICE",
            "value": 35,
            "description": "Ice terrain. Not sailable. No buildings."
        },
        {
            "value": 36,
            "description": "Snowy dirt terrain with sandy beaches."
        },
        {
            "value": 37,
            "description": "Icy beach terrain. Automatically placed around snowy coasts. Sailable. No buildings except walls and docks."
        },
        {
            "value": 38,
            "description": "Snowy road terrain. You can't place gold, stone, berries on any type of road."
        },
        {
            "value": 39,
            "description": "Grassy road terrain. You can't place gold, stone, berries on any type of road."
        },
        {
            "value": 40,
            "description": "Road terrain. No buildings, used in King of the Hill game type around the relic. You can't place gold, stone, berries on any type of road."
        }
    ],
    "entities": [
        {
            "name": "MILITIA",
            "value": 74,
            "description": "Militia. Dark Age unit."
        },
        {
            "name": "MAN_AT_ARMS",
            "value": 75,
            "description": "Man-at-Arms. Feudal Age unit."
        },
        {
            "name": "LONG_SWORDSMAN",
            "value": 77,
            "description": "Long Swordsman. Castle Age unit."
        },
        {
            "name": "TWO_HANDED_SWORDSMAN",
            "value": 473,
            "description": "Two-Handed Swordsman. Imperial Age unit."
        },
        {
            "name": "CHAMPION",
            "value": 567,
            "description": "Champion. Imperial Age unit."
        },
        {
            "name": "SPEARMAN",
            "value": 93,
            "description": "Spearman. Feudal Age unit."
        },
        {
            "name": "PIKEMAN",
            "value": 358,
            "description": "Pikeman. Castle Age unit."
        },
        {
            "name": "HALBERDIER",
            "value": 359,
            "description": "Halberdier. Imperial Age unit."
        },
        {
            "name": "EAGLE_WARRIOR",
            "value": 751,
            "description": "Eagle Warrior. Castle Age unit."
        },
        {
            "name": "ELITE_EAGLE_WARRIOR",
            "value": 752,
            "description": "Elite Eagle Warrior. Imperial Age unit."
        },
        {
            "name": "ARCHER",
            "value": 4,
            "description": "Archer. Feudal Age unit."
        },
        {
            "name": "CROSSBOWMAN",
            "value": 24,
            "description": "Crossbowman. Castle Age unit."
        },
        {
            "name": "ARBALEST",
            "value": 492,
            "description": "Arbalest. Imperial Age unit."
        },
        {
            "name": "SKIRMISHER",
            "value": 7,
            "description": "Skirmisher. Feudal Age unit."
        },
        {
            "name": "ELITE_SKIRMISHER",
            "value": 6,
            "description": "Elite Skirmisher. Castle Age unit."
        },
        {
            "name": "HAND_CANNONEER",
            "value": 5,
            "description": "Hand Cannoneer. Imperial Age unit."
        },
        {
            "name": "CAVALRY_ARCHER",
            "value": 39,
            "description": "Cavalry Archer. Castle Age unit."
        },
        {
            "name": "HEAVY_CAVALRY_ARCHER",
            "value": 474,
            "description": "Heavy Cavalry Archer. Imperial Age unit."
        },
        {
            "name": "SCOUT",
            "value": 448,
            "description": "Scout. Feudal Age unit. Automatically replaced by an Eagle Warrior for Mesoamerican civilizations."
        },
        {
            "name": "SCOUT_CAVALRY",
            "value": 448,
            "description": "Scout. Feudal Age unit. Automatically replaced by an Eagle Warrior for Mesoamerican civilizations."
        },
        {
            "name": "LIGHT_CAVALRY",
            "value": 546,
            "description": "Light Cavalry. Castle Age unit."
        },
        {
            "name": "HUSSAR",
            "value": 441,
            "description": "Hussar. Imperial Age unit."
        },
        {
            "name": "KNIGHT",
            "value": 38,
            "description": "Knight. Castle Age unit."
        },
        {
            "name": "CAVALIER",
            "value": 283,
            "description": "Cavalier. Imperial Age unit."
        },
        {
            "name": "PALADIN",
            "value": 569,
            "description": "Paladin. Imperial Age unit."
        },
        {
            "name": "CAMEL",
            "value": 329,
            "description": "Camel. Castle Age unit."
        },
        {
            "name": "HEAVY_CAMEL",
            "value": 330,
            "description": "Heavy Camel. Imperial Age unit."
        },
        {
            "name": "BATTERING_RAM",
            "value": 35,
            "description": "Battering Ram. Castle Age unit."
        },
        {
            "name": "CAPPED_RAM",
            "value": 422,
            "description": "Capped Ram. Imperial Age unit."
        },
        {
            "name": "SIEGE_RAM",
            "value": 548,
            "description": "Siege Onager. Imperial Age unit."
        },
        {
            "name": "SCORPION",
            "value": 279,
            "description": "Scorpion. Castle Age unit."
        },
        {
            "name": "HEAVY_SCORPION",
            "value": 542,
            "description": "Heavy Scorpion. Imperial Age unit."
        },
        {
            "name": "BOMBARD_CANNON",
            "value": 36,
            "description": "Bombard Cannon. Imperial Age unit."
        },
        {
            "name": "MANGONEL",
            "value": 280,
            "description": "Mangonel. Castle Age unit."
        },
        {
            "name": "ONAGER",
            "value": 550,
            "description": "Onager. Imperial Age unit."
        },
        {
            "name": "SIEGE_ONAGER",
            "value": 588,
            "description": "Siege Onager. Imperial Age unit."
        },
        {
            "name": "FISHING_SHIP",
            "value": 13,
            "description": "Fishing Ship. Dark Age unit."
        },
        {
            "name": "TRADE_COG",
            "value": 17,
            "description": "Trade Cog. Feudal Age unit."
        },
        {
            "name": "TRANSPORT_SHIP",
            "value": 545,
            "description": "Transport Ship. Feudal Age unit."
        },
        {
            "name": "GALLEY",
            "value": 539,
            "description": "Galley. Feudal Age unit."
        },
        {
            "name": "WAR_GALLEY",
            "value": 21,
            "description": "War Galley. Castle Age unit."
        },
        {
            "name": "GALLEON",
            "value": 442,
            "description": "Galleon. Imperial Age unit."
        },
        {
            "name": "FIRE_SHIP",
            "value": 529,
            "description": "Fire Ship. Castle Age unit."
        },
        {
            "name": "FAST_FIRE_SHIP",
            "value": 532,
            "description": "Fast Fire Ship. Imperial Age unit."
        },
        {
            "name": "CANNON_GALLEON",
            "value": 420,
            "description": "Cannon Galleon. Imperial Age unit."
        },
        {
            "name": "ELITE_CANNON_GALLEON",
            "value": 691,
            "description": "Elite Cannon Galleon. Imperial Age unit."
        },
        {
            "name": "DEMOLITION_SHIP",
            "value": 527,
            "description": "Demolition Ship. Castle Age unit."
        },
        {
            "name": "HEAVY_DEMOLITION_SHIP",
            "value": 528,
            "description": "Heavy Demolition Ship. Imperial Age unit."
        },
        {
            "name": "LONGBOAT",
            "value": 250,
            "description": "Longboat. Castle Age unit."
        },
        {
            "name": "ELITE_LONGBOAT",
            "value": 533,
            "description": "Elite Longboat. Imperial Age unit."
        },
        {
            "name": "TURTLE_SHIP",
            "value": 831,
            "description": "Turtle Ship. Castle Age unit."
        },
        {
            "name": "ELITE_TURTLE_SHIP",
            "value": 832,
            "description": "Elite Turtle Ship. Imperial Age unit."
        },
        {
            "name": "TREBUCHET",
            "value": 42,
            "description": "Trebuched, unpacked version. Imperial Age unit. See also: `TREBUCHET_PACKED`."
        },
        {
            "name": "TREBUCHET_PACKED",
            "value": 331,
            "description": "Trebuched, packed version. Imperial Age unit. See also: `TREBUCHET`."
        },
        {
            "name": "PETARD",
            "value": 440,
            "description": "Petard. Castle Age unit."
        },
        {
            "name": "BERSERK",
            "value": 692,
            "description": "Berserk. Castle Age unit."
        },
        {
            "name": "ELITE_BERSERK",
            "value": 694,
            "description": "Elite Berserk. Imperial Age unit."
        },
        {
            "name": "CATAPHRACT",
            "value": 40,
            "description": "Cataphract. Castle Age unit."
        },
        {
            "name": "ELITE_CATAPHRACT",
            "value": 553,
            "description": "Elite Cataphract. Imperial Age unit."
        },
        {
            "name": "CHU_KO_NU",
            "value": 73,
            "description": "Chu Ko Nu. Castle Age unit."
        },
        {
            "name": "ELITE_CHU_KO_NU",
            "value": 559,
            "description": "Elite Chu Ko Nu. Imperial Age unit."
        },
        {
            "name": "CONQUISTADOR",
            "value": 771,
            "description": "Conquistador. Castle Age unit."
        },
        {
            "name": "ELITE_CONQUISTADOR",
            "value": 773,
            "description": "Elite Conquistador. Imperial Age unit."
        },
        {
            "name": "HUSKARL",
            "value": 41,
            "description": "Huskarl. Castle Age unit."
        },
        {
            "name": "ELITE_HUSKARL",
            "value": 555,
            "description": "Elite Huskarl. Imperial Age unit."
        },
        {
            "name": "JAGUAR_WARRIOR",
            "value": 725,
            "description": "Jaguar Warrior. Castle Age unit."
        },
        {
            "name": "ELITE_JAGUAR_WARRIOR",
            "value": 726,
            "description": "Elite Jaguar Warrior. Imperial Age unit."
        },
        {
            "name": "JANISSARY",
            "value": 46,
            "description": "Janissary. Castle Age unit."
        },
        {
            "name": "ELITE_JANISSARY",
            "value": 557,
            "description": "Elite Janissary. Imperial Age unit."
        },
        {
            "name": "LONGBOWMAN",
            "value": 8,
            "description": "Longbowman. Castle Age unit."
        },
        {
            "name": "ELITE_LONGBOWMAN",
            "value": 530,
            "description": "Elite Longbowman. Imperial Age unit."
        },
        {
            "name": "MAMELUKE",
            "value": 282,
            "description": "Mameluke. Castle Age unit."
        },
        {
            "name": "ELITE_MAMELUKE",
            "value": 556,
            "description": "Elite Mameluke. Imperial Age unit."
        },
        {
            "name": "MANGUDAI",
            "value": 11,
            "description": "Mangudai. Castle Age unit."
        },
        {
            "name": "ELITE_MANGUDAI",
            "value": 561,
            "description": "Elite Mangudai. Imperial Age unit."
        },
        {
            "name": "PLUMED_ARCHER",
            "value": 763,
            "description": "Plumed Archer. Castle Age unit."
        },
        {
            "name": "ELITE_PLUMED_ARCHER",
            "value": 765,
            "description": "Elite Plumed Archer. Imperial Age unit."
        },
        {
            "name": "SAMURAI",
            "value": 291,
            "description": "Samurai. Castle Age unit."
        },
        {
            "name": "ELITE_SAMURAI",
            "value": 560,
            "description": "Elite Samurai. Imperial Age unit."
        },
        {
            "name": "TARKAN",
            "value": 755,
            "description": "Tarkan. Castle Age unit."
        },
        {
            "name": "ELITE_TARKAN",
            "value": 757,
            "description": "Elite Tarkan. Imperial Age unit."
        },
        {
            "name": "TEUTONIC_KNIGHT",
            "value": 25,
            "description": "Teutonic Knight. Castle Age unit."
        },
        {
            "name": "ELITE_TEUTONIC_KNIGHT",
            "value": 554,
            "description": "Elite Teutonic Knight. Imperial Age unit."
        },
        {
            "name": "THROWING_AXEMAN",
            "value": 281,
            "description": "Throwing Axeman. Castle Age unit."
        },
        {
            "name": "ELITE_THROWING_AXEMAN",
            "value": 531,
            "description": "Elite Throwing Axeman. Imperial Age unit."
        },
        {
            "name": "WAR_ELEPHANT",
            "value": 239,
            "description": "War Elephant. Castle Age unit."
        },
        {
            "name": "ELITE_WAR_ELEPHANT",
            "value": 558,
            "description": "Elite War Elephant. Imperial Age unit."
        },
        {
            "name": "WAR_WAGON",
            "value": 827,
            "description": "War Wagon. Castle Age unit."
        },
        {
            "name": "ELITE_WAR_WAGON",
            "value": 829,
            "description": "Elite War Wagon. Imperial Age unit."
        },
        {
            "name": "WOAD_RAIDER",
            "value": 232,
            "description": "Woad Raider. Castle Age unit."
        },
        {
            "name": "ELITE_WOAD_RAIDER",
            "value": 534,
            "description": "Elite Woad Raider. Imperial Age unit."
        },
        {
            "name": "MONK",
            "value": 125,
            "description": "Monk. Castle Age unit."
        },
        {
            "name": "MISSIONARY",
            "value": 775,
            "description": "Missionary. Castle Age unit."
        },
        {
            "name": "KING",
            "value": 434,
            "description": "King. Must be manually placed for Regicide game type to work. See also: `REGICIDE`."
        },
        {
            "name": "TRADE_CART",
            "value": 128,
            "description": "Trade Cart. Feudal Age unit."
        },
        {
            "value": 204,
            "description": "Trade Cart, full. Not actually carrying gold. Feudal Age unit."
        },
        {
            "name": "VILLAGER",
            "description": "Villager. If you don't set `number_of_objects`, the game will automatically place 3 villagers, 6 for Chinese, 4 for Mayas."
        },
        {
            "value": 293,
            "description": "Female villager."
        },
        {
            "value": 83,
            "description": "Male villager."
        },
        {
            "value": 212,
            "description": "Female builder villager."
        },
        {
            "value": 118,
            "description": "Male builder villager."
        },
        {
            "value": 214,
            "description": "Female farmer villager."
        },
        {
            "value": 259,
            "description": "Male farmer villager."
        },
        {
            "value": 57,
            "description": "Female fisher villager."
        },
        {
            "value": 56,
            "description": "Male fisher villager."
        },
        {
            "value": 354,
            "description": "Female gatherer villager."
        },
        {
            "value": 120,
            "description": "Male gatherer villager."
        },
        {
            "value": 581,
            "description": "Female miner villager."
        },
        {
            "value": 579,
            "description": "Male miner villager."
        },
        {
            "value": 216,
            "description": "Female hunter villager."
        },
        {
            "value": 122,
            "description": "Male hunter villager."
        },
        {
            "value": 218,
            "description": "Female chopper villager."
        },
        {
            "value": 123,
            "description": "Male chopper villager."
        },
        {
            "value": 590,
            "description": "Female shepherd villager."
        },
        {
            "value": 592,
            "description": "Male shepherd villager."
        },
        {
            "name": "ADMIRAL_YI_SUN_SHIN",
            "value": 844,
            "description": "ADMIRAL_YI_SUN_SHIN. Hero unit."
        },
        {
            "name": "AETHELFIRTH",
            "value": 169,
            "description": "AETHELFIRTH. Hero unit."
        },
        {
            "value": 197,
            "description": "Alexander Nevski. Hero unit."
        },
        {
            "name": "ARCHBISHOP",
            "value": 177,
            "description": "ARCHBISHOP. Hero unit."
        },
        {
            "name": "ARCHERS_OF_THE_EYES",
            "value": 686,
            "description": "ARCHERS_OF_THE_EYES. Hero unit."
        },
        {
            "name": "ATTILA_THE_HUN",
            "value": 777,
            "description": "ATTILA_THE_HUN. Hero unit."
        },
        {
            "name": "BAD_NEIGHBOR",
            "value": 682,
            "description": "BAD_NEIGHBOR. Hero unit."
        },
        {
            "name": "BAD_NEIGHBOR_PACKED",
            "value": 730,
            "description": "BAD_NEIGHBOR_PACKED. Hero unit."
        },
        {
            "name": "BELISARIUS",
            "value": 167,
            "description": "BELISARIUS. Hero unit."
        },
        {
            "name": "CHARLEMAGNE",
            "value": 165,
            "description": "CHARLEMAGNE. Hero unit."
        },
        {
            "name": "CHARLES_MARTEL",
            "value": 424,
            "description": "CHARLES_MARTEL. Hero unit."
        },
        {
            "name": "CONSTABLE_RICHEMONT",
            "value": 646,
            "description": "CONSTABLE_RICHEMONT. Hero unit."
        },
        {
            "name": "DUKE_D_ALENCON",
            "value": 638,
            "description": "DUKE_D_ALENCON. Hero unit."
        },
        {
            "name": "EL_CID",
            "value": 198,
            "description": "EL_CID. Hero unit."
        },
        {
            "name": "EL_CID_CAMPEADOR",
            "value": 824,
            "description": "EL_CID_CAMPEADOR. Hero unit."
        },
        {
            "name": "EMPEROR_IN_A_BARREL",
            "value": 733,
            "description": "EMPEROR_IN_A_BARREL. Hero unit."
        },
        {
            "name": "ERIK_THE_RED",
            "value": 171,
            "description": "ERIK_THE_RED. Hero unit."
        },
        {
            "name": "FRANKISH_PALADIN",
            "value": 632,
            "description": "FRANKISH_PALADIN. Hero unit."
        },
        {
            "name": "FRIAR_TUCK",
            "value": 163,
            "description": "FRIAR_TUCK. Hero unit."
        },
        {
            "name": "GAWAIN",
            "value": 175,
            "description": "GAWAIN. Hero unit."
        },
        {
            "name": "GENGHIS_KHAN",
            "value": 731,
            "description": "GENGHIS_KHAN. Hero unit."
        },
        {
            "name": "GODS_OWN_SLING",
            "value": 683,
            "description": "GODS_OWN_SLING. Hero unit."
        },
        {
            "name": "GODS_OWN_SLING_PACKED",
            "value": 729,
            "description": "GODS_OWN_SLING_PACKED. Hero unit."
        },
        {
            "name": "GUY_JOSSELYNE",
            "value": 648,
            "description": "GUY_JOSSELYNE. Hero unit."
        },
        {
            "name": "HENRY_V",
            "value": 847,
            "description": "HENRY_V. Hero unit."
        },
        {
            "name": "HROLF_THE_GANGER",
            "value": 428,
            "description": "HROLF_THE_GANGER. Hero unit."
        },
        {
            "name": "HUNTING_WOLF",
            "value": 700,
            "description": "HUNTING_WOLF. Hero unit."
        },
        {
            "name": "IMAM",
            "value": 842,
            "description": "IMAM. Hero unit."
        },
        {
            "name": "JEAN_BUREAU",
            "value": 650,
            "description": "JEAN_BUREAU. Hero unit."
        },
        {
            "name": "JEAN_DE_LORRAIN",
            "value": 644,
            "description": "JEAN_DE_LORRAIN. Hero unit."
        },
        {
            "name": "JOAN_OF_ARC",
            "value": 629,
            "description": "JOAN_OF_ARC. Hero unit."
        },
        {
            "name": "JOAN_THE_MAID",
            "value": 430,
            "description": "JOAN_THE_MAID. Hero unit."
        },
        {
            "name": "KING_ALFONSO",
            "value": 840,
            "description": "KING_ALFONSO. Hero unit."
        },
        {
            "name": "KING_ARTHUR",
            "value": 173,
            "description": "KING_ARTHUR. Hero unit."
        },
        {
            "name": "KING_SANCHO",
            "value": 838,
            "description": "KING_SANCHO. Hero unit."
        },
        {
            "name": "KITABATAKE",
            "value": 195,
            "description": "KITABATAKE. Hero unit."
        },
        {
            "name": "KUSHLUK",
            "value": 702,
            "description": "KUSHLUK. Hero unit."
        },
        {
            "name": "LA_HIRE",
            "value": 640,
            "description": "LA_HIRE. Hero unit."
        },
        {
            "name": "LANCELOT",
            "value": 174,
            "description": "LANCELOT. Hero unit."
        },
        {
            "name": "LORD_DE_GRAVILLE",
            "value": 642,
            "description": "LORD_DE_GRAVILLE. Hero unit."
        },
        {
            "name": "MASTER_OF_THE_TEMPLAR",
            "value": 680,
            "description": "MASTER_OF_THE_TEMPLAR. Hero unit."
        },
        {
            "name": "MINAMOTO",
            "value": 196,
            "description": "MINAMOTO. Hero unit."
        },
        {
            "name": "MORDRED",
            "value": 176,
            "description": "MORDRED. Hero unit."
        },
        {
            "name": "NOBUNAGA",
            "value": 845,
            "description": "NOBUNAGA. Hero unit."
        },
        {
            "name": "ORNLU_THE_WOLF",
            "value": 707,
            "description": "ORNLU_THE_WOLF. Hero unit."
        },
        {
            "name": "POPE_LEO_I",
            "value": 781,
            "description": "POPE_LEO_I. Hero unit."
        },
        {
            "name": "REYNALD_DE_CHATILLON",
            "value": 678,
            "description": "REYNALD_DE_CHATILLON. Hero unit."
        },
        {
            "name": "RICHARD_THE_LIONHARTED",
            "value": 160,
            "description": "RICHARD_THE_LIONHARTED. Hero unit."
        },
        {
            "name": "ROBIN_HOOD",
            "value": 200,
            "description": "ROBIN_HOOD. Hero unit."
        },
        {
            "name": "ROLAND",
            "value": 166,
            "description": "ROLAND. Hero unit."
        },
        {
            "name": "SCYTHIAN_SCOUT",
            "value": 852,
            "description": "SCYTHIAN_SCOUT. Hero unit."
        },
        {
            "name": "SCYTHIAN_WILD_WOMAN",
            "value": 783,
            "description": "SCYTHIAN_WILD_WOMAN. Hero unit."
        },
        {
            "name": "SHAH",
            "value": 704,
            "description": "SHAH. Hero unit."
        },
        {
            "name": "SHERIFF_OF_NOTTINGHAM",
            "value": 164,
            "description": "SHERIFF_OF_NOTTINGHAM. Hero unit."
        },
        {
            "name": "SIEGFRIED",
            "value": 170,
            "description": "SIEGFRIED. Hero unit."
        },
        {
            "name": "SIEUR_BERTRAND",
            "value": 636,
            "description": "SIEUR_BERTRAND. Hero unit."
        },
        {
            "name": "SIEUR_DE_METZ",
            "value": 634,
            "description": "SIEUR_DE_METZ. Hero unit."
        },
        {
            "name": "SIR_JOHN_FASTOLF",
            "value": 652,
            "description": "SIR_JOHN_FASTOLF. Hero unit."
        },
        {
            "name": "SUBOTAI",
            "value": 698,
            "description": "SUBOTAI. Hero unit."
        },
        {
            "name": "TAMERLANE",
            "value": 172,
            "description": "TAMERLANE. Hero unit."
        },
        {
            "name": "THE_BLACK_PRINCE",
            "value": 161,
            "description": "THE_BLACK_PRINCE. Hero unit."
        },
        {
            "name": "THEODORIC_THE_GOTH",
            "value": 168,
            "description": "THEODORIC_THE_GOTH. Hero unit."
        },
        {
            "name": "WILLIAM_THE_CONQUEROR",
            "value": 849,
            "description": "WILLIAM_THE_CONQUEROR. Hero unit."
        },
        {
            "name": "WILLIAM_WALLACE",
            "value": 432,
            "description": "WILLIAM_WALLACE. Hero unit."
        },
        {
            "value": 748,
            "description": "Cobra car. Cheat unit."
        },
        {
            "value": 860,
            "description": "Furious the monkey boy. Cheat unit."
        },
        {
            "value": 862,
            "description": "Stormy dog. Cheat unit."
        },
        {
            "value": 152,
            "description": "Dead Militia."
        },
        {
            "value": 157,
            "description": "Dead Man at Arms."
        },
        {
            "value": 180,
            "description": "Dead Long Swordsman."
        },
        {
            "value": 568,
            "description": "Dead Two Handed Swordsman."
        },
        {
            "value": 151,
            "description": "Dead Champion."
        },
        {
            "value": 100,
            "description": "Dead Spearman."
        },
        {
            "value": 501,
            "description": "Dead Pikeman."
        },
        {
            "value": 754,
            "description": "Dead Eagle Warrior."
        },
        {
            "value": 98,
            "description": "Dead Unrecognized infantry."
        },
        {
            "value": 750,
            "description": "Dead Unrecognized infantry."
        },
        {
            "value": 22,
            "description": "Dead Unrecognized infantry."
        },
        {
            "value": 99,
            "description": "Dead Unrecognized infantry."
        },
        {
            "value": 3,
            "description": "Dead Archer."
        },
        {
            "value": 26,
            "description": "Dead Crossbowman."
        },
        {
            "value": 687,
            "description": "Dead Arbalest."
        },
        {
            "value": 238,
            "description": "Dead Skirmisher."
        },
        {
            "value": 34,
            "description": "Dead Cavalry Archer."
        },
        {
            "value": 547,
            "description": "Dead Light Cavalry."
        },
        {
            "value": 111,
            "description": "Dead Knight."
        },
        {
            "value": 139,
            "description": "Dead Cavalier."
        },
        {
            "value": 570,
            "description": "Dead Paladin."
        },
        {
            "value": 494,
            "description": "Dead Camel."
        },
        {
            "value": 113,
            "description": "Dead Heavy Camel."
        },
        {
            "value": 135,
            "description": "Dead Unrecognized cavalry."
        },
        {
            "value": 675,
            "description": "Dead Mangonel."
        },
        {
            "value": 121,
            "description": "Dead Onager."
        },
        {
            "value": 589,
            "description": "Dead Siege Onager."
        },
        {
            "value": 23,
            "description": "Dead Battering Ram."
        },
        {
            "value": 423,
            "description": "Dead Capped Ram."
        },
        {
            "value": 549,
            "description": "Dead Siege Ram."
        },
        {
            "value": 149,
            "description": "Dead Scorpion."
        },
        {
            "value": 16,
            "description": "Dead Bombard Cannon."
        },
        {
            "value": 735,
            "description": "Dead Trebuchet, packed."
        },
        {
            "value": 194,
            "description": "Dead Trebuchet, unpacked."
        },
        {
            "value": 693,
            "description": "Dead Berserk."
        },
        {
            "value": 480,
            "description": "Dead Tarkan."
        },
        {
            "value": 181,
            "description": "Dead Teutonic Knight."
        },
        {
            "value": 154,
            "description": "Dead Throwing Axeman."
        },
        {
            "value": 27,
            "description": "Dead Cataphract."
        },
        {
            "value": 772,
            "description": "Dead Conquistador."
        },
        {
            "value": 62,
            "description": "Dead Huskarl."
        },
        {
            "value": 44,
            "description": "Dead Mameluke."
        },
        {
            "value": 828,
            "description": "Dead War Wagon."
        },
        {
            "value": 764,
            "description": "Dead Plumed Archer."
        },
        {
            "value": 136,
            "description": "Dead War Elephant."
        },
        {
            "value": 233,
            "description": "Dead Woad Raider."
        },
        {
            "value": 134,
            "description": "Dead Monk."
        },
        {
            "value": 776,
            "description": "Dead Missionary."
        },
        {
            "value": 839,
            "description": "Dead King."
        },
        {
            "value": 178,
            "description": "Dead Trade Cart."
        },
        {
            "value": 205,
            "description": "Dead Trade Cart, full."
        },
        {
            "value": 60,
            "description": "Dead Villager, woman."
        },
        {
            "value": 213,
            "description": "Dead Villager, woman, builder."
        },
        {
            "value": 215,
            "description": "Dead Villager, woman, farmer."
        },
        {
            "value": 355,
            "description": "Dead Villager, woman, forager."
        },
        {
            "value": 582,
            "description": "Dead Villager, woman, miner."
        },
        {
            "value": 217,
            "description": "Dead Villager, woman, hunter."
        },
        {
            "value": 219,
            "description": "Dead Villager, woman, lumberjack."
        },
        {
            "value": 591,
            "description": "Dead Villager, woman, shepherd."
        },
        {
            "value": 58,
            "description": "Dead Villager, man."
        },
        {
            "value": 230,
            "description": "Dead Villager, man, builder."
        },
        {
            "value": 228,
            "description": "Dead Villager, man, farmer."
        },
        {
            "value": 353,
            "description": "Dead Villager, man, forager."
        },
        {
            "value": 229,
            "description": "Dead Villager, man, miner."
        },
        {
            "value": 227,
            "description": "Dead Villager, man, hunter."
        },
        {
            "value": 226,
            "description": "Dead Villager, man, shepherd."
        },
        {
            "value": 630,
            "description": "Dead Joan of Arc."
        },
        {
            "value": 431,
            "description": "Dead Joan the Maid."
        },
        {
            "value": 633,
            "description": "Dead Knight with Lance."
        },
        {
            "value": 595,
            "description": "Dead Sheep (no food)."
        },
        {
            "value": 356,
            "description": "Dead Boar (no food)."
        },
        {
            "value": 43,
            "description": "Dead Deer (no food)."
        },
        {
            "value": 815,
            "description": "Dead Horse."
        },
        {
            "value": 813,
            "description": "Dead Jaguar."
        },
        {
            "value": 237,
            "description": "Dead Wolf."
        },
        {
            "name": "ARCHERY_RANGE",
            "value": 87,
            "description": "Archery Range. Feudal Age building."
        },
        {
            "name": "BARRACKS",
            "value": 12,
            "description": "Barracks. Dark Age building."
        },
        {
            "name": "BLACKSMITH",
            "value": 103,
            "description": "Blacksmith. Feudal Age building."
        },
        {
            "name": "BOMBARD_TOWER",
            "value": 236,
            "description": "Bombard Tower. Imperial Age building."
        },
        {
            "name": "CASTLE",
            "value": 82,
            "description": "Castle. Castle Age building."
        },
        {
            "name": "DOCK",
            "value": 45,
            "description": "Dock. Dark Age building."
        },
        {
            "name": "FARM",
            "value": 50,
            "description": "Farm. Dark Age building."
        },
        {
            "name": "FISH_TRAP",
            "value": 199,
            "description": "Fish Trap. Feudal Age building."
        },
        {
            "name": "GUARD_TOWER",
            "value": 234,
            "description": "Guard Tower. Castle Age building."
        },
        {
            "name": "HOUSE",
            "value": 70,
            "description": "House. Dark Age building."
        },
        {
            "name": "KEEP",
            "value": 235,
            "description": "Keep. Imperial Age building."
        },
        {
            "name": "LUMBER_CAMP",
            "value": 562,
            "description": "Lumber Camp. Dark Age building."
        },
        {
            "name": "MARKET",
            "value": 84,
            "description": "Market. Feudal Age building."
        },
        {
            "name": "MILL",
            "value": 68,
            "description": "Mill. Dark Age building."
        },
        {
            "name": "MINING_CAMP",
            "value": 584,
            "description": "Mining Camp. Dark Age building."
        },
        {
            "name": "MONASTERY",
            "value": 104,
            "description": "Monastery. Castle Age building."
        },
        {
            "name": "OUTPOST",
            "value": 598,
            "description": "Outpost. Dark Age building."
        },
        {
            "name": "SIEGE_WORKSHOP",
            "value": 49,
            "description": "Siege Workshop. Castle Age building."
        },
        {
            "name": "STABLE",
            "value": 86,
            "description": "Stable. Feudal Age building."
        },
        {
            "name": "TOWN_CENTER",
            "value": 109,
            "description": "Town Center. Dark Age building."
        },
        {
            "name": "UNIVERSITY",
            "value": 209,
            "description": "University. Castle Age building."
        },
        {
            "name": "WATCH_TOWER",
            "value": 79,
            "description": "Watch Tower. Feudal Age building."
        },
        {
            "name": "WONDER",
            "value": 276,
            "description": "Wonder. Imperial Age building."
        },
        {
            "name": "PALISADE_WALL",
            "value": 72,
            "description": "Palisade Wall. Dark Age building. Automatically placed in rings around players with four gates (one per side, stone gates in AoC) if `set_place_for_every_player` is used."
        },
        {
            "name": "WALL",
            "value": 117,
            "description": "Stone Wall. Feudal Age building. Automatically placed in rings around players with four gates (one per side) if `set_place_for_every_player` is used."
        },
        {
            "name": "STONE_WALL",
            "value": 117,
            "description": "Stone Wall. Feudal Age building. Automatically placed in rings around players with four gates (one per side) if `set_place_for_every_player` is used."
        },
        {
            "name": "FORTIFIED_WALL",
            "value": 155,
            "description": "Fortified Wall. Imperial Age building."
        },
        {
            "value": 64,
            "description": "Gate, SW-NE."
        },
        {
            "value": 88,
            "description": "Gate, SE-NW."
        },
        {
            "value": 659,
            "description": "Gate, horizontal."
        },
        {
            "value": 667,
            "description": "Gate, vertical."
        },
        {
            "value": 63,
            "description": "Fortified gate, SW-NE. Only central part actually looks like a fortified gate."
        },
        {
            "value": 85,
            "description": "Fortified gate, SE-NW. Only central part actually looks like a fortified gate."
        },
        {
            "value": 660,
            "description": "Fortified gate, horizontal. Only central part actually looks like a fortified gate."
        },
        {
            "value": 668,
            "description": "Fortified gate, vertical. Only central part actually looks like a fortified gate."
        },
        {
            "value": 463,
            "description": "House, Feudal Age style."
        },
        {
            "value": 464,
            "description": "House, Castle Age style."
        },
        {
            "value": 71,
            "description": "Town, not working center, no. Can garrison, fire arrows, and support pop. Graphics aren't perfect."
        },
        {
            "value": 563,
            "description": "Lumber camp, not working."
        },
        {
            "value": 585,
            "description": "Mining camp, not working."
        },
        {
            "value": 129,
            "description": "Mill, not working. Feudal Age style."
        },
        {
            "value": 130,
            "description": "Mill, not working. Castle Age style."
        },
        {
            "value": 116,
            "description": "Market, not working. Castle Age style."
        },
        {
            "value": 137,
            "description": "Market, not working. Imperial Age style."
        },
        {
            "value": 498,
            "description": "Barracks, not working. Feudal Age style."
        },
        {
            "value": 20,
            "description": "Barracks, not working. Castle Age style."
        },
        {
            "value": 10,
            "description": "Archery range, not working. Castle Age style."
        },
        {
            "value": 101,
            "description": "Stable, not working. Castle Age style."
        },
        {
            "value": 105,
            "description": "Blacksmith, not working. Feudal Age style."
        },
        {
            "value": 18,
            "description": "Blacksmith, not working. Castle Age style."
        },
        {
            "value": 33,
            "description": "Castle, not working. Does nothing, but can garrison 75 units (they don't shoot)."
        },
        {
            "value": 133,
            "description": "Dock, not working. Feudal Age style."
        },
        {
            "value": 47,
            "description": "Dock, not working. Castle Age style."
        },
        {
            "value": 446,
            "description": "Dock, not working. Castle Age style. Has special graphics for East-European and American civs. Slightly different for others."
        },
        {
            "value": 30,
            "description": "Monastery, not working."
        },
        {
            "value": 150,
            "description": "Siege workshop, not working."
        },
        {
            "value": 210,
            "description": "University, not working. Imperial Age style."
        },
        {
            "name": "YURT",
            "value": 712,
            "description": "Big wooden hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT2",
            "value": 713,
            "description": "Small wooden hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT3",
            "value": 714,
            "description": "Small wooden hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT4",
            "value": 715,
            "description": "Small wooden hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT5",
            "value": 716,
            "description": "Small leather hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT6",
            "value": 717,
            "description": "Small leather hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT7",
            "value": 718,
            "description": "Small leather hut. Works as a house, has 500 HP."
        },
        {
            "name": "YURT8",
            "value": 719,
            "description": "Big leather hut. Works as a house, has 500 HP."
        },
        {
            "name": "THE_ACCURSED_TOWER",
            "value": 684,
            "description": "The Accursed Tower. Powerful guard tower, similar to west-European ones. Great range."
        },
        {
            "name": "THE_TOWER_OF_FLIES",
            "value": 685,
            "description": "The Tower of Flies. Powerful guard tower, similar to west-European ones."
        },
        {
            "name": "TRADE_WORKSHOP",
            "value": 110,
            "description": "Trade Workshop. Does nothing."
        },
        {
            "name": "MONUMENT",
            "value": 826,
            "description": "Same as a wonder, but doesn't let you win."
        },
        {
            "name": "MOSQUE",
            "value": 655,
            "description": "Does nothing. Looks exactly as the Turkish wonder."
        },
        {
            "name": "PAVILION",
            "value": 624,
            "description": "Big tent. Works as a house, has 500 HP."
        },
        {
            "name": "PAVILION2",
            "value": 626,
            "description": "Small tent. Works as a house, has 500 HP."
        },
        {
            "name": "PAVILION3",
            "value": 625,
            "description": "Small tent. Works as a house, has 500 HP."
        },
        {
            "name": "CATHEDRAL",
            "value": 599,
            "description": "Cathedral. Does nothing. Looks like British wonder, but bigger."
        },
        {
            "name": "DOME_OF_THE_ROCK",
            "value": 690,
            "description": "Dome of the Rock. Does nothing. Great Middle-Eastern temple."
        },
        {
            "name": "GREAT_PYRAMID",
            "value": 696,
            "description": "Great Pyramid. Does nothing."
        },
        {
            "name": "PYRAMID",
            "value": 689,
            "description": "Pyramid. Does nothing."
        },
        {
            "value": 81,
            "description": "Wall, corner, with HP and icon of a fortified gate. Placed as a normal object, not in rings as `WALL`."
        },
        {
            "value": 80,
            "description": "Fortified wall, corner, with HP and icon of a fortified gate. Placed as a normal object, not in rings as `FORTIFIED_WALL`."
        },
        {
            "value": 605,
            "description": "Bridge, SW-NE, top end."
        },
        {
            "value": 606,
            "description": "Bridge, SW-NE, middle."
        },
        {
            "value": 607,
            "description": "Bridge, SW-NE, bottom end."
        },
        {
            "value": 738,
            "description": "Bridge, SW-NE, middle broken."
        },
        {
            "value": 739,
            "description": "Bridge, SW-NE, top end broken."
        },
        {
            "value": 740,
            "description": "Bridge, SW-NE, bottom end broken."
        },
        {
            "value": 608,
            "description": "Bridge, SE-NW, top end."
        },
        {
            "value": 609,
            "description": "Bridge, SE-NW, middle."
        },
        {
            "value": 610,
            "description": "Bridge, SE-NW, bottom end."
        },
        {
            "value": 741,
            "description": "Bridge, SE-NW, middle broken."
        },
        {
            "value": 742,
            "description": "Bridge, SE-NW, top end broken."
        },
        {
            "value": 743,
            "description": "Bridge, SE-NW, bottom end broken."
        },
        {
            "name": "SHEEP",
            "value": 594,
            "description": "Sheep. May be placed as a player object."
        },
        {
            "name": "TURKEY",
            "value": 833,
            "description": "Turkey. May be placed as a player object."
        },
        {
            "name": "BOAR",
            "value": 48,
            "description": "Boar."
        },
        {
            "name": "DEER",
            "value": 65,
            "description": "Deer."
        },
        {
            "name": "HORSE",
            "value": 814,
            "description": "Horse."
        },
        {
            "value": 333,
            "description": "Deer. Like `DEER` but not huntable."
        },
        {
            "name": "DIRE_WOLF",
            "value": 89,
            "description": "Dire Wolf. A wolf with 100 HP and low attack. Not so dire, AI has trouble with these wolves."
        },
        {
            "name": "DORADO",
            "value": 455,
            "description": "Dorado deep fish."
        },
        {
            "name": "FISH_DORADO",
            "value": 455,
            "description": "Dorado deep fish."
        },
        {
            "name": "FISH",
            "value": 53,
            "description": "Perch deep fish. Has 200 food like shore fish."
        },
        {
            "name": "HAWK",
            "value": 96,
            "description": "Hawk."
        },
        {
            "name": "IRON_BOAR",
            "value": 810,
            "description": "Iron Boar."
        },
        {
            "name": "JAGUAR",
            "value": 812,
            "description": "Jaguar."
        },
        {
            "name": "JAVELINA",
            "value": 822,
            "description": "Javelina."
        },
        {
            "name": "MACAW",
            "value": 816,
            "description": "Macaw."
        },
        {
            "name": "MARLIN1",
            "value": 450,
            "description": "Marlin deep fish."
        },
        {
            "name": "GREAT_FISH_MARLIN",
            "value": 450,
            "description": "Marlin deep fish."
        },
        {
            "name": "MARLIN2",
            "value": 451,
            "description": "Marlin deep fish."
        },
        {
            "name": "GREAT_FISH_MARLIN2",
            "value": 451,
            "description": "Marlin deep fish."
        },
        {
            "name": "RABID_WOLF",
            "value": 202,
            "description": "Rabid Wolf."
        },
        {
            "name": "SALMON",
            "value": 456,
            "description": "Salmon deep fish."
        },
        {
            "name": "FISH_SALMON",
            "value": 456,
            "description": "Salmon deep fish."
        },
        {
            "name": "SNAPPER",
            "value": 458,
            "description": "Snapper deep fish."
        },
        {
            "name": "FISH_SNAPPER",
            "value": 458,
            "description": "Snapper deep fish."
        },
        {
            "name": "SHORE_FISH",
            "value": 69,
            "description": "Shore fish."
        },
        {
            "name": "TUNA",
            "value": 457,
            "description": "Tuna deep fish."
        },
        {
            "name": "FISH_TUNA",
            "value": 457,
            "description": "Tuna deep fish."
        },
        {
            "name": "WILD_HORSE",
            "value": 835,
            "description": "Wild Horse. Use `HORSE` for a player-controlled horse."
        },
        {
            "name": "WOLF",
            "value": 126,
            "description": "Wolf."
        },
        {
            "name": "BAMBOO_TREE",
            "value": 348,
            "description": "Bamboo tree. Varies. Same as created by `BAMBOO` terrain."
        },
        {
            "name": "BAMBOO_FOREST_TREE",
            "value": 348,
            "description": "Bamboo tree. Varies. Same as created by `BAMBOO` terrain."
        },
        {
            "name": "JUNGLETREE",
            "value": 414,
            "description": "Jungle tree. Varies. Same as created by `JUNGLE` terrain."
        },
        {
            "name": "JUNGLE_TREE",
            "value": 414,
            "description": "Jungle tree. Varies. Same as created by `JUNGLE` terrain."
        },
        {
            "name": "OAKTREE",
            "value": 349,
            "description": "Oak tree. Varies. Same as created by `FOREST` terrain."
        },
        {
            "name": "FOREST_TREE",
            "value": 349,
            "description": "Oak tree. Varies. Same as created by `FOREST` terrain."
        },
        {
            "name": "OAK_FOREST_TREE",
            "value": 349,
            "description": "Oak tree. Varies. Same as created by `FOREST` terrain."
        },
        {
            "name": "PALMTREE",
            "value": 351,
            "description": "Palm tree. Varies. Same as created by `PALM_DESERT` terrain."
        },
        {
            "name": "PALM_FOREST_TREE",
            "value": 351,
            "description": "Palm tree. Varies. Same as created by `PALM_DESERT` terrain."
        },
        {
            "name": "PINETREE",
            "value": 350,
            "description": "Pine tree. Varies. Same as created by `PINE_FOREST` terrain."
        },
        {
            "name": "PINE_FOREST_TREE",
            "value": 350,
            "description": "Pine tree. Varies. Same as created by `PINE_FOREST` terrain."
        },
        {
            "name": "SNOWPINETREE",
            "value": 413,
            "description": "Snow pine tree. Varies. Same as created by `SNOW_FOREST` terrain."
        },
        {
            "name": "SNOW_PINE_TREE",
            "value": 413,
            "description": "Snow pine tree. Varies. Same as created by `SNOW_FOREST` terrain."
        },
        {
            "name": "TREE_A",
            "value": 399,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE1",
            "value": 399,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_TD",
            "value": 399,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_B",
            "value": 400,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE2",
            "value": 400,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_C",
            "value": 401,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE3",
            "value": 401,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_D",
            "value": 402,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE4",
            "value": 402,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_E",
            "value": 403,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE5",
            "value": 403,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_F",
            "value": 404,
            "description": "Dry tree, no leaves. Always the same."
        },
        {
            "name": "TREE_G",
            "value": 405,
            "description": "Tree with brown leaves. Always the same."
        },
        {
            "name": "TREE_H",
            "value": 406,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_I",
            "value": 407,
            "description": "Dry tree, no leaves. Always the same."
        },
        {
            "name": "TREE_J",
            "value": 408,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_K",
            "value": 409,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "TREE_L",
            "value": 410,
            "description": "Oak tree. Always the same."
        },
        {
            "name": "RELIC",
            "value": 285,
            "description": "Relic."
        },
        {
            "value": 287,
            "description": "British relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 288,
            "description": "Byzantine relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 289,
            "description": "Chinese relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 290,
            "description": "Frankish relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 292,
            "description": "Gothic relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 294,
            "description": "Japanese relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 295,
            "description": "Persian relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 296,
            "description": "Saracen relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 297,
            "description": "Teutonic relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "value": 298,
            "description": "Turkish relic. Becomes a normal relic when brought to a monastery."
        },
        {
            "name": "ES_FLAG",
            "value": 851,
            "description": "Ensemble Studios flag."
        },
        {
            "name": "FLAG_A",
            "value": 600,
            "description": "Tall flag."
        },
        {
            "name": "FLAG_B",
            "value": 601,
            "description": "Bifurcate flag."
        },
        {
            "name": "FLAG_C",
            "value": 602,
            "description": "Spotted flag."
        },
        {
            "name": "FLAG_D",
            "value": 603,
            "description": "Crossed flag."
        },
        {
            "name": "FLAG_E",
            "value": 604,
            "description": "Binged flag."
        },
        {
            "value": 299,
            "description": "Infiltrator. Looks exactly as a Militia, but stronger."
        },
        {
            "name": "MAP_REVEALER",
            "value": 837,
            "description": "Map Revealer. Invisible and immobile. Gives sight of 4 tiles radius area."
        },
        {
            "value": 536,
            "description": "Converter Galley. A galley that converts enemies like a monk."
        },
        {
            "name": "SABOTEUR",
            "value": 706,
            "description": "Saboteur. Like `PETARD` but stronger."
        },
        {
            "name": "Shipwreck",
            "value": 436,
            "description": "Shipwreck. Can't move unless in group. Counts as 4 population."
        },
        {
            "value": 571,
            "description": "Super armored Archer. Armor 1000, attack 1."
        },
        {
            "value": 577,
            "description": "Super armored Cavalry Archer. Armor 1000, attack 1."
        },
        {
            "value": 575,
            "description": "Super armored Light Cavalry. Armor 1000, attack 1."
        },
        {
            "value": 573,
            "description": "Super armored Militia. Armor 1000, attack 1."
        },
        {
            "name": "TORCH",
            "value": 499,
            "description": "Torch. Can be placed even on water and forests."
        },
        {
            "name": "TORCH_CONVERTING",
            "value": 854,
            "description": "Torch. Like `TORCH` but rescuable like sheep."
        },
        {
            "name": "Arrow",
            "value": 315,
            "description": "Arrow lying on ground or water. Varies."
        },
        {
            "name": "Arrows",
            "value": 54,
            "description": "Arrows lying on ground or water. Varies."
        },
        {
            "name": "BROKEN_CART",
            "value": 858,
            "description": "Broken trade cart."
        },
        {
            "name": "CACTUS",
            "value": 709,
            "description": "Cactus. Varies."
        },
        {
            "value": 749,
            "description": "Cobra car, not working."
        },
        {
            "value": 273,
            "description": "Small cliff."
        },
        {
            "name": "CRACKS",
            "value": 241,
            "description": "Cracks."
        },
        {
            "name": "CRATER",
            "value": 723,
            "description": "Small crater."
        },
        {
            "name": "EXPIRED_FISHTRAP",
            "value": 278,
            "description": "Fish Trap, expired. Can be on land. Disappears quickly."
        },
        {
            "name": "FLOWER_BED",
            "value": 859,
            "description": "Flower bed."
        },
        {
            "name": "FLOWERS_1",
            "value": 334,
            "description": "Flowers. Can overlap with water and other stuff."
        },
        {
            "name": "FLOWERS_2",
            "value": 335,
            "description": "Flowers. Can overlap with water and other stuff."
        },
        {
            "name": "FLOWERS_3",
            "value": 336,
            "description": "Flowers. Can overlap with water and other stuff."
        },
        {
            "name": "FLOWERS_4",
            "value": 337,
            "description": "Flowers. Can overlap with water and other stuff."
        },
        {
            "name": "FORAGE,",
            "value": 59,
            "description": "Forage bush. Varies."
        },
        {
            "name": "FORAGE_BUSH",
            "value": 59,
            "description": "Forage bush. Varies."
        },
        {
            "name": "GOLD",
            "value": 66,
            "description": "Gold mine. Varies."
        },
        {
            "name": "STONE",
            "value": 102,
            "description": "Stone mine. Varies."
        },
        {
            "name": "GRAVE",
            "value": 820,
            "description": "Grave. Varies."
        },
        {
            "name": "HAY_STACK",
            "value": 857,
            "description": "Haystack."
        },
        {
            "name": "HEAD",
            "value": 821,
            "description": "Pole with a human head."
        },
        {
            "name": "MOUNTAIN_1",
            "value": 310,
            "description": "Grassy mountain. Not walkable."
        },
        {
            "name": "MOUNTAIN1",
            "value": 310,
            "description": "Grassy mountain. Not walkable."
        },
        {
            "name": "MOUNTAIN_2",
            "value": 311,
            "description": "Grassy mountain. Not walkable."
        },
        {
            "name": "MOUNTAIN2",
            "value": 311,
            "description": "Grassy mountain. Not walkable."
        },
        {
            "name": "MOUNTAIN_3",
            "value": 744,
            "description": "Rocky mountain. Not walkable."
        },
        {
            "name": "MOUNTAIN_4",
            "value": 745,
            "description": "Rocky mountain. Not walkable."
        },
        {
            "name": "NINE_BANDS",
            "value": 720,
            "description": "Nine Bands. Pole with horn decorations."
        },
        {
            "name": "OLD_STONE_HEAD",
            "value": 855,
            "description": "Old stone head. Pre-Columbian sculpture. Varies."
        },
        {
            "name": "Outlaw",
            "value": 158,
            "description": "Outlaw. Neutral archer. Attacks everyone he sees. Has 15 HP."
        },
        {
            "name": "PATH_1",
            "value": 339,
            "description": "Muddy trail. Can overlap with water and other stuff."
        },
        {
            "name": "PATH_2",
            "value": 340,
            "description": "Muddy trail. Can overlap with water and other stuff."
        },
        {
            "name": "PATH_3",
            "value": 341,
            "description": "Muddy trail. Can overlap with water and other stuff."
        },
        {
            "name": "PATH_4",
            "value": 338,
            "description": "Two muddy trails crossing. Can overlap with water and other stuff."
        },
        {
            "name": "PIECE_OF_THE_TRUE_CROSS",
            "value": 688,
            "description": "Piece of the True Cross. Black relic. Disappears when picked up."
        },
        {
            "name": "PLANT",
            "value": 818,
            "description": "Small grass. Can be placed on water. Varies."
        },
        {
            "name": "PLANTS",
            "value": 818,
            "description": "Small grass. Can be placed on water. Varies."
        },
        {
            "name": "ROCK",
            "value": 623,
            "description": "Rock. Can be placed on water, but `SEA_ROCKS1` and `SEA_ROCKS_2` look better. Varies."
        },
        {
            "name": "ROMAN_RUINS",
            "value": 856,
            "description": "Roman ruins. Can be placed on water. Varies."
        },
        {
            "name": "RUBBLE_1_X_1",
            "value": 863,
            "description": "Rubble from a destroyed building, single tile. Can be placed on water. Never disappears."
        },
        {
            "value": 143,
            "description": "Rubble from a destroyed building, single tile. Can be placed on water. Disappears quickly."
        },
        {
            "name": "RUBBLE_2_X_2",
            "value": 864,
            "description": "Rubble from a destroyed building, 2x2 tiles. Can be placed on water. Never disappears."
        },
        {
            "value": 144,
            "description": "Rubble from a destroyed building, 2x2 tiles. Can be placed on water. Disappears quickly."
        },
        {
            "value": 147,
            "description": "Rubble from a destroyed building, 2x2 tiles. Can be placed on water. Disappears quickly."
        },
        {
            "name": "RUBBLE_3_X_3",
            "value": 865,
            "description": "Rubble from a destroyed building, 3x3 tiles. Can be placed on water. Never disappears."
        },
        {
            "value": 145,
            "description": "Rubble from a destroyed building, 3x3 tiles. Can be placed on water. Disappears quickly."
        },
        {
            "value": 146,
            "description": "Rubble from a destroyed building, 3x3 tiles. Can be placed on water. Disappears quickly."
        },
        {
            "value": 148,
            "description": "Rubble from a destroyed building, 3x3 tiles. Can be placed on water. Disappears quickly."
        },
        {
            "name": "RUINS",
            "value": 345,
            "description": "Ruins. Quite big."
        },
        {
            "name": "RUGS",
            "value": 711,
            "description": "Rugs. Can be placed on water. Varies."
        },
        {
            "name": "SEA_ROCKS_1",
            "value": 389,
            "description": "Sea rocks."
        },
        {
            "name": "SEA_ROCKS_2",
            "value": 396,
            "description": "Sea rocks."
        },
        {
            "name": "SHIPWRECK",
            "value": 721,
            "description": "Shipwreck."
        },
        {
            "name": "SHIPWRECK2",
            "value": 722,
            "description": "Shipwreck."
        },
        {
            "name": "SIGN",
            "value": 819,
            "description": "Wooden road signal. Can be placed on water."
        },
        {
            "name": "SKELETON",
            "value": 710,
            "description": "Skeleton. Varies."
        },
        {
            "value": 417,
            "description": "Small white stone."
        },
        {
            "name": "STATUE",
            "value": 817,
            "description": "Statue. Same as on a European university. Can be placed on water."
        },
        {
            "name": "STUMP",
            "value": 809,
            "description": "Stump of a cut tree. Varies. Never disappears."
        },
        {
            "value": 415,
            "description": "Stump of a cut tree. Disappears after some time."
        },
        {
            "value": 737,
            "description": "Stump of a cut tree. Disappears after some time."
        },
        {
            "value": 61,
            "description": "Trireme. Disappears after some time. Can be on land. Varies (rotates)."
        }
    ]
};
//# sourceMappingURL=lib.aoc.js.map