onEvent("recipes", event => {

    event.remove({output: "rftoolsdim:enscriber"})
    event.remove({output: "rftoolsdim:empty_dimlet"})
    event.remove({output: "rftoolsdim:knowledge_holder"})
    event.remove({output: "rftoolsdim:researcher"})
    event.remove({output: "rftoolsdim:empty_dimension_tab"})
    event.remove({output: "rftoolsdim:part_memory_0"})
    event.remove({output: "rftoolsdim:part_energy_0"})
    event.remove({output: "rftoolsdim:dimlet_workbench"})
    event.remove({output: "rftoolsdim:block_absorber"})
    event.remove({output: "rftoolsutility:matter_receiver"})
    event.remove({output: "rftoolsutility:matter_transmitter"})
    event.remove({output: "rftoolsutility:dialing_device"})
    event.remove({output: "rftoolsbase:infused_enderpearl"})
    event.remove({output: "rftoolsbase:infused_diamond"})
    event.remove({output: "ironchest:dirt_chest"})
    event.remove({output: "extendedcrafting:compressor"})

    event.shaped(Item.of("rftoolsdim:block_absorber","{BlockEntityTag:{Items:[],Info:{powered:0b,absorbing:0,block:\"emendatusenigmatica:dimensional_ore\"}}}"), [
        "MDD",
        "DAD",
        "DDE"
    ], {
        A: Item.of("rftoolsdim:block_absorber","{BlockEntityTag:{Items:[],Info:{powered:0b,absorbing:0,block:\"minecraft:netherite_block\"}}}").weakNBT(),
        D: "rftoolsdim:block_absorber",
        M: "rftoolsdim:part_memory_3",
        E: "rftoolsdim:part_energy_3"
    })
    event.shaped("rftoolsdim:empty_dimlet", [
        "TTT",
        "TDT",
        "TTT"
    ], {
        T: "electrodynamics:platetitanium",
        D: "rftoolsbase:infused_diamond"
    })
    event.shaped("rftoolsdim:knowledge_holder", [
        "XRX",
        "IMI",
        "XRX"
    ], {
        X: "mob_grinding_utils:solid_xp_block",
        R: "rftoolsdim:rare_essence",
        I: "thermal:xp_crystal",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsdim:researcher", [
        "XRX",
        "BMB",
        "XRX"
    ], {
        X: "mob_grinding_utils:solid_xp_block",
        R: "rftoolsdim:rare_essence",
        B: "minecraft:book",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsutility:matter_receiver", [
        "DPC",
        "PMP",
        "CPD"
    ], {
        D: "draconicevolution:advanced_dislocator",
        C: "appliedenergistics2:formation_core",
        P: "rftoolsbase:infused_enderpearl",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsutility:matter_transmitter", [
        "DPC",
        "PMP",
        "CPD"
    ], {
        D: "draconicevolution:advanced_dislocator",
        C: "appliedenergistics2:annihilation_core",
        P: "rftoolsbase:infused_enderpearl",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsdim:block_absorber", [
        "DSP",
        "SMS",
        "PSD"
    ], {
        D: "rftoolsbase:infused_diamond",
        S: "minecraft:sponge",
        P: "rftoolsbase:infused_enderpearl",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsutility:dialing_device", [
        "IPI",
        "PMP",
        "IPI"
    ], {
        I: "kubejs:interference_essence",
        P: "rftoolsbase:infused_enderpearl",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsdim:dimlet_workbench", [
        "DED",
        "EME",
        "DED"
    ], {
        D: "rftoolsdim:empty_dimlet",
        E: "rftoolsdim:rare_essence",
        M: "rftoolsbase:machine_frame"
    })
    event.shaped("rftoolsdim:part_energy_0", [
        "UCC",
        "CSC",
        "CCU"
    ], {
        S: "kubejs:stellar_core",
        C: "emendatusenigmatica:redstone_crystal",
        U: "mekanism:ultimate_control_circuit"
    })
    event.shaped("rftoolsdim:part_memory_0", [
        "UCC",
        "CSC",
        "CCU"
    ], {
        S: "kubejs:stellar_core",
        C: "emendatusenigmatica:lapis_crystal",
        U: "mekanism:ultimate_control_circuit"
    })

    event.recipes.thermal.smelter_catalyst("kubejs:dimensionally_transcendent_pebble_and_hellsteel").primaryMod(1.0).secondaryMod(1.0).energyMod(0.00005).minChance(0.0).useChance(1.0)
    event.recipes.thermal.smelter(["ironchest:dirt_chest",Item.of("thermal:rich_slag").withChance(0.05)], ["draconicevolution:draconium_chest", "industrialforegoing:mechanical_dirt", "futurepack:dirt_m"]).energy(2147483647)
    event.recipes.thermal.smelter("kubejs:concept_of_time", ["kubejs:concept_of_continuity","kubejs:concept_of_dimension","extrabotany:theuniverse"]).energy(2147483647)
    event.recipes.createSequencedAssembly("create:creative_blaze_cake", "create:blaze_cake", [
        event.recipes.createDeploying("kubejs:incomplete_creative_blaze_cake", ["kubejs:incomplete_creative_blaze_cake", "extendedcrafting:the_ultimate_ingot"]),
        event.recipes.createDeploying("kubejs:incomplete_creative_blaze_cake", ["kubejs:incomplete_creative_blaze_cake", "futurepack:color_iron_magenta"]),
        event.recipes.createDeploying("kubejs:incomplete_creative_blaze_cake", ["kubejs:incomplete_creative_blaze_cake", "kubejs:heated_copper_ingot"]),
        event.recipes.createDeploying("kubejs:incomplete_creative_blaze_cake", ["kubejs:incomplete_creative_blaze_cake", "emendatusenigmatica:dimensional_gem"])
    ]).transitionalItem("kubejs:incomplete_creative_blaze_cake").loops(32)

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "rfrtoolsbase:infused_diamond",
          "count": 3
        },
        "catalyst": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{temperature:0.0d,Id:\"extendedcrafting:diamond\"}"
        },
        "total_energy": 10000000,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "kubejs:enchanted_crystal"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "extendedcrafting:compressor"
        },
        "catalyst": {
          "item": "appliedenergistics2:condenser"
        },
        "total_energy": 10000000,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "kubejs:draconic_frame"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "industrialforegoing:stasis_chamber"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "industrialforegoing:stasis_chamber"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "rftoolsbuilder:shield_block4"
          },
          {
            "item": "mekanism:ultimate_compressing_factory"
          },
          {
            "item": "rftoolsbuilder:shield_block4"
          },
          {
            "item": "mekanism:qio_drive_supermassive"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "kubejs:time_infused_casing",
          "count": 2
        },
        "catalyst": {
          "item": "kubejs:concept_of_time"
        },
        "total_energy": 100000000,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          {
            "item": "rftoolsbase:machine_frame"
          },
          {
            "item": "rftoolsbase:machine_frame"
          },
          {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          {
            "item": "extendedcrafting:the_ultimate_ingot"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "rftoolsbase:infused_enderpearl",
          "count": 3
        },
        "catalyst": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{temperature:0.0d,Id:\"extendedcrafting:enderpearl\"}"
        },
        "total_energy": 10000000,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "kubejs:enchanted_crystal"
          },
          {
            "item": "rftoolsbase:dimensionalshard"
          },
          {
            "item": "kubejs:enchanted_crystal"
          }
        ]
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABAAA",
          "ACDCB",
          "ADEDA",
          "BCDCA",
          "AAABA"
        ],
        "key": {
          "A": {
            "item": "electrodynamics:platetitanium"
          },
          "B": {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          "C": {
            "item": "appliedenergistics2:interface"
          },
          "D": {
            "item": "appliedenergistics2:molecular_assembler"
          },
          "E": {
            "item": "rftoolsbase:machine_frame"
          }
        },
        "result": {
          "item": "rftoolsdim:enscriber"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "ABBBA",
          "ABCBA",
          "ABBBA",
          "AAAAA"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:draconium_core"
          },
          "B": {
            "item": "draconicevolution:wyvern_energy_core"
          },
          "C": {
            "item": "rftoolsdim:empty_dimlet"
          }
        },
        "result": {
          "item": "rftoolsdim:empty_dimension_tab"
        }
    })
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000000,
        "powerRate": 50000000,
        "inputCount": 64,
        "ingredient": {
          "item": "ironchest:dirt_chest"
        },
        "catalyst": {
          "item": "kubejs:gravitational_collapse_initiator"
        },
        "result": {
          "item": "kubejs:concept_of_capacity"
        }
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "eidolon:wraith_heart"
        },
        "item_output": {
          "item": "kubejs:concept_of_frigidity",
          "count": 1
        },
        "temperature": {
            "max_temp": 1
        },
        "pressure": -0.9,
        "speed": 0.5,
        "exothermic": false
    })
    event.custom({
        "type": "psi:trick_crafting",
        "input": {
          "item": "kubejs:concept_of_material"
        },
        "output": {
          "item": "kubejs:concept_of_infusion"
        },
        "cad": {
          "item": "psi:cad_assembly_creative"
        },
        "trick": "psi:trick_infusion"
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "item": "kubejs:concept_of_fabrication"
          }
        ],
        "pressure": -1.0,
        "results": [
          {
            "item": "kubejs:concept_of_specificity"
          }
        ]
    })
    event.custom({
        "type": "mythicbotany:infusion",
        "group": "infuser",
        "output": {
          "item": "kubejs:concept_of_dimension"
        },
        "mana": 100000000,
        "ingredients": [
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "mythicbotany:vanaheim_rune"
          },
          {
            "item": "mythicbotany:alfheim_rune"
          },
          {
            "item": "kubejs:concept_of_infusion"
          },
          {
            "item": "mythicbotany:helheim_rune"
          },
          {
            "item": "mythicbotany:midgard_rune"
          },
          {
            "item": "mythicbotany:muspelheim_rune"
          },
          {
            "item": "kubejs:concept_of_capacity"
          },
          {
            "item": "mythicbotany:niflheim_rune"
          },
          {
            "item": "mythicbotany:nidavellir_rune"
          },
          {
            "item": "mythicbotany:joetunheim_rune"
          },
          {
            "item": "emendatusenigmatica:dimensional_block"
          }
        ],
        "fromColor": 16711821,
        "toColor": 16750080
    })
    event.custom({
        "type": "mythicbotany:infusion",
        "group": "infuser",
        "output": {
          "item": "kubejs:concept_of_continuity"
        },
        "mana": 100000000,
        "ingredients": [
          {
            "item": "tiab:timeinabottle"
          },
          {
            "item": "rftoolsdim:empty_time_dimlet"
          },
          {
            "item": "botania:hourglass"
          },
          {
            "item": "create:cuckoo_clock"
          },
          {
            "item": "kubejs:concept_of_frigidity"
          },
          {
            "item": "create:clockwork_bearing"
          },
          {
            "item": "kubejs:concept_of_specificity"
          },
          {
            "item": "phi:smart_spell_magazine"
          }
        ],
        "fromColor": 16711821,
        "toColor": 16750080
    })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000000,
        "powerRate": 2500000,
        "input": {
          "item": "extendedcrafting:the_ultimate_block"
        },
        "ingredients": [
          {
            "item": "rftoolsutility:screen_controller"
          },
          {
            "item": "rftoolsutility:screen"
          },
          {
            "item": "rftoolsutility:screen_controller"
          },
          {
            "item": "rftoolsutility:screen"
          },
          {
            "item": "rftoolsutility:screen_controller"
          },
          {
            "item": "rftoolsutility:screen"
          },
          {
            "item": "rftoolsutility:screen_controller"
          },
          {
            "item": "rftoolsutility:screen"
          },
          {
            "item": "rftoolsutility:screen_controller"
          },
          {
            "item": "rftoolsutility:screen"
          },
          {
            "item": "rftoolsutility:screen_controller"
          },
          {
            "item": "rftoolsutility:screen"
          }
        ],
        "result": {
          "item": "rftoolsutility:creative_screen"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCCCBA",
          "BDEFGHB",
          "IJCCIKI",
          "ILIMINI",
          "IOICCPI",
          "BQRSTUB",
          "ABCCCBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "C": {
            "item": "emendatusenigmatica:emerald_crystal"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:lead\"}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:silicon\"}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:invar\"}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:aluminum\"}"
          },
          "H": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:titanium\"}"
          },
          "I": {
            "item": "emendatusenigmatica:quartz_crystal"
          },
          "J": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:tin\"}"
          },
          "K": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:iron\"}"
          },
          "L": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:osmium\"}"
          },
          "M": {
            "item": "draconicevolution:chaotic_core"
          },
          "N": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:stainless_steel\"}"
          },
          "O": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:lapis_lazuli\"}"
          },
          "P": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:zinc\"}"
          },
          "Q": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:quantanium\"}"
          },
          "R": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:awakened_draconium\"}"
          },
          "S": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:electrum\"}"
          },
          "T": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:constantan\"}"
          },
          "U": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:brass\"}"
          }
        },
        "result": {
          "item": "kubejs:concept_of_material"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDCBA",
          "BEFEFGB",
          "CFHIHFC",
          "DEIJIED",
          "CFHIHFC",
          "BGFEFEB",
          "ABCDCBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "C": {
            "item": "appliedenergistics2:64k_cell_component"
          },
          "D": {
            "item": "appliedenergistics2:64k_crafting_storage"
          },
          "E": {
            "item": "appliedenergistics2:interface"
          },
          "F": {
            "item": "draconicevolution:crafting_core"
          },
          "G": {
            "item": "mekanism:pellet_antimatter"
          },
          "H": {
            "item": "mekanism:sps_casing"
          },
          "I": {
            "item": "futurepack:opti_assembler_white"
          },
          "J": {
            "item": "draconicevolution:chaotic_energy_core"
          }
        },
        "result": {
          "item": "kubejs:concept_of_fabrication"
        }
    })
    event.custom({
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "psi:ebony_psimetal"
        },
        {
          "item": "kubejs:dark_matter_alloy"
        },
        {
          "item": "immersiveengineering:ingot_hop_graphite"
        },
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "extrabotany:shadowium"
        },
        {
          "item": "kubejs:tungsten_ingot"
        },
        {
          "item": "emendatusenigmatica:cast_iron_ingot"
        },
        {
          "item": "extendedcrafting:black_iron_ingot"
        },
        {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "kubejs:solder_ingot"
        },
        {
          "item": "emendatusenigmatica:invar_ingot"
        },
        {
          "item": "electrodynamics:ingottitanium"
        },
        {
          "item": "kubejs:galvanized_steel_ingot"
        },
        {
          "item": "emendatusenigmatica:steel_ingot"
        },
        {
          "item": "eidolon:pewter_ingot"
        },
        {
          "item": "emendatusenigmatica:silver_ingot"
        },
        {
          "item": "electrodynamics:ingotvanadium"
        },
        {
          "item": "electrodynamics:ingotvanadiumsteel"
        },
        {
          "item": "electrodynamics:ingotstainlesssteel"
        },
        {
          "item": "emendatusenigmatica:aluminum_ingot"
        },
        {
          "item": "extrabotany:photonium"
        },
        {
          "item": "kubejs:radiant_alloy"
        },
        {
          "item": "bloodmagic:ingot_hellforged"
        },
        {
          "item": "buddycards:buddysteel_ingot"
        },
        {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        {
          "item": "naturesaura:sky_ingot"
        },
        {
          "item": "botania:manasteel_ingot"
        },
        {
          "item": "kubejs:mithril_ingot"
        },
        {
          "item": "electrodynamics:ingothslasteel"
        },
        {
          "item": "emendatusenigmatica:tin_ingot"
        },
        {
          "item": "futurepack:ingot_neon"
        },
        {
          "item": "emendatusenigmatica:osmium_ingot"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "kubejs:platinum_ingot"
        },
        {
          "item": "psi:psimetal"
        },
        {
          "item": "emendatusenigmatica:lead_ingot"
        },
        {
          "item": "kubejs:enderium_base_ingot"
        },
        {
          "item": "emendatusenigmatica:enderium_ingot"
        },
        {
          "item": "extrabotany:aerialite"
        },
        {
          "item": "emendatusenigmatica:dimensional_gem"
        },
        {
          "item": "astralsorcery:starmetal_ingot"
        },
        {
          "item": "futurepack:ingot_quantanium"
        },
        {
          "item": "mekanism:ingot_refined_obsidian"
        },
        {
          "item": "draconicevolution:draconium_ingot"
        },
        {
          "item": "emendatusenigmatica:zinc_ingot"
        },
        {
          "item": "kubejs:antimony_ingot"
        },
        {
          "item": "psi:ivory_psimetal"
        },
        {
          "item": "electrodynamics:ingotchromium"
        },
        {
          "item": "kubejs:shibuichi_ingot"
        },
        {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        {
          "item": "botania:elementium_ingot"
        },
        {
          "item": "futurepack:ingot_wakurium"
        },
        {
          "item": "extrabotany:orichalcos"
        },
        {
          "item": "emendatusenigmatica:nickel_ingot"
        },
        {
          "item": "electrodynamics:ingotsuperconductive"
        },
        {
          "item": "kubejs:reinforced_ingot"
        },
        {
          "item": "botania:terrasteel_ingot"
        },
        {
          "item": "naturesaura:infused_iron"
        },
        {
          "item": "futurepack:ingot_bioterium"
        },
        {
          "item": "emendatusenigmatica:uranium_ingot"
        },
        {
          "item": "emendatusenigmatica:brass_ingot"
        },
        {
          "item": "emendatusenigmatica:constantan_ingot"
        },
        {
          "item": "eidolon:arcane_gold_ingot"
        },
        {
          "item": "emendatusenigmatica:bronze_ingot"
        },
        {
          "item": "emendatusenigmatica:electrum_ingot"
        },
        {
          "item": "kubejs:pristine_gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "emendatusenigmatica:lumium_ingot"
        },
        {
          "item": "mekanism:ingot_refined_glowstone"
        },
        {
          "item": "futurepack:ingot_glowtite"
        },
        {
          "item": "kubejs:energized_ingot"
        },
        {
          "item": "kubejs:aestanite_ingot"
        },
        {
          "item": "kubejs:annealed_copper_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "mythicbotany:alfsteel_ingot"
        },
        {
          "item": "naturesaura:tainted_gold"
        },
        {
          "item": "kubejs:heated_copper_ingot"
        },
        {
          "item": "emendatusenigmatica:signalum_ingot"
        },
        {
          "item": "emendatusenigmatica:copper_ingot"
        },
        {
          "item": "futurepack:ingot_retium"
        }
      ],
      "result": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
  })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBCCCBBD",
          "BEEEEEEEB",
          "BEFGGGFEB",
          "CEGHIHGEC",
          "CEGIJIGEC",
          "CEGHIHGEC",
          "BEFGGGFEB",
          "BEEEEEEEB",
          "DBBCCCBBA"
        ],
        "key": {
          "A": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:tin\"}"
          },
          "B": {
            "item": "mekanism:sps_casing"
          },
          "C": {
            "item": "electrodynamics:resourceblocktitanium"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:iron\"}"
          },
          "E": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "F": {
            "item": "draconicevolution:draconium_block"
          },
          "G": {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          "H": {
            "item": "draconicevolution:awakened_core"
          },
          "I": {
            "item": "draconicevolution:chaotic_energy_core"
          },
          "J": {
            "item": "kubejs:draconic_frame"
          }
        },
        "result": {
          "item": "rftoolsbase:machine_frame"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBBBA",
          "BBBBBBBBB",
          "BBCDCDCBB",
          "BBDCDCDBB",
          "BBEDFDEBB",
          "BBDCDCDBB",
          "BBCDCDCBB",
          "BBBBBBBBB",
          "ABBBBBBBA"
        ],
        "key": {
          "A": {
            "item": "futurepack:color_iron_magenta"
          },
          "B": {
            "item": "pneumaticcraft:compressed_iron_block"
          },
          "C": {
            "item": "pneumaticcraft:gun_ammo_freezing"
          },
          "D": {
            "item": "mekanism:superheating_element"
          },
          "E": {
            "item": "create:creative_blaze_cake"
          },
          "F": {
            "item": "kubejs:concept_of_material"
          }
        },
        "result": {
          "item": "pneumaticcraft:creative_compressed_iron_block",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBABCBA",
          "BBDBDBDBB",
          "CDEEEDDDC",
          "BBEDDDEBB",
          "AEEEFEEEA",
          "BBEDDDEBB",
          "CDDDEEEDC",
          "BBDBDBDBB",
          "ABCBABCBA"
        ],
        "key": {
          "A": {
            "item": "thermal:rich_slag_block"
          },
          "B": {
            "item": "emendatusenigmatica:cinnabar_fragment"
          },
          "C": {
            "item": "thermal:machine_catalyst_augment"
          },
          "D": {
            "item": "futurepack:color_iron_magenta"
          },
          "E": {
            "item": "bloodmagic:combinationalcatalyst"
          },
          "F": {
            "item": "kubejs:concept_of_fabrication"
          }
        },
        "result": {
          "item": "thermal:machine_catalyst_creative_augment",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AA BCB AA",
          "ADADDDADA",
          " AEEFEEA ",
          "CDEEFEEDC",
          "BDGHIJGDB",
          "CDEEFEEDC",
          " AEEFEEA ",
          "ADADDDADA",
          "AA BCB AA"
        ],
        "key": {
          "A": {
            "item": "pneumaticcraft:advanced_liquid_compressor"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "D": {
            "item": "futurepack:color_iron_magenta"
          },
          "E": {
            "item": "pneumaticcraft:compressed_iron_gear"
          },
          "F": {
            "item": "pneumaticcraft:thermal_compressor"
          },
          "G": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:coal\"}"
          },
          "H": {
            "type": "forge:nbt",
            "item": "industrialforegoing:advanced_black_hole_tank",
            "count": 1,
            "nbt": "{BlockEntityTag:{filter:{Type:\"WHITELIST\",Filter:{},Pointer:0},tank:{FluidName:\"mekanism:superheated_sodium\",FacingModes:{TOP:\"ENABLED\",LEFT:\"ENABLED\",BACK:\"ENABLED\",FRONT:\"ENABLED\",RIGHT:\"ENABLED\",BOTTOM:\"ENABLED\"},Amount:65536000}}}"
          },
          "I": {
            "item": "pneumaticcraft:creative_compressed_iron_block"
          },
          "J": {
            "item": "kubejs:concept_of_frigidity"
          }
        },
        "result": {
          "item": "pneumaticcraft:creative_compressor",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABB      ",
          "BCDB     ",
          " BCDB    ",
          "  ECDE   ",
          "   ECDE  ",
          "    ECDE ",
          "     FFDG",
          "    FFF  ",
          "    FF   "
        ],
        "key": {
          "A": {
            "item": "thermal:machine_catalyst_creative_augment"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "C": {
            "item": "psi:cad_colorizer_rainbow"
          },
          "D": {
            "item": "phi:mpu"
          },
          "E": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "F": {
            "item": "psi:ebony_psimetal_block"
          },
          "G": {
            "item": "kubejs:concept_of_capacity"
          }
        },
        "result": {
          "item": "psi:cad_assembly_creative",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAABBBAAA",
          "ABBCCDBBA",
          "ABCEDECBA",
          "BCEDCCECB",
          "BCDDFDDCB",
          "BCECGDECB",
          "ABCEDECBA",
          "ABBDCCBBA",
          "AAABBBAAA"
        ],
        "key": {
          "A": {
            "item": "mekanism:ultimate_control_circuit"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "futurepack:color_iron_magenta"
          },
          "D": {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          "E": {
            "item": "thermal:machine_efficiency_augment"
          },
          "F": {
            "item": "kubejs:concept_of_specificity"
          },
          "G": {
            "item": "pneumaticcraft:creative_compressor"
          }
        },
        "result": {
          "item": "thermal:machine_efficiency_creative_augment",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAABBBAAA",
          "ABBCCCBBA",
          "ABCDEDCBA",
          "BCDFGFDCB",
          "BCEHIHECB",
          "BCDFHFDCB",
          "ABCDEDCBA",
          "ABBCCCBBA",
          "AAABBBAAA"
        ],
        "key": {
          "A": {
            "item": "botania:fabulous_pool"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "extrabotany:orichalcos"
          },
          "D": {
            "item": "botania:dandelifeon"
          },
          "E": {
            "item": "botania:spawner_mover"
          },
          "F": {
            "item": "botania:corporea_crystal_cube"
          },
          "G": {
            "item": "kubejs:concept_of_infusion"
          },
          "H": {
            "item": "botania:corporea_index"
          },
          "I": {
            "item": "psi:cad_assembly_creative"
          }
        },
        "result": {
          "item": "botania:creative_pool",
          "count": 2
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAABABA",
          "ACBDBCB",
          "ACEBEBA",
          "AAAAAAA",
          "ACEDECA",
          "ACEDECA",
          "AAAAAAA"
        ],
        "key": {
          "A": {
            "item": "futurepack:planks_tyros"
          },
          "B": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:iron\"}"
          },
          "C": {
            "item": "appliedenergistics2:spatial_pylon"
          },
          "D": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "E": {
            "item": "appliedenergistics2:128_cubed_spatial_storage_cell"
          }
        },
        "result": {
          "item": "storagedrawers:creative_storage_upgrade"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "ABBBBBA",
          "ABCCCBA",
          "ABCCCBA",
          "ABCCCBA",
          "ABBBBBA",
          "AAAAAAA"
        ],
        "key": {
          "A": {
            "item": "bloodmagic:activationcrystalweak"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "C": {
            "item": "rftoolsbase:infused_diamond"
          }
        },
        "result": {
          "item": "bloodmagic:activationcrystalcreative"
        }
    })

})