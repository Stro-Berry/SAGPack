// priority: 10

onEvent('recipes', event => {

    const materials = [
        {id: 'iron', multi: 1, output: 'emendatusenigmatica:iron_dust', mek: true, bm: true, create: true},
        {id: 'gold', multi: 1, output: 'emendatusenigmatica:gold_dust', mek: true, bm: true, create: true},
        {id: 'copper', multi: 1, output: 'emendatusenigmatica:copper_dust', mek: true, bm: false, create: true},
        {id: 'tin', multi: 1, output: 'emendatusenigmatica:tin_dust', mek: true, bm: false, create: true},
        {id: 'silver', multi: 1, output: 'emendatusenigmatica:silver_dust', mek: false, bm: false, create: true},
        {id: 'nickel', multi: 1, output: 'emendatusenigmatica:nickel_dust', mek: false, bm: false, create: true},
        {id: 'osmium', multi: 1, output: 'emendatusenigmatica:osmium_dust', mek: true, bm: false, create: true},
        {id: 'lead', multi: 1, output: 'emendatusenigmatica:lead_dust', mek: true, bm: false, create: true},
        {id: 'zinc', multi: 1, output: 'emendatusenigmatica:zinc_dust', mek: false, bm: false, create: true},
        {id: 'coal', multi: 1, output: 'minecraft:coal', mek: false, bm: false, create: false},
        {id: 'diamond', multi: 1, output: 'minecraft:diamond', mek: false, bm: false, create: false},
        {id: 'emerald', multi: 1, output: 'minecraft:emerald', mek: false, bm: false, create: false},
        {id: 'lapis', multi: 6, output: 'minecraft:lapis_lazuli', mek: false, bm: false, create: false},
        {id: 'redstone', multi: 4, output: 'minecraft:redstone', mek: false, bm: false, create: false},
        {id: 'quartz', multi: 2, output: 'minecraft:quartz', mek: false, bm: false, create: false},
        {id: 'certus_quartz', multi: 1, output: 'appliedenergistics2:certus_quartz_crystal', mek: false, bm: false, create: false},
        {id: 'charged_certus_quartz', multi: 1, output: 'appliedenergistics2:charged_certus_quartz_crystal', mek: false, bm: false, create: false},
        {id: 'fluorite', multi: 3, output: 'emendatusenigmatica:fluorite_gem', mek: false, bm: false, create: false},
        {id: 'apatite', multi: 3, output: 'emendatusenigmatica:apatite_gem', mek: false, bm: false, create: false},
        {id: 'aluminum', multi: 1, output: 'kubejs:bauxite_dust', mek: false, bm: false, create: true},
        {id: 'peridot', multi: 1, output: 'kubejs:pitchblende', mek: false, bm: false, create: false, ore: 'kubejs:pitchblende_ore'},
        {id: 'sapphire', multi: 2, output: 'kubejs:tanzanite', mek: false, bm: false, create: false, ore: 'kubejs:tanzanite_ore'},
        {id: 'cobalt', multi: 0.5, output: 'astralsorcery:stardust', mek: false, bm: false, create: false, ore: 'astralsorcery:starmetal_ore'},
        {id: 'utherium', multi: 1, output: 'electrodynamics:dustvanadium', mek: false, bm: false, create: false, ore: 'electrodynamics:orevanadinite', cluster: "kubejs:vanadinite_cluster"},
        {id: 'bitumen', multi: 1, output: 'kubejs:chromite_dust', mek: false, bm: false, create: false, ore: 'electrodynamics:orechromite'},
        {id: 'arcane', multi: 1, output: 'draconicevolution:draconium_dust', mek: false, bm: false, create: false, ore: 'draconicevolution:overworld_draconium_ore'},
        {id: 'potassium_nitrate', multi: 2, output: 'kubejs:cryolite_crystal', mek: false, bm: false, create: false, ore: 'kubejs:cryolite_ore'},
        {id: 'dimensional', multi: 1, output: 'emendatusenigmatica:dimensional_dust', mek: false, bm: false, create: false, ore: 'kubejs:platinum_ore'},
        {id: 'froststeel', multi: 1, output: 'emendatusenigmatica:froststeel_dust', mek: false, bm: false, create: false, ore: 'kubejs:tungsten_ore', cluster: "kubejs:tungsten_cluster"}
    ]
    
    materials.forEach(material => {
        const items = {}
        
        if (material.mek == true) {
            items.clump = `mekanism:clump_${material.id}`
            items.shard = `mekanism:shard_${material.id}`
            items.dirty_dust = `mekanism:dirty_dust_${material.id}`
            items.clean_slurry = `mekanism:clean_${material.id}`
            items.dirty_slurry = `mekanism:dirty_${material.id}`
        } else {
            items.clump = `emendatusenigmatica:${material.id}_clump`
            items.shard = `emendatusenigmatica:${material.id}_shard`
            items.dirty_dust = `emendatusenigmatica:${material.id}_dirty_dust`
            items.clean_slurry = `emendatusenigmatica:clean_${material.id}`
            items.dirty_slurry = `emendatusenigmatica:dirty_${material.id}`
        }

        if (material.create == true) {
            items.crushed = `create:crushed_${material.id}_ore`
        } else {
            items.crushed = `emendatusenigmatica:${material.id}_crushed`
        }

        if (material.bm == true) {
            items.fragment = `bloodmagic:${material.id}fragment`
            items.gravel = `bloodmagic:${material.id}gravel`
        } else {
            items.fragment = `emendatusenigmatica:${material.id}_fragment`
            items.gravel = `emendatusenigmatica:${material.id}_gravel`
        }
        if ('cluster' in material) {
        items.cluster = material.cluster
        } else {
        items.cluster = `emendatusenigmatica:${material.id}_cluster`
        }

        event.remove({output: 'bloodmagic:ironfragment'})
        event.remove({output: 'bloodmagic:goldfragment'})
        event.remove({output: 'bloodmagic:irongravel'})
        event.remove({output: 'bloodmagic:goldgravel'})
        event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_iron'})
        event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_gold'})
        event.remove({id: 'occultism:crushing/iron_dust'})
        event.remove({id: 'occultism:crushing/gold_dust'})
        event.remove({id: 'occultism:crushing/silver_dust'})
        event.remove({id: 'occultism:crushing/copper_dust'})
        event.remove({output: `emendatusenigmatica:${material.id}_cluster`})
        event.remove({id: `emendatusenigmatica:chunk_from_cluster/${material.id}`})
        event.remove({output: `electrodynamics:impuredust${material.id}`})
        event.remove({id: `electrodynamics:itemfluid2fluid/mineralwasher/${material.id}_mineral_fluid`})
        

        if (material.create == true) {
            event.remove({output: `create:crushed_${material.id}_ore`})
            event.remove({input: `create:crushed_${material.id}_ore`})
        }
        if (material.mek == true) {
            event.remove({output: `mekanism:clump_${material.id}`})
            event.remove({output: `mekanism:shard_${material.id}`})
            event.remove({output: `mekanism:dirty_dust_${material.id}`})
            event.remove({input: `mekanism:dirty_dust_${material.id}`})
            event.remove({output: `mekanism:crystal_${material.id}`})
            event.remove({id: `mekanism:processing/${material.id}/slurry/clean`})
            event.remove({id: `mekanism:processing/${material.id}/slurry/dirty`})
        }
        if ('ore' in material) {
            event.recipes.createMilling([Item.of(material.output).withChance(0.5), material.output], material.ore)
            event.recipes.createCrushing(`2x ${material.output}`, material.ore)
            event.custom({
                "type": "electrodynamics:mineral_crusher_recipe",
                "input": {
                    "item": material.ore,
                    "count": 1
                },
                "output": {
                    "item": material.output,
                    "count": 2
                }
            })
            event.custom({
                "type": "electrodynamics:mineral_grinder_recipe",
                "input": {
                    "item": material.ore,
                    "count": 1
                },
                "output": {
                    "item": material.output,
                    "count": 2
                }
            })
            event.custom({
                "type": "mekanism:reaction",
                "itemInput": {
                    "ingredient": {
                    "item": material.ore
                  }
                },
                "fluidInput": {
                    "amount": 100,
                    "fluid": "kubejs:distilled_water"
                },
                "gasInput": {
                    "amount": 250,
                    "gas": "mekanism:chlorine"
                },
                "energyRequired": 4000,
                "duration": 200,
                "itemOutput": {
                    "item": items.clump
                }
            })
            event.custom({
                "type": "occultism:crushing",
                "ingredient": {
                    "item": material.ore
                },
                "result": {
                    "item": items.crushed,
                    "count": 1
                },
                "crushing_time": 20
            })
            event.custom({
                "type": "botania:mana_infusion",
                "input": {
                    "item": material.ore
                },
                "output": {
                    "item": items.cluster
                },
                "mana": 1000,
                "catalyst": {
                    "type": "block",
                    "block": "bloodmagic:orbcapacityrune"
                }
            })
            event.custom({
                "type": "masterfulmachinery:machine_process",
                "structureId": "supercritical_slurry_processor",
                "controllerId": "elite",
                "ticks": 2,
                "inputs": [
                  {"type": "masterfulmachinery:items","data":{"item": material.ore,"count": 1}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:xenic_acid","amount": 10}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hot_heavy_water","amount": 100}},
                  {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:hydrogen_peroxide","amount": 10}},
                  {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 1000000}},
                  {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}}
                ],
                "outputs":[
                  {"type": "masterfulmachinery:mekanism_slurry","data":{"slurry": items.dirty_slurry,"amount": 2000}}
                ]
            })
        } else {
            event.recipes.createMilling([Item.of(material.output).withChance(0.5), material.output], `#forge:ores/${material.id}`)
            event.recipes.createCrushing(`2x ${material.output}`, `#forge:ores/${material.id}`)
            event.custom({
                "type": "electrodynamics:mineral_crusher_recipe",
                "input": {
                    "tag": `forge:ores/${material.id}`,
                    "count": 1
                },
                "output": {
                    "item": material.output,
                    "count": 2
                }
            })
            event.custom({
                "type": "electrodynamics:mineral_grinder_recipe",
                "input": {
                    "tag": `forge:ores/${material.id}`,
                    "count": 1
                },
                "output": {
                    "item": material.output,
                    "count": 2
                }
            })
            event.custom({
                "type": "mekanism:reaction",
                "itemInput": {
                    "ingredient": {
                    "tag": `forge:ores/${material.id}`
                  }
                },
                "fluidInput": {
                    "amount": 100,
                    "fluid": "kubejs:distilled_water"
                },
                "gasInput": {
                    "amount": 250,
                    "gas": "mekanism:chlorine"
                },
                "energyRequired": 4000,
                "duration": 200,
                "itemOutput": {
                    "item": items.clump
                }
            })
            event.custom({
                "type": "occultism:crushing",
                "ingredient": {
                    "tag": `forge:ores/${material.id}`
                },
                "result": {
                    "item": items.crushed,
                    "count": 1
                },
                "crushing_time": 20
            })
            event.custom({
                "type": "botania:mana_infusion",
                "input": {
                    "tag": `forge:ores/${material.id}`
                },
                "output": {
                    "item": items.cluster
                },
                "mana": 1000,
                "catalyst": {
                    "type": "block",
                    "block": "bloodmagic:orbcapacityrune"
                }
            })
            event.custom({
                "type": "masterfulmachinery:machine_process",
                "structureId": "supercritical_slurry_processor",
                "controllerId": "elite",
                "ticks": 2,
                "inputs": [
                  {"type": "masterfulmachinery:items","data":{"tag": `forge:ores/${material.id}`,"count": 1}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:xenic_acid","amount": 10}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hot_heavy_water","amount": 100}},
                  {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:hydrogen_peroxide","amount": 10}},
                  {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 1000000}},
                  {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}}
                ],
                "outputs":[
                  {"type": "masterfulmachinery:mekanism_slurry","data":{"slurry": items.dirty_slurry,"amount": 2000}}
                ]
            })
        }

        event.custom({
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "item": items.clump
              }
            ],
            "pressure": 4.0,
            "results": [
              {
                "item": items.gravel,
                "count": 2
              }
            ]
        })
        event.recipes.mekanism.purifying(`${2 * material.multi}x ${material.output}`, items.gravel, {gas: "mekanism:steam", amount: 1})

        event.recipes.thermal.centrifuge([items.dirty_dust, Item.of(items.dirty_dust).withChance(0.33)], items.shard).energy(2000)
   
        event.recipes.thermal.chiller(`3x ${items.dirty_dust}`, [items.fragment, Fluid.of('industrialforegoing:ether_gas', 2)])

        event.custom({
            "type": "mekanism:washing",
            "fluidInput": {
                "amount": 1,
                "fluid": "kubejs:nitric_acid"
            },
            "slurryInput": {
                "amount": 5,
                "slurry": items.dirty_slurry
            },
            "output": {
                "slurry": items.clean_slurry,
                "amount": 5
            }
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": "supercritical_slurry_processor",
            "controllerId": "elite",
            "ticks": 2,
            "inputs": [
              {"type": "masterfulmachinery:mekanism_slurry","data":{"slurry": items.clean_slurry,"amount": 1000}},
              {"type": "masterfulmachinery:mekanism_gas","data":{"gas": "kubejs:sodium_hydroxide","amount": 1000}},
              {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 1000000}},
              {"type": "masterfulmachinery:pncr_pressure","data":{"air": 18}}
            ],
            "outputs":[
              {"type": "masterfulmachinery:items","data":{"item": material.output,"count": 8 * material.multi}}
            ]
        })
        if (material.multi == 0.5) {
            material.multi = 1
            event.recipes.mekanism.injecting(items.shard, items.crushed, {gas: "mekanism:sulfuric_acid", amount: 1})
            event.custom({
                "type": "masterfulmachinery:machine_process",
                "structureId": "large_mixer",
                "controllerId": "basic",
                "ticks": 2,
                "inputs": [
                  {"type": "masterfulmachinery:items","data":{"item": items.cluster,"count": 1}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hydrochloric_acid","amount": 250}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 50}},
                  {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}},
                  {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
                ],
                "outputs":[
                  {"type": "masterfulmachinery:items","data":{"item": items.fragment,"count": 2}}
                ]
            })
        } else {
            event.recipes.mekanism.injecting(`2x ${items.shard}`, items.crushed, {gas: "mekanism:sulfuric_acid", amount: 1})
            event.custom({
                "type": "masterfulmachinery:machine_process",
                "structureId": "large_mixer",
                "controllerId": "basic",
                "ticks": 2,
                "inputs": [
                  {"type": "masterfulmachinery:items","data":{"item": items.cluster,"count": 1}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:hydrochloric_acid","amount": 250}},
                  {"type": "masterfulmachinery:fluids","data":{"fluid": "bloodmagic:life_essence_fluid","amount": 50}},
                  {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 10000}},
                  {"type": "masterfulmachinery:create_rotation","data":{"speed": 64}}
                ],
                "outputs":[
                  {"type": "masterfulmachinery:items","data":{"item": items.fragment,"count": 4}}
                ]
            })
        }
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": "advanced_arc_furnace",
            "controllerId": "advanced",
            "ticks": 2,
            "inputs": [
              {"type": "masterfulmachinery:items","data":{"item": items.dirty_dust, "count": 1}},
              {"type": "masterfulmachinery:fluids","data":{"fluid": "kubejs:liquid_nitrogen","amount": 50}},
              {"type": "masterfulmachinery:fluids","data":{"fluid": "mekanism:oxygen","amount": 50}},
              {"type": "masterfulmachinery:energy","consumePerTick": true,"data":{"amount": 20000}}
            ],
            "outputs":[
              {"type": "masterfulmachinery:items","data":{"item": material.output,"count": material.multi}}
            ]
        })

    })
    event.remove({id: "electrodynamics:ingotmolybdenum_blasting"})
    event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_molybdenum_dust_from_ore"})
    event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_molybdenum_dust_from_crystal"})
    event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_vanadium_dust_from_vanadinite_ore"})
    event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_vanadium_dust_from_vanadium_cryst"})
    event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_lithium_dust_from_ore"})
    event.remove({id: "electrodynamics:o2o/mineralcrusher/imp_lithium_dust_from_lithium_cryst"})
    event.remove({id: "electrodynamics:o2o/mineralgrinder/sulfur_dust_from_sulfur_ore"})
    event.remove({id: "rftoolsbase:dimensionalshard"})
    event.remove({id: "emendatusenigmatica:ingot_from_ore/blasting/aluminum"})
    event.remove({id: "emendatusenigmatica:ingot_from_ore/smelting/aluminum"})
    event.remove({id: "immersiveengineering:crafting/hammercrushing_aluminum"})
    event.remove({id: "immersiveengineering:crusher/aluminum"})
    event.remove({id: "immersiveengineering:crusher/ore_aluminum"})
    event.remove({id: "thermal:compat/immersiveengineering/pulverizer_ie_aluminum_ore"})
    event.smelting("kubejs:tungsten_ingot", "emendatusenigmatica:froststeel_dust")
    event.smelting("kubejs:platinum_ingot", "emendatusenigmatica:dimensional_dust")
    event.smelting("kubejs:chromite_dust", "electrodynamics:orechromite")
    event.smelting("astralsorcery:starmetal_ingot", "astralsorcery:stardust")
})
    