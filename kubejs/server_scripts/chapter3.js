// priority: 0

onEvent('recipes', event => {

event.remove({id: 'immersiveengineering:crafting/sheetmetal_steel'})
event.remove({id: 'immersiveengineering:crafting/sheetmetal_iron'})
event.remove({id: 'immersiveengineering:crafting/sheetmetal_copper'})
event.remove({id: 'immersiveengineering:crafting/sheetmetal_aluminum'})
event.remove({output: 'appliedenergistics2:smooth_sky_stone_block'})
event.remove({id: 'electrodynamics:coalcoke_smelting'})
event.remove({id: 'electrodynamics:coalcoke_blasting'})
event.remove({id: 'immersiveengineering:cokeoven/coke'})
event.remove({id: 'immersiveengineering:crafting/cokebrick'})
event.remove({id: 'immersiveengineering:crafting/blastbrick'})
event.remove({output: 'thermal:chiller_ingot_cast'})
event.remove({id: 'electrodynamics:ingotsteel_ingot_smelting'})
event.remove({id: 'immersiveengineering:blastfurnace/steel'})
event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})
event.remove({output: 'immersiveengineering:thermoelectric_generator'})
event.remove({output: 'immersiveengineering:workbench'})
event.remove({output: 'immersiveengineering:component_iron'})
event.remove({output: 'immersiveengineering:component_steel'})
event.remove({output: 'immersiveengineering:light_engineering'})
event.remove({output: 'immersiveengineering:heavy_engineering'})
event.remove({output: 'immersiveengineering:rs_engineering'})
event.remove({output: 'minecraft:piston'})
event.remove({id: 'immersiveengineering:crafting/steel_scaffolding_standard'})
event.remove({id: 'immersiveengineering:crafting/alu_scaffolding_standard'})
event.remove({output: 'create:piston_extension_pole'})
event.remove({output: 'immersiveengineering:dynamo'})
event.remove({output: 'immersiveengineering:waterwheel_segment'})
event.remove({output: 'immersiveengineering:windmill_blade'})
event.remove({output: 'immersiveengineering:capacitor_lv'})
event.remove({output: 'immersiveengineering:capacitor_mv'})
event.remove({output: 'immersiveengineering:capacitor_hv'})
event.remove({output: 'immersiveengineering:steel_fence'})
event.remove({output: 'immersiveengineering:fluid_pipe'})
event.remove({output: 'immersiveengineering:sample_drill'})
event.remove({id: 'immersiveengineering:crafting/concrete'})
event.remove({id: 'immersiveengineering:crafting/concrete2'})
event.remove({id: 'immersiveengineering:crafting/blastbrick_reinforced'})
event.remove({output: 'naturesaura:gold_fiber'})
event.remove({output: 'immersiveengineering:cloche'})
event.remove({output: 'immersiveengineering:generator'})
event.remove({output: 'immersiveengineering:wirecoil_redstone'})
event.remove({id: 'immersiveengineering:arcfurnace/steel'})
event.remove({id: 'immersivepetroleum:arcfurnace/steel'})

var wireTypes = ['copper', 'electrum', 'aluminum', 'steel', 'lead']
var length = wireTypes.length
for (var i = 0; i < length; i++){
	event.remove({id: 'immersiveengineering:crafting/wire_' + wireTypes[i]})
}

// chapter 3

event.recipes.createMechanicalCrafting('8x immersiveengineering:sheetmetal_steel', [
	'PIP',
	'I I',
	'PIP'
], {
	I: '#forge:ingots/steel',
	P: '#forge:plates/steel',
})

event.recipes.createMechanicalCrafting('8x immersiveengineering:sheetmetal_iron', [
	'PIP',
	'I I',
	'PIP'
], {
	I: '#forge:ingots/iron',
	P: '#forge:plates/iron',
})

event.recipes.createMechanicalCrafting('8x immersiveengineering:sheetmetal_copper', [
	'PIP',
	'I I',
	'PIP'
], {
	I: '#forge:ingots/copper',
	P: '#forge:plates/copper',
})

event.shaped('thermal:chiller_ingot_cast', [
	' B ',
	'BNB',
	' B '
], {
	N: 'minecraft:netherite_ingot',
	B: '#forge:plates/bronze'
})

event.shaped('immersiveengineering:thermoelectric_generator', [
	'IGI',
	'PCP',
	'PPP'
], {
	I: 'emendatusenigmatica:steel_ingot',
	G: 'emendatusenigmatica:steel_gear',
	C: 'immersiveengineering:coil_mv',
	P: 'emendatusenigmatica:constantan_plate'
})

event.shaped('immersiveengineering:workbench', [
	'   ',
	'TII',
	'C C'
], {
	C: 'immersiveengineering:craftingtable',
	I: 'emendatusenigmatica:steel_ingot',
	T: '#forge:treated_wood'
})

event.shaped('4x immersiveengineering:light_engineering', [
	'SCS',
	'CGC',
	'SCS'
], {
	C: 'immersiveengineering:component_iron',
	S: 'immersiveengineering:sheetmetal_iron',
	G: 'emendatusenigmatica:bronze_gear'
})

event.shaped('4x immersiveengineering:heavy_engineering', [
	'SCS',
	'CBC',
	'SCS'
], {
	C: 'immersiveengineering:component_steel',
	S: 'immersiveengineering:sheetmetal_steel',
	B: 'create:brass_casing'
})

event.shaped('2x immersiveengineering:rs_engineering', [
	'SRS',
	'COC',
	'SRS'
], {
	C: 'immersiveengineering:component_iron',
	S: 'immersiveengineering:sheetmetal_copper',
	R: 'minecraft:redstone_block',
	O: 'create:copper_casing'
})

event.shaped('minecraft:piston', [
	'SSS',
	'CEC',
	'CRC'
], {
	C: '#forge:cobblestone',
	S: '#forge:treated_wood_slab',
	R: 'minecraft:repeater',
	E: 'create:piston_extension_pole'
})

event.shaped('6x immersiveengineering:steel_scaffolding_standard', [
	'R R',
	' S ',
	'R R'
], {
	R: '#forge:rods/steel',
	S: 'immersiveengineering:sheetmetal_steel'
})
event.shaped('6x immersiveengineering:alu_scaffolding_standard', [
	'R R',
	' S ',
	'R R'
], {
	R: '#forge:rods/aluminum',
	S: 'immersiveengineering:sheetmetal_aluminum'
})

event.shaped('create:piston_extension_pole', [
	'P',
	'R',
	'P'
], {
	R: 'emendatusenigmatica:iron_rod',
	P: '#minecraft:planks'
})

event.shaped('immersiveengineering:dynamo', [
	'PBP',
	'SCc',
	'PBP'
], {
	P: 'emendatusenigmatica:steel_plate',
	B: 'tetra:forged_bolt',
	S: 'emendatusenigmatica:steel_rod',
	C: 'immersiveengineering:coil_lv',
	c: 'create:brass_casing'
})

event.shaped('immersiveengineering:waterwheel_segment', [
	' S ',
	'SPS',
	'PBP'
], {
	S: 'immersiveengineering:stick_treated',
	P: '#forge:treated_wood',
	B: 'tetra:forged_bolt'
})

event.shaped('immersiveengineering:windmill_blade', [
	'PPB',
	'SSP',
	'SS '
], {
	S: 'immersiveengineering:stick_treated',
	P: '#forge:treated_wood',
	B: 'tetra:forged_bolt'
})

event.shaped('immersiveengineering:capacitor_lv', [
	'SSS',
	'WLW',
	'TMT'
], {
	S: 'emendatusenigmatica:steel_plate',
	W: 'immersiveengineering:wire_copper',
	L: 'emendatusenigmatica:lead_plate',
	T: '#forge:treated_wood',
	M: 'tetra:forged_mesh'
})

event.shaped('immersiveengineering:capacitor_mv', [
	'SSS',
	'WLW',
	'TMT'
], {
	S: 'emendatusenigmatica:electrum_plate',
	W: 'immersiveengineering:wire_lead',
	L: 'immersiveengineering:capacitor_lv',
	T: 'emendatusenigmatica:steel_plate',
	M: 'tetra:vent_plate'
})

event.shaped('immersiveengineering:capacitor_hv', [
	'SSS',
	'WLW',
	'TMT'
], {
	S: 'emendatusenigmatica:silver_plate',
	W: 'immersiveengineering:wire_electrum',
	L: 'immersiveengineering:capacitor_mv',
	T: 'tetra:vent_plate',
	M: 'emendatusenigmatica:steel_block'
})

event.shaped('6x immersiveengineering:steel_fence', [
	'B B',
	'PRP',
	'PRP'
], {
	B: 'tetra:forged_bolt',
	P: 'emendatusenigmatica:steel_plate',
	R: 'emendatusenigmatica:steel_rod'
})

event.shaped('8x immersiveengineering:fluid_pipe', [
	'PMP',
	'SSS',
	'PMP'
], {
	P: 'emendatusenigmatica:iron_plate',
	M: 'create:fluid_pipe',
	S: 'kubejs:steel_sand'
})

event.shaped('immersiveengineering:sample_drill', [
	'SFS',
	'MPM',
	'LPL'
], {
	S: 'immersiveengineering:steel_scaffolding_standard',
	F: 'immersiveengineering:steel_fence',
	M: 'create:precision_mechanism',
	L: 'immersiveengineering:light_engineering',
	P: 'immersiveengineering:fluid_pipe'
})

event.shaped('immersiveengineering:cloche', [
	'GVG',
	'GMG',
	'IPI'
], {
	G: '#forge:glass',
	V: 'immersiveengineering:electron_tube',
	M: 'tetra:forged_mesh',
	I: 'kubejs:galvanized_steel_ingot',
	P: 'create:precision_mechanism'
})

event.shaped('immersiveengineering:generator', [
	'PWP',
	'RCR',
	'PWP'
], {
	P: 'emendatusenigmatica:steel_plate',
	W: 'immersiveengineering:wire_electrum',
	R: 'emendatusenigmatica:steel_rod',
	C: 'immersiveengineering:coil_lv'
})

event.shaped('immersiveengineering:wirecoil_redstone', [
	'LCL',
	'RSR',
	'LCL'
], {
	S: 'immersiveengineering:stick_treated',
	R: 'minecraft:redstone',
	L: 'immersiveengineering:wire_lead',
	C: 'immersiveengineering:wire_copper'
})

event.shapeless('tetra:forged_wall', "tetra:forged_pillar")
event.shapeless('tetra:forged_wall', "tetra:forged_platform")

event.recipes.createCompacting('appliedenergistics2:smooth_sky_stone_block', 'appliedenergistics2:sky_stone_block').superheated()
event.recipes.immersiveengineering.coke_oven('emendatusenigmatica:coke_gem', 'minecraft:coal', 1000, 10)
event.recipes.immersiveengineering.alloy('immersiveengineering:cokebrick', 'appliedenergistics2:sky_stone_brick', 'tetra:metal_scrap')
event.recipes.immersiveengineering.alloy('immersiveengineering:blastbrick', 'minecraft:nether_bricks', 'create:cinder_flour')
event.recipes.immersiveengineering.blast_furnace('emendatusenigmatica:steel_ingot', 'emendatusenigmatica:cast_iron_ingot', 'thermal:slag', 14)
event.recipes.immersiveengineering.blast_furnace('emendatusenigmatica:steel_block', 'emendatusenigmatica:cast_iron_block', '9x thermal:slag', 162)
event.recipes.createMilling('kubejs:limestone_dust', '#chisel:limestone')
event.recipes.createMilling('kubejs:limestone_dust', 'create:limestone')
event.recipes.createCrushing([Item.of('kubejs:limestone_dust').withChance(0.3), 'kubejs:limestone_dust'], '#chisel:limestone')
event.recipes.createCrushing([Item.of('kubejs:limestone_dust').withChance(0.3), 'kubejs:limestone_dust'], 'create:limestone')
event.recipes.createCompacting('emendatusenigmatica:cast_iron_ingot', Fluid.of('emendatusenigmatica:molten_cast_iron', 144))
event.recipes.createMixing(Fluid.of('emendatusenigmatica:molten_cast_iron', 576), ['kubejs:limestone_dust', Fluid.of('emendatusenigmatica:molten_iron', 576)]).superheated()
event.recipes.createCutting('immersiveengineering:wire_copper', 'emendatusenigmatica:copper_plate')
event.recipes.immersiveengineering.crusher('kubejs:steel_sand', 'emendatusenigmatica:steel_dust')
event.recipes.createMixing('2x kubejs:galvanized_steel_ingot', ['2x kubejs:steel_sand', 'emendatusenigmatica:zinc_dust', Fluid.of('immersiveengineering:biodiesel', 500)])
event.recipes.createCompacting('immersiveengineering:concrete', Fluid.of('immersiveengineering:concrete', 250))
event.recipes.createCompacting('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', 'kubejs:galvanized_steel_ingot']).superheated()
event.recipes.immersiveengineering.arc_furnace('emendatusenigmatica:steel_ingot', 'minecraft:iron_ingot', 'emendatusenigmatica:coke_dust', 'thermal:slag', 20, 512)
event.recipes.immersiveengineering.arc_furnace('4x emendatusenigmatica:steel_ingot', '4x minecraft:iron_ingot', 'immersivepetroleum:petcoke_dust', 'thermal:slag', 80, 512)
event.custom({
		"type": "immersiveengineering:mixer",
		"inputs": [
			{
				"item": "emendatusenigmatica:gold_dust",
				"count": 1
			},
			{
				"item": "immersivepetroleum:petcoke_dust",
				"count": 1
			}
		],
		"result": {
			"fluid":"kubejs:volatile_golden_mixture",
			"amount":500
		},
		"fluid": {
			"tag":"kubejs:diesel",
			"amount":500
		},
		"energy": 3200
	})
event.recipes.createFilling('naturesaura:gold_fiber', ['immersiveengineering:hemp_fiber', Fluid.of('kubejs:volatile_golden_mixture', 250)])
event.custom({
	"type": "immersivepetroleum:hydrotreater",
	"time": 1,
	"energy": 512,
	"result": {
	  "fluid": "immersivepetroleum:diesel",
	  "amount": 7
	},
	"input": {
	  "tag": "forge:diesel_sulfur",
	  "amount": 7
	},
	"secondary_input": {
	  "tag": "minecraft:water",
	  "amount": 7
	},
	"secondary_result": {
	  "item": "emendatusenigmatica:sulfur_dust",
	  "chance": "0.02"
	}
})
event.custom({
	"type": "immersivepetroleum:distillation",
	"byproducts": [
	  {
		"item": "emendatusenigmatica:bitumen_gem",
		"chance": "0.07"
	  }
	],
	"results": [
	  {
		"fluid": "immersivepetroleum:lubricant",
		"amount": 9
	  },
	  {
		"fluid": "immersivepetroleum:diesel_sulfur",
		"amount": 14
	  },
	  {
		"fluid": "immersivepetroleum:gasoline",
		"amount": 39
	  }
	],
	"input": {
	  "tag": "forge:crude_oil",
	  "amount": 75
	},
	"time": 1,
	"energy": 2048
})
event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":2,"base_ingredient":{"tag":"forge:plates/steel"}},{"item":"tetra:forged_bolt"},{"tag":"forge:rods/bronze"}],"category":"components","result":{"item":"immersiveengineering:component_steel"}})
event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":2,"base_ingredient":{"tag":"forge:plates/iron"}},{"item":"tetra:forged_bolt"},{"tag":"forge:rods/bronze"}],"category":"components","result":{"item":"immersiveengineering:component_iron"}})


})