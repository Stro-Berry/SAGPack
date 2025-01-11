onEvent('worldgen.remove', event => {

    event.removeOres(ores => {
      ores.blocks = ['electrodynamics:orechromite', 'electrodynamics:orevanadinite', 'electrodynamics:oremolybdenum', 'aoa3:amethyst_ore', 'aoa3:jade_ore', 'aoa3:sapphire_ore', 'aoa3:limonite_ore', 'aoa3:rosite_ore', 'aoa3:runium_ore', 'aoa3:emberstone_ore', 'thermal:niter_ore', 'minecraft:nether_quartz_ore']
    })

})

onEvent('worldgen.add', event => {

    event.addOre(ore => {
        ore.block = 'emendatusenigmatica:quartz_netherrack_ore'
        ore.spawnsIn.blacklist = false
        ore.spawnsIn.values = [
          '#minecraft:base_stone_nether'
        ]
        
        ore.biomes.blacklist = false
        ore.biomes.values = [
          '#nether'
        ]
        
        ore.clusterMinSize = 1
        ore.clusterMaxSize = 8
        ore.clusterCount = 20
        ore.minHeight = 0
        ore.maxHeight = 127
        ore.squared = true
      })

      event.addOre(ore => {
        ore.block = 'emendatusenigmatica:certus_quartz_netherrack_ore'
        ore.spawnsIn.blacklist = false
        ore.spawnsIn.values = [
          '#minecraft:base_stone_nether'
        ]
        
        ore.biomes.blacklist = false
        ore.biomes.values = [
          '#nether'
        ]
        
        ore.clusterMinSize = 1
        ore.clusterMaxSize = 8
        ore.clusterCount = 12
        ore.minHeight = 0
        ore.maxHeight = 127
        ore.squared = true
      })

      event.addOre(ore => {
        ore.block = 'emendatusenigmatica:charged_certus_quartz_netherrack_ore'
        ore.spawnsIn.blacklist = false
        ore.spawnsIn.values = [
          '#minecraft:base_stone_nether'
        ]
        
        ore.biomes.blacklist = false
        ore.biomes.values = [
          '#nether'
        ]
        
        ore.clusterMinSize = 1
        ore.clusterMaxSize = 8
        ore.clusterCount = 6
        ore.minHeight = 0
        ore.maxHeight = 127
        ore.squared = true
      })

      event.addOre(ore => {
        ore.block = 'futurepack:quantanium'
        ore.spawnsIn.blacklist = true
        ore.spawnsIn.values = []
        ore.biomes.values = [
          'futurepack:asteroid_belt'
        ]
        
        ore.clusterMinSize = 1
        ore.clusterMaxSize = 2
        ore.clusterCount = 10
        ore.minHeight = 0
        ore.maxHeight = 255
        ore.squared = true
      })

})