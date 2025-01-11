// priority: 0

onEvent('recipes', event => {

event.remove({id: 'naturesaura:gold_powder'})
event.remove({output: 'naturesaura:nature_altar'})
event.remove({output: 'naturesaura:token_joy'})
event.remove({output: 'naturesaura:token_anger'})
event.remove({output: 'naturesaura:token_fear'})
event.remove({output: 'naturesaura:token_sorrow'})
event.remove({output: 'naturesaura:bottle_two_the_rebottling'})
event.remove({output: 'naturesaura:gold_brick'})
event.remove({output: 'naturesaura:gold_nether_brick'})
event.remove({id: 'naturesaura:altar/infused_stone'})
event.remove({id: 'naturesaura:altar/infused_iron'})
event.remove({id: 'naturesaura:altar/tainted_gold'})
event.remove({output: 'naturesaura:offering_table'})
event.remove({output: 'naturesaura:calling_spirit'})
event.remove({output: 'naturesaura:conversion_catalyst'})
event.remove({output: 'naturesaura:ancient_sapling'})

event.shaped('naturesaura:offering_table', [
	'IAI',
    'SIF',
    'tEi'
], {
	I: 'naturesaura:infused_stone',
    S: 'naturesaura:token_sorrow',
    A: 'naturesaura:token_anger',
    F: 'naturesaura:token_fear',
    t: 'naturesaura:tainted_gold_block',
    E: 'immersiveengineering:coil_mv',
    i: 'naturesaura:infused_iron_block'
})

event.shaped('2x naturesaura:calling_spirit', [
	'LSP',
    'EDE',
    'PGL'
], {
    L: 'tetra:pristine_lapis',
    S: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
    P: 'tetra:planar_stabilizer',
    E: 'tetra:pristine_emerald',
    D: 'tetra:pristine_diamond',
    G: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}')
})

event.shapeless('naturesaura:bottle_two_the_rebottling', ['minecraft:glass_bottle', "#forge:treated_wood", 'naturesaura:gold_powder'])

event.recipes.createMixing('2x naturesaura:gold_powder', ['naturesaura:gold_leaf', Fluid.of('kubejs:volatile_golden_mixture', 100)]).heated()
event.recipes.createCompacting('naturesaura:gold_brick', ['immersiveengineering:cokebrick', '2x naturesaura:gold_powder', Fluid.of('kubejs:volatile_golden_mixture', 250)]).superheated()
event.recipes.createCompacting('naturesaura:gold_nether_brick', ['immersiveengineering:blastbrick', '2x naturesaura:gold_powder', Fluid.of('kubejs:volatile_golden_mixture', 250)]).superheated()

event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "item": "naturesaura:token_joy"
        },
        {
            "item": "naturesaura:token_joy"
        },
        {
            "item": "immersiveengineering:concrete_tile"
        },
        {
            "item": "immersiveengineering:concrete_tile"
        },
        {
            "item": "emendatusenigmatica:electrum_block"
        },
        {
            "item": "emendatusenigmatica:electrum_block"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "naturesaura:nature_altar"
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "item": "immersiveengineering:gunpowder_barrel"
        },
        {
            "item": "immersiveengineering:he"
        },
        {
            "item": "create:blaze_cake"
        },
        {
            "item": "immersivepetroleum:diesel_bucket"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "naturesaura:token_anger"
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "item": "immersivepetroleum:petcoke"
        },
        {
            "item": "minecraft:ghast_tear"
        },
        {
            "item": "immersiveengineering:insulating_glass"
        },
        {
            "item": "emendatusenigmatica:steel_nugget"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "naturesaura:token_sorrow"
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "item": "botania:fel_pumpkin"
        },
        {
            "item": "nethers_delight:stuffed_hoglin_item"
        },
        {
            "item": "minecraft:netherite_sword"
        },
        {
            "item": "naturesaura:tainted_gold_block"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "naturesaura:token_fear"
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "item": "naturesaura:gold_fiber"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{temperature:0.0d,stored_type:\"naturesaura:overworld\"}"
        },
        {
            "item": "nethers_delight:propelplant_torch"
        },
        {
            "item": "create:honeyed_apple"
        },
        {
            "item": "emendatusenigmatica:invar_ingot"
        },
        {
            "item": "emendatusenigmatica:invar_ingot"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "naturesaura:token_joy"
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:sky_ingot"
        },
        {
            "item": "naturesaura:sky_ingot"
        },
        {
            "item": "naturesaura:sky_ingot"
        },
        {
            "item": "naturesaura:sky_ingot"
        },
        {
            "item": "naturesaura:token_euphoria"
        },
        {
            "item": "naturesaura:token_grief"
        },
        {
            "item": "naturesaura:token_rage"
        },
        {
            "item": "naturesaura:token_terror"
        }
    ],
    "sapling": {
        "item": "naturesaura:ancient_sapling"
    },
    "output": {
        "item": "naturesaura:conversion_catalyst"
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "naturesaura:gold_leaf"
        },
        {
            "item": "naturesaura:gold_leaf"
        },
        {
            "item": "naturesaura:gold_leaf"
        },
        {
            "item": "naturesaura:gold_leaf"
        },
        {
            "item": "ends_delight:dried_chorus_flower"
        },
        {
            "item": "ends_delight:dried_chorus_flower"
        },
        {
            "item": "ends_delight:dried_chorus_flower"
        },
        {
            "item": "ends_delight:dried_chorus_flower"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "naturesaura:ancient_sapling",
        "count": 2
    },
    "time": 200
})
event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "immersiveengineering:concrete"
    },
    "output": {
        "item": "naturesaura:infused_stone"
    },
    "aura_type": "naturesaura:overworld",
    "aura": 7500,
    "time": 40
})
event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "emendatusenigmatica:steel_ingot"
    },
    "output": {
        "item": "naturesaura:infused_iron"
    },
    "aura_type": "naturesaura:overworld",
    "aura": 15000,
    "time": 40
})
event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "emendatusenigmatica:electrum_ingot"
    },
    "output": {
        "item": "naturesaura:tainted_gold"
    },
    "aura_type": "naturesaura:nether",
    "aura": 15000,
    "time": 40
})
event.custom({
    "type": "naturesaura:animal_spawner",
    "ingredients": [
        {
            "item": "naturesaura:calling_spirit"
        },
        {
            "item": "minecraft:emerald_block"
        },
        {
            "item": "minecraft:lead"
        }
    ],
    "entity": "minecraft:wandering_trader",
    "aura": 500,
    "time": 20
})
event.custom({
    "type": "naturesaura:animal_spawner",
    "ingredients": [
        {
            "item": "naturesaura:calling_spirit"
        },
        {
            "item": "naturesaura:sky_ingot"
        },
        {
            "item": "minecraft:leather"
        }
    ],
    "entity": "minecraft:phantom",
    "aura": 500,
    "time": 20
})

})