onEvent("recipes", event => {
    event.shaped('masterfulmachinery:basic_fluid_port_fluids_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:steel_casing',
        X: 'pneumaticcraft:large_tank',
        Z: 'tetra:forged_mesh'
    })
    event.shaped('masterfulmachinery:basic_kinetic_port_create_rotation_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:steel_casing',
        X: 'create:rotation_speed_controller',
        Z: 'create:gearbox'
    })
    event.shaped('masterfulmachinery:basic_pressure_port_pncr_pressure_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:steel_casing',
        X: 'pneumaticcraft:advanced_pressure_tube',
        Z: 'pneumaticcraft:pressure_chamber_valve'
    })
    event.shaped('masterfulmachinery:basic_controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:steel_casing',
        A: 'mekanism:block_refined_obsidian'
    })
    event.shaped('masterfulmachinery:basic_gas_port_mekanism_gas_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: '#forge:ingots/molybdenum',
        C: 'kubejs:reinforced_casing',
        X: 'electrodynamics:circuitelite',
        Z: 'mekanism:ultimate_chemical_tank'
    })
    event.shaped('masterfulmachinery:basic_energy_port_energy_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:hdpe_sheet',
        C: 'mekanism:steel_casing',
        X: 'mekanism:advanced_control_circuit'
    })
    event.shaped('masterfulmachinery:advanced_item_port_items_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'industrialforegoing:plastic',
        C: 'industrialforegoing:machine_frame_simple',
        X: 'naturesaura:grated_chute',
        Z: 'pneumaticcraft:smart_chest'
    })
    event.shaped('masterfulmachinery:advanced_energy_port_energy_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'industrialforegoing:plastic',
        C: 'industrialforegoing:machine_frame_simple',
        X: 'electrodynamics:wirehighlyinsulatedsuperconductive',
        Z: 'mekanism:advanced_induction_cell'
    })
    event.shaped('masterfulmachinery:advanced_fluid_port_fluids_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'industrialforegoing:plastic',
        C: 'industrialforegoing:machine_frame_simple',
        X: 'thermal:enderium_glass',
        Z: 'electrodynamics:tankhsla'
    })
    event.shaped('masterfulmachinery:basic_item_port_items_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'mekanism:hdpe_sheet',
        C: 'mekanism:steel_casing',
        X: 'pneumaticcraft:omnidirectional_hopper',
        Z: 'mekanism:personal_chest'
    })
    event.shaped('masterfulmachinery:advanced_gas_port_mekanism_gas_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'industrialforegoing:plastic',
        C: 'industrialforegoing:machine_frame_simple',
        X: '#forge:storage_blocks/chromium',
        Z: 'mekanism:ultimate_chemical_tank'
    })
    event.shaped('masterfulmachinery:advanced_controller', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        X: 'electrodynamics:circuitultimate',
        C: 'industrialforegoing:machine_frame_simple',
        A: 'kubejs:superconductive_block'
    })
    event.shaped('masterfulmachinery:advanced_kinetic_port_create_rotation_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'industrialforegoing:plastic',
        C: 'industrialforegoing:machine_frame_simple',
        X: 'create:rotation_speed_controller',
        Z: 'dynamicelectricity:shafthslasteel'
    })
    event.shaped('masterfulmachinery:magical_controller', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'botania:shimmerrock',
        C: 'botania:terrasteel_block',
        X: 'kubejs:rune_pride',
        Z: 'botania:gaia_pylon'
    })
    event.shaped('masterfulmachinery:magical_item_port_items_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'botania:shimmerrock',
        C: 'botania:natura_pylon',
        X: 'botania:corporea_index',
        Z: 'botania:dragonstone_block'
    })
    event.shaped('masterfulmachinery:magical_mana_port_botania_mana_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'botania:shimmerrock',
        C: 'botania:terrasteel_block',
        X: 'botania:fabulous_pool',
        Z: 'botania:elven_spreader'
    })
    event.shaped('masterfulmachinery:magical_energy_port_energy_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'botania:shimmerrock',
        C: 'mythicbotany:alfsteel_pylon',
        X: 'extrabotany:orichalcos'
    })
    event.shaped('masterfulmachinery:magical_fluid_port_fluids_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'astralsorcery:marble_engraved',
        C: 'astralsorcery:starmetal',
        X: 'astralsorcery:infused_glass'
    })
    event.shaped('masterfulmachinery:magical_starlight_port_astral_starlight_input', [
        'AXA',
        'ZCZ',
        'AXA'
    ], {
        A: 'astralsorcery:marble_engraved',
        C: 'astralsorcery:rock_collector_crystal',
        X: 'astralsorcery:prism',
        Z: 'astralsorcery:celestial_crystal'
    })
    event.shaped('masterfulmachinery:magical_pressure_port_pncr_pressure_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'astralsorcery:marble_engraved',
        C: 'astralsorcery:perk_seal',
        X: '#forge:storage_blocks/compressed_iron'
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
            "item": "futurepack:coil_copper"
          },
          "B": {
            "item": "kubejs:basic_plating"
          },
          "C": {
            "item": "futurepack:coil_neon"
          },
          "D": {
            "item": "futurepack:core_a1"
          },
          "E": {
            "item": "kubejs:dark_matter_frame"
          }
        },
        "result": {
          "item": "masterfulmachinery:reinforced_controller"
        }
      })
    event.shaped('masterfulmachinery:reinforced_item_port_items_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'futurepack:composite_metal',
        C: 'kubejs:dark_matter_frame',
        X: 'industrialforegoing:supreme_black_hole_unit'
    })
    event.shaped('masterfulmachinery:reinforced_energy_port_energy_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'futurepack:composite_metal',
        C: 'kubejs:dark_matter_frame',
        X: 'futurepack:wire_super'
    })
    event.shaped('masterfulmachinery:reinforced_fluid_port_fluids_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'futurepack:composite_metal',
        C: 'kubejs:dark_matter_frame',
        X: 'futurepack:lack_tank_empty'
    })
    event.shaped('masterfulmachinery:reinforced_gas_port_mekanism_gas_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'futurepack:composite_metal',
        C: 'kubejs:dark_matter_frame',
        X: 'futurepack:metal_block_ventilation'
    })
    event.shaped('masterfulmachinery:reinforced_pressure_port_pncr_pressure_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'futurepack:composite_metal',
        C: 'kubejs:dark_matter_frame',
        X: '#forge:storage_blocks/compressed_iron'
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "ABCCCBA",
          "ACDEDCA",
          "ACEFECA",
          "ACDEDCA",
          "ABCCCBA",
          "AAAAAAA"
        ],
        "key": {
          "A": {
            "item": "futurepack:polymer"
          },
          "B": {
            "item": "futurepack:coil_quantanium"
          },
          "C": {
            "item": "mekanism:pellet_polonium"
          },
          "D": {
            "item": "mekanism:elite_control_circuit"
          },
          "E": {
            "item": "futurepack:core_entronium"
          },
          "F": {
            "item": "kubejs:quantanium_casing"
          }
        },
        "result": {
          "item": "masterfulmachinery:elite_controller"
        }
      })
    event.shaped('masterfulmachinery:elite_energy_port_energy_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:pellet_polonium',
        C: 'kubejs:quantanium_casing',
        X: 'mekanism:elite_induction_provider'
    })
    event.shaped('masterfulmachinery:elite_item_port_items_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:pellet_polonium',
        C: 'kubejs:quantanium_casing',
        X: 'futurepack:composite_chest'
    })
    event.shaped('masterfulmachinery:elite_fluid_port_fluids_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:pellet_polonium',
        C: 'kubejs:quantanium_casing',
        X: 'futurepack:fluid_tank_mk3'
    })
    event.shaped('masterfulmachinery:elite_gas_port_mekanism_gas_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:pellet_polonium',
        C: 'kubejs:quantanium_casing',
        X: 'mekanismgenerators:turbine_blade'
    })
    event.shaped('masterfulmachinery:elite_pressure_port_pncr_pressure_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:sps_casing',
        C: 'kubejs:quantanium_casing',
        X: '#forge:storage_blocks/compressed_iron'
    })
    event.shaped('masterfulmachinery:elite_slurry_port_mekanism_slurry_input', [
        'AXA',
        'XCX',
        'AXA'
    ], {
        A: 'mekanism:sps_casing',
        C: 'kubejs:quantanium_casing',
        X: 'mekanism:ultimate_control_circuit'
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAAAA",
          "ABCCCCCBA",
          "ACDEEEDCA",
          "ACEFGFECA",
          "ACEGHGECA",
          "ACEFGFECA",
          "ACDEEEDCA",
          "ABCCCCCBA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:dark_matter\"}"
          },
          "C": {
            "item": "kubejs:gravitational_collapse_initiator"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:quantanium\"}"
          },
          "E": {
            "item": "mekanism:pellet_antimatter"
          },
          "F": {
            "item": "kubejs:time_infused_casing"
          },
          "G": {
            "item": "rftoolsbase:machine_frame"
          },
          "H": {
            "item": "kubejs:concept_of_fabrication"
          }
        },
        "result": {
          "item": "masterfulmachinery:stellar_controller"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAAAA",
          "ABCDDDCBA",
          "ACEFEFECA",
          "ADFGHGFDA",
          "ADEHIHEDA",
          "ADFGHGFDA",
          "ACEFEFECA",
          "ABCDDDCBA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "B": {
            "item": "draconicevolution:chaotic_crafting_injector"
          },
          "C": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:titanium\"}"
          },
          "D": {
            "item": "mythicbotany:alfsteel_block"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:mithril\"}"
          },
          "F": {
            "item": "mekanism:qio_drive_supermassive"
          },
          "G": {
            "item": "draconicevolution:chaotic_shield_control_module"
          },
          "H": {
            "item": "rftoolsbase:machine_frame"
          },
          "I": {
            "item": "kubejs:concept_of_capacity"
          }
        },
        "result": {
          "item": "masterfulmachinery:stellar_item_port_items_input"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAAAA",
          "ABBBBBBBA",
          "ABCCDCCBA",
          "ABCEFECBA",
          "ABDFGFDBA",
          "ABCEFECBA",
          "ABCCDCCBA",
          "ABBBBBBBA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "B": {
            "item": "draconicevolution:chaotic_energy_core"
          },
          "C": {
            "item": "rftoolsdim:part_energy_3"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:crystaltine\"}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:awakened_draconium\"}"
          },
          "F": {
            "item": "rftoolsbase:machine_frame"
          },
          "G": {
            "item": "kubejs:concept_of_material"
          }
        },
        "result": {
          "item": "masterfulmachinery:stellar_energy_port_energy_input"
        }
      })

    const conversion = [
        'masterfulmachinery:basic_fluid_port_fluids',
        'masterfulmachinery:basic_item_port_items',
        'masterfulmachinery:basic_energy_port_energy',
        'masterfulmachinery:basic_gas_port_mekanism_gas',
        'masterfulmachinery:advanced_fluid_port_fluids',
        'masterfulmachinery:advanced_item_port_items',
        'masterfulmachinery:advanced_energy_port_energy',
        'masterfulmachinery:advanced_gas_port_mekanism_gas',
        'masterfulmachinery:magical_item_port_items',
        'masterfulmachinery:magical_fluid_port_fluids',
        'masterfulmachinery:magical_energy_port_energy',
        'masterfulmachinery:reinforced_item_port_items',
        'masterfulmachinery:reinforced_fluid_port_fluids',
        'masterfulmachinery:reinforced_energy_port_energy',
        'masterfulmachinery:reinforced_gas_port_mekanism_gas',
        'masterfulmachinery:elite_slurry_port_mekanism_slurry',
        'masterfulmachinery:elite_gas_port_mekanism_gas',
        'masterfulmachinery:elite_item_port_items',
        'masterfulmachinery:elite_energy_port_energy',
        'masterfulmachinery:elite_fluid_port_fluids',
        'masterfulmachinery:stellar_item_port_items'
    ]

    conversion.forEach(id => {
        event.shapeless(`${id}_input`, `${id}_output`)
        event.shapeless(`${id}_output`, `${id}_input`)
    })

  event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id": "mass_electrolysis_array",
      "controllerId": "basic",
      "name": "Mass Electrolysis Array",
      "layout": [
        [
          " ))))) ",
          ")))))))",
          ")))))))",
          ")))))))",
          ")))))))",
          ")))))))",
          " ))))) "
        ],
        [
          " ***** ",
          "*******",
          "*******",
          "*******",
          "*******",
          "*******",
          " ***** "
        ],
        [
          " +++++ ",
          "+,-,-,+",
          "+-----+",
          "+,-,-,+",
          "+-----+",
          "+,-,-,+",
          " +++++ "
        ],
        [
          " ++.++ ",
          "+ - - +",
          "+-----+",
          "/ - - 0",
          "+-----+",
          "+ - - +",
          " ++C++ "
        ],
        [
          " +++++ ",
          "+1-1-1+",
          "+-----+",
          "+1-1-1+",
          "+-----+",
          "+1-1-1+",
          " +++++ "
        ],
        [
          " +++++ ",
          "+2-2-2+",
          "+-----+",
          "+2-2-2+",
          "+-----+",
          "+2-2-2+",
          " +++++ "
        ],
        [
          "       ",
          " 2 2 2 ",
          "       ",
          " 2 2 2 ",
          "       ",
          " 2 2 2 ",
          "       "
        ],
        [
          "       ",
          " 333 3 ",
          " 3 3 3 ",
          " 3 3 3 ",
          " 3 3 3 ",
          " 4 333 ",
          "       "
        ]
      ],
      "legend": {
        "0": {
          "block": "masterfulmachinery:basic_fluid_port_fluids_output"
        },
        "1": {
          "block": "immersivepetroleum:petcoke_block"
        },
        "2": {
          "block": "immersiveengineering:steel_fence"
        },
        "3": {
          "block": "immersiveengineering:slab_sheetmetal_copper"
        },
        "4": {
          "block": "masterfulmachinery:basic_energy_port_energy_input"
        },
        ")": {
          "block": "kubejs:fiberglass"
        },
        "*": {
          "block": "immersiveengineering:sheetmetal_steel"
        },
        "+": {
          "block": "kubejs:steel_plated_ceramic_block"
        },
        ",": {
          "block": "kubejs:hop_graphite_block"
        },
        "-": {
          "block": "kubejs:ceramic_block"
        },
        ".": {
          "block": "masterfulmachinery:basic_item_port_items_input"
        },
        "/": {
          "block": "masterfulmachinery:basic_fluid_port_fluids_input"
        }
      }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "mass_electrolysis_array",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:alumina","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:molten_cryolite","amount": 144}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "emendatusenigmatica:molten_aluminum","amount": 144}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "fracker",
    "controllerId": "basic",
    "name": "Fracker",
    "layout": [
      [
        ")))))))))",
        ")*)))))))",
        ")))))))))"
      ],
      [
        "+++ ,---,",
        " *  ,...,",
        "+++ ,---,"
      ],
      [
        "+/+ ,-C-,",
        " *****0*1",
        "+/+ ,-2-,"
      ],
      [
        "+++ ,---,",
        "+*+ ,.3.,",
        "+++ ,---,"
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+++      ",
        "+*+      ",
        "+++      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+++      ",
        "+*+      ",
        "+++      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+++      ",
        "+*+      ",
        "+++      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+ +      ",
        " *       ",
        "+ +      "
      ],
      [
        "+++      ",
        "+*+      ",
        "+++      "
      ],
      [
        "         ",
        " *       ",
        "         "
      ],
      [
        "         ",
        " *       ",
        "         "
      ]
    ],
    "legend": {
      "0": {
        "block": "immersiveengineering:heavy_engineering"
      },
      "1": {
        "block": "masterfulmachinery:basic_fluid_port_fluids_input"
      },
      "2": {
        "block": "masterfulmachinery:basic_pressure_port_pncr_pressure_input"
      },
      "3": {
        "block": "masterfulmachinery:basic_kinetic_port_create_rotation_input"
      },
      ")": {
        "block": "immersiveengineering:concrete"
      },
      "*": {
        "block": "immersiveengineering:fluid_pipe"
      },
      "+": {
        "block": "immersiveengineering:steel_scaffolding_standard"
      },
      ",": {
        "block": "pneumaticcraft:pressure_chamber_wall"
      },
      "-": {
        "block": "immersiveengineering:sheetmetal_steel"
      },
      ".": {
        "block": "mekanism:steel_casing"
      },
      "/": {
        "block": "masterfulmachinery:basic_fluid_port_fluids_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "fracker",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:create_rotation","consumePerTick": true,"data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:natural_gas","amount": 125}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "immersivepetroleum:oil","amount": 125}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "precision_component_assembler",
    "controllerId": "basic",
    "name": "Precision Component Assembler",
    "layout": [
      [
        "))*))",
        ")+++)",
        ",+++-",
        ")+++)",
        "))C))"
      ],
      [
        ")...)",
        ".   .",
        ". / .",
        ".   .",
        ")...)"
      ],
      [
        ")...)",
        ".   .",
        ". 0 .",
        ".   .",
        ")...)"
      ],
      [
        ")...)",
        ".   .",
        ".   .",
        ".   .",
        ")...)"
      ],
      [
        ")))))",
        ")+++)",
        ")+1+)",
        ")+++)",
        ")))))"
      ]
    ],
    "legend": {
      "0": {
        "block": "thermal:machine_frame"
      },
      "1": {
        "block": "masterfulmachinery:basic_pressure_port_pncr_pressure_input"
      },
      ")": {
        "block": "envirocore:erodium_frame"
      },
      "*": {
        "block": "masterfulmachinery:basic_energy_port_energy_input"
      },
      "+": {
        "block": "envirocore:structure_panel"
      },
      ",": {
        "block": "masterfulmachinery:basic_item_port_items_input"
      },
      "-": {
        "block": "masterfulmachinery:basic_item_port_items_output"
      },
      ".": {
        "block": "appliedenergistics2:quartz_vibrant_glass"
      },
      "/": {
        "block": "pneumaticcraft:compressed_brick_wall"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:steel_rod","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "create:mechanical_crafter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:molecular_assembler","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_silicon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_engineering_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_silicon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_logic_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_silicon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_calculation_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:ingot_refined_glowstone","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:semi_dark_monitor","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:wire_aluminum","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:gold_plate","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:wire_aluminum","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:silver_plate","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_fiber","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_glass_cable","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:interface","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:small_tank","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_interface","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:semi_dark_monitor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:crafting_table","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 7500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:crafting_terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:crafting_terminal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:blank_pattern","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 7500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:pattern_terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:interface","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 7500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:interface_terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:gold_rod","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:basic_card","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:diamond_plate","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 2500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:advanced_card","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:wireless_receiver","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_rod","count": 4}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:wireless_access_point","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_pearl","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_fiber","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:wireless_receiver","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_glass_cable","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 7500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:security_station","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:alloy_atomic","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:blank_pattern","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:1k_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:1k_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:4k_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:4k_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:16k_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:16k_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:64k_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "thermal:machine_frame","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:condenser","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:steel_plate","count": 4}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "tetra:forged_mesh","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:empty_storage_cell","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:galvanized_steel_ingot","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_glass_cable","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:crafting_unit","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:transistor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_calculation_processor","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:enriched_diamond","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:transistor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_engineering_processor","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:tainted_gold","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:transistor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_logic_processor","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:silicon_gem","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:capacitor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:printed_silicon","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_pearl","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:enderium_glass","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:wireless_booster","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:energy_acceptor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:advanced_control_circuit","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:controller","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "create:fluid_tank","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:1k_fluid_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:1k_fluid_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:4k_fluid_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:4k_fluid_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:16k_fluid_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:16k_fluid_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:64k_fluid_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:enderium_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:spatial_pylon","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_pearl","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:ingot_refined_obsidian","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:2_cubed_spatial_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:2_cubed_spatial_cell_component","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:platinum_ingot","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:16_cubed_spatial_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:16_cubed_spatial_cell_component","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:platinum_ingot","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:128_cubed_spatial_cell_component","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:compressed_iron_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:advanced_control_circuit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:drive","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:basic_chemical_tank","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_interface","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:64k_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:polyvinyl_chloride","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_256","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_256","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:resourceblockstainlesssteel","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_1024","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_1024","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:iesnium_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_4096","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_4096","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:item_storage_component_16384","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:64k_fluid_cell_component","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:resourceblockstainlesssteel","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:fluid_storage_component_256","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:fluid_storage_component_256","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:iesnium_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:fluid_storage_component_1024","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:fluid_storage_component_1024","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:fluid_storage_component_4096","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:crystal_osmium","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_1","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_1","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_4","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_4","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_16","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_16","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_64","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_64","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:resourceblockstainlesssteel","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_256","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_256","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:iesnium_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_1024","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_1024","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_storage_component_4096","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_interface","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_interface","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:export_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:fluid_pipe","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_export_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:basic_pressurized_tube","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_export_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:import_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:fluid_pipe","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_import_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:basic_pressurized_tube","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "aeadditions:chemical_import_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_rod","count": 8}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"tag": "forge:plates/lead","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quantum_ring","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_rod","count": 8}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_vibrant_glass","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:logic_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quantum_link","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:steel_casing","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:steel_rod","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:basic_control_circuit","count": 2}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 8}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 8}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_growth_accelerator","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "thermal:energy_cell_frame","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_glass","count": 2}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:energy_cell","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_glass_cable","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:hdpe_sheet","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_covered_cable","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_covered_cable","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_smart_cable","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_covered_dense_cable","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:iron_wiring","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_smart_dense_cable","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:invar_plate","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:advanced_control_circuit","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:biometric_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:terminal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:wireless_receiver","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:dense_energy_cell","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:teleportation_core","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:wireless_terminal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:steel_rod","count": 8}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:quartz_block","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:me_p2p_tunnel","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:ingot_iron_compressed","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "create:fluid_tank","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_formation_plane","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:ingot_iron_compressed","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:formation_plane","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:ingot_iron_compressed","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "create:fluid_tank","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_annihilation_plane","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:ingot_iron_compressed","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/certus","count": 4}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:annihilation_plane","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:interface","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:storage_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_interface","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "appliedenergistics2:crystals/fluix","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_storage_bus","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluix_block","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:plastic","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:engineering_processor","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:heavy_engineering","count": 2}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:energy_acceptor","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "forge:rods/invar","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:comparator","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:level_emitter","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_component_assembler",
    "controllerId": "basic",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:calculation_processor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "forge:rods/invar","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "create:smart_fluid_pipe","count": 1}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 15}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:fluid_level_emitter","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "spirit_infuser",
    "controllerId": "advanced",
    "name": "Spirit Infuser",
    "layout": [
      [
        "  )  ",
        " *+* ",
        ",+-+.",
        " *+* ",
        "  C  "
      ],
      [
        "     ",
        " --- ",
        " - - ",
        " --- ",
        "     "
      ],
      [
        "     ",
        " -+- ",
        " + + ",
        " -+- ",
        "     "
      ],
      [
        "     ",
        "  /  ",
        " / / ",
        "  /  ",
        "     "
      ],
      [
        "     ",
        "  /  ",
        " / / ",
        "  /  ",
        "     "
      ],
      [
        "     ",
        "  /  ",
        " / / ",
        "  /  ",
        "     "
      ],
      [
        "     ",
        "  0  ",
        " 0 0 ",
        "  0  ",
        "     "
      ],
      [
        "     ",
        " 000 ",
        " 0 0 ",
        " 000 ",
        "     "
      ],
      [
        "  1  ",
        " 000 ",
        "10201",
        " 000 ",
        "  1  "
      ],
      [
        " 1 1 ",
        "1   1",
        "  3  ",
        "1   1",
        " 1 1 "
      ],
      [
        "1   1",
        "     ",
        "     ",
        "     ",
        "1   1"
      ],
      [
        "1   1",
        "     ",
        "     ",
        "     ",
        "1   1"
      ]
    ],
    "legend": {
      "0": {
        "block": "occultism:otherworld_log"
      },
      "1": {
        "block": "kubejs:otherworldly_planks"
      },
      "2": {
        "block": "minecraft:soul_soil"
      },
      "3": {
        "block": "minecraft:soul_fire"
      },
      ")": {
        "block": "masterfulmachinery:advanced_energy_port_energy_input"
      },
      "*": {
        "block": "kubejs:tanzanite_block"
      },
      "+": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      ",": {
        "block": "masterfulmachinery:advanced_item_port_items_input"
      },
      "-": {
        "block": "kubejs:azure_block"
      },
      ".": {
        "block": "masterfulmachinery:advanced_item_port_items_output"
      },
      "/": {
        "block": "thermal:enderium_glass"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "aoa3:ancient_rock","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "tetra:forged_wall","count": 4}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:otherstone","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:oak_sapling","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:otherworld_sapling_natural","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_white_impure","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_white","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_purple_impure","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_purple","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_gold_impure","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_gold","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_red_impure","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_red","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:otherworld_log","count": 2}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:otherworld_ashes","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "spirit_infuser",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:black_dye","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:burnt_otherstone","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:purified_ink","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "automatic_runic_altar",
    "controllerId": "magical",
    "name": "Automatic Runic Altar",
    "layout": [
      [
        "))*))",
        ")***)",
        "*****",
        ")***)",
        "))*))"
      ],
      [
        "     ",
        " +,+ ",
        " -./ ",
        " +C+ ",
        "     "
      ],
      [
        "*)*)*",
        ")***)",
        "**.**",
        ")***)",
        "*)*)*"
      ],
      [
        "))*))",
        ")*)*)",
        "*).)*",
        ")*)*)",
        "))*))"
      ],
      [
        "     ",
        "     ",
        "     ",
        "     ",
        "     "
      ],
      [
        "     ",
        "     ",
        "  0  ",
        "     ",
        "     "
      ]
    ],
    "legend": {
      "0": {
        "block": "botania:gaia_pylon"
      },
      ")": {
        "block": "botania:livingrock_bricks"
      },
      "*": {
        "block": "botania:livingrock"
      },
      "+": {
        "block": "botania:shimmerrock"
      },
      ",": {
        "block": "masterfulmachinery:magical_mana_port_botania_mana_input"
      },
      "-": {
        "block": "masterfulmachinery:magical_item_port_items_input"
      },
      ".": {
        "block": "botania:mana_diamond_block"
      },
      "/": {
        "block": "masterfulmachinery:magical_item_port_items_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elemental_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_powder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:sky_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_string","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:reinforced_air_canister","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 5200}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:ender_component","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:luminessence_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:crystaltine_ingot","count": 4}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 5200}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elemental_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_powder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:earth_charge","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "industrialforegoing:mechanical_dirt","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:infused_stone","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 5200}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elemental_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_powder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:heated_copper_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:fire_tnt","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "create:blaze_cake","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 5200}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elemental_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_powder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:fishing_rod","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:tankhsla","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "minecraft:fishes","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 5200}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_water","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elemental_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_pearl","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_diamond","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:quartz_mana","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manaweave_cloth","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 5200}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_mana","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:seasonal_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:gold_leaf","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "minecraft:leaves","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:fel_pumpkin","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_autumn","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:seasonal_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_water","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "minecraft:saplings","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "minecraft:flowers","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "forge:seeds","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_spring","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:seasonal_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "farmersdelight:barbecue_stick","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "industrialforegoing:pink_slime","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:sand","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:seasonal_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_water","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:ice_grenade","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:blue_ice","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "tetra:forged_bolt","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_winter","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_water","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_winter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:cad_assembly_iron","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "chiselsandbits:bit_bag","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:netherite_coin","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_envy","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_winter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "farmersdelight:shepherds_pie_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:concrete_bucket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:white_substance","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_gluttony","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_water","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_spring","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "eidolon:gold_inlay","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:clump_gold","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:enderium_coin","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_greed","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:rodstainlesssteel","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:milk_bucket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:pattern_donut","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_lust","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:spectral_arrow","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:me_p2p_tunnel","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:dragon_head","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_pride","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:ultimate_logistical_transporter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "industrialforegoing:block_breaker","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:auto_crafter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_sloth","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sinful_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_winter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:tnt","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "industrialforegoing:block_breaker","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersivepetroleum:napalm_bucket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_wrath","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_autumn","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_pride","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:bifrost_perm","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:life_essence","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:golden_apple","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:asgard_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_pride","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_spring","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:milk_bucket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:itemfinder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:purple_smart_cable","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:vanaheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_lust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:milk_bucket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:quartz_elven","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 2}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_spring","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_greed","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:bifrost_perm","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:oak_log","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:machine_frame","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:midgard_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_autumn","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_gluttony","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:cad_socket_huge","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "torchmaster:megatorch","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:life_essence","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:joetunheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_wrath","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:burnt_otherstone","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:netherrack","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "create:blaze_cake","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:muspelheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_water","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_winter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_wrath","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:snow","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "eidolon:wraith_heart","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:ice_tnt","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:niflheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_earth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_winter","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_sloth","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:iesnium_ore","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:certus_quartz_pickaxe","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "eidolon:shadow_gem","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:nidavellir_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dimensional_blank_rune","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_autumn","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_envy","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:wither_skeleton_skull","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:spell_bullet_projectile","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:totem_of_undying","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_nugget","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:helheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_pylon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "botania:petals/lime","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:helheim_rune","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:shadowium","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:spirit","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:elementium_ingot","count": 2}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:photonium","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:natura_pylon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:dragonstone","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_wrath","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:elementium_block","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 36000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "botania:gaia_pylon","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_spreader","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:aerialite","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_greed","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:corporea_spark","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:elf_glass","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:glimmering_dreamwood","count": 4}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "botania:elven_spreader","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:nightmarefuel","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 2}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 8000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:shadowium","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:elven_spreader","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:gaia_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_pride","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:corporea_spark_master","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:bifrost_perm","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:shimmerwood_planks","count": 4}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 12000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "botania:gaia_spreader","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "automatic_runic_altar",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_pylon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:terrasteel_ingot","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_summer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"tag": "botania:petals/lime","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 24000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "botania:natura_pylon","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "gaia_kill_o_tron_3000",
    "controllerId": "magical",
    "name": "Gaia Kill-O-Tron 3000",
    "layout": [
      [
        ")))*)))",
        "))   ))",
        ")     )",
        "+     ,",
        ")     )",
        "))   ))",
        ")))C)))"
      ],
      [
        "-     -",
        " ..).. ",
        " .))). ",
        " ))/)) ",
        " .))). ",
        " ..).. ",
        "-     -"
      ],
      [
        "-00000-",
        "0     0",
        "0 121 0",
        "0 345 0",
        "0 121 0",
        "0     0",
        "-00000-"
      ],
      [
        "-00000-",
        "0     0",
        "0     0",
        "0  6  0",
        "0     0",
        "0     0",
        "-00000-"
      ],
      [
        "-00000-",
        "07   70",
        "0     0",
        "0  8  0",
        "0     0",
        "07   70",
        "-00000-"
      ],
      [
        "-00000-",
        "0     0",
        "0     0",
        "0     0",
        "0     0",
        "0     0",
        "-00000-"
      ],
      [
        "--   --",
        "-     -",
        "       ",
        "       ",
        "       ",
        "-     -",
        "--   --"
      ]
    ],
    "legend": {
      ")": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      "*": {
        "block": "masterfulmachinery:magical_mana_port_botania_mana_input"
      },
      "+": {
        "block": "masterfulmachinery:magical_item_port_items_input"
      },
      ",": {
        "block": "masterfulmachinery:magical_item_port_items_output"
      },
      "-": {
        "block": "envirocore:kyronite_frame"
      },
      ".": {
        "block": "botania:manasteel_block"
      },
      "/": {
        "block": "masterfulmachinery:magical_energy_port_energy_input"
      },
      "0": {
        "block": "botania:bifrost_pane"
      },
      "1": {
        "block": "botania:mana_diamond_block"
      },
      "2": {
        "block": "botania:dragonstone_block"
      },
      "3": {
        "block": "botania:terrasteel_block"
      },
      "4": {
        "block": "mythicbotany:alfsteel_block"
      },
      "5": {
        "block": "botania:elementium_block"
      },
      "6": {
        "block": "minecraft:beacon"
      },
      "7": {
        "block": "mythicbotany:alfsteel_pylon"
      },
      "8": {
        "block": "botania:bifrost_perm"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gaia_kill_o_tron_3000",
    "controllerId": "magical",
    "ticks":20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:gaia_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:star_sword","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:cyanide","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:white_substance","count": 16}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 12800}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 1000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "botania:life_essence","count": 24}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:dice","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gaia_kill_o_tron_3000",
    "controllerId": "magical",
    "ticks":20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:challengeticket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:star_sword","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:cyanide","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:white_substance","count": 16}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 12800}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 1000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:heromedal","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:life_essence","count": 12}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "precision_welder",
    "controllerId": "magical",
    "name": "Precision Welder",
    "layout": [
      [
        "))*))",
        ")))))",
        ")))))",
        ")))))",
        ")+C,)"
      ],
      [
        "-----",
        "-   -",
        "- . -",
        "-   -",
        "-----"
      ],
      [
        "-----",
        "-   -",
        "- . -",
        "-   -",
        "-----"
      ],
      [
        "-----",
        "-   -",
        "- . -",
        "-   -",
        "-----"
      ],
      [
        ")))))",
        ")   )",
        ") . )",
        ")   )",
        ")))))"
      ],
      [
        "  )  ",
        " ))) ",
        "))/))",
        " ))) ",
        "  )  "
      ]
    ],
    "legend": {
      ")": {
        "block": "envirocore:ionite_frame"
      },
      "*": {
        "block": "masterfulmachinery:magical_fluid_port_fluids_input"
      },
      "+": {
        "block": "masterfulmachinery:magical_item_port_items_input"
      },
      ",": {
        "block": "masterfulmachinery:magical_item_port_items_output"
      },
      "-": {
        "block": "kubejs:starglass"
      },
      ".": {
        "block": "kubejs:superconductive_block"
      },
      "/": {
        "block": "masterfulmachinery:magical_energy_port_energy_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:draconic_frame","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:resourceblocktitaniumcarbide","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:sps_casing","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_quantanium","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:draconic_energy_core","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:reactor_prt_stab_frame","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:reactor_prt_out_rotor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:reactor_prt_in_rotor","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:awakened_core","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 500}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:reactor_prt_rotor_full","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:draconic_frame","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:resourceblocktitanium","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:redstone_crystal","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:redstone_crystal","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:draconic_energy_core","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:elite_induction_provider","count": 2}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:reactor_injector","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dark_matter_alloy_block","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:composite_metal","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:parts_diamond","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:parts_copper","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "mythicbotany:alfsteel_pylon","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 50}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dark_matter_frame","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dark_matter_alloy","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:enderium_rod","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "bloodmagic:reagentmagnetism","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 50}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:parts_copper","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:wirecopper","count": 32}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 25}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_copper","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:parts_iron","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:wireiron","count": 32}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 25}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_iron","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:parts_gold","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:wiregold","count": 32}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 25}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_gold","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:parts_neon","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_neon","count": 8}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 25}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_neon","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:reinforced_casing","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:pressure_chamber_wall","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:pipesteel","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:composite_metal","count": 4}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:actively_cooled_casing","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_wakurium","count": 8}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:wakurium_coil","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_quantanium","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:orichalcos","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 200}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 40000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_quantanium","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "precision_welder",
    "controllerId": "magical",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:platinum_gear","count": 64}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:platinum_catalyst","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "plutonium_neutron_activator",
    "controllerId": "elite",
    "name": "Plutonium Neutron Activator",
    "layout": [
      [
        "                ",
        ")*  ***** * * *+",
        ")*,,*****,*,*,*+",
        ")*  ***** * * *+",
        "                "
      ],
      [
        ")*  ***** * * *+",
        ")-../000/.1.2.2+",
        ")455/000/515252+",
        ")-../000/.1.2.2+",
        ")*  ***** * * *+"
      ],
      [
        ")7,,77777,7,7,7+",
        ")455/000/515252:",
        "89             +",
        ")455/000/515252;",
        ")7,,77777,7,C,7+"
      ],
      [
        ")*  ***** * * *+",
        ")-../000/.1.2.2+",
        ")455/000/515252+",
        ")-../000/.1.2.2+",
        ")*  ***** * * *+"
      ],
      [
        "                ",
        ")*  ***** * * *+",
        ")*,,*****,*,*,*+",
        ")*  ***** * * *+",
        "                "
      ]
    ],
    "legend": {
      ")": {
        "block": "emendatusenigmatica:lead_block"
      },
      "*": {
        "block": "kubejs:steel_plated_ceramic_block"
      },
      "+": {
        "block": "emendatusenigmatica:silver_block"
      },
      ",": {
        "block": "electrodynamics:resourceblockhslasteel"
      },
      "-": {
        "block": "extendedcrafting:crystaltine_block"
      },
      ".": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      "/": {
        "block": "electrodynamics:resourceblocktitanium"
      },
      "0": {
        "block": "immersivepetroleum:petcoke_block"
      },
      "1": {
        "block": "emendatusenigmatica:aluminum_block"
      },
      "2": {
        "block": "electrodynamics:resourceblockvanadiumsteel"
      },
      "3": {
        "block": "masterfulmachinery:elite_item_port_items_output"
      },
      "4": {
        "block": "kubejs:superconductive_block"
      },
      "5": {
        "block": "kubejs:fiberglass"
      },
      "6": {
        "block": "masterfulmachinery:elite_item_port_items_input"
      },
      "7": {
        "block": "mekanismgenerators:reactor_glass"
      },
      "8": {
        "block": "masterfulmachinery:elite_energy_port_energy_input"
      },
      "9": {
        "block": "kubejs:plutonium_block"
      },
      ":": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_output"
      },
      ";": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "plutonium_neutron_activator",
    "controllerId": "elite",
    "ticks":1,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:impure_helium_3","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 128000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanismgenerators:tritium","amount": 100}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "starforge",
    "controllerId": "stellar",
    "name": "Starforge",
    "layout": [
      [
        "               ",
        "               ",
        "               ",
        "               ",
        "               ",
        "      )*)      ",
        "     ))*))     ",
        "     **+**     ",
        "     ))*))     ",
        "      )*)      ",
        "               ",
        "               ",
        "               ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "     ,)-),     ",
        "    ,,)-),,    ",
        "   ,,,   ,,,   ",
        "   ))  *  ))   ",
        "   -- *+* --   ",
        "   ))  *  ))   ",
        "   ,,,   ,,,   ",
        "    ,,)-),,    ",
        "     ,)-),     ",
        "               ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "     ,).),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        "  )         )  ",
        "  .    +    .  ",
        "  )         )  ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,).),     ",
        "               ",
        "               "
      ],
      [
        "               ",
        "     ,)-),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " )           ) ",
        " -     /     - ",
        " )           ) ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,)-),     ",
        "               "
      ],
      [
        "               ",
        "    ,,)-),,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " )           ) ",
        " -     0     - ",
        " )           ) ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,,)-),,    ",
        "               "
      ],
      [
        "      )*)      ",
        "   ,,,   ,,,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        ")             )",
        "*             *",
        ")             )",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,,,   ,,,   ",
        "      )*)      "
      ],
      [
        "     ))*))     ",
        "   ))  *  ))   ",
        "  )         )  ",
        " )           ) ",
        " )           ) ",
        ")             )",
        ")      /      )",
        "**    /1/    **",
        ")      /      )",
        ")             )",
        " )           ) ",
        " )           ) ",
        "  )         )  ",
        "   ))  *  ))   ",
        "     ))*))     "
      ],
      [
        "     **2**     ",
        "   -- *+* --   ",
        "  .    +    .  ",
        " -     /     - ",
        " -     0     - ",
        "*             *",
        "**    /1/    **",
        "3++/0 1 1 0/++4",
        "**    /1/    **",
        "*             *",
        " -     0     - ",
        " -     /     - ",
        "  .    +    .  ",
        "   -- *+* --   ",
        "     **C**     "
      ],
      [
        "     ))*))     ",
        "   ))  *  ))   ",
        "  )         )  ",
        " )           ) ",
        " )           ) ",
        ")             )",
        ")      /      )",
        "**    /1/    **",
        ")      /      )",
        ")             )",
        " )           ) ",
        " )           ) ",
        "  )         )  ",
        "   ))  *  ))   ",
        "     ))*))     "
      ],
      [
        "      )*)      ",
        "   ,,,   ,,,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        ")             )",
        "*             *",
        ")             )",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,,,   ,,,   ",
        "      )*)      "
      ],
      [
        "               ",
        "    ,,)-),,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " )           ) ",
        " -     0     - ",
        " )           ) ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,,)-),,    ",
        "               "
      ],
      [
        "               ",
        "     ,)-),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " )           ) ",
        " -     /     - ",
        " )           ) ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,)-),     ",
        "               "
      ],
      [
        "               ",
        "               ",
        "     ,).),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        "  )         )  ",
        "  .    +    .  ",
        "  )         )  ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,).),     ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "     ,)-),     ",
        "    ,,)-),,    ",
        "   ,,,   ,,,   ",
        "   ))  *  ))   ",
        "   -- *+* --   ",
        "   ))  *  ))   ",
        "   ,,,   ,,,   ",
        "    ,,)-),,    ",
        "     ,)-),     ",
        "               ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "               ",
        "               ",
        "      )*)      ",
        "     ))*))     ",
        "     **+**     ",
        "     ))*))     ",
        "      )*)      ",
        "               ",
        "               ",
        "               ",
        "               ",
        "               "
      ]
    ],
    "legend": {
      "0": {
        "block": "mekanism:supercharged_coil"
      },
      "1": {
        "block": "mekanismgenerators:laser_focus_matrix"
      },
      "2": {
        "block": "masterfulmachinery:stellar_energy_port_energy_input"
      },
      "3": {
        "block": "masterfulmachinery:stellar_item_port_items_input"
      },
      "4": {
        "block": "masterfulmachinery:stellar_item_port_items_output"
      },
      ")": {
        "block": "mekanism:sps_casing"
      },
      "*": {
        "block": "envirocore:xerothium_frame"
      },
      "+": {
        "block": "draconicevolution:awakened_draconium_block"
      },
      ",": {
        "block": "mekanismgenerators:reactor_glass"
      },
      "-": {
        "block": "extendedcrafting:crystaltine_block"
      },
      ".": {
        "block": "extendedcrafting:the_ultimate_block"
      },
      "/": {
        "block": "kubejs:time_infused_casing"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_energy","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_space","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_fluid","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_the_stars","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:stellar_circuit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:nether_star_block","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:chaotic_energy_core","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:stellar_core","count": 8}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 125000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:stellar_circuit","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:hypercompressed_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "rftoolsbase:machine_frame","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "rftoolsbase:machine_frame","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 125000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:hypercompressed_core","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:ultimate_table","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:the_ultimate_ingot","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:the_ultimate_catalyst","count": 32}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 125000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:basic_table","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_block","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:energized_ingot","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:energized_ingot","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "fluxnetworks:gargantuan_flux_storage","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "rftoolsdim:part_energy_3","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:compact_energy_cell","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:ultimate_induction_cell","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:ultimate_induction_provider","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:induction_port","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:chaotic_energy_core","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:chaotic_energy_module","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:chaotic_capacitor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:chaotic_capacitor","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "industrialforegoing:mycelial_reactor","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:lithiumbatterybox","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:power_capacitor_tier3","count": 32}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 125000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_energy","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_neon","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_retium","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_glowtite","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_bioterium","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_wakurium","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_quantanium","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "rftoolsbase:machine_frame","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_time","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dark_matter_alloy","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ftl_drive","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:qio_drive_supermassive","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:qio_drive_supermassive","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "compactmachines:machine_maximum","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "rftoolsdim:dimension_builder","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:128_cubed_spatial_cell_component","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "storagedrawers:creative_storage_upgrade","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 125000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_space","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "starforge",
    "controllerId": "stellar",
    "ticks": 600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:antimatter_singularity","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:wet_essence","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:wet_essence","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:64k_fluid_cell_component","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:fluid_tank_augment","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "mob_grinding_utils:solid_xp_block","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fluid_tank_mk3","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:fluid_cell","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "rftoolsutility:tank","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "industrialforegoing:supreme_black_hole_tank","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:tankhsla","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:huge_tank","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:fuel_turbine_controller","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "advgenerators:steam_turbine_controller","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanismgenerators:turbine_valve","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:sps_port","count": 32}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 125000000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:concept_of_fluid","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "cooled_reaction_vessel",
    "controllerId": "reinforced",
    "name": "Cooled Reaction Vessel",
    "layout": [
      [
        "))*))",
        ")+++)",
        ")+*+)",
        ")+++)",
        ")),))"
      ],
      [
        " +++ ",
        "+   +",
        "-   -",
        "+   +",
        " +C+ "
      ],
      [
        " +/+ ",
        "+   +",
        "/   /",
        "+   +",
        " +/+ "
      ],
      [
        " +/+ ",
        "+   +",
        "/   /",
        "+   +",
        " +/+ "
      ],
      [
        " +++ ",
        "+   +",
        "+   +",
        "+   +",
        " +++ "
      ],
      [
        ")))))",
        ")///)",
        ")/0/)",
        ")///)",
        "))-))"
      ]
    ],
    "legend": {
      "0": {
        "block": "masterfulmachinery:reinforced_pressure_port_pncr_pressure_input"
      },
      ")": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      "*": {
        "block": "masterfulmachinery:reinforced_fluid_port_fluids_output"
      },
      "+": {
        "block": "kubejs:actively_cooled_casing"
      },
      ",": {
        "block": "masterfulmachinery:reinforced_energy_port_energy_input"
      },
      "-": {
        "block": "masterfulmachinery:reinforced_fluid_port_fluids_input"
      },
      "/": {
        "block": "futurepack:color_glass_white"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cooled_reaction_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:antimony_pentachloride","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cold_water","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:hydrofluoric_acid","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 50000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:antimony_pentafluoride","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cooled_reaction_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cold_water","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:antimony_pentafluoride","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:hydrofluoric_acid","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 50000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:fluoroantimonic_acid","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cooled_reaction_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_nitrogen","amount": 100}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:acidic_awakened_draconium_solution","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_sodium_hydroxide","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 50000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:awakened_draconium_solution","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_nitrogen","amount": 250}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cooled_reaction_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cold_water","amount": 100}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_xenon","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:molten_dioxygen_difluoride","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:xenon_difluoride","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cooled_reaction_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cold_water","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:nitric_acid","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_ammonia","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:ammonium_nitrate_solution","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "evacuated_vessel",
    "controllerId": "reinforced",
    "name": "Evacuated Vessel",
    "layout": [
      [
        ")     )",
        " )   ) ",
        "  ) )  ",
        "   )   ",
        "  ) )  ",
        " )   ) ",
        ")     )"
      ],
      [
        ") *** )",
        " ***** ",
        "*******",
        "*******",
        "*******",
        " ***** ",
        ") *** )"
      ],
      [
        ") *** )",
        " *   * ",
        "*     *",
        "*     *",
        "*     *",
        " *   * ",
        ") *** )"
      ],
      [
        ") *** )",
        " *   * ",
        "*     *",
        "+ ,,, +",
        "*     *",
        " *   * ",
        ") *3* )"
      ],
      [
        ") *** )",
        " *   * ",
        "*     *",
        "+ - - +",
        "*     *",
        " *   * ",
        ") *2* )"
      ],
      [
        ") *** )",
        " *   * ",
        "*     *",
        "+ - - +",
        "*     *",
        " *   * ",
        ") *C* )"
      ],
      [
        ") *** )",
        " *   * ",
        "*     *",
        ". - - /",
        "*     *",
        " *   * ",
        ") *3* )"
      ],
      [
        ") *** )",
        " *   * ",
        "*     *",
        "* - - *",
        "*     *",
        " *   * ",
        ") *** )"
      ],
      [
        ") *** )",
        " ***** ",
        "*******",
        "**-0-**",
        "*******",
        " ***** ",
        ") *** )"
      ],
      [
        ")     )",
        "       ",
        "       ",
        "  , ,  ",
        "       ",
        "       ",
        ")     )"
      ],
      [
        ")     )",
        "       ",
        "       ",
        "  , ,  ",
        "       ",
        "       ",
        ")     )"
      ],
      [
        ")     )",
        "       ",
        "       ",
        "  ,1,  ",
        "       ",
        "       ",
        ")     )"
      ],
      [
        ")     )",
        ")     )",
        ")     )",
        "))) )))",
        ")     )",
        ")     )",
        ")     )"
      ]
    ],
    "legend": {
      "0": {
        "block": "masterfulmachinery:reinforced_pressure_port_pncr_pressure_input"
      },
      "1": {
        "block": "masterfulmachinery:reinforced_energy_port_energy_input"
      },
      ")": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      "*": {
        "block": "futurepack:quartz_glass"
      },
      "+": {
        "block": "mekanism:dynamic_tank"
      },
      ",": {
        "block": "kubejs:molybdenum_block"
      },
      "-": {
        "block": "kubejs:tungsten_block"
      },
      ".": {
        "block": "masterfulmachinery:reinforced_item_port_items_input"
      },
      "/": {
        "block": "masterfulmachinery:reinforced_item_port_items_output"
      },
      "2": {
        "block": "masterfulmachinery:reinforced_gas_port_mekanism_gas_input"
      },
      "3": {
        "block": "masterfulmachinery:reinforced_fluid_port_fluids_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "evacuated_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:titanium_tetraiodide","count": 6}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:chlorine","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": -0.7}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:impure_titanium_dust","count": 6}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:iodine","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "evacuated_vessel",
    "controllerId": "reinforced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:titanium_tetrachloride","amount": 1152}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:sodium","amount": 4000}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:nitrogen","amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": -0.7}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:titanium_salt","count": 8}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "evacuated_vessel",
    "controllerId": "reinforced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hydrofluoric_acid","amount": 1000}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:oxygen","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": -0.7}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dioxygen_difluoride","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "advanced_arc_furnace",
    "controllerId": "advanced",
    "name": "Advanced Arc Smelter",
    "layout": [
      [
        "    )    ",
        "  )   )  ",
        "         ",
        "         ",
        "  *****  ",
        " ******* ",
        "*********",
        "*********",
        "*********",
        "*********",
        "*********",
        " ******* ",
        "  *****  "
      ],
      [
        "    )    ",
        "  )   )  ",
        "         ",
        "         ",
        "   ***   ",
        "  *   *  ",
        " *     * ",
        "*       *",
        "*       *",
        "*       *",
        " *     * ",
        "  *   *  ",
        "   *C*   "
      ],
      [
        "    )    ",
        " +)+++)+ ",
        " +     + ",
        " +     + ",
        " + *** + ",
        " +*   *+ ",
        " *     * ",
        ",       -",
        ".       /",
        ",       -",
        " *     * ",
        "  *   *  ",
        "   ***   "
      ],
      [
        "    )    ",
        "  )   )  ",
        "         ",
        "         ",
        "   ***   ",
        "         ",
        "         ",
        "*   0   *",
        "*       *",
        "*  0 0  *",
        "         ",
        "         ",
        "   ***   "
      ],
      [
        "    )    ",
        "  )   )  ",
        "         ",
        "         ",
        "   ***   ",
        "         ",
        "         ",
        "*   0   *",
        "*       *",
        "*  0 0  *",
        "         ",
        "         ",
        "   ***   "
      ],
      [
        "    )    ",
        "  )   )  ",
        "         ",
        "         ",
        "  *****  ",
        " **   ** ",
        "**     **",
        "*   0   *",
        "*       *",
        "*  0 0  *",
        "**     **",
        " **   ** ",
        "  *****  "
      ],
      [
        "    )    ",
        "  )   )  ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "    0    ",
        "1       1",
        "   0 0   ",
        "         ",
        "         ",
        "         "
      ],
      [
        "  11111  ",
        "  1 1 1  ",
        "  1 1 1  ",
        "  1 1 1  ",
        "  1 1 1  ",
        "  1 1 1  ",
        "  1 1 1  ",
        "  1 0 1  ",
        "111   111",
        "  10 01  ",
        "         ",
        "         ",
        "         "
      ],
      [
        "  22322  ",
        "  2 2 2  ",
        "  2 2 2  ",
        "  2 2 2  ",
        "  2 2 2  ",
        "  2 2 2  ",
        "  2 2 2  ",
        "  2 4 2  ",
        "  2   2  ",
        "  24 42  ",
        "         ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "    0    ",
        "         ",
        "   0 0   ",
        "         ",
        "         ",
        "         "
      ]
    ],
    "legend": {
      "0": {
        "block": "kubejs:hop_graphite_block"
      },
      "1": {
        "block": "electrodynamics:resourceblockhslasteel"
      },
      "2": {
        "block": "electrodynamics:wirehighlyinsulatedsuperconductive"
      },
      "3": {
        "block": "masterfulmachinery:advanced_energy_port_energy_input"
      },
      "4": {
        "block": "immersiveengineering:furnace_heater"
      },
      ")": {
        "block": "emendatusenigmatica:aluminum_block"
      },
      "*": {
        "block": "kubejs:alumina_refractory_bricks"
      },
      "+": {
        "block": "electrodynamics:resourceblockvanadiumsteel"
      },
      ",": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_input"
      },
      "-": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_output"
      },
      ".": {
        "block": "masterfulmachinery:advanced_item_port_items_input"
      },
      "/": {
        "block": "masterfulmachinery:advanced_item_port_items_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 32,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:iron_ingot","count": 6}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:invar_ingot","count": 6}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ingotchromium","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ingotmolybdenum","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:silicon_gem","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_nitrogen","amount": 4000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:oxygen","amount": 4000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 15000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ingotstainlesssteel","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:otherworld_ashes","count": 6}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:burnt_otherstone","count": 6}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:chalk_white_impure","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "occultism:otherstone","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:lightning_charge","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:burnt_otherstone","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ingotstainlesssteel","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:crushed_aestanite","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:aestanite_ingot","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:alloy_atomic","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:tanzanite","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "occultism:spirit_attuned_gem","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "psi:ebony_substance","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:psimetal","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "psi:ebony_psimetal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:obsidian_plate","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:redstone_crystal","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:redstone_imbued_obsidian_plate","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:antimony_oxide","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:antimony_ingot","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:stibnite_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:coke_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quicklime_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "thermal:slag","count": 2}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:molten_antimony_oxide","amount": 144}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "psi:ivory_substance","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:psimetal","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 16000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "psi:ivory_psimetal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:awakened_draconium_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:awakened_draconium_ingot","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:neodymium_dust","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_nitrogen","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_neodymium","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:block_refined_obsidian","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:pellet_plutonium","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:irilume_crystal","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:awakened_draconium_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:infused_obsidian","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 6,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "botania:shimmerrock","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:photonium","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "bloodmagic:corrupted_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 16000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:marble_raw","count": 4}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:tanzanite","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:lumium_dust","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:ingot_refined_glowstone","count": 4}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:volatile_golden_mixture","amount": 500}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:luminessence","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ingotstainlesssteel","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "pneumaticcraft:ingot_iron_compressed","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:earth_charge","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersivepetroleum:petcoke_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:black_dye","count": 4}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 6000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:black_iron_ingot","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 16,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:starmetal_ingot","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:resonating_gem","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "bloodmagic:ingot_hellforged","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:black_iron_ingot","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:coal_crystal","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:deep_essence","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:aethium_crystal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:nocturnal_powder","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:void","amount": 500}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dark_matter_alloy","count": 8}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 16,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:enderium_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:sky_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:iesnium_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:psimetal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:manasteel_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "bloodmagic:ingot_hellforged","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:starmetal_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:nether_star","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:diamond_crystal","count": 4}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:crystaltine_ingot","count": 8}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_wakurium","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_bioterium","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_bitripentium","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:nanorite_crystal","count": 4}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_xenon","amount": 200}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_quantanium","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:molten_ilmenite_carbon","amount": 144}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:chlorine","amount": 250}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:titanium_tetrachloride","amount": 72}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:aluminum_iodide","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:crude_titanium_dust","count": 3}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:titanium_tetraiodide","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:bauxite_dust","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 25}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:impure_titanium_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ingottitanium","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:xenate_salt","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:fluorite_gem","count": 1}, "chance": 0.05},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_xenon","amount": 250}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:enderium_ingot","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:ender_air_bottle","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "occultism:crushed_end_stone","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:ender_ingot","count": 1}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "kubejs:dark_matter_alloy_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:luminessence","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "extrabotany:spirit","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:mana_powder","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:fading_light_essence","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:illumination_powder","count": 8}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "kubejs:dark_matter_alloy_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:illumination_powder","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:ice_charge","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "psi:ebony_psimetal","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:void_essence","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:nocturnal_powder","count": 8}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_arc_furnace",
    "controllerId": "advanced",
    "ticks": 2,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:black_iron_slate","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:luminessence_block","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:charged_certus_quartz_crystal","count": 4}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "extendedcrafting:elite_component","count": 1}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "crystallization_tank",
    "controllerId": "magical",
    "name": "Crystallization Tank",
    "layout": [
        [
          ")*+*)",
          "*,,,*",
          "+,-,+",
          "*,,,*",
          ")*+*)"
        ],
        [
          "./C/.",
          "/   /",
          "0 1 2",
          "/   /",
          "./3/."
        ],
        [
          ".///.",
          "/   /",
          "/   /",
          "/   /",
          ".///."
        ],
        [
          ".///.",
          "/   /",
          "/ 4 /",
          "/   /",
          ".///."
        ],
        [
          ".///.",
          "/   /",
          "/   /",
          "/   /",
          ".///."
        ],
        [
          "./5/.",
          "/   /",
          "6 1 6",
          "/   /",
          "./7/."
        ],
        [
          ")*+*)",
          "*,,,*",
          "+,8,+",
          "*,,,*",
          ")*+*)"
        ]
      ],
      "legend": {
        ")": {
          "block": "astralsorcery:marble_engraved"
        },
        "*": {
          "block": "astralsorcery:marble_arch"
        },
        "+": {
          "block": "astralsorcery:marble_stairs"
        },
        ",": {
          "block": "astralsorcery:black_marble_raw"
        },
        "-": {
          "block": "masterfulmachinery:magical_energy_port_energy_input"
        },
        ".": {
          "block": "astralsorcery:marble_bricks"
        },
        "/": {
          "block": "thermal:enderium_glass"
        },
        "0": {
          "block": "masterfulmachinery:magical_item_port_items_output"
        },
        "1": {
          "block": "astralsorcery:ritual_link"
        },
        "2": {
          "block": "masterfulmachinery:magical_item_port_items_input"
        },
        "3": {
          "block": "masterfulmachinery:magical_mana_port_botania_mana_input"
        },
        "4": {
          "block": "astralsorcery:rock_collector_crystal"
        },
        "5": {
          "block": "masterfulmachinery:magical_starlight_port_astral_starlight_input"
        },
        "6": {
          "block": "masterfulmachinery:magical_fluid_port_fluids_input"
        },
        "7": {
          "block": "masterfulmachinery:magical_pressure_port_pncr_pressure_input"
        },
        "8": {
          "block": "kubejs:starglass"
        }
      }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:coal_block","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:coal_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:diamond_block","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:diamond_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:emerald_block","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:emerald_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:redstone_block","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:redstone_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:lapis_block","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:lapis_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "appliedenergistics2:charged_certus_quartz_crystal","count": 9}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:charged_certus_quartz_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallization_tank",
    "controllerId": "magical",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:quartz","count": 9}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "astralsorcery:liquid_starlight","amount": 250}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 250}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount": 50000}},
      {"type": "masterfulmachinery:astral_starlight","data":{"amount": 2000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 100000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:quartz_crystal","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "air_collector",
    "controllerId": "advanced",
    "name": "Air Collector",
    "layout": [
      [
        ")*)",
        "*+*",
        ")*)"
      ],
      [
        "*1*",
        ", ,",
        "*C*"
      ],
      [
        ")*)",
        "*-*",
        ")*)"
      ]
    ],
    "legend": {
      ")": {
        "block": "emendatusenigmatica:steel_block"
      },
      "*": {
        "block": "immersiveengineering:sheetmetal_steel"
      },
      "+": {
        "block": "masterfulmachinery:advanced_energy_port_energy_input"
      },
      ",": {
        "block": "immersiveengineering:alu_scaffolding_standard"
      },
      "-": {
        "block": "masterfulmachinery:advanced_gas_port_mekanism_gas_output"
      },
      "1": {
        "block": "masterfulmachinery:advanced_item_port_items_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "air_collector",
    "controllerId": "advanced",
    "dimension": "minecraft:overworld",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500}},
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "minecraft:stone","count": 1}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:air","amount": 250}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "air_collector",
    "controllerId": "advanced",
    "conditions": [{"type":"masterfulmachinery:dimension","dimension":"minecraft:the_end"}],
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500}},
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "minecraft:end_stone","count": 1}},
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:ender_air","amount": 250}}
    ]
  })
  //LAC
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "liquid_air_condenser",
    "controllerId": "advanced",
    "name": "Liquid Air Condenser",
    "layout": [
      [
        "      ",
        "))))))",
        "))))))",
        "))))))",
        "))))))",
        "))))))",
        "))))))"
      ],
      [
        "      ",
        " * +,+",
        "-*-+,+",
        " * +,+",
        " * +,+",
        "-*-+,+",
        " C +,+"
      ],
      [
        " .... ",
        "*.*+.+",
        "*.*+.+",
        "/0*+.+",
        "*1*+.+",
        "* *+.+",
        "*2*+3+"
      ],
      [
        "      ",
        " * +,+",
        " * +,+",
        " * +,+",
        " * +,+",
        " 4 +,+",
        " * +,+"
      ]
    ],
    "legend": {
      "0": {
        "block": "create:gearbox"
      },
      "1": {
        "block": "create:encased_fan"
      },
      "2": {
        "block": "electrodynamics:glassaluminum"
      },
      "3": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_output"
      },
      "4": {
        "block": "masterfulmachinery:advanced_gas_port_mekanism_gas_input"
      },
      ")": {
        "block": "immersiveengineering:concrete"
      },
      "*": {
        "block": "immersiveengineering:sheetmetal_aluminum"
      },
      "+": {
        "block": "pneumaticcraft:heat_sink"
      },
      ",": {
        "block": "create:copper_casing"
      },
      "-": {
        "block": "immersiveengineering:alu_scaffolding_standard"
      },
      ".": {
        "block": "create:fluid_pipe"
      },
      "/": {
        "block": "masterfulmachinery:advanced_kinetic_port_create_rotation_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "liquid_air_condenser",
    "controllerId": "advanced",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:air","amount": 250}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 7500}},
      {"type": "masterfulmachinery:create_rotation","consumePerTick": true,"data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_air","amount": 25}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "liquid_air_condenser",
    "controllerId": "advanced",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:inert_air","amount": 250}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 75000}},
      {"type": "masterfulmachinery:create_rotation","consumePerTick": true,"data":{"speed": 256}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_inert_air","amount": 25}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "cryogenic_distillation_column",
    "controllerId": "advanced",
    "name": "Cryogenic Distillation Columnn",
    "layout": [
      [
        ")))",
        ")*)",
        ")))"
      ],
      [
        "+,+",
        "- -",
        "+C+"
      ],
      [
        ")))",
        ") )",
        ")))"
      ],
      [
        ")))",
        ") )",
        ")))"
      ],
      [
        "+.+",
        "- -",
        "+-+"
      ],
      [
        ")))",
        ") )",
        ")))"
      ],
      [
        ")))",
        ") )",
        ")))"
      ],
      [
        "+.+",
        "- -",
        "+-+"
      ],
      [
        ")))",
        ") )",
        ")))"
      ],
      [
        ")))",
        ") )",
        ")))"
      ],
      [
        "+.+",
        "- -",
        "+-+"
      ],
      [
        ")))",
        ")))",
        ")))"
      ]
    ],
    "legend": {
      ")": {
        "block": "immersiveengineering:sheetmetal_aluminum"
      },
      "*": {
        "block": "masterfulmachinery:advanced_energy_port_energy_input"
      },
      "+": {
        "block": "electrodynamics:resourceblockhslasteel"
      },
      ",": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_input"
      },
      "-": {
        "block": "electrodynamics:resourceblockvanadiumsteel"
      },
      ".": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cryogenic_distillation_column",
    "controllerId": "advanced",
    "ticks": 6,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_air","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_argon","amount": 10}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_oxygen","amount": 300}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_nitrogen","amount": 700}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "cryogenic_distillation_column",
    "controllerId": "advanced",
    "ticks": 6,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_inert_air","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_xenon","amount": 10}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_argon","amount": 40}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_nitrogen","amount": 750}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "expansion_valve",
    "controllerId": "advanced",
    "name": "Expansion Valve",
    "layout": [
      [
        ")))",
        "***",
        "***",
        "***",
        ")))"
      ],
      [
        ")+)",
        "* *",
        ", C",
        "* *",
        ")-)"
      ],
      [
        ")))",
        "***",
        "***",
        "***",
        ")))"
      ]
    ],
    "legend": {
      ")": {
        "block": "electrodynamics:resourceblockhslasteel"
      },
      "*": {
        "block": "immersiveengineering:sheetmetal_aluminum"
      },
      "+": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_output"
      },
      ",": {
        "block": "masterfulmachinery:advanced_energy_port_energy_input"
      },
      "-": {
        "block": "masterfulmachinery:advanced_fluid_port_fluids_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "expansion_valve",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_argon","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_argon","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "expansion_valve",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_xenon","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_xenon","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "expansion_valve",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_oxygen","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:oxygen","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "expansion_valve",
    "controllerId": "advanced",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cryogenic_nitrogen","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_nitrogen","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "large_mixer",
    "controllerId": "basic",
    "name": "Large Mixer",
    "layout": [
      [
        " ),) ",
        ")))))",
        "))S))",
        ")))))",
        " )C) "
      ],
      [
        " ... ",
        "+   +",
        "+ / +",
        "+   +",
        " ... "
      ],
      [
        " ... ",
        "0   1",
        "2 ! 3",
        "0   1",
        " ... "
      ],
      [
        " ... ",
        "+   +",
        "+ * +",
        "+   +",
        " ... "
      ],
      [
        " ))) ",
        ") 5 )",
        ")5-5)",
        ") 5 )",
        " ))) "
      ]
    ],
    "legend": {
      ")": {
        "block": "mekanism:boiler_casing"
      },
      "*": {
        "block": "create:shaft"
      },
      "+": {
        "block": "immersiveengineering:sheetmetal_aluminum"
      },
      ",": {
        "block": "masterfulmachinery:basic_energy_port_energy_input"
      },
      "-": {
        "block": "masterfulmachinery:basic_kinetic_port_create_rotation_input"
      },
      ".": {
        "block": "appliedenergistics2:quartz_vibrant_glass"
      },
      "/": {
        "block": "create:cogwheel"
      },
      "0": {
        "block": "masterfulmachinery:basic_fluid_port_fluids_input"
      },
      "1": {
        "block": "masterfulmachinery:basic_fluid_port_fluids_output"
      },
      "2": {
        "block": "masterfulmachinery:basic_item_port_items_input"
      },
      "3": {
        "block": "masterfulmachinery:basic_item_port_items_output"
      },
      "5": {
        "block": "immersiveengineering:slab_steel_scaffolding_standard"
      },
      "S": {
        "block": "emendatusenigmatica:steel_block"
      },
      "!": {
        "block": "create:large_cogwheel"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 3,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:impure_aquamarine","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:silicon_carbide_paste","amount": 250}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 16000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "astralsorcery:aquamarine","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:molten_antimony_trichloride","amount": 144}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:chlorine","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 50000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:antimony_pentachloride","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "buddycards:shredded_buddycard","count": 2}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 250}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "buddycards:recycled_buddycard","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "eidolon:wicked_weave","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "eidolon:death_essence","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "eidolon:tattered_cloth","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "create:wheat_flour","count": 2}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "create:dough","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:dust_refined_obsidian","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "industrialforegoing:biofuel","amount": 250}},
      {"type": "masterfulmachinery:items","data":{"item": "thermal:basalz_powder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "botania:pebble","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:bitumen_gem","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "thermal:earth_charge","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:quartz_dust","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:obsidian_dust","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "create:polished_rose_quartz","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "create:chromatic_compound","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:steel_sand","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:zinc_dust","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "immersiveengineering:biodiesel","amount": 500}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:galvanized_steel_ingot","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:gold_leaf","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:volatile_golden_mixture","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "naturesaura:gold_powder","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:salt","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:limestone_dust","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_carbon_dioxide","amount": 100}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:sodium_bicarbonate","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:germinated_ivory_seed","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:active_infusion_token","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "psi:ivory_substance","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:infusion_token","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:vitreous_block","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:active_infusion_token","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "psi:psigem_block","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:infusion_token","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:germinated_ebony_seed","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:active_infusion_token","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "psi:ebony_substance","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:infusion_token","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "immersivepetroleum:diesel","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "immersiveengineering:biodiesel","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:nitro_diesel","amount": 2000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:limestone_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersiveengineering:insulating_glass","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:clay_ball","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 4000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:molten_fiberglass","amount": 2000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "emendatusenigmatica:molten_redstone","amount": 100}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 4000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:pristine_solution","amount": 144}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_xenon","amount": 1000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:distilled_water","amount": 8000}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:chemicals_a","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:dust_quantanium","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:dust_bioterium","count": 4}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 250000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:chemicals_c","count": 1}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:ilmenite_dust","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:coke_dust","count": 3}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 150000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:ilmenite_carbon_mixture","count": 4}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 250}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:iron_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 8000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:iron_oxide","count": 1}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:ammonium_nitrate","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:aluminum_dust","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:iron_oxide","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 80000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 4}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 20,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:xenon_difluoride","amount": 500}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hydrofluoric_acid","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 8000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:xenon_hexafluoride","count": 4}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:bauxite_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quicklime_dust","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:bauxite_slurry","amount": 144}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 10,
    "inputs": [
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "kubejs:chilly_core","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:heated_bauxite_slurry","amount": 144}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:red_mud","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:aluminate_solution","amount": 144}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:gold_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "immersivepetroleum:petcoke_dust","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "immersivepetroleum:diesel","amount": 500}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 300}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:volatile_golden_mixture","amount": 500}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 5,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "thermal:blizz_powder","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "bloodmagic:corrupted_dust","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:blue_ice","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:cryolite_crystal","count": 4}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:cold_water","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 1000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "thermal:ice_charge","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "minecraft:magma_cream","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "nethers_delight:propelpearl","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:lava","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 1000}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
        {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:magma_gelatin","amount": 1000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "large_mixer",
    "controllerId": "basic",
    "ticks": 4,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "mekanism:enriched_iron","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:coke_dust","count": 1}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "immersiveengineering:concrete","amount": 1000}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 7500}},
      {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:ceramicwet","count": 2}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "oxidation_chamber",
    "controllerId": "reinforced",
    "name": "Oxidation Chamber",
    "layout": [
      [
        " ))) ",
        ")))))",
        "))*))",
        ")))))",
        " ))) "
      ],
      [
        "  +  ",
        " ,-, ",
        "+-.-+",
        " ,-, ",
        "  +  "
      ],
      [
        "  /  ",
        " , , ",
        "0 . 1",
        " , , ",
        "  C  "
      ],
      [
        "  +  ",
        " ,2, ",
        "+2.2+",
        " ,2, ",
        "  +  "
      ],
      [
        "  +  ",
        " , , ",
        "+ . +",
        " , , ",
        "  +  "
      ],
      [
        "  +  ",
        " , , ",
        "+ . +",
        " , , ",
        "  +  "
      ],
      [
        "  +  ",
        " , , ",
        "+ . +",
        " , , ",
        "  +  "
      ],
      [
        "  +  ",
        " , , ",
        "+ . +",
        " , , ",
        "  +  "
      ],
      [
        "  +  ",
        " , , ",
        "+ . +",
        " , , ",
        "  +  "
      ],
      [
        "  +  ",
        " ,2, ",
        "+2.2+",
        " ,2, ",
        "  +  "
      ],
      [
        "  +  ",
        " ,-, ",
        "+-.-+",
        " ,-, ",
        "  +  "
      ],
      [
        "  +  ",
        " ,-, ",
        "+-.-+",
        " ,-, ",
        "  +  "
      ],
      [
        " ))) ",
        ")))))",
        "))3))",
        ")))))",
        " ))) "
      ]
    ],
    "legend": {
      "0": {
        "block": "masterfulmachinery:reinforced_fluid_port_fluids_input"
      },
      "1": {
        "block": "masterfulmachinery:reinforced_item_port_items_input"
      },
      "2": {
        "block": "futurepack:metal_block_gitter"
      },
      "3": {
        "block": "masterfulmachinery:reinforced_gas_port_mekanism_gas_input"
      },
      ")": {
        "block": "futurepack:color_iron_black"
      },
      "*": {
        "block": "masterfulmachinery:reinforced_energy_port_energy_input"
      },
      "+": {
        "block": "futurepack:color_iron_light_gray"
      },
      ",": {
        "block": "futurepack:color_glass_white"
      },
      "-": {
        "block": "pneumaticcraft:heat_sink"
      },
      ".": {
        "block": "create:fluid_pipe"
      },
      "/": {
        "block": "masterfulmachinery:reinforced_fluid_port_fluids_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "oxidation_chamber",
    "controllerId": "reinforced",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_ammonia","amount": 1000}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:oxygen","amount": 1250}},
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "kubejs:platinum_catalyst","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:nitric_oxide","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "oxidation_chamber",
    "controllerId": "reinforced",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:nitric_oxide","amount": 1000}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:oxygen","amount": 500}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_nitrogen_dioxide","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "launchpad",
    "controllerId": "reinforced",
    "name": "Launchpad",
    "layout": [
      [
        ")**+**)",
        "*,,,,,*",
        "*,,,,,*",
        "-,,,,,.",
        "*,,,,,*",
        "*,,,,,*",
        ")**C**)"
      ],
      [
        "       ",
        " ///// ",
        " /000/ ",
        " /000/ ",
        " /000/ ",
        " ///// ",
        "       "
      ]
    ],
    "legend": {
      "0": {
        "block": "kubejs:actively_cooled_casing"
      },
      ")": {
        "block": "futurepack:metal_block"
      },
      "*": {
        "block": "futurepack:metal_block_ventilation"
      },
      "+": {
        "block": "masterfulmachinery:reinforced_energy_port_energy_input"
      },
      ",": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      "-": {
        "block": "masterfulmachinery:reinforced_item_port_items_input"
      },
      ".": {
        "block": "masterfulmachinery:reinforced_item_port_items_output"
      },
      "/": {
        "block": "futurepack:color_gitter_slab_white"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"minecraft:overworld"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_crystal_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_crystal_excavation_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"minecraft:overworld"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:asteroid_collection_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:asteroid_collection_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:menelaus"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:ilmenite_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:ilmenite_excavation_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:menelaus"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_crystal_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_crystal_excavation_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"minecraft:overworld"},
    "ticks":1200,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:compact_teleportation_core","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:asteroid_belt_teleportation_device","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"minecraft:overworld"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rare_earth_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rare_earth_excavation_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:tyros"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:air_pumping_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:air_pumping_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:tyros"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elite_crystal_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elite_crystal_excavation_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:tyros"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:helium_3_sifting_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:helium_3_sifter_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "launchpad",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"minecraft:overworld"},
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_rocket","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:iridium_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_rods","count": 64}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 500000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:iridium_excavation_unit_access_card","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "name": "Wireless Material Receiver",
    "layout": [
      [
        "  ))))*))))  ",
        " )    +    ) ",
        ")     +     )",
        ")    +++    )",
        ")   ,+++,   )",
        ")  +++++++  )",
        "-+++++1+++++-",
        ")  +++++++  )",
        ")   ,+++,   )",
        ")    +++    )",
        ")     +     )",
        " )    +    ) ",
        "  ))))C))))  "
      ],
      [
        "      -      ",
        "             ",
        "             ",
        "             ",
        "    , . ,    ",
        "     ./.     ",
        "-   ./0/.   -",
        "     ./.     ",
        "    , . ,    ",
        "             ",
        "             ",
        "             ",
        "      -      "
      ],
      [
        "      -      ",
        "             ",
        "             ",
        "             ",
        "    , . ,    ",
        "             ",
        "-   .   .   -",
        "             ",
        "    , . ,    ",
        "             ",
        "             ",
        "             ",
        "      -      "
      ],
      [
        "      -      ",
        "             ",
        "             ",
        "             ",
        "    , / ,    ",
        "             ",
        "-   /   /   -",
        "             ",
        "    , / ,    ",
        "             ",
        "             ",
        "             ",
        "      -      "
      ],
      [
        "      -      ",
        "             ",
        "             ",
        "             ",
        "    , . ,    ",
        "             ",
        "-   .   .   -",
        "             ",
        "    , . ,    ",
        "             ",
        "             ",
        "             ",
        "      -      "
      ],
      [
        "      -      ",
        "      -      ",
        "             ",
        "             ",
        "    , . ,    ",
        "     ./.     ",
        "--  ././.  --",
        "     ./.     ",
        "    , . ,    ",
        "             ",
        "             ",
        "      -      ",
        "      -      "
      ],
      [
        "             ",
        "      -      ",
        "             ",
        "             ",
        "    ,,,,,    ",
        "    ,   ,    ",
        " -  , 2 ,  - ",
        "    ,   ,    ",
        "    ,,,,,    ",
        "             ",
        "             ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "      -      ",
        "             ",
        "             ",
        "    3  43    ",
        "    4        ",
        " -    5    - ",
        "        4    ",
        "    34  3    ",
        "             ",
        "             ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "      -      ",
        "             ",
        "             ",
        "    3 443    ",
        "    4        ",
        " -  4 5 4  - ",
        "        4    ",
        "    344 3    ",
        "             ",
        "             ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "      -      ",
        "             ",
        "             ",
        "    344 3    ",
        "        4    ",
        " -  4 5 4  - ",
        "    4        ",
        "    3 443    ",
        "             ",
        "             ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "      -      ",
        "             ",
        "             ",
        "    34  3    ",
        "        4    ",
        " -    5    - ",
        "    4        ",
        "    3  43    ",
        "             ",
        "             ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "      -      ",
        "             ",
        "             ",
        "    36663    ",
        "    6   6    ",
        " -  6 5 6  - ",
        "    6   6    ",
        "    36663    ",
        "             ",
        "             ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "      -      ",
        "      -      ",
        "             ",
        "    34  3    ",
        "        4    ",
        " --   5   -- ",
        "    4        ",
        "    3  43    ",
        "             ",
        "      -      ",
        "      -      ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "             ",
        "    344 3    ",
        "        4    ",
        "  - 4 5 4 -  ",
        "    4        ",
        "    3 443    ",
        "             ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "             ",
        "    3 443    ",
        "    4        ",
        "  - 4 5 4 -  ",
        "        4    ",
        "    344 3    ",
        "             ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "             ",
        "    3  43    ",
        "    4        ",
        "  -   5   -  ",
        "        4    ",
        "    34  3    ",
        "             ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "             ",
        "    36663    ",
        "    6   6    ",
        "  - 6 5 6 -  ",
        "    6   6    ",
        "    36663    ",
        "             ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "             ",
        "    3  43    ",
        "    4        ",
        "  -   5   -  ",
        "        4    ",
        "    34  3    ",
        "             ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "             ",
        "    3 443    ",
        "    4        ",
        "  - 4 5 4 -  ",
        "        4    ",
        "    344 3    ",
        "             ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "      -      ",
        "      -      ",
        "    344 3    ",
        "        4    ",
        "  --4 5 4--  ",
        "    4        ",
        "    3 443    ",
        "      -      ",
        "      -      ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "      -      ",
        "    34  3    ",
        "        4    ",
        "   -  5  -   ",
        "    4        ",
        "    3  43    ",
        "      -      ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "      -      ",
        "    36663    ",
        "    6   6    ",
        "   -6 5 6-   ",
        "    6   6    ",
        "    36663    ",
        "      -      ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "     7+7     ",
        "   7+ - +7   ",
        "   +34  3+   ",
        "  7     4 7  ",
        "  +-  5  -+  ",
        "  7 4     7  ",
        "   +3  43+   ",
        "   7+ - +7   ",
        "     7+7     ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "      -      ",
        "    344 3    ",
        "        4    ",
        "   -4 5 4-   ",
        "    4        ",
        "    3 443    ",
        "      -      ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "      -      ",
        "    3 443    ",
        "    4        ",
        "   -4 5 4-   ",
        "        4    ",
        "    344 3    ",
        "      -      ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "     7+7     ",
        "   7+ - +7   ",
        "   +3  43+   ",
        "  7 4     7  ",
        "  +-  5  -+  ",
        "  7       7  ",
        "   +34  3+   ",
        "   7+ - +7   ",
        "     7+7     ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "      -      ",
        "    36-63    ",
        "    63-36    ",
        "   ---5---   ",
        "    63-36    ",
        "    36-63    ",
        "      -      ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     686     ",
        "     858     ",
        "     686     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     686     ",
        "     858     ",
        "     686     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     686     ",
        "     858     ",
        "     686     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     6 6     ",
        "      5      ",
        "     6 6     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     686     ",
        "     858     ",
        "     686     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     969     ",
        "     656     ",
        "     969     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     969     ",
        "     656     ",
        "     969     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     969     ",
        "     656     ",
        "     969     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     969     ",
        "     656     ",
        "     969     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     969     ",
        "     656     ",
        "     969     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     999     ",
        "     959     ",
        "     999     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     999     ",
        "     959     ",
        "     999     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     999     ",
        "     959     ",
        "     999     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     999     ",
        "     959     ",
        "     999     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     999     ",
        "     959     ",
        "     999     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "     :::     ",
        "     :5:     ",
        "     :::     ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "      5      ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ],
      [
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "      ;      ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             ",
        "             "
      ]
    ],
    "legend": {
      ")": {
        "block": "futurepack:metal_block"
      },
      "*": {
        "block": "masterfulmachinery:reinforced_energy_port_energy_input"
      },
      "+": {
        "block": "futurepack:color_iron_gray"
      },
      ",": {
        "block": "electrodynamics:resourceblockstainlesssteel"
      },
      "-": {
        "block": "thermal:enderium_block"
      },
      ".": {
        "block": "mekanism:teleporter_frame"
      },
      "/": {
        "block": "mekanism:teleporter"
      },
      "0": {
        "block": "masterfulmachinery:reinforced_item_port_items_output"
      },
      "1": {
        "block": "masterfulmachinery:reinforced_gas_port_mekanism_gas_output"
      },
      "2": {
        "block": "masterfulmachinery:reinforced_item_port_items_input"
      },
      "3": {
        "block": "futurepack:color_iron_white"
      },
      "4": {
        "block": "futurepack:color_gitter_stair_white"
      },
      "5": {
        "block": "futurepack:wire_super"
      },
      "6": {
        "block": "futurepack:metal_block_gitter"
      },
      "7": {
        "block": "futurepack:color_luftung_gray"
      },
      "8": {
        "block": "futurepack:color_gitter_slab_white"
      },
      "9": {
        "block": "futurepack:metal_gitter_pane"
      },
      ":": {
        "block": "futurepack:color_iron_slab_gray"
      },
      ";": {
        "block": "kubejs:dark_matter_frame"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.05,"data":{"item": "kubejs:basic_crystal_excavation_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:crystal_alutin","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:crystal_retium","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.05,"data":{"item": "kubejs:ilmenite_excavation_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:ilmenite_ore","count": 8}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.05,"data":{"item": "kubejs:asteroid_collection_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:meteor_rock","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.05,"data":{"item": "kubejs:advanced_crystal_excavation_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:crystal_glowtite","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.05,"data":{"item": "kubejs:rare_earth_excavation_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_rare_earth","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.05,"data":{"item": "kubejs:elite_crystal_excavation_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:crystal_bioterium","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.02,"data":{"item": "kubejs:helium_3_sifter_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:impure_helium_3","amount": 100000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "wireless_material_transceiver",
    "controllerId": "reinforced",
    "ticks":5,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0.02,"data":{"item": "kubejs:air_pumping_unit_access_card","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:inert_air","amount": 100000}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "gas_absorption_chamber",
    "controllerId": "basic",
    "name": "Gas Absorption Chamber",
    "layout": [
      [
        ")*)",
        "*+*",
        ")*)"
      ],
      [
        ",-,",
        "./.",
        ",C,"
      ],
      [
        ",,,",
        ",/,",
        ",,,"
      ],
      [
        ",0,",
        ", ,",
        ",,,"
      ],
      [
        ",,,",
        ", ,",
        ",,,"
      ],
      [
        ")*)",
        "*1*",
        ")*)"
      ]
    ],
    "legend": {
      "0": {
        "block": "masterfulmachinery:basic_gas_port_mekanism_gas_input"
      },
      "1": {
        "block": "masterfulmachinery:basic_pressure_port_pncr_pressure_input"
      },
      ")": {
        "block": "electrodynamics:resourceblockvanadiumsteel"
      },
      "*": {
        "block": "immersiveengineering:sheetmetal_aluminum"
      },
      "+": {
        "block": "masterfulmachinery:basic_energy_port_energy_input"
      },
      ",": {
        "block": "appliedenergistics2:quartz_vibrant_glass"
      },
      "-": {
        "block": "masterfulmachinery:basic_fluid_port_fluids_input"
      },
      ".": {
        "block": "masterfulmachinery:basic_fluid_port_fluids_output"
      },
      "/": {
        "block": "minecraft:water"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gas_absorption_chamber",
    "controllerId": "basic",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:nitrogen_dioxide","amount": 3000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 10}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 32000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:nitric_acid","amount": 2000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:nitric_oxide","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gas_absorption_chamber",
    "controllerId": "basic",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:hydrogen_chloride","amount": 500}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 10}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hydrochloric_acid","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gas_absorption_chamber",
    "controllerId": "basic",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:sulfur_trioxide","amount": 500}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 10}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:sulfuric_acid","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gas_absorption_chamber",
    "controllerId": "basic",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:hydrofluoric_acid","amount": 500}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 10}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hydrofluoric_acid","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gas_absorption_chamber",
    "controllerId": "basic",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:xenon_trioxide","amount": 500}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 10}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:xenic_acid","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "gas_absorption_chamber",
    "controllerId": "basic",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:hydrogen_iodide","amount": 500}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:distilled_water","amount": 1000}},
      {"type": "masterfulmachinery:pncr_pressure","data":{"air": 10}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 5000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:iodane","amount": 1000}},
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "space_assembler",
    "controllerId": "reinforced",
    "name": "Low-Gravity Assembler",
    "layout": [
      [
        "           ",
        "           ",
        "           ",
        "           ",
        "           ",
        "     !     ",
        "           ",
        "           ",
        "           ",
        "           ",
        "           "
      ],
      [
        "           ",
        "           ",
        "           ",
        "           ",
        "     )     ",
        "    ) )    ",
        "     )     ",
        "           ",
        "           ",
        "           ",
        "           "
      ],
      [
        "           ",
        "           ",
        "           ",
        "     *     ",
        "    + +    ",
        "   *   *   ",
        "    + +    ",
        "     *     ",
        "           ",
        "           ",
        "           "
      ],
      [
        "           ",
        "           ",
        "     *     ",
        "    + +    ",
        "   +   +   ",
        "  *     *  ",
        "   +   +   ",
        "    + +    ",
        "     *     ",
        "           ",
        "           "
      ],
      [
        "           ",
        "     )     ",
        "    + +    ",
        "   +   +   ",
        "  +     +  ",
        " )       ) ",
        "  +     +  ",
        "   +   +   ",
        "    + +    ",
        "     )     ",
        "           "
      ],
      [
        "     C     ",
        "    ) )    ",
        "   *   *   ",
        "  *     *  ",
        " )       ) ",
        ",    -    .",
        " )       ) ",
        "  *     *  ",
        "   *   *   ",
        "    ) )    ",
        "     /     "
      ],
      [
        "           ",
        "     )     ",
        "    + +    ",
        "   +   +   ",
        "  +     +  ",
        " )       ) ",
        "  +     +  ",
        "   +   +   ",
        "    + +    ",
        "     )     ",
        "           "
      ],
      [
        "           ",
        "           ",
        "     *     ",
        "    + +    ",
        "   +   +   ",
        "  *     *  ",
        "   +   +   ",
        "    + +    ",
        "     *     ",
        "           ",
        "           "
      ],
      [
        "           ",
        "           ",
        "           ",
        "     *     ",
        "    + +    ",
        "   *   *   ",
        "    + +    ",
        "     *     ",
        "           ",
        "           ",
        "           "
      ],
      [
        "           ",
        "           ",
        "           ",
        "           ",
        "     )     ",
        "    ) )    ",
        "     )     ",
        "           ",
        "           ",
        "           ",
        "           "
      ],
      [
        "           ",
        "           ",
        "           ",
        "           ",
        "           ",
        "     !     ",
        "           ",
        "           ",
        "           ",
        "           ",
        "           "
      ]
    ],
    "legend": {
      ")": {
        "block": "electrodynamics:resourceblocktitanium"
      },
      "*": {
        "block": "futurepack:color_iron_white"
      },
      "+": {
        "block": "futurepack:color_gitter_light_gray"
      },
      ",": {
        "block": "masterfulmachinery:reinforced_item_port_items_output"
      },
      "-": {
        "block": "futurepack:quantanium"
      },
      ".": {
        "block": "masterfulmachinery:reinforced_item_port_items_input"
      },
      "/": {
        "block": "masterfulmachinery:reinforced_energy_port_energy_input"
      },
      "!": {
        "block": "futurepack:color_iron_gray"
      }
    }
  })

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks": 5,
    "inputs": [
        {"type": "masterfulmachinery:items", "data": {"item": "kubejs:quantanium_casing", "count": 1}},
        {"type": "masterfulmachinery:items", "data": {"item": "kubejs:radiation_resistant_plate", "count": 16}},
        {"type": "masterfulmachinery:items", "data": {"item": "mekanism:pellet_polonium", "count": 1}},
        {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs": [
        {"type": "masterfulmachinery:items", "data": {"item": "kubejs:radiation_resistant_casing", "count": 4}}
    ]
})
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_thruster","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_plating","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ceramic","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_magnet","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_fire","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_air","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:titaniumheatcoil","count": 2}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_thruster","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_thruster","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_thruster","count": 3}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_plating","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_glowtite","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:quartz_glass","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:maschineboard","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:fuel_cell","count": 2}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_rocket","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:basic_crystal_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:drillheadtitanium","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_magnet","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:maschineboard","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_greed","count": 8}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_crystal_excavation_unit","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_glowtite","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:quartz_glass","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:maschineboard","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:display","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:laser_diode","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_glowtite","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:wirehighlyinsulatedsuperconductive","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_magnet","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:quartz_glass","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 8}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:laserdiode","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:drillheadtitanium","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_envy","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:laserdiode","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_crystal_glowtite","count": 8}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rare_earth_excavation_unit","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:dark_matter_frame","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_quantanium","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_quantanium","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 32}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:block_compressed_neon","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:actively_cooled_casing","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:double_maschineboard","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:chemicals_c","count": 4}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 1024000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quantanium_casing","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:maschineboard","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_copper","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_neon","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:wakurium_coil","count": 2}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:double_maschineboard","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:battery_neon","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:chemicals_a","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_glowtite","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_bitripentium","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:rodtitaniumcarbide","count": 16}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:energy_cell","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:energy_cell","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:chemicals_a","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:wakurium_coil","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_plating","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_magnet","count": 8}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:compact_energy_cell","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_crystal_excavation_unit","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:laserdiode","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:drone_engine","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:drillheadtitanium","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:double_maschineboard","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:magnet","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:advanced_plating","count": 32}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:elite_crystal_excavation_unit","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:double_maschineboard","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:polymer","count": 8}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:lack_tank_empty","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:coil_neon","count": 4}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:compact_energy_cell","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:drone_engine","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:redstone_imbued_obsidian_plate","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:aethium_wafer","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:ingot_magnet","count": 1}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "envirocore:aethium_interconnect","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "space_assembler",
    "controllerId": "reinforced",
    "conditions": {"type":"mm:dimension","dimension":"futurepack:asteroid_belt"},
    "ticks":7,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:helium3_rover","count": 6}},
      {"type": "masterfulmachinery:items","data":{"item": "futurepack:laserdiode","count": 2}},
      {"type": "masterfulmachinery:items","data":{"item": "electrodynamics:platetitanium","count": 32}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 256000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:helium_3_sifting_unit","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "supercritical_slurry_processor",
    "controllerId": "elite",
    "name": "Supercritical Slurry Processor",
    "layout": [
      [
        " )*+*) ",
        "))***))",
        "**)*)**",
        ",**-**.",
        "**)*)**",
        "))***))",
        " )*C*) "
      ],
      [
        "  ///  ",
        " )   ) ",
        "/     /",
        "/  0  /",
        "/     /",
        " )   ) ",
        "  ///  "
      ],
      [
        "  ///  ",
        " *   * ",
        "/     /",
        "/     /",
        "/     /",
        " *   * ",
        "  ///  "
      ],
      [
        "  ///  ",
        " *   * ",
        "/     /",
        "/     /",
        "/     /",
        " *   * ",
        "  ///  "
      ],
      [
        "  ///  ",
        " *   * ",
        "/     /",
        "/     /",
        "/     /",
        " *   * ",
        "  ///  "
      ],
      [
        "  ///  ",
        " *   * ",
        "/     /",
        "/     /",
        "/     /",
        " *   * ",
        "  ///  "
      ],
      [
        "  ///  ",
        " *   * ",
        "/     /",
        "/     /",
        "/     /",
        " *   * ",
        "  ///  "
      ],
      [
        "  ///  ",
        " )   ) ",
        "/     /",
        "/     /",
        "/     /",
        " )   ) ",
        "  ///  "
      ],
      [
        " )*+*) ",
        "))***))",
        "**)*)**",
        "1**2**3",
        "**)*)**",
        "))***))",
        " )*4*) "
      ]
    ],
    "legend": {
      "0": {
        "block": "mekanism:supercharged_coil"
      },
      "1": {
        "block": "masterfulmachinery:elite_item_port_items_input"
      },
      "2": {
        "block": "masterfulmachinery:elite_pressure_port_pncr_pressure_input"
      },
      "3": {
        "block": "masterfulmachinery:elite_item_port_items_output"
      },
      "4": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_input"
      },
      ")": {
        "block": "mekanism:sps_casing"
      },
      "*": {
        "block": "mekanismgenerators:fission_reactor_casing"
      },
      "+": {
        "block": "masterfulmachinery:elite_fluid_port_fluids_input"
      },
      ",": {
        "block": "masterfulmachinery:elite_slurry_port_mekanism_slurry_input"
      },
      "-": {
        "block": "masterfulmachinery:elite_energy_port_energy_input"
      },
      ".": {
        "block": "masterfulmachinery:elite_slurry_port_mekanism_slurry_output"
      },
      "/": {
        "block": "mekanismgenerators:reactor_glass"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "portal_to_asgard",
    "controllerId": "magical",
    "name": "Portal to Asgard",
    "layout": [
      [
        "  )C)  ",
        "       ",
        "       ",
        "*     *"
      ],
      [
        " )+++) ",
        "       ",
        "       ",
        ",     ,"
      ],
      [
        " -+++. ",
        "       ",
        "       ",
        "       "
      ],
      [
        " )+++) ",
        "       ",
        "       ",
        "       "
      ],
      [
        "  )/)  ",
        "       ",
        "       ",
        "       "
      ]
    ],
    "legend": {
      ")": {
        "block": "botania:glimmering_dreamwood"
      },
      "*": {
        "block": "botania:fabulous_pool"
      },
      "+": {
        "block": "connectedglass:scratched_glass_orange_pane"
      },
      ",": {
        "block": "mythicbotany:alfsteel_pylon"
      },
      "-": {
        "block": "masterfulmachinery:magical_item_port_items_input"
      },
      ".": {
        "block": "masterfulmachinery:magical_item_port_items_output"
      },
      "/": {
        "block": "masterfulmachinery:magical_mana_port_botania_mana_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "portal_to_asgard",
    "controllerId": "magical",
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0,"data":{"item": "kubejs:asgardian_crystal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:enchanted_crystal","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "bloodmagic:etherealslate","count": 16}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount":5000}},
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:stellar_core","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "portal_to_asgard",
    "controllerId": "magical",
    "ticks":2,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0,"data":{"item": "mekanism:digital_miner","count": 1}},
      {"type": "masterfulmachinery:items","chance": 0,"data":{"item": "kubejs:asgardian_crystal","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount":5000}},
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:pitchblende_ore","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "portal_to_asgard",
    "controllerId": "magical",
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","chance": 0,"data":{"item": "kubejs:asgardian_crystal","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:rune_amalgam","count": 1}},
      {"type": "masterfulmachinery:botania_mana","data":{"amount":5000}},
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:test_block","count": 16}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "draconic_containment_chamber",
    "controllerId": "elite",
    "name": "Draconic Containment Chamber",
    "layout": [
      [
        "               ",
        "               ",
        "               ",
        "       )       ",
        "               ",
        "               ",
        "               ",
        "   )       )   ",
        "               ",
        "               ",
        "               ",
        "       )       ",
        "               ",
        "               ",
        "              *"
      ],
      [
        "               ",
        "               ",
        "      *)*      ",
        "               ",
        "               ",
        "               ",
        "  *         *  ",
        "  )         )  ",
        "  *         *  ",
        "               ",
        "               ",
        "               ",
        "      *)*      ",
        "               ",
        "               "
      ],
      [
        "               ",
        "     **+**     ",
        "               ",
        "               ",
        "               ",
        " *           * ",
        " *           * ",
        " +           + ",
        " *           * ",
        " *           * ",
        "               ",
        "               ",
        "               ",
        "     **+**     ",
        "               "
      ],
      [
        "               ",
        "    ***+***    ",
        "               ",
        "   )       )   ",
        " *           * ",
        " *    ,,,    * ",
        " *   ,,-,,   * ",
        " +   ,---,   + ",
        " *   ,,-,,   * ",
        " *    ,,,    * ",
        " *           * ",
        "   )       )   ",
        "               ",
        "    ***+***    ",
        "               "
      ],
      [
        "      *,*      ",
        "   ***   ***   ",
        "  +         +  ",
        " *           * ",
        " *           * ",
        " *     ,     * ",
        "*     ...     *",
        ",    ,./.,    ,",
        "*     ...     *",
        " *     ,     * ",
        " *           * ",
        " *           * ",
        "  +         +  ",
        "   ***   ***   ",
        "      *,*      "
      ],
      [
        "     **,**     ",
        "   **     **   ",
        "  ,         ,  ",
        " *           * ",
        " *           * ",
        "*       ,     *",
        "*     ...,    *",
        ",     ./.     ,",
        "*     ...     *",
        "*             *",
        " *           * ",
        " *           * ",
        "  ,         ,  ",
        "   **     **   ",
        "     **,**     "
      ],
      [
        "     **0**     ",
        "   **     **   ",
        "  -         -  ",
        " *  1     1  * ",
        " * 1  1 1  1 * ",
        "*      1      *",
        "*   1 .2. 1   *",
        "3    12421    5",
        "*   1 .2. 1   *",
        "*      1      *",
        " * 1  1 1  1 * ",
        " *  1     1  * ",
        "  -         -  ",
        "   **     **   ",
        "     **C**     "
      ],
      [
        "     **,**     ",
        "   **     **   ",
        "  ,         ,  ",
        " *           * ",
        " *           * ",
        "*             *",
        "*     ...     *",
        ",     ./.     ,",
        "*     ...     *",
        "*             *",
        " *           * ",
        " *           * ",
        "  ,         ,  ",
        "   **     **   ",
        "     **,**     "
      ],
      [
        "      *,*      ",
        "   ***   ***   ",
        "  +         +  ",
        " *           * ",
        " *           * ",
        " *     ,     * ",
        "*     ...     *",
        ",    ,./.,    ,",
        "*     ...     *",
        " *     ,     * ",
        " *           * ",
        " *           * ",
        "  +         +  ",
        "   ***   ***   ",
        "      *,*      "
      ],
      [
        "               ",
        "    ***+***    ",
        "               ",
        "   )       )   ",
        " *           * ",
        " *    ,,,    * ",
        " *   ,,-,,   * ",
        " +   ,---,   + ",
        " *   ,,-,,   * ",
        " *    ,,,    * ",
        " *           * ",
        "   )       )   ",
        "               ",
        "    ***+***    ",
        "               "
      ],
      [
        "               ",
        "     **+**     ",
        "               ",
        "               ",
        "               ",
        " *           * ",
        " *           * ",
        " +           + ",
        " *             ",
        " *           * ",
        "               ",
        "               ",
        "               ",
        "     **+**     ",
        "               "
      ],
      [
        "               ",
        "               ",
        "      *)*      ",
        "               ",
        "               ",
        "               ",
        "  *         *  ",
        "  )         )  ",
        "  *         *  ",
        "               ",
        "               ",
        "               ",
        "      *)*      ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "       )       ",
        "               ",
        "               ",
        "               ",
        "   )       )   ",
        "               ",
        "               ",
        "               ",
        "       )       ",
        "               ",
        "               ",
        "               "
      ]
    ],
    "legend": {
      ")": {
        "block": "minecraft:nether_bricks"
      },
      "*": {
        "block": "futurepack:color_glass_red"
      },
      "+": {
        "block": "minecraft:obsidian"
      },
      ",": {
        "block": "draconicevolution:infused_obsidian"
      },
      "-": {
        "block": "draconicevolution:awakened_draconium_block"
      },
      ".": {
        "block": "futurepack:color_glass_black"
      },
      "/": {
        "block": "draconicevolution:chaos_crystal_part"
      },
      "0": {
        "block": "masterfulmachinery:elite_energy_port_energy_input"
      },
      "1": {
        "block": "draconicevolution:energy_core_stabilizer"
      },
      "2": {
        "block": "draconicevolution:reactor_injector"
      },
      "3": {
        "block": "masterfulmachinery:elite_item_port_items_input"
      },
      "4": {
        "block": "draconicevolution:chaos_crystal"
      },
      "5": {
        "block": "masterfulmachinery:elite_item_port_items_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "draconic_containment_chamber",
    "controllerId": "elite",
    "ticks":20,
    "inputs": [
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "draconicevolution:chaotic_energy_core","count": 1}},
      {"type": "masterfulmachinery:items","chance":0.03,"data":{"item": "draconicevolution:draconic_chestpiece","count": 1}},
      {"type": "masterfulmachinery:items","chance":0.03,"data":{"item": "draconicevolution:draconic_bow","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:cyanide","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:blue_substance","count": 16}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 128000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:chaos_shard","count": 5}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "draconic_containment_chamber",
    "controllerId": "elite",
    "ticks":20,
    "inputs": [
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "draconicevolution:chaotic_energy_core","count": 1}},
      {"type": "masterfulmachinery:items","chance":0.03,"data":{"item": "draconicevolution:wyvern_bow","count": 1}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:cyanide","count": 16}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:blue_substance","count": 16}},
      {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 128000}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "draconicevolution:dragon_heart","count": 8}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "pressurized_heavy_water_reactor",
    "controllerId": "elite",
    "name": "Pressurized Heavy Water Reactor",
    "layout": [
      [
        " ))) ",
        ")))))",
        "))*))",
        ")))))",
        " ))) "
      ],
      [
        " +C+ ",
        "+, ,+",
        "+ , +",
        "+, ,+",
        " +++ "
      ],
      [
        " +++ ",
        "+, ,+",
        "+ , +",
        "+, ,+",
        " +++ "
      ],
      [
        " +++ ",
        "+, ,+",
        "- , .",
        "+, ,+",
        " +++ "
      ],
      [
        " +++ ",
        "+, ,+",
        "+ , +",
        "+, ,+",
        " +++ "
      ],
      [
        " +++ ",
        "+, ,+",
        "+ , +",
        "+, ,+",
        " +++ "
      ],
      [
        " ))) ",
        ")))))",
        "))/))",
        ")))))",
        " ))) "
      ]
    ],
    "legend": {
      ")": {
        "block": "electrodynamics:resourceblocktitaniumcarbide"
      },
      "*": {
        "block": "masterfulmachinery:elite_fluid_port_fluids_input"
      },
      "+": {
        "block": "kubejs:radiation_resistant_casing"
      },
      ",": {
        "block": "mekanismgenerators:fission_fuel_assembly"
      },
      "-": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_output"
      },
      ".": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_input"
      },
      "/": {
        "block": "masterfulmachinery:elite_fluid_port_fluids_output"
      }
    }
  }
  )
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "pressurized_heavy_water_reactor",
    "controllerId": "elite",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:heavy_water","amount": 10000}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:low_enriched_uranium_fuel","amount": 100}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hot_heavy_water","amount": 10000}},
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:low_enriched_nuclear_waste","amount": 100}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "heat_exchanger",
    "controllerId": "elite",
    "name": "Heat Exchanger",
    "layout": [
      [
        ")))))))",
        "))*))))",
        ")))0)))"
      ],
      [
        ")+++++)",
        ",- ---)",
        ")++C++)"
      ],
      [
        ")+++++)",
        ")- - -)",
        ")+++++)"
      ],
      [
        ")+++++)",
        ")--- -.",
        ")+++++)"
      ],
      [
        ")))))))",
        ")))),))",
        ")))))))"
      ]
    ],
    "legend": {
      ")": {
        "block": "mekanism:boiler_casing"
      },
      "*": {
        "block": "masterfulmachinery:elite_fluid_port_fluids_output"
      },
      "+": {
        "block": "mekanism:structural_glass"
      },
      ",": {
        "block": "masterfulmachinery:elite_fluid_port_fluids_input"
      },
      "-": {
        "block": "create:fluid_pipe"
      },
      ".": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_output"
      },
      "0": {
        "block": "masterfulmachinery:elite_item_port_items_input"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "heat_exchanger",
    "controllerId": "elite",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hot_heavy_water","amount": 10000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 100000}},
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "emendatusenigmatica:copper_block","count": 1}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:steam","amount": 100000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:heavy_water","amount": 9975}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "heat_exchanger",
    "controllerId": "elite",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hot_heavy_water","amount": 20000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 200000}},
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "emendatusenigmatica:silver_block","count": 1}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:steam","amount": 200000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:heavy_water","amount": 19950}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "heat_exchanger",
    "controllerId": "elite",
    "ticks": 1,
    "inputs": [
      {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hot_heavy_water","amount": 40000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "minecraft:water","amount": 400000}},
      {"type": "masterfulmachinery:items","chance":0,"data":{"item": "kubejs:superconductive_block","count": 1}}
    ],
    "outputs":[
      {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:steam","amount": 400000}},
      {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:heavy_water","amount": 39900}}
    ]
  })
event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "nuclear_waste_reprocessor",
    "controllerId": "elite",
    "name": "Nuclear Waste Reprocessor",
    "layout": [
        [
        "))C))",
        ")***)",
        ")*+*)",
        ")***)",
        ")),))"
        ],
        [
        "-----",
        "-   -",
        "- . -",
        "-   -",
        "-----"
        ],
        [
        "-///-",
        "/ 0 /",
        "10.01",
        "/ 0 /",
        "-/1/-"
        ],
        [
        "-----",
        "-   -",
        "- . -",
        "-   -",
        "-----"
        ],
        [
        ")))))",
        ")***)",
        ")*2*)",
        ")***)",
        ")))))"
        ]
    ],
    "legend": {
        "0": {
        "block": "mekanism:radioactive_waste_barrel"
        },
        "1": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_output"
        },
        "2": {
        "block": "masterfulmachinery:elite_gas_port_mekanism_gas_input"
        },
        ")": {
        "block": "electrodynamics:resourceblocktitaniumcarbide"
        },
        "*": {
        "block": "electrodynamics:resourceblocktitanium"
        },
        "+": {
        "block": "masterfulmachinery:elite_energy_port_energy_input"
        },
        ",": {
        "block": "masterfulmachinery:elite_item_port_items_output"
        },
        "-": {
        "block": "kubejs:radiation_resistant_casing"
        },
        ".": {
        "block": "kubejs:plutonium_block"
        },
        "/": {
        "block": "mekanismgenerators:reactor_glass"
        }
    }
})
event.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "nuclear_waste_reprocessor",
  "controllerId": "elite",
  "ticks":5,
  "inputs": [
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:nuclear_waste","amount": 10000}},
    {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}}
  ],
  "outputs":[
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:spent_nuclear_waste","amount": 7500}},
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:plutonium","amount": 1250}},
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:polonium","amount": 1250}},
    {"type": "masterfulmachinery:items","data":{"item": "emendatusenigmatica:uranium_dust","count": 2}},
    {"type": "masterfulmachinery:items","data":{"item": "kubejs:enriched_uranium_dust","count": 1}}
  ]
})
event.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "nuclear_waste_reprocessor",
  "controllerId": "elite",
  "ticks":5,
  "inputs": [
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:low_enriched_nuclear_waste","amount": 10000}},
    {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 30000}}
  ],
  "outputs":[
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:spent_nuclear_waste","amount": 2500}},
    {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "mekanism:polonium","amount": 25}},
    {"type": "masterfulmachinery:items","chance":0.5,"data":{"item": "emendatusenigmatica:uranium_dust","count": 10}},
    {"type": "masterfulmachinery:items","data":{"item": "kubejs:enriched_uranium_dust","count": 5}}
  ]
})
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "stellar_gateway",
    "controllerId": "stellar",
    "name": "Stellar Gateway",
    "layout": [
      [
        ")*)*)*)*)*)*)*)***********)*)*)*)*)*)*)*)",
        "*+*+*+*+*+*+*+*,,,,,,,,,,,*+*+*+*+*+*+*+*",
        ")*)*)*)*)*)*)*)*****C*****)*)*)*)*)*)*)*)"
      ],
      [
        "    )*-.*.*.*.*,,,,,,,,,,,*.*.*.*.-*)    ",
        "    *+*,,,,,,,.///////////.,,,,,,,*+*    ",
        "    )*-.*.*.*.*           *.*.*.*.-*)    "
      ],
      [
        "      )*-.*.*.*,+++++++++,*.*.*.-*)      ",
        "      *+*,,,,,.//000//////.,,,,,*+*      ",
        "      )*-.*.*.*           *.*.*.-*)      "
      ],
      [
        "        *.*.*.*,+,,,,,,,+,*.*.*.*        ",
        "        .,,,,,./0/1/000///.,,,,,.        ",
        "        *.*.*.*           *.*.*.*        "
      ],
      [
        "        )*-.*.*,+,,,,,,,+,*.*.-*)        ",
        "        *+*,,,.0/212//200/.,,,*+*        ",
        "        )*-.*.*           *.*.-*)        "
      ],
      [
        "          *.*.*,+,,,,,,,+,*.*.*          ",
        "          .,,,.02/11/2//20.,,,.          ",
        "          *.*.*           *.*.*          "
      ],
      [
        "          *.*.*,+,,,,,,,+,*.*.*          ",
        "          .,,,.0/1/211/2/0.,,,.          ",
        "          *.*.*           *.*.*          "
      ],
      [
        "          )*-.*,+,,,,,,,+,*.-*)          ",
        "          *+*,.01/2/2/1110.,*+*          ",
        "          )*-.*           *.-*)          "
      ],
      [
        "            *.*,+,,,,,,,+,*.*            ",
        "            .,./0002/2//0/.,.            ",
        "            *.*           *.*            "
      ],
      [
        "            *.*,+,,,,,,,+,*.*            ",
        "            .,.////000/0//.,.            ",
        "            *.*           *.*            "
      ],
      [
        "            *.*,+++++++++,*.*            ",
        "            .,.///////0///.,.            ",
        "            *.*           *.*            "
      ],
      [
        "            *.*,,,,,,,,,,,*.*            ",
        "            .,,///////////.,.            ",
        "            *.*           *.*            "
      ],
      [
        "            )*)***********)*)            ",
        "            *+*,,,,,,,,,,,*+*            ",
        "            )*)***********)*)            "
      ],
      [
        "                                         ",
        "                                         ",
        "                                         "
      ],
      [
        "             +             +             ",
        "            +3+           +3+            ",
        "             +             +             "
      ],
      [
        "            +3+           +3+            ",
        "            3 3           3 3            ",
        "            +4+           +5+            "
      ],
      [
        "             +             +             ",
        "            +3+           +3+            ",
        "             +             +             "
      ]
    ],
    "legend": {
      ")": {
        "block": "astralsorcery:marble_engraved"
      },
      "*": {
        "block": "astralsorcery:marble_bricks"
      },
      "+": {
        "block": "extendedcrafting:the_ultimate_block"
      },
      ",": {
        "block": "astralsorcery:marble_raw"
      },
      "-": {
        "block": "astralsorcery:marble_chiseled"
      },
      ".": {
        "block": "astralsorcery:marble_pillar"
      },
      "/": {
        "block": "kubejs:stellar_block_2"
      },
      "0": {
        "block": "kubejs:stellar_block_3"
      },
      "1": {
        "block": "kubejs:stellar_block_4"
      },
      "2": {
        "block": "kubejs:stellar_block_1"
      },
      "3": {
        "block": "kubejs:time_infused_casing"
      },
      "4": {
        "block": "masterfulmachinery:stellar_item_port_items_input"
      },
      "5": {
        "block": "masterfulmachinery:stellar_item_port_items_output"
      }
    }
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "stellar_gateway",
    "controllerId": "stellar",
    "ticks":600,
    "inputs": [
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:stellar_blueprint","count": 1}},
    ],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:tesseract","count": 1}}
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "fake_stellar_gateway",
    "controllerId": "stellar_fake",
    "name": "Stellar Gateway",
    "layout": [
      [
        ")*)*)*)*)*)*)*)***********)*)*)*)*)*)*)*)",
        "*+*+*+*+*+*+*+*,,,,,,,,,,,*+*+*+*+*+*+*+*",
        ")*)*)*)*)*)*)*)*****C*****)*)*)*)*)*)*)*)"
      ],
      [
        "    )*-.*.*.*.*,,,,,,,,,,,*.*.*.*.-*)    ",
        "    *+*,,,,,,,.           .,,,,,,,*+*    ",
        "    )*-.*.*.*.*           *.*.*.*.-*)    "
      ],
      [
        "      )*-.*.*.*,+++++++++,*.*.*.-*)      ",
        "      *+*,,,,,.           .,,,,,*+*      ",
        "      )*-.*.*.*           *.*.*.-*)      "
      ],
      [
        "        *.*.*.*,+,,,,,,,+,*.*.*.*        ",
        "        .,,,,,.           .,,,,,.        ",
        "        *.*.*.*           *.*.*.*        "
      ],
      [
        "        )*-.*.*,+,,,,,,,+,*.*.-*)        ",
        "        *+*,,,.           .,,,*+*        ",
        "        )*-.*.*           *.*.-*)        "
      ],
      [
        "          *.*.*,+,,,,,,,+,*.*.*          ",
        "          .,,,.           .,,,.          ",
        "          *.*.*           *.*.*          "
      ],
      [
        "          *.*.*,+,,,,,,,+,*.*.*          ",
        "          .,,,.           .,,,.          ",
        "          *.*.*           *.*.*          "
      ],
      [
        "          )*-.*,+,,,,,,,+,*.-*)          ",
        "          *+*,.           .,*+*          ",
        "          )*-.*           *.-*)          "
      ],
      [
        "            *.*,+,,,,,,,+,*.*            ",
        "            .,.           .,.            ",
        "            *.*           *.*            "
      ],
      [
        "            *.*,+,,,,,,,+,*.*            ",
        "            .,.           .,.            ",
        "            *.*           *.*            "
      ],
      [
        "            *.*,+++++++++,*.*            ",
        "            .,.           .,.            ",
        "            *.*           *.*            "
      ],
      [
        "            *.*,,,,,,,,,,,*.*            ",
        "            .,,           .,.            ",
        "            *.*           *.*            "
      ],
      [
        "            )*)***********)*)            ",
        "            *+*,,,,,,,,,,,*+*            ",
        "            )*)***********)*)            "
      ],
      [
        "                                         ",
        "                                         ",
        "                                         "
      ],
      [
        "             +             +             ",
        "            +/+           +/+            ",
        "             +             +             "
      ],
      [
        "            +/+           +/+            ",
        "            / /           / /            ",
        "            +0+           +1+            "
      ],
      [
        "             +             +             ",
        "            +/+           +/+            ",
        "             +             +             "
      ]
    ],
    "legend": {
      "0": {
        "block": "masterfulmachinery:stellar_item_port_items_input"
      },
      "1": {
        "block": "masterfulmachinery:stellar_item_port_items_output"
      },
      ")": {
        "block": "astralsorcery:marble_engraved"
      },
      "*": {
        "block": "astralsorcery:marble_bricks"
      },
      "+": {
        "block": "extendedcrafting:the_ultimate_block"
      },
      ",": {
        "block": "astralsorcery:marble_raw"
      },
      "-": {
        "block": "astralsorcery:marble_chiseled"
      },
      ".": {
        "block": "astralsorcery:marble_pillar"
      },
      "/": {
        "block": "kubejs:time_infused_casing"
      }
    }
  })

event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "fake_starforge",
    "controllerId": "stellar_fake",
    "name": "Starforge",
    "layout": [
      [
        "               ",
        "               ",
        "               ",
        "               ",
        "               ",
        "      )*)      ",
        "     ))*))     ",
        "     **+**     ",
        "     ))*))     ",
        "      )*)      ",
        "               ",
        "               ",
        "               ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "     ,)-),     ",
        "    ,,)-),,    ",
        "   ,,,   ,,,   ",
        "   ))  *  ))   ",
        "   -- *+* --   ",
        "   ))  *  ))   ",
        "   ,,,   ,,,   ",
        "    ,,)-),,    ",
        "     ,)-),     ",
        "               ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "     ,).),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        "  )         )  ",
        "  .    +    .  ",
        "  )         )  ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,).),     ",
        "               ",
        "               "
      ],
      [
        "               ",
        "     ,)-),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " )           ) ",
        " -     /     - ",
        " )           ) ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,)-),     ",
        "               "
      ],
      [
        "               ",
        "    ,,)-),,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " )           ) ",
        " -     0     - ",
        " )           ) ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,,)-),,    ",
        "               "
      ],
      [
        "      )*)      ",
        "   ,,,   ,,,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        ")             )",
        "*             *",
        ")             )",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,,,   ,,,   ",
        "      )*)      "
      ],
      [
        "     ))*))     ",
        "   ))  *  ))   ",
        "  )         )  ",
        " )           ) ",
        " )           ) ",
        ")             )",
        ")      /      )",
        "**    /1/    **",
        ")      /      )",
        ")             )",
        " )           ) ",
        " )           ) ",
        "  )         )  ",
        "   ))  *  ))   ",
        "     ))*))     "
      ],
      [
        "     **2**     ",
        "   -- *+* --   ",
        "  .    +    .  ",
        " -     /     - ",
        " -     0     - ",
        "*             *",
        "**    /1/    **",
        "3++/0 1 1 0/++4",
        "**    /1/    **",
        "*             *",
        " -     0     - ",
        " -     /     - ",
        "  .    +    .  ",
        "   -- *+* --   ",
        "     **C**     "
      ],
      [
        "     ))*))     ",
        "   ))  *  ))   ",
        "  )         )  ",
        " )           ) ",
        " )           ) ",
        ")             )",
        ")      /      )",
        "**    /1/    **",
        ")      /      )",
        ")             )",
        " )           ) ",
        " )           ) ",
        "  )         )  ",
        "   ))  *  ))   ",
        "     ))*))     "
      ],
      [
        "      )*)      ",
        "   ,,,   ,,,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        ")             )",
        "*             *",
        ")             )",
        " ,           , ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,,,   ,,,   ",
        "      )*)      "
      ],
      [
        "               ",
        "    ,,)-),,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " ,           , ",
        " )           ) ",
        " -     0     - ",
        " )           ) ",
        " ,           , ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,,)-),,    ",
        "               "
      ],
      [
        "               ",
        "     ,)-),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        " ,           , ",
        " )           ) ",
        " -     /     - ",
        " )           ) ",
        " ,           , ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,)-),     ",
        "               "
      ],
      [
        "               ",
        "               ",
        "     ,).),     ",
        "    ,     ,    ",
        "   ,       ,   ",
        "  ,         ,  ",
        "  )         )  ",
        "  .    +    .  ",
        "  )         )  ",
        "  ,         ,  ",
        "   ,       ,   ",
        "    ,     ,    ",
        "     ,).),     ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "     ,)-),     ",
        "    ,,)-),,    ",
        "   ,,,   ,,,   ",
        "   ))  *  ))   ",
        "   -- *+* --   ",
        "   ))  *  ))   ",
        "   ,,,   ,,,   ",
        "    ,,)-),,    ",
        "     ,)-),     ",
        "               ",
        "               ",
        "               "
      ],
      [
        "               ",
        "               ",
        "               ",
        "               ",
        "               ",
        "      )*)      ",
        "     ))*))     ",
        "     **+**     ",
        "     ))*))     ",
        "      )*)      ",
        "               ",
        "               ",
        "               ",
        "               ",
        "               "
      ]
    ],
    "legend": {
      "0": {
        "block": "mekanism:supercharged_coil"
      },
      "1": {
        "block": "mekanismgenerators:laser_focus_matrix"
      },
      "2": {
        "block": "masterfulmachinery:stellar_energy_port_energy_input"
      },
      "3": {
        "block": "masterfulmachinery:stellar_item_port_items_input"
      },
      "4": {
        "block": "masterfulmachinery:stellar_item_port_items_output"
      },
      ")": {
        "block": "mekanism:sps_casing"
      },
      "*": {
        "block": "envirocore:xerothium_frame"
      },
      "+": {
        "block": "draconicevolution:awakened_draconium_block"
      },
      ",": {
        "block": "mekanismgenerators:reactor_glass"
      },
      "-": {
        "block": "extendedcrafting:crystaltine_block"
      },
      ".": {
        "block": "extendedcrafting:the_ultimate_block"
      },
      "/": {
        "block": "kubejs:time_infused_casing"
      }
    }
  })
})