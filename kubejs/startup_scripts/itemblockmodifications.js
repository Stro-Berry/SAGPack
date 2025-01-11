onEvent('item.tags', event => {
    event.add("thermal:crafting/dies", "immersiveengineering:mold_rod")
    event.add("thermal:crafting/dies", "immersiveengineering:mold_wire")
    event.add("kubejs:conjured", "kubejs:conjureditem")
})

onEvent('item.modification', event => {
    event.modify('futurepack:fuel_rods', item => {
      item.maxStackSize = 64
    })
  })