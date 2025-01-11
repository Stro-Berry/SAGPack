// priority: 0

onEvent("recipes", event => {

    // removals
    
    event.remove({output: "electrodynamics:coalgenerator"})
    event.remove({output: "electrodynamics:circuitbasic"})
    event.remove({output: "electrodynamics:circuitadvanced"})
    event.remove({output: "electrodynamics:circuitelite"})
    event.remove({output: "electrodynamics:circuitultimate"})
    event.remove({output: "electrodynamics:coil"})
    event.remove({output: "electrodynamics:motor"})
    event.remove({output: "electrodynamics:wiremill"})
    event.remove({output: "electrodynamics:upgradetransformer"})
    event.remove({output: "electrodynamics:downgradetransformer"})
    event.remove({output: "electrodynamics:mineralgrinder"})
    event.remove({output: "electrodynamics:lathe"})
    event.remove({output: "electrodynamics:chemicalmixer"})
    event.remove({output: "electrodynamics:mineralcrusher"})
    event.remove({output: "electrodynamics:oxidationfurnace"})
    event.remove({output: "electrodynamics:compositeplatingraw"})
    event.remove({output: "electrodynamics:ceramicplate"})
    event.remove({output: "electrodynamics:chemicalcrystallizer"})
    event.remove({output: "electrodynamics:energizedalloyer"})
    event.remove({output: "electrodynamics:reinforcedalloyer"})
    event.remove({output: "electrodynamics:mineralwasher"})
    event.remove({output: "dynamicelectricity:motordclv"})
    event.remove({output: "dynamicelectricity:alternator"})
    event.remove({output: "dynamicelectricity:stator"})
    event.remove({output: 'electrodynamics:wirecopper'})
    event.remove({output: 'electrodynamics:wireiron'})
    event.remove({output: 'electrodynamics:wiregold'})
    event.remove({id: "electrodynamics:do2o/oxidationfurnace/sodium_carbonatecharcoal"})
    event.remove({id: "electrodynamics:do2o/oxidationfurnace/sodium_carbonate"})
    event.remove({id: "electrodynamics:itemfluid2fluid/chemicalmixer/sulfuric_acid"})
    event.remove({id: "electrodynamics:dustsuperconductive"})
    event.remove({id: 'electrodynamics:fluid2item/chemicalcrystallizer/plastic_sheet'})
    // shaped
    
    event.shaped("kubejs:reinforced_casing", [
        "MMM",
        "MTM",
        "MMM"
    ], {
        M: "kubejs:mithril_ingot",
        T: "thermal:machine_frame"
    })
    event.shaped("electrodynamics:coalgenerator", [
        "GEG",
        "MFM",
        "PPP"
    ], {
        E: "#forge:gears/enderium",
        G: "thermal:enderium_glass",
        M: "electrodynamics:motor",
        P: "tetra:vent_plate",
        F: "kubejs:reinforced_casing"
    })
    event.shaped("electrodynamics:circuitbasic", [
        "WSW",
        "SAS",
        "WSW"
    ], {
        W: "electrodynamics:wireinsulatedtin",
        S: "emendatusenigmatica:signalum_plate",
        A: "mekanism:advanced_control_circuit"
    })
    event.shaped("electrodynamics:circuitadvanced", [
        "WCW",
        "CBC",
        "WCW"
    ], {
        W: "electrodynamics:wireiron",
        B: "electrodynamics:circuitbasic",
        C: "electrodynamics:oxidechromite"
    })
    event.shaped("electrodynamics:circuitelite", [
        "WWW",
        "CAC",
        "WWW"
    ], {
        W: "electrodynamics:wireinsulatedcopper",
        A: "electrodynamics:circuitadvanced",
        C: "electrodynamics:compositeplating"
    })
    event.shaped("electrodynamics:circuitultimate", [
        "CSC",
        "WEW",
        "CSC"
    ], {
        W: "electrodynamics:wireceramicinsulatedgold",
        S: "electrodynamics:wireceramicinsulatedsilver",
        E: "electrodynamics:circuitelite",
        C: "#forge:ingots/chromium"
    })
    event.shaped("electrodynamics:coil", [
        "CSC",
        "IRI",
        "CSC"
    ], {
        C: "electrodynamics:wirecopper",
        S: "#forge:rods/signalum",
        I: "pneumaticcraft:ingot_iron_compressed",
        R: "thermal:rf_coil"
    })
    event.shaped("electrodynamics:motor", [
        "CTC",
        "ERL",
        "CTC"
    ], {
        C: "electrodynamics:wirecopper",
        T: "electrodynamics:wireinsulatedtin",
        E: "#forge:rods/enderium",
        R: "electrodynamics:coil",
        L: "#forge:gears/lumium"
    })
    event.shaped("electrodynamics:wiremill", [
        "MBM",
        "LFL",
        "MBM"
    ], {
        M: "electrodynamics:motor",
        B: "electrodynamics:circuitbasic",
        F: "kubejs:reinforced_casing",
        L: "#forge:gears/lumium"
    })
    event.shaped("electrodynamics:upgradetransformer", [
        "WBW",
        "CFC",
        "PBP"
    ], {
        W: "electrodynamics:wireinsulatedtin",
        B: "electrodynamics:circuitbasic",
        C: "electrodynamics:coil",
        F: "kubejs:reinforced_casing",
        P: "tetra:vent_plate"
    })
    event.shaped("electrodynamics:upgradetransformer", [
        "WBW",
        "GFG",
        "MBM"
    ], {
        W: "electrodynamics:wireinsulatediron",
        B: "electrodynamics:circuitbasic",
        G: "#forge:gears/signalum",
        F: "kubejs:reinforced_casing",
        M: "electrodynamics:motor"
    })
    event.shaped("dynamicelectricity:motordclv", [
        "WAM", // (detotated)
        "SFN",
        "WAM"
    ], {
        W: "electrodynamics:wireiron",
        A: "electrodynamics:circuitadvanced",
        S: "dynamicelectricity:stator",
        N: "dynamicelectricity:alternator",
        F: "kubejs:reinforced_casing",
        M: "electrodynamics:motor"
    })
    event.shaped("electrodynamics:lathe", [
        "PAP",
        "MFM",
        "PAP"
    ], {
        M: "electrodynamics:motor",
        A: "electrodynamics:circuitadvanced",
        P: "#forge:plates/aluminum",
        F: "kubejs:reinforced_casing",
    })
        event.shaped("electrodynamics:lathe", [
        "PAP",
        "MFM",
        "PAP"
    ], {
        M: "electrodynamics:motor",
        A: "electrodynamics:circuitadvanced",
        P: "#forge:plates/aluminum",
        F: "kubejs:reinforced_casing",
    })
    event.shaped("dynamicelectricity:alternator", [
        "WCW",
        "SRS",
        "WCW"
    ], {
        W: "electrodynamics:wireinsulatedtin",
        S: "#forge:rods/signalum",
        C: "electrodynamics:coil",
        R: "dynamicelectricity:shaftsteel"
    })
    event.shaped("dynamicelectricity:stator", [
        "PCP",
        "CRC",
        "PCP"
    ], {
        R: "dynamicelectricity:ringsteel",
        C: "electrodynamics:coil",
        P: "#forge:plates/copper",
    })
    event.shaped("2x electrodynamics:compositeplatingraw", [
        "CCC",
        "MMM",
        "PPP"
    ], {
        C: "electrodynamics:ceramicplate",
        M: "kubejs:mithril_ingot",
        P: "kubejs:polyvinyl_chloride",
    })
    event.shaped("electrodynamics:chemicalcrystallizer", [
        "PAP",
        "SFS",
        "PAP"
    ], {
        S: "#forge:gems/silicon",
        A: "electrodynamics:circuitadvanced",
        P: "#forge:plates/aluminum",
        F: "kubejs:reinforced_casing",
    })
    event.shaped("electrodynamics:chemicalmixer", [
        "LAL",
        "MFR",
        "PAP"
    ], {
        M: "electrodynamics:motor",
        A: "electrodynamics:circuitadvanced",
        P: "#forge:plates/aluminum",
        F: "kubejs:reinforced_casing",
        L: "#forge:gears/lumium",
        R: "dynamicelectricity:ringsteel"
    })
    event.shaped("electrodynamics:energizedalloyer", [
        "PEP",
        "GFG",
        "PEP"
    ], {
        E: "electrodynamics:circuitelite",
        P: "electrodynamics:compositeplating",
        F: "kubejs:reinforced_casing",
        G: "kubejs:fiberglass"
    })
    event.shaped("electrodynamics:mineralwasher", [
        "PEP",
        "WFW",
        "PEP"
    ], {
        E: "electrodynamics:circuitelite",
        P: "electrodynamics:compositeplating",
        F: "kubejs:reinforced_casing",
        W: "minecraft:water_bucket"
    })
    event.shaped("electrodynamics:reinforcedalloyer", [
        "PUP",
        "NFN",
        "PUP"
    ], {
        U: "electrodynamics:circuitultimate",
        P: "#forge:plates/vanadiumsteel",
        F: "kubejs:reinforced_casing",
        N: "ironfurnaces:netherite_furnace"
    })
    event.shaped("electrodynamics:mineralcrusher", [
        "EAE",
        "SFS",
        "EAE"
    ], {
        E: "emendatusenigmatica:enderium_gear",
        A: "electrodynamics:circuitadvanced",
        F: "kubejs:reinforced_casing",
        S: "dynamicelectricity:shaftsteel"
    })
    event.shaped("electrodynamics:oxidationfurnace", [
        "PAP",
        "CFC",
        "PAP"
    ], {
        C: "electrodynamics:coil",
        A: "electrodynamics:circuitadvanced",
        P: "#forge:plates/aluminum",
        F: "kubejs:reinforced_casing",
    })

    // shapeless
    
    event.shapeless("electrodynamics:upgradetransformer", "electrodynamics:downgradetransformer")
    event.shapeless("electrodynamics:downgradetransformer", "electrodynamics:upgradetransformer")
    event.shapeless("kubejs:superconducting_layer", ["kubejs:ender_substrate", "kubejs:superconducting_blend"])

    // machines
    
    event.recipes.thermal.bottler("electrodynamics:wireinsulatedtin", [Fluid.of("pneumaticcraft:plastic", 1000), "electrodynamics:wiretin"]).energy(10000)
    event.recipes.thermal.press("electrodynamics:wiretin", ["2x #forge:ingots/tin", "immersiveengineering:mold_wire"]).energy(10000)
    event.recipes.thermal.press("electrodynamics:wirecopper", ["2x kubejs:annealed_copper_ingot", "immersiveengineering:mold_wire"]).energy(10000)
    event.recipes.thermal.pulverizer("kubejs:titanium_dust", "electrodynamics:ingottitanium").energy(10000)
    event.recipes.thermal.pulverizer("kubejs:chromium_dust", "electrodynamics:ingotchromium").energy(10000)
    event.recipes.mekanism.crushing("kubejs:titanium_dust", "electrodynamics:ingottitanium")
    event.recipes.mekanism.crushing("kubejs:chromium_dust", "electrodynamics:ingotchromium")
    event.recipes.createMixing("kubejs:sodium_bicarbonate", ["mekanism:salt", "kubejs:limestone_dust", Fluid.of("minecraft:water", 100), Fluid.of("kubejs:liquid_carbon_dioxide", 100)])
    event.recipes.thermal.smelter(["4x kubejs:chromium_dust", "kubejs:alumina"], ["4x kubejs:chromiumiii_oxide", "emendatusenigmatica:aluminum_dust"]).energy(10000)
    event.smelting("electrodynamics:ingottitanium", "kubejs:titanium_dust")
    event.smelting("electrodynamics:ingotchromium", "kubejs:chromium_dust")
    //json

    event.custom({
        "type":"electrodynamics:mineral_crusher_recipe",
    
        "input":{
            "item":"electrodynamics:ceramiccooked",
            "count":4
        },
        "output":{
            "item":"electrodynamics:ceramicplate",
            "count":1
        }
    })
    event.custom({
        "type":"electrodynamics:mineral_crusher_recipe",
    
        "input":{
            "item":"electrodynamics:dustendereye",
            "count":1
        },
        "output":{
            "item":"kubejs:ender_substrate",
            "count":1
        }
    })
    event.custom({
        "type":"electrodynamics:oxidation_furnace_recipe",
    
        "input1":{
            "tag":"forge:ingots/lead",
            "count":1
        },
        "input2":{
            "tag":"forge:gems/coke",
            "count":1
        },
        "output":{
            "item":"kubejs:leadii_oxide",
            "count":1
        }
    })
    event.custom({
        "type":"electrodynamics:oxidation_furnace_recipe",
    
        "input1":{
            "item":"kubejs:chromite_dust",
            "count":1
        },
        "input2":{
            "item":"electrodynamics:oxidesodiumcarbonate",
            "count":1
        },
        "output":{
            "item":"kubejs:sodium_chromate",
            "count":1
        }
    })
    event.custom({
        "type":"electrodynamics:wire_mill_recipe",
        "input":{
            "item": "kubejs:annealed_copper_ingot",
            "count": 1
        },
        "output":{
            "item":"electrodynamics:wirecopper",
            "count": 1
        }
    })
    event.custom({
        "type":"electrodynamics:wire_mill_recipe",
        "input":{
            "item": "naturesaura:tainted_gold",
            "count": 1
        },
        "output":{
            "item":"electrodynamics:wiregold",
            "count": 1
        }
    })
    event.custom({
        "type":"electrodynamics:wire_mill_recipe",
        "input":{
            "tag": "forge:ingots/compressed_iron",
            "count": 1
        },
        "output":{
            "item":"electrodynamics:wireiron",
            "count": 1
        }
    })
    

    event.custom({"type":"mekanism:reaction","itemInput":{"item":"kubejs:sodium_chromate"},"fluidInput":{"amount":100,"fluid":"mekanism:sulfuric_acid"},"gasInput":{"amount":100,"gas":"mekanism:oxygen"},"duration":100,"itemOutput":{"item":"kubejs:sodium_dichromate"}})
    event.custom({"type":"mekanism:reaction","itemInput":{"tag":"forge:dusts/sulfur"},"fluidInput":{"amount":1000,"fluid":"emendatusenigmatica:molten_copper"},"gasInput":{"amount":250,"gas":"mekanism:hydrogen"},"duration":100,"gasOutput":{"amount":1000,"gas":"kubejs:copper_sulfide"}})
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"kubejs:superconducting_layer"},"fluidInput":{"amount":5,"fluid":"kubejs:liquid_carbon_dioxide"},"gasInput":{"amount":50,"gas":"kubejs:copper_sulfide"},"duration":100,"itemOutput":{"item":"kubejs:superconducting_sheet"}})
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"kubejs:superconducting_sheet"},"fluidInput":{"amount":5,"fluid":"kubejs:liquid_carbon_dioxide"},"gasInput":{"amount":50,"gas":"kubejs:copper_sulfide"},"duration":100,"itemOutput":{"item":"kubejs:superconducting_slab"}})
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"kubejs:superconducting_slab"},"fluidInput":{"amount":5,"fluid":"kubejs:liquid_carbon_dioxide"},"gasInput":{"amount":50,"gas":"kubejs:copper_sulfide"},"duration":100,"itemOutput":{"item":"kubejs:superconducting_bar"}})
    event.custom({"type":"mekanism:reaction","itemInput":{"item":"kubejs:superconducting_bar"},"fluidInput":{"amount":5,"fluid":"kubejs:liquid_carbon_dioxide"},"gasInput":{"amount":50,"gas":"kubejs:copper_sulfide"},"duration":100,"itemOutput":{"item":"electrodynamics:ingotsuperconductive"}})
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "tag": "minecraft:coals"
        },
        "fluid_output": {
          "fluid": "kubejs:liquid_carbon_dioxide",
          "amount": 250
        },
        "temperature": {
            "min_temp": 1273
        },
        "pressure": 1,
        "speed": 0.5,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:sodium_bicarbonate"
        },
        "item_output": {
            "item": "electrodynamics:oxidesodiumcarbonate"
          },
        "temperature": {
            "min_temp": 1023
        },
        "pressure": 1,
        "speed": 0.5,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "tag": "forge:dusts/sulfur"
        },
        "fluid_output": {
            "fluid": "mekanism:sulfur_dioxide",
            "amount": 100
        },
        "temperature": {
            "min_temp": 1023
        },
        "pressure": 1,
        "speed": 0.5,
        "exothermic": false
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "electrodynamics:oxidevanadium"
        },
        "item_output": {
            "item": "electrodynamics:oxidevanadium"
          },
        "temperature": {
            "min_temp": 723
        },
        "fluid_output": {
            "fluid": "mekanism:sulfur_trioxide",
            "amount": 100
        },
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "fluid": "mekanism:sulfur_dioxide",
            "amount": 100
        },
        
        "pressure": 1.5,
        "speed": 0.5,
        "exothermic": false
    })
    event.custom({
        "type":"electrodynamics:reinforced_alloyer_recipe",
    
        "input1":{
            "item":"kubejs:leadii_oxide",
            "count":5
        },
        "input2":{
            "tag":"forge:dusts/apatite",
            "count":3
        },
        "output":{
            "item":"kubejs:superconducting_blend",
            "count":8
        }
    })
    event.custom({
        "type":"electrodynamics:energized_alloyer_recipe",
    
        "input1":{
            "item":"kubejs:sodium_dichromate",
            "count":1
        },
        "input2":{
            "tag":"forge:dusts/coke",
            "count":1
        },
        "output":{
            "item":"kubejs:chromiumiii_oxide",
            "count":1
        }
    })

    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:vinyl_chloride",
          "amount": 250
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:distilled_water",
          "amount": 1000
        },
        "item_output": {
            "item": "kubejs:polyvinyl_chloride_powder",
            "count": 1
          },
        "pressure": 4.0,
        "time": 30
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:polyvinyl_chloride_powder"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:diisobutyl_phthalate",
          "amount": 125
        },
        "item_output": {
          "item": "kubejs:polyvinyl_chloride",
          "count": 1
        },
        "temperature": {
          "min_temp": 1023
        },
        "pressure": 4.0,
        "speed": 0.5,
        "exothermic": false
      })
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "mekanism:ethene",
          "amount": 250
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "mekanism:chlorine",
          "amount": 250
        },
        "fluid_output": {
            "fluid": "kubejs:vinyl_chloride",
            "amount": 250
        },
        "pressure": 4.0,
        "time": 30
    })
    event.custom({
        "type": "electrodynamics:chemical_mixer_recipe",
        "item_input": {
            "item": "kubejs:phthalic_anhydride",
            "count": 1
        },
        "fluid_input": {
            "fluid": "kubejs:isobutanol",
            "amount": 1000
        },
        "fluid_output": {
            "fluid": "kubejs:diisobutyl_phthalate",
            "amount": 1000
        }
    })
    event.recipes.thermal.refinery([Fluid.of('kubejs:carbon_monoxide', 250), Fluid.of('mekanism:hydrogen', 250)], Fluid.of('advgenerators:syngas', 250)).energy(8000)
    event.recipes.thermal.refinery('kubejs:naphthalene', Fluid.of('immersiveengineering:creosote', 250)).energy(8000)
    event.recipes.thermal.refinery('kubejs:naphthalene', Fluid.of('thermal:creosote', 250)).energy(8000)
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:propylene",
          "amount": 1000
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "kubejs:carbon_monoxide",
          "amount": 1000
        },
        "fluid_output": {
            "fluid": "kubejs:isobutanol",
            "amount": 1000
        },
        "pressure": 4.0,
        "time": 30
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "kubejs:naphthalene"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "mekanism:oxygen",
          "amount": 1000
        },
        "item_output": {
          "item": "kubejs:phthalic_anhydride",
          "count": 1
        },
        "temperature": {
          "min_temp": 1273
        },
        "pressure": 4.0,
        "speed": 0.5,
        "exothermic": false
      })
})