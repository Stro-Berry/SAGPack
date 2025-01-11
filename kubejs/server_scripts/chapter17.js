onEvent("recipes", event => {

    event.remove({output: "extendedcrafting:elite_table"})
    event.remove({output: "extendedcrafting:elite_component"})
    event.remove({output: "extendedcrafting:elite_catalyst"})
    event.remove({output: "extendedcrafting:crystaltine_component"})
    event.remove({output: "extendedcrafting:crystaltine_catalyst"})
    event.remove({output: "immersiveengineering:radiator"})
    event.remove({output: "mekanism:turbine_casing"})
    event.remove({output: "mekanism:elite_control_circuit"})
    event.remove({output: "mekanism:ultimate_control_circuit"})
    event.remove({output: "mekanismgenerators:turbine_rotor"})
    event.remove({output: "mekanismgenerators:turbine_valve"})
    event.remove({output: "mekanismgenerators:turbine_vent"})
    event.remove({output: "mekanismgenerators:turbine_blade"})
    event.remove({output: "mekanismgenerators:rotational_complex"})
    event.remove({output: "mekanismgenerators:saturating_condenser"})
    event.remove({output: "mekanismgenerators:fission_reactor_casing"})
    event.remove({output: "mekanismgenerators:electromagnetic_coil"})
    event.remove({output: "mekanismgenerators:control_rod_assembly"})
    event.remove({output: "mekanismgenerators:fission_fuel_assembly"})
    event.remove({output: "mekanismgenerators:fission_reactor_port"})
    event.remove({output: "mekanismgenerators:fission_reactor_logic_adapter"})
    event.remove({output: "mekanismgenerators:fusion_reactor_frame"})
    event.remove({output: "mekanismgenerators:fusion_reactor_controller"})
    event.remove({output: "mekanismgenerators:fusion_reactor_logic_adapter"})
    event.remove({output: "mekanismgenerators:fusion_reactor_port"})
    event.remove({output: "mekanism:isotopic_centrifuge"})
    event.remove({output: "mekanism:laser_tractor_beam"})
    event.remove({output: "mekanism:laser_amplifier"})
    event.remove({output: "mekanism:solar_neutron_activator"})
    event.remove({output: "mekanism:digital_miner"})
    event.remove({output: "mekanism:antiprotonic_nucleosynthesizer"})
    event.remove({output: "mekanism:sps_casing"})
    event.remove({output: "mekanism:radioactive_waste_barrel"})
    event.remove({output: "mekanism:supercharged_coil"})
    event.remove({output: "mekanismgenerators:reactor_glass"})
    event.remove({output: "mekanismgenerators:laser_focus_matrix"})
    event.remove({id: "mekanism:processing/uranium/yellow_cake_uranium"})
    event.remove({id: "mekanismgenerators:separator/heavy_water"})
    event.remove({id: "mekanismgenerators:activating/tritium"})
    event.remove({id: "mekanism:processing/uranium/sulfuric_acid"})
    event.remove({id: "mekanism:processing/uranium/reprocessing/to_fuel"})
    event.remove({id: "mekanism:processing/uranium/uranium_oxide"})
    event.remove({id: "mekanism:oxidizing/sulfur_dioxide"})
    event.remove({id: "electrodynamics:itemfluid2fluid/chemicalmixer/hydrogen_fluoride"})
    event.remove({id: "electrodynamics:wirecopper"})
    event.remove({id: "futurepack:spaceship_36"})
    
    event.shaped("extendedcrafting:elite_catalyst", [
        " C ",
        "CBC",
        " C "
    ], {
        C: "extendedcrafting:elite_component",
        B: "extendedcrafting:black_iron_block"
    })
    event.shaped("mekanismgenerators:laser_focus_matrix", [
      "RRR",
      "RLR",
      "RRR"
  ], {
      R: "mekanismgenerators:reactor_glass",
      L: "futurepack:lense_white"
  })
    event.shaped("extendedcrafting:crystaltine_component", [
        "CBC",
        "BLB",
        "CBC"
    ], {
        C: "extendedcrafting:crystaltine_ingot",
        B: "extendedcrafting:black_iron_slate",
        L: "extendedcrafting:luminessence_block"
    })
    event.shaped("extendedcrafting:crystaltine_catalyst", [
        " C ",
        "CBC",
        " C "
    ], {
        C: "extendedcrafting:crystaltine_component",
        B: "extendedcrafting:black_iron_block"
    })
    event.shaped("kubejs:elite_control_circuit_materials", [
        "RUR",
        "ECE",
        "RXR"
    ], {
        R: "mekanism:alloy_reinforced",
        U: "electrodynamics:circuitultimate",
        X: "envirocore:nanorite_crystal",
        E: "kubejs:energized_ingot",
        C: "mekanism:cardboard_box"
    })
    event.shaped("kubejs:ultimate_control_circuit_materials", [
        "RER",
        "NCN",
        "RDR"
    ], {
        R: "mekanism:alloy_atomic",
        E: "mekanism:elite_control_circuit",
        D: "envirocore:xerothium_crystal",
        N: "futurepack:coil_neon",
        C: "mekanism:cardboard_box"
    })
    event.shaped("3x mekanismgenerators:turbine_casing", [
        "BTB",
        "HQH",
        "BTB"
    ], {
        B: "mekanism:boiler_casing",
        T: "electrodynamics:ingottitanium",
        H: "futurepack:ceramic",
        Q: "kubejs:quantanium_casing"
    })
    event.shaped("mekanismgenerators:turbine_valve", [
        " T ",
        "TUT",
        " T "
    ], {
        U: "electrodynamics:circuitultimate",
        T: "mekanismgenerators:turbine_casing"
    })
    event.shaped("mekanismgenerators:turbine_rotor", [
        " T ",
        " T ",
        " T "
    ], {
        T: "electrodynamics:ingottitanium"
    })
    event.shaped("mekanismgenerators:turbine_vent", [
        " V ",
        "VTV",
        " V "
    ], {
        T: "mekanismgenerators:turbine_casing",
        V: "futurepack:metal_block_ventilation"
    })
    event.shaped("mekanismgenerators:saturating_condenser", [
        " C ",
        "TWT",
        " C "
    ], {
        C: "mekanismgenerators:turbine_casing",
        T: "electrodynamics:ingottitanium",
        W: "kubejs:wet_essence"
    })
    event.shaped("2x mekanismgenerators:fission_reactor_casing", [
        "RRR",
        "CCC",
        "RRR"
    ], {
        C: "mekanismgenerators:turbine_casing",
        R: "kubejs:radiation_resistant_plate"
    })
    event.shaped("mekanismgenerators:fission_reactor_port", [
        " C ",
        "CEC",
        " C "
    ], {
        C: "mekanismgenerators:fission_reactor_casing",
        E: "mekanism:elite_control_circuit"
    })
    event.shaped("mekanismgenerators:fission_reactor_logic_adapter", [
        "LSL",
        "CEC",
        "LSL"
    ], {
        C: "mekanismgenerators:fission_reactor_casing",
        E: "mekanism:elite_control_circuit",
        L: "appliedenergistics2:logic_processor",
        S: "futurepack:chip_logic"
    })
    event.shaped("mekanismgenerators:fission_fuel_assembly", [
        "RFR",
        "CTC",
        "CIC"
    ], {
        I: "mekanismgenerators:fission_reactor_casing",
        R: "kubejs:radiation_resistant_plate",
        C: "futurepack:composite_metal",
        F: "futurepack:fuel_rods",
        T: "futurepack:fuel_cell"
    })
    event.shaped("mekanism:isotopic_centrifuge", [
        "RQR",
        "EZE",
        "RQR"
    ], {
        Q: "kubejs:quantanium_casing",
        R: "kubejs:radiation_resistant_plate",
        Z: "futurepack:zentrifuge_white",
        E: "mekanism:elite_control_circuit"
    })
    event.shaped("2x mekanismgenerators:fusion_reactor_frame", [
        "QPA",
        "CCC",
        "APQ"
    ], {
        Q: "futurepack:coil_quantanium",
        P: "mekanism:pellet_polonium",
        A: "mekanism:alloy_atomic",
        C: "mekanismgenerators:fission_reactor_casing"
    })
    event.shaped("kubejs:plutonium_block", [
        "PP ",
        "PP ",
        "   "
    ], {
        P: "mekanism:pellet_plutonium"
    })
    event.shaped("mekanismgenerators:fusion_reactor_controller", [
        "CCC",
        "CEC",
        "CCC"
    ], {
        C: "mekanismgenerators:fusion_reactor_frame",
        E: "mekanism:elite_control_circuit"
    })
    event.shaped("mekanismgenerators:fusion_reactor_port", [
        " C ",
        "CEC",
        " C "
    ], {
        C: "mekanismgenerators:fusion_reactor_frame",
        E: "mekanism:elite_control_circuit"
    })
    event.shaped("mekanismgenerators:fusion_reactor_logic_adapter", [
        "LSL",
        "CEC",
        "LSL"
    ], {
        C: "mekanismgenerators:fusion_reactor_frame",
        E: "mekanism:elite_control_circuit",
        L: "appliedenergistics2:logic_processor",
        S: "futurepack:chip_logic"
    })
    event.shaped("6x mekanismgenerators:reactor_glass", [
        "ESE",
        "CSC",
        "ESE"
    ], {
        C: "mekanismgenerators:fission_reactor_casing",
        S: "kubejs:starglass",
        E: "mekanism:enriched_iron"
    })
    event.shaped("2x mekanism:radioactive_waste_barrel", [
        "TRT",
        "RER",
        "TRT"
    ], {
        T: "electrodynamics:ingottitanium",
        R: "kubejs:radiation_resistant_plate",
        E: "kubejs:energized_ingot"
    })

    event.shapeless("mekanism:laser_amplifier", "mekanism:laser_tractor_beam")
    event.shapeless("mekanism:laser_tractor_beam", "mekanism:laser_amplifier")

    event.recipes.mekanism.enriching("2x mekanism:yellow_cake_uranium","kubejs:enriched_uranium_dust")
    event.recipes.immersiveengineering.arc_furnace(["immersiveengineering:radiator"], "6x kubejs:galvanized_steel_ingot", ["#forge:storage_blocks/copper","immersiveengineering:ingot_hop_graphite"], "thermal:slag", 0.5, 5000)
    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_dioxygen_difluoride", 1000), "kubejs:dioxygen_difluoride").energy(10000)
    event.recipes.mekanism.injecting("botania:ender_air_bottle", "minecraft:glass_bottle", {gas: "kubejs:ender_air", amount: 1})

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "DADAD",
          " D D ",
          " D D ",
          "DDDDD"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:elite_component",
          },
          "B": {
            "item": "extendedcrafting:elite_catalyst",
          },
          "C": {
            "item": "extendedcrafting:crystaltine_catalyst",
          },
          "D": {
            "item": "kubejs:dark_matter_alloy",
          }
        },
        "result": {
          "item": "extendedcrafting:elite_table"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDDDB",
          "CEEEC",
          "BDDDB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "item": "mekanismgenerators:turbine_casing",
          },
          "B": {
            "item": "futurepack:polymer",
          },
          "C": {
            "item": "mekanism:superheating_element",
          },
          "D": {
            "item": "electrodynamics:wirehighlyinsulatedsuperconductive",
          },
          "E": {
            "item": "bloodmagic:reagentmagnetism",
          }
        },
        "result": {
          "item": "mekanismgenerators:electromagnetic_coil"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBA",
          "B   B",
          "CDBDC",
          " CCC ",
          "ECCCE"
        ],
        "key": {
          "A": {
            "item": "mekanism:elite_control_circuit",
          },
          "B": {
            "item": "electrodynamics:platetitanium",
          },
          "C": {
            "item": "kubejs:radiation_resistant_plate",
          },
          "D": {
            "item": "mekanismgenerators:fission_reactor_casing",
          },
          "E": {
            "item": "mekanismgenerators:fission_fuel_assembly",
          }
        },
        "result": {
          "item": "mekanismgenerators:control_rod_assembly"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABABA",
          "ACCCA",
          "BC CB",
          "ACCCA",
          "ACACA"
        ],
        "key": {
          "A": {
            "item": "futurepack:ceramic",
          },
          "B": {
            "item": "industrialforegoing:laser_lens0",
          },
          "C": {
            "item": "kubejs:fiberglass",
          }
        },
        "result": {
          "item": "mekanism:laser_amplifier"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEFEC",
          "BDEDB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "item": "electrodynamics:resourceblocktitanium",
          },
          "B": {
            "item": "kubejs:interference_essence",
          },
          "C": {
            "item": "mekanism:elite_control_circuit",
          },
          "D": {
            "item": "kubejs:quantanium_casing",
          },
          "E": {
            "item": "bloodmagic:soulpickaxe",
          },
          "F": {
            "item": "mekanism:robit",
          }
        },
        "result": {
          "item": "mekanism:digital_miner"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "BBBBB",
          " C   ",
          "CCCCC",
          "DEEED"
        ],
        "key": {
          "A": {
            "tag": "forge:gems/silicon",
          },
          "B": {
            "item": "futurepack:color_iron_blue",
          },
          "C": {
            "item": "electrodynamics:ingottitanium",
          },
          "D": {
            "tag": "forge:ingots/bronze",
          },
          "E": {
            "tag": "forge:storage_blocks/bronze",
          }
        },
        "result": {
          "item": "mekanism:solar_neutron_activator"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "BCCCB",
          "DE ED",
          "BCCCB",
          "AAAAA"
        ],
        "key": {
          "A": {
            "item": "mekanism:sps_casing",
          },
          "B": {
            "item": "mekanism:ultimate_control_circuit",
          },
          "C": {
            "item": "electrodynamics:resourceblocktitanium",
          },
          "D": {
            "item": "mekanism:pellet_antimatter",
          },
          "E": {
            "item": "mekanism:supercharged_coil",
          }
        },
        "result": {
          "item": "mekanism:antiprotonic_nucleosynthesizer"
        }
    })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 20000000,
        "powerRate": 1000000,
        "input": {
          "item": "electrodynamics:ingottitanium"
        },
        "ingredients": [
          {
            "item": "electrodynamics:ingottitanium"
          },
          {
            "item": "electrodynamics:ingottitanium"
          },
          {
            "item": "electrodynamics:ingottitanium"
          },
          {
            "item": "electrodynamics:ingottitanium"
          }
        ],
        "result": {
          "item": "kubejs:energized_ingot",
          "count": 5
    }})
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "item": "kubejs:elite_control_circuit_materials",
          "count": 1
        },
        "result": {
          "item": "mekanism:elite_control_circuit",
          "count": 1
        },
        "program": "laser"
    })
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "item": "kubejs:ultimate_control_circuit_materials",
          "count": 1
        },
        "result": {
          "item": "mekanism:ultimate_control_circuit",
          "count": 1
        },
        "program": "laser"
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   A   ",
          "    A  ",
          " AA A  ",
          "A  A  A",
          "  A AA ",
          "  A    ",
          "   A   "
        ],
        "key": {
          "A": {
            "item": "electrodynamics:ingottitanium"
          }
        },
        "result": {
          "item": "mekanismgenerators:turbine_blade"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBCBBA",
          "DDDCDDD",
          "EEFFEEF",
          "EFFEEFF",
          "FFEEFFE",
          "DDDCDDD",
          "ABBCBBA"
        ],
        "key": {
          "A": {
            "item": "mekanismgenerators:turbine_casing"
          },
          "B": {
            "item": "futurepack:wire_support"
          },
          "C": {
            "item": "mekanismgenerators:turbine_rotor"
          },
          "D": {
            "item": "futurepack:wire_network"
          },
          "E": {
            "item": "futurepack:color_iron_black"
          },
          "F": {
            "item": "futurepack:color_iron_yellow"
          }
        },
        "result": {
          "item": "mekanismgenerators:rotational_complex"
        }
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAA    ",
          "BCBADDD",
          "UEEEEEE",
          "FGHIJKL",
          "UEEEEEE",
          "BCBADDD",
          "AAA    "
        ],
        "key": {
          "A": {
            "item": "electrodynamics:wiresuperconductive"
          },
          "B": {
            "item": "mekanism:alloy_atomic"
          },
          "C": {
            "item": "mekanism:laser"
          },
          "D": {
            "item": "futurepack:coil_quantanium"
          },
          "E": {
            "item": "kubejs:ceramic_block"
          },
          "F": {
            "item": "mekanism:pellet_plutonium"
          },
          "G": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "H": {
            "item": "electrodynamics:ingottitanium"
          },
          "I": {
            "item": "immersivepetroleum:petcoke"
          },
          "J": {
            "item": "emendatusenigmatica:aluminum_ingot"
          },
          "K": {
            "item": "electrodynamics:ingotvanadiumsteel"
          },
          "L": {
            "item": "industrialforegoing:laser_lens14"
          },
          "U": {
            "item": "mekanism:ultimate_control_circuit"
          }
        },
        "result": {
          "item": "mekanism:supercharged_coil"
        }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AACAA",
        "BDADA",
        "DEFED",
        "ADADB",
        "AACAA"
      ],
      "key": {
        "A": {
          "item": "futurepack:polymer"
        },
        "B": {
          "item": "envirocore:xerothium_crystal"
        },
        "C": {
          "item": "mekanism:pellet_plutonium"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "mekanismgenerators:fusion_reactor_frame"
        },
        "F": {
          "item": "mekanism:ultimate_control_circuit"
        }
      },
      "result": {
        "item": "mekanism:sps_casing"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "A    ",
        " B CD",
        "EFFC ",
        "  F  ",
        " GGG "
      ],
      "key": {
        "A": {
          "item": "futurepack:composite_spade"
        },
        "B": {
          "item": "electrodynamics:rodhslasteel"
        },
        "C": {
          "item": "kubejs:energized_ingot"
        },
        "D": {
          "item": "mekanism:reprocessed_fissile_fragment"
        },
        "E": {
          "item": "futurepack:lense_white"
        },
        "F": {
          "item": "electrodynamics:platehslasteel"
        },
        "G": {
          "item": "create:belt_connector"
        }
      },
      "result": {
        "item": "kubejs:helium3_rover"
      }
    })
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"envirocore:nanorite_wafer"},"fluidInput":{"amount":250,"fluid":"kubejs:liquid_carbon_dioxide"},"gasInput":{"amount":500,"gas":"mekanismgenerators:fusion_fuel"},"duration":100,"itemOutput":{"item":"kubejs:dh3_doped_wafer"}})
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"mekanism:yellow_cake_uranium"},"fluidInput":{"amount":500,"fluid":"kubejs:xenic_acid"},"gasInput":{"amount":100,"gas":"mekanism:hydrofluoric_acid"},"duration":20,"itemOutput":{"item":"kubejs:xenate_salt"},"gasOutput":{"amount":500,"gas":"mekanism:uranium_hexafluoride"}})
    event.custom({"type":"mekanism:evaporating","input":{"amount":2,"fluid":"mekanism:heavy_water"},"output":{"fluid":"kubejs:very_heavy_water","amount":1}})
    event.custom({"type":"mekanism:activating","input":{"amount":1,"gas":"kubejs:very_heavy_water_vapor"},"output":{"gas":"mekanismgenerators:deuterium","amount":1}})
    event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"electrodynamics:resourceblocktitanium"}},"gasInput":{"amount":16,"gas":"mekanism:antimatter"},"output":{"item":"draconicevolution:overworld_draconium_ore"},"duration":20})
    event.custom({"type":"mekanism:oxidizing","input":{"ingredient":{"item":"emendatusenigmatica:uranium_dust"}},"output":{"gas":"mekanism:uranium_oxide","amount":250}})
    event.custom({"type":"mekanism:oxidizing","input":{"ingredient":{"item":"mekanism:reprocessed_fissile_fragment"}},"output":{"gas":"mekanism:fissile_fuel","amount":1000}})
    event.custom({"type":"mekanism:centrifuging","input":{"amount":1,"gas":"mekanism:uranium_oxide"},"output":{"gas":"kubejs:low_enriched_uranium_fuel","amount":1}})
    event.custom({
      "type": "mekanism:dissolution",
      "itemInput": {
        "amount": 1,
        "ingredient": {
          "item": "kubejs:xenon_hexafluoride"
        }
      },
      "gasInput": {
        "amount": 10,
        "gas": "mekanism:water_vapor"
      },
      "output": {
        "gas": "kubejs:xenon_trioxide",
        "amount": 1000,
        "chemicalType": "gas"
      }
    })
    event.custom({"type":"immersiveengineering:mineral_mix","ores":[{"chance":0.5,"output":{"item":"minecraft:stone"}},{"chance":0.5,"output":{"item":"kubejs:tungsten_ore"}}],"dimensions":["minecraft:overworld"],"weight":40,"fail_chance":0.7,"sample_background":"kubejs:tungsten_ore"})
    event.custom({
      "type" : "electrodynamics:chemical_crystallizer_recipe",
      
      "fluid_input":{
          "fluid":"kubejs:ammonium_nitrate_solution",
          "amount": 1000
      },
      "item_output":{
          "item":"kubejs:ammonium_nitrate",
          "count": 1
      }
  })
})