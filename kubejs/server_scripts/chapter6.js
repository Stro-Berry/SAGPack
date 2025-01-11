// priority: 0

onEvent('recipes', event => {

    // removals

    event.remove({output: "thermal:rf_coil"})
    event.remove({output: "thermal:machine_bottler"})
    event.remove({output: "thermal:machine_crucible"})
    event.remove({output: "thermal:machine_smelter"})
    event.remove({output: "thermal:machine_insolator"})
    event.remove({output: "thermal:machine_refinery"})
    event.remove({output: "thermal:machine_pulverizer"})
    event.remove({output: "thermal:device_tree_extractor"})
    event.remove({output: "thermal:upgrade_augment_1"})
    event.remove({output: "thermal:upgrade_augment_2"})
    event.remove({output: "thermal:upgrade_augment_3"})
    event.remove({output: "hostilenetworks:blank_data_model"})
    event.remove({output: "hostilenetworks:sim_chamber"})
    event.remove({output: "hostilenetworks:loot_fabricator"})
    event.remove({output: "hostilenetworks:deep_learner"})
    event.remove({output: "hostilenetworks:empty_prediction"})
    event.remove({output: "mekanism:structural_glass"})
    event.remove({output: "emendatusenigmatica:ender_dust"})
    event.remove({output: "thermal:redstone_servo"})
    event.remove({id: "thermal:machine/chiller/chiller_redstone_to_redstone_block"})
    event.remove({id: "thermal:machine/crucible/crucible_redstone_block"})
    event.remove({id: "thermal:machine/crucible/crucible_redstone_dust"})
    event.remove({id: "thermal:machine/smelter/smelter_alloy_signalum"})
    event.remove({id: "thermal:fire_charge/signalum_ingot_4"})
    event.remove({id: "thermal:signalum_dust_4"})
    event.remove({id: "emendatusenigmatica:alloy_dust/signalum"})
    event.remove({id: "thermal:machine/smelter/smelter_alloy_lumium"})
    event.remove({id: "thermal:fire_charge/lumium_ingot_4"})
    event.remove({id: "thermal:lumium_dust_4"})
    event.remove({id: "emendatusenigmatica:alloy_dust/lumium"})
    event.remove({id: "thermal:machine/smelter/smelter_alloy_enderium"})
    event.remove({id: "thermal:fire_charge/enderium_ingot_4"})
    event.remove({id: "thermal:enderium_dust_4"})
    event.remove({id: "thermal:enderium_dust_2"})
    event.remove({id: "thermal:machine/crucible/crucible_ender_pearl"})
    event.remove({id: "emendatusenigmatica:alloy_dust/enderium"})

    // shaped
    
    event.shaped("thermal:rf_coil", [
        " RG",
        "RPR",
        "GR "
    ], {
        R: "mekanism:enriched_redstone",
        G: "#forge:gears/gold",
        P: "mekanism:hdpe_stick",
    })

    event.shaped("thermal:machine_bottler", [
        " B ",
        "FMF",
        "GCG"
    ], {
        F: "kubejs:fiberglass",
        M: "thermal:machine_frame",
        G: "#forge:gears/invar",
        C: "thermal:rf_coil",
        B: "minecraft:bucket",
    })

    event.shaped("thermal:machine_crucible", [
        " B ",
        "FMF",
        "GCG"
    ], {
        F: "kubejs:fiberglass",
        M: "thermal:machine_frame",
        G: "#forge:gears/invar",
        C: "thermal:rf_coil",
        B: "create:blaze_cake",
    })
   
    event.shaped("thermal:machine_insolator", [
        " D ",
        "PMP",
        "GCG"
    ], {
        P: "thermal:phytogro",
        M: "thermal:machine_frame",
        G: "#forge:gears/signalum",
        C: "thermal:rf_coil",
        D: "minecraft:dirt",
    })

    event.shaped("thermal:machine_smelter", [
        " O ",
        "KMK",
        "GCG"
    ], {
        K: "immersiveengineering:alloybrick",
        M: "thermal:machine_frame",
        G: "#forge:gears/signalum",
        C: "thermal:rf_coil",
        O: "mekanism:combiner",
    })

    event.shaped("hostilenetworks:blank_data_model", [
        "PLP",
        "AVA",
        "PLP"
    ], {
        P: "kubejs:platinum_ingot",
        A: "mekanism:advanced_control_circuit",
        V: "envirocore:volatile_memory",
        L: "#forge:ingots/lumium"
    })

    event.shaped("hostilenetworks:sim_chamber", [
        "PLP",
        "WMW",
        "PAP"
    ], {
        P: "kubejs:platinum_ingot",
        A: "mekanism:advanced_control_circuit",
        W: "envirocore:erodium_wafer",
        L: "#forge:ingots/lumium",
        M: "thermal:machine_frame"
    })

    event.shaped("hostilenetworks:loot_fabricator", [
        "SHS",
        "OMO",
        "SHS"
    ], {
        M: "thermal:machine_frame",
        H: "hostilenetworks:nether_prediction",
        S: "#forge:ingots/signalum",
        O: "hostilenetworks:overworld_prediction"
    })

    event.shaped("hostilenetworks:deep_learner", [
        "OWO",
        "WPW",
        "OWO"
    ], {
        P: "kubejs:platinum_ingot",
        W: "envirocore:erodium_wafer",
        O: "envirocore:obsidian_plate"
    })

    event.shaped("4x mekanism:structural_glass", [
        "ISI",
        "SGS",
        "ISI"
    ], {
        I: "mekanism:alloy_infused",
        S: "#forge:rods/steel",
        G: "#forge:glass"
    })

    event.shaped("thermal:upgrade_augment_1", [
        "IBI",
        "RSR",
        "IBI"
    ], {
        I: "#forge:ingots/invar",
        S: "#forge:gears/signalum",
        B: "#forge:gears/bronze",
        R: "advgenerators:iron_wiring"
    })

    event.shaped("thermal:upgrade_augment_2", [
        "LEL",
        "QIQ",
        "LEL"
    ], {
        L: "#forge:ingots/lumium",
        I: "thermal:upgrade_augment_1",
        E: "#forge:gears/electrum",
        Q: "appliedenergistics2:quartz_vibrant_glass"
    })

    event.shaped("thermal:upgrade_augment_3", [
        "EPE",
        "HIH",
        "EPE"
    ], {
        E: "#forge:ingots/enderium",
        I: "thermal:upgrade_augment_2",
        P: "kubejs:platinum_gear",
        H: "thermal:obsidian_glass"
    })

    event.shaped("thermal:machine_refinery", [
        " P ",
        "HMH",
        "GCG"
    ], {
        H: "mekanism:hdpe_sheet",
        M: "thermal:machine_frame",
        G: "#forge:gears/lumium",
        C: "thermal:rf_coil",
        P: "kubejs:platinum_gear",
    })

    event.shaped("thermal:machine_pulverizer", [
        " P ",
        "FMF",
        "GCG"
    ], {
        F: "minecraft:flint",
        M: "thermal:machine_frame",
        G: "#forge:gears/signalum",
        C: "thermal:rf_coil",
        P: "minecraft:piston",
    })

    event.shaped("thermal:device_tree_extractor", [
        " P ",
        "CMC",
        "GSG"
    ], {
        C: "minecraft:cobblestone",
        M: "thermal:machine_frame",
        G: "#forge:gears/lumium",
        S: "thermal:redstone_servo",
        P: "kubejs:platinum_gear",
    })

    event.shaped("kubejs:elemental_dust", [
        "HHP",
        "CEP",
        "CAA"
    ], {
        H: "minecraft:blaze_powder",
        P: "thermal:basalz_powder",
        C: "thermal:blizz_powder",
        A: "thermal:blitz_powder",
        E: "envirocore:erodium_powder",
    })

    event.shaped("thermal:redstone_servo", [
        "SAS",
        " A ",
        "SAS"
    ], {
        S: 'emendatusenigmatica:signalum_plate',
        A: 'emendatusenigmatica:aluminum_rod'
    })

    // shapeless

    // machines
    
    event.recipes.thermal.bottler("emendatusenigmatica:signalum_ingot", [Fluid.of("thermal:redstone", 200), "kubejs:shibuichi_ingot"]).energy(1250)
    event.recipes.thermal.bottler("emendatusenigmatica:enderium_ingot", [Fluid.of("thermal:ender", 250), "kubejs:enderium_base_ingot"]).energy(1250)
    event.recipes.thermal.crucible(Fluid.of("thermal:redstone", 100), "mekanism:enriched_redstone").energy(1250)
    event.recipes.thermal.crucible(Fluid.of("emendatusenigmatica:molten_redstone", 100), "minecraft:redstone").energy(1250)
    event.recipes.thermal.crucible(Fluid.of("pneumaticcraft:molten_plastic", 500), "pneumaticcraft:plastic").energy(1250)
    event.recipes.thermal.crucible(Fluid.of("emendatusenigmatica:molten_redstone", 900), "minecraft:redstone_block").energy(11250)
    event.recipes.thermal.crucible(Fluid.of("thermal:ender", 1000), "kubejs:ender_cube").energy(1250)
    event.recipes.thermal.smelter("4x kubejs:solder_ingot", ["3x #forge:ingots/tin", "#forge:ingots/silver"]).energy(5000)
    event.recipes.thermal.smelter("4x kubejs:shibuichi_ingot", ["3x kubejs:annealed_copper_ingot", "#forge:ingots/silver"]).energy(5000)
    event.recipes.thermal.smelter("4x kubejs:enderium_base_ingot", ["kubejs:platinum_ingot", "3x #forge:ingots/lead", "kubejs:ender_rosin"]).energy(5000)
    event.recipes.thermal.smelter("4x kubejs:radiant_alloy", ["4x kubejs:solder_ingot", "mekanism:ingot_refined_glowstone", "create:refined_radiance"]).energy(5000)
    event.recipes.thermal.smelter("16x hostilenetworks:empty_prediction", ["kubejs:coated_fiberglass_wool", "emendatusenigmatica:aluminum_dust", "#forge:gems/silicon"]).energy(2500)
    event.recipes.thermal.smelter("3x kubejs:reinforced_ingot", ["#forge:ingots/signalum", "#forge:ingots/lumium", "#forge:ingots/enderium"]).energy(3750)
    event.recipes.thermal.smelter("3x create:chromatic_compound", ["4x emendatusenigmatica:obsidian_dust","4x emendatusenigmatica:quartz_dust","create:polished_rose_quartz"]).energy(3750)
    event.recipes.thermal.smelter("2x kubejs:mithril_ingot", ["kubejs:reinforced_ingot", "#forge:ingots/aluminum", "kubejs:elemental_dust"]).energy(2500)
    event.recipes.thermal.smelter('emendatusenigmatica:steel_ingot', ['minecraft:iron_ingot', 'emendatusenigmatica:coke_dust']).energy(1250)
    event.recipes.immersiveengineering.arc_furnace(["4x kubejs:shibuichi_ingot"], "3x kubejs:annealed_copper_ingot", ["#forge:ingots/silver"], "thermal:slag", 0.5, 15000)
    event.recipes.thermal.insolator("emendatusenigmatica:lumium_ingot", "kubejs:radiant_alloy").water(2000).energy(1250)
    event.recipes.thermal.pulverizer("emendatusenigmatica:ender_dust", ["minecraft:ender_pearl"]).energy(1250)
    event.recipes.mekanism.combining("kubejs:ender_rosin", "2x #forge:dusts/ender", "thermal:rosin") 

    //json
    
    })