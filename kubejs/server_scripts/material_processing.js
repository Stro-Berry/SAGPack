// priority: 10

onEvent('recipes', event => {

const metals = [
    'iron',
    'gold',
    'copper',
    'aluminum',
    'silver',
    'lead',
    'nickel',
    'uranium',
    'osmium',
    'tin',
    'zinc',
    'cobalt',
    'iridium',
    'bronze',
    'brass',
    'constantan',
    'electrum',
    'steel',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'cast_iron'
]

const gems = [
    'diamond',
    'emerald',
    'lapis'
]

metals.forEach((material) => {
    event.remove({id: `emendatusenigmatica:gear_from_ingot/${material}`})
    event.remove({id: `emendatusenigmatica:plate_from_ingot/${material}`})
    event.remove({id: `thermal:parts/${material}_gear`})
    event.remove({id: `immersiveengineering:plate_${material}_hammering`})
    event.remove({id: `immersiveengineering:crafting/plate_${material}_hammering`})
    event.remove({id: `thermal:machine/press/press_${material}_ingot_to_plate`})
    event.remove({id: `electrodynamics:plate${material}`})
    event.recipes.thermal.crucible(Fluid.of(`emendatusenigmatica:molten_${material}`, 144), `#forge:ingots/${material}`).energy(10000)
    event.recipes.thermal.crucible(Fluid.of(`emendatusenigmatica:molten_${material}`, 1296), `#forge:storage_blocks/${material}`).energy(90000)
    event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${material}_plate`, `#forge:ingots/${material}`, 'immersiveengineering:mold_plate')
    event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${material}_gear`, `4x #forge:ingots/${material}`, 'immersiveengineering:mold_gear')
    event.recipes.immersiveengineeringMetalPress(`2x emendatusenigmatica:${material}_rod`, `#forge:ingots/${material}`, 'immersiveengineering:mold_rod')
    event.recipes.create.pressing(`emendatusenigmatica:${material}_plate`, `#forge:ingots/${material}`)
    event.recipes.createCutting(`2x emendatusenigmatica:${material}_rod`, `#forge:ingots/${material}`)
    event.recipes.thermal.press(`emendatusenigmatica:${material}_plate`, `#forge:ingots/${material}`).energy(4000)
    event.recipes.thermal.press(`2x emendatusenigmatica:${material}_rod`, [`#forge:ingots/${material}`, "immersiveengineering:mold_rod"]).energy(4000)
    event.recipes.create.milling(`emendatusenigmatica:${material}_dust`, `#forge:ingots/${material}`)
    event.recipes.create.crushing(`emendatusenigmatica:${material}_dust`, `#forge:ingots/${material}`)

    if (material != 'iron' && material != 'gold') {
        event.recipes.thermal.chiller(`emendatusenigmatica:${material}_ingot`, ['thermal:chiller_ingot_cast', Fluid.of(`emendatusenigmatica:molten_${material}`, 144)])
    }
    

    event.custom({
        "type":"electrodynamics:lathe_recipe",
    
        "input":{
            "tag": `forge:ingots/${material}`,
            "count":1
        },
        "output":{
            "item": `emendatusenigmatica:${material}_rod`,
            "count":2
        }
    })
    event.custom({
        "type": "electrodynamics:mineral_crusher_recipe",
        "input": {
            "tag": `forge:ingots/${material}`,
            "count": 1
        },
        "output": {
            "item": `emendatusenigmatica:${material}_plate`,
            "count": 1
        }
    })
})

gems.forEach(material => { 
    event.remove({id: `thermal:parts/${material}_gear`})

    event.recipes.createCutting(`2x emendatusenigmatica:${material}_rod`, `#forge:gems/${material}`)
    event.recipes.thermal.press(`2x emendatusenigmatica:${material}_rod`, [`#forge:gems/${material}`, "immersiveengineering:mold_rod"]).energy(4000)
    event.recipes.thermal.press(`emendatusenigmatica:${material}_plate`, `#forge:gems/${material}`).energy(4000)
    event.recipes.thermal.press(`emendatusenigmatica:${material}_gear`, [`4x #forge:gems/${material}`, "thermal:press_gear_die"]).energy(4000)
    event.recipes.create.pressing(`emendatusenigmatica:${material}_plate`, `#forge:gems/${material}`)
    event.recipes.immersiveengineeringMetalPress(`2x emendatusenigmatica:${material}_rod`, `#forge:gems/${material}`, 'immersiveengineering:mold_rod')
    event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${material}_plate`, `#forge:gems/${material}`, 'immersiveengineering:mold_plate')
    event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${material}_gear`, `4x #forge:gems/${material}`, 'immersiveengineering:mold_gear')
    event.custom({
        "type":"electrodynamics:lathe_recipe",
    
        "input":{
            "tag": `forge:gems/${material}`,
            "count":1
        },
        "output":{
            "item": `emendatusenigmatica:${material}_rod`,
            "count":2
        }
    })

    event.remove({output: `emendatusenigmatica:${material}_gear`})
})

event.remove({input: 'immersiveengineering:mold_plate'})
event.remove({input: 'immersiveengineering:mold_gear'})
event.remove({input: 'immersiveengineering:mold_rod'})
event.remove({input: 'thermal:chiller_ingot_cast'})
event.remove({input: 'emendatusenigmatica:enigmatic_hammer'})
event.remove({output: 'electrodynamics:gearsteel'})

const removeId = [
    'industrialforegoing:iron_gear',
    'electrodynamics:geariron',
    'industrialforegoing:gold_gear',
    'pneumaticcraft:compressed_iron_gear',
    'thermal:parts/netherite_gear',
    'electrodynamics:gearbronze',
    'futurepack:spaceship_12',
    'immersiveengineering:crafting/stick_iron',
    'immersiveengineering:crafting/stick_aluminum',
    'immersiveengineering:crafting/stick_steel',
    'electrodynamics:platesteel',
    'electrodynamics:o2o/lathe/titaniumcarbiderod',
    'electrodynamics:o2o/lathe/hslasteelrod',
    'electrodynamics:o2o/lathe/stainlesssteelrod',
    'electrodynamics:o2o/lathe/steelrod',
    'electrodynamics:geartin',
    'industrialforegoing:diamond_gear'
]

removeId.forEach(recipe => event.remove({id: recipe}))

event.recipes.immersiveengineeringMetalPress('thermal:netherite_gear', `4x #forge:ingots/netherite`, 'immersiveengineering:mold_gear')
event.recipes.immersiveengineeringMetalPress('kubejs:platinum_gear', `4x kubejs:platinum_ingot`, 'immersiveengineering:mold_gear')
event.recipes.thermal.press('kubejs:platinum_gear', ['4x kubejs:platinum_ingot', 'thermal:press_gear_die']).energy(3200)
event.recipes.thermal.press('kubejs:platinum_plate', 'kubejs:platinum_ingot').energy(3200)
event.recipes.create.pressing('kubejs:platinum_plate', 'kubejs:platinum_ingot')
event.recipes.immersiveengineeringMetalPress('kubejs:platinum_plate', 'kubejs:platinum_ingot', 'immersiveengineering:mold_plate')
event.recipes.thermal.press('emendatusenigmatica:aluminum_gear', ['4x #forge:ingots/aluminum', 'thermal:press_gear_die']).energy(3200)
event.recipes.thermal.press('emendatusenigmatica:steel_gear', ['4x #forge:ingots/steel', 'thermal:press_gear_die']).energy(3200)
event.recipes.thermal.press('immersiveengineering:wire_copper', ['#forge:ingots/copper', "immersiveengineering:mold_wire"]).energy(4000)
event.recipes.thermal.press('immersiveengineering:wire_electrum', ['#forge:ingots/electrum', "immersiveengineering:mold_wire"]).energy(4000)
event.recipes.thermal.press('immersiveengineering:wire_aluminum', ['#forge:ingots/aluminum', "immersiveengineering:mold_wire"]).energy(4000)
event.recipes.thermal.press('immersiveengineering:wire_steel', ['#forge:ingots/steel', "immersiveengineering:mold_wire"]).energy(4000)
event.recipes.thermal.press('immersiveengineering:wire_lead', ['#forge:ingots/lead', "immersiveengineering:mold_wire"]).energy(4000)

event.custom({
    "type":"electrodynamics:lathe_recipe",

    "input":{
        "tag": 'forge:ingots/titaniumcarbide',
        "count":1
    },
    "output":{
        "item": 'electrodynamics:rodtitaniumcarbide',
        "count":2
    }
})
event.custom({
    "type":"electrodynamics:lathe_recipe",

    "input":{
        "tag": 'forge:ingots/hslasteel',
        "count":1
    },
    "output":{
        "item": 'electrodynamics:rodhslasteel',
        "count":2
    }
})
event.custom({
    "type":"electrodynamics:lathe_recipe",

    "input":{
        "tag": 'forge:ingots/stainlesssteel',
        "count":1
    },
    "output":{
        "item": 'electrodynamics:rodstainlesssteel',
        "count":2
    }
})
event.custom({
	"type": "electrodynamics:mineral_crusher_recipe",
	"input": {
		"item": "emendatusenigmatica:steel_ingot",
		"count": 1
	},
	"output": {
		"item": "emendatusenigmatica:steel_plate",
		"count": 1
	}
})
event.custom({
	"type": "electrodynamics:mineral_crusher_recipe",
	"input": {
		"item": "emendatusenigmatica:bronze_ingot",
		"count": 1
	},
	"output": {
		"item": "emendatusenigmatica:bronze_plate",
		"count": 1
	}
})
event.custom({
	"type": "electrodynamics:mineral_crusher_recipe",
	"input": {
		"item": "minecraft:iron_ingot",
		"count": 1
	},
	"output": {
		"item": "emendatusenigmatica:iron_plate",
		"count": 1
	}
})
event.custom({
	"type": "electrodynamics:mineral_crusher_recipe",
	"input": {
		"item": "emendatusenigmatica:aluminum_ingot",
		"count": 1
	},
	"output": {
		"item": "emendatusenigmatica:aluminum_plate",
		"count": 1
	}
})
event.custom({
	"type": "electrodynamics:mineral_crusher_recipe",
	"input": {
		"item": "emendatusenigmatica:lead_ingot",
		"count": 1
	},
	"output": {
		"item": "emendatusenigmatica:lead_plate",
		"count": 1
	}
})

event.recipes.thermal.chiller('iron_ingot', ['thermal:chiller_ingot_cast', Fluid.of('emendatusenigmatica:molten_iron', 144)])
event.recipes.thermal.chiller('iron_ingot', ['thermal:chiller_ingot_cast', Fluid.of('emendatusenigmatica:molten_iron', 144)])

event.remove({id: "electrodynamics:o2o/mineralgrinder/lithium_dust_from_implithium_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/silver_dust_from_impsilver_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/iron_dust_from_impiron_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/niter_dust_from_niter_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/vanadium_dust_from_impvanadium_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/gold_dust_from_impgold_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/lead_dust_from_implead_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/tin_dust_from_imptin_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/lithium_dust_from_lithium_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/lapis_gem_from_lapis_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/diamond_gem_from_lapis_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/redstone_gem_from_redstone_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/copper_dust_from_impcopper_dust"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/gold_dust_from_gold_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/iron_dust_from_iron_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/copper_dust_from_copper_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/salt_from_halite_ore"})
event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_vanadium_dust_from_vanadinite_ore"})
event.remove({id: "electrodynamics:o2o/mineralcrusher/steel_plate_from_steel_ingot"})
event.remove({id: "electrodynamics:o2o/mineralcrusher/iron_plate_from_iron_ingot"})
event.remove({id: "electrodynamics:o2o/mineralcrusher/aluminum_plate_from_aluminum_ingot"})
event.remove({id: "electrodynamics:o2o/mineralcrusher/lead_plate_from_lead_ingot"})
event.remove({id: "electrodynamics:o2o/mineralcrusher/bronze_plate_from_bronze_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/copper_dust_from_copper_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/chromite_oxide_from_chromium_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/iron_dust_from_iron_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/silver_dust_from_silver_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/lead_dust_from_lead_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/tin_dust_from_tin_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/silver_dust_from_silver_ore"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/steel_dust_from_steel_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/lead_dust_from_lead_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/tin_dust_from_tin_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/bronze_dust_from_bronze_ingot"})
event.remove({id: "electrodynamics:o2o/mineralgrinder/gold_dust_from_gold_ingot"})

})
