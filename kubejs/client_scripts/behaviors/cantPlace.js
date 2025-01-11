onEvent('block.place', event => {
    if(event.block.id != 'psi:lit_white_psimetal_plate' || event.block.id != 'psi:lit_black_psimetal_plate') return
    event.player.tell('nuh uh')
    event.cancel()
})