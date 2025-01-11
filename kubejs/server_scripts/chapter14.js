onEvent('recipes', event => {

    event.remove({output: "aoa3:shyrelands_realmstone"})
    event.remove({output: "aoa3:haunted_idol"})
    event.remove({output: "aoa3:vile_stone"})
    event.remove({output: "aoa3:rainbow_druse"})
    event.remove({output: "aoa3:petals"})
    event.remove({output: "aoa3:mega_rune_stone"})
    event.remove({id: "aoa3:infusion_hazmat_boots"})
    event.remove({id: "aoa3:infusion_hazmat_legs"})
    event.remove({id: "aoa3:infusion_hazmat_chestplate"})
    event.remove({id: "aoa3:infusion_hazmat_helmet"})
    event.remove({id: "aoa3:magic_mending_solution"})

    event.shaped("aoa3:hazmat_helmet", [
        "DPD",
        "L L",
        "   "
    ], {
        D: "bloodmagic:demonslate",
        P: "aoa3:polluted_stone",
        L: "immersiveengineering:concrete_leaded",
    })
    event.shaped("aoa3:hazmat_chestplate", [
        "L L",
        "DPD",
        "LLL"
    ], {
        D: "bloodmagic:demonslate",
        P: "aoa3:polluted_stone",
        L: "immersiveengineering:concrete_leaded",
    })
    event.shaped("aoa3:hazmat_legs", [
        "LPL",
        "D D",
        "L L"
    ], {
        D: "bloodmagic:demonslate",
        P: "aoa3:polluted_stone",
        L: "immersiveengineering:concrete_leaded",
    })
    event.shaped("aoa3:hazmat_boots", [
        "   ",
        "L L",
        "DPD"
    ], {
        D: "bloodmagic:demonslate",
        P: "aoa3:polluted_stone",
        L: "immersiveengineering:concrete_leaded",
    })
    
    event.shapeless("kubejs:dimensionally_transcendent_pebble_and_hellsteel", ["bloodmagic:ingot_hellforged","kubejs:dimensionally_transcendent_pebble","mythicbotany:asgard_rune"])

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:gardencia_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:rune_spring"
          },
          {
            "item": "kubejs:rune_gluttony"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:celeve_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:rune_autumn"
          },
          {
            "item": "kubejs:rune_lust"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:iromine_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:rune_winter"
          },
          {
            "item": "kubejs:rune_pride"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:crystevia_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:rune_winter"
          },
          {
            "item": "kubejs:rune_greed"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:vox_ponds_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:rune_summer"
          },
          {
            "item": "kubejs:rune_sloth"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:runandor_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:corrosive_heart"
          },
          {
            "item": "kubejs:rune_mana"
          },
          {
            "item": "kubejs:rune_sloth"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:shyrelands_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:illusionary_amethyst"
          },
          {
            "item": "kubejs:rune_summer"
          },
          {
            "item": "kubejs:rune_pride"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:lborean_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:vinocorne_petal"
          },
          {
            "item": "kubejs:rune_spring"
          },
          {
            "item": "kubejs:rune_envy"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:lunalus_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:clown_nose"
          },
          {
            "item": "kubejs:rune_winter"
          },
          {
            "item": "kubejs:rune_wrath"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "aoa3:greckon_realmstone",
          "count": 1
        },
        "mana": 200000,
        "ingredients": [
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "kubejs:rune_spring"
          },
          {
            "item": "kubejs:rune_envy"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          }
        ]
    })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:confetti_pile"
          },
          {
            "item": "aoa3:confetti_pile"
          },
          {
            "item": "aoa3:white_celevus_leaves"
          },
          {
            "item": "aoa3:celeve_stem"
          },
          {
            "item": "aoa3:celevian_dirt"
          },
          {
            "item": "aoa3:red_celevus_leaves"
          },
          {
            "item": "aoa3:balloon"
          }
        ],
        "result": {
          "item": "aoa3:toy_gyrocopter"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:small_blue_petal"
          },
          {
            "item": "aoa3:small_purple_petal"
          },
          {
            "item": "aoa3:small_red_petal"
          },
          {
            "item": "aoa3:small_green_petal"
          },
          {
            "item": "aoa3:small_orange_petal"
          },
          {
            "item": "aoa3:petal_crafting_station"
          },
          {
            "item": "aoa3:flower_core"
          }
        ],
        "result": {
          "item": "aoa3:petals"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "kubejs:iro_scrap"
          },
          {
            "item": "naturesaura:tainted_gold_block"
          },
          {
            "item": "naturesaura:tainted_gold_block"
          },
          {
            "item": "aoa3:mecha_gear"
          },
          {
            "item": "aoa3:mecha_gear"
          },
          {
            "item": "aoa3:magnet_shard"
          },
          {
            "item": "aoa3:magnet_shard"
          }
        ],
        "result": {
          "item": "aoa3:iro_crate"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:blue_druse"
          },
          {
            "item": "aoa3:green_druse"
          },
          {
            "item": "aoa3:purple_druse"
          },
          {
            "item": "aoa3:red_druse"
          },
          {
            "item": "aoa3:white_druse"
          },
          {
            "item": "aoa3:yellow_druse"
          },
          {
            "item": "botania:bifrost_perm"
          }
        ],
        "result": {
          "item": "aoa3:rainbow_druse"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:uncharged_stone"
          },
          {
            "item": "aoa3:toxic_lump"
          },
          {
            "item": "aoa3:toxic_lump"
          },
          {
            "item": "aoa3:degraded_steel"
          },
          {
            "item": "aoa3:degraded_steel"
          },
          {
            "item": "aoa3:toxic_waste_bucket"
          },
          {
            "item": "aoa3:toxic_waste_bucket"
          }
        ],
        "result": {
          "item": "aoa3:vile_stone"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:magic_mending_solution"
          },
          {
            "item": "aoa3:primed_ghoulasm"
          },
          {
            "item": "aoa3:primed_ghoulasm"
          },
          {
            "item": "aoa3:ghoulish_ingot"
          },
          {
            "item": "aoa3:ghoulish_ingot"
          },
          {
            "item": "aoa3:ghastly_ingot"
          },
          {
            "item": "aoa3:ghastly_ingot"
          }
        ],
        "result": {
          "item": "aoa3:haunted_idol"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:lunide_log"
          },
          {
            "item": "aoa3:lunar_ingot"
          },
          {
            "item": "aoa3:lunar_ingot"
          },
          {
            "item": "aoa3:neon_lamp"
          },
          {
            "item": "aoa3:neon_lamp"
          },
          {
            "item": "aoa3:twinklestone"
          },
          {
            "item": "aoa3:lunalip"
          }
        ],
        "result": {
          "item": "aoa3:observing_eye"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:blue_mega_rune_fragment"
          },
          {
            "item": "aoa3:blue_mega_rune_fragment"
          },
          {
            "item": "aoa3:blue_mega_rune_fragment"
          },
          {
            "item": "aoa3:blue_mega_rune_fragment"
          },
          {
            "item": "aoa3:runic_energy"
          },
          {
            "item": "aoa3:runic_log"
          },
          {
            "item": "aoa3:runic_stone"
          }
        ],
        "result": {
          "item": "aoa3:mega_rune_stone"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "kubejs:empowered_coral"
          },
          {
            "item": "kubejs:dracyon_emitter"
          },
          {
            "item": "aoa3:coral_rock"
          },
          {
            "item": "aoa3:coral_rock"
          },
          {
            "item": "aoa3:green_coral"
          },
          {
            "item": "aoa3:white_coral"
          },
          {
            "item": "aoa3:orange_coral"
          }
        ],
        "result": {
          "item": "kubejs:fossilized_coral"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "bloodmagic:etherealslate"
        },
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "aoa3:divine_station"
          },
          {
            "item": "aoa3:shyre_glass"
          },
          {
            "item": "aoa3:whitewashing_solution"
          },
          {
            "item": "aoa3:whitewashing_solution"
          },
          {
            "item": "aoa3:shyrestone_ingot"
          },
          {
            "item": "aoa3:shyregem"
          },
          {
            "item": "aoa3:whitewashing_table"
          }
        ],
        "result": {
          "item": "aoa3:ancient_ring"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "botania:pebble"
        },
        "ingredients": [
          {
            "item": "kubejs:mechbot_core"
          },
          {
            "item": "kubejs:fossilized_coral"
          },
          {
            "item": "kubejs:fragmented_anima_stone"
          },
          {
            "item": "kubejs:crystocore_essence"
          },
          {
            "item": "kubejs:xxeus_crown"
          },
          {
            "item": "kubejs:optic_nerve"
          }
        ],
        "result": {
          "item": "kubejs:dimensionally_transcendent_pebble"
    }})

})