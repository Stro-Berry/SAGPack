// priority: 0

onEvent('recipes', event => {
    
    event.remove({output: 'integrateddynamics:energy_battery'})
    event.remove({output: 'integrateddynamics:mechanical_squeezer'})
    event.remove({output: 'integrateddynamics:mechanical_drying_basin'})
    event.remove({output: 'advgenerators:turbine_blade'})
    event.remove({output: 'advgenerators:iron_frame'})
    event.remove({output: 'advgenerators:fuel_turbine_controller'})
    event.remove({output: 'advgenerators:iron_tubing'})
    event.remove({output: 'advgenerators:controller'})
    event.remove({output: 'rftoolsbase:machine_frame'})
    event.remove({id: 'occultism:spirit_fire/purified_ink'})
    event.remove({id: 'occultism:spirit_fire/otherworld_sapling_natural'})
    event.remove({id: 'electrodynamics:do2o/energizedalloyer/stainless_ssteel'})
    event.remove({id: 'electrodynamics:do2o/reinforcedalloyer/hslasteel_ingot'})
    event.remove({id: 'electrodynamics:do2o/reinforcedalloyer/superconductive_ingot'})
    event.remove({id: 'electrodynamics:do2o/oxidationfurnace/aluminum_ingot'})
    event.remove({id: 'electrodynamics:do2o/oxidationfurnace/titanium_ingot'})
    event.remove({id: 'electrodynamics:do2o/oxidationfurnace/chromium_ingot'})
    event.remove({id: 'electrodynamics:o2o/mineralgrinder/molybdenum_dust_from_imp_molybdenum_dust'})
    event.remove({id: 'electrodynamics:o2o/mineralcrusher/impure_molybdenum_dust_from_crystal'})
    event.remove({id: 'electrodynamics:o2o/mineralgrinder/molybdenum_dust_from_molybdenum_ore'})
    event.remove({id: 'immersiveengineering:arcfurnace/ore_aluminum'})
    event.remove({id: 'thermal:furnace_1002495451'})
    event.remove({id: 'thermal:furnace_858661298'})
    event.remove({id: 'thermal:furnace_168306523'})
    event.remove({id: 'create:smelting/ingot_aluminum_compat_immersiveengineering'})
    event.remove({id: 'create:blasting/ingot_aluminum_compat_immersiveengineering'})
    event.remove({id: 'emendatusenigmatica:ingot_from_chunk/smelting/aluminum'})
    event.remove({id: 'emendatusenigmatica:ingot_from_chunk/blasting/aluminum'})
    event.remove({id: 'immersiveengineering:crafting/ingot_aluminum'})
    event.remove({id: 'immersiveengineering:crafting/ingot_aluminum_from_blasting'})
    event.remove({id: 'emendatusenigmatica:ingot_from_ore/smelting_aluminum'})
    event.remove({id: 'emendatusenigmatica:ingot_from_ore/blasting_aluminum'})
    event.remove({output: 'rftoolspower:coal_generator'})
    event.remove({output: 'industrialforegoing:pitiful_generator'})
    event.remove({output: 'integrateddynamics:coal_generator'})
    event.remove({output: 'appliedenergistics2:vibration_chamber'})
    event.remove({output: 'integrateddynamics:drying_basin'})
    event.remove({output: 'integrateddynamics:squeezer'})
    event.remove({output: 'thermal:dynamo_gourmand'})
    event.remove({output: 'thermal:dynamo_disenchantment'})
    event.remove({output: 'thermal:dynamo_lapidary'})
    event.remove({output: 'thermal:dynamo_numismatic'})
    event.remove({output: 'thermal:dynamo_magmatic'})
    event.remove({output: 'thermal:dynamo_compression'})
    event.remove({output: 'thermal:dynamo_stirling'})
    event.remove({output: 'ironjetpacks:wood_jetpack'})
    event.remove({output: 'ironjetpacks:wood_cell'})
    event.remove({output: 'ironjetpacks:wood_capacitor'})
    event.remove({output: 'ironjetpacks:wood_thruster'})
    event.remove({output: 'ironjetpacks:stone_jetpack'})
    event.remove({output: 'ironjetpacks:stone_cell'})
    event.remove({output: 'ironjetpacks:stone_capacitor'})
    event.remove({output: 'ironjetpacks:stone_thruster'})
    event.remove({output: 'advgenerators:exchanger_controller'})
    event.remove({output: 'mekanismgenerators:turbine_casing'})
    event.remove({output: 'immersivepetroleum:gas_generator'})
    event.remove({output: 'electrodynamics:combustionchamber'})
    event.remove({output: 'electrodynamics:hydroelectricgenerator'})
    event.remove({output: 'electrodynamics:windmill'})
    event.remove({output: 'electrodynamics:thermoelectricgenerator'})
    event.remove({output: 'electrodynamics:advancedsolarpanel'})
    event.remove({output: 'electrodynamics:solarpanel'})
    event.remove({output: 'aoa3:blank_realmstone'})
    event.remove({output: 'mekanismgenerators:gas_burning_generator'})
    event.remove({output: 'mekanismgenerators:heat_generator'})
    event.remove({output: 'mekanismgenerators:bio_generator'})
    event.remove({output: 'mekanismgenerators:advanced_solar_generator'})
    event.remove({output: 'mekanismgenerators:solar_generator'})
    event.remove({output: 'mekanismgenerators:wind_generator'})
    event.remove({output: 'extrabotany:rewardbaga'})
    event.remove({output: 'extrabotany:rewardbagb'})
    event.remove({output: 'extrabotany:rewardbagc'})
    event.remove({output: 'extrabotany:rewardbagd'})
    event.remove({output: 'botania:fertilizer'})
    event.remove({output: 'angelring:itemring'})
    event.remove({output: 'angelring:leadstone_angel_ring'})
    event.remove({output: 'angelring:hardened_angel_ring'})
    event.remove({output: 'angelring:reinforced_angel_ring'})
    event.remove({output: 'angelring:resonant_angel_ring'})
    event.remove({id: 'futurepack:smelting/dust_neon_to_ingot_neon'})
    event.remove({id: 'futurepack:smelting/dust_glowtite_to_ingot_glowtite'})
    event.remove({id: 'futurepack:smelting/dust_bioterium_to_ingot_bioterium'})
    event.remove({id: 'futurepack:smelting/dust_wakurium_to_ingot_wakurium'})
    event.remove({id: 'futurepack:smelting/dust_quantanium_to_ingot_quantanium'})
    event.remove({id: 'futurepack:smelting/dust_retium_to_ingot_retium'})
    event.remove({id: 'futurepack:blasting/dust_neon_to_ingot_neon'})
    event.remove({id: 'futurepack:blasting/dust_glowtite_to_ingot_glowtite'})
    event.remove({id: 'futurepack:blasting/dust_bioterium_to_ingot_bioterium'})
    event.remove({id: 'futurepack:blasting/dust_wakurium_to_ingot_wakurium'})
    event.remove({id: 'futurepack:blasting/dust_quantanium_to_ingot_quantanium'})
    event.remove({id: 'futurepack:blasting/dust_retium_to_ingot_retium'})
    event.remove({output: 'botania:orechid'})
    event.remove({output: 'botania:orechid_ignem'})
    event.remove({output: 'botania:floating_orechid'})
    event.remove({output: 'botania:floating_orechid_ignem'})
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'})
    event.remove({id: 'envirocore:items/ct_litherite2'})
    event.remove({id: 'envirocore:items/ct_litherite4'})
    event.remove({id: 'envirocore:items/ct_litherite6'})
    event.remove({id: 'envirocore:items/ct_litherite8'})
    event.remove({id: 'emendatusenigmatica:block_from_gem/charged_certuz_quartz'})
    event.remove({id: 'mekanism:control_circuit/basic'})
    event.remove({output: 'industrialforegoing:fluid_sieving_machine'})
    event.remove({id: 'aoa3:shapeless_craft_precasia_realmstone'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})
    event.remove({id: 'immersivepetroleum:hydrotreater/sulfur_recovery'})
    event.remove({id: 'immersivepetroleum:asphalt'})
    event.remove({id: 'immersivepetroleum:asphalt2'})
    event.remove({id: 'create:crushing/obsidian'})
    event.remove({output: 'pneumaticcraft:air_compressor'})
    event.remove({output: 'pneumaticcraft:advanced_air_compressor'})
    event.remove({output: 'mekanism:fuelwood_heater'})
    event.remove({output: 'rftoolsutility:flight_module'})
    event.remove({id: 'hostilenetworks:living_matter/overworldian/iron_ingot'})

    event.shaped('16x minecraft:stick', [
        'L',
        'L'
    ], {
        L: '#forge:logs'
    })
    event.shaped('4x minecraft:chest', [
        'LLL',
        'L L',
        'LLL'
    ], {
        L: '#forge:logs'
    })
    event.shaped('integrateddynamics:energy_battery', [
        'MPM',
        'MRM',
        'MPM'
    ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        P: 'tetra:vent_plate',
        R: 'immersiveengineering:rs_engineering'
    })
    event.shaped('integrateddynamics:energy_battery', [
        'MPM',
        'MRM',
        'MPM'
    ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        P: 'tetra:vent_plate',
        R: 'immersiveengineering:rs_engineering'
    })

    event.shaped('integrateddynamics:mechanical_squeezer', [
        'MPM',
        'OBO',
        'MLM'
    ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        P: 'minecraft:piston',
        O: 'minecraft:obsidian',
        L: 'immersiveengineering:light_engineering',
        B: 'integrateddynamics:energy_battery'
    })

    event.shaped('integrateddynamics:mechanical_drying_basin', [
        'OMO',
        'PBP',
        'OPO'
    ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        P: 'pneumaticcraft:plastic',
        O: 'minecraft:obsidian',
        B: 'integrateddynamics:energy_battery'
    })

    event.shaped('4x advgenerators:iron_frame', [
        'SCS',
        'CIC',
        'SCS'
    ], {
        S: 'emendatusenigmatica:steel_rod',
        C: 'pneumaticcraft:compressed_stone',
        I: 'pneumaticcraft:ingot_iron_compressed'
    })

    event.shaped('advgenerators:fuel_turbine_controller', [
        'FCF',
        'CSC',
        'FCF'
    ], {
        S: 'mekanism:steel_casing',
        C: 'advgenerators:controller',
        F: 'advgenerators:iron_frame'
    })

    event.shaped('advgenerators:iron_tubing', [
        ' PS',
        'PTP',
        'SP '
    ], {
        S: 'emendatusenigmatica:steel_rod',
        P: 'pneumaticcraft:pressure_tube',
        T: 'immersiveengineering:stick_treated'
    })

    event.shaped('advgenerators:controller', [
        'WEW',
        'BPB',
        'WEW'
    ], {
        W: 'advgenerators:iron_wiring',
        E: 'immersiveengineering:wire_electrum',
        B: 'pneumaticcraft:printed_circuit_board',
        P: 'tetra:vent_plate'
    })

    event.shaped('emendatusenigmatica:charged_certus_quartz_block', [
        'CC',
        'CC'
    ], {
        C: 'appliedenergistics2:charged_certus_quartz_crystal'
    })

    event.shaped('immersivepetroleum:gas_generator', [
        'SLS',
        'BCB',
        'SSS'
    ], {
        S: 'emendatusenigmatica:steel_plate',
        L: 'immersiveengineering:connector_lv',
        B: 'emendatusenigmatica:bitumen_gem',
        C: 'tetra:combustion_chamber'
    })

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [
        ' R ',
        'BBB',
        'PPP'
    ], {
        P: 'minecraft:paper',
        B: 'minecraft:blue_dye',
        R: 'immersiveengineering:mold_rod'
    })

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'), [
        ' R ',
        'BBB',
        'PPP'
    ], {
        P: 'minecraft:paper',
        B: 'minecraft:blue_dye',
        R: 'immersiveengineering:revolver'
    })

    event.shaped('12x immersivepetroleum:asphalt', [
        'SBS',
        'GWG',
        'SBS'
    ], {
        B: 'emendatusenigmatica:bitumen_gem',
        S: 'thermal:slag',
        G: '#forge:gravel',
        W: 'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    
    event.shaped('8x immersivepetroleum:asphalt', [
        'SBS',
        'GWG',
        'SBS'
    ], {
        B: 'emendatusenigmatica:bitumen_gem',
        S: '#forge:sand',
        G: '#forge:gravel',
        W: 'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    event.shaped('2x kubejs:chilly_core', [
        'III',
        'ICI',
        'III'
    ], {
        I: 'thermal:ice_charge',
        C: 'kubejs:chilly_core'
    })

    event.shaped('rftoolsutility:flight_module', [
        'GSG',
        'GMG',
        'GEG'
    ], {
        S: Item.of('rftoolsutility:syringe', '{mobName:"minecraft:ghast",mobId:"minecraft:ghast",level:10}'),
        G: "minecraft:ghast_tear",
        M: 'rftoolsutility:module_template',
        E: 'minecraft:ender_pearl'
    })

    event.shapeless('immersiveengineering:concrete', 'immersiveengineering:concrete_tile')
    event.shapeless('kubejs:chilly_core', 'eidolon:bonechill_wand')

    event.smelting('kubejs:bauxite_dust', '#forge:ores/aluminum')
    event.blasting('kubejs:bauxite_dust', '#forge:ores/aluminum')
    event.smelting('kubejs:pitchblende', 'kubejs:pitchblende_ore')
    event.blasting('kubejs:pitchblende', 'kubejs:pitchblende_ore')
    event.recipes.thermal.smelter("4x emendatusenigmatica:bronze_ingot", ["3x emendatusenigmatica:copper_ingot", "emendatusenigmatica:tin_ingot"]).energy(2000)
    event.recipes.thermal.smelter("4x emendatusenigmatica:brass_ingot", ["3x emendatusenigmatica:copper_ingot", "emendatusenigmatica:zinc_ingot"]).energy(2000)
    event.recipes.thermal.smelter("2x emendatusenigmatica:electrum_ingot", ["emendatusenigmatica:silver_ingot", "minecraft:gold_ingot"]).energy(2000)
    event.recipes.thermal.smelter("2x emendatusenigmatica:constantan_ingot", ["emendatusenigmatica:copper_ingot", "emendatusenigmatica:nickel_ingot"]).energy(2000)
    event.recipes.thermal.smelter("3x emendatusenigmatica:invar_ingot", ["2x minecraft:iron_ingot", "emendatusenigmatica:nickel_ingot"]).energy(2000)
    event.recipes.thermal.press("kubejs:compressed_steel_casing_materials", ["8x kubejs:steel_casing_materials", "thermal:press_packing_2x2_die"]).energy(10000)
    event.recipes.thermal.press("kubejs:compressed_advanced_control_circuit_materials", ["8x kubejs:advanced_control_circuit_materials", "thermal:press_packing_2x2_die"]).energy(10000)
    event.recipes.thermal.press("kubejs:compressed_elite_control_circuit_materials", ["8x kubejs:elite_control_circuit_materials", "thermal:press_packing_2x2_die"]).energy(10000)
    event.recipes.thermal.press("kubejs:compressed_ultimate_control_circuit_materials", ["8x kubejs:ultimate_control_circuit_materials", "thermal:press_packing_2x2_die"]).energy(10000)
    event.recipes.thermal.press("pneumaticcraft:compressed_iron_gear", ["4x pneumaticcraft:ingot_iron_compressed", "thermal:press_gear_die"]).energy(10000)
    event.recipes.immersiveengineering.metal_press("pneumaticcraft:compressed_iron_gear", "4x pneumaticcraft:ingot_iron_compressed", "immersiveengineering:mold_gear")
    event.recipes.mekanism.combining("3x mythicbotany:elementium_ore", "3x botania:shimmerrock", 'extrabotany:orichalcos')
    event.recipes.thermal.pulverizer('2x kubejs:pitchblende', 'kubejs:pitchblende_ore')
    event.recipes.mekanism.enriching('2x kubejs:pitchblende', 'kubejs:pitchblende_ore')  
    event.recipes.createPressing('thermal:netherite_plate', 'minecraft:netherite_ingot')
    event.recipes.createFilling('kubejs:concrete_bottle', ['minecraft:glass_bottle', Fluid.of('immersiveengineering:concrete',125)])
    event.recipes.thermal.pulverizer('2x create:cinder_flour', 'minecraft:netherrack')
    event.recipes.mekanism.crushing('2x create:cinder_flour', 'minecraft:netherrack')
    event.recipes.immersiveengineering.crusher('2x create:cinder_flour', 'minecraft:netherrack')
    event.recipes.immersiveengineering.metal_press('thermal:netherite_plate', 'minecraft:netherite_ingot', "immersiveengineering:mold_plate")
    event.recipes.thermal.bottler("naturesaura:gold_fiber", [Fluid.of("kubejs:volatile_golden_mixture", 250), "immersiveengineering:hemp_fiber"]).energy(10000)
    event.recipes.mekanism.combining("minecraft:netherrack", "#forge:cobblestone", 'hostilenetworks:nether_prediction')
    event.recipes.thermal.pulverizer('emendatusenigmatica:coke_dust', 'emendatusenigmatica:coke_gem')
    event.recipes.mekanism.crushing('emendatusenigmatica:coke_dust', 'emendatusenigmatica:coke_gem')
    event.recipes.thermal.pulverizer('kubejs:steel_sand', 'emendatusenigmatica:steel_dust') 
    event.recipes.mekanism.crushing('kubejs:steel_sand', 'emendatusenigmatica:steel_dust')
    event.recipes.thermal.pulverizer('create:limesand', 'minecraft:sand') 
    event.recipes.mekanism.crushing('create:limesand', 'minecraft:sand')
    event.recipes.thermal.bottler("create:rose_quartz", [Fluid.of("emendatusenigmatica:molten_redstone", 800), "minecraft:quartz"]).energy(2000)
    event.recipes.thermal.sawmill('create:polished_rose_quartz', 'create:rose_quartz').energy(2000)
    event.recipes.thermal.chiller('emendatusenigmatica:lithium_dust', Fluid.of("mekanism:lithium", 100)).energy(800)
    event.recipes.thermal.chiller('pneumaticcraft:plastic', Fluid.of("pneumaticcraft:plastic", 500)).energy(4000)

    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "pneumaticcraft:turbine_blade"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "pneumaticcraft:plastic",
          "amount": 500
        },
        "item_output": {
          "item": "advgenerators:turbine_blade",
          "count": 1
        },
        "temperature": {
          "min_temp": 873
        },
        "pressure": 3.0,
        "speed": 0.1,
        "exothermic": false
      })
      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:cryolite_crystal"
        },
        "fluid_output": {
          "fluid": "kubejs:molten_cryolite",
          "amount": 144
        },
        "temperature": {
          "min_temp": 873
        },
        "pressure": 1.0,
        "speed": 0.1,
        "exothermic": false
      })
      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "mekanism:steam",
          "amount": 8000
        },
        "fluid_output": {
          "fluid": "kubejs:distilled_water",
          "amount": 800
        },
        "temperature": {
          "max_temp": 223
        },
        "pressure": 2.0,
        "speed": 0.1,
        "exothermic": false
      })
      event.custom({
        "type":"electrodynamics:reinforced_alloyer_recipe",
    
        "input1":{
            "item":"electrodynamics:ingotmolybdenum",
            "count":1
        },
        "input2":{
            "item":"kubejs:galvanized_steel_ingot",
            "count":1
        },
        "output":{
            "item":"electrodynamics:ingothslasteel",
            "count":2
        }
    })
    event.custom({
        "type":"electrodynamics:energized_alloyer_recipe",
    
        "input1":{
            "item":"electrodynamics:oremolybdenum",
            "count":1
        },
        "input2":{
            "item":"electrodynamics:impuredustmolybdenum",
            "count":1
        },
        "output":{
            "item":"electrodynamics:dustmolybdenum",
            "count":2
        }
    })

    event.custom({
        "type": "occultism:crushing",
        "ingredient": {
            "item": 'kubejs:pitchblende_ore'
        },
        "result": {
            "item": 'kubejs:pitchblende',
            "count": 2
        },
        "crushing_time": 10
    })
    event.custom({
        "type": "thermal:insolator",
        "ingredient": {
          "item": "nethers_delight:propelplant_berry_stem"
        },
        "result": [
          {
            "item": "nethers_delight:propelpearl",
            "chance": 2.5
          },
          {
            "item": "nethers_delight:propelplant_berry_stem",
            "chance": 1.1
          }
        ]
      })
})