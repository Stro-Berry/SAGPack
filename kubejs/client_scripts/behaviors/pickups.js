onEvent('item.pickup', event =>{
    if(event.item.id != 'kubejs:raw_ivory_seed' || event.item.id != 'kubejs:raw_ebony_seed') return
    event.cancel()
})