onEvent('recipes', event => {

    event.remove({output: "astralsorcery:altar_discovery"})
    event.remove({output: "astralsorcery:marble_bricks"})
    event.remove({output: "astralsorcery:marble_chiseled"})
    event.remove({output: "astralsorcery:marble_pillar"})
    event.remove({output: "astralsorcery:marble_runed"})
    event.remove({output: "astralsorcery:marble_arch"})
    event.remove({output: "astralsorcery:marble_engraved"})
    event.remove({output: "astralsorcery:aquamarine"})
    event.remove({output: "astralsorcery:black_marble_raw"})
    event.remove({output: "astralsorcery:wand"})
    event.remove({id: "astralsorcery:altar/well"})
    event.remove({id: "astralsorcery:altar/illumination_powder"})
    event.remove({id: "astralsorcery:block_transmutation/craftingtable_altar"})
    event.remove({id: "astralsorcery:block_transmutation/iron_starmetal"})
    event.remove({id: "astralsorcery:altar/altar_attunement"})
    event.remove({id: "astralsorcery:altar/nocturnal_powder"})
    event.remove({id: "astralsorcery:altar/linking_tool"})
    event.remove({id: "astralsorcery:altar/attunement_altar"})
    event.remove({id: "astralsorcery:altar/telescope"})
    event.remove({id: "astralsorcery:altar/hand_telescope"})
    event.remove({id: "astralsorcery:altar/spectral_relay"})
    event.remove({id: "astralsorcery:altar/glass_lens"})
    event.remove({id: "astralsorcery:infuser/glass_pane"})
    event.remove({id: "astralsorcery:altar/ritual_pedestal"})
    event.remove({id: "astralsorcery:altar/altar_constellation"})
    event.remove({id: "astralsorcery:altar/infuser"})
    event.remove({id: "astralsorcery:altar/refraction_table"})
    event.remove({id: "astralsorcery:infuser/aquamarine"})
    event.remove({id: "astralsorcery:altar/enchantment_amulet_init"})
    event.remove({id: "astralsorcery:altar/enchantment_amulet_reroll"})
    event.remove({id: "astralsorcery:altar/observatory"})
    event.remove({id: "astralsorcery:altar/altar_radiance"})
    event.remove({id: "astralsorcery:altar/fountain"})
    event.remove({id: "astralsorcery:altar/fountain_prime_liquid"})
    event.remove({id: "astralsorcery:altar/celestial_collector_crystal"})
    event.remove({id: "astralsorcery:altar/wand"})
    event.remove({id: "astralsorcery:altar/black_marble_raw"})
    event.remove({id: "astralsorcery:altar/marble_arch"})
    event.remove({id: "astralsorcery:altar/marble_engraved"})
    event.remove({id: "astralsorcery:altar/marble_runed"})
    event.remove({id: "astralsorcery:altar/marble_pillar"})
    event.remove({id: "astralsorcery:altar/marble_chiseled"})
    event.remove({id: "astralsorcery:altar/marble_bricks"})

    event.shaped("astralsorcery:altar_discovery", [
        "PSP",
        " A ",
        "DOD"
    ], {
        P: "extrabotany:photonium",
        D: "extrabotany:shadowium",
        O: "extrabotany:orichalcos",
        S: "kubejs:stellar_core",
        A: "extendedcrafting:advanced_table",
    })
    event.shaped("2x kubejs:stellar_core", [
        " C ",
        "ESE",
        " C "
    ], {
        S: "kubejs:stellar_core",
        C: "kubejs:enchanted_crystal",
        E: "bloodmagic:etherealslate"
    })
    event.shaped("4x astralsorcery:marble_bricks", [
        "MBM",
        "B B",
        "MBM"
    ], {
        M: "astralsorcery:marble_raw",
        B: "bloodmagic:bloodstonebrick"
    })
    event.shaped("4x astralsorcery:marble_chiseled", [
        "AMA",
        "MAM",
        "AMA"
    ], {
        M: "astralsorcery:marble_raw",
        A: "extrabotany:aerialite"
    })
    event.shaped("2x astralsorcery:marble_pillar", [
        " M ",
        " P ",
        " M "
    ], {
        M: "astralsorcery:marble_raw",
        P: "tetra:forged_wall"
    })
    event.shaped("6x astralsorcery:marble_runed", [
        "MMM",
        "OOO",
        "MMM"
    ], {
        M: "astralsorcery:marble_raw",
        O: "bloodmagic:orbcapacityrune"
    })
    event.shaped("6x astralsorcery:marble_engraved", [
        "MM ",
        "MOM",
        " MM"
    ], {
        M: "astralsorcery:marble_raw",
        O: "extrabotany:orichalcos"
    })
    event.shaped("6x astralsorcery:marble_arch", [
      "MMM",
      "DDD",
      "MMM"
  ], {
      M: "astralsorcery:marble_raw",
      D: "botania:glimmering_dreamwood"
  })
    event.shaped("6x astralsorcery:black_marble_raw", [
        "NMM",
        "M M",
        "MMN"
    ], {
        M: "astralsorcery:marble_raw",
        N: "astralsorcery:nocturnal_powder"
    })
    event.shaped("kubejs:overpowered_kit", [
        " C ",
        "PBS",
        " H "
    ], {
        C: Item.of("bloodmagic:livingplate","{RepairCost:1,Damage:0,livingStats:{maxPoints:100,upgrades:[]},Enchantments:[{lvl:5s,id:\"minecraft:protection\"}],temperature:0.0d}"),
        H: Item.of("bloodmagic:livinghelmet","{RepairCost:1,Damage:0,Enchantments:[{lvl:1s,id:\"astralsorcery:night_vision\"}],temperature:0.0d}"),
        P: Item.of("bloodmagic:soulpickaxe","{RepairCost:1,Damage:0,Enchantments:[{lvl:1s,id:\"astralsorcery:scorching_heat\"}],temperature:0.0d}"),
        S: Item.of("bloodmagic:soulsword","{RepairCost:1,Damage:0,Enchantments:[{lvl:7s,id:\"minecraft:sharpness\"}],temperature:0.0d}"),
        B: "minecraft:shulker_box"
    })
    event.shaped("astralsorcery:enchantment_amulet", [
        "U G",
        " P ",
        "A V"
    ], {
        U: Item.of("astralsorcery:attuned_celestial_crystal","{astralsorcery:{constellationName:\"astralsorcery:pelotrio\",constellationTrait:\"astralsorcery:ulteria\"},temperature:0.0d}").weakNBT(),
        G: Item.of("astralsorcery:attuned_celestial_crystal","{astralsorcery:{constellationName:\"astralsorcery:octans\",constellationTrait:\"astralsorcery:gelu\"},temperature:0.0d}").weakNBT(),
        A: Item.of("astralsorcery:attuned_celestial_crystal","{astralsorcery:{constellationName:\"astralsorcery:mineralis\",constellationTrait:\"astralsorcery:alcara\"},temperature:0.0d}").weakNBT(),
        V: Item.of("astralsorcery:attuned_celestial_crystal","{astralsorcery:{constellationName:\"astralsorcery:fornax\",constellationTrait:\"astralsorcery:vorux\"},temperature:0.0d}").weakNBT(),
        P: "botania:prism"
    })

    event.shapeless("9x astralsorcery:aquamarine", "kubejs:aquamarine_block")
    event.shapeless("kubejs:aquamarine_block", ["astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine","astralsorcery:aquamarine"])
    event.shapeless("9x kubejs:dark_matter_alloy", "kubejs:dark_matter_alloy_block")
    event.shapeless("kubejs:dark_matter_alloy_block", ["kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy","kubejs:dark_matter_alloy"])
    event.shapeless("9x electrodynamics:ingotsuperconductive", "kubejs:superconductive_block")
    event.shapeless("kubejs:superconductive_block", ["electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive","electrodynamics:ingotsuperconductive"])
    event.shapeless("9x kubejs:annealed_copper_ingot", "kubejs:annealed_copper_block")
    event.shapeless("kubejs:annealed_copper_block", ["kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot","kubejs:annealed_copper_ingot"])
    event.shapeless("9x immersiveengineering:ingot_hop_graphite", "kubejs:hop_graphite_block")
    event.shapeless("kubejs:hop_graphite_block", ["immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite","immersiveengineering:ingot_hop_graphite"])
    event.shapeless("9x electrodynamics:ingotmolybdenum", "kubejs:molybdenum_block")
    event.shapeless("kubejs:molybdenum_block", ["electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum","electrodynamics:ingotmolybdenum"])
    event.shapeless("9x kubejs:tungsten_ingot", "kubejs:tungsten_block")
    event.shapeless("kubejs:tungsten_block", ["kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot","kubejs:tungsten_ingot"])
    event.shapeless("4x mekanism:pellet_plutonium", "kubejs:plutonium_block")
    event.shapeless("9x kubejs:pristine_gold_ingot", "kubejs:pristine_gold_block")
    event.shapeless("9x kubejs:tanzanite", "kubejs:tanzanite_block")


    event.recipes.thermal.smelter("8x kubejs:coated_aquamarine", ["8x astralsorcery:aquamarine","4x astralsorcery:stardust","kubejs:enchanted_crystal"]).energy(10000)

    event.custom({
        "type":"electrodynamics:reinforced_alloyer_recipe",
    
        "input1":{
            "item":"emendatusenigmatica:silicon_gem",
            "count":1
        },
        "input2":{
            "item":"emendatusenigmatica:coke_dust",
            "count":1
        },
        "output":{
            "item":"kubejs:silicon_carbide_powder",
            "count":2
        }
    })
    event.custom({
        "type": "electrodynamics:chemical_mixer_recipe",
        "item_input": {
            "item": "kubejs:silicon_carbide_powder",
            "count": 1
        },
        "fluid_input": {
            "tag":"forge:lpg",
            "amount": 500
        },
        "fluid_output": {
            "fluid": "kubejs:silicon_carbide_paste",
            "amount": 1000
        }
    })
    event.custom({
        "type":"electrodynamics:mineral_grinder_recipe",
    
        "input":{
            "item":"astralsorcery:aquamarine_sand_ore",
            "count":1
        },
        "output":{
            "item":"kubejs:impure_aquamarine",
            "count":2
        }
    })
    event.custom({
        "type":"electrodynamics:mineral_grinder_recipe",
    
        "input":{
            "item":"astralsorcery:starmetal_ingot",
            "count":1
        },
        "output":{
            "item":"astralsorcery:stardust",
            "count":1
        }
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 100,
        "pattern": [
          "_____",
          "__AS_",
          "__MA_",
          "_M___",
          "_____"
        ],
        "key": {
          "A": {
            "item": "astralsorcery:aquamarine"
          },
          "M": {
            "item": "astralsorcery:marble_raw"
          },
          "S": {
            "item": "kubejs:stellar_core"
          }
        },
        "output": [
          {
            "item": "astralsorcery:wand",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 60,
        "starlight": 400,
        "pattern": [
          "_____",
          "_SLM_",
          "_LFL_",
          "_MLS_",
          "_____"
        ],
        "key": {
          "S": {
            "item": "extrabotany:spirit"
          },
          "L": {
            "item": "extendedcrafting:luminessence"
          },
          "F": {
            "item": "kubejs:fading_light_essence"
          },
          "M": {
            "item": "botania:mana_powder"
          }
        },
        "output": [
          {
            "item": "astralsorcery:illumination_powder",
            "count": 8
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 200,
        "pattern": [
          "_____",
          "_R_R_",
          "_CSC_",
          "_ABA_",
          "_____"
        ],
        "key": {
          "R": {
            "item": "astralsorcery:marble_runed"
          },
          "C": {
            "item": "astralsorcery:marble_chiseled"
          },
          "S": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": false,
            "hasToBeCelestial": false,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          },
          "A": {
            "item": "astralsorcery:aquamarine"
          },
          "B": {
            "item": "kubejs:aquamarine_block"
          }
        },
        "output": [
          {
            "item": "astralsorcery:well",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 600,
        "pattern": [
          "____O",
          "_T___",
          "_IE__",
          "_EFT_",
          "E____"
        ],
        "key": {
          "O": {
            "item": "astralsorcery:perk_gem_sky"
          },
          "F": {
            "item": "astralsorcery:perk_gem_night"
          },
          "I": {
            "item": "astralsorcery:perk_gem_day"
          },
          "E": {
            "item": "astralsorcery:infused_wood_enriched"
          },
          "T": {
            "item": "botania:livingwood_twig"
          }
        },
        "output": [
          {
            "item": "astralsorcery:linking_tool",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 700,
        "pattern": [
          "_____",
          "_PSP_",
          "_CSC_",
          "_PAP_",
          "_____"
        ],
        "key": {
          "P": {
            "item": "astralsorcery:marble_pillar"
          },
          "S": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": false,
            "hasToBeCelestial": false,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          },
          "C": {
            "item": "astralsorcery:marble_chiseled"
          },
          "S": {
            "type": "astralsorcery:fluid",
            "fluid": [
              {
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 1000
              }
            ]
          },
          "A": {
            "item": "kubejs:aquamarine_block"
          },
        },
        "recipe_class": "astralsorcery:attunement_upgrade",
        "output": [
          {
            "item": "astralsorcery:altar_attunement",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:upgrade_altar"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 800,
        "pattern": [
          "_____",
          "_EIC_",
          "_IVI_",
          "_CIE_",
          "_____"
        ],
        "key": {
          "E": {
            "item": "psi:ebony_psimetal"
          },
          "I": {
            "item": "astralsorcery:illumination_powder"
          },
          "C": {
            "item": "thermal:ice_charge"
          },
          "V": {
            "item": "kubejs:void_essence"
          }
        },
        "output": [
          {
            "item": "astralsorcery:nocturnal_powder",
            "count": 8
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:block_transmutation",
        "input": [
          {
            "block": "botania:bifrost_perm",
            "display": {
              "item": "botania:bifrost_perm",
              "count": 1
            }
          }
        ],
        "output": {
          "block": "kubejs:starglass"
        },
        "display": {
          "item": "kubejs:starglass",
          "count": 1
        },
        "starlight": 400.0
    })
    event.custom({
        "type": "astralsorcery:block_transmutation",
        "input": [
          {
            "block": "mythicbotany:elementium_ore",
            "display": {
              "item": "mythicbotany:elementium_ore",
              "count": 1
            }
          }
        ],
        "output": {
          "block": "astralsorcery:starmetal_ore"
        },
        "display": {
          "item": "astralsorcery:starmetal_ore",
          "count": 1
        },
        "starlight": 400.0
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1600,
        "pattern": [
          "G___G",
          "_ESE_",
          "_RCR_",
          "_ESE_",
          "G___G"
        ],
        "key": {
          "G": {
            "item": "kubejs:starglass"
          },
          "E": {
            "item": "astralsorcery:marble_engraved"
          },
          "R": {
            "item": "astralsorcery:marble_runed"
          },
          "S": {
            "item": "astralsorcery:black_marble_raw"
          },
          "C": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": false,
            "hasToBeCelestial": false,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          }
        },
        "output": [
          {
            "item": "astralsorcery:attunement_altar",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:pillar_sparkle",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:altar_default_lightbeams",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 200,
        "pattern": [
          "_____",
          "_PEP_",
          "_EGE_",
          "_PEP_",
          "_____"
        ],
        "key": {
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "E": {
            "item": "astralsorcery:infused_wood_engraved"
          },
          "G": {
            "item": "astralsorcery:glass_lens"
          }
        },
        "output": [
          {
            "item": "astralsorcery:spectral_relay",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 200,
        "pattern": [
          "_____",
          "_A___",
          "__E__",
          "___P_",
          "_____"
        ],
        "key": {
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "E": {
            "item": "astralsorcery:infused_wood_engraved"
          },
          "A": {
            "item": "astralsorcery:aquamarine"
          },
        },
        "output": [
          {
            "item": "astralsorcery:hand_telescope",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 800,
        "pattern": [
          "_____",
          "_HPG_",
          "__P__",
          "__T__",
          "_____"
        ],
        "key": {
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "H": {
            "item": "astralsorcery:hand_telescope"
          },
          "G": {
            "item": "astralsorcery:glass_lens"
          },
          "T": {
            "item": "botania:livingwood_twig"
          }
        },
        "output": [
          {
            "item": "astralsorcery:telescope",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 200,
        "pattern": [
          "_____",
          "__A__",
          "_AGA_",
          "__A__",
          "_____"
        ],
        "key": {
          "A": {
            "item": "astralsorcery:aquamarine"
          },
          "G": {
            "item": "kubejs:starglass"
          }
        },
        "output": [
          {
            "item": "astralsorcery:glass_lens",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "D___D",
          "_PPP_",
          "_SRS_",
          "_CCC_",
          "D___D"
        ],
        "key": {
          "D": {
            "item": "astralsorcery:stardust"
          },
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "S": {
            "item": "astralsorcery:starmetal_ingot"
          },
          "C": {
            "item": "astralsorcery:marble_chiseled"
          },
          "R": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": true,
            "hasToBeCelestial": false,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          }
        },
        "recipe_class": "astralsorcery:constellation_upgrade",
        "output": [
          {
            "item": "astralsorcery:altar_constellation",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:upgrade_altar",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "P___P",
          "_CYC_",
          "_MSM_",
          "_RRR_",
          "L___L"
        ],
        "key": {
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "C": {
            "item": "astralsorcery:marble_chiseled"
          },
          "Y": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": false,
            "hasToBeCelestial": false,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          },
          "M": {
            "item": "bloodmagic:masterritualstone"
          },
          "S": {
            "type": "astralsorcery:fluid",
            "fluid": [
              {
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 1000
              }
            ]
          },
          "R": {
            "item": "astralsorcery:marble_runed"
          },
          "L": {
            "item": "astralsorcery:marble_pillar"
          }
        },
        "output": [
          {
            "item": "astralsorcery:ritual_pedestal",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:infuser",
        "fluidInput": "astralsorcery:liquid_starlight",
        "input": {
          "item": "kubejs:coated_aquamarine"
        },
        "output": {
          "item": "astralsorcery:resonating_gem",
          "count": 1
        },
        "consumptionChance": 0.3,
        "duration": 40,
        "consumeMultipleFluids": false,
        "acceptChaliceInput": true,
        "copyNBTToOutputs": false
    })
    event.custom({
        "type": "astralsorcery:infuser",
        "fluidInput": "astralsorcery:liquid_starlight",
        "input": {
          "item": "kubejs:starglass"
        },
        "output": {
          "item": "astralsorcery:glass_lens",
          "count": 1
        },
        "consumptionChance": 0.3,
        "duration": 40,
        "consumeMultipleFluids": false,
        "acceptChaliceInput": true,
        "copyNBTToOutputs": false
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 2,
        "duration": 400,
        "starlight": 1200,
        "pattern": [
          "E___E",
          "PASAP",
          "_GTG_",
          "PRRRP",
          "PG_GP"
        ],
        "key": {
          "E": {
            "item": "astralsorcery:marble_engraved"
          },
          "P": {
            "item": "astralsorcery:marble_pillar"
          },
          "A": {
            "item": "astralsorcery:aquamarine"
          },
          "S": {
            "item": "astralsorcery:starmetal"
          },
          "R": {
            "item": "astralsorcery:marble_runed"
          },
          "G": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "T": {
            "type": "forge:nbt",
            "item": "industrialforegoing:common_black_hole_tank",
            "count": 1,
            "nbt": "{BlockEntityTag:{filter:{Type:\"WHITELIST\",Pointer:0,Filter:{}},tank:{FluidName:\"astralsorcery:liquid_starlight\",FacingModes:{LEFT:\"ENABLED\",TOP:\"ENABLED\",RIGHT:\"ENABLED\",FRONT:\"ENABLED\",BACK:\"ENABLED\",BOTTOM:\"ENABLED\"},Amount:16000}}}"
          }
        },
        "output": [
          {
            "item": "astralsorcery:infuser",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 2,
        "duration": 400,
        "starlight": 2800,
        "pattern": [
          "R___R",
          "VR_RV",
          "_B_B_",
          "VSSSV",
          "E___E"
        ],
        "key": {
          "R": {
            "item": "astralsorcery:resonating_gem"
          },
          "V": {
            "item": "astralsorcery:infused_wood_infused"
          },
          "B": {
            "item": "astralsorcery:starmetal"
          },
          "S": {
            "item": "astralsorcery:black_marble_raw"
          },
          "E": {
            "item": "astralsorcery:marble_engraved"
          }
        },
        "output": [
          {
            "item": "astralsorcery:refraction_table",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:altar_default_lightbeams",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle",
          "astralsorcery:altar_random_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 3,
        "duration": 600,
        "starlight": 3200,
        "pattern": [
          "__PRT",
          "_PRIR",
          "PRGRP",
          "BSRP",
          "BBB__"
        ],
        "key": {
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "R": {
            "item": "astralsorcery:marble_runed"
          },
          "T": {
            "item": "astralsorcery:telescope"
          },
          "G": {
            "item": "astralsorcery:glass_lens"
          },
          "I": {
            "item": "astralsorcery:infused_glass"
          },
          "B": {
            "item": "kubejs:pristine_gold_block"
          },
          "S": {
            "item": "create:blue_seat"
          }
        },
        "output": [
          {
            "item": "astralsorcery:observatory",
            "count": 1
          }
        ],
        "focus_constellation": "astralsorcery:lucerna",
        "relay_inputs": [
          {
            "item": "astralsorcery:illumination_powder"
          },
          {
            "item": "astralsorcery:nocturnal_powder"
          },
          {
            "item": "astralsorcery:illumination_powder"
          },
          {
            "tag": "astralsorcery:stardust"
          },
          {
            "item": "astralsorcery:illumination_powder"
          },
          {
            "item": "astralsorcery:nocturnal_powder"
          },
          {
            "item": "astralsorcery:illumination_powder"
          },
          {
            "tag": "astralsorcery:stardust"
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_trait_relay_highlight",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_trait_focus_circle",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 2,
        "duration": 400,
        "starlight": 3200,
        "pattern": [
          "ES_SE",
          "REGER",
          "_SCS_",
          "RSOSR",
          "SS_SS"
        ],
        "key": {
          "E": {
            "item": "astralsorcery:marble_engraved"
          },
          "S": {
            "item": "astralsorcery:black_marble_raw"
          },
          "R": {
            "item": "astralsorcery:resonating_gem"
          },
          "G": {
            "item": "astralsorcery:glass_lens"
          },
          "C": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": true,
            "hasToBeCelestial": true,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          },
          "O": {
            "item": "kubejs:overpowered_kit"
          }
        },
        "recipe_class": "astralsorcery:trait_upgrade",
        "output": [
          {
            "item": "astralsorcery:altar_radiance",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:pillar_sparkle",
          "astralsorcery:luminescence_flare",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:upgrade_altar",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 3,
        "duration": 600,
        "starlight": 8000,
        "pattern": [
          "VMMMV",
          "VSCSV",
          "_PRP_",
          "MSESM",
          "_MMM_"
        ],
        "key": {
          "V": {
            "item": "astralsorcery:infused_wood_infused"
          },
          "M": {
            "item": "astralsorcery:black_marble_raw"
          },
          "S": {
            "item": "astralsorcery:starmetal"
          },
          "C": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": true,
            "hasToBeCelestial": true,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          },
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "R": {
            "item": "astralsorcery:resonating_gem"
          },
          "E": {
            "item": "astralsorcery:enchantment_amulet"
          }
        },
        "output": [
          {
            "item": "astralsorcery:fountain",
            "count": 1
          }
        ],
        "focus_constellation": "astralsorcery:bootes",
        "relay_inputs": [
          {
            "tag": "forge:gems/aquamarine"
          },
          {
            "item": "astralsorcery:stardust"
          },
          {
            "tag": "forge:gems/aquamarine"
          },
          {
            "item": "astralsorcery:stardust"
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_trait_relay_highlight",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_trait_focus_circle",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 3,
        "duration": 600,
        "starlight": 5600,
        "pattern": [
          "PSSSP",
          "RPGPR",
          "RMGMR",
          "_R_R_",
          "_G_G_"
        ],
        "key": {
          "P": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "S": {
            "item": "astralsorcery:black_marble_raw"
          },
          "R": {
            "item": "astralsorcery:resonating_gem"
          },
          "M": {
            "item": "astralsorcery:starmetal"
          },
          "G": {
            "item": "astralsorcery:glass_lens"
          }
        },
        "output": [
          {
            "item": "astralsorcery:fountain_prime_liquid",
            "count": 1
          }
        ],
        "focus_constellation": "astralsorcery:octans",
        "relay_inputs": [
          {
            "tag": "astralsorcery:stardust"
          },
          {
            "tag": "astralsorcery:stardust"
          },
          {
            "tag": "astralsorcery:stardust"
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:liquid_burst",
          "astralsorcery:built_in_effect_trait_relay_highlight",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_trait_focus_circle",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 3,
        "duration": 400,
        "starlight": 2600,
        "pattern": [
          "ABTBA",
          "C___C",
          "__D__",
          "C___C",
          "ABTBA"
        ],
        "key": {
          "A": {
            "tag": "astralsorcery:stardust"
          },
          "B": {
            "item": "astralsorcery:illumination_powder"
          },
          "C": {
            "item": "astralsorcery:resonating_gem"
          },
          "D": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": true,
            "hasToBeCelestial": true,
            "canBeAttuned": false,
            "canBeCelestialCrystal": true
          },
          "T": {
            "type": "forge:nbt",
            "item": "industrialforegoing:common_black_hole_tank",
            "count": 1,
            "nbt": "{BlockEntityTag:{filter:{Type:\"WHITELIST\",Pointer:0,Filter:{}},tank:{FluidName:\"astralsorcery:liquid_starlight\",FacingModes:{LEFT:\"ENABLED\",TOP:\"ENABLED\",RIGHT:\"ENABLED\",FRONT:\"ENABLED\",BACK:\"ENABLED\",BOTTOM:\"ENABLED\"},Amount:16000}}}"
          }
        },
        "recipe_class": "astralsorcery:constellation_copy_stats",
        "output": [
          {
            "item": "astralsorcery:celestial_collector_crystal",
            "count": 1
          }
        ],
        "relay_inputs": [
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            },
            {
              "tag": "astralsorcery:stardust"
            }
        ],
        "options": {
          "constellationSlot": 12
        },
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })

})