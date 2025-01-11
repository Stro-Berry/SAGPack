//priority: 0

onEvent("recipes", event => {

    event.remove({id: "occultism:smelting/iesnium_ingot"})
    event.remove({id: "occultism:blasting/iesnium_ingot"})
    event.remove({id: "occultism:miner/ores/otherstone"})
    event.remove({id: "occultism:miner/ores/otherstone"})
    event.remove({id: "occultism:spirit_trade/stone_to_otherstone"})
    event.remove({id: "occultism:spirit_trade/test"})
    event.remove({id: "occultism:spirit_fire/otherstone"})
    event.remove({id: "occultism:spirit_fire/chalk_white"})
    event.remove({id: "occultism:spirit_fire/chalk_red"})
    event.remove({id: "occultism:spirit_fire/chalk_purple"})
    event.remove({id: "occultism:spirit_fire/chalk_gold"})
    event.remove({id: "occultism:spirit_fire/otherworld_ashes"})
    event.remove({id: "occultism:spirit_fire/spirit_attuned_gem"})
    event.remove({id: "occultism:crushing/iesnium_dust"})
    event.remove({id: "occultism:ritual/summon_foliot_otherstone_trader"})
    event.remove({id: "occultism:ritual/summon_foliot_crusher"})
    event.remove({id: "occultism:ritual/summon_wild_hunt"})
    event.remove({id: "occultism:ritual/summon_wild_afrit"})
    event.remove({id: "occultism:ritual/craft_infused_pickaxe"})
    event.remove({id: "occultism:ritual/craft_infused_lenses"})
    event.remove({id: "occultism:ritual/craft_dimensional_mineshaft"})
    event.remove({id: "occultism:ritual/craft_miner_djinni_ores"})
    event.remove({id: "occultism:ritual/craft_dimensional_matrix"})
    event.remove({id: "occultism:smelting/iesnium_ingot_from_dust"})
    event.remove({id: "occultism:blasting/iesnium_ingot_from_dust"})
    event.remove({output: "occultism:book_of_binding_foliot"})
    event.remove({output: "occultism:book_of_binding_djinni"})
    event.remove({output: "occultism:book_of_binding_afrit"})
    event.remove({output: "occultism:book_of_binding_marid"})
    event.remove({output: "occultism:chalk_white_impure"})
    event.remove({output: "occultism:chalk_red_impure"})
    event.remove({output: "occultism:chalk_purple_impure"})
    event.remove({output: "occultism:chalk_gold_impure"})
    event.remove({output: "occultism:butcher_knife"})
    event.remove({output: "occultism:candle_white"})
    event.remove({output: "occultism:golden_sacrificial_bowl"})
    event.remove({output: "occultism:lenses"})
    event.remove({output: "occultism:lens_frame"})
    event.remove({output: "occultism:spirit_attuned_pickaxe_head"})
    event.remove({output: "occultism:magic_lamp_empty"})
    event.remove({output: "thermal:lightning_charge"})
    event.remove({output: "thermal:earth_charge"})
    event.remove({output: "thermal:ice_charge"})

    event.shaped("occultism:book_of_binding_foliot", [
        "ISI",
        "SBS",
        "ISI"
    ], {
        I: "occultism:purified_ink",
        S: "electrodynamics:ingotstainlesssteel",
        B: "minecraft:book"
    })
    event.shaped("occultism:book_of_binding_afrit", [
        "IEI",
        "EBE",
        "IEI"
    ], {
        I: "occultism:purified_ink",
        E: "occultism:iesnium_ingot",
        B: "minecraft:book"
    })
    event.shaped("occultism:book_of_binding_marid", [
        "IEI",
        "LBL",
        "IEI"
    ], {
        I: "occultism:purified_ink",
        E: "occultism:iesnium_ingot",
        L: "occultism:iesnium_block",
        B: "minecraft:book"
    })
    event.shaped("occultism:candle_white", [
        " C ",
        " T ",
        " T "
    ], {
        C: "eidolon:candle",
        T: "occultism:tallow"
    })
    event.shaped("occultism:golden_sacrificial_bowl", [
        "GGG",
        "GSG",
        "GGG"
    ], {
        G: "naturesaura:gold_powder",
        S: "occultism:sacrificial_bowl"
    })
    event.shaped("occultism:book_of_binding_djinni", [
        "IAI",
        "ABA",
        "IAI"
    ], {
        I: "occultism:purified_ink",
        A: "kubejs:aestanite_ingot",
        B: "minecraft:book"
    })
    event.shaped("occultism:chalk_gold_impure", [
        "CAC",
        "AWA",
        "CAC"
    ], {
        C: "eidolon:ender_calx",
        A: "kubejs:aestanite_ingot",
        W: "occultism:chalk_white_impure"
    })
    event.shaped("occultism:chalk_purple_impure", [
        "GAG",
        "AWA",
        "GAG"
    ], {
        G: "naturesaura:gold_powder",
        A: "kubejs:aestanite_ingot",
        W: "occultism:chalk_white_impure"
    })
    event.shaped("occultism:lenses", [
        "S S",
        "WSW",
        "S S"
    ], {
        S: "occultism:spirit_attuned_gem",
        W: "industrialforegoing:laser_lens0"
    })
    event.shaped("occultism:spirit_attuned_pickaxe_head", [
        "   ",
        "SCS",
        "   "
    ], {
        S: "occultism:spirit_attuned_gem",
        C: "occultism:spirit_attuned_crystal"
    })
    event.shaped("occultism:lens_frame", [
        "OOO",
        "M M",
        "OOO"
    ], {
        O: "occultism:otherstone",
        M: "kubejs:mithril_ingot"
    })
    event.shaped("occultism:magic_lamp_empty", [
        " S ",
        "SAS",
        " ST"
    ], {
        S: "#forge:storage_blocks/silver",
        T: "kubejs:tanzanite_block",
        A: "kubejs:aestanite_ingot"
    })
    event.shaped("occultism:chalk_red_impure", [
        " IA",
        "IWI",
        "TI "
    ], {
        I: "occultism:iesnium_ingot",
        T: "kubejs:tanzanite",
        W: "occultism:chalk_white_impure",
        A: "occultism:afrit_essence"
    })

    event.custom({
      "type": "occultism:spirit_trade",
      "ingredients": [
        {
          "item": "occultism:otherstone"
        }
      ],
      "result": {
        "item": "kubejs:aestanite_ore"
      }
    })
    event.custom({
      "type": "occultism:crushing",
      "ingredient": {
        "item": "kubejs:aestanite_ore"
      },
      "result": {
        "item": "kubejs:crushed_aestanite",
        "count": 1
      },
      "crushing_time": 20
    })
    event.custom({
      "type": "occultism:crushing",
      "ingredient": {
        "item": "kubejs:infused_ore"
      },
      "result": {
        "item": "kubejs:infusion_powder",
        "count": 1
      },
      "crushing_time": 20
    })
    event.custom({
      "type": "occultism:crushing",
      "ingredient": {
        "item": "occultism:iesnium_ore"
      },
      "result": {
        "item": "emendatusenigmatica:iesnium_crushed",
        "count": 2
      },
      "crushing_time": 20
    })
    event.custom({
      "type": "occultism:miner",
      "ingredient": {
        "tag": "occultism:miners/ores"
      },
      "result": {
        "item": "kubejs:infused_ore"
      },
      "weight": 800
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 32400,
      "spirit_job_type": "occultism:crush_tier1",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_foliot_crusher"
      },
      "ingredients": [
        {
          "item": "create:crushed_iron_ore"
        },
        {
          "item": "create:crushed_iron_ore"
        },
        {
          "item": "create:crushed_iron_ore"
        },
        {
          "item": "create:crushed_iron_ore"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 3600,
      "spirit_job_type": "occultism:trade_otherstone_t1",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_foliot_otherstone_trader"
      },
      "ingredients": [
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "occultism:otherstone"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_wild_hunt",
      "activation_item": {
        "item": "minecraft:skeleton_skull"
      },
      "pentacle_id": "occultism:summon_wild_greater_spirit",
      "duration": 30,
      "entity_to_sacrifice": {
        "tag": "occultism:humans",
        "display_name": "ritual.occultism.sacrifice.humans"
      },
      "entity_to_summon": "occultism:wild_hunt_wither_skeleton",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_wild_hunt"
      },
      "ingredients": [
        {
          "item": "occultism:spirit_attuned_gem"
        },
        {
          "item": "kubejs:aestanite_ingot"
        },
        {
          "item": "minecraft:netherite_block"
        },
        {
          "item": "occultism:spirit_attuned_gem"
        },
        {
          "item": "kubejs:aestanite_ingot"
        },
        {
          "item": "minecraft:netherite_block"
        },
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:craft",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:craft_foliot",
      "duration": 60,
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/craft_infused_lenses"
      },
      "ingredients": [
        {
          "item": "kubejs:mithril_ingot"
        },
        {
          "item": "kubejs:mithril_ingot"
        },
        {
          "item": "kubejs:mithril_ingot"
        },
        {
          "item": "occultism:lenses"
        },
        {
          "item": "kubejs:tanzanite"
        },
        {
          "item": "kubejs:mithril_ingot"
        },
        {
          "item": "kubejs:mithril_ingot"
        },
        {
          "item": "kubejs:mithril_ingot"
        }
      ],
      "result": {
        "item": "occultism:infused_lenses"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:craft_with_spirit_name",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_djinni"
      },
      "pentacle_id": "occultism:craft_djinni",
      "duration": 60,
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/craft_infused_pickaxe"
      },
      "ingredients": [
        {
          "item": "eidolon:reversal_pick"
        },
        {
          "item": "kubejs:aestanite_ingot"
        },
        {
          "item": "kubejs:aestanite_ingot"
        },
        {
          "item": "occultism:spirit_attuned_pickaxe_head"
        }
      ],
      "result": {
        "item": "occultism:infused_pickaxe"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:craft_with_spirit_name",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_djinni"
      },
      "pentacle_id": "occultism:craft_djinni",
      "duration": 10,
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/craft_dimensional_matrix"
      },
      "ingredients": [
        {
          "item": "thermal:enderium_glass"
        },
        {
          "item": "thermal:enderium_glass"
        },
        {
          "item": "thermal:enderium_glass"
        },
        {
          "item": "thermal:enderium_glass"
        },
        {
          "item": "electrodynamics:resourceblockstainlesssteel"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        {
          "item": "electrodynamics:circuitultimate"
        }
      ],
      "result": {
        "item": "occultism:dimensional_matrix"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:craft",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_djinni"
      },
      "pentacle_id": "occultism:craft_djinni",
      "duration": 60,
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/craft_dimensional_mineshaft"
      },
      "ingredients": [
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "occultism:otherstone"
        },
        {
          "item": "naturesaura:gold_powder"
        },
        {
          "item": "naturesaura:gold_powder"
        },
        {
          "item": "naturesaura:gold_powder"
        },
        {
          "item": "naturesaura:gold_powder"
        }
      ],
      "result": {
        "item": "occultism:miner_djinni_ores"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:craft_miner_spirit",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_djinni"
      },
      "pentacle_id": "occultism:craft_djinni",
      "duration": 60,
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/craft_miner_djinni_ores"
      },
      "ingredients": [
        {
          "item": "kubejs:tanzanite"
        },
        {
          "item": "kubejs:tanzanite"
        },
        {
          "item": "naturesaura:gold_powder"
        },
        {
          "item": "naturesaura:gold_powder"
        },
        {
          "item": "occultism:magic_lamp_empty"
        },
        {
          "item": "occultism:spirit_attuned_crystal"
        }
      ],
      "result": {
        "item": "occultism:miner_djinni_ores"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_afrit"
      },
      "pentacle_id": "occultism:summon_wild_afrit",
      "duration": 60,
      "entity_to_sacrifice": {
        "tag": "forge:cows",
        "display_name": "ritual.occultism.sacrifice.cows"
      },
      "entity_to_summon": "occultism:afrit_wild",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_wild_afrit"
      },
      "ingredients": [
        {
          "item": "thermal:earth_charge"
        },
        {
          "item": "thermal:earth_charge"
        },
        {
          "item": "thermal:earth_charge"
        },
        {
          "item": "thermal:earth_charge"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "kubejs:empty_bone"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          " SS  ",
          "SSTA ",
          "STO  ",
          " A   ",
          "A    "
        ],
        "key": {
          "S": {
            "item": "electrodynamics:resourceblockstainlesssteel"
          },
          "T": {
            "item": "kubejs:tanzanite_block"
          },
          "O": {
            "item": "occultism:otherstone"
          },
          "A": {
            "item": "naturesaura:ancient_stick"
          }
        },
        "result": {
          "item": "occultism:butcher_knife"
        }
    })
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
          "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 20,
        "ritual_dummy": {
          "item": "occultism:ritual_dummy/custom_ritual"
        },
        "ingredients": [
          {
            "item": "kubejs:aestanite_ingot"
          },
          {
            "item": "kubejs:aestanite_ingot"
          },
          {
            "item": "kubejs:aestanite_ingot"
          },
          {
            "item": "kubejs:aestanite_ingot"
          },
          {
            "item": "kubejs:infusion_powder"
          },
          {
            "item": "kubejs:infusion_powder"
          },
          {
            "item": "emendatusenigmatica:iesnium_crushed"
          },
          {
            "item": "emendatusenigmatica:iesnium_crushed"
          }
        ],
        "result": {
          "item": "occultism:iesnium_ingot",
          "count": 6
        }
    })
    event.custom({
        "input": [
          {
            "item": "thermal:blitz_powder"
          },
          {
            "item": "thermal:blitz_powder"
          },
          {
            "item": "pneumaticcraft:capacitor"
          },
          {
            "item": "electrodynamics:wiresuperconductive"
          },
          {
            "item": "pneumaticcraft:capacitor"
          },
          {
            "item": "electrodynamics:wiresuperconductive"
          },
          {
            "item": "emendatusenigmatica:coke_dust"
          },
          {
            "item": "emendatusenigmatica:coke_dust"
          }
        ],
        "inputFluid": "{FluidName:\"thermal:refined_fuel\",Amount:500}",
        "processingTime": 30,
        "output": {
          "item": "thermal:lightning_charge",
          "count": 4
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
          "item": "occultism:book_of_binding_bound_marid"
        },
        "pentacle_id": "occultism:craft_marid",
        "duration": 240,
        "ritual_dummy": {
          "item": "occultism:ritual_dummy/custom_ritual"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:ender_component"
          },
          {
            "item": "extendedcrafting:ender_component"
          },
          {
            "item": "occultism:otherstone"
          },
          {
            "item": "occultism:otherstone"
          },
          {
            "item": "occultism:iesnium_block"
          },
          {
            "item": "occultism:iesnium_block"
          },
          {
            "item": "electrodynamics:circuitultimate"
          },
          {
            "item": "electrodynamics:circuitultimate"
          }
        ],
        "result": {
          "item": "kubejs:magical_bullet_slot",
          "count": 1
        }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:craft",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_marid"
      },
      "pentacle_id": "occultism:craft_marid",
      "duration": 240,
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/custom_ritual"
      },
      "ingredients": [
        {
          "item": "extendedcrafting:ender_ingot_block"
        },
        {
          "item": "extendedcrafting:ender_ingot_block"
        },
        {
          "item": "mekanism:teleportation_core"
        },
        {
          "item": "mekanism:teleportation_core"
        },
        {
          "item": "appliedenergistics2:advanced_card"
        },
        {
          "item": "kubejs:superconducting_integral_components"
        },
        {
          "item": "appliedenergistics2:fluix_block"
        },
        {
          "item": "appliedenergistics2:fluix_block"
        }
      ],
      "result": {
        "item": "ae2wtlib:infinity_booster_card",
        "count": 1
      }
  })
})