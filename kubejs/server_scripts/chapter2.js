// priority: 0

onEvent('recipes', event => {
const removeOutput = [
    'create:andesite_casing',
    'create:millstone',
    'create:basin',
    'create:propeller',
    'create:spout',
    'create:copper_casing',
    'create:rose_quartz',
    'create:fluid_valve',
    'create:electron_tube',
    'thermal:saw_blade',
    'create:mechanical_saw',
    'create:brass_hand',
    'create:deployer',
    'create:andesite_alloy',
    'create:whisk',
    'create:mechanical_mixer',
    'create:empty_blaze_burner',
    'create:mechanical_press',
    'create:crushing_wheel',
    'create:hose_pulley',
    'create:mechanical_pump',
    'create:windmill_bearing',
    'create:sail_frame',
    'create:fluid_tank',
    'farmersdelight:cooking_pot',
    'create:chromatic_compound',
    'create:item_drain',
    'create:brass_casing',
    'create:mechanical_crafter',
    'appliedenergistics2:sky_compass',
    'create:precision_mechanism',
    'create:flywheel',
    'create:furnace_engine',
    'create:blaze_cake',
    'create:powdered_obsidian'
]
removeOutput.forEach(recipe => event.remove({output: recipe}))
event.remove({id: 'immersiveengineering:crafting/alloybrick'})


event.shaped('create:andesite_casing', [
	'FAF',
	'ALA',
	'FAF'
], {
	F: 'tetra:forged_wall',
	A: 'create:andesite_alloy',
	L: 'tetra:pristine_lapis' 
})

event.shaped('create:millstone', [
	'ACA',
	'DQD',
	'ACA'
], {
	A: 'create:andesite_alloy',
	C: 'create:cogwheel',
	Q: 'create:andesite_casing',
	D: 'diamond'
})

event.shaped('create:basin', [
	'   ',
	'F F',
	'AFA'
], {
	F: 'tetra:forged_wall',
	A: 'create:andesite_alloy'
})

event.shaped('create:mechanical_press', [
	'ASA',
	'CQC',
	' W '
], {
	A: 'create:andesite_alloy',
	S: 'tetra:forged_beam',
	C: 'create:cogwheel',
	Q: 'create:andesite_casing',
	W: 'tetra:forged_wall'
})

event.shaped('create:propeller', [
	' S ',
	'SAS',
	' S '
], {
	S: 'tetra:metal_scrap',
	A: 'create:andesite_alloy'
})

event.shaped('create:spout', [
	' V ',
	'GCG',
	' K '
], {
	V: 'create:fluid_valve',
	G: '#forge:glass',
	C: 'create:copper_casing',
	K: 'dried_kelp'
})

event.shaped('create:fluid_valve', [
	' C ',
	'RPR',
	' B '
], {
	C: 'create:cogwheel',
	R: '#forge:rods/copper',
	P: 'create:fluid_pipe',
	B: '#forge:plates/brass'
})

event.shaped('create:electron_tube', [
	' G ',
	' Q ',
	' I '
], {
	G: '#forge:rods/gold',
	Q: 'create:polished_rose_quartz',
	I: '#forge:plates/iron'
})

event.shaped('create:mechanical_saw', [
	' S ',
	'CQC',
	' W '
], {
	S: 'thermal:saw_blade',
	C: 'create:cogwheel',
	Q: 'create:andesite_casing',
	W: 'create:shaft'
})

event.shaped('thermal:saw_blade', [
	'FIF',
	'IAI',
	'FIF'
], {
	F: 'kubejs:forged_shard',
	I: '#forge:plates/iron',
	A: 'create:andesite_alloy'
})

event.shaped('create:brass_hand', [
	' I ',
	'BPB',
	'BBB'
], {
	I: '#forge:rods/iron',
	B: '#forge:plates/brass',
	P: '#forge:rods/brass'
})

event.shaped('create:deployer', [
	' E ',
	'ACA',
	' H '
], {
	E: 'create:electron_tube',
	A: 'create:andesite_alloy',
	C: 'create:andesite_casing',
	H: 'create:brass_hand'
})

event.shaped('4x create:andesite_alloy', [
	' Z ',
	'AGA',
	' Z '
], {
	Z: '#forge:ingots/zinc',
	A: 'andesite',
	G: 'tetra:geode'
})

event.shaped('create:whisk', [
	' A ',
	'SAS',
	'SIS',
], {
	A: 'create:andesite_alloy',
	S: 'tetra:metal_scrap',
	I: '#forge:plates/iron'
})

event.shaped('create:mechanical_mixer', [
	'AFA',
	'CQC',
	' W '
], {
	A: 'create:andesite_alloy',
	F: 'tetra:forged_wall',
	C: 'create:cogwheel',
	Q: 'create:andesite_casing',
	W: 'create:whisk'
})

event.shaped('create:empty_blaze_burner', [
	'   ',
	'BBB',
	'AIA',
], {
	B: 'iron_bars',
	A: 'create:andesite_alloy',
	I: 'tetra:vent_plate'
})

event.shaped('create:brass_casing', [
	'PCP',
	'RQR',
	'PCP',
], {
	P: '#forge:plates/brass',
	C: 'create:copper_casing',
	R: '#forge:rods/brass',
	Q: 'tetra:planar_stabilizer'
})

event.shaped('create:mechanical_pump', [
	' W ',
	'PCP',
	' Q '
], {
	W: 'create:cogwheel',
	P: 'create:fluid_pipe',
	C: 'create:copper_casing',
	Q: '#forge:plates/copper'
})

event.shaped('create:hose_pulley', [
	'PWP',
	'SCV',
	'RRR'
], {
	P: '#forge:plates/copper',
	W: 'create:cogwheel',
	S: 'create:shaft',
	C: 'create:copper_casing',
	V: 'create:fluid_valve',
	R: 'farmersdelight:rope'
})

event.shaped('create:windmill_bearing', [
	'RSR',
	'BAB',
	'LIL'
], {
	R: '#forge:rods/brass',
	S: 'create:shaft',
	B: 'tetra:forged_bolt',
	L: 'create:andesite_alloy',
	I: 'iron_block',
	A: 'create:andesite_casing'
})

event.shaped('4x create:sail_frame', [
	'ASA',
	'SRS',
	'ASA'
], {
	A: 'create:andesite_alloy',
	S: 'stick',
	R: 'farmersdelight:rope'
})

event.shaped('2x create:fluid_tank', [
	' P ',
	'GCG',
	' P '
], {
	P: '#forge:plates/copper',
	G: '#forge:glass',
	C: 'create:copper_casing'
})

event.shaped('create:item_drain', [
	'PFP',
	'PCP',
	'PVP'
], {
	P: '#forge:plates/copper',
	C: 'create:copper_casing',
	F: 'tetra:forged_mesh',
	V: 'create:fluid_valve'
})

event.shaped('farmersdelight:cooking_pot', [
	'R R',
	'PBP',
	'PPP'
], {
	R: '#forge:rods/iron',
	P: '#forge:plates/iron',
	B: 'bucket'
})

event.shaped('create:mechanical_crafter', [
	'BFB',
	'CQC',
	'PEP'
], {
	B: 'tetra:forged_bolt',
	F: 'tetra:forged_mesh',
	C: 'create:cogwheel',
	Q: 'create:brass_casing',
	P: '#forge:plates/brass',
	E: 'create:electron_tube'
})

// other recipes
event.recipes.createMilling('3x kubejs:impure_forged_shard', 'tetra:forged_wall')
event.recipes.createCrushing('4x kubejs:impure_forged_shard', 'tetra:forged_wall')
event.recipes.createMilling(Item.of('tetra:metal_scrap').withChance(0.25), 'kubejs:forged_shard')
event.recipes.createCrushing(Item.of('tetra:metal_scrap').withChance(0.5), 'kubejs:forged_shard')
event.recipes.createCrushing('4x emendatusenigmatica:obsidian_dust', 'minecraft:obsidian')
event.recipes.createSplashing([Item.of('kubejs:forged_shard').withChance(0.9), Item.of('emendatusenigmatica:obsidian_dust').withChance(0.1)], 'kubejs:impure_forged_shard')
event.recipes.createCompacting('create:copper_casing', ['create:andesite_casing', Fluid.of('emendatusenigmatica:molten_copper', 576)]).heated()
event.recipes.createMixing(Fluid.of('emendatusenigmatica:molten_copper', 144), '#forge:ingots/copper').heated()
event.recipes.createMixing('create:chromatic_compound', ['4x #forge:dusts/quartz', '4x #forge:dusts/obsidian', 'create:polished_rose_quartz']).superheated()
event.recipes.createMixing('4x create:andesite_alloy', ['andesite', '#forge:ingots/zinc']).heated()
event.recipes.createEmptying([Fluid.of('kubejs:magma_gelatin', 1000), 'minecraft:bucket'], 'nethers_delight:magma_gelatin')

event.recipes.createSequencedAssembly('tetra:forged_wall', 'kubejs:forged_shard', [
	event.recipes.createDeploying('kubejs:forged_wall_processing', ['kubejs:forged_wall_processing', 'minecraft:basalt']),
	event.recipes.createFilling('kubejs:forged_wall_processing', ['kubejs:forged_wall_processing', Fluid.of('minecraft:lava', 100)]),
	event.recipes.createFilling('kubejs:forged_wall_processing', ['kubejs:forged_wall_processing', Fluid.of('minecraft:water', 100)]),
	event.recipes.createPressing('kubejs:forged_wall_processing', 'kubejs:forged_wall_processing')
]).transitionalItem('kubejs:forged_wall_processing').loops(1)

event.recipes.createMixing(Fluid.of('emendatusenigmatica:molten_redstone', 100), 'redstone').heated()
event.recipes.createFilling('create:rose_quartz', ['quartz', Fluid.of('emendatusenigmatica:molten_redstone', 800)])
event.recipes.createMilling([Item.of('tetra:pristine_lapis').withChance(0.3), Item.of('tetra:pristine_emerald').withChance(0.2), Item.of('tetra:pristine_diamond').withChance(0.1)], 'tetra:geode')
event.recipes.createCrushing([Item.of('tetra:pristine_lapis').withChance(0.4), Item.of('tetra:pristine_emerald').withChance(0.3), Item.of('tetra:pristine_diamond').withChance(0.2)], 'tetra:geode')
event.recipes.createMixing(Fluid.of('emendatusenigmatica:molten_iron', 144), 'iron_ingot').heated()
event.recipes.createFilling('create:blaze_cake', ['create:blaze_cake_base', Fluid.of('kubejs:magma_gelatin', 125)])
event.recipes.createMixing(Fluid.of('kubejs:pristine_solution', 144), [Fluid.of('minecraft:water', 500), Fluid.of('emendatusenigmatica:molten_redstone', 100)]).heated()

event.recipes.createSequencedAssembly('tetra:forged_beam', 'tetra:forged_wall', [
	event.recipes.createCutting('kubejs:structure_frame_processing', 'kubejs:structure_frame_processing'),
	event.recipes.createDeploying('kubejs:structure_frame_processing', ['kubejs:structure_frame_processing', '#forge:rods/iron']),
	event.recipes.createFilling('kubejs:structure_frame_processing', ['kubejs:structure_frame_processing', Fluid.of('minecraft:lava', 125)])
]).transitionalItem('kubejs:structure_frame_processing').loops(2)

event.recipes.createSequencedAssembly('tetra:forged_bolt', 'tetra:forged_beam', [
	event.recipes.createCutting('kubejs:bolt_processing', 'kubejs:bolt_processing'),
	event.recipes.createFilling('kubejs:bolt_processing', ['kubejs:bolt_processing', Fluid.of('emendatusenigmatica:molten_iron', 72)]),
	event.recipes.createPressing('kubejs:bolt_processing', 'kubejs:bolt_processing')
]).transitionalItem('kubejs:bolt_processing').loops(1)

event.recipes.createSequencedAssembly('tetra:forged_mesh', '#forge:plates/iron', [
	event.recipes.createCutting('kubejs:flex_mesh_processing', 'kubejs:flex_mesh_processing'),
	event.recipes.createDeploying('kubejs:flex_mesh_processing', ['kubejs:flex_mesh_processing', 'tetra:metal_scrap']),
	event.recipes.createDeploying('kubejs:flex_mesh_processing', ['kubejs:flex_mesh_processing', 'tetra:metal_scrap']),
	event.recipes.createFilling('kubejs:flex_mesh_processing', ['kubejs:flex_mesh_processing', Fluid.of('emendatusenigmatica:molten_iron', 72)]),
	event.recipes.createPressing('kubejs:flex_mesh_processing', 'kubejs:flex_mesh_processing')
]).transitionalItem('kubejs:flex_mesh_processing').loops(2)

event.recipes.createSequencedAssembly('tetra:vent_plate', 'tetra:forged_mesh', [
	event.recipes.createDeploying('kubejs:insulated_plate_processing', ['kubejs:insulated_plate_processing', '#forge:dusts/obsidian']),
	event.recipes.createFilling('kubejs:insulated_plate_processing', ['kubejs:insulated_plate_processing', Fluid.of('minecraft:lava', 500)]),
	event.recipes.createDeploying('kubejs:insulated_plate_processing', ['kubejs:insulated_plate_processing', 'tetra:metal_scrap'])
]).transitionalItem('kubejs:insulated_plate_processing').loops(4)

event.recipes.createSequencedAssembly('tetra:planar_stabilizer', 'kubejs:render_eye', [
	event.recipes.createDeploying('kubejs:planar_stabilizer_processing', ['kubejs:planar_stabilizer_processing', 'tetra:vent_plate']),
	event.recipes.createDeploying('kubejs:planar_stabilizer_processing', ['kubejs:planar_stabilizer_processing', 'tetra:forged_bolt']),
	event.recipes.createDeploying('kubejs:planar_stabilizer_processing', ['kubejs:planar_stabilizer_processing', 'tetra:forged_bolt']),
	event.recipes.createDeploying('kubejs:planar_stabilizer_processing', ['kubejs:planar_stabilizer_processing', 'tetra:forged_mesh']),
	event.recipes.createPressing('kubejs:planar_stabilizer_processing', 'kubejs:planar_stabilizer_processing')
]).transitionalItem('kubejs:planar_stabilizer_processing').loops(2)

event.recipes.createSequencedAssembly('create:crushing_wheel', 'iron_block', [
	event.recipes.createDeploying('kubejs:crushing_wheel_processing', ['kubejs:crushing_wheel_processing', 'create:andesite_alloy']),
	event.recipes.createDeploying('kubejs:crushing_wheel_processing', ['kubejs:crushing_wheel_processing', 'create:andesite_alloy']),
	event.recipes.createDeploying('kubejs:crushing_wheel_processing', ['kubejs:crushing_wheel_processing', 'create:andesite_alloy']),
	event.recipes.createDeploying('kubejs:crushing_wheel_processing', ['kubejs:crushing_wheel_processing', 'create:andesite_alloy']),
	event.recipes.createDeploying('kubejs:crushing_wheel_processing', ['kubejs:crushing_wheel_processing', 'tetra:forged_beam']),
]).transitionalItem('kubejs:crushing_wheel_processing').loops(8)

event.recipes.createSequencedAssembly('create:precision_mechanism', '#forge:gears/gold', [
	event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:plates/gold']),
	event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'immersiveengineering:wire_electrum']),
	event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tetra:forged_bolt']),
	event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('emendatusenigmatica:molten_copper', 72)])
]).transitionalItem('create:incomplete_precision_mechanism').loops(2)

event.recipes.createSequencedAssembly('tetra:combustion_chamber', 'tetra:planar_stabilizer', [
	event.recipes.createDeploying('kubejs:incomplete_combustion_chamber', ['kubejs:incomplete_combustion_chamber', '#forge:plates/brass']),
	event.recipes.createDeploying('kubejs:incomplete_combustion_chamber', ['kubejs:incomplete_combustion_chamber', 'tetra:vent_plate']),
	event.recipes.createDeploying('kubejs:incomplete_combustion_chamber', ['kubejs:incomplete_combustion_chamber', 'tetra:vent_plate']),
	event.recipes.createPressing('kubejs:incomplete_combustion_chamber', 'kubejs:incomplete_combustion_chamber')
]).transitionalItem('kubejs:incomplete_combustion_chamber').loops(3)

event.recipes.createSequencedAssembly('tetra:geode', 'minecraft:obsidian', [
	event.recipes.createDeploying('kubejs:geode_processing', ['kubejs:geode_processing', '#forge:stone']),
	event.recipes.createFilling('kubejs:geode_processing', ['kubejs:geode_processing', Fluid.of('kubejs:pristine_solution', 12)])
]).transitionalItem('kubejs:geode_processing').loops(3)

event.recipes.createMechanicalCrafting('2x immersiveengineering:alloybrick', [
	'SSSSS',
	'SACAS',
	'SCOCS',
	'SACAS',
	'SSSSS',
], {
	S: '#forge:sandstone',
	A: 'create:andesite_alloy',
	C: 'create:chromatic_compound',
	O: 'obsidian'
})

event.recipes.createMechanicalCrafting('appliedenergistics2:sky_compass', [
	'IQI',
	'ICI',
	'IBI'
], {
	I: '#forge:plates/iron',
	C: 'compass',
	Q: '#forge:gems/certus_quartz',
	B: 'tetra:forged_bolt'
})

event.recipes.createMechanicalCrafting('create:furnace_engine', [
	'PCP',
	'CQC',
	'PCP'
], {
	P: '#forge:plates/brass',
	C: 'tetra:combustion_chamber',
	Q: 'create:brass_casing'
})

event.recipes.createMechanicalCrafting('create:flywheel', [
	'  P  ',
	' BSB ',
	'PSQSP',
	' BSB ',
	'  P  '
], {
	P: '#forge:plates/brass',
	B: '#forge:storage_blocks/brass',
	S: 'tetra:forged_beam',
	Q: 'create:brass_casing'
})

})