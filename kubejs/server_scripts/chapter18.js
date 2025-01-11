onEvent("recipes", event => {

    event.remove({output: "mekanism:chemical_dissolution_chamber"})
    event.remove({output: "extendedcrafting:ultimate_component"})
    event.remove({output: "extendedcrafting:ultimate_catalyst"})
    event.remove({output: "extendedcrafting:ultimate_table"})
    event.remove({output: "extendedcrafting:the_ultimate_component"})
    event.remove({output: "extendedcrafting:the_ultimate_catalyst"})
    event.remove({output: "draconicevolution:draconic_energy_core"})
    event.remove({output: "draconicevolution:wyvern_energy_core"})
    event.remove({output: "draconicevolution:chaotic_energy_core"})
    event.remove({output: "draconicevolution:wyvern_core"})
    event.remove({output: "draconicevolution:reactor_prt_stab_frame"})
    event.remove({output: "draconicevolution:infused_obsidian"})
    event.remove({output: "draconicevolution:reactor_prt_rotor_full"})
    event.remove({output: "draconicevolution:reactor_prt_out_rotor"})
    event.remove({output: "draconicevolution:reactor_prt_in_rotor"})
    event.remove({output: "draconicevolution:particle_generator"})
    event.remove({output: "draconicevolution:flux_gate"})
    event.remove({output: "draconicevolution:reactor_injector"})
    event.remove({output: "draconicevolution:reactor_prt_focus_ring"})
    event.remove({output: "draconicevolution:draconium_core"})
    event.remove({output: "draconicevolution:basic_crafting_injector"})
    event.remove({output: "draconicevolution:crafting_core"})
    event.remove({id: "draconicevolution:compress/chaos_shard"})
    event.remove({id: "draconicevolution:decompress/large_chaos_frag"})
    event.remove({id: "draconicevolution:wyvern_crafting_injector"})
    event.remove({id: "draconicevolution:awakened_draconium_block"})
    event.remove({id: "draconicevolution:awakened_crafting_injector"})
    event.remove({id: "draconicevolution:components/awakened_core"})
    event.remove({id: "draconicevolution:reactor_stabilizer"})
    event.remove({id: "draconicevolution:reactor_core"})
    event.remove({id: "draconicevolution:components/chaotic_core"})
    event.remove({id: "draconicevolution:chaotic_crafting_injector"})

    event.shaped("extendedcrafting:ultimate_catalyst", [
        " C ",
        "CBC",
        " C "
    ], {
        C: "extendedcrafting:ultimate_component",
        B: "extendedcrafting:black_iron_block"
    })
    event.shaped("2x extendedcrafting:the_ultimate_component", [
        " B ",
        "ECA",
        " U "
    ], {
        B: "extendedcrafting:basic_component",
        E: "extendedcrafting:elite_component",
        C: "extendedcrafting:crystaltine_component",
        A: "extendedcrafting:advanced_component",
        U: "extendedcrafting:ultimate_component"
    })
    event.shaped("extendedcrafting:the_ultimate_catalyst", [
        " C ",
        "CBC",
        " C "
    ], {
        C: "extendedcrafting:the_ultimate_component",
        B: "extendedcrafting:black_iron_block"
    })
    event.shaped("mekanism:chemical_dissolution_chamber", [
        "OLO",
        "ASA",
        "OLO"
    ], {
        O: "mekanism:block_refined_obsidian",
        L: "futurepack:chip_industrie",
        A: "mekanism:alloy_atomic",
        S: "mekanism:steel_casing"
    })
    event.shaped("draconicevolution:reactor_stabilizer", [
        "TST",
        "AFR",
        "TST"
    ], {
        T: "electrodynamics:resourceblocktitanium",
        S: "mekanism:sps_casing",
        A: "draconicevolution:reactor_prt_rotor_full",
        F: "draconicevolution:reactor_prt_stab_frame",
        R: "draconicevolution:reactor_prt_focus_ring"
    })
    event.shaped("draconicevolution:flux_gate", [
        "TTT",
        "SDS",
        "TTT"
    ], {
        T: "electrodynamics:platetitanium",
        S: "electrodynamics:wirehighlyinsulatedsuperconductive",
        D: "draconicevolution:draconium_core"
    })


    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_antimony_oxide", 1000),"kubejs:antimony_oxide").energy(10000)
    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_cryolite", 144),"kubejs:cryolite_crystal").energy(10000)
    event.recipes.thermal.refinery(Fluid.of("kubejs:distilled_water", 1000),Fluid.of("minecraft:water", 1000)).energy(10000)
    event.recipes.mekanism.injecting("kubejs:antimony_trichloride", "kubejs:antimony_dust", {gas:"mekanism:chlorine",amount:1})
    event.recipes.thermal.chiller("kubejs:antimony_trichloride",Fluid.of("kubejs:molten_antimony_trichloride", 144)).energy(10000)
    event.recipes.mekanism.chemical_infusing({gas:"kubejs:ammonium_chloride",amount:2}, {gas:"mekanism:hydrogen_chloride",amount:1}, {gas:"kubejs:ammonia",amount:1})

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "kubejs:gravitational_collapse_initiator"
        },
        "catalyst": {
          "item": "mekanism:module_gravitational_modulating_unit"
        },
        "total_energy": 10000000,
        "tier": "DRACONIUM",
        "ingredients": [
          {
            "item": "futurepack:core_entronium"
          },
          {
            "item": "mekanism:supercharged_coil"
          },
          {
            "item": "futurepack:core_entronium"
          },
          {
            "item": "industrialforegoing:infinity_nuke"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "industrialforegoing:infinity_nuke"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "industrialforegoing:infinity_nuke"
          },
          {
            "item": "mekanism:supercharged_coil"
          },
          {
            "item": "industrialforegoing:infinity_nuke"
          }
        ]
    })
    event.custom({
      "type": "draconicevolution:fusion_crafting",
      "result": {
        "item": "draconicevolution:dragon_heart"
      },
      "catalyst": {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{temperature:0.0d,data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      "total_energy": 10000000,
      "tier": "DRACONIC",
      "ingredients": [
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        }
      ]
  })
    event.custom({
      "type": "draconicevolution:fusion_crafting",
      "result": {
        "item": "extendedcrafting:ultimate_component"
      },
      "catalyst": {
        "item": "extendedcrafting:black_iron_slate",
      },
      "total_energy": 10000000,
      "tier": "CHAOTIC",
      "ingredients": [
        {
          "item": "extendedcrafting:luminessence_block"
        },
        {
          "item": "emendatusenigmatica:emerald_crystal"
        },
        {
          "item": "emendatusenigmatica:emerald_crystal"
        },
        {
          "item": "emendatusenigmatica:emerald_crystal"
        },
        {
          "item": "emendatusenigmatica:emerald_crystal"
        }
      ]
  })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "catalyst": {
          "item": "draconicevolution:wyvern_core"
        },
        "total_energy": 15000000,
        "tier": "WYVERN",
        "ingredients": [
          {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          {
            "item": "futurepack:crystal_energy_cell"
          },
          {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          {
            "item": "mekanism:advanced_induction_provider"
          },
          {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          {
            "item": "mekanism:advanced_induction_provider"
          },
          {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          {
            "item": "kubejs:superconductive_block"
          },
          {
            "item": "futurepack:crystal_energy_cell"
          },
          {
            "item": "kubejs:superconductive_block"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:wyvern_crafting_injector"
        },
        "catalyst": {
          "item": "draconicevolution:basic_crafting_injector"
        },
        "total_energy": 25000000,
        "tier": "DRACONIUM",
        "ingredients": [
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "futurepack:chip_ultimate"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "mekanism:sps_port"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:diamond\"}"
          },
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:steel\"}"
          },
          {
            "item": "electrodynamics:resourceblocktitanium"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:aluminum\"}"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:wyvern_core"
        },
        "catalyst": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{temperature:0.0d,Id:\"extendedcrafting:redstone\"}"
        },
        "total_energy": 2000000,
        "tier": "DRACONIUM",
        "ingredients": [
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "extendedcrafting:nether_star_block"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "futurepack:block_compressed_quantanium"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "mekanism:ultimate_control_circuit"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "extendedcrafting:the_ultimate_component"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:wyvern_core"
        },
        "catalyst": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{temperature:0.0d,Id:\"extendedcrafting:glowstone\"}"
        },
        "total_energy": 8000000,
        "tier": "WYVERN",
        "ingredients": [
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "mekanism:pellet_polonium"
          },
          {
            "item": "mekanism:pellet_polonium"
          },
          {
            "item": "draconicevolution:particle_generator"
          },
          {
            "item": "draconicevolution:particle_generator"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:awakened_crafting_injector"
        },
        "catalyst": {
          "item": "draconicevolution:wyvern_crafting_injector"
        },
        "total_energy": 30000000,
        "tier": "WYVERN",
        "ingredients": [
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "kubejs:irilume"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "kubejs:irilume"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:lumium\"}"
          },
          {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:emerald\"}"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "kubejs:unrefined_awakened_draconium",
          "count": 4
        },
        "catalyst": {
          "item": "draconicevolution:draconium_block",
          "count": 4
        },
        "total_energy": 6000000,
        "tier": "WYVERN",
        "ingredients": [
          {
            "item": "draconicevolution:dragon_heart"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:netherite\"}"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:bronze\"}"
          },
          {
            "item": "mythicbotany:alfsteel_armor_upgrade"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "mekanism:pellet_plutonium"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:draconic_energy_core"
        },
        "catalyst": {
          "item": "draconicevolution:awakened_core"
        },
        "total_energy": 10000000,
        "tier": "DRACONIC",
        "ingredients": [
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "emendatusenigmatica:charged_certus_quartz_crystal"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "emendatusenigmatica:charged_certus_quartz_crystal"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "mekanism:ultimate_control_circuit"
          },
          {
            "item": "mekanism:advanced_induction_provider"
          },
          {
            "item": "mekanism:ultimate_control_circuit"
          },
          {
            "item": "mekanism:advanced_induction_provider"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:signalum\"}"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:reactor_core"
        },
        "catalyst": {
          "item": "draconicevolution:draconic_energy_core"
        },
        "total_energy": 10000000,
        "tier": "DRACONIC",
        "ingredients": [
          {
            "item": "draconicevolution:awakened_draconium_block"
          },
          {
            "item": "kubejs:plutonium_block"
          },
          {
            "item": "draconicevolution:awakened_draconium_block"
          },
          {
            "item": "kubejs:plutonium_block"
          },
          {
            "item": "draconicevolution:awakened_draconium_block"
          },
          {
            "item": "kubejs:plutonium_block"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:uranium\"}"
          },
          {
            "item": "kubejs:plutonium_block"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:nether_star\"}"
          },
          {
            "item": "kubejs:plutonium_block"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:chaotic_core"
        },
        "catalyst": {
          "item": "draconicevolution:chaos_shard"
        },
        "total_energy": 5000000,
        "tier": "DRACONIC",
        "ingredients": [
          {
            "item": "draconicevolution:medium_chaos_frag"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:medium_chaos_frag"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:enderium\"}"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:particle_generator"
        },
        "catalyst": {
          "item": "futurepack:ftl_drive"
        },
        "total_energy": 3000000,
        "tier": "DRACONIC",
        "ingredients": [
          {
            "item": "botania:blaze_block"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "botania:blaze_block"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "emendatusenigmatica:redstone_crystal"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          }
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:chaotic_crafting_injector"
        },
        "catalyst": {
          "item": "draconicevolution:awakened_crafting_injector"
        },
        "total_energy": 35000000,
        "tier": "DRACONIC",
        "ingredients": [
          {
            "item": "draconicevolution:chaotic_core"
          },
          {
            "item": "draconicevolution:medium_chaos_frag"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "draconicevolution:medium_chaos_frag"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "draconicevolution:medium_chaos_frag"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:dark_matter\"}"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:diamond\"}"
          },
        ]
    })
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:chaotic_energy_controller"
        },
        "catalyst": {
          "item": "draconicevolution:chaotic_core"
        },
        "total_energy": 35000000,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "extrabotany:theuniverse"
          },
          {
            "item": "emendatusenigmatica:coal_crystal"
          },
          {
            "item": "mekanism:elite_induction_provider"
          },
          {
            "item": "emendatusenigmatica:coal_crystal"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "emendatusenigmatica:coal_crystal"
          },
          {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          {
            "item": "emendatusenigmatica:coal_crystal"
          },
          {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{temperature:0.0d,Id:\"extendedcrafting:mithril\"}"
          },
        ]
    })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 500000,
        "powerRate": 25000,
        "input": {
          "item": "draconicevolution:wyvern_core"
        },
        "ingredients": [
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:infused_obsidian"
          },
          {
            "item": "draconicevolution:infused_obsidian"
          },
          {
            "item": "futurepack:block_compressed_quantanium"
          },
          {
            "item": "futurepack:block_compressed_quantanium"
          }
        ],
        "result": {
          "item": "draconicevolution:reactor_prt_in_rotor"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 500000,
        "powerRate": 25000,
        "input": {
          "item": "draconicevolution:wyvern_core"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "item": "draconicevolution:infused_obsidian"
          },
          {
            "item": "draconicevolution:infused_obsidian"
          },
          {
            "item": "futurepack:block_compressed_quantanium"
          },
          {
            "item": "futurepack:block_compressed_quantanium"
          }
        ],
        "result": {
          "item": "draconicevolution:reactor_prt_out_rotor"
    }})
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 500000,
        "powerRate": 25000,
        "input": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "ingredients": [
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "item": "extendedcrafting:crystaltine_block"
          },
          {
            "item": "draconicevolution:particle_generator"
          },
          {
            "item": "draconicevolution:particle_generator"
          },
          {
            "item": "draconicevolution:particle_generator"
          },
          {
            "item": "draconicevolution:particle_generator"
          }
        ],
        "result": {
          "item": "draconicevolution:reactor_prt_focus_ring"
    }})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDCBA",
          "EBBFBBE",
          "EEEEEEE",
          "  G G  ",
          "  G G  ",
          " GHHHG ",
          " GHHHG "
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_component"
          },
          "B": {
            "item": "extendedcrafting:ultimate_component"
          },
          "C": {
            "item": "extendedcrafting:ultimate_catalyst"
          },
          "D": {
            "item": "draconicevolution:chaotic_energy_core"
          },
          "E": {
            "item": "draconicevolution:medium_chaos_frag"
          },
          "F": {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          "G": {
            "item": "kubejs:dark_matter_alloy"
          },
          "H": {
            "item": "minecraft:black_concrete"
          }
        },
        "result": {
          "item": "extendedcrafting:ultimate_table"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "A  A  A",
          " ABCBA ",
          " BDEDB ",
          "ACEFECA",
          " BDEDB ",
          " ABCBA ",
          "A  A  A"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:draconium_ingot"
          },
          "B": {
            "item": "mekanism:pellet_polonium"
          },
          "C": {
            "item": "mekanism:pellet_plutonium"
          },
          "D": {
            "item": "emendatusenigmatica:lapis_crystal"
          },
          "E": {
            "item": "emendatusenigmatica:charged_certus_quartz_crystal"
          },
          "F": {
            "item": "extendedcrafting:crystaltine_block"
          }
        },
        "result": {
          "item": "draconicevolution:draconium_core"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "       ",
          "       ",
          "A     A",
          "B CCC B",
          "BBBBBBB",
          "BEFGFEB",
          "BBBBBBB"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:crystaltine_block"
          },
          "B": {
            "item": "electrodynamics:resourceblocktitanium"
          },
          "C": {
            "item": "futurepack:ftl_drive"
          },
          "E": {
            "item": "draconicevolution:draconium_core"
          },
          "F": {
            "item": "mekanism:ultimate_control_circuit"
          },
          "G": {
            "item": "kubejs:draconic_frame"
          }
        },
        "result": {
          "item": "draconicevolution:basic_crafting_injector"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBA",
          "BACDCAB",
          "BCEFECB",
          "BDFGFDB",
          "BCEFECB",
          "BACDCAB",
          "ABBBBBA"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:draconium_core"
          },
          "B": {
            "item": "kubejs:dark_matter_alloy"
          },
          "C": {
            "item": "extendedcrafting:crystaltine_block"
          },
          "D": {
            "item": "futurepack:core_entronium"
          },
          "E": {
            "item": "mekanism:ultimate_control_circuit"
          },
          "F": {
            "item": "mekanism:supercharged_coil"
          },
          "G": {
            "item": "kubejs:draconic_frame"
          }
        },
        "result": {
          "item": "draconicevolution:crafting_core"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBCBBA",
          "BDEFEDB",
          "BEGHGEB",
          "CFHIHFC",
          "BEGHGEB",
          "BDEFEDB",
          "ABBCBBA"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:draconium_block"
          },
          "B": {
            "item": "draconicevolution:draconium_ingot"
          },
          "C": {
            "item": "futurepack:block_compressed_quantanium"
          },
          "D": {
            "item": "futurepack:coil_quantanium"
          },
          "E": {
            "item": "futurepack:polymer"
          },
          "F": {
            "item": "futurepack:ceramic"
          },
          "G": {
            "item": "mekanism:pellet_polonium"
          },
          "H": {
            "item": "mekanism:pellet_plutonium"
          },
          "I": {
            "item": "kubejs:quantanium_casing"
          }
        },
        "result": {
          "item": "kubejs:draconic_frame"
        }
    })
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"mythicbotany:alfsteel_nugget"},"fluidInput":{"amount":100,"fluid":"kubejs:concentrated_awakened_draconium_solution"},"gasInput":{"amount":1000,"gas":"kubejs:ammonium_chloride"},"duration":100,"itemOutput":{"item":"draconicevolution:awakened_draconium_dust","count":1}})
    event.custom({"type":"mekanism:evaporating","input":{"amount":5,"fluid":"kubejs:awakened_draconium_solution"},"output":{"fluid":"kubejs:concentrated_awakened_draconium_solution","amount":1}})
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:unrefined_awakened_draconium"
        },
        "item_output": {
            "item": "draconicevolution:draconium_dust",
            "count": 2
          },
        "temperature": {
            "min_temp": 2073
        },
        "fluid_output": {
            "fluid": "kubejs:acidic_awakened_draconium_solution",
            "amount": 1000
        },
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "fluid": "kubejs:fluoroantimonic_acid",
            "amount": 1000
        },
        "pressure": 4.5,
        "speed": 0.5,
        "exothermic": false
    })
    event.recipes.thermal.chiller('kubejs:antimony_oxide', Fluid.of('kubejs:molten_antimony_oxide', 144)).energy(16000)
    event.recipes.thermal.crucible(Fluid.of('kubejs:molten_antimony_trichloride', 144), 'kubejs:antimony_trichloride').energy(16000)
})