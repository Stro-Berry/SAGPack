onEvent("lootjs", (event) => {
    event.addLootTableModifier("aoa3:loot_tables/structures/barathos/baron_castle/main").thenRemove(["aoa3:blazium_ingot","aoa3:varsium_ingot","aoa3:baronyte_ingot","aoa3:blazium_nugget","aoa3:varsium_nugget","aoa3:baronyte_nugget"]); 
    event.addLootTableModifier("aoa3:structures/lelyetia/lelyetian_tower/main").thenRemove(["aoa3:orange_spores","aoa3:yellow_spores"]);
    event.addLootTableModifier("aoa3:worlds/lelyetia").thenRemove(["aoa3:orange_spores","aoa3:yellow_spores"]); 
    event.addLootTableModifier("aoa3:worlds/dustopia").thenRemove("aoa3:darkly_powder"); 
    event.addLootTableModifier("minecraft:blocks/grass").thenRemove("occultism:datura_seeds"); 
    event.addLootTableModifier("emendatusenigmatica:blocks/certus_quartz_netherrack_ore").thenRemove('emendatusenigmatica:certus_quartz_gem').thenAdd('appliedenergistics2:certus_quartz_crystal');
    event.addLootTableModifier("emendatusenigmatica:blocks/charged_certus_quartz_netherrack_ore").thenRemove('emendatusenigmatica:charged_certus_quartz_gem').thenAdd('appliedenergistics2:charged_certus_quartz_crystal');
    event.addLootTableModifier(/.*chests.*/).thenRemove(["aoa3:carved_rune_of_travel", "aoa3:carved_rune_of_direction", "aoa3:carved_rune_of_power", "aoa3:carved_rune_of_reality", "aoa3:carved_rune_of_space", "botania:manasteel_ingot"]);
    event.addLootTableModifier(/.*entities.*/).thenRemove(["aoa3:carved_rune_of_travel", "aoa3:carved_rune_of_direction", "aoa3:carved_rune_of_power", "aoa3:carved_rune_of_reality", "aoa3:carved_rune_of_space"]);
})