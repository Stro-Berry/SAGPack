onEvent('recipes', event => {
    event.remove({id: 'ironjetpacks:wood_jetpack'})
    const removeOutput = [
        'entangled:block',
        'entangled:item',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_point',
        'appliedenergistics2:inscriber',
        'appliedenergistics2:crafting_unit',
        'appliedenergistics2:printed_calculation_processor',
        'appliedenergistics2:printed_engineering_processor',
        'appliedenergistics2:printed_logic_processor',
        'appliedenergistics2:printed_silicon',
        'emendatusenigmatica:certus_quartz_block',
        'appliedenergistics2:charged_certus_quartz_block',
        'appliedenergistics2:wireless_booster',
        'rftoolsutility:module_template',
        'rftoolsutility:saturation_module',
        'appliedenergistics2:controller',
        'appliedenergistics2:1k_fluid_cell_component',
        'appliedenergistics2:4k_fluid_cell_component',
        'appliedenergistics2:16k_fluid_cell_component',
        'appliedenergistics2:64k_fluid_cell_component',
        'appliedenergistics2:2_cubed_spatial_cell_component',
        'appliedenergistics2:16_cubed_spatial_cell_component',
        'appliedenergistics2:128_cubed_spatial_cell_component',
        'appliedenergistics2:spatial_pylon',
        'aeadditions:chemical_interface',
        'aeadditions:item_storage_component_256',
        'aeadditions:item_storage_component_1024',
        'aeadditions:item_storage_component_4096',
        'aeadditions:item_storage_component_16384',
        'aeadditions:fluid_storage_component_256',
        'aeadditions:fluid_storage_component_1024',
        'aeadditions:fluid_storage_component_4096',
        'aeadditions:fluid_storage_component_16384',
        'aeadditions:chemical_storage_component_1',
        'aeadditions:chemical_storage_component_4',
        'aeadditions:chemical_storage_component_16',
        'aeadditions:chemical_storage_component_64',
        'aeadditions:chemical_storage_component_256',
        'aeadditions:chemical_storage_component_1024',
        'aeadditions:chemical_storage_component_4096',
        'aeadditions:chemical_terminal',
        'appliedenergistics2:export_bus',
        'appliedenergistics2:fluid_export_bus',
        'appliedenergistics2:import_bus',
        'appliedenergistics2:fluid_import_bus',
        'aeadditions:chemical_import_bus',
        'aeadditions:chemical_export_bus',
        'appliedenergistics2:fluid_terminal',
        'appliedenergistics2:quantum_ring',
        'appliedenergistics2:quantum_link',
        'appliedenergistics2:quartz_growth_accelerator',
        'appliedenergistics2:energy_cell',
        'appliedenergistics2:fluix_covered_cable',
        'appliedenergistics2:fluix_smart_cable',
        'appliedenergistics2:fluix_smart_dense_cable',
        'appliedenergistics2:biometric_card',
        'appliedenergistics2:wireless_terminal',
        'appliedenergistics2:me_p2p_tunnel',
        'appliedenergistics2:fluid_formation_plane',
        'appliedenergistics2:formation_plane',
        'appliedenergistics2:annihilation_plane',
        'appliedenergistics2:fluid_annihilation_plane',
        'appliedenergistics2:storage_bus',
        'appliedenergistics2:fluid_storage_bus',
        'appliedenergistics2:level_emitter',
        'appliedenergistics2:fluid_level_emitter',
        'appliedenergistics2:molecular_assembler',
        'extendedcrafting:ender_crafter',
        'extendedcrafting:ender_alternator',
        'angelring:energetic_angel_ring',
        'chisel:iron_chisel',
        'chisel:diamond_chisel',
        'tiab:timeinabottle',
        'xnet:controller',
        'advgenerators:turbine_rotor_tier1',
        'advgenerators:turbine_rotor_tier2',
        'advgenerators:turbine_rotor_tier3',
        'advgenerators:turbine_rotor_tier4',
        'advgenerators:turbine_rotor_tier5',
        'advgenerators:turbine_kit_tier2',
        'advgenerators:turbine_kit_tier3',
        'advgenerators:turbine_kit_tier4',
        'advgenerators:turbine_kit_tier5',
        'advgenerators:efficiency_upgrade_tier1',
        'advgenerators:efficiency_upgrade_tier2',
        'advgenerators:pressure_valve',
        'advgenerators:advanced_pressure_valve',
        'advgenerators:fe_output',
        'advgenerators:fluid_input',
        'mekanism:basic_tier_installer',
        'mekanism:advanced_tier_installer',
        'mekanism:elite_tier_installer',
        'mekanism:ultimate_tier_installer',
        'javd:portal_block',
        'integrateddynamics:variable',
        'integratedtunnels:part_interface_item',
        'integratedtunnels:part_interface_fluid',
        'integratedtunnels:part_interface_energy'
    ]
    
    removeOutput.forEach(recipe => {
        event.remove({output: recipe})
    })
    const removeId = [
        'extendedcrafting:enhanced_ender_ingot',
        'extendedcrafting:ender_star',
        'extendedcrafting:ender_ingot',
        'appliedenergistics2:network/cells/storage_cell_1k',
        'appliedenergistics2:network/cells/storage_cell_4k',
        'appliedenergistics2:network/cells/storage_cell_16k',
        'appliedenergistics2:network/cells/storage_cell_64k',
        'appliedenergistics2:network/cells/fluid_storage_cell_1k',
        'appliedenergistics2:network/cells/fluid_storage_cell_4k',
        'appliedenergistics2:network/cells/fluid_storage_cell_16k',
        'appliedenergistics2:network/cells/fluid_storage_cell_64k',
        'appliedenergistics2:network/cells/spatial_storage_cell_2_cubed',
        'appliedenergistics2:network/cells/spatial_storage_cell_16_cubed',
        'appliedenergistics2:network/cells/spatial_storage_cell_128_cubed',
        'aeadditions:cells/item/256k',
        'aeadditions:cells/item/1024k',
        'aeadditions:cells/item/4096k',
        'aeadditions:cells/item/16384k',
        'aeadditions:cells/fluid/256k',
        'aeadditions:cells/fluid/1024k',
        'aeadditions:cells/fluid/4096k',
        'aeadditions:cells/chemical/1k',
        'aeadditions:cells/chemical/4k',
        'aeadditions:cells/chemical/16k',
        'aeadditions:cells/chemical/64k',
        'aeadditions:cells/chemical/256k',
        'aeadditions:cells/chemical/1024k',
        'aeadditions:cells/chemical/4096k',
        'aeadditions:cells/chemical/16384k',
        'ironjetpacks:strap',
        'extendedcrafting:redstone_ingot',
        'pneumaticcraft:assembly/pressure_chamber_valve'
    ]
    removeId.forEach(recipe => {
        event.remove({id: recipe})
    })

    event.replaceInput({}, 'rftoolsbase:machine_frame', 'industrialforegoing:machine_frame_simple')

    event.shapeless('chisel:diamond_chisel', 'chiselsandbits:chisel_diamond')
    event.shapeless('chisel:iron_chisel', 'chiselsandbits:chisel_iron')
    event.shapeless('chisel:basalt/raw', 'minecraft:basalt')
    
    event.shaped('tiab:timeinabottle', [
        'GGG',
        'PCP',
        'DBD'
    ], {
        G: '#forge:plates/gold',
        P: 'tetra:planar_stabilizer',
        C: 'minecraft:clock',
        D: '#forge:plates/diamond',
        B: 'minecraft:glass_bottle'
    })
    event.shaped('xnet:controller', [
    'ILI',
    'VHV',
    'IWI'
    ], {
        I: '#forge:ingots/compressed_iron',
        H: 'immersiveengineering:heavy_engineering',
        V: 'immersiveengineering:electron_tube',
        L: 'pneumaticcraft:logistics_core',
        W: 'advgenerators:iron_wiring'
    })
    event.shaped('entangled:block', [
        'SAS',
        'ECE',
        'SAS'
    ], {
        S: 'immersiveengineering:sheetmetal_aluminum',
        A: 'mekanism:alloy_atomic',
        E: 'envirocore:erodium',
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:advanced_control_circuit'
    })
    event.shaped('entangled:item', [
        ' AE',
        ' RA',
        'R  '
    ], {
        A: 'mekanism:alloy_atomic',
        R: '#forge:rods/aluminum',
        E: 'envirocore:erodium_crystal'
    })
    event.shaped('ironjetpacks:strap', [
        '   ',
        'LSL',
        '   '
    ], {
        L: 'minecraft:leather',
        S: 'kubejs:galvanized_steel_ingot'
    })
    event.shaped('ironjetpacks:iron_thruster', [
        ' P ',
        'PAP',
        'PBP'
    ], {
        P: '#forge:plates/iron',
        A: 'immersiveengineering:coil_mv',
        B: 'tetra:combustion_chamber'
    })
    event.shaped('ironjetpacks:gold_thruster', [
        ' P ',
        'PAP',
        'PBP'
    ], {
        P: '#forge:plates/gold',
        A: 'pneumaticcraft:heat_sink',
        B: 'pneumaticcraft:turbine_rotor'
    })
    event.shaped('ironjetpacks:diamond_thruster', [
        ' P ',
        'PAP',
        'PBP'
    ], {
        P: 'mekanism:enriched_diamond',
        A: 'mekanism:electrolytic_core',
        B: 'mekanism:block_refined_obsidian'
    })
    event.shaped('ironjetpacks:emerald_thruster', [
        ' P ',
        'PAP',
        'PBP'
    ], {
        P: '#forge:plates/emerald',
        A: 'thermal:rf_coil',
        B: 'kubejs:steel_plated_ceramic_block'
    })
    event.shaped('ironjetpacks:iron_cell', [
        'PAP',
        'PBP',
        'PAP'
    ], {
        P: '#forge:plates/iron',
        A: 'tetra:vent_plate',
        B: 'immersiveengineering:wirecoil_redstone'
    })
    event.shaped('ironjetpacks:gold_cell', [
        'PAP',
        'PBP',
        'PAP'
    ], {
        P: '#forge:plates/gold',
        A: 'pneumaticcraft:capacitor',
        B: 'advgenerators:iron_wiring'
    })
    event.shaped('ironjetpacks:diamond_cell', [
        'PAP',
        'PBP',
        'PAP'
    ], {
        P: 'mekanism:enriched_diamond',
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:hdpe_sheet'
    })
    event.shaped('ironjetpacks:emerald_cell', [
        'PAP',
        'PBP',
        'PAP'
    ], {
        P: '#forge:plates/emerald',
        A: '#forge:plates/enderium',
        B: 'thermal:redstone_servo'
    })
    event.shaped('ironjetpacks:iron_capacitor', [
        'PAP',
        'CBC',
        'PAP'
    ], {
        C: 'ironjetpacks:iron_cell',
        P: '#forge:plates/iron',
        A: 'kubejs:galvanized_steel_ingot',
        B: 'immersiveengineering:capacitor_hv'
    })
    event.shaped('ironjetpacks:gold_capacitor', [
        'PAP',
        'CBC',
        'PAP'
    ], {
        C: 'ironjetpacks:gold_cell',
        P: '#forge:plates/gold',
        A: 'pneumaticcraft:printed_circuit_board',
        B: 'pneumaticcraft:compressed_iron_block'
    })
    event.shaped('ironjetpacks:diamond_capacitor', [
        'PAP',
        'CBC',
        'PAP'
    ], {
        C: 'ironjetpacks:diamond_cell',
        P: 'mekanism:enriched_diamond',
        A: 'mekanism:advanced_control_circuit',
        B: 'mekanism:basic_induction_cell'
    })
    event.shaped('ironjetpacks:emerald_capacitor', [
        'PAP',
        'CBC',
        'PAP'
    ], {
        C: 'ironjetpacks:emerald_cell',
        P: '#forge:plates/emerald',
        A: 'thermal:enderium_glass',
        B: 'thermal:upgrade_augment_3'
})
    event.shaped(Item.of('kubejs:superconducting_integral_components', '{AugmentData:{Type:"Machine",BaseMod:6.0f,RFXfer:2.0f}}'), [
        'ICI',
        'SRS',
        'ICI'
    ], {
        I: '#forge:ingots/chromium',
        C: 'electrodynamics:circuitultimate',
        S: 'kubejs:superconductive_block',
        R: 'thermal:upgrade_augment_3'
    })
    event.shaped(Item.of('kubejs:gaia_infused_integral_components', '{AugmentData:{Type:"Machine",BaseMod:10.0f,RFXfer:2.0f}}'), [
        'IRI',
        'GSG',
        'IRI'
    ], {
        I: 'kubejs:pristine_gold_ingot',
        R: 'mythicbotany:midgard_rune',
        G: 'botania:gaia_ingot',
        S: 'kubejs:superconducting_integral_components'
    })
    event.shaped('fluxnetworks:flux_point', [
        ' C ',
        'CTC',
        ' C '
    ], {
        C: 'fluxnetworks:flux_core',
        T: 'mekanism:teleportation_core'
    })
    event.shaped('rftoolsutility:module_template', [
        'SLS',
        'LCL',
        'SLS'
    ], {
        S: '#forge:plates/stainlesssteel',
        L: '#forge:plates/lumium',
        C: 'extendedcrafting:advanced_component'
    })
    event.shaped('rftoolsutility:saturation_module', [
        'LAL',
        'BMC',
        'LDL'
    ], {
        L: 'immersiveengineering:concrete_bucket',
        M: 'rftoolsutility:module_template',
        A: 'farmersdelight:shepherds_pie_block',
        B: 'farmersdelight:pasta_with_meatballs',
        C: 'farmersdelight:steak_and_potatoes',
        D: 'farmersdelight:honey_glazed_ham_block'
    })
    event.shaped('ironjetpacks:iron_jetpack', [
        'PCP',
        'PJP',
        'T T'
    ], {
        P: '#forge:plates/iron',
        C: 'ironjetpacks:iron_capacitor',
        T: 'ironjetpacks:iron_thruster',
        J: 'ironjetpacks:strap'
    })
    event.shaped('ironjetpacks:gold_jetpack', [
        'PCP',
        'PJP',
        'T T'
    ], {
        P: '#forge:plates/gold',
        C: 'ironjetpacks:gold_capacitor',
        T: 'ironjetpacks:gold_thruster',
        J: 'ironjetpacks:iron_jetpack'
    })
    event.shaped('ironjetpacks:diamond_jetpack', [
        'PCP',
        'PJP',
        'T T'
    ], {
        P: 'mekanism:enriched_diamond',
        C: 'ironjetpacks:diamond_capacitor',
        T: 'ironjetpacks:diamond_thruster',
        J: 'ironjetpacks:gold_jetpack'
    })
    event.shaped('ironjetpacks:emerald_jetpack', [
        'PCP',
        'PJP',
        'T T'
    ], {
        P: '#forge:plates/emerald',
        C: 'ironjetpacks:emerald_capacitor',
        T: 'ironjetpacks:emerald_thruster',
        J: 'ironjetpacks:diamond_jetpack'
    })
    event.shaped('mekanism:basic_tier_installer', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:crystal_osmium',
        D: 'pneumaticcraft:upgrade_matrix'
    })
    event.shaped('mekanism:advanced_tier_installer', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:plates/aluminum',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:hdpe_sheet',
        D: 'pneumaticcraft:upgrade_matrix'
    })
    event.shaped('mekanism:elite_tier_installer', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:plates/enderium',
        B: 'electrodynamics:circuitbasic',
        C: 'kubejs:elemental_dust',
        D: 'pneumaticcraft:upgrade_matrix'
    })
    event.shaped('mekanism:ultimate_tier_installer', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'electrodynamics:platestainlesssteel',
        B: 'industrialforegoing:pink_slime_ingot',
        C: 'industrialforegoing:plastic',
        D: 'pneumaticcraft:upgrade_matrix'
    })
    event.shaped('advgenerators:turbine_rotor_tier1', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'advgenerators:turbine_blade',
        B: 'kubejs:tungsten_block'
    })
    event.shaped('advgenerators:turbine_rotor_tier2', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:ingots/compressed_iron',
        C: 'naturesaura:sky_ingot',
        B: 'advgenerators:turbine_rotor_tier1'
    })
    event.shaped('advgenerators:turbine_rotor_tier3', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'mekanism:hdpe_sheet',
        C: 'mekanism:alloy_atomic',
        B: 'advgenerators:turbine_rotor_tier2'
    })
    event.shaped('advgenerators:turbine_rotor_tier4', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:reinforced_ingot',
        B: 'advgenerators:turbine_rotor_tier3'
    })
    event.shaped('advgenerators:turbine_rotor_tier5', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'electrodynamics:compositeplating',
        B: 'advgenerators:turbine_rotor_tier4'
    })
    event.shaped('advgenerators:turbine_kit_tier2', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:ingots/compressed_iron',
        C: 'naturesaura:sky_ingot',
        B: '#forge:plates/invar'
    })
    event.shaped('advgenerators:turbine_kit_tier3', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'mekanism:hdpe_sheet',
        C: 'mekanism:alloy_atomic',
        B: '#forge:plates/invar'
    })
    event.shaped('advgenerators:turbine_kit_tier4', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:reinforced_ingot',
        B: '#forge:plates/invar'
    })
    event.shaped('advgenerators:turbine_kit_tier5', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'electrodynamics:compositeplating',
        B: '#forge:plates/invar'
    })
    event.shaped('advgenerators:pressure_valve', [
        'ABA',
        'CCC',
        'ABA'
    ], {
        A: '#forge:rods/aluminum',
        B: 'mekanism:advanced_control_circuit',
        C: 'pneumaticcraft:advanced_pressure_tube'
    })
    event.shaped('advgenerators:advanced_pressure_valve', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'electrodynamics:circuitultimate',
        C: 'electrodynamics:platehslasteel',
        D: 'advgenerators:pressure_valve'
    })
    event.shaped('advgenerators:efficiency_upgrade_tier1', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'advgenerators:iron_frame',
        B: 'advgenerators:pressure_valve',
        C: 'thermal:machine_frame'
    })
    event.shaped('advgenerators:efficiency_upgrade_tier2', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'electrodynamics:platevanadiumsteel',
        B: 'advgenerators:advanced_pressure_valve',
        C: 'industrialforegoing:machine_frame_simple'
    })
    event.shaped('advgenerators:fe_output', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'advgenerators:iron_frame',
        B: 'immersiveengineering:generator',
        C: 'immersiveengineering:rs_engineering'
    })
    event.shaped('advgenerators:fluid_input', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'advgenerators:iron_frame',
        B: 'immersiveengineering:fluid_pipe',
        C: 'pneumaticcraft:large_tank'
    })
    event.shaped('2x integratedtunnels:part_interface_item', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'integrateddynamics:crystalized_menril_chunk',
        B: 'kubejs:platinum_plate',
        C: 'mekanism:logistical_sorter'
    })
    event.shaped('2x integratedtunnels:part_interface_fluid', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'integrateddynamics:crystalized_menril_chunk',
        B: 'kubejs:platinum_plate',
        C: 'pneumaticcraft:large_tank'
    })
    event.shaped('2x integratedtunnels:part_interface_energy', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'integrateddynamics:crystalized_menril_chunk',
        B: 'kubejs:platinum_plate',
        C: 'integrateddynamics:energy_battery'
    })
    event.shaped('4x integrateddynamics:variable', [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'integrateddynamics:crystalized_menril_chunk',
        B: 'kubejs:platinum_plate'
    })

    event.recipes.thermal.bottler("2x advgenerators:iron_wiring", [Fluid.of("emendatusenigmatica:molten_redstone", 200), "immersiveengineering:wirecoil_steel"]).energy(5000)
    event.recipes.thermal.smelter("create:blaze_cake_base", ['create:cinder_flour', 'minecraft:egg', 'minecraft:sugar']).energy(4000)
    event.recipes.thermal.bottler('create:blaze_cake', [Fluid.of('kubejs:magma_gelatin', 125), 'create:blaze_cake_base']).energy(2000)
    event.recipes.immersiveengineering.alloy('4x create:andesite_alloy', 'minecraft:andesite', '#forge:ingots/zinc')
    event.recipes.thermal.smelter('4x create:andesite_alloy', ['minecraft:andesite', '#forge:ingots/zinc']).energy(5000)
    event.recipes.thermal.pulverizer('4x emendatusenigmatica:obsidian_dust', 'minecraft:obsidian').energy(6400)
    event.recipes.thermal.pulverizer('2x kubejs:limestone_dust', '#chisel:limestone').energy(4000)
    event.recipes.thermal.pulverizer('2x kubejs:limestone_dust', 'create:limestone').energy(4000)
    event.recipes.mekanism.crushing('2x kubejs:limestone_dust', 'create:limestone')
    event.recipes.mekanism.crushing('2x kubejs:limestone_dust', '#chisel:limestone')
    event.recipes.thermal.chiller('kubejs:annealed_copper_ingot', 'kubejs:heated_copper_ingot').energy(4000)
    event.recipes.thermal.bottler('create:copper_casing', [Fluid.of('emendatusenigmatica:molten_copper', 576), 'create:andesite_casing']).energy(4000)
    event.recipes.mekanism.metallurgic_infusing('extendedcrafting:redstone_ingot', '#forge:ingots/signalum', 'mekanism:redstone', 5120)
    event.recipes.thermal.pulverizer([Item.of('tetra:pristine_lapis').withChance(0.5), Item.of('tetra:pristine_diamond').withChance(0.4), Item.of('tetra:pristine_emerald').withChance(0.3)], 'tetra:geode').energy(6400)
    event.recipes.thermal.sawmill('tetra:forged_beam', 'tetra:forged_wall').energy(6400)
    event.recipes.mekanism.sawing('tetra:forged_beam', 'tetra:forged_wall')
    event.recipes.createMechanicalCrafting('javd:portal_block', [
        'SSSSS',
        'SWTWS',
        'STCTS',
        'SWTWS',
        'SSSSS',
    ], {
        S: 'create:shadow_steel',
        W: 'waystones:warp_stone',
        T: 'kubejs:tungsten_block',
        C: 'naturesaura:generator_limit_remover'
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "immersiveengineering:biodiesel"
        },
        "fePerMb": 750
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "immersivepetroleum:diesel"
        },
        "fePerMb": 1000
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "immersivepetroleum:gasoline"
        },
        "fePerMb": 900
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "pneumaticcraft:lpg"
        },
        "fePerMb": 1500
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "kubejs:nitro_diesel"
        },
        "fePerMb": 1000
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "immersiveengineering:creosote"
        },
        "fePerMb": 250
    })
    event.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "thermal:creosote"
        },
        "fePerMb": 250
    })
    event.custom({
        "type":"electrodynamics:lathe_recipe",
    
        "input":{
            "item": "tetra:forged_beam",
            "count":1
        },
        "output":{
            "item": "tetra:forged_bolt",
            "count":1
        }
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "mekanism:heavy_water",
          "amount": 8000
        },
        "fluid_output": {
          "fluid": "kubejs:hot_heavy_water",
          "amount": 8000
        },
        "temperature": {
          "min_temp": 1273
        },
        "pressure": 4.0,
        "speed": 0.1,
        "exothermic": false
      })

    event.custom({
        "input": [
          {
            "item": "fluxnetworks:flux_dust"
          },
          {
            "item": "fluxnetworks:flux_dust"
          },
          {
            "item": "fluxnetworks:flux_dust"
          },
          {
            "item": "fluxnetworks:flux_dust"
          },
          {
            "tag": "forge:storage_blocks/signalum"
          },
          {
            "tag": "forge:storage_blocks/signalum"
          },
          {
            "item": "electrodynamics:wirehighlyinsulatedsuperconductive"
          },
          {
            "item": "electrodynamics:wirehighlyinsulatedsuperconductive"
          }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:50}",
        "processingTime": 40,
        "output": {
          "item": "fluxnetworks:flux_core",
          "count": 4
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "tag": "forge:storage_blocks/steel",
          "count": 1
        },
        "result": {
          "item": "immersiveengineering:sheetmetal_steel",
          "count": 9
        },
        "program": "laser"
      })
      event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "tag": "forge:storage_blocks/aluminum",
          "count": 1
        },
        "result": {
          "item": "immersiveengineering:sheetmetal_aluminum",
          "count": 9
        },
        "program": "laser"
      })
      event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "tag": "forge:storage_blocks/copper",
          "count": 1
        },
        "result": {
          "item": "immersiveengineering:sheetmetal_copper",
          "count": 9
        },
        "program": "laser"
      })

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "ABCBA",
          "ADEDA",
          "ABCBA",
          "AAAAA"
        ],
        "key": {
          "A": {
            "item": "kubejs:advanced_plating"
          },
          "B": {
            "item": "futurepack:coil_quantanium"
          },
          "C": {
            "item": "futurepack:core_entronium"
          },
          "D": {
            "item": "futurepack:compact_energy_cell"
          },
          "E": {
            "item": "kubejs:gaia_infused_integral_components"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "kubejs:quantum_integral_components",
            "count": 1,
            "nbt": '{AugmentData:{Type:"Machine",BaseMod:16.0f,RFXfer:2.0f}}'
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          "A B",
          "CDE",
          "F G"
        ],
        "key": {
          "A": {
            "item": "biomesoplenty:wilted_lily"
          },
          "B": {
            "item": "emendatusenigmatica:cobalt_plate"
          },
          "C": {
            "item": "minecraft:lily_of_the_valley"
          },
          "D": {
            "item": "artifacts:crystal_heart"
          },
          "E": {
            "item": "buildinggadgets:construction_paste"
          },
          "F": {
            "item": "extrabotany:reikarlily"
          },
          "G": {
            "item": "draconicevolution:chaotic_pickaxe"
          }
        },
        "result": {
          "item": "kubejs:stellar_alloy"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBA",
          "BCCCB",
          "BDEDB",
          "BCCCB",
          "ABBBA"
        ],
        "key": {
          "A": {
            "item": "kubejs:pristine_gold_block"
          },
          "B": {
            "item": "kubejs:pristine_gold_ingot"
          },
          "C": {
            "item": "extrabotany:orichalcos"
          },
          "D": {
            "item": "ironjetpacks:emerald_jetpack"
          },
          "E": {
            "item": "angelring:itemdiamondring"
          }
        },
        "result": {
          "item": "angelring:energetic_angel_ring"
        }
      })

    const mekanismMachineTypes = [
        'smelting',
        'enriching',
        'crushing',
        'compressing',
        'combining',
        'purifying',
        'injecting',
        'infusing',
        'sawing'
    ]
    const mekanismTiers = [
        'basic',
        'advanced',
        'elite',
        'ultimate'
    ]

    mekanismTiers.forEach(tier => {
        mekanismMachineTypes.forEach(type => {
            event.remove({id: `mekanism:factory/${tier}/${type}`})
        })
    })
})