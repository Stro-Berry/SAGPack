onEvent("recipes", event => {

    const removeOutput = [
        'futurepack:industrial_furnace',
        'futurepack:part_press',
        'futurepack:parts_iron',
        'futurepack:parts_gold',
        'futurepack:parts_diamond',
        'futurepack:parts_quartz',
        'futurepack:parts_neon',
        'futurepack:parts_copper',
        'futurepack:coil_core',
        'futurepack:coil_copper',
        'futurepack:coil_iron',
        'futurepack:coil_gold',
        'futurepack:coil_neon',
        'futurepack:coil_quantanium',
        'futurepack:wire_normal',
        'futurepack:ingot_silicon',
        'futurepack:core_a1',
        'futurepack:ram_a',
        'futurepack:pipe_normal',
        'futurepack:core_p2',
        'futurepack:ram_p',
        'futurepack:wire_support',
        'futurepack:wire_super',
        'futurepack:pipe_support',
        'futurepack:pipe_neon',
        'futurepack:thruster_white_light_blue',
        'futurepack:thruster_white_lime',
        'futurepack:thruster_white_yellow',
        'futurepack:thruster_white_orange',
        'futurepack:thruster_white_purple',
        'futurepack:thruster_light_gray_light_blue',
        'futurepack:thruster_light_gray_lime',
        'futurepack:thruster_light_gray_yellow',
        'futurepack:thruster_light_gray_orange',
        'futurepack:thruster_light_gray_purple',
        'futurepack:thruster_black_light_blue',
        'futurepack:thruster_black_lime',
        'futurepack:thruster_black_yellow',
        'futurepack:thruster_black_orange',
        'futurepack:thruster_black_purple',
        'futurepack:extern_cooler',
        'futurepack:battery_n',
        'futurepack:battery_l',
        'futuerpack:battery_neon',
        'futurepack:laserdiode',
        'futurepack:display',
        'futurepack:fibers',
        'futurepack:chemicals_b',
        'futurepack:fuel_cell',
        'electrodynamics:drillheadtitanium',
        'futurepack:energy_cell',
        'futurepack:compact_energy_cell',
        'futurepack:crystal_energy_cell',
        'futurepack:chemicals_a',
        'futurepack:maschineboard',
        'futurepack:double_maschineboard',
        'futurepack:telescope',
        'futurepack:ftl_drive',
        'futurepack:teleporter',
        'futurepack:water_cooler',
        'futurepack:t0_generator',
        'futurepack:lack_tank_empty',
        'futurepack:drone_engine',
        'futurepack:quartz_glass'
    ]
    removeOutput.forEach(recipe => {
        event.remove({output: recipe})
    })
    event.remove({id: 'futurepack:erz_blocke_4'})
    event.remove({id: 'futurepack:metal_gitter_block_0'})
    event.remove({id: 'futurepack:erz_blocke_9'})
    event.remove({id: 'futurepack:normalbattery_0'})
    event.remove({id: 'futurepack:largebattery_0'})
    event.remove({id: 'futurepack:neonbattery_0'})
    event.remove({id: 'futurepack:energycell_0'})
    event.remove({id: 'futurepack:compactenergycell_0'})

    const coloredMachines = [
        'futurepack:neon_furnace',
        'futurepack:industrial_neon_furnace',
        'futurepack:zentrifuge',
        'futurepack:board_computer',
        'futurepack:assembly_table',
        'futurepack:crusher',
        'futurepack:advanced_board_computer'
    ]
    coloredMachines.forEach(id => {
    event.remove({output: `${id}_white`})
    event.remove({output: `${id}_gray`})
    event.remove({output: `${id}_black`})
    event.shapeless(`${id}_gray`, `${id}_white`)
    event.shapeless(`${id}_black`, `${id}_gray`)
    event.shapeless(`${id}_white`, `${id}_black`)
    })
    event.shaped('4x futurepack:crystal_neon', [
        'MDM',
        'CRC',
        'MDM',
    ], {
        M: 'botania:mana_diamond',
        D: 'emendatusenigmatica:diamond_crystal',
        R: 'astralsorcery:resonating_gem',
        C: 'emendatusenigmatica:charged_certus_quartz_crystal'
    })
    event.shaped('futurepack:core_a1', [
        'NSN',
        'SCS',
        'NSN',
    ], {
        N: 'futurepack:coil_neon',
        S: 'futurepack:ingot_silicon',
        C: 'electrodynamics:circuitultimate'
    })
    event.shaped('futurepack:ram_a', [
        'QCQ',
        'SIS',
        'QCQ',
    ], {
        Q: 'futurepack:parts_quartz',
        S: 'futurepack:ingot_silicon',
        I: 'futurepack:coil_iron',
        C: 'futurepack:coil_copper'
    })
    event.shaped('8x futurepack:pipe_normal', [
        'AAA',
        'ENE',
        'AAA',
    ], {
        A: '#forge:plates/aluminum',
        E: 'thermal:enderium_glass',
        N: 'futurepack:ingot_neon'
    })
    event.shaped('kubejs:part_die', [
        ' A ',
        'APA',
        ' A ',
    ], {
        A: 'kubejs:dark_matter_alloy',
        P: 'futurepack:ingot_neon'
    })
    event.shaped('8x futurepack:wire_support', [
        'WWW',
        'WCW',
        'WWW',
    ], {
        W: 'futurepack:wire_normal',
        C: 'futurepack:coil_gold'
    })
    event.shaped('8x futurepack:pipe_support', [
        'WWW',
        'WCW',
        'WWW',
    ], {
        W: 'futurepack:pipe_normal',
        C: 'futurepack:coil_gold'
    })
    event.shaped('8x futurepack:pipe_neon', [
        'WWW',
        'WCW',
        'WWW',
    ], {
        W: 'futurepack:pipe_normal',
        C: 'futurepack:ingot_neon'
    })
    event.shaped('8x futurepack:wire_super', [
        'WWW',
        'WCW',
        'WWW',
    ], {
        W: 'futurepack:wire_normal',
        C: 'futurepack:coil_neon'
    })
    event.shaped('8x futurepack:wire_normal', [
        'AAA',
        'SNS',
        'AAA',
    ], {
        A: '#forge:plates/aluminum',
        S: 'electrodynamics:wiresuperconductive',
        N: 'futurepack:ingot_neon'
    })
    event.shaped('8x futurepack:metal_glass', [
        'BAB',
        'AQA',
        'BAB',
    ], {
        B: 'futurepack:metal_block',
        A: 'electrodynamics:glassaluminum',
        Q: 'futurepack:quartz_glass'
    })
    event.shaped('futurepack:battery_n', [
        ' C ',
        'MBM',
        'MQM',
    ], {
        C: 'futurepack:coil_copper',
        M: 'futurepack:composite_metal',
        Q: 'futurepack:parts_neon',
        B: 'electrodynamics:lithiumbattery'
    })
    event.shaped('futurepack:battery_l', [
        'ACA',
        'RBR',
        'ARA',
    ], {
        A: 'futurepack:crystal_alutin',
        R: 'futurepack:ingot_retium',
        C: 'futurepack:coil_neon',
        B: 'futurepack:battery_n'
    })
    event.shaped('8x futurepack:metal_block', [
        'CVC',
        'VBV',
        'CVC',
    ], {
        C: 'futurepack:composite_metal',
        V: '#forge:plates/vanadiumsteel',
        B: '#forge:storage_blocks/compressed_iron'
    })    
    event.shaped('8x futurepack:metal_block_gitter', [
        'CAC',
        'AFA',
        'CAC',
    ], {
        C: 'futurepack:composite_metal',
        A: 'immersiveengineering:alu_scaffolding_standard',
        F: 'tetra:forged_mesh'
    })
    event.shaped('2x futurepack:metal_block_ventilation', [
        'BGB',
        'GTG',
        'BGB',
    ], {
        B: 'futurepack:metal_block',
        G: 'futurepack:metal_gitter_pane',
        T: 'pneumaticcraft:turbine_rotor'
    })
    event.shaped('futurepack:battery_neon', [
        'PCP',
        'MBM',
        'PCP',
    ], {
        P: 'kubejs:basic_plating',
        M: 'futurepack:ingot_magnet',
        C: 'futurepack:coil_neon',
        B: 'futurepack:maschineboard'
    })
    event.shaped('futurepack:fluid_pump', [
        'MCM',
        'TBT',
        'MCM',
    ], {
        M: 'futurepack:composite_metal',
        T: 'futurepack:lack_tank_empty',
        C: 'futurepack:coil_neon',
        B: 'futurepack:maschineboard'
    })
    event.shaped('electrodynamics:drillheadtitanium', [
        ' C ',
        'CDC',
        'TTT',
    ], {
        C: '#forge:plates/titaniumcarbide',
        D: 'pneumaticcraft:drill_bit_netherite',
        T: '#forge:ingots/titanium'
    })
    event.shaped('futurepack:lack_tank_empty', [
        ' R ',
        'DLD',
        'DLD',
    ], {
        R: 'astralsorcery:resonating_gem',
        D: 'kubejs:dark_matter_alloy',
        L: 'astralsorcery:glass_lens'
    })
    event.shapeless('futurepack:thruster_white_lime', ['futurepack:thruster_white_light_blue', '#forge:dyes/lime'])
    event.shapeless('futurepack:thruster_white_yellow', ['futurepack:thruster_white_light_blue', '#forge:dyes/yellow'])
    event.shapeless('futurepack:thruster_white_orange', ['futurepack:thruster_white_light_blue', '#forge:dyes/orange'])
    event.shapeless('futurepack:thruster_white_purple', ['futurepack:thruster_white_light_blue', '#forge:dyes/purple'])

    event.recipes.thermal.pulverizer('futurepack:cobblestone_m', 'futurepack:gravel_m')
    event.recipes.thermal.pulverizer('futurepack:gravel_m', 'futurepack:sand_m')
    event.recipes.thermal.pulverizer('futurepack:sandstone_m', '4x futurepack:sand_m')
    event.recipes.thermal.insolator(['6x futurepack:log_mushroom', Item.of('futurepack:sapling_mushroom').withChance(1.1)], 'futurepack:sapling_mushroom').water(2000)
    event.recipes.thermal.insolator(['6x futurepack:log_tyros', Item.of('futurepack:sapling_tyros').withChance(1.1)], 'futurepack:sapling_tyros').water(2000)
    event.recipes.thermal.press('2x futurepack:parts_copper', ['kubejs:annealed_copper_block', 'kubejs:part_die']).energy(6400)
    event.recipes.thermal.press('2x futurepack:parts_iron', ['#forge:storage_blocks/compressed_iron', 'kubejs:part_die']).energy(6400)
    event.recipes.thermal.press('2x futurepack:parts_gold', ['kubejs:pristine_gold_block', 'kubejs:part_die']).energy(6400)
    event.recipes.thermal.press('2x futurepack:parts_quartz', ['emendatusenigmatica:quartz_crystal', 'kubejs:part_die']).energy(6400)
    event.recipes.thermal.press('2x futurepack:parts_neon', ['futurepack:ingot_neon', 'kubejs:part_die']).energy(6400)
    event.recipes.thermal.press('2x futurepack:parts_diamond', ['botania:mana_diamond_block', 'kubejs:part_die']).energy(6400)

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
          "ingredient": {
            "item": "kubejs:ketone_catalyst"
          }
        },
        "fluidInput": {
          "amount": 100,
          "fluid": "mekanism:oxygen"
        },
        "gasInput": {
          "amount": 100,
          "gas": "mekanism:hydrogen"
        },
        "energyRequired": 4000,
        "duration": 200,
        "itemOutput": {
          "item": "kubejs:ketone_catalyst",
        },
        "gasOutput": {
          "gas": "kubejs:hydrogen_peroxide",
          "amount": 100
        }
      })

      event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
          "ingredient": {
            "item": "kubejs:ketone_catalyst"
          }
        },
        "fluidInput": {
          "amount": 200,
          "fluid": "kubejs:liquid_ammonia"
        },
        "gasInput": {
          "amount": 100,
          "gas": "kubejs:hydrogen_peroxide"
        },
        "energyRequired": 4000,
        "duration": 200,
        "itemOutput": {
          "item": "kubejs:ketone_catalyst",
        },
        "gasOutput": {
          "gas": "kubejs:hydrazine",
          "amount": 100
        }
      })

      event.recipes.thermal.crucible(Fluid.of('kubejs:molten_ilmenite_carbon', 144), 'kubejs:ilmenite_carbon_mixture').energy(15000)

      event.custom({
        "type": "mekanism:dissolution",
        "itemInput": {
          "amount": 2,
          "ingredient": {
            "item": "kubejs:iodine"
          }
        },
        "gasInput": {
          "amount": 2,
          "gas": "kubejs:hydrazine"
        },
        "output": {
          "gas": "kubejs:hydrogen_iodide",
          "amount": 500,
          "chemicalType": "gas"
        }
      })

      event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
          "ingredient": {
            "item": "kubejs:aluminum_hydroxide_chunks"
          }
        },
        "fluidInput": {
          "amount": 200,
          "fluid": "kubejs:iodane"
        },
        "gasInput": {
          "amount": 50,
          "gas": "mekanism:hydrogen"
        },
        "energyRequired": 4000,
        "duration": 200,
        "itemOutput": {
          "item": "kubejs:aluminum_iodide",
        }
      })

      event.recipes.thermal.bottler('kubejs:acidic_titanium_salt', [Fluid.of('kubejs:hydrochloric_acid', 1000), 'kubejs:titanium_salt'])

      event.custom({
        "type" : "electrodynamics:chemical_crystallizer_recipe",
        
        "fluid_input":{
            "fluid":"kubejs:ammonium_nitrate_solution",
            "amount": 1000
        },
        "item_output":{
            "item":"kubejs:ammonium_nitrate_dust",
            "count": 1
        }
    })

      const colors = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    colors.forEach(color => {
        event.custom({
            "type": "mekanism:painting",
            "itemInput": {
              "ingredient": {
                "item": "futurepack:metal_glass"
              }
            },
            "chemicalInput": {
              "amount": 64,
              "pigment": `mekanism:${color}`
            },
            "output": {
              "item": `futurepack:color_glass_${color}`
            }
          })
          event.custom({
            "type": "mekanism:painting",
            "itemInput": {
              "ingredient": {
                "item": "futurepack:metal_block"
              }
            },
            "chemicalInput": {
              "amount": 64,
              "pigment": `mekanism:${color}`
            },
            "output": {
              "item": `futurepack:color_iron_${color}`
            }
          })
          event.custom({
            "type": "mekanism:painting",
            "itemInput": {
              "ingredient": {
                "item": "futurepack:metal_gitter_pane"
              }
            },
            "chemicalInput": {
              "amount": 32,
              "pigment": `mekanism:${color}`
            },
            "output": {
              "item": `futurepack:color_gitter_pane_${color}`
            }
          })
          event.custom({
            "type": "mekanism:painting",
            "itemInput": {
              "ingredient": {
                "item": "futurepack:metal_block_ventilation"
              }
            },
            "chemicalInput": {
              "amount": 64,
              "pigment": `mekanism:${color}`
            },
            "output": {
              "item": `futurepack:color_luftung_${color}`
            }
          })
        })
    
    
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   A   ",
          "  ABA  ",
          "  ABA  ",
          " ACDCA ",
          " AEFEA ",
          " AGGGA ",
          "  HHH  "
        ],
        "key": {
          "A": {
            "item": "kubejs:basic_plating"
          },
          "B": {
            "item": "extrabotany:orichalcos"
          },
          "C": {
            "item": "futurepack:coil_neon"
          },
          "D": {
            "item": "kubejs:dark_matter_frame"
          },
          "E": {
            "item": "futurepack:ram_a"
          },
          "F": {
            "item": "futurepack:core_a1"
          },
          "G": {
            "item": "bloodmagic:reagentteleposition"
          },
          "H": {
            "item": "kubejs:basic_thruster"
          }
        },
        "result": {
          "item": "kubejs:basic_rocket"
        }
      }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              " ABA ",
              " ACA ",
              " ADA ",
              " AEA ",
              "AFFFA"
            ],
            "key": {
              "A": {"item": "kubejs:basic_plating",
              },
              "B": {"item": "kubejs:dark_matter_alloy_block",
              },
              "C": {"item": "electrodynamics:circuitultimate"
              },
              "D": {"item": "botania:natura_pylon"
              },
              "E": {"item": "futurepack:lack_tank_empty"
              },
              "F": {"item": "kubejs:flaming_essence"
              }
            },
            "result": {
              "item": "kubejs:basic_thruster"
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ABBBA",
              "CDEDC",
              "FDGDF",
              "CDHDC",
              "ABBBA"
            ],
            "key": {
              "A": {
                "item": "futurepack:ingot_retium"
              },
              "B": {
                "item": "kubejs:flaming_essence"
              },
              "C": {
                "item": "futurepack:coil_iron"
              },
              "D": {
                "item": "electrodynamics:electricfurnace"
              },
              "E": {
                "item": "futurepack:lack_tank_empty"
              },
              "F": {
                "item": "futurepack:coil_gold"
              },
              "G": {
                "item": "kubejs:dark_matter_frame"
              },
              "H": {
                "item": "futurepack:maschineboard"
              }
            },
            "result": {
              "item": "futurepack:neon_furnace_white"
            }
          }
    )
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEFEC",
          "BDGDB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "item": "kubejs:basic_plating",
            
          },
          "B": {
            "item": "futurepack:ingot_retium"
          },
          "C": {
            "item": "futurepack:lack_tank_empty"
          },
          "D": {
            "item": "futurepack:block_crystal_alutin"
          },
          "E": {
            "item": "kubejs:interference_essence"
          },
          "F": {
            "item": "kubejs:dark_matter_frame"
          },
          "G": {
            "item": "futurepack:maschineboard"
          }
        },
        "result": {
          "item": "futurepack:zentrifuge_white"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDDDB",
          "CDEDC",
          "BDDDB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "item": "futurepack:coil_neon"
          },
          "B": {
            "item": "electrodynamics:circuitultimate"
          },
          "C": {
            "item": "kubejs:superconductive_block"
          },
          "D": {
            "item": "futurepack:ingot_silicon"
          },
          "E": {
            "item": "futurepack:block_compressed_retium"
          }
        },
        "result": {
          "item": "futurepack:maschineboard"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABAA",
          "ACDCA",
          "BDEDB",
          "ACDCA",
          "AABAA"
        ],
        "key": {
          "A": {
            "item": "kubejs:basic_plating",
            
          },
          "B": {
            "item": "pneumaticcraft:drill_bit_netherite"
          },
          "C": {
            "item": "bloodmagic:reagentfastminer"
          },
          "D": {
            "item": "electrodynamics:motor"
          },
          "E": {
            "item": "futurepack:coil_neon"
          }
        },
        "result": {
          "item": "kubejs:basic_crystal_excavation_unit"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDCBA",
          "BEEFEEB",
          "CEGHGEC",
          "DFHIHFD",
          "CEGHGEC",
          "BEEFEEB",
          "ABCDCBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:crystaltine_block"
          },
          "B": {
            "item": "futurepack:ingot_retium"
          },
          "C": {
            "item": "futurepack:block_crystal_alutin"
          },
          "D": {
            "item": "kubejs:void_essence"
          },
          "E": {
            "item": "futurepack:ingot_bitripentium"
          },
          "F": {
            "item": "futurepack:ram_p"
          },
          "G": {
            "item": "futurepack:core_p2"
          },
          "H": {
            "item": "futurepack:maschineboard"
          },
          "I": {
            "item": "kubejs:dark_matter_frame"
          }
        },
        "result": {
          "item": "futurepack:board_computer_white"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AB     ",
          "BCB    ",
          " BDB   ",
          "  BEF  ",
          "   FGF ",
          "    FH ",
          "      H"
        ],
        "key": {
          "A": {
            "item": "industrialforegoing:laser_lens3"
          },
          "B": {
            "item": "kubejs:basic_plating",
            
          },
          "C": {
            "item": "astralsorcery:colored_lens_spectral"
          },
          "D": {
            "item": "futurepack:ingot_bitripentium"
          },
          "E": {
            "item": "astralsorcery:hand_telescope"
          },
          "F": {
            "item": "futurepack:ingot_retium"
          },
          "G": {
            "item": "futurepack:chip_ai",
          },
          "H": {
            "item": "astralsorcery:infused_wood"
          }
        },
        "result": {
          "item": "futurepack:telescope"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "ABCBD",
          "AEFEG",
          "ABCBD",
          "AAAAA"
        ],
        "key": {
          "A": {
            "item": "futurepack:ceramic"
          },
          "B": {
            "item": "futurepack:coil_neon"
          },
          "C": {
            "item": "futurepack:maschineboard"
          },
          "D": {
            "item": "kubejs:basic_thruster",
            
          },
          "E": {
            "item": "futurepack:block_compressed_retium"
          },
          "F": {
            "item": "kubejs:dark_matter_frame"
          },
          "G": {
            "item": "futurepack:block_compressed_neon"
          }
        },
        "result": {
          "item": "futurepack:thruster_white_light_blue"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "BCCCB",
          "BDEDB",
          "BFFFB",
          "BGGGB"
        ],
        "key": {
          "A": {
            "item": "futurepack:ceramic"
          },
          "B": {
            "item": "kubejs:basic_plating"
          },
          "C": {
            "item": "futurepack:block_compressed_retium"
          },
          "D": {
            "item": "futurepack:maschineboard"
          },
          "E": {
            "item": "kubejs:dark_matter_frame"
          },
          "F": {
            "item": "kubejs:storage_essence"
          },
          "G": {
            "item": "futurepack:ingot_bitripentium"
          }
        },
        "result": {
          "item": "futurepack:assembly_table_white"
        }
      })
      event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ABBBA",
              "BCDCB",
              "BDEDB",
              "BCDCB",
              "ABBBA"
            ],
            "key": {
              "A": {
                "item": "futurepack:ingot_bitripentium"
              },
              "B": {
                "item": "futurepack:ceramic"
              },
              "C": {
                "item": "electrodynamics:canisterreinforced"
              },
              "D": {
                "item": "kubejs:storage_essence"
              },
              "E": {
                "item": "futurepack:block_crystal_alutin"
              }
            },
            "result": {
              "item": "futurepack:fuel_cell"
            }
          })
          event.custom({
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "     ",
              " ABA ",
              " ABA ",
              " ABA ",
              "CDDDC"
            ],
            "key": {
              "A": {
                "item": "pneumaticcraft:heat_sink"
              },
              "B": {
                "item": "futurepack:coil_copper"
              },
              "C": {
                "item": "futurepack:composite_metal"
              },
              "D": {
                "item": "kubejs:annealed_copper_ingot"
              }
            },
            "result": {
              "item": "futurepack:extern_cooler"
            }
          })
          event.custom({
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "AABBBAA",
              "ACDDDCA",
              "EFGHGFE",
              "AIHJHIA",
              "EFGHGFE",
              "ACDDDCA",
              "AAKKKAA"
            ],
            "key": {
              "A": {
                "item": "futurepack:ceramic"
              },
              "B": {
                "item": "futurepack:extern_cooler"
              },
              "C": {
                "item": "futurepack:battery_neon"
              },
              "D": {
                "item": "kubejs:superconductive_block"
              },
              "E": {
                "item": "kubejs:basic_thruster",
                
              },
              "F": {
                "item": "futurepack:coil_neon"
              },
              "G": {
                "item": "futurepack:magnet"
              },
              "H": {
                "item": "futurepack:maschineboard"
              },
              "I": {
                "item": "futurepack:block_compressed_retium"
              },
              "J": {
                "item": "kubejs:dark_matter_frame"
              },
              "K": {
                "item": "industrialforegoing:laser_drill"
              }
            },
            "result": {
              "item": "kubejs:ilmenite_excavation_unit"
            }
          })
          event.custom(
            {
                "type": "extendedcrafting:shaped_table",
                "pattern": [
                  "AAAAA",
                  "ABCBA",
                  "DCECD",
                  "ABCBA",
                  "AFFFA"
                ],
                "key": {
                  "A": {
                    "item": "kubejs:basic_plating",
                  },
                  "B": {
                    "item": "futurepack:coil_gold"
                  },
                  "C": {
                    "item": "bloodmagic:reagentmagnetism"
                  },
                  "D": {
                    "item": "kubejs:basic_thruster",
                    
                  },
                  "E": {
                    "item": "futurepack:maschineboard"
                  },
                  "F": {
                    "item": "bloodmagic:reagentfastminer"
                  }
                },
                "result": {
                  "item": "kubejs:asteroid_collection_unit"
                }
              })
              event.custom({
                "type": "extendedcrafting:shaped_table",
                "pattern": [
                  "ABBBA",
                  "BCDCB",
                  "BEFEB",
                  "BCGCB",
                  "ABBBA"
                ],
                "key": {
                  "A": {
                    "item": "futurepack:metal_block_ventilation"
                  },
                  "B": {
                    "item": "kubejs:basic_plating",
                  },
                  "C": {
                    "item": "futurepack:magnet"
                  },
                  "D": {
                    "item": "futurepack:coil_neon"
                  },
                  "E": {
                    "item": "electrodynamics:mineralcrushertriple"
                  },
                  "F": {
                    "item": "kubejs:dark_matter_frame"
                  },
                  "G": {
                    "item": "futurepack:maschineboard"
                  }
                },
                "result": {
                  "item": "futurepack:crusher_white"
                }
              })
              event.custom({
                "type": "extendedcrafting:shaped_table",
                "pattern": [
                  "ABBBBBA",
                  "BCDEDCB",
                  "BFGHGFB",
                  "BFIJIFB",
                  "BFGHGFB",
                  "BCDEDCB",
                  "ABBBBBA"
                ],
                "key": {
                  "A": {
                    "item": "electrodynamics:resourceblocktitanium"
                  },
                  "B": {
                    "item": "kubejs:advanced_plating",
                  },
                  "C": {
                    "item": "futurepack:block_compressed_glowtite"
                  },
                  "D": {
                    "item": "extrabotany:orichalcos"
                  },
                  "E": {
                    "item": "extrabotany:theuniverse"
                  },
                  "F": {
                    "item": "futurepack:compact_energy_cell"
                  },
                  "G": {
                    "item": "futurepack:display"
                  },
                  "H": {
                    "item": "futurepack:laserdiode"
                  },
                  "I": {
                    "item": "futurepack:double_maschineboard"
                  },
                  "J": {
                    "item": "kubejs:dark_matter_frame"
                  }
                },
                "result": {
                  "item": "futurepack:advanced_board_computer_white"
                }
              })
              event.custom({
                "type": "extendedcrafting:shaped_table",
                "pattern": [
                  "AABBBAA",
                  "ACDEDCA",
                  "BDFGFDB",
                  "BEHIHEB",
                  "BDFGFDB",
                  "ACDEDCA",
                  "AABBBAA"
                ],
                "key": {
                  "A": {
                    "item": "kubejs:advanced_plating",
                  },
                  "B": {
                    "item": "futurepack:ingot_wakurium"
                  },
                  "C": {
                    "item": "futurepack:coil_gold"
                  },
                  "D": {
                    "item": "futurepack:coil_iron"
                  },
                  "E": {
                    "item": "futurepack:magnet"
                  },
                  "F": {
                    "item": "futurepack:laserdiode"
                  },
                  "G": {
                    "item": "futurepack:drone_engine"
                  },
                  "H": {
                    "item": "extrabotany:orichalcos"
                  },
                  "I": {
                    "item": "futurepack:compact_energy_cell"
                  }
                },
                "result": {
                  "item": "futurepack:ftl_drive"
                }
              })
              event.custom({
                "type": "extendedcrafting:shaped_table",
                "pattern": [
                  "AAAAA",
                  "ABCBA",
                  "ACDCA",
                  "ABCBA",
                  "AAAAA"
                ],
                "key": {
                  "A": {
                    "item": "kubejs:basic_plating",
                  },
                  "B": {
                    "item": "futurepack:ingot_retium"
                  },
                  "C": {
                    "item": "mekanism:teleportation_core"
                  },
                  "D": {
                    "item": "futurepack:maschineboard"
                  }
                },
                "result": {
                  "item": "futurepack:teleporter"
                }
              })
              event.custom(
                {
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "AABBBAA",
                      "ACDDDCA",
                      "ECFGFCE",
                      "ACGHGCA",
                      "ECFGFCE",
                      "ACIIICA",
                      "AAJJJAA"
                    ],
                    "key": {
                      "A": {
                        "item": "kubejs:advanced_plating",
                      },
                      "B": {
                        "item": "futurepack:block_compressed_glowtite"
                      },
                      "C": {
                        "item": "futurepack:lack_tank_empty"
                      },
                      "D": {
                        "item": "kubejs:wakurium_coil"
                      },
                      "E": {
                        "item": "futurepack:drone_engine"
                      },
                      "F": {
                        "item": "futurepack:laserdiode"
                      },
                      "G": {
                        "item": "futurepack:magnet"
                      },
                      "H": {
                        "item": "futurepack:double_maschineboard"
                      },
                      "I": {
                        "item": "electrodynamics:drillheadtitanium"
                      },
                      "J": {
                        "item": "futurepack:fluid_pump"
                      }
                    },
                    "result": {
                      "item": "kubejs:air_pumping_unit"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      " ABA ",
                      "CDEDC",
                      "CDFDC",
                      "CGEGC",
                      "HIIIH"
                    ],
                    "key": {
                      "A": {
                        "item": "futurepack:extern_cooler"
                      },
                      "B": {
                        "item": "futurepack:block_compressed_glowtite"
                      },
                      "C": {
                        "item": "electrodynamics:platetitanium"
                      },
                      "D": {
                        "item": "futurepack:coil_copper"
                      },
                      "E": {
                        "item": "kubejs:rune_winter"
                      },
                      "F": {
                        "item": "kubejs:rune_water"
                      },
                      "G": {
                        "item": "futurepack:lack_tank_empty"
                      },
                      "H": {
                        "item": "kubejs:advanced_plating"
                      },
                      "I": {
                        "item": "kubejs:actively_cooled_casing"
                      }
                    },
                    "result": {
                      "item": "futurepack:water_cooler"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "ABBBA",
                      "BCDCB",
                      "BDEDB",
                      "BCDCB",
                      "ABBBA"
                    ],
                    "key": {
                      "A": {
                        "item": "futurepack:coil_quantanium"
                      },
                      "B": {
                        "item": "futurepack:polymer"
                      },
                      "C": {
                        "item": "futurepack:chemicals_a"
                      },
                      "D": {
                        "item": "futurepack:energy_cell"
                      },
                      "E": {
                        "item": "futurepack:double_maschineboard"
                      }
                    },
                    "result": {
                    "type": "forge:nbt",
                    "item": "futurepack:crystal_energy_cell",
                    "count": 1,
                    "nbt": "{neon:{maxNE:50000000}}"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "ABBBBBA",
                      "BCDDDCB",
                      "BDEFEDB",
                      "BDFGFDB",
                      "BDEFEDB",
                      "BCDDDCB",
                      "ABBBBBA"
                    ],
                    "key": {
                      "A": {
                        "item": "electrodynamics:resourceblocktitanium"
                      },
                      "B": {
                        "item": "electrodynamics:platetitaniumcarbide"
                      },
                      "C": {
                        "item": "futurepack:coil_quantanium"
                      },
                      "D": {
                        "item": "futurepack:polymer"
                      },
                      "E": {
                        "item": "futurepack:chemicals_c"
                      },
                      "F": {
                        "item": "futurepack:core_a1"
                      },
                      "G": {
                        "item": "futurepack:double_maschineboard"
                      }
                    },
                    "result": {
                    "type": "forge:nbt",
                    "item": "futurepack:core_entronium",
                    "count": 1,
                    "nbt": "{core:90}"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "ABBBBBA",
                      "BCDDDCB",
                      "BDEFEDB",
                      "BDFGFDB",
                      "BDEFEDB",
                      "BCDDDCB",
                      "ABBBBBA"
                    ],
                    "key": {
                      "A": {
                        "item": "futurepack:block_compressed_glowtite"
                      },
                      "B": {
                        "item": "futurepack:polymer"
                      },
                      "C": {
                        "item": "electrodynamics:platetitanium"
                      },
                      "D": {
                        "item": "futurepack:ingot_bioterium"
                      },
                      "E": {
                        "item": "futurepack:coil_quantanium"
                      },
                      "F": {
                        "item": "futurepack:ram_a"
                      },
                      "G": {
                        "item": "futurepack:double_maschineboard"
                      }
                    },
                    "result": {
                        "type": "forge:nbt",
                        "item": "futurepack:ram_entronium",
                        "count": 1,
                        "nbt": "{core:30}"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "AABBBAA",
                      "ACDEDCA",
                      "BDFFFDB",
                      "BEFGFEB",
                      "BDFFFDB",
                      "ACDEDCA",
                      "AABBBAA"
                    ],
                    "key": {
                      "A": {
                        "item": "kubejs:advanced_plating"
                      },
                      "B": {
                        "item": "futurepack:polymer"
                      },
                      "C": {
                        "item": "futurepack:coil_quantanium"
                      },
                      "D": {
                        "item": "futurepack:ceramic"
                      },
                      "E": {
                        "item": "futurepack:chemicals_c"
                      },
                      "F": {
                        "item": "futurepack:ingot_silicon"
                      },
                      "G": {
                        "item": "futurepack:double_maschineboard"
                      }
                    },
                    "result": {
                        "type": "forge:nbt",
                        "item": "futurepack:chip_ultimate",
                        "count": 1,
                        "nbt": "{power:20}"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "ABBBA",
                      "BCDCB",
                      "BDEDB",
                      "BCDCB",
                      "ABBBA"
                    ],
                    "key": {
                      "A": {
                        "item": "astralsorcery:marble_engraved"
                      },
                      "B": {
                        "item": "astralsorcery:marble_chiseled"
                      },
                      "C": {
                        "item": "astralsorcery:colored_lens_fire"
                      },
                      "D": {
                        "item": "electrodynamics:oxidationfurnace"
                      },
                      "E": {
                        "item": "kubejs:dark_matter_frame"
                      }
                    },
                    "result": {
                      "item": "futurepack:industrial_furnace"
                    }
                  })

                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "AAAAA",
                      "GHHHG",
                      "GHFHG",
                      "GRRRG",
                      "AAAAA"
                    ],
                    "key": {
                      "A": {
                        "item": "futurepack:composite_metal"
                      },
                      "G": {
                        "item": "futurepack:coil_gold"
                      },
                      "H": {
                        "item": "kubejs:hop_graphite_block"
                      },
                      "F": {
                        "item": "kubejs:dark_matter_frame"
                      },
                      "R": {
                        "item": "electrodynamics:reinforcedalloyer"
                      }
                    },
                    "result": {
                      "item": "futurepack:industrial_neon_furnace_white"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "AAAAAAA",
                      "ABCDCBA",
                      "AEFGFEA",
                      "ADGHGDA",
                      "AEFGFEA",
                      "ABCDCBA",
                      "AAAAAAA"
                    ],
                    "key": {
                      "A": {
                        "item": "electrodynamics:platetitanium"
                      },
                      "B": {
                        "item": "bloodmagic:reagentteleposition"
                      },
                      "C": {
                        "item": "futurepack:block_compressed_neon"
                      },
                      "D": {
                        "item": "futurepack:maschineboard"
                      },
                      "E": {
                        "item": "futurepack:block_compressed_retium"
                      },
                      "F": {
                        "item": "astralsorcery:celestial_gateway"
                      },
                      "G": {
                        "item": "futurepack:teleporter"
                      },
                      "H": {
                        "item": "kubejs:dark_matter_frame"
                      }
                    },
                    "result": {
                      "item": "kubejs:compact_teleportation_core"
                    }
                  })
                  event.custom({
                    "type": "extendedcrafting:shaped_table",
                    "pattern": [
                      "AAAAA",
                      "ABBBA",
                      "ABCBA",
                      "ADDDA",
                      "AAAAA"
                    ],
                    "key": {
                      "A": {
                        "item": "kubejs:basic_plating"
                      },
                      "B": {
                        "item": "futurepack:coil_copper"
                      },
                      "C": {
                        "item": "kubejs:dark_matter_frame"
                      },
                      "D": {
                        "item": "electrodynamics:coalgenerator"
                      }
                    },
                    "result": {
                      "item": "futurepack:t0_generator"
                    }
                  })
})