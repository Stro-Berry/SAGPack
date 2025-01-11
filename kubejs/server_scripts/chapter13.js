onEvent("recipes", event => {

    event.remove({id: "bloodmagic:altar/slate"})
    event.remove({id: "bloodmagic:altar/imbuedslate"})
    event.remove({id: "bloodmagic:altar/weakbloodorb"})
    event.remove({id: "bloodmagic:altar/apprenticebloodorb"})
    event.remove({id: "bloodmagic:altar/magicianbloodorb"})
    event.remove({id: "bloodmagic:altar/soul_snare"})
    event.remove({id: "bloodmagic:altar/air_tool"})
    event.remove({id: "bloodmagic:altar/fire_tool"})
    event.remove({id: "bloodmagic:altar/water_tool"})
    event.remove({id: "bloodmagic:altar/earth_tool"})
    event.remove({id: "bloodmagic:altar/dusk_tool"})
    event.remove({id: "bloodmagic:soulforge/pettytartaricgem"})
    event.remove({id: "bloodmagic:soulforge/sentientsword"})
    event.remove({id: "bloodmagic:soulforge/lessertartaricgem"})
    event.remove({id: "bloodmagic:soulforge/commontartaricgem"})
    event.remove({id: "bloodmagic:soulforge/greatertartaricgem"})
    event.remove({id: "bloodmagic:soulforge/demon_crucible"})
    event.remove({id: "bloodmagic:soulforge/demon_crystallizer"})
    event.remove({id: "bloodmagic:soulforge/primitive_crystalline_resonator"})
    event.remove({id: "bloodmagic:alchemytable/reagent_lava"})
    event.remove({id: "bloodmagic:alchemytable/reagent_water"})
    event.remove({id: "bloodmagic:alchemytable/reagent_sight"})
    event.remove({id: "bloodmagic:alchemytable/reagent_air"})
    event.remove({id: "bloodmagic:alchemytable/reagent_growth"})
    event.remove({id: "bloodmagic:alchemytable/reagent_holding"})
    event.remove({id: "bloodmagic:alchemytable/reagent_fastminer"})
    event.remove({id: "bloodmagic:alchemytable/reagent_void"})
    event.remove({id: "bloodmagic:alchemytable/reagent_binding"})
    event.remove({id: "bloodmagic:alchemytable/reagent_bloodlight"})
    event.remove({id: "bloodmagic:alchemytable/reagent_magnetism"})
    event.remove({id: "bloodmagic:alchemytable/reagent_teleposition"})
    event.remove({id: "bloodmagic:alchemytable/reagent_suppression"})
    event.remove({id: "bloodmagic:alchemytable/arcane_ash"})
    event.remove({id: "bloodmagic:ritual_stone_master"})
    event.remove({output: "bloodmagic:soulforge"})
    event.remove({output: "bloodmagic:blankrune"})
    event.remove({output: "bloodmagic:sacrificialdagger"})
    event.remove({output: "bloodmagic:altarcapacityrune"})
    event.remove({output: "bloodmagic:ingot_hellforged"})
    event.remove({output: "bloodmagic:ritualstone"})
    event.remove({output: "bloodmagic:materritualstone"})
    event.remove({output: "bloodmagic:sand_hellforged"})
    event.remove({output: "bloodmagic:corrupted_dust"})
    event.remove({output: "bloodmagic:alchemicalreactionchamber"})
    event.remove({output: "bloodmagic:chargingrune"})
    event.remove({output: "bloodmagic:accelerationrune"})
    event.remove({output: "bloodmagic:orbcapacityrune"})
    event.remove({output: "bloodmagic:bettercapacityrune"})
    event.remove({output: "bloodmagic:dislocationrune"})
    event.remove({output: "bloodmagic:selfsacrificerune"})
    event.remove({output: "bloodmagic:speedrune"})
    event.remove({output: "bloodmagic:sacrificerune"})
    event.remove({output: "bloodmagic:alchemytable"})
    event.remove({output: "bloodmagic:altar"})

    event.shaped("bloodmagic:soulforge", [
        "P P",
        "OSO",
        "OBO"
    ], {
        P: "kubejs:pristine_gold_ingot",
        B: "kubejs:pristine_gold_block",
        O: "occultism:otherstone",
        S: "bloodmagic:blankslate"
    })
    event.shaped("4x bloodmagic:blankrune", [
        "FBL",
        "BOB",
        "LBW"
    ], {
        F: "kubejs:flaming_essence",
        W: "kubejs:wet_essence",
        B: "bloodmagic:blankslate",
        O: "bloodmagic:weakbloodorb",
        L: "botania:livingrock"
    }).keepIngredient("bloodmagic:weakbloodorb")
    event.shaped("4x bloodmagic:blankrune", [
        "FBL",
        "BOB",
        "LBW"
    ], {
        F: "kubejs:flaming_essence",
        W: "kubejs:wet_essence",
        B: "bloodmagic:blankslate",
        O: "bloodmagic:apprenticebloodorb",
        L: "botania:livingrock"
    }).keepIngredient("bloodmagic:apprenticebloodorb")
    event.shaped("4x bloodmagic:blankrune", [
        "FBL",
        "BOB",
        "LBW"
    ], {
        F: "kubejs:flaming_essence",
        W: "kubejs:wet_essence",
        B: "bloodmagic:blankslate",
        O: "bloodmagic:magicianbloodorb",
        L: "botania:livingrock"
    }).keepIngredient("bloodmagic:magicianbloodorb")
    event.shaped("4x bloodmagic:blankrune", [
        "FBL",
        "BOB",
        "LBW"
    ], {
        F: "kubejs:flaming_essence",
        W: "kubejs:wet_essence",
        B: "bloodmagic:blankslate",
        O: "bloodmagic:masterbloodorb",
        L: "botania:livingrock"
    }).keepIngredient("bloodmagic:masterbloodorb")
    event.shaped("bloodmagic:sacrificialdagger", [
        "P B",
        " B ",
        "P P"
    ], {
        P: "kubejs:pristine_gold_ingot",
        B: "botania:bifrost_perm"
    })
    event.shaped("bloodmagic:altarcapacityrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "minecraft:bucket",
        R: "bloodmagic:blankrune",
        S: "kubejs:storage_essence",
        L: "bloodmagic:reinforcedslate"
    })
    event.shaped("bloodmagic:alchemicalreactionchamber", [
        "ISI",
        "EOF",
        "INI"
    ], {
        N: "ironfurnaces:netherite_furnace",
        I: "bloodmagic:infusedslate",
        E: "kubejs:earthen_essence",
        S: "kubejs:storage_essence",
        F: "kubejs:flaming_essence",
        O: "bloodmagic:magicianbloodorb"
    }).keepIngredient("bloodmagic:magicianbloodorb")
    event.shaped("bloodmagic:alchemicalreactionchamber", [
        "ISI",
        "EOF",
        "INI"
    ], {
        N: "ironfurnaces:netherite_furnace",
        I: "bloodmagic:infusedslate",
        E: "kubejs:earthen_essence",
        S: "kubejs:storage_essence",
        F: "kubejs:flaming_essence",
        O: "bloodmagic:masterbloodorb"
    }).keepIngredient("bloodmagic:masterbloodorb")
    event.shaped("bloodmagic:speedrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "pneumaticcraft:glycerol",
        R: "bloodmagic:blankrune",
        S: "kubejs:void_essence",
        L: "bloodmagic:reinforcedslate"
    })
    event.shaped("bloodmagic:sacrificerune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "bloodmagic:daggerofsacrifice",
        R: "bloodmagic:blankrune",
        S: "kubejs:fading_light_essence",
        L: "bloodmagic:infusedslate"
    })
    event.shaped("bloodmagic:selfsacrificerune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "minecraft:bucket",
        R: "bloodmagic:sacrificialdagger",
        S: "kubejs:deep_essence",
        L: "bloodmagic:demonslate"
    })
    event.shaped("bloodmagic:dislocationrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "minecraft:ender_pearl",
        R: "bloodmagic:blankrune",
        S: "kubejs:interference_essence",
        L: "bloodmagic:demonslate"
    })
    event.shaped("bloodmagic:bettercapacityrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "minecraft:chest",
        R: "bloodmagic:blankrune",
        S: "kubejs:earthen_essence",
        L: "bloodmagic:reinforcedslate"
    })
    event.shaped("bloodmagic:orbcapacityrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "bloodmagic:weakbloodorb",
        R: "bloodmagic:blankrune",
        S: "kubejs:gusty_essence",
        L: "bloodmagic:reinforcedslate"
    })
    event.shaped("bloodmagic:accelerationrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "bloodmagic:weakbloodorb",
        R: "bloodmagic:blankrune",
        S: "kubejs:wet_essence",
        L: "bloodmagic:blankslate"
    })
    event.shaped("bloodmagic:chargingrune", [
        "PSP",
        "BRB",
        "PLP"
    ], {
        P: "industrialforegoing:plastic",
        B: "bloodmagic:weakbloodorb",
        R: "bloodmagic:blankrune",
        S: "kubejs:flaming_essence",
        L: "bloodmagic:blankslate"
    })
    event.shaped("bloodmagic:altar", [
        "O O",
        "PSP",
        "PBP"
    ], {
        P: "kubejs:pristine_gold_ingot",
        B: "kubejs:pristine_gold_block",
        O: "extrabotany:orichalcos",
        S: "botania:runic_altar"
    })
    event.shaped("bloodmagic:alchemytable", [
        "   ",
        "PSP",
        "PBP"
    ], {
        P: "kubejs:pristine_gold_ingot",
        B: "kubejs:pristine_gold_block",
        S: "bloodmagic:blankslate"
    })

    event.recipes.bloodmagic.altar("bloodmagic:blankslate", "botania:shimmerrock").upgradeLevel(0).altarSyphon(1000).consumptionRate(5).drainRate(5)
    event.recipes.bloodmagic.altar("bloodmagic:soulsnare", "botania:red_string").upgradeLevel(0).altarSyphon(500).consumptionRate(5).drainRate(5)
    event.recipes.bloodmagic.altar("kubejs:impure_slate", "bloodmagic:reinforcedslate").upgradeLevel(1).altarSyphon(5000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:apprenticebloodorb", "botania:spawner_mover").upgradeLevel(1).altarSyphon(5000).consumptionRate(5).drainRate(5)
    event.recipes.bloodmagic.altar("bloodmagic:magicianbloodorb", "mythicbotany:helheim_rune").upgradeLevel(2).altarSyphon(30000).consumptionRate(500).drainRate(500)
    event.recipes.bloodmagic.altar("bloodmagic:airscribetool", "kubejs:gusty_essence").upgradeLevel(2).altarSyphon(7000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:firescribetool", "kubejs:flaming_essence").upgradeLevel(2).altarSyphon(7000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:waterscribetool", "kubejs:wet_essence").upgradeLevel(2).altarSyphon(7000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:earthscribetool", "kubejs:earthen_essence").upgradeLevel(2).altarSyphon(7000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:duskscribetool", "kubejs:fading_light_essence").upgradeLevel(2).altarSyphon(7000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:ingot_hellforged", "bloodmagic:sand_hellforged").upgradeLevel(3).altarSyphon(2000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.altar("bloodmagic:etherealslate", "bloodmagic:demonslate").upgradeLevel(4).altarSyphon(40000).consumptionRate(10).drainRate(10)
    event.recipes.bloodmagic.soulforge("bloodmagic:weakbloodorb", ["kubejs:rune_wrath","botania:dragonstone","botania:dragonstone","kubejs:rune_lust"]).minimumDrain(8).drain(2)
    event.recipes.bloodmagic.soulforge("bloodmagic:soulgempetty", ["bloodmagic:basemonstersoul","botania:dragonstone","botania:dragonstone","bloodmagic:soulsnare"]).minimumDrain(1).drain(1)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentlava", ["kubejs:rune_fire","botania:thermalily","immersiveengineering:furnace_heater","create:blaze_cake"]).minimumDrain(8).drain(2)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentwater", ["kubejs:rune_water","botania:hydroangeas","create:water_wheel","emendatusenigmatica:lithium_dust"]).minimumDrain(8).drain(2)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentsight", ["kubejs:rune_summer","botania:spectrolus","kubejs:render_eye","kubejs:radiant_alloy"]).minimumDrain(8).drain(2)
    event.recipes.bloodmagic.soulforge("bloodmagic:soulgemlesser", ["bloodmagic:soulgempetty","bloodmagic:reinforcedslate","bloodmagic:reinforcedslate","mythicbotany:alfsteel_ingot"]).minimumDrain(72).drain(12)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentholding", ["kubejs:rune_greed","botania:dandelifeon","storagedrawers:emerald_storage_upgrade","ironchest:obsidian_chest"]).minimumDrain(72).drain(8)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentgrowth", ["kubejs:rune_earth","botania:munchdew","thermal:machine_insolator","thermal:phytogro"]).minimumDrain(72).drain(8)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentair", ["kubejs:rune_air","botania:daffomill","create:windmill_bearing","#botania:floating_flowers"]).minimumDrain(72).drain(8)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentfastminer", ["mythicbotany:nidavellir_rune","botania:orechid","industrialforegoing:block_breaker","psi:psimetal_pickaxe"]).minimumDrain(72).drain(8)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentvoid", ["kubejs:rune_envy","botania:rafflowsia","thermal:device_nullifier","storagedrawers:void_upgrade"]).minimumDrain(72).drain(8)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentbinding", ["bloodmagic:reagentlava","bloodmagic:reagentwater","bloodmagic:reagentgrowth","bloodmagic:reagentair"]).minimumDrain(72).drain(8)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentbloodlight", ["kubejs:rune_pride","botania:exoflame","kubejs:conjured_glass","create:refined_radiance"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentmagnetism", ["kubejs:rune_lust","botania:hopperhock","electrodynamics:wireinsulatedsuperconductive","botania:magnet_ring_greater"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.soulforge("bloodmagic:soulgemcommon", ["bloodmagic:soulgemlesser","bloodmagic:demonslate","bloodmagic:demonslate","botania:gaia_ingot"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.soulforge("bloodmagic:demoncrucible", ["kubejs:gusty_essence","kubejs:flaming_essence","envirocore:ionite","bloodmagic:ingot_hellforged"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.soulforge("bloodmagic:corrupted_dust", ["bloodmagic:corrupted_tinydust","bloodmagic:corrupted_tinydust","bloodmagic:corrupted_tinydust","bloodmagic:corrupted_tinydust"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentteleposition", ["mythicbotany:muspelheim_rune","botania:spectranthemum","mekanism:teleporter","appliedenergistics2:interface"]).minimumDrain(1200).drain(20)
    event.recipes.bloodmagic.soulforge("bloodmagic:reagentsuppression", ["mythicbotany:niflheim_rune","botania:tangleberrie","industrialforegoing:animal_baby_separator","thermal:ice_charge"]).minimumDrain(1200).drain(20)
    event.recipes.bloodmagic.soulforge("bloodmagic:soulgemgreater", ["bloodmagic:soulgemcommon","bloodmagic:ingot_hellforged","bloodmagic:defaultcrystal","bloodmagic:etherealslate"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.soulforge("bloodmagic:primitive_crystalline_resonator", ["kubejs:interference_essence","kubejs:deep_essence","bloodmagic:accelerationrune","bloodmagic:largebloodstonebrick"]).minimumDrain(300).drain(15)
    event.recipes.bloodmagic.alchemytable("kubejs:wet_essence", ["bloodmagic:reagentwater","bloodmagic:reagentwater","mythicbotany:gjallar_horn_full","psi:exosuit_sensor_water","minecraft:dried_kelp","#minecraft:fishes"]).syphon(300).ticks(40).upgradeLevel(1)
    event.recipes.bloodmagic.alchemytable("kubejs:flaming_essence", ["bloodmagic:reagentlava","bloodmagic:reagentlava","kubejs:heated_copper_ingot","pneumaticcraft:heat_pipe","minecraft:torch","minecraft:blaze_powder"]).syphon(300).ticks(40).upgradeLevel(1)
    event.recipes.bloodmagic.alchemytable("kubejs:storage_essence", ["bloodmagic:reagentholding","bloodmagic:reagentholding","bloodmagic:reagentsight","appliedenergistics2:drive","appliedenergistics2:controller","create:extendo_grip"]).syphon(600).ticks(40).upgradeLevel(2)
    event.recipes.bloodmagic.alchemytable("kubejs:gusty_essence", ["bloodmagic:reagentair","bloodmagic:reagentair","bloodmagic:reagentlava","botania:ender_air_bottle","kubejs:liquid_nitrogen_bucket","pneumaticcraft:reinforced_air_canister"]).syphon(600).ticks(40).upgradeLevel(2)
    event.recipes.bloodmagic.alchemytable("kubejs:earthen_essence", ["bloodmagic:reagentgrowth","bloodmagic:reagentgrowth","bloodmagic:reagentwater","botania:tiny_planet_block","botania:laputa_shard","industrialforegoing:mechanical_dirt"]).syphon(600).ticks(40).upgradeLevel(2)
    event.recipes.bloodmagic.alchemytable("kubejs:void_essence", ["bloodmagic:reagentvoid","bloodmagic:reagentvoid","bloodmagic:reagentair","botania:mana_void","trashcans:ultimate_trash_can","thermal:machine_null_augment"]).syphon(600).ticks(40).upgradeLevel(2)   
    event.recipes.bloodmagic.alchemytable("bloodmagic:arcaneashes", ["kubejs:earthen_essence","kubejs:gusty_essence","eidolon:ender_calx","eidolon:enchanted_ash","eidolon:enchanted_ash","eidolon:enchanted_ash"]).syphon(600).ticks(40).upgradeLevel(2)
    event.recipes.bloodmagic.alchemytable("bloodmagic:infusedslate", ["kubejs:impure_slate"]).syphon(0).ticks(1).upgradeLevel(3)
    event.recipes.bloodmagic.alchemytable("2x bloodmagic:ritualstone", ["bloodmagic:infusedslate","bloodmagic:reinforcedslate","bloodmagic:reinforcedslate","bloodmagic:blankrune","mekanism:block_refined_obsidian","mekanism:block_refined_obsidian"]).syphon(900).ticks(40).upgradeLevel(3)
    event.recipes.bloodmagic.alchemytable("kubejs:fading_light_essence", ["bloodmagic:reagentbloodlight","bloodmagic:reagentbloodlight","kubejs:void_essence","botania:quartz_sunny","thermal:glowstone_grenade","#forge:ingots/lumium"]).syphon(1200).ticks(40).upgradeLevel(4)
    event.recipes.bloodmagic.alchemytable("kubejs:deep_essence", ["bloodmagic:reagentsuppression","bloodmagic:reagentsuppression","kubejs:fading_light_essence","bloodmagic:corrupted_dust","minecraft:netherite_ingot","envirocore:ionite_crystal"]).syphon(2400).ticks(40).upgradeLevel(4)
    event.recipes.bloodmagic.alchemytable("kubejs:interference_essence", ["bloodmagic:reagentteleposition","bloodmagic:reagentteleposition","kubejs:storage_essence","botania:ender_hand","botania:exchange_rod","mob_grinding_utils:ender_inhibitor_off"]).syphon(2400).ticks(40).upgradeLevel(4)
    event.recipes.bloodmagic.array("bloodmagic:soulsword", "bloodmagic:reagentbinding", "mythicbotany:alfsteel_sword")
    event.recipes.bloodmagic.arc("bloodmagic:sand_hellforged", "bloodmagic:dungeon_ore", "bloodmagic:intermediatecuttingfluid")
    event.recipes.bloodmagic.arc("bloodmagic:corrupted_tinydust", "bloodmagic:dungeon_stone", "bloodmagic:lavacrystal")

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "RRSRR",
          "RFBWR",
          "SBOBS",
          "RWBFR",
          "RRSRR"
        ],
        "key": {
          "R": {
            "item": "bloodmagic:ritualstone"
          },
          "B": {
            "item": "bloodmagic:reagentbinding"
          },
          "W": {
            "item": "kubejs:wet_essence"
          },
          "F": {
            "item": "kubejs:flaming_essence"
          },
          "S": {
            "item": "bloodmagic:reagentsight"
          },
          "O": {
            "item": "mekanism:block_refined_obsidian"
          }
        },
        "result": {
          "item": "bloodmagic:masterritualstone"
        }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 500000,
        "powerRate": 25000,
        "input": {
          "item": "bloodmagic:rawdemoncrystal"
        },
        "ingredients": [
          {
            "item": "bloodmagic:vengefulcrystal"
          },
          {
            "item": "bloodmagic:destructivecrystal"
          },
          {
            "item": "bloodmagic:corrosivecrystal"
          },
          {
            "item": "bloodmagic:steadfastcrystal"
          },
          {
            "item": "botania:life_essence"
          },
          {
            "item": "botania:dragonstone"
          },
          {
            "item": "bloodmagic:ingot_hellforged"
          },
          {
            "item": "kubejs:interference_essence"
          }
        ],
        "result": {
          "item": "kubejs:enchanted_crystal",
          "count": 4
        
    }})
    event.custom({
        "type": "bloodmagic:meteor",
        "input": {
          "item": "bloodmagic:weakbloodshard"
        },
        "syphon": 500000,
        "explosion": 24.0,
        "layers": [
          {
            "radius": 8,
            "additionalWeight": 100,
            "minWeight": 0,
            "weightMap": [
              {
                "tag": "bloodmagic:dungeon_ore",
                "weight": 20
              }
            ],
            "fill": "bloodmagic:dungeon_stone"
          }
        ]
      })
})