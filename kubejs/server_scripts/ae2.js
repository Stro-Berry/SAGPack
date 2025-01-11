// priority: 0

onEvent('recipes', event => {

    event.remove({id: 'appliedenergistics2:network/cables/glass_fluix'})
    event.remove({id: 'appliedenergistics2:inscriber/calculation_processor'})
    event.remove({id: 'appliedenergistics2:inscriber/logic_processor'})
    event.remove({id: 'appliedenergistics2:inscriber/engineering_processor'})
    event.remove({id: 'appliedenergistics2:network/blocks/interfaces_inferface'})
    event.remove({id: 'appliedenergistics2:network/blocks/fluid/interfaces_inferface'})
    event.remove({output: 'appliedenergistics2:1k_cell_component'})
    event.remove({output: 'appliedenergistics2:4k_cell_component'})
    event.remove({output: 'appliedenergistics2:16k_cell_component'})
    event.remove({output: 'appliedenergistics2:64k_cell_component'})
    event.remove({output: 'appliedenergistics2:quartz_vibrant_glass'})
    event.remove({output: 'appliedenergistics2:condenser'})
    event.remove({output: 'appliedenergistics2:blank_pattern'})
    event.remove({output: 'advgenerators:iron_wiring'})
    event.remove({output: 'appliedenergistics2:empty_storage_cell'})
    event.remove({output: 'appliedenergistics2:quartz_glass'})
    event.remove({output: 'appliedenergistics2:drive'})
    event.remove({output: 'appliedenergistics2:semi_dark_monitor'})
    event.remove({output: 'appliedenergistics2:terminal'})
    event.remove({output: 'appliedenergistics2:crafting_terminal'})
    event.remove({output: 'appliedenergistics2:energy_acceptor'})
    event.remove({output: 'appliedenergistics2:quartz_fiber'})
    event.remove({output: 'appliedenergistics2:annihilation_core'})
    event.remove({output: 'appliedenergistics2:formation_core'})
    event.remove({output: 'appliedenergistics2:interface_terminal'})
    event.remove({output: 'appliedenergistics2:fluid_terminal'})
    event.remove({output: 'appliedenergistics2:pattern_terminal'})
    event.remove({output: 'appliedenergistics2:crafting_terminal'})
    event.remove({output: 'appliedenergistics2:terminal'})
    event.remove({output: 'appliedenergistics2:basic_card'})
    event.remove({output: 'appliedenergistics2:advanced_card'})
    event.remove({output: 'appliedenergistics2:security_station'})
    event.remove({output: 'appliedenergistics2:wireless_access_point'})
    event.remove({output: 'appliedenergistics2:wireless_receiver'})
    event.remove({output: 'appliedenergistics2:interface'})

    event.shaped('appliedenergistics2:drive', [
        'LPL',
        'CIC',
        'LPL'
    ], {
        I: 'tetra:vent_plate',
        C: 'pneumaticcraft:printed_circuit_board',
        L: 'immersiveengineering:sheetmetal_lead',
        P: 'pneumaticcraft:plastic'
    })

    event.shaped('appliedenergistics2:4k_cell_component', [
        'PPP',
        'OQO',
        'COC'
    ], {
        O: 'appliedenergistics2:1k_cell_component',
        C: 'advgenerators:iron_wiring',
        Q: 'appliedenergistics2:quartz_glass',
        P: 'pneumaticcraft:plastic'
    })

    event.shaped('appliedenergistics2:semi_dark_monitor', [
      'VPQ',
      'VFQ',
      'VPQ'
    ], {
      Q: 'appliedenergistics2:quartz_glass',
      P: 'thermal:netherite_plate',
      F: 'appliedenergistics2:fluix_block',
      V: 'immersiveengineering:electron_tube'
    })

    event.shaped('appliedenergistics2:terminal', [
      'SWS',
      'CMC',
      'SWS'
    ], {
      W: 'advgenerators:iron_wiring',
      S: 'tetra:planar_stabilizer',
      C: 'pneumaticcraft:printed_circuit_board',
      M: '#appliedenergistics2:illuminated_panel'
    })

    event.shaped('appliedenergistics2:crafting_terminal', [
      'WCW',
      'FTF',
      'WEW'
    ], {
      W: 'advgenerators:iron_wiring',
      F: 'appliedenergistics2:fluix_block',
      C: 'pneumaticcraft:printed_circuit_board',
      T: 'appliedenergistics2:terminal',
      E: 'immersiveengineering:craftingtable'
    })

    event.recipes.createMechanicalCrafting('appliedenergistics2:energy_acceptor', [
      'PCICP',
      'CHFHC',
      'IFQFI',
      'CHFHC',
      'PCICP'
    ], {
      P: 'pneumaticcraft:plastic',
      C: 'pneumaticcraft:printed_circuit_board',
      I: 'tetra:vent_plate',
      H: 'immersiveengineering:heavy_engineering',
      F: 'appliedenergistics2:fluix_block',
      Q: 'appliedenergistics2:quartz_block'
    })

    const colors = ['red','orange','yellow','lime','green','light_blue','blue','cyan','purple','magenta','pink','white','light_gray','gray','black','brown']

    colors.forEach(c => {
      event.remove({output: 'appliedenergistics2:'+c+'_glass_cable'})
      event.shapeless('appliedenergistics2:'+c+'_glass_cable','appliedenergistics2:fluix_glass_cable')
    })

    event.recipes.createMixing(Fluid.of('emendatusenigmatica:molten_certus_quartz', 144), 'appliedenergistics2:certus_quartz_crystal').heated()
    event.recipes.mekanism.sawing("2x appliedenergistics2:quartz_fiber", "appliedenergistics2:quartz_glass")
    event.recipes.thermal.sawmill("2x appliedenergistics2:quartz_fiber", "appliedenergistics2:quartz_glass")
    event.recipes.thermal.smelter("2x appliedenergistics2:quartz_glass", ["mekanism:structural_glass", "#appliedenergistics2:crystals/certus"])
    event.recipes.thermal.smelter("appliedenergistics2:quartz_vibrant_glass", ["appliedenergistics2:quartz_glass", "thermal:lumium_glass"])

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "emendatusenigmatica:invar_rod",
            "count": 4
          },
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "appliedenergistics2:fluix_crystal",
            "count": 2
          },
          {
            "item": "appliedenergistics2:quartz_fiber"
          },
          {
            "item": "appliedenergistics2:quartz_glass"
          }
        ],
        "pressure": -0.9,
        "results": [
          {
            "item": "appliedenergistics2:fluix_glass_cable",
            "count": 4
          }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "advgenerators:iron_wiring",
            "count": 2
          },
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "appliedenergistics2:certus_quartz_crystal",
            "count": 4
          },
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "tetra:forged_bolt",
            "count": 2
          },
          {
            "item": "pneumaticcraft:advanced_pcb"
          }
        ],
        "pressure": -0.9,
        "results": [
          {
            "item": "appliedenergistics2:1k_cell_component",
            "count": 1
          }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "emendatusenigmatica:steel_plate",
            "count": 2
          },
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "emendatusenigmatica:tin_rod",
            "count": 4
          },
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "tetra:forged_mesh",
            "count": 2
          },
          {
            "item": "appliedenergistics2:quartz_glass"
          }
        ],
        "pressure": 2,
        "results": [
          {
            "item": "appliedenergistics2:empty_storage_cell",
            "count": 1
          }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "immersiveengineering:wirecoil_steel"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:molten_redstone",
          "amount": 200
        },
        "item_output": {
          "item": "advgenerators:iron_wiring",
          "count": 2
        },
        "temperature": {
          "min_temp": 523
        },
        "pressure": 2,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "appliedenergistics2:certus_quartz_crystal"
        },
        "fluid_output": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:molten_certus_quartz",
          "amount": 144
        },
        "temperature": {
          "min_temp": 523
        },
        "pressure": 2,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "emendatusenigmatica:copper_ingot"
        },
        "fluid_output": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:molten_copper",
          "amount": 144
        },
        "temperature": {
          "min_temp": 523
        },
        "pressure": 2,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "minecraft:iron_ingot"
        },
        "fluid_output": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:molten_iron",
          "amount": 144
        },
        "temperature": {
          "min_temp": 523
        },
        "pressure": 2,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "minecraft:redstone"
        },
        "fluid_output": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:molten_redstone",
          "amount": 100
        },
        "temperature": {
          "min_temp": 523
        },
        "pressure": 2,
        "exothermic": false
    })
    event.custom({
      "type": "pneumaticcraft:thermo_plant",
      "item_input": {
        "item": "immersiveengineering:insulating_glass"
      },
      "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "fluid": "emendatusenigmatica:molten_certus_quartz",
        "amount": 144
      },
      "item_output": {
        "item": "appliedenergistics2:quartz_glass",
        "count": 1
      },
      "temperature": {
        "min_temp": 773
      },
      "pressure": 1,
      "exothermic": false
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "appliedenergistics2:quartz_glass",
        "count": 1
      },
      "result": {
        "item": "appliedenergistics2:quartz_fiber",
        "count": 2
      },
      "program": "laser"
  })

  
})