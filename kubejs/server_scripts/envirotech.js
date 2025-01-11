// priority: 0

onEvent('recipes', event => {

    // removals
    
    event.remove({output: "envirocore:assembler"})
    event.remove({output: "envirocore:cpu"})
    event.remove({output: "envirocore:obsidian_plate"})
    event.remove({output: "envirocore:volatile_memory"})
    event.remove({output: "envirocore:flash_memory"})
    event.remove({output: "envirocore:structure_panel"})
    event.remove({output: "envirocore:clear_structure_panel"})
    event.remove({output: "envirocore:litherite_boule"})
    event.remove({output: "envirocore:litherite_wafer"})
    event.remove({output: "envirocore:litherite_frame"})
    event.remove({output: "envirotech:litherite_void_miner_ccu"})
    event.remove({output: "envirocore:erodium_boule"})
    event.remove({output: "envirocore:erodium_wafer"})
    event.remove({output: "envirocore:kyronite_boule"})
    event.remove({output: "envirocore:kyronite_wafer"})
    event.remove({output: "envirocore:pladium_boule"})
    event.remove({output: "envirocore:pladium_wafer"})
    event.remove({output: "envirocore:ionite_boule"})
    event.remove({output: "envirocore:ionite_wafer"})
    event.remove({output: "envirocore:aethium_boule"})
    event.remove({output: "envirocore:aethium_wafer"})
    event.remove({output: "envirocore:nanorite_boule"})
    event.remove({output: "envirocore:nanorite_wafer"})
    event.remove({output: "envirocore:xerothium_boule"})
    event.remove({output: "envirocore:xerothium_wafer"})
    event.remove({output: "envirocore:erodium_frame"})
    event.remove({output: "envirotech:erodium_void_miner_ccu"})
    event.remove({output: "envirocore:kyronite_frame"})
    event.remove({output: "envirotech:kyronite_void_miner_ccu"})
    event.remove({output: "envirocore:pladium_frame"})
    event.remove({output: "envirotech:pladium_void_miner_ccu"})
    event.remove({output: "envirocore:ionite_frame"})
    event.remove({output: "envirotech:ionite_void_miner_ccu"})
    event.remove({output: "envirocore:aethium_frame"})
    event.remove({output: "envirotech:aethium_void_miner_ccu"})
    event.remove({output: "envirocore:nanorite_frame"})
    event.remove({output: "envirotech:nanorite_void_miner_ccu"})
    event.remove({output: "envirocore:xerothium_frame"})
    event.remove({output: "envirotech:xerothium_void_miner_ccu"})
    event.remove({output: "envirocore:laser_core"})
    event.remove({output: "envirocore:laser_diode"})
    event.remove({output: "envirocore:memory_programmer"})
    event.remove({output: "envirocore:lens_grinder"})
    event.remove({output: "envirocore:null_modifier"})
    event.remove({output: "envirocore:laser_lens_holder"})
    event.smelting("kubejs:tungsten_ingot", "kubejs:tungsten_ore")
    event.smelting("kubejs:platinum_ingot", "kubejs:platinum_ore")
    event.smelting("2x kubejs:tanzanite", "kubejs:tanzanite_ore")
    event.smelting("2x kubejs:cryolite_crystal", "kubejs:cryolite_ore")

    // shaped
    
    event.recipes.createMechanicalCrafting('envirocore:assembler', [
        "PCWCP",
        "CSUSC",
        "WUIUW",
        "CSUSC",
        "PCWCP"
    ], {
        P: "envirocore:obsidian_plate",
        C: "mekanism:advanced_control_circuit",
        W: "envirocore:litherite_wafer",
        S: "mekanism:hdpe_sheet",
        U: "envirocore:cpu",
        I: "mekanism:steel_casing",
    })

    event.shaped('envirocore:volatile_memory', [
        "PSP",
        "WUW",
        "PSP"
    ], {
        U: "envirocore:cpu",
        W: "envirocore:litherite_wafer",
        S: "mekanism:hdpe_sheet",
        P: "#forge:plates/steel"

    })

    event.shaped("envirocore:flash_memory", [
        "AOA",
        "WVW",
        "AOA"
    ], {
        V: "envirocore:volatile_memory",
        O: "envirocore:obsidian_plate",
        W: "envirocore:litherite_wafer",
        A: "mekanism:alloy_atomic",

    })

    event.shaped("envirotech:litherite_void_miner_ccu", [
        "CUC",
        "SDS",
        "CBC"
    ], {
        C: "mekanism:advanced_control_circuit",
        U: "envirocore:cpu",
        S: "envirocore:litherite_frame",
        D: "envirocore:laser_diode",
        B: "envirocore:litherite_boule"

    })

    event.shaped("envirotech:erodium_void_miner_ccu", [
        "CUC",
        "SDS",
        "CBC"
    ], {
        C: "#forge:gears/signalum",
        U: "thermal:upgrade_augment_2",
        S: "envirocore:erodium_frame",
        D: "envirotech:litherite_void_miner_ccu",
        B: "envirocore:erodium_boule"
    })
    event.shaped("envirotech:kyronite_void_miner_ccu", [
      "CUC",
      "SDS",
      "CBC"
  ] , {
      C: "botania:life_essence",
      U: "occultism:dimensional_matrix",
      S: "envirocore:kyronite_frame",
      D: "envirotech:erodium_void_miner_ccu",
      B: "envirocore:kyronite_boule"
    })
    event.shaped("envirotech:pladium_void_miner_ccu", [
      "CUC",
      "SDS",
      "CBC"
    ], {
      C: "bloodmagic:reagentfastminer",
      U: "bloodmagic:masterritualstone",
      S: "envirocore:pladium_frame",
      D: "envirotech:kyronite_void_miner_ccu",
      B: "envirocore:pladium_boule"
    })
    event.shaped("envirotech:ionite_void_miner_ccu", [
      "CUC",
      "SDS",
      "CBC"
    ], {
      C: "astralsorcery:marble_engraved",
      U: "astralsorcery:attuned_celestial_crystal",
      S: "envirocore:ionite_frame",
      D: "envirotech:pladium_void_miner_ccu",
      B: "envirocore:ionite_boule"
    })
    event.shaped("envirotech:aethium_void_miner_ccu", [
      "CUC",
      "SDS",
      "CBC"
    ], {
      C: "electrodynamics:resourceblocktitaniumcarbide",
      U: "futurepack:drone_engine",
      S: "envirocore:ionite_frame",
      D: "envirotech:ionite_void_miner_ccu",
      B: "envirocore:aethium_boule"
    })
    event.shaped("envirotech:nanorite_void_miner_ccu", [
      "CUC",
      "SDS",
      "CBC"
    ], {
      C: "mekanismgenerators:fusion_reactor_frame",
      U: "mekanism:supercharged_coil",
      S: "envirocore:nanorite_frame",
      D: "envirotech:aethium_void_miner_ccu",
      B: "envirocore:nanorite_boule"
    })
    event.shaped("envirotech:xerothium_void_miner_ccu", [
      "CUC",
      "SDS",
      "CBC"
    ], {
      C: "draconicevolution:awakened_core",
      U: Item.of("extendedcrafting:singularity","{temperature:0.0d,Id:\"extendedcrafting:crystaltine\"}"),
      S: "envirocore:xerothium_frame",
      D: "envirotech:nanorite_void_miner_ccu",
      B: "envirocore:xerothium_boule"
    })
    event.shaped("envirocore:memory_programmer", [
        "VVV",
        "SUS",
        "OOO"
    ], {
        V: "envirocore:volatile_memory",
        S: "envirocore:structure_panel",
        U: "envirocore:cpu",
        O: "envirocore:obsidian_plate",
    })
    event.shaped("envirocore:lens_grinder", [
        "OOO",
        "BUB",
        "SSS"
    ], {
        B: "thermal:saw_blade",
        S: "envirocore:structure_panel",
        U: "envirocore:cpu",
        O: "envirocore:obsidian_plate",
    })


    // shapeless
    
    event.shapeless("envirocore:structure_panel", "envirocore:clear_structure_panel")
    event.shapeless("envirocore:clear_structure_panel", "envirocore:structure_panel")
    event.shapeless("envirocore:kyronite_powder",["envirocore:kyronite_crystal","thermal:earth_charge"])
    event.shapeless("envirocore:pladium_powder",["envirocore:pladium_crystal","thermal:earth_charge"])
    event.shapeless("envirocore:ionite_interconnect",["envirocore:ionite_wafer","envirocore:redstone_imbued_obsidian_plate","astralsorcery:resonating_gem"])
    event.shapeless("envirocore:nanorite_interconnect",["envirocore:nanorite_wafer","envirocore:redstone_imbued_obsidian_plate","mekanism:alloy_atomic"])
    event.shapeless("4x envirocore:ionite_wafer",["envirocore:ionite_boule","astralsorcery:infused_crystal_sword"]).damageIngredient("astralsorcery:infused_crystal_sword", 1170)
    event.shapeless("4x envirocore:xerothium_wafer",["draconicevolution:dislocator","envirocore:xerothium_boule"])
    event.shapeless("kubejs:irilume",["kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal","kubejs:irilume_crystal"])
    event.shapeless("9x kubejs:irilume_crystal","kubejs:irilume")

    // machines
    
    event.recipes.mekanism.combining("envirocore:cpu", "2x envirocore:litherite_wafer", "mekanism:advanced_control_circuit")
    event.recipes.mekanism.combining("envirocore:litherite_interconnect", "envirocore:litherite_wafer", "envirocore:obsidian_plate") 
    event.recipes.mekanism.sawing("4x envirocore:litherite_wafer", "envirocore:litherite_boule")
    event.recipes.mekanism.sawing("4x envirocore:erodium_wafer", "envirocore:erodium_boule")
    event.recipes.mekanism.sawing("4x envirocore:kyronite_wafer", "envirocore:kyronite_boule")
    event.recipes.mekanism.sawing("4x envirocore:nanorite_wafer", "envirocore:nanorite_boule")
    event.recipes.thermal.pulverizer("envirocore:erodium_powder", ["envirocore:erodium_crystal"]).energy(4000)
    event.recipes.thermal.smelter("envirocore:erodium_interconnect", ["envirocore:obsidian_plate", "envirocore:erodium_wafer"]).energy(4000)
    event.recipes.bloodmagic.arc("envirocore:pladium_boule", "envirocore:pladium", "bloodmagic:primitive_hydration_cell")
    event.recipes.bloodmagic.arc("4x envirocore:pladium_wafer", "envirocore:pladium_boule", "bloodmagic:intermediatecuttingfluid")
    event.recipes.bloodmagic.soulforge("envirocore:pladium_interconnect", ["envirocore:obsidian_plate","envirocore:pladium_wafer","bloodmagic:combinationalcatalyst","bloodmagic:reagentwater"]).minimumDrain(300).drain(15)

    //json

    event.custom({"type":"mekanism:reaction","itemInput":{"item":"tetra:pristine_emerald"},"fluidInput":{"amount":100,"fluid":"kubejs:volatile_golden_mixture"},"gasInput":{"amount":250,"gas":"mekanism:hydrogen_chloride"},"duration":100,"itemOutput":{"item":"envirocore:litherite_crystal"}})
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "mekanism:ingot_refined_obsidian"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "tag": "pneumaticcraft:plastic",
          "amount": 250
        },
        "item_output": {
          "item": "envirocore:obsidian_plate",
          "count": 2
        },
        "temperature": {
            "min_temp": 1473
        },
        "pressure": 4,
        "speed": 0.5,
        "exothermic": false
      })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "envirocore:litherite"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:distilled_water",
          "amount": 1000
        },
        "item_output": {
          "item": "envirocore:litherite_boule",
        },
        "temperature": {
            "min_temp": 2023
        },
        "pressure": 4,
        "speed": 0.5,
        "exothermic": false
      })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "envirocore:erodium"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:distilled_water",
          "amount": 1000
        },
        "item_output": {
          "item": "envirocore:erodium_boule",
        },
        "temperature": {
            "min_temp": 2023
        },
        "pressure": 4,
        "speed": 0.5,
        "exothermic": false
      })
    event.custom({
      "type": "botania:elven_trade",
      "ingredients": [
        {
          "item": "envirocore:kyronite_wafer"
        },
        {
          "item": "envirocore:obsidian_plate"
        },
        {
          "item": "botania:dragonstone"
        }
      ],
      "output": [
        {
          "item": "envirocore:kyronite_interconnect"
        }
      ]
    })
    event.custom({
      "type": "astralsorcery:infuser",
      "fluidInput": "astralsorcery:liquid_starlight",
      "input": {
        "item": "envirocore:ionite"
      },
      "output": {
        "item": "envirocore:ionite_boule",
        "count": 1
      },
      "consumptionChance": 0.3,
      "duration": 20,
      "consumeMultipleFluids": false,
      "acceptChaliceInput": true,
      "copyNBTToOutputs": false
    })
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 10000000,
      "powerRate": 500000,
      "input": {
        "item": "envirocore:xerothium"
      },
      "ingredients": [
        {
          "item": "draconicevolution:wyvern_core"
        }
      ],
      "result": {
        "item": "envirocore:xerothium_boule"
      
    }})
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "powerRate": 5000,
      "input": {
        "item": "envirocore:nanorite"
      },
      "ingredients": [
        {
          "item": "kubejs:energized_ingot"
        }
      ],
      "result": {
        "item": "envirocore:nanorite_boule"
      
      }})
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
          "item": "envirocore:kyronite"
        },
        "output": {
          "item": "envirocore:kyronite_boule"
        },
        "mana": 10000
    })
})