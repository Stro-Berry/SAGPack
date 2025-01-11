// priority: 0

onEvent('recipes', event => {

    event.remove({output: 'mekanism:alloy_infused'})
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.remove({output: 'mekanism:enrichment_chamber'})
    event.remove({output: 'mekanism:crusher'})
    event.remove({output: 'mekanism:osmium_compressor'})
    event.remove({output: 'mekanism:electrolytic_core'})
    event.remove({output: 'mekanism:electrolytic_separator'})
    event.remove({output: 'mekanism:purification_chamber'})
    event.remove({output: 'mekanism:enriched_refined_obsidian'})
    event.remove({output: 'mekanism:enriched_diamond'})
    event.remove({output: 'mekanism:thermal_evaporation_block'})
    event.remove({output: 'mekanism:thermal_evaporation_controller'})
    event.remove({output: 'mekanism:pressurized_reaction_chamber'})
    event.remove({output: 'mekanism:hdpe_sheet'})
    event.remove({output: 'mekanism:boiler_casing'})
    event.remove({output: 'mekanism:boiler_valve'})
    event.remove({output: 'mekanism:superheating_element'})
    event.remove({output: 'mekanism:pressure_disperser'})
    event.remove({output: 'electrodynamics:ceramicwet'})
    event.remove({output: 'mekanism:chemical_infuser'})
    event.remove({output: 'thermal:machine_frame'})
    event.remove({output: 'mekanism:combiner'})
    event.remove({output: 'mekanism:precision_sawmill'})
    event.remove({output: 'mekanism:teleportation_core'})
    event.remove({output: 'mekanism:quantum_entangloporter'})
    event.remove({id: "mekanism:infusion_conversion/refined_obsidian/from_dust"})
    event.remove({id: "mekanism:infusion_conversion/diamond/from_dust"})
    event.remove({id: "mekanism:reaction/substrate/water_hydrogen"})
    event.remove({id: "thermal:fire_charge/enderium_ingot_2"})
    event.remove({id: 'electrodynamics:platelithium'})
    event.remove({id: 'emendatusenigmatica:ingot_from_nugget/aluminum'})
    event.remove({id: 'immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum'})

    event.shaped('mekanism:metallurgic_infuser', [
        'HIH',
        'BCB',
        'WWW'
    ], {
        H: 'immersiveengineering:heavy_engineering',
        I: 'pneumaticcraft:compressed_iron_block',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'mekanism:steel_casing',
        W: 'tetra:forged_wall'
    })

    event.shaped('mekanism:enrichment_chamber', [
        'IBI',
        'GCG',
        'IBI'
    ], {
        C: 'mekanism:steel_casing',
        G: 'pneumaticcraft:compressed_iron_gear',
        B: 'mekanism:basic_control_circuit',
        I: 'mekanism:alloy_infused'
    })

    event.shaped('mekanism:crusher', [
        'IBI',
        'PCP',
        'IBI'
    ], {
        C: 'mekanism:steel_casing',
        P: 'create:mechanical_press',
        B: 'mekanism:basic_control_circuit',
        I: 'mekanism:alloy_infused'
    })
    event.shaped('mekanism:teleportation_core', [
      'CAC',
      'ARA',
      'CAC'
  ], {
      C: 'mekanism:advanced_control_circuit',
      A: 'mekanism:alloy_atomic',
      R: 'mekanism:block_refined_obsidian'
  })

    event.shaped('mekanism:osmium_compressor', [
        'IBI',
        'DCD',
        'IBI'
    ], {
        C: 'mekanism:steel_casing',
        D: 'mekanism:crystal_osmium',
        B: 'mekanism:basic_control_circuit',
        I: 'mekanism:alloy_infused'
    })

    event.shaped('mekanism:electrolytic_core', [
        'CIC',
        'QGS',
        'CIC'
    ], {
        C: 'pneumaticcraft:ingot_iron_compressed',
        G: 'pneumaticcraft:compressed_iron_gear',
        I: 'mekanism:alloy_infused',
        Q: 'create:polished_rose_quartz',
        S: 'create:shadow_steel'
    })

    event.shaped('mekanism:electrolytic_separator', [
        'RBR',
        'DCD',
        'RBR'
    ], {
        C: 'mekanism:steel_casing',
        D: 'mekanism:electrolytic_core',
        B: 'mekanism:basic_control_circuit',
        R: 'mekanism:enriched_redstone'
    })

    event.shaped('mekanism:purification_chamber', [
        'SBS',
        'CEC',
        'SBS'
    ], {
        C: 'mekanism:steel_casing',
        E: 'mekanism:enrichment_chamber',
        B: 'mekanism:basic_control_circuit',
        S: 'create:shadow_steel'
    })

    event.shaped('kubejs:advanced_control_circuit_materials', [
        'IGI',
        'GCG',
        'IBI'
    ], {
        C: 'mekanism:cardboard_box',
        B: 'mekanism:basic_control_circuit',
        I: 'mekanism:alloy_infused',
        G: 'mekanism:ingot_refined_glowstone'
    })

    event.shaped('8x mekanism:thermal_evaporation_block', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        C: 'kubejs:annealed_copper_ingot',
        S: 'mekanism:steel_casing'
    })

    event.shaped('mekanism:thermal_evaporation_controller', [
        'BAB',
        'AUA',
        'BAB'
    ], {
        B: 'mekanism:thermal_evaporation_block',
        A: 'mekanism:advanced_control_circuit',
        U: 'mekanism:alloy_atomic'
    })
    
    event.shaped('mekanism:pressurized_reaction_chamber', [
        'LAL',
        'PSP',
        'LAL'
    ], {
        L: 'emendatusenigmatica:lithium_dust',
        A: 'mekanism:advanced_control_circuit',
        P: 'pneumaticcraft:plastic',
        S: 'mekanism:steel_casing'
    })

    event.shaped('mekanism:hdpe_sheet', [
        ' H ',
        'HPH',
        ' H '
    ], {
        P: 'pneumaticcraft:plastic',
        H: 'mekanism:hdpe_pellet'
    })

    event.shaped('2x mekanism:boiler_casing', [
        'STS',
        'BHB',
        'STS'
    ], {
        S: 'emendatusenigmatica:steel_plate',
        H: '#forge:plates/lithium',
        B: 'mekanism:thermal_evaporation_block',
        T: 'kubejs:tungsten_ingot'
    })

    event.shaped('mekanism:boiler_valve', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'mekanism:advanced_control_circuit',
        B: 'mekanism:boiler_casing'
    })

    event.shaped('mekanism:superheating_element', [
        'IHI',
        'HCH',
        'IHI'
    ], {
        C: 'mekanism:steel_casing',
        H: 'kubejs:heated_copper_ingot',
        I: 'pneumaticcraft:ingot_iron_compressed'
    })

    event.shaped('mekanism:pressure_disperser', [
        'ITI',
        'TAT',
        'ITI'
    ], {
        A: 'mekanism:alloy_atomic',
        T: 'pneumaticcraft:advanced_pressure_tube',
        I: 'pneumaticcraft:ingot_iron_compressed'
    })

    event.shaped('kubejs:fiberglass', [
        'FF',
        'FF'
    ], {
        F: 'kubejs:coated_fiberglass_wool'
    })

    event.shaped('kubejs:ceramic_block', [
        'CC',
        'CC'
    ], {
        C: 'electrodynamics:ceramiccooked'
    })

    event.shaped('5x kubejs:steel_plated_ceramic_block', [
        'CSC',
        'SCS',
        'CSC'
    ], {
        C: 'kubejs:ceramic_block',
        S: 'emendatusenigmatica:steel_plate'
    })

    event.shaped('mekanism:chemical_infuser', [
        'aAa',
        'TST',
        'aAa'
    ], {
        a: 'mekanism:alloy_atomic',
        A: 'mekanism:advanced_control_circuit',
        T: 'mekanism:ultimate_chemical_tank',
        S: 'mekanism:steel_casing'
    })

    event.shaped('thermal:machine_frame', [
        'AaA',
        'HSH',
        'AaA'
    ], {
        a: 'mekanism:alloy_atomic',
        A: 'emendatusenigmatica:aluminum_gear',
        H: 'mekanism:hdpe_sheet',
        S: 'mekanism:steel_casing'
    })

    event.shaped('mekanism:combiner', [
        'aAa',
        'CSC',
        'aAa'
    ], {
        a: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        C: '#forge:cobblestone',
        S: 'mekanism:steel_casing'
    })

    event.shaped('mekanism:precision_sawmill', [
        'aAa',
        'BSB',
        'aAa'
    ], {
        a: 'mekanism:alloy_reinforced',
        A: 'mekanism:advanced_control_circuit',
        B: 'thermal:saw_blade',
        S: 'mekanism:steel_casing'
    })

    event.shaped('mekanism:quantum_entangloporter', [
      'RAR',
      'aTa',
      'RAR'
  ], {
      A: 'mekanism:alloy_atomic',
      a: 'mekanism:advanced_control_circuit',
      T: 'mekanism:teleportation_core',
      R: 'mekanism:ingot_refined_obsidian'
      
  })

    event.recipes.createMechanicalCrafting('kubejs:aluminum_hydroxide_shard', [
      'DDEDD',
      'DEAED',
      'EAAAE',
      'DEAED',
      'DDEDD'
  ], {
      D: 'tetra:pristine_diamond',
      E: 'tetra:pristine_emerald',
      A: 'emendatusenigmatica:aluminum_crystal'
  })

    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused', 'pneumaticcraft:ingot_iron_compressed', 'mekanism:redstone', 10)
    event.recipes.mekanism.metallurgic_infusing('2x mekanism:basic_control_circuit', 'pneumaticcraft:printed_circuit_board', 'mekanism:redstone', 20)
    event.recipes.mekanism.enriching('mekanism:enriched_refined_obsidian', 'mekanism:ingot_refined_obsidian')
    event.recipes.mekanism.enriching('mekanism:enriched_diamond', 'tetra:pristine_diamond')
    event.recipes.createCompacting('emendatusenigmatica:lithium_dust', Fluid.of('mekanism:lithium', 100))
    event.recipes.createMixing(Fluid.of('kubejs:molten_fiberglass', 1000), ['kubejs:limestone_dust', 'immersiveengineering:insulating_glass', 'minecraft:clay_ball']).superheated()
    event.recipes.createMixing('2x electrodynamics:ceramicwet', ['emendatusenigmatica:coke_dust', 'mekanism:enriched_iron', Fluid.of('immersiveengineering:concrete', 250)])
    event.recipes.immersiveengineering.arc_furnace('2x electrodynamics:ceramiccooked', 'electrodynamics:ceramicwet', ['electrodynamics:ceramicwet'])
    event.recipes.mekanism.chemical_infusing({gas: "kubejs:hydroxide", amount: 1}, {gas: "mekanism:hydrogen", amount: 1}, {gas: "mekanism:oxygen", amount: 1})
    event.recipes.mekanism.chemical_infusing({gas: "kubejs:sodium_hydroxide", amount: 1}, {gas: "kubejs:hydroxide", amount: 1}, {gas: "mekanism:sodium", amount: 1})
    event.recipes.mekanism.crushing('7x kubejs:aluminum_hydroxide_chunks', 'kubejs:aluminum_hydroxide_crystal')
    event.recipes.mekanism.enriching('kubejs:aluminum_hydroxide_shard', 'kubejs:aluminum_hydroxide_chunks')
    event.recipes.mekanism.purifying("mekanism:crystal_osmium", "emendatusenigmatica:osmium_ingot", {gas: "mekanism:oxygen", amount: 5})
    event.recipes.mekanism.purifying("emendatusenigmatica:aluminum_crystal", "kubejs:bauxite_dust", {gas: "mekanism:oxygen", amount: 5})
    event.custom({"type":"mekanism:reaction","itemInput":{"count":2,"item":"mekanism:bio_fuel"},"fluidInput":{"amount":10,"fluid":"minecraft:water"},"gasInput":{"amount":100,"gas":"mekanism:hydrogen"},"duration":100,"itemOutput":{"item":"mekanism:substrate"}})
    event.recipes.createMixing(Fluid.of('kubejs:bauxite_slurry', 144), ['kubejs:quicklime_dust', 'kubejs:bauxite_dust']).superheated()
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"kubejs:liquid_sodium_hydroxide"},"gasOutput":{"gas":"kubejs:sodium_hydroxide","amount":1},"gasInput":{"amount":1,"gas":"kubejs:sodium_hydroxide"},"fluidOutput":{"fluid":"kubejs:liquid_sodium_hydroxide","amount":1}})
    event.recipes.createMixing([Fluid.of('kubejs:aluminate_solution', 144), 'kubejs:red_mud', 'kubejs:chilly_core'], [Fluid.of('kubejs:heated_bauxite_slurry', 144), 'kubejs:chilly_core'])

    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:molten_fiberglass",
          "amount": 250
        },
        "item_output": {
          "item": "kubejs:fiberglass_wool",
          "count": 1
        },
        "temperature": {
          "max_temp": 173
        },
        "pressure": 4.0,
        "speed": 0.5,
        "exothermic": true
      })
      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "minecraft:water",
          "amount": 1000
        },
        "fluid_output": {
            "type": "pneumaticcraft:fluid",
            "fluid": "kubejs:cold_water",
            "amount": 1000
          },
        "temperature": {
          "max_temp": 274
        },
        "pressure": 0.1,
        "speed": 0.5,
        "exothermic": true
      })

    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:fiberglass_wool"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "pneumaticcraft:plastic",
          "amount": 100
        },
        "item_output": {
          "item": "kubejs:coated_fiberglass_wool",
          "count": 1
        },
        "temperature": {
          "max_temp": 773
        },
        "pressure": 1.0,
        "speed": 0.5, //:icon:
        "exothermic": false
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:limestone_dust"
        },
        "item_output": {
          "item": "kubejs:quicklime_dust",
          "count": 1
        },
        "temperature": {
          "min_temp": 1273
        },
        "pressure": 2.0,
        "speed": 2,
        "exothermic": false
      })

      event.custom({
        "type": "interactio:item_fluid_transform",
        "inputs": [
          {
            "item": "kubejs:aluminum_hydroxide_shard",
            "count": 1,
          }
        ],
        "fluid": {
          "fluid": "kubejs:aluminate_solution"
        },
        "output": {
          "item": "kubejs:aluminum_hydroxide_crystal",
          "count": 1,
        },
        "consume_fluid": 1
      })

      event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
            "ingredient": {
                "item": "kubejs:aluminum_hydroxide_chunks"
            }
        },
        "fluidInput": {
            "amount": 100,
            "fluid": "mekanism:steam"
        },
        "gasInput": {
            "amount": 10,
            "gas": "mekanism:hydrogen"
        }, 
        "energyRequired": 1000,
        "duration": 60,
        "itemOutput": {
            "item": "kubejs:alumina"
        }
    })
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:cracked_natural_gas",
          "amount": 50
        },
        "temperature": {
          "max_temp": 23
        },
        "results": [
          {
            "fluid": "mekanism:ethene",
            "amount": 15
          },
          {
            "fluid": "mekanism:hydrogen",
            "amount": 20
          },
          {
            "fluid": "kubejs:propylene",
            "amount": 15
          }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:natural_gas",
          "amount": 1000
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "mekanism:steam",
          "amount": 1000
        },
        "fluid_output": {
          "fluid": "kubejs:cracked_natural_gas",
          "amount": 1000
        },
        "pressure": 3.0,
        "time": 15
    })
    
    event.custom({
      "type": "pneumaticcraft:fluid_mixer",
      "input1": {
        "type": "pneumaticcraft:fluid",
        "fluid": "kubejs:bauxite_slurry",
        "amount": 144
      },
      "input2": {
        "type": "pneumaticcraft:fluid",
        "fluid": "kubejs:liquid_sodium_hydroxide",
        "amount": 125
      },
      "fluid_output": {
        "fluid": "kubejs:heated_bauxite_slurry",
        "amount": 144
      },
      "pressure": 2.0,
      "time": 40
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:molten_aluminum",
          "amount": 144
        },
        "item_output": {
          "item": "emendatusenigmatica:aluminum_ingot",
          "count": 1
        },
        "temperature": {
          "max_temp": 173
        },
        "pressure": 4.0,
        "speed": 0.5,
        "exothermic": true
      })
    event.recipes.create.pressing('electrodynamics:platelithium', '#forge:ingots/lithium')
    event.recipes.thermal.press('electrodynamics:platelithium', '#forge:ingots/lithium').energy(4000)
    event.recipes.immersiveengineeringMetalPress('electrodynamics:platelithium', '#forge:ingots/lithium', 'immersiveengineering:mold_plate')
})