// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {

    event.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
    event.hide(Item.of('chiselsandbits:block_bit').ignoreNBT())
    event.hide('botania:rune_air')
    event.hide('botania:rune_autumn')
    event.hide('botania:rune_earth')
    event.hide('botania:rune_envy')
    event.hide('botania:rune_fire')
    event.hide('botania:rune_gluttony')
    event.hide('botania:rune_greed')
    event.hide('botania:rune_lust')
    event.hide('botania:rune_mana')
    event.hide('botania:rune_pride')
    event.hide('botania:rune_sloth')
    event.hide('botania:rune_spring')
    event.hide('botania:rune_summer')
    event.hide('botania:rune_water')
    event.hide('botania:rune_winter')
    event.hide('botania:rune_wrath')
    
})

onEvent('jei.remove.categories', event => {
    console.log(event.getCategoryIds())

    event.remove("extendedcrafting:basic_crafting")
    event.remove("interactio:item_explode")
    event.remove("industrialforegoing:fluid_sieving_machine")
    event.remove('masterfulmachinery:machine_structure_stellar')
  })

onEvent('jei.remove.recipes', event => {

['0','1','2','3','4','5','6','7','8','9','10','11'].forEach(n => {
    event.hide('masterfulmachinery:machine_process_starforge', 'kubejs:rune_'+n)
})

event.hide('minecraft:crafting', 'kubejs:stellar_circuit_chemical_tank')
event.hide('minecraft:crafting', 'kubejs:stellar_circuit_probe')
event.hide('minecraft:crafting', 'kubejs:stellar_circuit_fluid_tank')
event.hide('interactio:item_explode', 'kubejs:hypercompressed_core')

})