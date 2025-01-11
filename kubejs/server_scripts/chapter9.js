// priority: 0

onEvent("recipes", event => {

    // removals

    event.remove({id: "immersiveengineering:crafting/sheetmetal_steel"})
    event.remove({output: "aoa3:carved_rune_of_power"})
    event.remove({output: "minecraft:enchanted_golden_apple"})
    event.remove({output: "aoa3:skeletal_ingot"})
    event.remove({output: "aoa3:bone_horn"})
    event.remove({output: "aoa3:explosive_gems"})
    event.remove({output: "aoa3:boulder_dash"})
    event.remove({output: "aoa3:warlock_gem"})
    event.remove({output: "aoa3:treat_bag"})
    event.remove({output: "aoa3:shroom_stone"})
    event.remove({output: "mekanism:chemical_infuser"})

    // shaped
    
    event.shaped("aoa3:skeletal_ingot", [
        "BSB",
        "CIF",
        "BLB"
    ], {
        B: "aoa3:skeletal_bricks",
        S: "aoa3:skullbone_fragment",
        C: "aoa3:chestbone_fragment",
        F: "aoa3:footbone_fragment",
        L: "aoa3:legbone_fragment",
        I: "electrodynamics:ingotsuperconductive"
    })
    event.shaped("minecraft:enchanted_golden_apple", [
        "IBI",
        "BAB",
        "IBI"
    ], {
        A: "minecraft:golden_apple",
        I: "eidolon:arcane_gold_ingot",
        B: "eidolon:arcane_gold_block",
    })
    event.shaped("aoa3:creeponia_realmstone", [
        "DGD",
        "GAG",
        "DGD"
    ], {
        A: "aoa3:ancient_rock",
        G: "thermal:gunpowder_block",
        D: "minecraft:creeper_head",
    })
    event.shaped("aoa3:precasia_realmstone", [
        "DLD",
        "LAL",
        "DLD"
    ], {
        A: "aoa3:ancient_rock",
        L: "naturesaura:ancient_log",
        D: "minecraft:skeleton_skull",
    })
    event.shaped("aoa3:barathos_realmstone", [
        "DND",
        "NAN",
        "DND"
    ], {
        A: "aoa3:ancient_rock",
        N: "minecraft:nether_wart",
        D: "minecraft:magma_block",
    })
    event.shaped("aoa3:lelyetia_realmstone", [
        "DOD",
        "OAO",
        "DOD"
    ], {
        A: "aoa3:ancient_rock",
        O: "minecraft:orange_wool",
        D: "minecraft:ghast_tear",
    })
    event.shaped("aoa3:deeplands_realmstone", [
        "DOD",
        "OAO",
        "DOD"
    ], {
        A: "aoa3:ancient_rock",
        O: "minecraft:diamond_ore",
        D: "minecraft:cobweb",
    })
    event.shaped("aoa3:abyss_realmstone", [
        "DFD",
        "FAF",
        "DFD"
    ], {
        A: "aoa3:ancient_rock",
        F: "biomesoplenty:flesh",
        D: "minecraft:rotten_flesh",
    })
    event.shaped("aoa3:candyland_realmstone", [
        "DGD",
        "GAG",
        "DBD"
    ], {
        A: "aoa3:ancient_rock",
        G: "#buddycards:gummy_cards",
        D: "create:bar_of_chocolate",
        B: "kubejs:tyrosaur_horn"
    })
    event.shaped("aoa3:mysterium_realmstone", [
        "DMD",
        "MAM",
        "DBD"
    ], {
        A: "aoa3:ancient_rock",
        M: "kubejs:mithril_ingot",
        D: "minecraft:mushroom_stew",
        B: "kubejs:creep_cannon"
    })
    event.shaped("aoa3:haven_realmstone", [
        "DPD",
        "PAP",
        "DBD"
    ], {
        A: "aoa3:ancient_rock",
        P: "industrialforegoing:pink_slime_ingot",
        D: "appliedenergistics2:blue_glass_cable",
        B: "kubejs:graw_tooth"
    })
    event.shaped("aoa3:dustopia_realmstone", [
        "DPD",
        "PAP",
        "DBD"
    ], {
        A: "aoa3:ancient_rock",
        P: "mekanism:dust_refined_obsidian",
        D: "mekanism:dirty_dust_iron",
        B: "kubejs:shadowlord_eye"
    })
    event.shaped("aoa3:baronyte_ingot", [
        "BBB",
        "VPV",
        "BBB"
    ], {
        B: "aoa3:baron_stone",
        P: "industrialforegoing:pink_slime_ingot",
        V: "aoa3:varsium_nugget"
    })
    event.shaped("kubejs:azure_block", [
        "AA ",
        "AA ",
        "   "
    ], {
        A: "kubejs:azure_substance"
    })

    // shapeless
    
    event.shapeless("tetra:forged_wall", "tetra:forged_pillar")

    // machines
    
    event.recipes.mekanism.chemical_infusing({gas:"kubejs:ammonia",amount:2}, {gas:"kubejs:nitrogen",amount:1}, {gas:"mekanism:hydrogen",amount:3})
    event.recipes.mekanism.chemical_infusing({gas:"kubejs:methanol",amount:1}, {gas:"kubejs:ethanol",amount:1}, {gas:"mekanism:oxygen",amount:1})
    event.recipes.createMixing([Fluid.of("kubejs:meathilamyn", 1000), "kubejs:heavenly_aluminosilicate_catalyst"], [Fluid.of("kubejs:liquid_methanol", 1000), Fluid.of("kubejs:liquid_ammonia", 1000), "kubejs:heavenly_aluminosilicate_catalyst"]).heated()
    event.recipes.createMixing(Fluid.of("kubejs:phenylacetic_acid", 1000),[Fluid.of("minecraft:water", 1000), "kubejs:cyanide"]).heated()
    event.recipes.createMixing(Fluid.of("kubejs:acetic_anhydride", 1000),[Fluid.of("mekanism:oxygen", 500), "pneumaticcraft:glycerol"]).heated()
    event.recipes.createMixing(Fluid.of("kubejs:phenylacetone", 1000),[Fluid.of("kubejs:phenylacetic_acid", 1000), Fluid.of("kubejs:acetic_anhydride", 500)]).heated()
    event.recipes.createMixing(Fluid.of("kubejs:blue_liquid", 1000),[Fluid.of("kubejs:phenylacetone", 1000), Fluid.of("kubejs:meathilamyn", 500)])
    event.recipes.createMixing(["kubejs:heavenly_aluminosilicate_catalyst","kubejs:white_phosphorus"],["kubejs:heavenly_aluminosilicate_catalyst","2x kubejs:limestone_dust"]).heated()
    event.recipes.createMixing(Fluid.of("kubejs:white_liquid",1000),[Fluid.of("minecraft:water",1000),"kubejs:red_phosphorus","kubejs:iodine","kubejs:suedohfedreen"]).superheated()
    event.recipes.createMixing("kubejs:azure_substance",["12x kubejs:blue_substance","12x kubejs:white_substance"])
    event.recipes.createPressing("kubejs:blue_substance", "kubejs:blue_plate")
    event.recipes.createPressing("kubejs:white_substance", "kubejs:white_plate")
    event.recipes.createCrushing([Item.of("kubejs:cyanide").withChance(0.3), "kubejs:cyanide"], "minecraft:apple")
    event.recipes.createCrushing([Item.of("kubejs:suedohfedreen").withChance(0.3), "kubejs:suedohfedreen"], "immersiveengineering:hemp_fiber")
    event.recipes.createMilling("immersiveengineering:dust_saltpeter", "minecraft:sand")
    event.recipes.createSequencedAssembly("aoa3:bone_horn", "aoa3:stripped_lucalus_log", [
        event.recipes.createDeploying("kubejs:bone_horn_processing", ["kubejs:bone_horn_processing", "aoa3:precasian_lower_rock"]),
        event.recipes.createPressing("kubejs:bone_horn_processing", "kubejs:bone_horn_processing"),
        event.recipes.createDeploying("kubejs:bone_horn_processing", ["kubejs:bone_horn_processing", "aoa3:skeletal_ingot"]),
        event.recipes.createDeploying("kubejs:bone_horn_processing", ["kubejs:bone_horn_processing", "aoa3:skeletal_ingot"]),
    ]).transitionalItem("kubejs:bone_horn_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:explosive_gems", "aoa3:creeponia_bricks", [
        event.recipes.createDeploying("kubejs:explosive_gems_processing", ["kubejs:explosive_gems_processing", "aoa3:jewelyte"]),
        event.recipes.createDeploying("kubejs:explosive_gems_processing", ["kubejs:explosive_gems_processing", "aoa3:gemenyte"]),
        event.recipes.createDeploying("kubejs:explosive_gems_processing", ["kubejs:explosive_gems_processing", "aoa3:ornamyte"]),
        event.recipes.createDeploying("kubejs:explosive_gems_processing", ["kubejs:explosive_gems_processing", "aoa3:unstable_gunpowder"]),
        event.recipes.createFilling("kubejs:explosive_gems_processing", ["kubejs:explosive_gems_processing", Fluid.water(250)])
    ]).transitionalItem("kubejs:explosive_gems_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:boulder_dash", "aoa3:dense_stone", [
        event.recipes.createDeploying("kubejs:boulder_dash_processing", ["kubejs:boulder_dash_processing", "aoa3:dense_rock"]),
        event.recipes.createDeploying("kubejs:boulder_dash_processing", ["kubejs:boulder_dash_processing", "aoa3:chitin"]),
        event.recipes.createDeploying("kubejs:boulder_dash_processing", ["kubejs:boulder_dash_processing", "aoa3:deep_crystal"]),
    ]).transitionalItem("kubejs:boulder_dash_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:warlock_gem", "aoa3:hive_light", [
        event.recipes.createDeploying("kubejs:warlock_gem_processing", ["kubejs:warlock_gem_processing", "aoa3:baron_glass"]),
        event.recipes.createDeploying("kubejs:warlock_gem_processing", ["kubejs:warlock_gem_processing", "tetra:pristine_diamond"]),
        event.recipes.createCutting("kubejs:warlock_gem_processing", "kubejs:warlock_gem_processing"),
        event.recipes.createDeploying("kubejs:warlock_gem_processing", ["kubejs:warlock_gem_processing", "aoa3:baronyte_ingot"]),
        event.recipes.createDeploying("kubejs:warlock_gem_processing", ["kubejs:warlock_gem_processing", "aoa3:baronyte_ingot"]),
    ]).transitionalItem("kubejs:warlock_gem_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:book_of_shadows", "kubejs:illusionary_leather", [
        event.recipes.createDeploying("kubejs:book_of_shadows_processing", ["kubejs:book_of_shadows_processing", "aoa3:bloodstone"]),
        event.recipes.createDeploying("kubejs:book_of_shadows_processing", ["kubejs:book_of_shadows_processing", "aoa3:nightmare_flakes"]),
        event.recipes.createDeploying("kubejs:book_of_shadows_processing", ["kubejs:book_of_shadows_processing", "minecraft:paper"]),
        event.recipes.createDeploying("kubejs:book_of_shadows_processing", ["kubejs:book_of_shadows_processing", "aoa3:blood_log"]),
    ]).transitionalItem("kubejs:book_of_shadows_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:yellow_spores", "aoa3:achony_sapling", [
        event.recipes.createDeploying("kubejs:yellow_spores_processing", ["kubejs:yellow_spores_processing", "aoa3:lelyetian_leaves"]),
        event.recipes.createDeploying("kubejs:yellow_spores_processing", ["kubejs:yellow_spores_processing", "aoa3:achony_leaves"]),
        event.recipes.createDeploying("kubejs:yellow_spores_processing", ["kubejs:yellow_spores_processing", "aoa3:paravite_hive"]),
        event.recipes.createDeploying("kubejs:yellow_spores_processing", ["kubejs:yellow_spores_processing", "aoa3:zhinx_dust"]),
        event.recipes.createFilling("kubejs:yellow_spores_processing", ["kubejs:yellow_spores_processing", Fluid.of("minecraft:water", 1000)]),
    ]).transitionalItem("kubejs:yellow_spores_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:treat_bag", "chiselsandbits:bit_bag", [
        event.recipes.createDeploying("kubejs:treat_bag_processing", ["kubejs:treat_bag_processing", "aoa3:candy_cane"]),
        event.recipes.createDeploying("kubejs:treat_bag_processing", ["kubejs:treat_bag_processing", "aoa3:peppermint_candy"]),
        event.recipes.createDeploying("kubejs:treat_bag_processing", ["kubejs:treat_bag_processing", "aoa3:sour_candy"]),
        event.recipes.createDeploying("kubejs:treat_bag_processing", ["kubejs:treat_bag_processing", "aoa3:gingerbread"]),
        event.recipes.createDeploying("kubejs:treat_bag_processing", ["kubejs:treat_bag_processing", "aoa3:chocolate_block"]),
        event.recipes.createFilling("kubejs:treat_bag_processing", ["kubejs:treat_bag_processing", Fluid.of("aoa3:candied_water", 1000)]),
    ]).transitionalItem("kubejs:treat_bag_processing").loops(4)
        event.recipes.createSequencedAssembly("aoa3:shroom_stone", "aoa3:mystic_shrooms", [
        event.recipes.createDeploying("kubejs:shroom_stone_processing", ["kubejs:shroom_stone_processing", "aoa3:runic_bomb"]),
        event.recipes.createDeploying("kubejs:shroom_stone_processing", ["kubejs:shroom_stone_processing", "aoa3:mushroom_spores"]),
        event.recipes.createDeploying("kubejs:shroom_stone_processing", ["kubejs:shroom_stone_processing", "aoa3:mystite_ingot"]),
        event.recipes.createDeploying("kubejs:shroom_stone_processing", ["kubejs:shroom_stone_processing", "aoa3:mystite_ingot"]),
    ]).transitionalItem("kubejs:shroom_stone_processing").loops(4)
    event.recipes.createSequencedAssembly("aoa3:heavy_boulder", "kubejs:guardians_tablet", [
        event.recipes.createDeploying("kubejs:heavy_boulder_processing", ["kubejs:heavy_boulder_processing", "aoa3:floating_stone"]),
        event.recipes.createDeploying("kubejs:heavy_boulder_processing", ["kubejs:heavy_boulder_processing", "aoa3:crystallite"]),
        event.recipes.createDeploying("kubejs:heavy_boulder_processing", ["kubejs:heavy_boulder_processing", "aoa3:weightless_stone"]),
    ]).transitionalItem("kubejs:heavy_boulder_processing").loops(4)
    event.recipes.createSequencedAssembly("8x aoa3:darkly_powder", "aoa3:primordial_skull", [
        event.recipes.createDeploying("kubejs:darkly_powder_processing", ["kubejs:darkly_powder_processing", "aoa3:urka_hide"]),
        event.recipes.createDeploying("kubejs:darkly_powder_processing", ["kubejs:darkly_powder_processing", "aoa3:dawn_wood"]),
        event.recipes.createDeploying("kubejs:darkly_powder_processing", ["kubejs:darkly_powder_processing", "aoa3:darkened_rock"]),
    ]).transitionalItem("kubejs:darkly_powder_processing").loops(4)
    
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"immersiveengineering:dust_saltpeter","count":4},"fluidInput":{"amount":100,"fluid":"mekanism:sulfuric_acid"},"gasInput":{"amount":10,"gas":"mekanism:lithium"},"duration":100,"itemOutput":{"item":"kubejs:iodine"}})
    event.custom({
        "input": [
          {
            "item": "kubejs:tanzanite"
          },
          {
            "item": "tetra:forged_wall"
          },
          {
            "item": "kubejs:tanzanite"
          },
          {
            "item": "botania:pebble"
          },
          {
            "item": "botania:pebble"
          },
          {
            "item": "kubejs:tanzanite"
          },
          {
            "item": "industrialforegoing:machine_frame_supreme"
          },
          {
            "item": "kubejs:tanzanite"
          }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:100}",
        "processingTime": 30,
        "output": {
          "item": "aoa3:ancient_rock",
          "count": 3
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
      "input": [
        {
          "item": "electrodynamics:ingotstainlesssteel"
        },
        {
          "item": "kubejs:unempowered_ancient_rock"
        },
        {
          "item": "kubejs:tanzanite"
        },
        {
          "item": "botania:pebble"
        },
        {
          "item": "botania:pebble"
        },
        {
          "item": "kubejs:tanzanite"
        },
        {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        {
          "item": "electrodynamics:ingotstainlesssteel"
        }
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:25}",
      "processingTime": 10,
      "output": {
        "item": "aoa3:ancient_rock",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "MMMMM",
          "MUCUM",
          "MTRBM",
          "MUFUM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": "kubejs:mithril_ingot"
          },
          "U": {
            "item": "storagedrawers:emerald_storage_upgrade"
          },
          "C": {
            "item": "mekanism:ultimate_chemical_tank"
          },
          "F": {
            "item": "mekanism:ultimate_fluid_tank"
          },
          "B": {
            "item": "industrialforegoing:supreme_black_hole_unit"
          },
          "T": {
            "item": "industrialforegoing:supreme_black_hole_tank"
          },
          "R": {
            "item": "aoa3:ancient_rock"
          }
        },
        "result": {
          "item": "aoa3:carved_rune_of_space"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "MMMMM",
          "MPIDM",
          "MNRNM",
          "MDAPM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": "kubejs:mithril_ingot"
          },
          "P": {
            "item": "thermal:rf_potato"
          },
          "N": {
            "item": "industrialforegoing:infinity_nuke"
          },
          "D": {
            "item": "dynamicelectricity:motordchv"
          },
          "I": {
            "item": "mekanism:advanced_induction_provider"
          },
          "A": {
            "item": "mekanism:advanced_induction_cell"
          },
          "R": {
            "item": "aoa3:ancient_rock"
          }
        },
        "result": {
          "item": "aoa3:carved_rune_of_power"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "MMMMM",
          "MSCSM",
          "MARAM",
          "MSCSM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": "kubejs:mithril_ingot"
          },
          "C": {
            "item": "pneumaticcraft:compressed_iron_block"
          },
          "A": {
            "item": "emendatusenigmatica:aluminum_block"
          },
          "S": {
            "item": "kubejs:superconductive_block"
          },
          "R": {
            "item": "aoa3:ancient_rock"
          }
        },
        "result": {
          "item": "aoa3:carved_rune_of_reality"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "MMMMM",
          "MTDTM",
          "MPRPM",
          "MTDTM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": "kubejs:mithril_ingot"
          },
          "T": {
            "item": "mekanism:teleporter_frame"
          },
          "D": {
            "item": "thermal:ender_tnt"
          },
          "P": {
            "item": "mekanism:portable_teleporter"
          },
          "R": {
            "item": "aoa3:ancient_rock"
          }
        },
        "result": {
          "item": "aoa3:carved_rune_of_travel"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "MMMMM",
          "MIPIM",
          "MNRNM",
          "MIPIM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": "kubejs:mithril_ingot"
          },
          "I": {
            "item": "emendatusenigmatica:invar_block"
          },
          "N": {
            "item": "pneumaticcraft:drill_bit_netherite"
          },
          "P": {
            "item": "minecraft:prismarine_shard"
          },
          "R": {
            "item": "aoa3:ancient_rock"
          }
        },
        "result": {
          "item": "aoa3:carved_rune_of_direction"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "SRSCS",
          "AAAAA",
          "PSBSG",
          "AAAAA",
          "SOSKS"
        ],
        "key": {
          "S": {
            "item": "emendatusenigmatica:silicon_gem"
          },
          "A": {
            "tag": "forge:storage_blocks/aluminum"
          },
          "B": { //balance
            "item": "minecraft:clay"
          },
          "R": {
            "item": "kubejs:shifting_stone"
          },
          "C": {
            "item": "kubejs:ultimate_cotton_candy"
          },
          "P": {
            "item": "kubejs:primordial_pearl"
          },
          "G": {
            "item": "kubejs:kingcap"
          },
          "O": {
            "item": "kubejs:baroness_orb"
          },
          "K": {
            "item": "kubejs:kror_spike"
          }
        },
        "result": {
          "item": "kubejs:heavenly_aluminosilicate_catalyst"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "CCACC",
          "CSSSC",
          "AAHAA",
          "CSSSC",
          "CCACC"
        ],
        "key": {
          "S": {
            "item": "emendatusenigmatica:silicon_gem"
          },
          "A": {
            "tag": "forge:storage_blocks/aluminum"
          },
          "C": { //balance
            "item": "minecraft:clay"
          },
          "H": {
            "item": "kubejs:heavenly_aluminosilicate_catalyst"
          }
        },
        "result": {
          "item": "2x kubejs:heavenly_aluminosilicate_catalyst"
        }
    })
    event.custom({
        "type" : "electrodynamics:chemical_crystallizer_recipe",
        
        "fluid_input":{
            "fluid":"kubejs:blue_liquid",
            "amount": 1000
        },
        "item_output":{
            "item":"kubejs:blue_plate",
            "count": 1
        }
    })
    event.custom({
        "type" : "electrodynamics:chemical_crystallizer_recipe",
        
        "fluid_input":{
            "fluid":"kubejs:white_liquid",
            "amount": 1000
        },
        "item_output":{
            "item":"kubejs:white_plate",
            "count": 1
        }
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:white_phosphorus"
        },
        "item_output": {
            "item": "kubejs:red_phosphorus"
          },
        "temperature": {
            "min_temp": 523
        },
        
        "pressure": -0.5,
        "speed": 0.5,
        "exothermic": false
    })
})