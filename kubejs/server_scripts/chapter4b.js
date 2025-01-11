// priority: 0

onEvent('recipes', event => {

    event.remove({id: 'pneumaticcraft:reinforced_stone'})
    event.remove({output: 'pneumaticcraft:pressure_chamber_wall'})
    event.remove({output: 'pneumaticcraft:pressure_tube'})
    event.remove({output: 'pneumaticcraft:pressure_chamber_interface'})
    event.remove({output: 'pneumaticcraft:pressure_chamber_valve'})
    event.remove({output: 'pneumaticcraft:pressure_chamber_glass'})
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
    event.remove({output: 'pneumaticcraft:small_tank'})
    event.remove({output: 'pneumaticcraft:refinery_output'})
    event.remove({output: 'pneumaticcraft:refinery'})
    event.remove({output: 'pneumaticcraft:liquid_compressor'})
    event.remove({output: 'pneumaticcraft:thermopneumatic_processing_plant'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_stone'})
    event.remove({output: 'pneumaticcraft:security_upgrade'})
    event.remove({output: 'pneumaticcraft:speed_upgrade'})
    event.remove({output: 'pneumaticcraft:volume_upgrade'})
    event.remove({output: 'pneumaticcraft:charging_station'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})
    event.remove({output: 'pneumaticcraft:uv_light_box'})
    event.remove({output: 'immersiveengineering:wirecoil_steel'})
    event.remove({output: 'immersiveengineering:furnace_heater'})
    event.remove({output: 'pneumaticcraft:etching_tank'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/capacitor'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/transistor'})
    event.remove({output: 'pneumaticcraft:assembly_drill'})
    event.remove({output: 'pneumaticcraft:assembly_laser'})
    event.remove({output: 'pneumaticcraft:assembly_controller'})
    event.remove({output: 'pneumaticcraft:assembly_platform'})
    event.remove({output: 'pneumaticcraft:assembly_io_unit_import'})
    event.remove({output: 'pneumaticcraft:assembly_io_unit_export'})
    event.remove({output: 'pneumaticcraft:printed_circuit_board'})
    event.remove({output: 'mekanism:steel_casing'})
    event.remove({output: 'immersiveengineering:electron_tube'})
    event.remove({output: 'pneumaticcraft:vacuum_pump'})
    event.remove({output: 'pneumaticcraft:turbine_rotor'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/turbine_blade'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})
    event.remove({output: 'pneumaticcraft:fluid_mixer'})
    event.remove({output: 'pneumaticcraft:assembly_program_drill_laser'})
    event.remove({id: 'pneumaticcraft:assembly/advanced_pressure_tube'})
    event.remove({id: 'pneumaticcraft:assembly/pressure_chamber_valve_assembly/advanced_pressure_tube'})

    event.shaped('8x pneumaticcraft:reinforced_stone', [
        'CCC',
        'CIC',
        'CCC'
    ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        C: 'immersiveengineering:concrete'
    })
    
    event.shaped('8x pneumaticcraft:pressure_tube', [
        '   ',
        'IGI',
        '   '
    ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        G: 'immersiveengineering:insulating_glass'
    })
    
    event.shaped('2x pneumaticcraft:pressure_chamber_wall', [
        'SSS',
        'SHS',
        'SSS'
    ], {
        S: 'pneumaticcraft:reinforced_stone',
        H: 'immersiveengineering:heavy_engineering'
    })
    
    event.shaped('pneumaticcraft:pressure_chamber_interface', [
        ' W ',
        'WOW',
        ' W '
    ], {
        W: 'pneumaticcraft:pressure_chamber_wall',
        O: 'pneumaticcraft:omnidirectional_hopper'
    })
    
    event.shaped('pneumaticcraft:pressure_chamber_valve', [
        ' W ',
        'WOW',
        ' W '
    ], {
        W: 'pneumaticcraft:pressure_chamber_wall',
        O: 'pneumaticcraft:pressure_tube'
    })
    
    event.shaped('2x pneumaticcraft:small_tank', [
        'TCT',
        'CGC',
        'TCT'
    ], {
        T: 'kubejs:tungsten_ingot',
        C: 'pneumaticcraft:ingot_iron_compressed',
        G: 'pneumaticcraft:pressure_chamber_glass'
    })
    
    event.shaped('pneumaticcraft:refinery_output', [
        'SCS',
        'DTD',
        'SCS'
    ], {
        S: 'pneumaticcraft:reinforced_stone',
        C: 'pneumaticcraft:ingot_iron_compressed',
        T: 'pneumaticcraft:small_tank',
        D: 'minecraft:diamond'
    })
    
    event.shaped('pneumaticcraft:refinery', [
        'SCS',
        'TRT',
        'SCS'
    ], {
        S: 'pneumaticcraft:reinforced_stone',
        C: 'pneumaticcraft:ingot_iron_compressed',
        R: 'pneumaticcraft:refinery_output',
        T: 'pneumaticcraft:small_tank'
    })
    
    event.shaped('pneumaticcraft:liquid_compressor', [
        'CCC',
        'PTP',
        'CCC'
    ], {
        P: 'pneumaticcraft:pressure_tube',
        C: 'tetra:combustion_chamber',
        T: 'pneumaticcraft:small_tank'
    })
    
    event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [
        'CSC',
        'TRT',
        'CSC'
    ], {
        S: 'pneumaticcraft:compressed_stone',
        C: 'pneumaticcraft:ingot_iron_compressed',
        R: 'immersiveengineering:heavy_engineering',
        T: 'pneumaticcraft:small_tank'
    })
    
    event.shaped('pneumaticcraft:security_upgrade', [
        'WLW',
        'PUP',
        'WLW'
    ], {
        W: 'tetra:forged_wall',
        L: 'minecraft:lever',
        P: 'pneumaticcraft:pressure_gauge',
        U: 'pneumaticcraft:upgrade_matrix'
    })
    
    event.shaped('pneumaticcraft:speed_upgrade', [
        'WLW',
        'PUP',
        'WLW'
    ], {
        W: 'tetra:forged_wall',
        L: 'minecraft:sugar',
        P: 'pneumaticcraft:glycerol',
        U: 'pneumaticcraft:upgrade_matrix'
    })
    
    event.shaped('pneumaticcraft:volume_upgrade', [
        'WLW',
        'PUP',
        'WLW'
    ], {
        W: 'tetra:forged_wall',
        L: 'pneumaticcraft:air_canister',
        P: 'pneumaticcraft:ingot_iron_compressed',
        U: 'pneumaticcraft:upgrade_matrix'
    })
    
    event.shaped('pneumaticcraft:charging_station', [
        'P  ',
        'SHS',
        'SSS'
    ], {
        P: 'pneumaticcraft:pressure_tube',
        S: 'pneumaticcraft:reinforced_stone',
        H: 'immersiveengineering:heavy_engineering'
    })
    
    event.shaped('pneumaticcraft:uv_light_box', [
        'EEE',
        'RBR',
        'III'
    ], {
        E: 'immersiveengineering:electron_tube',
        R: 'create:refined_radiance',
        B: 'pneumaticcraft:pcb_blueprint',
        I: 'pneumaticcraft:ingot_iron_compressed'
    })
    
    event.shaped('4x immersiveengineering:wirecoil_steel', [
        ' E ',
        'STS',
        ' E '
    ], {
        E: 'immersiveengineering:wire_electrum',
        S: 'immersiveengineering:wire_steel',
        T: 'immersiveengineering:stick_treated'
    })
    
    event.shaped('immersiveengineering:furnace_heater', [
        'PIP',
        'SES',
        'PIP'
    ], {
        P: 'emendatusenigmatica:steel_plate',
        I: 'tetra:vent_plate',
        S: 'kubejs:galvanized_steel_ingot',
        E: 'immersiveengineering:coil_mv'
    })
    
    event.shaped('pneumaticcraft:etching_tank', [
        'SSS',
        'ATA',
        'SSS'
    ], {
        S: 'kubejs:galvanized_steel_ingot',
        T: 'pneumaticcraft:small_tank',
        A: 'pneumaticcraft:etching_acid_bucket'
    })
    
    event.shaped('kubejs:steel_casing_materials', [
        'IHS',
        'OBO',
        'SHI'
    ], {
        S: 'emendatusenigmatica:steel_ingot',
        I: 'pneumaticcraft:ingot_iron_compressed',
        H: 'immersiveengineering:heavy_engineering',
        O: 'emendatusenigmatica:osmium_block',
        B: 'mekanism:cardboard_box'
    })

    event.shaped('pneumaticcraft:vacuum_pump', [
        'GRG',
        'TRT',
        'SLS'
    ], {
        G: 'pneumaticcraft:compressed_iron_gear',
        R: 'pneumaticcraft:turbine_rotor',
        T: 'pneumaticcraft:pressure_tube',
        S: 'pneumaticcraft:compressed_stone',
        L: 'immersiveengineering:heavy_engineering'
    })

    event.shaped('pneumaticcraft:turbine_rotor', [
        ' B ',
        'FGF',
        'BFB'
    ], {
        G: 'pneumaticcraft:compressed_iron_gear',
        B: 'pneumaticcraft:turbine_blade',
        F: 'tetra:forged_bolt'
    })
    event.shaped('pneumaticcraft:fluid_mixer', [
        'ITI',
        'FHF',
        'IBI'
    ], {
        I: '#forge:ingots/compressed_iron',
        H: 'immersiveengineering:heavy_engineering',
        F: 'pneumaticcraft:small_tank',
        B: 'kubejs:tungsten_block',
        T: 'pneumaticcraft:turbine_rotor'
    })

    event.shapeless('pneumaticcraft:pressure_chamber_glass', ['pneumaticcraft:pressure_chamber_wall', "#forge:glass"])

    event.recipes.createMixing(Fluid.of('kubejs:nitro_diesel', 500), [Fluid.of('immersivepetroleum:diesel', 250), Fluid.of('immersiveengineering:biodiesel', 250)])
    event.recipes.createSplashing('kubejs:annealed_copper_ingot', 'kubejs:heated_copper_ingot')
    
    event.recipes.createMechanicalCrafting('pneumaticcraft:assembly_drill', [
        'PNDD',
        'PNDR',
        'PC  ',
        'IIIB'
    ], {
        P: 'pneumaticcraft:plastic',
        N: 'pneumaticcraft:pneumatic_cylinder',
        D: 'tetra:pristine_diamond',
        R: 'emendatusenigmatica:diamond_rod',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:compressed_iron_block'
    })
    
    event.recipes.createMechanicalCrafting('pneumaticcraft:assembly_laser', [
        'PNRR',
        'PNRG',
        'PC  ',
        'IIIB'
    ], {
        P: 'pneumaticcraft:plastic',
        N: 'pneumaticcraft:pneumatic_cylinder',
        G: '#forge:glass/red',
        R: 'create:refined_radiance',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:compressed_iron_block'
    })

    event.recipes.createMechanicalCrafting('pneumaticcraft:assembly_controller', [
        ' PCG',
        ' PCP',
        'TPC ',
        'IIIB'
    ], {
        P: 'pneumaticcraft:plastic',
        G: '#forge:glass_panes',
        T: 'pneumaticcraft:pressure_tube',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:compressed_iron_block'
    })
    
    event.recipes.createMechanicalCrafting('pneumaticcraft:assembly_platform', [
        ' PC ',
        'IIIB'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:compressed_iron_block'
    })
    
    event.recipes.createMechanicalCrafting('pneumaticcraft:assembly_io_unit_import', [
        ' PNO',
        ' PN ',
        ' PC ',
        'IIIB'
    ], {
        P: 'pneumaticcraft:plastic',
        N: 'pneumaticcraft:pneumatic_cylinder',
        O: 'pneumaticcraft:omnidirectional_hopper',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:compressed_iron_block'
    })
    
    event.recipes.createMechanicalCrafting('pneumaticcraft:assembly_io_unit_export', [
        'ONP ',
        ' NP ',
        ' CP ',
        'BIII'
    ], {
        P: 'pneumaticcraft:plastic',
        N: 'pneumaticcraft:pneumatic_cylinder',
        O: 'pneumaticcraft:omnidirectional_hopper',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:compressed_iron_block'
    })
    
    event.recipes.createMechanicalCrafting('pneumaticcraft:printed_circuit_board', [
        '  C  ',
        ' GNG ',
        'TNUNT',
        ' GNG ',
        '  C  '
    ], {
        C: 'pneumaticcraft:capacitor',
        T: 'pneumaticcraft:transistor',
        G: 'minecraft:gold_nugget',
        N: 'emendatusenigmatica:copper_nugget',
        U: 'pneumaticcraft:unassembled_pcb'
    })
    
    
    event.custom({
            "type": "interactio:item_explode",
            "inputs": [
              {
                "item": "kubejs:tungsten_ingot",
                "count": 1
              },
              {
                "item": "kubejs:galvanized_steel_ingot",
                "count": 1
              }
            ],
            "output": {
              "entries": [
                {
                  "result": {
                    "item": "pneumaticcraft:ingot_iron_compressed",
                    "count": 1
                  },
                  "weight": 4
                },
              ],
              "empty_weight": 1,
              "rolls": 1
            }
        })
    event.custom({
            "type": "pneumaticcraft:refinery",
            "input": {
              "type": "pneumaticcraft:fluid",
              "fluid": "kubejs:nitro_diesel",
              "amount": 8
            },
            "temperature": {
              "min_temp": 373
            },
            "results": [
              {
                "fluid": "pneumaticcraft:lpg",
                "amount": 2
              },
              {
                "fluid": "pneumaticcraft:gasoline",
                "amount": 3
              },
              {
                "fluid": "pneumaticcraft:kerosene",
                "amount": 3
              }
            ]
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "item": "kubejs:tungsten_ingot"
          },
          {
            "item": "kubejs:galvanized_steel_ingot"
          }
        ],
        "pressure": 2.0,
        "results": [
          {
            "item": "pneumaticcraft:ingot_iron_compressed",
            "count": 2
          }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "item": "pneumaticcraft:reinforced_stone"
          }
        ],
        "pressure": 1.0,
        "results": [
          {
            "item": "pneumaticcraft:compressed_stone",
            "count": 2
          }
        ]
    })
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "emendatusenigmatica:copper_plate",
          "count": 2
        },
        {
          "item": "emendatusenigmatica:nickel_plate",
        },
        {
          "item": "pneumaticcraft:plastic"
        },
        {
          "item": "immersiveengineering:circuit_board"
        },
      ],
      "pressure": 1.5,
      "results": [
        {
          "item": "pneumaticcraft:empty_pcb",
          "count": 1
        }
      ]
  })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "emendatusenigmatica:tin_plate",
            "count": 1
          },
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "emendatusenigmatica:gold_rod",
            "count": 1
          },
          {
            "item": "pneumaticcraft:plastic"
          }
        ],
        "pressure": 1.0,
        "results": [
          {
            "item": "pneumaticcraft:capacitor",
            "count": 1
          }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "type": "pneumaticcraft:stacked_item",
            "item": "emendatusenigmatica:coal_dust",
            "count": 1
          },
          {
            
            "item": "emendatusenigmatica:gold_rod",
            "count": 2
          },
          {
            "item": "pneumaticcraft:plastic"
          },
          {
            "item": "emendatusenigmatica:silicon_gem"
          },
        ],
        "pressure": 1.0,
        "results": [
          {
            "item": "pneumaticcraft:transistor",
            "count": 1
          }
        ]
    })
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {"item": "immersiveengineering:insulating_glass"},
        {"item": "emendatusenigmatica:nickel_plate"},
        {"item": "emendatusenigmatica:steel_plate"},
        {"item": "immersiveengineering:wire_copper"}
      ],
      "pressure": -0.9,
      "results": [
        {
          "item": "immersiveengineering:electron_tube",
          "count": 3
        }
      ]
    })
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {"item": "emendatusenigmatica:iron_rod"},
        {"item": "emendatusenigmatica:copper_plate"},
        {"item": "emendatusenigmatica:steel_plate"},
        {"item": "pneumaticcraft:plastic"}
      ],
      "pressure": 2.0,
      "results": [
        {
          "item": "pneumaticcraft:turbine_blade",
          "count": 1
        }
      ]
    })
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "item": "kubejs:steel_casing_materials",
          "count": 1
        },
        "result": {
          "item": "mekanism:steel_casing",
          "count": 1
        },
        "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:advanced_control_circuit_materials",
        "count": 1
      },
      "result": {
        "item": "mekanism:advanced_control_circuit",
        "count": 1
      },
      "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:compressed_steel_casing_materials",
        "count": 1
      },
      "result": {
        "item": "mekanism:steel_casing",
        "count": 8
      },
      "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:compressed_ultimate_control_circuit_materials",
        "count": 1
      },
      "result": {
        "item": "mekanism:ultimate_control_circuit",
        "count": 8
      },
      "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:compressed_elite_control_circuit_materials",
        "count": 1
      },
      "result": {
        "item": "mekanism:elite_control_circuit",
        "count": 8
      },
      "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:compressed_advanced_control_circuit_materials",
        "count": 1
      },
      "result": {
        "item": "mekanism:advanced_control_circuit",
        "count": 8
      },
      "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:thermo_plant",
      "item_input": {
        "tag": "forge:ingots/copper"
      },
      "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "fluid": "mekanism:oxygen",
        "amount": 250
      },
      "item_output": {
        "item": "kubejs:heated_copper_ingot",
        "count": 1
      },
      "temperature": {
        "min_temp": 923
      },
      "speed": 0.1,
      "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "tag": "forge:storage_blocks/compressed_iron",
          "count": 1
        },
        "result": {
          "item": "pneumaticcraft:advanced_pressure_tube",
          "count": 8
        },
        "program": "drill"
      })
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "immersivepetroleum:diesel",
          "amount": 500
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "immersiveengineering:biodiesel",
          "amount": 500
        },
        "fluid_output": {
            "fluid": "kubejs:nitro_diesel",
            "amount": 1000
        },
        "pressure": 2.0,
        "time": 20
    })
    
    })