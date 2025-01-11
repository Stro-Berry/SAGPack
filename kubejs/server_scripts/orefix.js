onEvent('recipes', event => {
    const removal = [
        "occultism:miner/ores/sapphire_ore",
        "occultism:miner/ores/cobalt_ore",
        "occultism:miner/ores/thorium_ore",
        "occultism:miner/ores/silver_ore",
        "occultism:miner/ores/cinnabar_ore",
        "occultism:miner/ores/tin_ore",
        "occultism:miner/ores/certus_quartz_ore",
        "occultism:miner/ores/coal_ore",
        "occultism:miner/ores/lapis_ore",
        "occultism:miner/ores/lead_ore",
        "occultism:miner/ores/iron_ore",
        "occultism:miner/ores/niter_ore",
        "occultism:miner/ores/diamond_ore",
        "occultism:miner/ores/ruby_ore",
        "occultism:miner/ores/salt_ore",
        "occultism:miner/ores/amethyst_ore",
        "occultism:miner/ores/nether_quartz_ore",
        "occultism:miner/ores/aluminum_ore",
        "occultism:miner/ores/osmium_ore",
        "occultism:miner/ores/sulfur_ore",
        "occultism:miner/ores/charged_certus_quartz_ore",
        "occultism:miner/ores/redstone_ore",
        "occultism:miner/ores/gold_ore",
        "occultism:miner/ores/peridot_ore",
        "occultism:miner/ores/copper_ore",
        "occultism:miner/ores/uranium_ore",
        "occultism:miner/ores/zinc_ore",
        "occultism:miner/ores/nickel_ore",
        "occultism:miner/ores/emerald_ore",
        "industrialforegoing:laser_drill_ore/osmium",
        "industrialforegoing:laser_drill_ore/quartz",
        "industrialforegoing:laser_drill_ore/fluorite",
        "industrialforegoing:laser_drill_ore/aluminum",
        "industrialforegoing:laser_drill_ore/emerald",
        "industrialforegoing:laser_drill_ore/silver",
        "industrialforegoing:laser_drill_ore/cobalt",
        "industrialforegoing:laser_drill_ore/gold",
        "industrialforegoing:laser_drill_ore/niter",
        "industrialforegoing:laser_drill_ore/tin",
        "industrialforegoing:laser_drill_ore/sapphire",
        "industrialforegoing:laser_drill_ore/cinnabar",
        "industrialforegoing:laser_drill_ore/nickel",
        "industrialforegoing:laser_drill_ore/iridium",
        "industrialforegoing:laser_drill_ore/peridot",
        "industrialforegoing:laser_drill_ore/diamond",
        "industrialforegoing:laser_drill_ore/uranium",
        "industrialforegoing:laser_drill_ore/arcane",
        "industrialforegoing:laser_drill_ore/coal",
        "industrialforegoing:laser_drill_ore/lead",
        "industrialforegoing:laser_drill_ore/ruby",
        "industrialforegoing:laser_drill_ore/bitumen",
        "industrialforegoing:laser_drill_ore/certus_quartz",
        "industrialforegoing:laser_drill_ore/redstone",
        "industrialforegoing:laser_drill_ore/sulfur",
        "industrialforegoing:laser_drill_ore/copper",
        "industrialforegoing:laser_drill_ore/lapis",
        "industrialforegoing:laser_drill_ore/iron",
        "industrialforegoing:laser_drill_ore/bauxite",
        "industrialforegoing:laser_drill_ore/draconium",
        "mekanism:processing/copper/ore/from_dust",
        "mekanism:processing/fluorite/to_ore",
        "mekanism:processing/lead/ore/from_dust",
        "mekanism:processing/osmium/ore/from_dust",
        "mekanism:processing/tin/ore/from_dust",
        "mekanism:processing/uranium/ore/from_dust",
        "mekanism:processing/netherite/dust_to_ancient_debris",
        "mekanism:processing/coal/to_ore",
        "mekanism:processing/diamond/to_ore",
        "mekanism:processing/emerald/to_ore",
        "mekanism:processing/gold/ore/from_dust",
        "mekanism:processing/iron/ore/from_dust",
        "mekanism:processing/lapis_lazuli/ore/from_dust",
        "mekanism:processing/gold/ore/nether_from_dust",
        "mekanism:processing/quartz/to_ore",
        "mekanism:processing/redstone/to_ore",
    ]
    removal.forEach((remove) => {
        event.remove({id: remove})
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:osmium_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 36,
            "weight": 8
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens8"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:quartz_netherrack_ore"
        },
        "rarity": [
          {
            "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:nether_wastes",
                    "minecraft:basalt_deltas",
                    "minecraft:warped_forest",
                    "minecraft:crimson_forest",
                    "minecraft:soul_sand_valley"
                ]
            },
            "blacklist": {},
            "depth_min": 7,
            "depth_max": 117,
            "weight": 12
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens0"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:fluorite_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 15,
            "depth_max": 30,
            "weight": 6
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens8"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:aluminum_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 68,
            "depth_max": 84,
            "weight": 5
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens12"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:emerald_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 29,
            "weight": 8
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens5"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:silver_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 10,
            "depth_max": 40,
            "weight": 5
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens7"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:gold_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 32,
            "depth_max": 80,
            "weight": 16
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens4"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:tin_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 64,
            "depth_max": 96,
            "weight": 8
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens8"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:osmium_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 30,
            "depth_max": 70,
            "weight": 2
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens14"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:nickel_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 68,
            "weight": 4
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens12"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:diamond_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 16,
            "weight": 4
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens3"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:coal_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 132,
            "weight": 10
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens15"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:apatite_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 132,
            "weight": 10
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens9"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:lead_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 10,
            "depth_max": 40,
            "weight": 6
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens10"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:certus_quartz_netherrack_ore"
        },
        "rarity": [
          {
            "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:nether_wastes",
                    "minecraft:basalt_deltas",
                    "minecraft:warped_forest",
                    "minecraft:crimson_forest",
                    "minecraft:soul_sand_valley"
                ]
            },
            "blacklist": {},
            "depth_min": 12,
            "depth_max": 36,
            "weight": 8
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens3"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:charged_certus_quartz_netherrack_ore"
        },
        "rarity": [
          {
            "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:nether_wastes",
                    "minecraft:basalt_deltas",
                    "minecraft:warped_forest",
                    "minecraft:crimson_forest",
                    "minecraft:soul_sand_valley"
                ]
            },
            "blacklist": {},
            "depth_min": 12,
            "depth_max": 36,
            "weight": 6
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens3"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:redstone_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 16,
            "weight": 28
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens14"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:copper_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 35,
            "depth_max": 65,
            "weight": 10
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens1"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:lapis_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 13,
            "depth_max": 34,
            "weight": 14
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens11"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
        "output": {
          "item": "emendatusenigmatica:lead_ore"
        },
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            "depth_min": 5,
            "depth_max": 68,
            "weight": 20
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens12"
        },
        "type": "industrialforegoing:laser_drill_ore"
    })

})