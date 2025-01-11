onEvent("recipes", event => {

    event.remove({id: "extendedcrafting:ultimate_singularity"})
    event.remove({id: "extendedcrafting:basic_table"})

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "ABC",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "type": "forge:nbt",
          "item": "industrialforegoing:common_black_hole_unit",
          "count": 1,
          "nbt": "{BlockEntityTag:{hasNBT:1b,blStack:{id:\"minecraft:nether_star\",Count:64b,tag:{temperature:0.0d}},stored:2017,voidItems:1b}}"
        },
        "B": {
          "type": "forge:nbt",
          "item": "industrialforegoing:common_black_hole_unit",
          "count": 1,
          "nbt": "{BlockEntityTag:{hasNBT:0b,blStack:{id:\"kubejs:stellar_core\",Count:64b},stored:231,voidItems:1b}}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "industrialforegoing:common_black_hole_unit",
          "count": 1,
          "nbt": "{BlockEntityTag:{hasNBT:0b,blStack:{id:\"draconicevolution:chaotic_energy_core\",Count:64b},stored:108,voidItems:1b}}"
        }
      },
      "result": {
        "item": "kubejs:stellar_circuit"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "ABC",
        "DE ",
        "   "
      ],
      "key": {
        "A": {
          "item": "kubejs:stellar_circuit"
        },
        "B": {
          "item": "kubejs:rune_4"
        },
        "C": {
          "item": "kubejs:rune_9"
        },
        "D": {
          "item": "kubejs:rune_3"
        },
        "E": {
          "item": "kubejs:rune_7"
        }
      },
      "result": {
        "item": "kubejs:stellar_circuit_fluid_tank"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "ABB",
        "BBB",
        "BBB"
      ],
      "key": {
        "A": {
          "item": "ironchest:obsidian_chest"
        },
        "B": {
          "item": "kubejs:stellar_alloy"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "ironchest:obsidian_chest",
        "count": 1,
        "nbt": "{BlockEntityTag:{Items:[{Slot:0b,id:\"kubejs:stellar_blueprint\",Count:1b},{Slot:1b,id:\"kubejs:stellar_block_3\",Count:25b},{Slot:2b,id:\"kubejs:stellar_block_2\",Count:64b},{Slot:3b,id:\"kubejs:stellar_block_2\",Count:9b},{Slot:4b,id:\"kubejs:stellar_block_4\",Count:11b,tag:{}},{Slot:5b,id:\"kubejs:stellar_block_1\",Count:12b}],id:\"ironchest:obsidian_chest\"}}"
      }
    })
    
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "ABC",
        "DCB",
        "BE "
      ],
      "key": {
        "A": {
          "item": "kubejs:stellar_circuit"
        },
        "B": {
          "item": "kubejs:rune_8"
        },
        "C": {
          "item": "kubejs:rune_3"
        },
        "D": {
          "item": "kubejs:rune_4"
        },
        "E": {
          "item": "kubejs:rune_0"
        }
      },
      "result": {
        "item": "kubejs:stellar_circuit_probe"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "ABC",
        "DEE",
        "   "
      ],
      "key": {
        "A": {
          "item": "kubejs:stellar_circuit"
        },
        "B": {
          "item": "kubejs:rune_8"
        },
        "C": {
          "item": "kubejs:rune_5"
        },
        "D": {
          "item": "kubejs:rune_3"
        },
        "E": {
          "item": "kubejs:rune_4"
        }
      },
      "result": {
        "item": "kubejs:stellar_circuit_chemical_tank"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "rftoolsdim:digit_dimlet"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_0"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "minecraft:bookshelf"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_1"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "mekanism:module_frost_walker_unit"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_2"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:elite_table"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_3"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "thermal:upgrade_augment_3"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_4"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "mininggadgets:upgrade_efficiency_5"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_5"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "futurepack:ram_dungeon"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_6"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "industrialforegoing:range_addon6"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_7"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "rftoolscontrol:ram_chip"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_8"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "patchouli:guide_book"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_9"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "mob_grinding_utils:dreadful_dirt"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_10"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": [
        "AB ",
        "   ",
        "   "
      ],
      "key": {
        "A": {
          "item": "simplemagnets:advancedmagnet"
        },
        "B": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "kubejs:rune_11"
      }
    })
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000000,
        "powerRate": 50000000,
        "inputCount": 2048,
        "ingredient": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "catalyst": {
          "item": "kubejs:gravitational_collapse_initiator"
        },
        "result": {
          "item": "extendedcrafting:ultimate_singularity"
        }
    })
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000000,
        "powerRate": 50000000,
        "inputCount": 2048,
        "ingredient": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "catalyst": {
          "item": "kubejs:gravitational_collapse_initiator"
        },
        "result": {
          "item": "kubejs:ultimate_singularity_singularity"
        }
    })
    event.custom({
      "type": "extendedcrafting:compressor",
      "powerCost": 500000000,
      "powerRate": 50000000,
      "inputCount": 2048,
      "ingredient": {
        "item": "mekanism:pellet_antimatter"
      },
      "catalyst": {
        "item": "kubejs:gravitational_collapse_initiator"
      },
      "result": {
        "item": "kubejs:antimatter_singularity"
      }
  })
    event.custom({
        "type": "interactio:item_explode",
        "inputs": [
          {
            "type": "forge:nbt",
            "item": "industrialforegoing:common_black_hole_unit",
            "nbt": '{BlockEntityTag:{hasNBT:1b,blStack:{id:"rftoolsbase:machine_frame",Count:1b,tag:{temperature:0.0d}},stored:775,voidItems:1b}}',
            "count": 1
          }
        ],
        "output": {
          "entries": [
            {
              "result": {
              "item": "kubejs:hypercompressed_core",
                "count": 1
              },
              "weight": 1
            },
          ],
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDE",
          "FGHIJ",
          "KL   ",
          "     ",
          "     "
        ],
        "key": {
          "A": {
            "item": "kubejs:rune_0"
          },
          "B": {
            "item": "kubejs:rune_1"
          },
          "C": {
            "item": "kubejs:rune_2"
          },
          "D": {
            "item": "kubejs:rune_3"
          },
          "E": {
            "item": "kubejs:rune_4"
          },
          "F": {
            "item": "kubejs:rune_5"
          },
          "G": {
            "item": "kubejs:rune_6"
          },
          "H": {
            "item": "kubejs:rune_7"
          },
          "I": {
            "item": "kubejs:rune_8"
          },
          "J": {
            "item": "kubejs:rune_9"
          },
          "K": {
            "item": "kubejs:rune_10"
          },
          "L": {
            "item": "kubejs:rune_11"
          }
        },
        "result": {
          "item": "kubejs:rune_amalgam"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAABBBAAA",
          "ABBBCBBBA",
          "ABDEFEDBA",
          "BBEGHGEBB",
          "BCIJKLICB",
          "BBEGHGEBB",
          "ABDEFEDBA",
          "ABBBMBBBA",
          "AAABBBAAA"
        ],
        "key": {
          "A": {
            "item": "mekanism:ultimate_energy_cube"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "futurepack:color_iron_gray"
          },
          "D": {
            "item": "electrodynamics:lithiumbattery"
          },
          "E": {
            "item": "draconicevolution:reactor_stabilizer"
          },
          "F": {
            "item": "draconicevolution:reactor_injector"
          },
          "G": {
            "item": "draconicevolution:draconic_wireless_crystal"
          },
          "H": {
            "item": "draconicevolution:reactor_core"
          },
          "I": {
            "item": "rftoolsutility:creative_screen"
          },
          "J": {
            "item": "botania:creative_pool"
          },
          "K": {
            "item": "kubejs:concept_of_energy"
          },
          "L": {
            "item": "thermal:machine_efficiency_creative_augment"
          },
          "M": {
            "item": "kubejs:rune_amalgam"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "mekanism:creative_energy_cube",
          "count": 2,
          "nbt": "{temperature:0.0d,mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABBBBBAA",
          "ABBBCBBBA",
          "BBCDEDCBB",
          "BBDDFDDBB",
          "BCEDGDECB",
          "BBDDHDDBB",
          "BBCDEDCBB",
          "ABBBCBBBA",
          "AABBBBBAA"
        ],
        "key": {
          "A": {
            "item": "mekanism:ultimate_chemical_tank"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "mekanism:pellet_antimatter"
          },
          "D": {
            "item": "mekanism:sps_port"
          },
          "E": {
            "item": "futurepack:color_iron_gray"
          },
          "F": {
            "item": "kubejs:concept_of_space"
          },
          "G": {
            "item": "mekanism:creative_energy_cube"
          },
          "H": {
            "item": "kubejs:stellar_circuit_chemical_tank"
          }
        },
        "result": {
          "item": "mekanism:creative_chemical_tank",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAABBBAAA",
          "ABBCDCBBA",
          "ABDEFEDBA",
          "BCEFGFECB",
          "BDFHIHFDB",
          "BCEFJFECB",
          "ABDEKEDBA",
          "ABBCDCBBA",
          "AAABBBAAA"
        ],
        "key": {
          "A": {
            "item": "mekanism:ultimate_fluid_tank"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "futurepack:color_iron_gray"
          },
          "D": {
            "item": "appliedenergistics2:fluid_interface"
          },
          "E": {
            "item": "industrialforegoing:common_black_hole_unit"
          },
          "F": {
            "item": "industrialforegoing:fluid_laser_base"
          },
          "G": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "H": {
            "item": "bloodmagic:activationcrystalcreative"
          },
          "I": {
            "item": "mekanism:creative_chemical_tank"
          },
          "J": {
            "item": "kubejs:concept_of_fluid"
          },
          "K": {
            "item": "kubejs:stellar_circuit_fluid_tank",
          }
        },
        "result": {
          "item": "mekanism:creative_fluid_tank",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABBBBBCC",
          "ABBBBBBBC",
          "BBBDEFBBB",
          "BBGHIHJBB",
          "BBKLMLNBB",
          "BBOHPHQBB",
          "BBBRSTBBB",
          "UBBBBBBBV",
          "UUBBBBBVV"
        ],
        "key": {
          "A": {
            "item": "create:wand_of_symmetry"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "create:extendo_grip"
          },
          "D": {
            "item": "electrodynamics:railgunplasma"
          },
          "E": {
            "item": "immersiveengineering:turret_gun"
          },
          "F": {
            "item": "immersiveengineering:railgun"
          },
          "G": {
            "item": "electrodynamics:railgunkinetic"
          },
          "H": {
            "item": "create:creative_motor"
          },
          "I": {
            "item": "kubejs:stellar_alloy"
          },
          "J": {
            "item": "pneumaticcraft:minigun"
          },
          "K": {
            "item": "psi:cad_assembly_iron"
          },
          "L": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "M": {
            "item": "mekanism:creative_fluid_tank"
          },
          "N": {
            "item": "xreliquary:handgun"
          },
          "O": {
            "item": "psi:cad_assembly_psimetal"
          },
          "P": {
            "item": "botania:astrolabe"
          },
          "Q": {
            "item": "botania:mana_gun"
          },
          "R": {
            "item": "psi:cad_assembly_ivory_psimetal"
          },
          "S": {
            "item": "psi:cad_assembly_ebony_psimetal"
          },
          "T": {
            "item": "extrabotany:silverbullet"
          },
          "U": {
            "item": "create:potato_cannon"
          },
          "V": {
            "item": "create:copper_backtank"
          }
        },
        "result": {
          "item": "create:handheld_worldshaper",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAABABA",
          "AAACBCBAB",
          "AACCDBCBA",
          "ACCDDDCCA",
          "AADEFEDAA",
          "ACCDDDCCA",
          "AACCDCCAA",
          "AAACACAAA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "B": {
            "item": "futurepack:color_iron_magenta"
          },
          "C": {
            "item": "storagedrawers:emerald_storage_upgrade"
          },
          "D": {
            "item": "storagedrawers:creative_storage_upgrade"
          },
          "E": {
            "item": "kubejs:stellar_alloy"
          },
          "F": {
            "item": "create:handheld_worldshaper"
          }
        },
        "result": {
          "item": "storagedrawers:creative_vending_upgrade",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAAAA",
          "ABBBBBBBA",
          "ABCCCCCBA",
          "ABCCCCCBA",
          "ABCCDCCBA",
          "ABCCECCBA",
          "ABCCCCCBA",
          "ABBBBBBBA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "kubejs:ultimate_singularity_singularity"
          },
          "B": {
            "item": "appliedenergistics2:64k_storage_cell"
          },
          "C": {
            "item": "kubejs:stellar_alloy"
          },
          "D": {
            "item": "storagedrawers:creative_vending_upgrade"
          },
          "E": {
            "item": "kubejs:tesseract"
          }
        },
        "result": {
          "item": "appliedenergistics2:creative_storage_cell"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "      A  ",
          "   BBBA  ",
          "  BCCCB  ",
          "  BADAB  ",
          "  BCCCB  ",
          "   BAB   ",
          "   BAB   ",
          "   BAB   ",
          "   BBB   "
        ],
        "key": {
          "A": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:steel\"}"
          },
          "B": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:stainless_steel\"}"
          },
          "C": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:redstone\"}"
          },
          "D": {
            "item": "kubejs:stellar_circuit_probe"
          }
        },
        "result": {
          "item": "theoneprobe:creativeprobe"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          "ABBBBBBBA",
          "ACDDDDDCA",
          "ACDEFEDCA",
          "ACDDDDDCA",
          "ABBBBBBBA",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:coal\"}"
          },
          "B": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:nether_star\"}"
          },
          "C": {
            "item": "integrateddynamics:crystalized_chorus_block"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:redstone\"}"
          },
          "E": {
            "item": "kubejs:concept_of_the_stars"
          },
          "F": {
            "item": "kubejs:hypercompressed_core"
          }
        },
        "result": {
          "item": "kubejs:stellar_alloy"
        }
    })

})