onEvent('worldgen.remove', event => {

    // remove features by their id (first argument is a generation step)
    event.removeFeatureById('aoa3:ruined_teleporter_frame')
    event.removeFeatureById('aoa3:archer_outpost')

  })