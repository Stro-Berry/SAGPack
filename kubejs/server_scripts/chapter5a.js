// priority: 0

onEvent('recipes', event => {

    event.remove({id: 'eidolon:blast_pewter_blend'})
    event.remove({id: 'eidolon:smelt_pewter_blend'})
    event.remove({output: 'eidolon:pewter_blend'})
    event.remove({output: 'eidolon:pewter_inlay'})
    event.remove({output: 'eidolon:gold_inlay'})
    event.remove({output: 'eidolon:worktable'})
    event.remove({output: 'eidolon:crucible'})
    event.remove({output: 'eidolon:straw_effigy'})
    event.remove({output: 'eidolon:stone_hand'})
    event.remove({output: 'eidolon:necrotic_focus'})
    event.remove({output: 'mekanism:advanced_control_circuit'})

    event.shaped('eidolon:worktable', [
        'III',
        'RTR',
        'TTT'
    ], {
        I: 'eidolon:pewter_inlay',
        R: '#forge:blocks/redstone',
        T: '#forge:treated_wood'
    })

    event.shaped('eidolon:straw_effigy', [
        ' W ',
        'WWW',
        ' G '
    ], {
        W: 'minecraft:wheat',
        G: 'eidolon:arcane_gold_ingot'
    })
    event.shaped('eidolon:crucible', [
      'PSP',
      'ISI',
      'PBP'
    ], {
      P: 'eidolon:pewter_ingot',
      I: 'eidolon:pewter_inlay',
      B: 'eidolon:pewter_block',
      S: 'naturesaura:sky_ingot'
    })
    event.shaped('eidolon:brazier', [
      'IBI',
      'CAC',
      'ACA'
    ], {
      C: 'kubejs:calx_of_the_nether',
      I: 'eidolon:pewter_inlay',
      B: 'eidolon:pewter_block',
      A: 'naturesaura:ancient_stick'
    })
    event.shaped('eidolon:stone_hand', [
      ' R ',
      'CRC',
      ' I '
    ], {
      R: 'naturesaura:infused_stone',
      I: 'eidolon:pewter_inlay',
      C: 'kubejs:calx_of_the_nether'
    })
    event.shaped('eidolon:necrotic_focus', [
      'PRP',
      'DUD',
      'DBD'
    ], {
      R: 'naturesaura:infused_stone',
      U: 'eidolon:unholy_symbol',
      D: 'eidolon:death_essence',
      P: 'eidolon:arcane_gold_ingot',
      B: 'eidolon:arcane_gold_block'
    })

    event.shapeless('eidolon:pewter_blend', ['emendatusenigmatica:lead_ingot', 'naturesaura:infused_iron'])
    event.shapeless('eidolon:arcane_gold_ingot', ["eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget","eidolon:arcane_gold_nugget"])
    event.shapeless('eidolon:arcane_gold_ingot', "eidolon:arcane_gold_block")
    event.shapeless('4x kubejs:calx_of_the_nether', ["eidolon:warped_sprouts","eidolon:crimson_essence"])

    event.recipes.createCutting('eidolon:pewter_inlay', 'eidolon:pewter_ingot'),
    event.recipes.createCutting('eidolon:gold_inlay', 'eidolon:arcane_gold_ingot'),
    event.recipes.createMixing('eidolon:tattered_cloth', ['2x eidolon:wicked_weave', 'eidolon:death_essence']),
    event.recipes.thermal.press("kubejs:empty_pcb_stack", ["8x pneumaticcraft:empty_pcb", "thermal:press_packing_2x2_die"]).energy(10000)

    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "eidolon:pewter_blend"
        },
        "output": {
            "item": "eidolon:pewter_ingot"
        },
        "catalyst": {
        "item": "naturesaura:conversion_catalyst"
        },
        "aura_type": "naturesaura:overworld",
        "aura": 20000,
        "time": 20
    })
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "item": "kubejs:advanced_control_circuit_materials",
          "count": 1
        },
        "result": {
          "item": "mekanism:advanced_control_circuit",
          "count": 1
        },
        "program": "laser"
    })
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:empty_pcb_stack",
        "count": 1
      },
      "result": {
        "item": "pneumaticcraft:unassembled_pcb",
        "count": 8
      },
      "program": "laser"
  })
})