// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')



onEvent('recipes', event => {

	// ### CHAPTER 1

	event.shaped(
		Item.of('emendatusenigmatica:iron_dust'),
		[
			'   ',
			'IFI',
			'   ' 
		],
		{
			I: '#forge:ores/iron',
			F: Item.of('farmersdelight:flint_knife').ignoreNBT()
		}
	).damageIngredient("farmersdelight:flint_knife", 1)

	event.shaped(
		Item.of('kubejs:render_eye'),
		[
			'GGG',
			'GIG',
			'GGG' 
		],
		{
			G: '#forge:glass',
			I: 'minecraft:gold_ingot'
		}	
	)

	event.shapeless(Item.of('tetra:holo', '{"holo/frame":"holo/frame",honing_progress:850,"holo/scanner_0_material":"scanner/scanner",HideFlags:1,temperature:0.0d,"holo/core_material":"frame/dim","holo/attachment_0":"holo/scanner_0","holo/core":"holo/core",id:"29774490-3ed3-4b08-a40e-51f502f64969","holo/frame_material":"core/ancient"}'),
		[Item.of('tetra:holo', '{temperature:0.0d,"holo/core_material":"frame/dim","holo/frame":"holo/frame","holo/core":"holo/core","holo/frame_material":"core/ancient"}'), 'kubejs:render_eye'])
	
	event.remove({ output: 'minecraft:furnace' })
	event.shaped(
		Item.of('minecraft:furnace'),
		[
			'CHC',
			'HRH',
			'CHC' 
		],
		{
			C: '#forge:cobblestone',
			H: 'minecraft:coal',
			R: '#forge:blocks/redstone',
		}	
	)
	
	event.shaped(
		Item.of('minecraft:enchanted_book', '{temperature:0.0d}').enchant('minecraft:silk_touch', 1),
		[
			'SCS',
			'MBM',
			'SCS' 
		],
		{
			B: 'minecraft:book',
			M: 'tetra:forged_mesh',
			C: Item.of('tetra:magmatic_cell').weakNBT(),
			S: 'tetra:metal_scrap'
		}	
	)

	event.remove({ id: 'minecraft:netherite_ingot' })
	event.shaped(
		Item.of('minecraft:netherite_ingot'),
		[
			'GNG',
			'NSN',
			'GNG' 
		],
		{
			G: 'minecraft:gold_ingot',
			S: 'minecraft:netherite_scrap',
			N: 'minecraft:nether_bricks'
		}	
	)

	event.shaped(
		Item.of('kubejs:tool_handle'),
		[
			'KTS',
			'TST',
			'STK' 
		],
		{
			S: '#forge:rods/wooden',
			T: '#forge:tree_saplings',
			K: 'farmersdelight:canvas'
		}	
	)
	event.shaped(
		Item.of('kubejs:tool_handle'),
		[
			' TS',
			'TST',
			'ST ' 
		],
		{
			S: '#forge:rods/wooden',
			T: '#forge:stone'
		}	
	)

	event.remove({ output: 'minecraft:crafting_table' })
	event.shaped(
		Item.of('minecraft:crafting_table'),
		[
			'KF',
			'LL'
		],
		{
			L: '#minecraft:logs',
			K: 'farmersdelight:flint_knife',
			F: 'minecraft:flint',
		}	
	)
	event.shaped(
		Item.of('minecraft:crafting_table'),
		[
			'PP',
			'PP'
		],
		{
			P: '#forge:treated_wood'
		}	
	)

	
	const tools = [
		{id: 'wooden', material: '#minecraft:logs'},
		{id: 'stone', material: '#minecraft:stone_tool_materials'},
		{id: 'iron', material: 'minecraft:iron_ingot'},
		{id: 'golden', material: 'minecraft:gold_ingot'},
		{id: 'diamond', material: 'minecraft:diamond'}
	]
	tools.forEach(tool => {
		event.remove({ id: 'minecraft:'+tool.id+'_sword' })
		event.remove({ id: 'minecraft:'+tool.id+'_pickaxe' })
		event.remove({ id: 'minecraft:'+tool.id+'_axe' })
		event.remove({ id: 'minecraft:'+tool.id+'_shovel' })
		event.remove({ id: 'minecraft:'+tool.id+'_hoe' })
		event.shaped(
			Item.of('minecraft:'+tool.id+'_sword'),
			[
				'W',
				'W',
				'H' 
			],
			{
				W: tool.material,
				H: 'kubejs:tool_handle'
			}	
		)
		event.shaped(
			Item.of('minecraft:'+tool.id+'_pickaxe'),
			[
				'WWW',
				' S ',
				' H ' 
			],
			{
				W: tool.material,
				H: 'kubejs:tool_handle',
				S: '#forge:rods/wooden'
			}	
		)
		event.shaped(
			Item.of('minecraft:'+tool.id+'_axe'),
			[
				'WW',
				'WS',
				' H' 
			],
			{
				W: tool.material,
				H: 'kubejs:tool_handle',
				S: '#forge:rods/wooden'
			}	
		)
		event.shaped(
			Item.of('minecraft:'+tool.id+'_hoe'),
			[
				'WW',
				' S',
				' H' 
			],
			{
				W: tool.material,
				H: 'kubejs:tool_handle',
				S: '#forge:rods/wooden'
			}	
		)
		event.shaped(
			Item.of('minecraft:'+tool.id+'_shovel'),
			[
				'W',
				'S',
				'H' 
			],
			{
				W: tool.material,
				H: 'kubejs:tool_handle',
				S: '#forge:rods/wooden'
			}	
		)
	})
	const hammers = ['granite','stone','diorite','andesite','oak','spruce','birch','jungle','acacia','dark_oak']
	hammers.forEach(i => {
		event.remove({id: 'tetra:hammer/'+i})
	})
	event.shaped(
		Item.of('tetra:modular_double', '{"double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right",temperature:0.0d,id:"d461a1e6-9e9b-4459-9960-fd9c58a74fce",AS_Amulet_Holder:[I;1015759441,944458981,-1831764858,2035412769],"double/basic_hammer_right_material":"basic_hammer/oak",Damage:0,"double/basic_handle_material":"basic_handle/stick","double/basic_hammer_left_material":"basic_hammer/oak"}'),
		[
			'WWW',
			'WWW',
			' H ' 
		],
		{
			W: '#minecraft:logs',
			H: 'kubejs:tool_handle'
		}	
	)

	event.campfireCooking('minecraft:iron_ingot', 'emendatusenigmatica:iron_dust')

	event.remove({output: 'emendatusenigmatica:silicon_gem'})
	event.remove({id: 'hostilenetworks:living_matter/overworld_to_nether'})
	event.remove({id: 'hostilenetworks:living_matter/nether_to_end'})

})

onEvent('item.tags', event => {

	event.remove('forge:circuits', 'electrodynamics:circuitbasic')
	event.remove('forge:circuits', 'electrodynamics:circuitadvanced')
	event.remove('forge:circuits', 'electrodynamics:circuitelite')
	event.remove('forge:circuits', 'electrodynamics:circuitultimate')
	event.remove('forge:circuits/basic', 'electrodynamics:circuitbasic')
	event.remove('forge:circuits/advanced', 'electrodynamics:circuitadvanced')
	event.remove('forge:circuits/elite', 'electrodynamics:circuitelite')
	event.remove('forge:circuits/ultimate', 'electrodynamics:circuitultimate')
	
})