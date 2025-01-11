//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MATERIAL UNIFICATION SCRIPT
//BY NEEPNOOP & ANOKKA / 2021
//
    //TEMPLATE
	//event.replaceInput({}, 'MOD:ITEM', 'emendatusenigmatica:ITEM')
	//                            ^the item to replace   ^the replacement
	// Favorise 'Emendatus Enigmatica' (emendatusenigmatica)
	//Else: Thermal series (thermal). Worst case just trash your computer.
	//REMEMBER TO CONFIGURE ALL ITEMS
	
events.listen('recipes', (event) => {

//
//
//-----VANILLA-----
//
//

//COAL
	//Coal dust
	event.replaceInput({}, 'silents_mechanisms:coal_dust', 'emendatusenigmatica:coal_dust')
	event.replaceInput({}, 'mekanism:dust_coal', 'emendatusenigmatica:coal_dust')
	event.replaceInput({}, 'terraqueous:coal_dust', 'emendatusenigmatica:coal_dust')
	event.replaceInput({}, '#forge:dusts/coal', 'emendatusenigmatica:coal_dust')
//
//IRON
    //Iron dust
    event.replaceInput({}, 'immersiveengineering:dust_iron', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'silents_mechanisms:iron_dust', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'mekanism:dust_iron', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'pedestals:dustiron', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'mysticalworld:iron_dust', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'thermal:iron_dust', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'occultism:iron_dust', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'terraqueous:iron_dust', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, 'appliedenergistics2:iron_dust', 'emendatusenigmatica:iron_dust')
	event.replaceInput({}, '#forge:dusts/iron', 'emendatusenigmatica:iron_dust')
	//Iron gear
	event.replaceInput({}, 'thermal:iron_gear', 'emendatusenigmatica:iron_gear')
	event.replaceInput({}, 'titanium:iron_gear', 'emendatusenigmatica:iron_gear')
	event.replaceInput({}, '#forge:gears/iron', 'emendatusenigmatica:iron_gear')
	//Iron plate
	event.replaceInput({}, 'immersiveengineering:plate_iron', 'emendatusenigmatica:iron_plate')
	event.replaceInput({}, 'thermal:iron_plate', 'emendatusenigmatica:iron_plate')
	event.replaceInput({}, 'create:iron_sheet', 'emendatusenigmatica:iron_plate')
	event.replaceInput({}, '#forge:plates/iron', 'emendatusenigmatica:iron_plate')
	//Iron rod
	event.replaceInput({}, 'silentgear:iron_rod', 'emendatusenigmatica:iron_rod')
	event.replaceInput({}, 'immersiveengineering:stick_iron', 'emendatusenigmatica:iron_rod')
	event.replaceInput({}, 'buildersaddition:iron_rod', 'emendatusenigmatica:iron_rod')
	event.replaceInput({}, 'createaddition:iron_rod', 'emendatusenigmatica:iron_rod')
	event.replaceInput({}, '#forge:rods/iron', 'emendatusenigmatica:iron_rod')
//
//GOLD
	//Gold dust
	event.replaceInput({}, 'immersiveengineering:dust_gold', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'silents_mechanisms:gold_dust', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'mekanism:dust_gold', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'pedestals:dustgold', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'mysticalworld:dust_gold', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'thermal:gold_dust', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'occultism:gold_dust', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'terraqueous:gold_dust', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, 'appliedenergistics2:gold_dust', 'emendatusenigmatica:gold_dust')
	event.replaceInput({}, '#forge:dusts/gold', 'emendatusenigmatica:gold_dust')
	//Gold gear
	event.replaceInput({}, 'thermal:gold_gear', 'emendatusenigmatica:gold_gear')
	event.replaceInput({}, 'titanium:gold_gear', 'emendatusenigmatica:gold_gear')
	event.replaceInput({}, '#forge:gears/gold', 'emendatusenigmatica:gold_gear')
	//Gold plate
	event.replaceInput({}, 'thermal:gold_plate', 'emendatusenigmatica:gold_plate')
	event.replaceInput({}, 'immersiveengineering:plate_gold', 'emendatusenigmatica:gold_plate')
	event.replaceInput({}, '#forge:plates/gold', 'emendatusenigmatica:gold_plate')
	//Gold rod
	event.replaceInput({}, 'immersiveposts:stick_gold', 'emendatusenigmatica:gold_rod')
	event.replaceInput({}, 'createaddition:gold_rod', 'emendatusenigmatica:gold_rod')
	event.replaceInput({}, '#forge:rods/gold', 'emendatusenigmatica:gold_rod')
//
//DIAMOND
    //Diamond dust
    event.replaceInput({}, 'createaddition:diamond_grit', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, 'mekanism:dust_diamond', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, 'thermal:diamond_dust', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, 'terraqueous:diamond_dust', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, '#forge:dusts/diamond', 'emendatusenigmatica:diamond_dust')
	//Diamond gear
	event.replaceInput({}, 'thermal:diamond_gear', 'emendatusenigmatica:diamond_gear')
	event.replaceInput({}, 'titanium:diamond_gear', 'emendatusenigmatica:diamond_gear')
	event.replaceInput({}, '#forge:gears/diamond', 'emendatusenigmatica:diamond_gear')
//
//EMERALD
	//Emerald dust
	event.replaceInput({}, 'mekanism:dust_emerald', 'emendatusenigmatica:emerald_dust')
	event.replaceInput({}, 'thermal:emerald_dust', 'emendatusenigmatica:emerald_dust')
	event.replaceInput({}, 'terraqueous:emerald_dust', 'emendatusenigmatica:emerald_dust')
	event.replaceInput({}, '#forge:dusts/emerald', 'emendatusenigmatica:emerald_dust')
	//Emerald gear
	event.replaceInput({}, 'thermal:emerald_gear', 'emendatusenigmatica:emerald_gear')
	event.replaceInput({}, '#forge:gears/emerald', 'emendatusenigmatica:emerald_gear')
//
//LAPIS LAZULI
	//Lapis dust
	event.replaceInput({}, 'thermal:lapis_dust', 'emendatusenigmatica:lapis_dust')
	event.replaceInput({}, 'mekanism:dust_lapis_lazuli', 'emendatusenigmatica:lapis_dust')
	event.replaceInput({}, '#forge:dusts/lapis', 'emendatusenigmatica:lapis_dust')
	//Lapis gear
	event.replaceInput({}, 'thermal:lapis_lazuli_gear', 'emendatusenigmatica:lapis_gear')
	event.replaceInput({}, '#forge:gears/lapis', 'emendatusenigmatica:lapis_gear')
	//Lapis plate
	event.replaceInput({}, 'create:lapis_sheet', 'emendatusenigmatica:lapis_plate')
	event.replaceInput({}, '#forge:plates/lapis', 'emendatusenigmatica:lapis_plate')
//
//NETHER QUARTZ
	//Nether quartz dust
	event.replaceInput({}, 'mekanism:dust_quartz', 'emendatusenigmatica:quartz_dust')
	event.replaceInput({}, 'thermal:quartz_dust', 'emendatusenigmatica:quartz_dust')
	event.replaceInput({}, 'appliedenergistics2:nether_quartz_dust', 'emendatusenigmatica:quartz_dust')
	event.replaceInput({}, '#forge:dusts/quartz', 'emendatusenigmatica:quartz_dust')
	//Nether quartz gear
	event.replaceInput({}, 'thermal:quartz_gear', 'emendatusenigmatica:quartz_gear')
	event.replaceInput({}, '#forge:gears/quartz', 'emendatusenigmatica:quartz_gear')
//
//
//-----MODDED METALS-----
//
// man have i not been excited to do these

//COPPER why the fuck do every mod add copper?
	//Copper ingot
	event.replaceInput({}, 'silents_mechanisms:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'tmechworks:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'mekanism:ingot_copper', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'mysticalworld:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'thermal:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_copper', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'occultism:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'create:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'tconstruct:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'iceandfire:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'routerreborn:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'geolosys:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, 'projectred-core:copper_ingot', 'emendatusenigmatica:copper_ingot')
	event.replaceInput({}, '#forge:ingots/copper', 'emendatusenigmatica:copper_ingot')
	//Copper block
	event.replaceInput({}, 'silents_mechanisms:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'tmechworks:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'mekanism:block_copper', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'mysticalworld:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'thermal:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'immersiveengineering:storage_copper', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'occultism:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'create:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'tconstruct:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, 'iceandfire:copper_block', 'emendatusenigmatica:copper_block')
	event.replaceInput({}, '#forge:storage_blocks/copper', 'emendatusenigmatica:copper_block')
	//Copper nugget
	event.replaceInput({}, 'silents_mechanisms:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'tmechworks:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'mekanism:nugget_copper', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'mysticalworld:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'thermal:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_copper', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'occultism:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'create:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'tconstruct:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'iceandfire:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, 'geolosys:copper_nugget', 'emendatusenigmatica:copper_nugget')
	event.replaceInput({}, '#forge:nuggets/copper', 'emendatusenigmatica:copper_nugget')
	//Copper dust
	event.replaceInput({}, 'immersiveengineering:dust_copper', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, 'silents_mechanisms:copper_dust', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, 'mekanism:dust_copper', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, 'pedestals:dustcopper', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, 'mysticalworld:copper_dust', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, 'thermal:copper_dust', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, 'occultism:copper_dust', 'emendatusenigmatica:copper_dust')
	event.replaceInput({}, '#forge:dusts/copper', 'emendatusenigmatica:copper_dust')
	//Copper gear
	event.replaceInput({}, 'thermal:copper_gear', 'emendatusenigmatica:copper_gear')
	event.replaceInput({}, '#forge:gears/copper', 'emendatusenigmatica:copper_gear')
	//Copper plate
	event.replaceInput({}, 'create:copper_sheet', 'emendatusenigmatica:copper_plate')
	event.replaceInput({}, 'thermal:copper_plate', 'emendatusenigmatica:copper_plate')
	event.replaceInput({}, 'immersiveengineering:plate_copper', 'emendatusenigmatica:copper_plate')
	event.replaceInput({}, '#forge:plates/copper', 'emendatusenigmatica:copper_plate')
	//Copper rod
	event.replaceInput({}, 'immersiveposts:stick_copper', 'emendatusenigmatica:copper_rod')
	event.replaceInput({}, 'createaddition:copper_rod', 'emendatusenigmatica:copper_rod')
	event.replaceInput({}, '#forge:rods/copper', 'emendatusenigmatica:copper_rod')
//
//ALUMINUM this one i feared too. aluminum, aluminium, bauxite? wtf?
	//Aluminum ingot
	event.replaceInput({}, 'silents_mechanisms:aluminum_ingot', 'emendatusenigmatica:aluminum_ingot')
	event.replaceInput({}, 'tmechworks:aluminum_ingot', 'emendatusenigmatica:aluminum_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_aluminium', 'emendatusenigmatica:aluminum_ingot')
	event.replaceInput({}, 'geolosys:aluminum_ingot', 'emendatusenigmatica:aluminum_ingot')
	event.replaceInput({}, '#forge:ingots/aluminum', 'emendatusenigmatica:aluminum_ingot')
	//Aluminum block
	event.replaceInput({}, 'silents_mechanisms:aluminum_block', 'emendatusenigmatica:aluminum_block')
	event.replaceInput({}, 'tmechworks:aluminum_block', 'emendatusenigmatica:aluminum_block')
	event.replaceInput({}, 'immersiveengineering:storage_aluminium', 'emendatusenigmatica:aluminum_block')
	event.replaceInput({}, '#forge:storage_blocks/aluminum', 'emendatusenigmatica:aluminum_block')
	//Aluminum nugget
	event.replaceInput({}, 'silents_mechanisms:aluminum_nugget', 'emendatusenigmatica:aluminum_nugget')
	event.replaceInput({}, 'tmechworks:aluminum_nugget', 'emendatusenigmatica:aluminum_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_aluminium', 'emendatusenigmatica:aluminum_nugget')
	event.replaceInput({}, 'geolosys:aluminum_nugget', 'emendatusenigmatica:aluminum_nugget')
	event.replaceInput({}, '#forge:nuggets/aluminum', 'emendatusenigmatica:aluminum_nugget')
	//Aluminum dust
	event.replaceInput({}, 'silents_mechanisms:aluminum_dust', 'emendatusenigmatica:aluminum_dust')
	event.replaceInput({}, 'pedestals:dustaluminum', 'emendatusenigmatica:aluminum_dust')
	event.replaceInput({}, 'immersiveengineering:dust_aluminium', 'emendatusenigmatica:aluminum_dust')
	event.replaceInput({}, '#forge:dusts/aluminum', 'emendatusenigmatica:aluminum_dust')
	//Aluminum plate
	event.replaceInput({}, 'immersiveengineering:plate_aluminium', 'emendatusenigmatica:aluminum_plate')
	event.replaceInput({}, '#forge:plates/aluminum', 'emendatusenigmatica:aluminum_plate')
	//Aluminum rod
	event.replaceInput({}, 'immersiveengineering:stick_aluminium', 'emendatusenigmatica:aluminum_rod')
	event.replaceInput({}, '#forge:rods/aluminum', 'emendatusenigmatica:aluminum_rod')
//
//SILVER
	//Silver ingot
	event.replaceInput({}, 'silents_mechanisms:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'mysticalworld:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'thermal:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_silver', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'occultism:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'iceandfire:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'geolosys:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, 'projectred-core:silver_ingot', 'emendatusenigmatica:silver_ingot')
	event.replaceInput({}, '#forge:ingots/silver', 'emendatusenigmatica:silver_ingot')
	//Silver block
	event.replaceInput({}, 'silents_mechanisms:silver_block', 'emendatusenigmatica:silver_block')
	event.replaceInput({}, 'mysticalworld:silver_block', 'emendatusenigmatica:silver_block')
	event.replaceInput({}, 'thermal:silver_block', 'emendatusenigmatica:silver_block')
	event.replaceInput({}, 'immersiveengineering:storage_silver', 'emendatusenigmatica:silver_block')
	event.replaceInput({}, 'occultism:silver_block', 'emendatusenigmatica:silver_block')
	event.replaceInput({}, 'iceandfire:silver_block', 'emendatusenigmatica:silver_block')
	event.replaceInput({}, '#forge:storage_blocks/silver', 'emendatusenigmatica:silver_block')
	//Silver nugget
	event.replaceInput({}, 'silents_mechanisms:silver_nugget', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, 'mysticalworld:silver_nugget', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, 'thermal:silver_nugget', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_silver', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, 'occultism:silver_nugget', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, 'iceandfire:silver_nugget', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, 'geolosys:silver_nugget', 'emendatusenigmatica:silver_nugget')
	event.replaceInput({}, '#forge:nuggets/silver', 'emendatusenigmatica:silver_nugget')
	//Silver dust
	event.replaceInput({}, 'silents_mechanisms:silver_dust', 'emendatusenigmatica:silver_dust')
	event.replaceInput({}, 'mysticalworld:silver_dust', 'emendatusenigmatica:silver_dust')
	event.replaceInput({}, 'thermal:silver_dust', 'emendatusenigmatica:silver_dust')
	event.replaceInput({}, 'immersiveengineering:dust_silver', 'emendatusenigmatica:silver_dust')
	event.replaceInput({}, 'occultism:silver_dust', 'emendatusenigmatica:silver_dust')
	event.replaceInput({}, 'pedestals:dustsilver', 'emendatusenigmatica:silver_dust')
	event.replaceInput({}, '#forge:dusts/silver', 'emendatusenigmatica:silver_dust')
	//Silver gear
	event.replaceInput({}, 'thermal:silver_gear', 'emendatusenigmatica:silver_gear')
	event.replaceInput({}, '#forge:gears/silver', 'emendatusenigmatica:silver_gear')
	//Silver plate
	event.replaceInput({}, 'thermal:silver_plate', 'emendatusenigmatica:silver_plate')
	event.replaceInput({}, 'immersiveengineering:plate_silver', 'emendatusenigmatica:silver_plate')
	event.replaceInput({}, '#forge:plates/silver', 'emendatusenigmatica:silver_plate')
	//Silver rod
	event.replaceInput({}, 'immersiveposts:stick_silver', 'emendatusenigmatica:silver_rod')
	event.replaceInput({}, '#forge:rods/silver', 'emendatusenigmatica:silver_rod')
//
//LEAD
	//Lead ingot
	event.replaceInput({}, 'silents_mechanisms:lead_ingot', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, 'mekanism:ingot_lead', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, 'mysticalworld:lead_ingot', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, 'thermal:lead_ingot', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_lead', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, 'eidolon:lead_ingot', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, 'geolosys:lead_ingot', 'emendatusenigmatica:lead_ingot')
	event.replaceInput({}, '#forge:ingots/lead', 'emendatusenigmatica:lead_ingot')
	//Lead block
	event.replaceInput({}, 'silents_mechanisms:lead_block', 'emendatusenigmatica:lead_block')
	event.replaceInput({}, 'mekanism:block_lead', 'emendatusenigmatica:lead_block')
	event.replaceInput({}, 'mysticalworld:lead_block', 'emendatusenigmatica:lead_block')
	event.replaceInput({}, 'thermal:lead_block', 'emendatusenigmatica:lead_block')
	event.replaceInput({}, 'immersiveengineering:storage_lead', 'emendatusenigmatica:lead_block')
	event.replaceInput({}, 'eidolon:lead_block', 'emendatusenigmatica:lead_block')
	event.replaceInput({}, '#forge:storage_blocks/leads', 'emendatusenigmatica:lead_block')
	//Lead nugget
	event.replaceInput({}, 'silents_mechanisms:lead_nugget', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, 'mekanism:nugget_lead', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, 'mysticalworld:lead_nugget', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, 'thermal:lead_nugget', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_lead', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, 'eidolon:lead_nugget', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, 'geolosys:lead_nugget', 'emendatusenigmatica:lead_nugget')
	event.replaceInput({}, '#forge:nuggets/lead', 'emendatusenigmatica:lead_nugget')
	//Lead dust
	event.replaceInput({}, 'silents_mechanisms:lead_dust', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'mekanism:dust_lead', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'mysticalworld:lead_dust', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'thermal:lead_dust', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'immersiveengineering:dust_lead', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'eidolon:lead_dust', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'pedestals:dustlead', 'emendatusenigmatica:lead_dust')
	event.replaceInput({}, 'forge:dusts/lead', 'emendatusenigmatica:lead_dust')
	//Lead gear
	event.replaceInput({}, 'thermal:lead_gear', 'emendatusenigmatica:lead_gear')
	event.replaceInput({}, '#forge:gears/lead', 'emendatusenigmatica:lead_gear')
	//Lead plate
	event.replaceInput({}, 'thermal:lead_plate', 'emendatusenigmatica:lead_plate')
	event.replaceInput({}, 'immersiveengineering:plate_lead', 'emendatusenigmatica:lead_plate')
	event.replaceInput({}, '#forge:plates/lead', 'emendatusenigmatica:lead_plate')
	//Lead rod
	event.replaceInput({}, 'immersiveposts:stick_lead', 'emendatusenigmatica:lead_rod')
	event.replaceInput({}, '#forge:rods/lead', 'emendatusenigmatica:lead_rod')
//
//NICKEL
	//Nickel ingot
	event.replaceInput({}, 'silents_mechanisms:nickel_ingot', 'emendatusenigmatica:nickel_ingot')
	event.replaceInput({}, 'thermal:nickel_ingot', 'emendatusenigmatica:nickel_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_nickel', 'emendatusenigmatica:nickel_ingot')
	event.replaceInput({}, 'geolosys:nickel_ingot', 'emendatusenigmatica:nickel_ingot')
	event.replaceInput({}, 'forge:ingots/nickel', 'emendatusenigmatica:nickel_ingot')
	//Nickel block
	event.replaceInput({}, 'silents_mechanisms:nickel_block', 'emendatusenigmatica:nickel_block')
	event.replaceInput({}, 'thermal:nickel_block', 'emendatusenigmatica:nickel_block')
	event.replaceInput({}, 'immersiveengineering:storage_nickel', 'emendatusenigmatica:nickel_block')
	event.replaceInput({}, '#forge:storage_blocks/nickel', 'emendatusenigmatica:nickel_block')
	//Nickel nugget
	event.replaceInput({}, 'silents_mechanisms:nickel_nugget', 'emendatusenigmatica:nickel_nugget')
	event.replaceInput({}, 'thermal:nickel_nugget', 'emendatusenigmatica:nickel_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_nickel', 'emendatusenigmatica:nickel_nugget')
	event.replaceInput({}, 'geolosys:nickel_nugget', 'emendatusenigmatica:nickel_nugget')
	event.replaceInput({}, '#forge:nuggets/nickel', 'emendatusenigmatica:nickel_nugget')
	//Nickel dust
	event.replaceInput({}, 'silents_mechanisms:nickel_dust', 'emendatusenigmatica:nickel_dust')
	event.replaceInput({}, 'thermal:nickel_dust', 'emendatusenigmatica:nickel_dust')
	event.replaceInput({}, 'immersiveengineering:dust_nickel', 'emendatusenigmatica:nickel_dust')
	event.replaceInput({}, 'pedestals:dustnickel', 'emendatusenigmatica:nickel_dust')
	event.replaceInput({}, '#forge:dusts/nickel', 'emendatusenigmatica:nickel_dust')
	//Nickel gear
	event.replaceInput({}, 'thermal:nickel_gear', 'emendatusenigmatica:nickel_gear')
	event.replaceInput({}, '#forge:gears/nickel', 'emendatusenigmatica:nickel_gear')
	//Nickel plate
	event.replaceInput({}, 'thermal:nickel_plate', 'emendatusenigmatica:nickel_plate')
	event.replaceInput({}, 'immersiveengineering:plate_nickel', 'emendatusenigmatica:nickel_plate')
	event.replaceInput({}, '#forge:plates/nickel', 'emendatusenigmatica:nickel_plate')
	//Nickel rod
	event.replaceInput({}, 'immersiveposts:stick_nickel', 'emendatusenigmatica:nickel_rod')
	event.replaceInput({}, '#forge:rods/nickel', 'emendatusenigmatica:nickel_rod')
//URANIUM
	//Uranium ingot (yellorium?)
	event.replaceInput({}, 'silents_mechanisms:uranium_ingot', 'emendatusenigmatica:uranium_ingot')
	event.replaceInput({}, 'mekanism:ingot_uranium', 'emendatusenigmatica:uranium_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_uranium', 'emendatusenigmatica:uranium_ingot')
	event.replaceInput({}, '#forge:ingots/uranium', 'emendatusenigmatica:uranium_ingot')
	//Uranium block
	event.replaceInput({}, 'silents_mechanisms:uranium_block', 'emendatusenigmatica:uranium_block')
	event.replaceInput({}, 'mekanism:block_uranium', 'emendatusenigmatica:uranium_block')
	event.replaceInput({}, 'immersiveengineering:storage_uranium', 'emendatusenigmatica:uranium_block')
	event.replaceInput({}, '#forge:storage_blocks/uranium', 'emendatusenigmatica:uranium_block')
	//Uranium nugget
	event.replaceInput({}, 'silents_mechanisms:uranium_nugget', 'emendatusenigmatica:uranium_nugget')
	event.replaceInput({}, 'mekanism:nugget_uranium', 'emendatusenigmatica:uranium_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_uranium', 'emendatusenigmatica:uranium_nugget')
	event.replaceInput({}, '#forge:nuggets/uranium', 'emendatusenigmatica:uranium_nugget')
	//Uranium dust
	event.replaceInput({}, 'silents_mechanisms:uranium_dust', 'emendatusenigmatica:uranium_dust')
	event.replaceInput({}, 'mekanism:dust_uranium', 'emendatusenigmatica:uranium_dust')
	event.replaceInput({}, 'immersiveengineering:dust_uranium', 'emendatusenigmatica:uranium_dust')
	event.replaceInput({}, 'pedestals:dusturanium', 'emendatusenigmatica:uranium_dust')
	event.replaceInput({}, '#forge:dusts/uranium', 'emendatusenigmatica:uranium_dust')
	//Uranium plate
	event.replaceInput({}, 'immersiveengineering:plate_uranium', 'emendatusenigmatica:uranium_plate')
	event.replaceInput({}, '#forge:plates/uranium', 'emendatusenigmatica:uranium_plate')
	//Uranium post
	event.replaceInput({}, 'immersiveposts:stick_uranium', 'emendatusenigmatica:uranium_rod')
	event.replaceInput({}, '#forge:rods/uranium', 'emendatusenigmatica:uranium_rod')
//
//OSMIUM
	//Osmium ingot
	event.replaceInput({}, 'mekanism:ingot_osmium', 'emendatusenigmatica:osmium_ingot')
	event.replaceInput({}, '#forge:ingots/osmium', 'emendatusenigmatica:osmium_ingot')
	//Osmium block
	event.replaceInput({}, 'mekanism:block_osmium', 'emendatusenigmatica:osmium_block')
	event.replaceInput({}, '#forge:storage_blocks/osmium', 'emendatusenigmatica:osmium_block')
	//Osmium nugget
	event.replaceInput({}, 'mekanism:nugget_osmium', 'emendatusenigmatica:osmium_nugget')
	event.replaceInput({}, '#forge:nuggets/osmium', 'emendatusenigmatica:osmium_nugget')
	//Osmium dust
	event.replaceInput({}, 'mekanism:dust_osmium', 'emendatusenigmatica:osmium_dust')
	event.replaceInput({}, 'pedestals:dustosmium', 'emendatusenigmatica:osmium_dust')
	event.replaceInput({}, '#forge:dusts/osmium', 'emendatusenigmatica:osmium_dust')
//
//TIN
	//Tin ingot
	event.replaceInput({}, 'silents_mechanisms:tin_ingot', 'emendatusenigmatica:tin_ingot')
	event.replaceInput({}, 'mekanism:ingot_tin', 'emendatusenigmatica:tin_ingot')
	event.replaceInput({}, 'mysticalworld:tin_ingot', 'emendatusenigmatica:tin_ingot')
	event.replaceInput({}, 'thermal:tin_ingot', 'emendatusenigmatica:tin_ingot')
	event.replaceInput({}, 'geolosys:tin_ingot', 'emendatusenigmatica:tin_ingot')
	event.replaceInput({}, 'projectred-core:tin_ingot', 'emendatusenigmatica:tin_ingot')
	event.replaceInput({}, '#forge:ingots/tin', 'emendatusenigmatica:tin_ingot')
	//Tin block
	event.replaceInput({}, 'silents_mechanisms:tin_block', 'emendatusenigmatica:tin_block')
	event.replaceInput({}, 'mekanism:block_tin', 'emendatusenigmatica:tin_block')
	event.replaceInput({}, 'mysticalworld:tin_block', 'emendatusenigmatica:tin_block')
	event.replaceInput({}, 'thermal:tin_block', 'emendatusenigmatica:tin_block')
	event.replaceInput({}, '#forge:storage_blocks/tin', 'emendatusenigmatica:tin_block')
	//Tin nugget
	event.replaceInput({}, 'silents_mechanisms:tin_nugget', 'emendatusenigmatica:tin_nugget')
	event.replaceInput({}, 'mekanism:nugget_tin', 'emendatusenigmatica:tin_nugget')
	event.replaceInput({}, 'mysticalworld:tin_nugget', 'emendatusenigmatica:tin_nugget')
	event.replaceInput({}, 'thermal:tin_nugget', 'emendatusenigmatica:tin_nugget')
	event.replaceInput({}, 'geolosys:tin_nugget', 'emendatusenigmatica:tin_nugget')
	event.replaceInput({}, '#forge:nuggets/tin', 'emendatusenigmatica:tin_nugget')
	//Tin dust
	event.replaceInput({}, 'silents_mechanisms:tin_dust', 'emendatusenigmatica:tin_dust')
	event.replaceInput({}, 'mekanism:dust_tin', 'emendatusenigmatica:tin_dust')
	event.replaceInput({}, 'mysticalworld:tin_dust', 'emendatusenigmatica:tin_dust')
	event.replaceInput({}, 'thermal:tin_dust', 'emendatusenigmatica:tin_dust')
	event.replaceInput({}, 'pedestals:dusttin', 'emendatusenigmatica:tin_dust')
	event.replaceInput({}, '#forge:dusts/tin', 'emendatusenigmatica:tin_dust')
	//Tin gear
	event.replaceInput({}, 'thermal:tin_gear', 'emendatusenigmatica:tin_gear')
	event.replaceInput({}, '#forge:gears/tin', 'emendatusenigmatica:tin_gear')
	//Tin plate
	event.replaceInput({}, 'thermal:tin_plate', 'emendatusenigmatica:tin_plate')
	event.replaceInput({}, '#forge:plates/tin', 'emendatusenigmatica:tin_plate')
//
//ZINC
	//Zinc ingot
	event.replaceInput({}, 'silents_mechanisms:zinc_ingot', 'emendatusenigmatica:zinc_ingot')
	event.replaceInput({}, 'create:zinc_ingot', 'emendatusenigmatica:zinc_ingot')
	event.replaceInput({}, 'geolosys:zinc_ingot', 'emendatusenigmatica:zinc_ingot')
	event.replaceInput({}, '#forge:ingots/zinc', 'emendatusenigmatica:zinc_ingot')
	//Zinc block
	event.replaceInput({}, 'silents_mechanisms:zinc_block', 'emendatusenigmatica:zinc_block')
	event.replaceInput({}, 'create:zinc_block', 'emendatusenigmatica:zinc_block')
	event.replaceInput({}, '#forge:storage_blocks/zinc', 'emendatusenigmatica:zinc_block')
	//Zinc nugget
	event.replaceInput({}, 'silents_mechanisms:zinc_nugget', 'emendatusenigmatica:zinc_nugget')
	event.replaceInput({}, 'create:zinc_nugget', 'emendatusenigmatica:zinc_nugget')
	event.replaceInput({}, 'geolosys:zinc_nugget', 'emendatusenigmatica:zinc_nugget')
	event.replaceInput({}, '#forge:nuggets/zinc', 'emendatusenigmatica:zinc_nugget')
	//Zinc dust
	event.replaceInput({}, 'silents_mechanisms:zinc_dust', 'emendatusenigmatica:zinc_dust')
	event.replaceInput({}, '#forge:dusts/zinc', 'emendatusenigmatica:zinc_dust')
	//Zinc plate
	event.replaceInput({}, 'createaddition:zinc_sheet', 'emendatusenigmatica:zinc_plate')
	event.replaceInput({}, 'forge:plates/zinc', 'emendatusenigmatica:zinc_plate')
//
//COBALT
	//Cobalt ingot
	event.replaceInput({}, 'tconstruct:cobalt_ingot', 'emendatusenigmatica:cobalt_ingot')
	event.replaceInput({}, '#forge:ingots/cobalt', 'emendatusenigmatica:cobalt_ingot')
	//Cobalt block
	event.replaceInput({}, 'tconstruct:cobalt_block', 'emendatusenigmatica:cobalt_block')
	event.replaceInput({}, '#forge:storage_blocks/cobalt', 'emendatusenigmatica:cobalt_block')
	//Cobalt nugget
	event.replaceInput({}, 'tconstruct:cobalt_nugget', 'emendatusenigmatica:cobalt_nugget')
	event.replaceInput({}, '#forge:nuggets/cobalt', 'emendatusenigmatica:cobalt_nugget')
//
//
//-----AE2 GEMS-----
//
//

/*
I have decided to redo this part of the scripts.
Basically, AE2 is so annoying that it is extremly hard to use EE materials for it, and there is no other mods adding the same materials. Therefor, this script will use AE2 materials for AE2.
//CERTUS QUARTZ
	//Certus quartz crystal
	event.replaceInput({}, 'appliedenergistics2:certus_quartz_crystal', 'emendatusenigmatica:certus_quartz_gem')
	event.replaceInput({}, '#forge:gems/certus_quartz', 'emendatusenigmatica:certus_quartz_gem')
	//Certus quartz dust
	event.replaceInput({}, 'appliedenergistics2:certus_quartz_dust', 'emendatusenigmatica:certus_quartz_dust')
	event.replaceInput({}, '#forge:dusts/certus_quartz', 'emendatusenigmatica:certus_quartz_dust')
//
//CHARGED CERTUS QUARTZ
	//Charged certus quartz crystal
	event.replaceInput({}, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem')
	event.replaceInput({}, '#forge:gems/charged_certus_quartz', 'emendatusenigmatica:charged_certus_quartz_gem')
	//Charged certus quartz dust.
	event.replaceInput({}, 'jaopca:dusts.charged_certus_quartz', 'emendatusenigmatica:certus_quartz_dust')
//
//FLUIX CRYSTAL
	//Fluix crystal
	event.replaceInput({}, 'appliedenergistics2:fluix_crystal', 'emendatusenigmatica:fluix_gem')
	event.replaceInput({}, '#forge:gems/fluix', 'emendatusenigmatica:fluix_gem')
	//Fluix crystal dust
	event.replaceInput({}, 'appliedenergistics2:fluix_dust', 'emendatusenigmatica:fluix_dust')
	event.replaceInput({}, '#forge:dusts/fluix', 'emendatusenigmatica:fluix_dust')
	//Fluix block
	event.replaceInput({}, 'appliedenergistics2:fluix_block', 'emendatusenigmatica:fluix_block')
	event.replaceInput({}, '#forge:storage_blocks/fluix', 'emendatusenigmatica:fluix_block')
*/
//CERTUS QUARTZ
	//Certus quartz crystal
	event.replaceInput({}, 'emendatusenigmatica:certus_quartz_gem', 'appliedenergistics2:certus_quartz_crystal')
	event.replaceInput({}, '#forge:gems/certus_quartz', 'appliedenergistics2:certus_quartz_crystal')
	//Certus quartz dust
	event.replaceInput({}, 'emendatusenigmatica:certus_quartz_dust', 'appliedenergistics2:certus_quartz_dust')
	event.replaceInput({}, '#forge:dusts/certus_quartz', 'appliedenergistics2:certus_quartz_dust')
//
//CHARGED CERTUS QUARTZ
	//Charged certus quartz crystal
	event.replaceInput({}, 'emendatusenigmatica:charged_certus_quartz_gem', 'appliedenergistics2:charged_certus_quartz_crystal')
	event.replaceInput({}, '#forge:gems/charged_certus_quartz', 'appliedenergistics2:charged_certus_quartz_crystal')
	//Charged certus quartz dust.
	event.replaceInput({}, 'jaopca:dusts.charged_certus_quartz', 'appliedenergistics2:certus_quartz_dust')
//
//FLUIX CRYSTAL
	//Fluix crystal
	event.replaceInput({}, 'emendatusenigmatica:fluix_gem', 'appliedenergistics2:fluix_crystal')
	event.replaceInput({}, '#forge:gems/fluix', 'appliedenergistics2:fluix_crystal')
	//Fluix crystal dust
	event.replaceInput({}, 'emendatusenigmatica:fluix_dust', 'appliedenergistics2:fluix_dust')
	event.replaceInput({}, '#forge:dusts/fluix', 'appliedenergistics2:fluix_dust')
	//Fluix block
	event.replaceInput({}, 'emendatusenigmatica:fluix_block', 'appliedenergistics2:fluix_block')
	event.replaceInput({}, '#forge:storage_blocks/fluix', 'appliedenergistics2:fluix_block')
//
//
//-----MODDED GEMS-----
//
//  - For some reason, these are not working currently. Will have to look into that.

//FLUORITE
	//Fluorite crystal
	event.replaceInput({}, 'mekanism:fluorite_gem', 'emendatusenigmatica:fluorite_gem')
	event.replaceInput({}, '#forge:gems/fluorite', 'emendatusenigmatica:fluorite_gem')
	//Fluorite dust
	event.replaceInput({}, 'mekanism:dust_fuorite', 'emendatusenigmatica:fluorite_dust')
	event.replaceInput({}, '#forge:dusts/fluorite', 'emendatusenigmatica:fluorite_dust')
//
//BITUMEN
	//Bitumen gem
	event.replaceInput({}, 'immersivepetroleum:bitumen', 'emendatusenigmatica:bitumen_gem')
	event.replaceInput({}, 'thermal:bitumen', 'emendatusenigmatica:bitumen_gem')
	event.replaceInput({}, '#forge:gems/bitumen', 'emendatusenigmatica:bitumen_gem')
	event.replaceInput({}, '#forge:bitumen', 'emendatusenigmatica:bitumen_gem')
	//Bitumen block
	event.replaceInput({}, 'thermal:bitumen_block', 'emendatusenigmatica:bitumen_block')
	event.replaceInput({}, '#forge:storage_blocks/bitumen', 'emendatusenigmatica:bitumen_block')
//
//CINNABAR
	//Cinnabar gem
	event.replaceInput({}, 'thermal:cinnabar', 'emendatusenigmatica:cinnabar_gem')
	event.replaceInput({}, 'forge:gems/cinnabar', 'emendatusenigmatica:cinnabar_gem')
	//Cinnabar block
	event.replaceInput({}, 'thermal:cinnabar_block', 'emendatusenigmatica:cinnabar_block')
	event.replaceInput({}, '#forge:storage_blocks/cinnabar', 'emendatusenigmatica:cinnabar_block')
	//Cinnabar dust
	event.replaceInput({}, 'thermal:cinnabar_dust', 'emendatusenigmatica:cinnabar_dust')
	event.replaceInput({}, '#forge:dusts/cinnabar', 'emendatusenigmatica:cinnabar_dust')
//
//APATITE
	//Apatite gem
	event.replaceInput({}, 'thermal:apatite', 'emendatusenigmatica:apatite_gem')
	event.replaceInput({}, '#forge:gems/apatite', 'emendatusenigmatica:apatite_gem')
	//Apatite block
	event.replaceInput({}, 'thermal:apatite_block', 'emendatusenigmatica:apatite_block')
	event.replaceInput({}, '#forge:storage_blocks/apatite', 'emendatusenigmatica:apatite_block')
	//Apatite dust
	event.replaceInput({}, 'thermal:apatite_dust', 'emendatusenigmatica:apatite_dust')
	event.replaceInput({}, '#forge:dusts/apatite', 'emendatusenigmatica:apatite_dust')
//
//SULFUR
	//Sulfur gem
	event.replaceInput({}, 'thermal:sulfur', 'emendatusenigmatica:sulfur_gem')
	event.replaceInput({}, '#forge:gems/sulfur', 'emendatusenigmatica:sulfur_gem')
	//Sulfur block
	event.replaceInput({}, 'thermal:sulfur_block', 'emendatusenigmatica:sulfur_block')
	event.replaceInput({}, '#forge:storage_blocks/sulfur', 'emendatusenigmatica:sulfur_block')
	//Sulfur dust
	event.replaceInput({}, 'thermal:sulfur_dust', 'emendatusenigmatica:sulfur_dust')
	event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'emendatusenigmatica:sulfur_dust')
	event.replaceInput({}, 'mekanism:dust_sulfur', 'emendatusenigmatica:sulfur_dust')
	event.replaceInput({}, 'eidolon:sulfur', 'emendatusenigmatica:sulfur_dust')
	event.replaceInput({}, '#forge:dusts/sulfur', 'emendatusenigmatica:sulfur_dust')
//POTASSIUM NITRATE / NITER / SALTPETER
	//Potassium nitrate gem
	event.replaceInput({}, 'thermal:niter', 'emendatusenigmatica:potassium_nitrate_gem')
	event.replaceInput({}, '#forge:gems/potassium_nitrate', 'emendatusenigmatica:potassium_nitrate_gem')
	event.replaceInput({}, '#forge:gems/saltpeter', 'emendatusenigmatica:potassium_nitrate_gem')
	event.replaceInput({}, '#forge:gems/niter', 'emendatusenigmatica:potassium_nitrate_gem')
	//Potassium nitrate block
	event.replaceInput({}, 'thermal:niter_block', 'emendatusenigmatica:potassium_nitrate_block')
	event.replaceInput({}, '#forge:storage_blocks/potassium_nitrate', 'emendatusenigmatica:potassium_nitrate_block')
	event.replaceInput({}, '#forge:storage_blocks/saltpeter', 'emendatusenigmatica:potassium_nitrate_block')
	event.replaceInput({}, '#forge:storage_blocks/niter', 'emendatusenigmatica:potassium_nitrate_block')
	//Potassium nitrate dust
	event.replaceInput({}, 'thermal:niter_dust', 'emendatusenigmatica:potassium_nitrate_dust')
	event.replaceInput({}, '#forge:dusts/potassium_nitrate', 'emendatusenigmatica:potassium_nitrate_dust')
	event.replaceInput({}, '#forge:dusts/saltpeter', 'emendatusenigmatica:potassium_nitrate_dust')
	event.replaceInput({}, '#forge:dusts/niter', 'emendatusenigmatica:potassium_nitrate_dust')
//MANA GEM/ARCANE
	//Mana gem
	event.replaceInput({}, 'ars_nouveau:mana_gem', 'emendatusenigmatica:arcane_gem')
	event.replaceInput({}, '#forge:gems/mana', 'emendatusenigmatica:arcane_gem')
	//Mana block
	event.replaceInput({}, 'ars_nouveau:mana_gem_block', 'emendatusenigmatica:arcane_block')
	event.replaceInput({}, '#forge:storage_blocks/mana', 'emendatusenigmatica:arcane_block')
//DIMENSIONAL SHARD
//do we even have this?

//
//
//-----MODDED ALLOYS-----
//
//

//BRONZE
	//Bronze ingot
	event.replaceInput({}, 'silents_mechanisms:bronze_ingot', 'emendatusenigmatica:bronze_ingot')
	event.replaceInput({}, 'mekanism:ingot_bronze', 'emendatusenigmatica:bronze_ingot')
	event.replaceInput({}, 'thermal:bronze_ingot', 'emendatusenigmatica:bronze_ingot')
	event.replaceInput({}, '#forge:ingots/bronze', 'emendatusenigmatica:bronze_ingot')
	//Bronze block
	event.replaceInput({}, 'silents_mechanisms:bronze_block', 'emendatusenigmatica:bronze_block')
	event.replaceInput({}, 'mekanism:block_bronze', 'emendatusenigmatica:bronze_block')
	event.replaceInput({}, 'thermal:bronze_block', 'emendatusenigmatica:bronze_block')
	event.replaceInput({}, '#forge:storage_blocks/bronze', 'emendatusenigmatica:bronze_block')
	//Bronze nugget
	event.replaceInput({}, 'silents_mechanisms:bronze_nugget', 'emendatusenigmatica:bronze_nugget')
	event.replaceInput({}, 'mekanism:nugget_bronze', 'emendatusenigmatica:bronze_nugget')
	event.replaceInput({}, 'thermal:bronze_nugget', 'emendatusenigmatica:bronze_nugget')
	event.replaceInput({}, '#forge:nuggets/bronze', 'emendatusenigmatica:bronze_nugget')
	//Bronze dust
	event.replaceInput({}, 'silents_mechanisms:bronze_dust', 'emendatusenigmatica:bronze_dust')
	event.replaceInput({}, 'mekanism:dust_bronze', 'emendatusenigmatica:bronze_dust')
	event.replaceInput({}, '#forge:dusts/bronze', 'emendatusenigmatica:bronze_dust')
	//Bronze gear
	event.replaceInput({}, 'thermal:bronze_gear', 'emendatusenigmatica:bronze_gear')
	event.replaceInput({}, '#forge:gears/bronze', 'emendatusenigmatica:bronze_gear')
	//Bronze plate
	event.replaceInput({}, 'thermal:bronze_plate', 'emendatusenigmatica:bronze_plate')
	event.replaceInput({}, '#forge:plates/bronze', 'emendatusenigmatica:bronze_plate')
//
//BRASS
	//Brass ingot
	event.replaceInput({}, 'silents_mechanisms:brass_ingot', 'emendatusenigmatica:brass_ingot')
	event.replaceInput({}, 'create:brass_ingot', 'emendatusenigmatica:brass_ingot')
	event.replaceInput({}, '#forge:ingots/brass', 'emendatusenigmatica:brass_ingot')
	//Brass block
	event.replaceInput({}, 'silents_mechanisms:brass_block', 'emendatusenigmatica:brass_block')
	event.replaceInput({}, 'create:brass_block', 'emendatusenigmatica:brass_block')
	event.replaceInput({}, '#forge:storage_blocks/brass', 'emendatusenigmatica:brass_block')
	//Brass nugget
	event.replaceInput({}, 'silents_mechanisms:brass_nugget', 'emendatusenigmatica:brass_nugget')
	event.replaceInput({}, 'create:brass_nugget', 'emendatusenigmatica:brass_nugget')
	event.replaceInput({}, '#forge:nuggets/brass', 'emendatusenigmatica:brass_nugget')
	//Brass dust
	event.replaceInput({}, 'silents_mechanisms:brass_dust', 'emendatusenigmatica:brass_dust')
	event.replaceInput({}, '#forge:dusts/brass', 'emendatusenigmatica:brass_dust')
	//Brass plate
	event.replaceInput({}, 'create:brass_sheet', 'emendatusenigmatica:brass_plate')
	event.replaceInput({}, '#forge:plates/brass', 'emendatusenigmatica:brass_plate')
	//Brass rod
	event.replaceInput({}, 'createaddition:brass_rod', 'emendatusenigmatica:brass_rod')
	event.replaceInput({}, '#forge:rods/brass', 'emendatusenigmatica:brass_rod')
//
//ELECTRUM
	//Electrum ingot
	event.replaceInput({}, 'silents_mechanisms:electrum_ingot', 'emendatusenigmatica:electrum_ingot')
	event.replaceInput({}, 'thermal:electrum_ingot', 'emendatusenigmatica:electrum_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_electrum', 'emendatusenigmatica:electrum_ingot')
	event.replaceInput({}, '#forge:ingots/electrum', 'emendatusenigmatica:electrum_ingot')
	//Electrum block
	event.replaceInput({}, 'silents_mechanisms:electrum_block', 'emendatusenigmatica:electrum_block')
	event.replaceInput({}, 'thermal:electrum_block', 'emendatusenigmatica:electrum_block')
	event.replaceInput({}, 'immersiveengineering:storage_electrum', 'emendatusenigmatica:electrum_block')
	event.replaceInput({}, '#forge:storage_blocks/electrum', 'emendatusenigmatica:electrum_block')
	//Electrum nugget
	event.replaceInput({}, 'silents_mechanisms:electrum_nugget', 'emendatusenigmatica:electrum_nugget')
	event.replaceInput({}, 'thermal:electrum_nugget', 'emendatusenigmatica:electrum_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_electrum', 'emendatusenigmatica:electrum_nugget')
	event.replaceInput({}, '#forge:nuggets/electrum', 'emendatusenigmatica:electrum_nugget')
	//Electrum dust
	event.replaceInput({}, 'silents_mechanisms:electrum_dust', 'emendatusenigmatica:electrum_dust')
	event.replaceInput({}, 'immersiveengineering:dust_electrum', 'emendatusenigmatica:electrum_dust')
	event.replaceInput({}, '#forge:dusts/electrum', 'emendatusenigmatica:electrum_dust')
	//Electrum gear
	event.replaceInput({}, 'thermal:electrum_gear', 'emendatusenigmatica:electrum_gear')
	event.replaceInput({}, '#forge:gears/electrum', 'emendatusenigmatica:electrum_gear')
	//Electrum plate
	event.replaceInput({}, 'thermal:electrum_plate', 'emendatusenigmatica:electrum_plate')
	event.replaceInput({}, 'immersiveengineering:plate_electrum', 'emendatusenigmatica:electrum_plate')
	event.replaceInput({}, '#forge:plates/electrum', 'emendatusenigmatica:electrum_plate')
	//Electrum rod
	event.replaceInput({}, 'immersiveposts:stick_electrum', 'emendatusenigmatica:electrum_rod')
	event.replaceInput({}, '#forge:rods/electrum', 'emendatusenigmatica:electrum_rod')
//
//CONSTANTAN
	//Constantan ingot
	event.replaceInput({}, 'thermal:constantan_ingot', 'emendatusenigmatica:constantan_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_constantan', 'emendatusenigmatica:constantan_ingot')
	event.replaceInput({}, '#forge:ingots/constantan', 'emendatusenigmatica:constantan_ingot')
	//Constantan block
	event.replaceInput({}, 'thermal:constantan_block', 'emendatusenigmatica:constantan_block')
	event.replaceInput({}, 'immersiveengineering:storage_constantan', 'emendatusenigmatica:constantan_block')
	event.replaceInput({}, '#forge:storage_blocks/constantan', 'emendatusenigmatica:constantan_block')
	//Constantan nugget
	event.replaceInput({}, 'thermal:constantan_nugget', 'emendatusenigmatica:constantan_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_constantan', 'emendatusenigmatica:constantan_nugget')
	event.replaceInput({}, '#forge:nuggets/constantan', 'emendatusenigmatica:constantan_nugget')
	//Constantan dust
	event.replaceInput({}, 'immersiveengineering:dust_constantan', 'emendatusenigmatica:constantan_dust')
	event.replaceInput({}, '#forge:dusts/constantan', 'emendatusenigmatica:constantan_dust')
	//Constantan gear
	event.replaceInput({}, 'thermal:constantan_gear', 'emendatusenigmatica:constantan_gear')
	event.replaceInput({}, '#forge:gears/constantan', 'emendatusenigmatica:constantan_gear')
	//Constantan plate
	event.replaceInput({}, 'thermal:constantan_plate', 'emendatusenigmatica:constantan_plate')
	event.replaceInput({}, 'immersiveengineering:plate_constantan', 'emendatusenigmatica:constantan_plate')
	event.replaceInput({}, '#forge:plates/constantan', 'emendatusenigmatica:constantan_plate')
	//Constantan rod
	event.replaceInput({}, 'immersiveposts:stick_constantan', 'emendatusenigmatica:constantan_rod')
	event.replaceInput({}, '#forge:rods/constantan', 'emendatusenigmatica:constantan_rod')
//
//STEEL
	//Steel ingot
	event.replaceInput({}, 'silents_mechanisms:steel_ingot', 'emendatusenigmatica:steel_ingot')
	event.replaceInput({}, 'mekanism:ingot_steel', 'emendatusenigmatica:steel_ingot')
	event.replaceInput({}, 'assemblylinemachines:steel_ingot', 'emendatusenigmatica:steel_ingot')
	event.replaceInput({}, 'immersiveengineering:ingot_steel', 'emendatusenigmatica:steel_ingot')
	event.replaceInput({}, '#forge:ingots/steel', 'emendatusenigmatica:steel_ingot')
	//Steel block
	event.replaceInput({}, 'silents_mechanisms:steel_block', 'emendatusenigmatica:steel_block')
	event.replaceInput({}, 'mekanism:block_steel', 'emendatusenigmatica:steel_block')
	event.replaceInput({}, 'assemblylinemachines:steel_block', 'emendatusenigmatica:steel_block')
	event.replaceInput({}, 'immersiveengineering:storage_steel', 'emendatusenigmatica:steel_block')
	event.replaceInput({}, '#forge:storage_blocks/steel', 'emendatusenigmatica:steel_block')
	//Steel nugget
	event.replaceInput({}, 'silents_mechanisms:steel_nugget', 'emendatusenigmatica:steel_nugget')
	event.replaceInput({}, 'mekanism:nugget_steel', 'emendatusenigmatica:steel_nugget')
	event.replaceInput({}, 'assemblylinemachines:steel_nugget', 'emendatusenigmatica:steel_nugget')
	event.replaceInput({}, 'immersiveengineering:nugget_steel', 'emendatusenigmatica:steel_nugget')
	event.replaceInput({}, '#forge:nuggets/steel', 'emendatusenigmatica:steel_nugget')
	//Steel dust
	event.replaceInput({}, 'silents_mechanisms:steel_dust', 'emendatusenigmatica:steel_dust')
	event.replaceInput({}, 'mekanism:dust_steel', 'emendatusenigmatica:steel_dust')
	event.replaceInput({}, 'immersiveengineering:dust_steel', 'emendatusenigmatica:steel_dust')
	event.replaceInput({}, '#forge:dusts/steel', 'emendatusenigmatica:steel_dust')
	//Steel plate
	event.replaceInput({}, 'immersiveengineering:plate_steel', 'emendatusenigmatica:steel_plate')
	event.replaceInput({}, '#forge:plates/steel', 'emendatusenigmatica:steel_plate')
	//Steel rod
	event.replaceInput({}, 'immersiveengineering:stick_steel', 'emendatusenigmatica:steel_rod')
	event.replaceInput({}, '#forge:rods/steel', 'emendatusenigmatica:steel_rod')
//
//INVAR
	//Invar ingot
	event.replaceInput({}, 'silents_mechanisms:invar_ingot', 'emendatusenigmatica:invar_ingot')
	event.replaceInput({}, 'thermal:invar_ingot', 'emendatusenigmatica:invar_ingot')
	event.replaceInput({}, '#forge:ingots/invar', 'emendatusenigmatica:invar_ingot')
	//Invar block
	event.replaceInput({}, 'silents_mechanisms:invar_block', 'emendatusenigmatica:invar_block')
	event.replaceInput({}, 'thermal:invar_block', 'emendatusenigmatica:invar_block')
	event.replaceInput({}, '#forge:storage_blocks/invar', 'emendatusenigmatica:invar_block')
	//Invar nugget
	event.replaceInput({}, 'silents_mechanisms:invar_nugget', 'emendatusenigmatica:invar_nugget')
	event.replaceInput({}, 'thermal:invar_nugget', 'emendatusenigmatica:invar_nugget')
	event.replaceInput({}, '#forge:nuggets/invar', 'emendatusenigmatica:invar_nugget')
	//Invar dust
	event.replaceInput({}, 'silents_mechanisms:invar_dust', 'emendatusenigmatica:invar_dust')
	event.replaceInput({}, '#forge:dusts/invar', 'emendatusenigmatica:invar_dust')
	//Invar gear
	event.replaceInput({}, 'thermal:invar_gear', 'emendatusenigmatica:invar_gear')
	event.replaceInput({}, '#forge:gears/invar', 'emendatusenigmatica:invar_gear')
	//Invar plate
	event.replaceInput({}, 'thermal:invar_plate', 'emendatusenigmatica:invar_plate')
	event.replaceInput({}, '#forge:plates/invar', 'emendatusenigmatica:invar_plate')
//
//LUMIUM
	//Lumium ingot
	event.replaceInput({}, 'silents_mechanisms:lumium_ingot', 'emendatusenigmatica:lumium_ingot')
	event.replaceInput({}, 'thermal:lumium_ingot', 'emendatusenigmatica:lumium_ingot')
	event.replaceInput({}, '#forge:ingots/lumium', 'emendatusenigmatica:lumium_ingot')
	//Lumium block
	event.replaceInput({}, 'silents_mechanisms:lumium_block', 'thermal:lumium_block')
	event.replaceInput({}, 'emendatusenigmatica:lumium_block', 'thermal:lumium_block')
	event.replaceInput({}, '#forge:storage_blocks/lumium', 'thermal:lumium_block')
	//Lumium nugget
	event.replaceInput({}, 'silents_mechanisms:lumium_nugget', 'emendatusenigmatica:lumium_nugget')
	event.replaceInput({}, 'thermal:lumium_nugget', 'emendatusenigmatica:lumium_nugget')
	event.replaceInput({}, '#forge:nuggets/lumium', 'emendatusenigmatica:lumium_nugget')
	//Lumium dust
	event.replaceInput({}, 'silents_mechanisms:lumium_dust', 'emendatusenigmatica:lumium_dust')
	event.replaceInput({}, '#forge:dusts/lumium', 'emendatusenigmatica:lumium_dust')
	//Lumium gear
	event.replaceInput({}, 'thermal:lumium_gear', 'emendatusenigmatica:lumium_gear')
	event.replaceInput({}, '#forge:gears/lumium', 'emendatusenigmatica:lumium_gear')
	//Lumium plate
	event.replaceInput({}, 'thermal:lumium_plate', 'emendatusenigmatica:lumium_plate')
	event.replaceInput({}, '#forge:plates/lumium', 'emendatusenigmatica:lumium_plate')
//
//SIGNALUM
	//Signalum ingot
	event.replaceInput({}, 'silents_mechanisms:signalum_ingot', 'emendatusenigmatica:signalum_ingot')
	event.replaceInput({}, 'thermal:signalum_ingot', 'emendatusenigmatica:signalum_ingot')
	event.replaceInput({}, '#forge:ingots/signalum', 'emendatusenigmatica:signalum_ingot')
	//Signalum block
	event.replaceInput({}, 'silents_mechanisms:signalum_block', 'thermal:signalum_block')
	event.replaceInput({}, 'emendatusenigmatica:signalum_block', 'thermal:signalum_block')
	event.replaceInput({}, '#forge:storage_blocks/signalum', 'thermal:signalum_block')
	//Signalum nugget
	event.replaceInput({}, 'silents_mechanisms:signalum_nugget', 'emendatusenigmatica:signalum_nugget')
	event.replaceInput({}, 'thermal:signalum_nugget', 'emendatusenigmatica:signalum_nugget')
	event.replaceInput({}, '#forge:nuggets/signalum', 'emendatusenigmatica:signalum_nugget')
	//Signalum dust
	event.replaceInput({}, 'silents_mechanisms:signalum_dust', 'emendatusenigmatica:signalum_dust')
	event.replaceInput({}, '#forge:dusts/signalum', 'emendatusenigmatica:signalum_dust')
	//Signalum gear
	event.replaceInput({}, 'thermal:signalum_gear', 'emendatusenigmatica:signalum_gear')
	event.replaceInput({}, '#forge:gears/signalum', 'emendatusenigmatica:signalum_gear')
	//Signalum plate
	event.replaceInput({}, 'thermal:signalum_plate', 'emendatusenigmatica:signalum_plate')
	event.replaceInput({}, '#forge:plates/signalum', 'emendatusenigmatica:signalum_plate')
//
//ENDERIUM
	//Enderium ingot
	event.replaceInput({}, 'silents_mechanisms:enderium_ingot', 'emendatusenigmatica:enderium_ingot')
	event.replaceInput({}, 'thermal:enderium_ingot', 'emendatusenigmatica:enderium_ingot')
	event.replaceInput({}, '#forge:ingots/enderium', 'emendatusenigmatica:enderium_ingot')
	//Enderium block
	event.replaceInput({}, 'silents_mechanisms:enderium_block', 'thermal:enderium_block')
	event.replaceInput({}, 'emendatusenigmatica:enderium_block', 'thermal:enderium_block')
	event.replaceInput({}, '#forge:storage_blocks/enderium', 'thermal:enderium_block')
	//Enderium nugget
	event.replaceInput({}, 'silents_mechanisms:enderium_nugget', 'emendatusenigmatica:enderium_nugget')
	event.replaceInput({}, 'thermal:enderium_nugget', 'emendatusenigmatica:enderium_nugget')
	event.replaceInput({}, '#forge:nuggets/enderium', 'emendatusenigmatica:enderium_nugget')
	//Enderium dust
	event.replaceInput({}, 'silents_mechanisms:enderium_dust', 'emendatusenigmatica:enderium_dust')
	event.replaceInput({}, '#forge:dusts/enderium', 'emendatusenigmatica:enderium_dust')
	//Enderium gear
	event.replaceInput({}, 'thermal:enderium_gear', 'emendatusenigmatica:enderium_gear')
	event.replaceInput({}, '#forge:gears/enderium', 'emendatusenigmatica:enderium_gear')
	//Enderium plate
	event.replaceInput({}, 'thermal:enderium_plate', 'emendatusenigmatica:enderium_plate')
	event.replaceInput({}, '#forge:plates/enderium', 'emendatusenigmatica:enderium_plate')
//
//
//-----OTHER/MISC-----
//
//

//SILICON
	//Silicon gem
	event.replaceInput({}, 'tinyredstone:silicon', 'emendatusenigmatica:silicon_gem')
	event.replaceInput({}, 'appliedenergistics2:silicon', 'emendatusenigmatica:silicon_gem')
	event.replaceInput({}, '#forge:silicon', 'emendatusenigmatica:silicon_gem')
	event.replaceInput({}, '#forge:gems/silicon', 'emendatusenigmatica:silicon_gem')

//
//COAL COKE
	//Coal coke gem
	event.replaceInput({}, 'immersiveengineering:coal_coke', 'emendatusenigmatica:coke_gem')
	event.replaceInput({}, 'thermal:coal_coke', 'emendatusenigmatica:coke_gem')
	event.replaceInput({}, '#forge:gems/coal_coke', 'emendatusenigmatica:coke_gem')
	event.replaceInput({}, '#forge:gems/coke', 'emendatusenigmatica:coke_gem')
	event.replaceInput({}, '#forge:coal_coke', 'emendatusenigmatica:coke_gem')
	//Coal coke block
	event.replaceInput({}, 'immersiveengineering:coke', 'emendatusenigmatica:coke_block')
	event.replaceInput({}, 'thermal:coal_coke_block', 'emendatusenigmatica:coke_block')
	event.replaceInput({}, '#forge:storage_blocks/coke', 'emendatusenigmatica:coke_block')
	event.replaceInput({}, '#forge:storage_blocks/coal_coke', 'emendatusenigmatica:coke_block')
	//Coal coke dust
	event.replaceInput({}, 'immersiveengineering:dust_coke', 'emendatusenigmatica:coke_dust')
	event.replaceInput({}, '#forge:dusts/coke', 'emendatusenigmatica:coke_dust')
	event.replaceInput({}, '#forge:dusts/coal_coke', 'emendatusenigmatica:coke_dust')
//
//CHARCOAL
	//Charcoal dust
	event.replaceInput({}, 'mekanism:dust_charcoal', 'emendatusenigmatica:charcoal_dust')
	event.replaceInput({}, 'assemblylinemachines:ground_charcoal', 'emendatusenigmatica:charcoal_dust')
	event.replaceInput({}, '#forge:dusts/charcoal', 'emendatusenigmatica:charcoal_dust')
//OBSIDIAN
	//Obsidian dust
	event.replaceInput({}, '#forge:dusts/obsidian', 'emendatusenigmatica:obsidian_dust')
//ENDER
	//Ender dust
	event.replaceInput({}, '#forge:dusts/ender', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, '#forge:dusts/ender_pearl', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'appliedenergistics2:ender_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'thermal:ender_pearl_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'betterendforge:ender_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'miniutilities:ender_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'terraqueous:ender_dust', 'emendatusenigmatica:ender_dust')
//GRAPHITE
	//Graphite dust
	event.replaceInput({}, '#forge:dusts/graphite', 'emendatusenigmatica:graphite_dust')
//LITHIUM
	//Lithium dust
	event.replaceInput({}, '#forge:dusts/lithium', 'emendatusenigmatica:lithium_dust')
//WOOD
	//Wood dust / sawdust
	event.replaceInput({}, '#forge:dusts/wood', 'emendatusenigmatica:wood_dust')
	event.replaceInput({}, '#forge:sawdust', 'emendatusenigmatica:wood_dust')
//
//fin
//

	event.replaceInput(
		{input: "#forge:circuits/advanced", mod: "electrodynamics"},
		"#forge:circuits/advanced",
		"electrodynamics:circuitadvanced"
	)
	event.replaceInput(
		{input: "#forge:circuits/elite", mod: "electrodynamics"},
		"#forge:circuits/elite",
		"electrodynamics:circuitelite"
	)
	event.replaceInput(
		{input: "#forge:circuits/ultimate", mod: "electrodynamics"},
		"#forge:circuits/ultimate",
		"electrodynamics:circuitultimate"
	)
	event.replaceInput(
		{input: "#forge:ingots/aluminum", id: "immersiveengineering:crafting/blueprint_components"},
		"#forge:ingots/aluminum",
		"emendatusenigmatica:steel_ingot"
	)
	event.replaceInput(
		{input: "#forge:ingots/aluminum", id: "immersiveengineering:crafting/connector_hv"},
		"#forge:ingots/aluminum",
		"emendatusenigmatica:steel_ingot"
	)
	event.replaceInput(
		{input: "#forge:ingots/aluminum", id: "immersiveengineering:crafting/connector_hv_relay"},
		"#forge:ingots/aluminum",
		"emendatusenigmatica:steel_ingot"
	)
	event.replaceInput(
		{input: "#forge:ingots/aluminum", id: "immersiveengineering:crafting/connector_hv_relay"},
		"#forge:ingots/aluminum",
		"emendatusenigmatica:steel_ingot"
	)
	event.replaceInput(
		{input: "#forge:bitumen"},
		"#forge:bitumen",
		"emendatusenigmatica:bitumen_gem"
	)
	event.replaceInput(
		{input: "#forge:slag"},
		"#forge:slag",
		"thermal:slag"
	)
	event.replaceInput(
		{input: "#forge:ingots/tin", id: "mekanism:resistive_heater"},
		"#forge:ingots/tin",
		"electrodynamics:wiretin"
	)
	
});