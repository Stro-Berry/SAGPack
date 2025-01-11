// priority: 0

onEvent("recipes", event => {

    // removals

    event.remove({output: "industrialforegoing:plastic"})
    event.remove({output: "industrialforegoing:dryrubber"})
    event.remove({output: "industrialforegoing:dissolution_chamber"})
    event.remove({output: "industrialforegoing:machine_frame_pity"})
    event.remove({output: "industrialforegoing:machine_frame_simple"})
    event.remove({output: "industrialforegoing:machine_frame_advanced"})
    event.remove({output: "industrialforegoing:machine_frame_supreme"})
    event.remove({output: "industrialforegoing:latex_processing_unit"})
    event.remove({output: "industrialforegoing:fluid_extractor"})
    event.remove({output: "industrialforegoing:mob_slaughter_factory"})
    event.remove({output: "industrialforegoing:material_stonework_factory"})
    event.remove({output: "industrialforegoing:bioreactor"})
    event.remove({output: "industrialforegoing:laser_drill"})
    event.remove({output: "industrialforegoing:fluid_laser_base"})
    event.remove({output: "industrialforegoing:laser_lens0"})
    event.remove({output: "industrialforegoing:stasis_chamber"})
    event.remove({output: "industrialforegoing:ore_laser_base"})
    event.remove({output: "electrodynamics:tankreinforced"})
    event.remove({output: "thermal:earth_charge"})
    event.remove({output: "extendedcrafting:black_iron_ingot"})
    event.remove({output: "extendedcrafting:luminessence"})
    event.remove({output: "extendedcrafting:advanced_component"})
    event.remove({output: "extendedcrafting:ender_component"})
    event.remove({output: "extendedcrafting:advanced_catalyst"})
    event.remove({output: "extendedcrafting:advanced_table"})
    event.remove({output: "extendedcrafting:black_iron_slate"})
    event.remove({id: "industrialforegoing:dissolution_chamber/simple_machine_frame"})
    event.remove({id: "industrialforegoing:dissolution_chamber/advanced_machine_frame"})
    event.remove({id: "industrialforegoing:dissolution_chamber/pink_slime_ingot"})

    // shaped
    
    event.recipes.createMechanicalCrafting("industrialforegoing:dissolution_chamber", [
        "PPPPP",
        "PUHUP",
        "PEMEP",
        "PUHUP",
        "PPPPP"
    ], {
        P: "industrialforegoing:plastic",
        H: "electrodynamics:tankhsla",
        E: "thermal:enderium_glass",
        M: "industrialforegoing:machine_frame_pity",
        U: "electrodynamics:circuitultimate",
    })
    event.shaped("industrialforegoing:machine_frame_pity", [
        "CPC",
        "PRP",
        "CPC"
    ], {
        C: "electrodynamics:compositeplating",
        P: "electrodynamics:wireceramicinsulatedsuperconductive",
        R: "kubejs:reinforced_casing",
    })
    event.shaped("industrialforegoing:latex_processing_unit", [
        "CUC",
        "HMH",
        "CNC"
    ], {
        C: "electrodynamics:compositeplating",
        U: "electrodynamics:circuitultimate",
        H: "dynamicelectricity:shafthslasteel",
        N: "#forge:gears/netherite",
        M: "industrialforegoing:machine_frame_pity"
    })
    event.shaped("industrialforegoing:fluid_extractor", [
        "CUC",
        "SMS",
        "CEC"
    ], {
        C: "electrodynamics:compositeplating",
        U: "electrodynamics:circuitultimate",
        S: "electrodynamics:pipesteel",
        E: "#forge:gears/enderium",
        M: "industrialforegoing:machine_frame_pity"
    })
    event.shaped("industrialforegoing:mob_slaughter_factory", [
        "USU",
        "EME",
        "PVP"
    ], {
        V: "#forge:storage_blocks/vanadiumsteel",
        U: "electrodynamics:circuitultimate",
        S: "#forge:gears/signalum",
        E: "electrodynamics:electricchainsaw",
        P: "industrialforegoing:plastic",
        M: "industrialforegoing:machine_frame_simple"
    })
    event.shaped("electrodynamics:tankreinforced", [
        "VGV",
        "GTG",
        "VGV"
    ], {
        V: "#forge:plates/vanadiumsteel",
        G: "electrodynamics:glassaluminum",
        T: "electrodynamics:tanksteel"
    })
    event.shaped("industrialforegoing:material_stonework_factory", [
        "SDS",
        "PTP",
        "SNS"
    ], {
        S: "#forge:plates/stainlesssteel",
        D: "pneumaticcraft:drill_bit_diamond",
        P: "tetra:vent_plate",
        N: "minecraft:netherite_block",
        T: "industrialforegoing:machine_frame_advanced"
    })
    event.shaped("industrialforegoing:bioreactor", [
        "SHS",
        "PTP",
        "SES"
    ], {
        S: "#forge:plates/stainlesssteel",
        H: "pneumaticcraft:huge_tank",
        P: "industrialforegoing:pink_slime_ingot",
        E: "mekanism:superheating_element",
        T: "industrialforegoing:machine_frame_advanced"
    })
    event.shaped("industrialforegoing:laser_drill", [
        "SDS",
        "PTP",
        "SLS"
    ], {
        S: "#forge:plates/stainlesssteel",
        D: "envirocore:laser_diode",
        P: "industrialforegoing:pink_slime_ingot",
        L: "industrialforegoing:laser_lens0",
        T: "industrialforegoing:machine_frame_advanced"
    })
    event.shaped("industrialforegoing:fluid_laser_base", [
        "UHU",
        "LTL",
        "UHU"
    ], {
        U: "electrodynamics:circuitultimate",
        L: "envirocore:laser_core",
        H: "electrodynamics:tankhsla",
        T: "industrialforegoing:machine_frame_advanced"
    })
    event.shaped("industrialforegoing:stasis_chamber", [
        "SUS",
        "LTL",
        "SES"
    ], {
        S: "#forge:plates/stainlesssteel",
        U: "electrodynamics:circuitultimate",
        E: "#forge:gears/enderium",
        L: "industrialforegoing:laser_lens0",
        T: "industrialforegoing:machine_frame_advanced"
    })
    event.shaped("industrialforegoing:ore_laser_base", [
        "UNU",
        "LTL",
        "UNU"
    ], {
        U: "electrodynamics:circuitultimate",
        N: "pneumaticcraft:drill_bit_netherite",
        L: "envirocore:laser_core",
        T: "industrialforegoing:machine_frame_supreme"
    })
    event.shaped("extendedcrafting:advanced_catalyst", [
        " C ",
        "CBC",
        " C "
    ], {
        C: "extendedcrafting:advanced_component",
        B: "extendedcrafting:black_iron_block"
    })
    event.shaped("extendedcrafting:advanced_table", [
        "LTL",
        "CAC",
        "LSL"
    ], {
        L: "extendedcrafting:advanced_component",
        C: "minecraft:crafting_table",
        T: "extendedcrafting:advanced_catalyst",
        A: "eidolon:arcane_gold_block",
        S: "extendedcrafting:black_iron_slate"
    })

    // shapeless
    
    event.shapeless("2x extendedcrafting:advanced_table", ["extendedcrafting:advanced_table", "extendedcrafting:advanced_component"])
    event.shapeless("2x extendedcrafting:elite_table", ["extendedcrafting:elite_table", "extendedcrafting:elite_component"])
    event.shapeless("2x extendedcrafting:ultimate_table", ["extendedcrafting:ultimate_table", "extendedcrafting:ultimate_component"])
    event.shapeless("2x extendedcrafting:ultimate_table", ["extendedcrafting:ultimate_table", "extendedcrafting:ultimate_component"])
    event.shapeless("2x kubejs:enderium_glass_fragment", ["thermal:enderium_glass", "thermal:earth_charge"])

    // machines
    
    event.recipes.thermal.smelter("emendatusenigmatica:silicon_gem", ["#forge:dusts/coke", "minecraft:sand"]).energy(5000)
    event.recipes.immersiveengineering.arc_furnace(["emendatusenigmatica:silicon_gem"], "#forge:dusts/coke", ["minecraft:sand"], "thermal:slag", 0.5, 10000)
    event.recipes.thermal.press("industrialforegoing:dryrubber", ["9x industrialforegoing:tinydryrubber", "thermal:press_packing_3x3_die"]).energy(10000)
    event.recipes.thermal.press("kubejs:alumina_refractory_bricks", ["4x kubejs:refractory_mixture", "thermal:press_packing_2x2_die"]).energy(10000)
    event.recipes.createMixing("2x thermal:earth_charge", [Fluid.of("industrialforegoing:biofuel", 250), "thermal:basalz_powder","botania:pebble","emendatusenigmatica:bitumen_gem","mekanism:dust_refined_obsidian"]).superheated()
    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_chromium", 144), "#forge:ingots/chromium").energy(5000)
    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_superconductive", 144), "#forge:ingots/superconductive").energy(5000)
    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_stainless_steel", 144), "#forge:ingots/stainlesssteel").energy(5000)
    event.recipes.thermal.press("extendedcrafting:black_iron_slate", "4x extendedcrafting:black_iron_ingot")  

    //json

    event.custom({
        "type":"electrodynamics:reinforced_alloyer_recipe",
    
        "input1":{
            "item":"industrialforegoing:dryrubber",
            "count":1
        },
        "input2":{
            "item":"kubejs:polyvinyl_chloride",
            "count":1
        },
        "output":{
            "item":"industrialforegoing:plastic",
            "count":1
        }
    })
    event.custom({
      "type":"electrodynamics:reinforced_alloyer_recipe",
  
      "input1":{
          "item":"kubejs:chromiumiii_oxide",
          "count":1
      },
      "input2":{
          "item":"kubejs:alumina",
          "count":1
      },
      "output":{
          "item":"kubejs:refractory_mixture",
          "count":2
      }
  })
    event.custom({
        "type":"electrodynamics:reinforced_alloyer_recipe",
    
        "input1":{
            "item":"industrialforegoing:pink_slime",
            "count":1
        },
        "input2":{
            "tag":"forge:ingots/enderium",
            "count":1
        },
        "output":{
            "item":"industrialforegoing:pink_slime_ingot",
            "count":1
        }
    })
    event.custom({
        "input": [
          {
            "tag": "forge:plates/hslasteel"
          },
          {
            "item": "industrialforegoing:machine_frame_pity"
          },
          {
            "tag": "forge:plates/hslasteel"
          },
          {
            "item": "industrialforegoing:plastic"
          },
          {
            "item": "industrialforegoing:plastic"
          },
          {
            "tag": "forge:plates/hslasteel"
          },
          {
            "tag": "forge:storage_blocks/vanadiumsteel"
          },
          {
            "tag": "forge:plates/hslasteel"
          }
        ],
        "inputFluid": "{FluidName:\"kubejs:molten_chromium\",Amount:288}",
        "processingTime": 30,
        "output": {
          "item": "industrialforegoing:machine_frame_simple",
          "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "input": [
          {
            "tag": "forge:plates/stainlesssteel"
          },
          {
            "item": "industrialforegoing:machine_frame_simple"
          },
          {
            "tag": "forge:plates/stainlesssteel"
          },
          {
            "item": "industrialforegoing:pink_slime_ingot"
          },
          {
            "item": "industrialforegoing:pink_slime_ingot"
          },
          {
            "tag": "forge:plates/stainlesssteel"
          },
          {
            "tag": "forge:plates/netherite"
          },
          {
            "tag": "forge:plates/stainlesssteel"
          }
        ],
        "inputFluid": "{FluidName:\"kubejs:molten_chromium\",Amount:288}",
        "processingTime": 30,
        "output": {
          "item": "industrialforegoing:machine_frame_advanced",
          "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "input": [
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          },
          {
            "item": "kubejs:enderium_glass_fragment"
          }
        ],
        "inputFluid": "{FluidName:\"kubejs:molten_stainless_steel\",Amount:576}",
        "processingTime": 30,
        "output": {
          "item": "industrialforegoing:laser_lens0",
          "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "input": [
          {
            "item": "industrialforegoing:machine_frame_simple"
          },
          {
            "item": "electrodynamics:circuitultimate"
          },
          {
            "tag": "forge:plates/hslasteel"
          },
          {
            "tag": "forge:plates/hslasteel"
          },
          {
            "item": "industrialforegoing:plastic"
          },
          {
            "item": "industrialforegoing:plastic"
          },
          {
            "item": "industrialforegoing:plastic"
          },
          {
            "item": "industrialforegoing:plastic"
          }
        ],
        "inputFluid": "{FluidName:\"emendatusenigmatica:molten_enderium\",Amount:576}",
        "processingTime": 30,
        "output": {
          "item": "industrialforegoing:dissolution_chamber",
          "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "input": [
          {
            "tag": "forge:plates/vanadiumsteel"
          },
          {
            "item": "industrialforegoing:machine_frame_advanced"
          },
          {
            "tag": "forge:plates/vanadiumsteel"
          },
          {
            "item": "industrialforegoing:laser_lens0"
          },
          {
            "item": "industrialforegoing:laser_lens0"
          },
          {
            "tag": "forge:plates/vanadiumsteel"
          },
          {
            "tag": "forge:storage_blocks/stainlesssteel"
          },
          {
            "tag": "forge:plates/vanadiumsteel"
          }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:250}",
        "processingTime": 30,
        "output": {
          "item": "industrialforegoing:machine_frame_supreme",
          "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
      "input": [
        {
          "item": "extendedcrafting:black_iron_slate"
        },
        {
          "item": "extendedcrafting:luminessence_block"
        },
        {
          "item": "eidolon:arcane_gold_ingot"
        },
        {
          "item": "eidolon:arcane_gold_ingot"
        },
        {
          "item": "eidolon:arcane_gold_ingot"
        },
        {
          "item": "eidolon:arcane_gold_ingot"
        }
      ],
      "inputFluid": "{FluidName:\"emendatusenigmatica:molten_gold\",Amount:1152}",
      "processingTime": 10,
      "output": {
        "item": "extendedcrafting:advanced_component",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
      "input": [
        {
          "item": "extendedcrafting:black_iron_slate"
        },
        {
          "item": "extendedcrafting:luminessence_block"
        },
        {
          "item": "extendedcrafting:ender_ingot"
        },
        {
          "item": "extendedcrafting:ender_ingot"
        },
        {
          "item": "extendedcrafting:ender_ingot"
        },
        {
          "item": "extendedcrafting:ender_ingot"
        }
      ],
      "inputFluid": "{FluidName:\"thermal:ender\",Amount:1000}",
      "processingTime": 10,
      "output": {
        "item": "extendedcrafting:ender_component",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "output": {
          "item": "botania:pebble",
          "count": 1
        },
        "waterNeed": 200,
        "lavaNeed": 100,
        "waterConsume": 0,
        "lavaConsume": 0,
        "type": "industrialforegoing:stonework_generate"
      })
  event.custom({
    "output": {
      "item": "kubejs:tanzanite_ore"
    },
    "rarity": [
      {
        "whitelist": {},
        "blacklist": {},
        "depth_min": 1,
        "depth_max": 20,
        "weight": 3
      }
    ],
    "pointer": 0,
    "catalyst": {
      "item": "industrialforegoing:laser_lens10"
    },
    "type": "industrialforegoing:laser_drill_ore"
  })
})