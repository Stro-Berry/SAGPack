onEvent("recipes", event => {

    event.remove({output: "psi:cad_assembly_iron"})
    event.remove({output: "psi:cad_assembler"})
    event.remove({output: "psi:cad_core_basic"})
    event.remove({output: "psi:cad_core_overclocked"})
    event.remove({output: "psi:cad_core_conductive"})
    event.remove({output: "psi:cad_core_hyperclocked"})
    event.remove({output: "psi:cad_core_radiative"})
    event.remove({output: "psi:cad_socket_basic"})
    event.remove({output: "psi:cad_socket_signaling"})
    event.remove({output: "psi:cad_socket_large"})
    event.remove({output: "psi:cad_socket_transmissive"})
    event.remove({output: "psi:cad_socket_huge"})
    event.remove({output: "psi:cad_battery_basic"})
    event.remove({output: "psi:cad_battery_extended"})
    event.remove({output: "psi:cad_battery_ultradense"})
    event.remove({output: "psi:cad_assembly_psimetal"})
    event.remove({output: "psi:cad_assembly_ebony_psimetal"})
    event.remove({output: "psi:cad_assembly_ivory_psimetal"})
    event.remove({output: "psi:cad_assembly_gold"})
    event.remove({output: "psi:programmer"})
    event.remove({output: "psi:black_psimetal_plate"})
    event.remove({output: "psi:white_psimetal_plate"})
    event.remove({output: "psi:lit_black_psimetal_plate"})
    event.remove({output: "psi:lit_white_psimetal_plate"})
    event.remove({output: "psi:spell_bullet"})
    event.remove({output: "phi:psimetal_crusher"})
    event.remove({output: "phi:distill_chamber_wall"})
    event.remove({output: "phi:mpu"})
    event.remove({output: "phi:distill_chamber_controller"})
    event.remove({output: "phi:infusion_laser"})
    event.remove({output: "extendedcrafting:pedestal"})
    event.remove({id: "psi:psidust"})
    event.remove({id: "psi:psimetal"})
    event.remove({id: "psi:psigem"})
    event.remove({id: "psi:ivory_psimetal"})
    event.remove({id: "psi:ebony_psimetal"})
    event.remove({id: "psi:ivory_substance"})
    event.remove({id: "psi:ebony_substance"})
    event.remove({id: "psi:gold_to_psimetal_assembly_upgrade"})
    event.remove({id: "psi:spell_bullet_projectile"})
    event.remove({id: "psi:spell_bullet_loopcast"})
    event.remove({id: "psi:spell_bullet_circle"})
    event.remove({id: "psi:spell_bullet_grenade"})
    event.remove({id: "psi:spell_bullet_charge"})
    event.remove({id: "psi:spell_bullet_mine"})

    event.shapeless("kubejs:infusion_token", "2x kubejs:infusion_token")

    event.shaped("psi:cad_assembly_iron", [
        "   ",
        "IMS",
        "S  "
    ], {
        S: "electrodynamics:resourceblockstainlesssteel",
        M: "kubejs:magical_bullet_slot",
        I: "occultism:iesnium_block"
    })
    event.shaped("psi:cad_assembly_gold", [
        "   ",
        "PCT",
        "T  "
    ], {
        P: "psi:psidust_block",
        C: "psi:cad_assembly_iron",
        T: "naturesaura:tainted_gold_block"
    })
    event.shaped("psi:cad_assembly_psimetal", [
        "   ",
        "PCP",
        "P  "
    ], {
        P: "psi:psimetal_block",
        C: "psi:cad_assembly_gold",
    })
    event.shaped("psi:cad_assembler", [
        "OMO",
        "S S",
        "OOO"
    ], {
        S: "dynamicelectricity:shaftstainlesssteel",
        M: "kubejs:magical_bullet_slot",
        O: "occultism:otherstone"
    })
    event.shaped("psi:programmer", [
        "OMO",
        "S S",
        "OPO"
    ], {
        S: "dynamicelectricity:shaftstainlesssteel",
        M: "kubejs:magical_bullet_slot",
        O: "occultism:otherstone",
        P: "psi:psidust"
    })
    event.shaped("kubejs:enhanced_block", [
        "MIM",
        "IMI",
        "MIM"
    ], {
        M: "kubejs:mithril_ingot",
        I: "occultism:iesnium_ingot"
    })
    event.shaped("kubejs:vitreous_block", [
        "MIM",
        "IMI",
        "MIM"
    ], {
        M: "occultism:spirit_attuned_gem",
        I: "kubejs:conjured_glass"
    })
    event.shaped("psi:cad_socket_basic", [
        "   ",
        "PPP",
        "SSS"
    ], {
        P: "psi:psidust",
        S: "#forge:ingots/stainlesssteel"
    })
    event.shaped("psi:cad_core_basic", [
        " P ",
        "SPS",
        " P "
    ], {
        P: "psi:psidust",
        S: "#forge:ingots/stainlesssteel"
    })
    event.shaped("psi:cad_battery_basic", [
        "SPS",
        "SPS",
        "SPS"
    ], {
        P: "psi:psidust",
        S: "#forge:ingots/stainlesssteel"
    })
    event.shaped("psi:cad_socket_signaling", [
        "   ",
        "PCP",
        "SSS"
    ], {
        P: "psi:psimetal",
        S: "#forge:ingots/stainlesssteel",
        C: "psi:cad_socket_basic"
    })
    event.shaped("psi:cad_core_overclocked", [
        " P ",
        "SCS",
        " P "
    ], {
        P: "psi:psimetal",
        S: "#forge:ingots/stainlesssteel",
        C: "psi:cad_core_basic"
    })
    event.shaped("psi:cad_socket_large", [
        "   ",
        "PCP",
        "SSS"
    ], {
        P: "psi:psigem",
        S: "#forge:ingots/stainlesssteel",
        C: "psi:cad_socket_signaling"
    })
    event.shaped("psi:cad_core_conductive", [
        " P ",
        "SCS",
        " P "
    ], {
        P: "psi:psigem",
        S: "#forge:ingots/stainlesssteel",
        C: "psi:cad_core_overclocked"
    })
    event.shaped("psi:cad_battery_extended", [
        "PSP",
        "CSC",
        "PSP"
    ], {
        P: "psi:psigem",
        S: "#forge:ingots/stainlesssteel",
        C: "psi:cad_battery_basic"
    })
    event.shaped("psi:cad_socket_transmissive", [
        "   ",
        "PCP",
        "SSS"
    ], {
        P: "psi:ivory_psimetal",
        S: "psi:ebony_psimetal",
        C: "psi:cad_socket_large"
    })
    event.shaped("psi:cad_core_hyperclocked", [
        " P ",
        "SCS",
        " P "
    ], {
        P: "psi:ivory_psimetal",
        S: "psi:ebony_psimetal",
        C: "psi:cad_core_conductive"
    })
    event.shaped("psi:cad_socket_huge", [
        "   ",
        "PCP",
        "SSS"
    ], {
        P: "phi:psionic_dust",
        S: "psi:ebony_psimetal",
        C: "psi:cad_socket_transmissive"
    })
    event.shaped("psi:cad_core_radiative", [
        " P ",
        "SCS",
        " P "
    ], {
        P: "phi:psionic_dust",
        S: "psi:ebony_psimetal",
        C: "psi:cad_core_hyperclocked"
    })
    event.shaped("psi:cad_battery_ultradense", [
        "PSP",
        "CSC",
        "PSP"
    ], {
        P: "phi:psionic_dust",
        S: "psi:ebony_psimetal",
        C: "psi:cad_battery_extended"
    })
    event.shaped("8x psi:white_psimetal_plate", [
        "   ",
        "RPR",
        "   "
    ], {
        P: "psi:psigem",
        R: "create:refined_radiance"
    })
    event.shaped("8x psi:black_psimetal_plate", [
        "   ",
        "RPR",
        "   "
    ], {
        P: "psi:psigem",
        R: "create:shadow_steel"
    })
    event.shaped("2x psi:spell_bullet", [
        "PSP",
        "SMS",
        "PSP"
    ], {
        P: "psi:psidust",
        S: "electrodynamics:ingotstainlesssteel",
        M: "kubejs:magical_bullet_slot"
    })
    event.shaped("kubejs:infused_end_stone", [
        "SSS",
        "EPI",
        "SSS"
    ], {
        S: "minecraft:end_stone",
        E: "psi:ebony_psimetal",
        I: "psi:ivory_psimetal",
        P: "psi:psidust_block"
    })
    event.shaped("psi:cad_assembly_ivory_psimetal", [
        "   ",
        "PCI",
        "I  "
    ], {
        C: "psi:cad_assembly_psimetal",
        I: "psi:ivory_psimetal_block",
        P: "phi:psionic_dust"
    })
    event.shaped("psi:cad_assembly_ebony_psimetal", [
        "   ",
        "PCE",
        "E  "
    ], {
        C: "psi:cad_assembly_psimetal",
        E: "psi:ebony_psimetal_block",
        P: "phi:psionic_dust"
    })
    event.shaped("extendedcrafting:pedestal", [
        "IEI",
        " I ",
        "IBI"
    ], {
        I: "psi:ebony_psimetal_block",
        B: "extendedcrafting:black_iron_block",
        E: "psi:ebony_psimetal_block"
    })

    event.smelting("kubejs:conjured_glass", "#kubejs:conjured")
    event.smelting("psi:lit_white_psimetal_plate", "psi:white_psimetal_plate")
    event.smelting("psi:lit_black_psimetal_plate", "psi:black_psimetal_plate")
    event.smelting("kubejs:germinated_ivory_seed", "kubejs:raw_ivory_seed")
    event.smelting("kubejs:germinated_ebony_seed", "kubejs:raw_ebony_seed")
    event.recipes.createSequencedAssembly("phi:distill_chamber_wall", "psi:black_psimetal_plate", [
        event.recipes.createDeploying("kubejs:psion_distillation_chamber_wall_processing", ["kubejs:psion_distillation_chamber_wall_processing", "phi:psionic_dust"]),
        event.recipes.createDeploying("kubejs:psion_distillation_chamber_wall_processing", ["kubejs:psion_distillation_chamber_wall_processing", "psi:psigem"]),
        event.recipes.createFilling("kubejs:psion_distillation_chamber_wall_processing", ["kubejs:psion_distillation_chamber_wall_processing", Fluid.of("kubejs:molten_stainless_steel", 144)]),
    ]).transitionalItem("kubejs:psion_distillation_chamber_wall_processing").loops(2)
    event.recipes.createMixing(["32x psi:ivory_substance","kubejs:infusion_token"],["32x kubejs:germinated_ivory_seed","kubejs:active_infusion_token"])
    event.recipes.createMixing(["32x psi:ebony_substance","kubejs:infusion_token"],["32x kubejs:germinated_ebony_seed","kubejs:active_infusion_token"])
    event.recipes.createMixing(["4x psi:psigem_block","kubejs:infusion_token"],["4x kubejs:vitreous_block","kubejs:active_infusion_token"])
    event.recipes.mekanism.combining("kubejs:compressed_conjured_glass", "32x kubejs:conjured_glass", "psi:psigem")
    event.recipes.mekanism.combining("kubejs:conjured_obsidian", "32x kubejs:compressed_conjured_glass", "phi:psionic_dust")

    event.custom({
        "type": "psi:trick_crafting",
        "input": {
          "item": "occultism:burnt_otherstone"
        },
        "output": {
          "item": "psi:psidust"
        },
        "cad": {
          "item": "psi:cad_assembly_iron"
        }
    })
    event.custom({
        "type": "psi:trick_crafting",
        "input": {
          "item": "kubejs:cracked_enhanced_block"
        },
        "output": {
          "item": "psi:psimetal_block"
        },
        "cad": {
          "item": "psi:cad_assembly_gold"
        },
        "trick": "psi:trick_infusion"
    })
      event.custom({
        "type": "psi:trick_crafting",
        "input": {
          "item": "kubejs:vitreous_block"
        },
        "output": {
          "item": "psi:psigem_block"
        },
        "cad": {
          "item": "psi:cad_assembly_psimetal"
        },
        "trick": "psi:trick_greater_infusion"
    })
    event.custom({
        "type": "psi:dimension_trick_crafting",
        "input": {
          "item": "kubejs:germinated_ivory_seed"
        },
        "output": {
          "item": "psi:ivory_substance"
        },
        "cad": {
          "item": "psi:cad_assembly_psimetal"
        },
        "trick": "psi:trick_ebony_ivory",
        "dimension": "minecraft:the_end"
    })
    event.custom({
        "type": "psi:dimension_trick_crafting",
        "input": {
          "item": "kubejs:germinated_ebony_seed"
        },
        "output": {
          "item": "psi:ebony_substance"
        },
        "cad": {
          "item": "psi:cad_assembly_psimetal"
        },
        "trick": "psi:trick_ebony_ivory",
        "dimension": "minecraft:the_end"
    })
    event.custom({
        "type": "psi:trick_crafting",
        "input": {
          "item": "kubejs:infusion_token"
        },
        "output": {
          "item": "kubejs:active_infusion_token"
        },
        "cad": {
          "item": "psi:cad_assembly_psimetal"
        },
        "trick": "psi:trick_infusion"
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "PIEEP",
          "IIIEE",
          "EEGII",
          "IIEEE",
          "PIIEP"
        ],
        "key": {
          "E": {
            "item": "psi:ebony_psimetal"
          },
          "I": {
            "item": "psi:ivory_psimetal"
          },
          "G": {
            "item": "psi:psigem"
          },
          "P": {
            "item": "phi:psionic_dust"
          }
        },
        "result": {
          "item": "kubejs:infusion_token"
    }})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "SSMSS",
          "SEPIS",
          "SCTRS",
          "SIPES",
          "SSGSS"
        ],
        "key": {
          "S": {
            "item": "electrodynamics:resourceblockstainlesssteel"
          },
          "I": {
            "item": "psi:ivory_psimetal"
          },
          "E": {
            "item": "psi:ebony_psimetal"
          },
          "P": {
            "item": "phi:psionic_dust"
          },
          "M": {
            "item": "psi:psimetal_block"
          },
          "G": {
            "item": "psi:psigem_block"
          },
          "C": {
            "item": "mekanism:crusher"
          },
          "T": {
            "item": "thermal:machine_pulverizer"
          },
          "R": {
            "item": "electrodynamics:mineralcrushertriple"
          }
        },
        "result": {
          "item": "phi:psimetal_crusher"
    }})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "EIIII",
          "EPSPI",
          "EABDI",
          "EPCPI",
          "EEEEI"
        ],
        "key": {
          "I": {
            "item": "psi:ivory_psimetal"
          },
          "E": {
            "item": "psi:ebony_psimetal"
          },
          "P": {
            "item": "phi:psionic_dust"
          },
          "A": {
            "item": "psi:cad_assembly_ivory_psimetal"
          },
          "D": {
            "item": "psi:cad_assembly_ebony_psimetal"
          },
          "S": {
            "item": "psi:cad_socket_huge"
          },
          "B": {
            "item": "psi:cad_battery_ultradense"
          },
          "C": {
            "item": "psi:cad_core_radiative"
          }
        },
        "result": {
          "item": "phi:mpu"
    }})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "EEVII",
          "EDPDI",
          "DPAPD",
          "IDPDE",
          "IIMEE"
        ],
        "key": {
          "I": {
            "item": "psi:ivory_psimetal"
          },
          "E": {
            "item": "psi:ebony_psimetal"
          },
          "P": {
            "item": "phi:psionic_dust"
          },
          "A": {
            "item": "pneumaticcraft:advanced_pressure_tube"
          },
          "M": {
            "item": "psi:psimetal_block"
          },
          "V": {
            "item": "thermal:device_collector"
          },
          "D": {
            "item": "phi:distill_chamber_wall"
          }
        },
        "result": {
          "item": "phi:mpu"
    }})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "EEBII",
          "EPPPI",
          "MPMPL",
          "IPPPE",
          "IIBEE"
        ],
        "key": {
          "I": {
            "item": "psi:ivory_psimetal"
          },
          "E": {
            "item": "psi:ebony_psimetal"
          },
          "P": {
            "item": "phi:psionic_dust"
          },
          "M": {
            "item": "psi:psimetal_block"
          },
          "B": {
            "item": "psi:psidust_block"
          },
          "L": {
            "item": "industrialforegoing:laser_lens2"
          }
        },
        "result": {
          "item": "phi:infusion_laser"
    }})
    event.custom({
      "type": "interactio:item_lightning",
      "inputs": [
        {
          "item": "kubejs:infused_end_stone",
          "count": 1
        }
      ],
      "output": {
        "rolls": 1,
        "entries": [
          {
            "result": {
              "item": "phi:psionic_dust_ore",
              "count": 1
            },
            "weight": 1
          }
        ]
      }
    })
    
})