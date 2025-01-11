events.listen('recipes', (event) => {
    const runes = [
        "fire",
        "water",
        "earth",
        "air",
        "mana",
        "winter",
        "spring",
        "summer",
        "autumn",
        "pride",
        "gluttony",
        "sloth",
        "wrath",
        "lust",
        "envy",
        "greed"
    ]
    runes.forEach(rune => {
        event.replaceInput({}, `botania:rune_${rune}`, `kubejs:rune_${rune}`)
        event.replaceInput({}, `botania:runes/${rune}`, `kubejs:rune_${rune}`)
    })
})
onEvent('recipes', event => {
    const removeOutput = [

    ]
    const apothecaryRemove = [
        "bubbell",
        "hyacidus",
        "jiyuulia",
        "narslimmus",
        "spectranthemum",
        "vinculotus",
        "tigerseye",
        "agricarnation",
        "clayconia",
        "daffomill",
        "entropinnyum",
        "exoflame",
        "fallen_kanade",
        "gourmaryllis",
        "heisei_dream",
        "hopperhock",
        "hyacidus",
        "kekimurus",
        "labellia",
        "loonium",
        "marimorphosis",
        "medumone",
        "munchdew",
        "pollidisiac",
        "rafflowsia",
        "rannuncarpus",
        "rosa_arcana",
        "solegnolia",
        "spectrolus",
        "tangleberrie",
        "thermalily"
    ]
    apothecaryRemove.forEach(remove => {
        event.remove({id: `botania:petal_apothecary/${remove}`})
    })
    event.remove({id: "mythicbotany:petal_apothecary/exoblaze"})
    event.remove({id: "mythicbotany:petal_apothecary/hellebore"})
    event.remove({id: "mythicbotany:petal_apothecary/raindeletia"})
    event.remove({id: "extrabotany:petal_apothecary/annoyingflower"})
    event.remove({id: "extrabotany:petal_apothecary/bloodyenchantress"})
    event.remove({id: "extrabotany:petal_apothecary/edelweiss"})
    event.remove({id: "extrabotany:petal_apothecary/omniviolet"})
    event.remove({id: "extrabotany:petal_apothecary/reikarlily"})
    event.remove({id: "extrabotany:petal_apothecary/serenitian"})
    event.remove({id: "extrabotany:petal_apothecary/tinkleflower"})
    event.remove({id: "extrabotany:elementrune"})
    event.remove({id: "extrabotany:sinrune"})
    event.remove({output: "extrabotany:shootingguardian_boots"})
    event.remove({output: "botania:terrasteel_boots"})
    event.remove({output: "extrabotany:shootingguardian_legs"})
    event.remove({output: "botania:terrasteel_leggings"})
    event.remove({output: "extrabotany:shootingguardian_chest"})
    event.remove({output: "botania:terrasteel_chestplate"})
    event.remove({output: "extrabotany:shootingguardian_helm"})
    event.remove({output: "botania:terrasteel_helmet"})
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:agricarnation"
        },
        "ingredients": [
          {
            "tag": "botania:petals/lime"
          },
          {
            "tag": "botania:petals/lime"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "item": "kubejs:rune_spring"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:annoyingflower"
        },
        "ingredients": [
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "item": "kubejs:rune_mana"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:bloodyenchantress"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "item": "kubejs:rune_fire"
          },
          {
            "item": "kubejs:rune_summer"
          },
          {
            "item": "kubejs:rune_wrath"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:bubbell"
        },
        "ingredients": [
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/light_blue"
          },
          {
            "tag": "botania:petals/light_blue"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "item": "kubejs:rune_water"
          },
          {
            "item": "kubejs:rune_summer"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:clayconia"
        },
        "ingredients": [
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "item": "kubejs:rune_earth"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:daffomill"
        },
        "ingredients": [
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/brown"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "item": "kubejs:rune_air"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:edelweiss"
        },
        "ingredients": [
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "item": "kubejs:rune_winter"
          },
          {
            "item": "kubejs:rune_mana"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:entropinnyum"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "item": "kubejs:rune_wrath"
          },
          {
            "item": "kubejs:rune_fire"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "mythicbotany:exoblaze"
        },
        "ingredients": [
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "item": "kubejs:rune_fire"
          },
          {
            "item": "minecraft:blaze_powder"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:exoflame"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "item": "kubejs:rune_fire"
          },
          {
            "item": "kubejs:rune_summer"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:fallen_kanade"
        },
        "ingredients": [
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "item": "kubejs:rune_spring"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:gourmaryllis"
        },
        "ingredients": [
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "item": "kubejs:rune_fire"
          },
          {
            "item": "kubejs:rune_summer"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:heisei_dream"
        },
        "ingredients": [
          {
            "tag": "botania:petals/magenta"
          },
          {
            "tag": "botania:petals/magenta"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "item": "kubejs:rune_wrath"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "mythicbotany:hellebore"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "item": "kubejs:rune_fire"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:hopperhock"
        },
        "ingredients": [
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "item": "kubejs:rune_air"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:hyacidus"
        },
        "ingredients": [
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/magenta"
          },
          {
            "tag": "botania:petals/magenta"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "item": "kubejs:rune_water"
          },
          {
            "item": "kubejs:rune_autumn"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:jiyuulia"
        },
        "ingredients": [
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "item": "kubejs:rune_water"
          },
          {
            "item": "kubejs:rune_air"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:kekimurus"
        },
        "ingredients": [
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "tag": "botania:petals/brown"
          },
          {
            "tag": "botania:petals/brown"
          },
          {
            "item": "kubejs:rune_gluttony"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:labellia"
        },
        "ingredients": [
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/black"
          },
          {
            "item": "kubejs:rune_autumn"
          },
          {
            "item": "botania:redstone_root"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:loonium"
        },
        "ingredients": [
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "item": "kubejs:rune_sloth"
          },
          {
            "item": "kubejs:rune_gluttony"
          },
          {
            "item": "kubejs:rune_envy"
          },
          {
            "item": "botania:redstone_root"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:marimorphosis"
        },
        "ingredients": [
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "item": "kubejs:rune_earth"
          },
          {
            "item": "kubejs:rune_fire"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:medumone"
        },
        "ingredients": [
          {
            "tag": "botania:petals/brown"
          },
          {
            "tag": "botania:petals/brown"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "item": "kubejs:rune_earth"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:medumone"
        },
        "ingredients": [
          {
            "tag": "botania:petals/lime"
          },
          {
            "tag": "botania:petals/lime"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "item": "kubejs:rune_gluttony"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:narslimmus"
        },
        "ingredients": [
          {
            "tag": "botania:petals/lime"
          },
          {
            "tag": "botania:petals/lime"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/black"
          },
          {
            "item": "kubejs:rune_summer"
          },
          {
            "item": "kubejs:rune_water"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:omniviolet"
        },
        "ingredients": [
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "item": "kubejs:rune_spring"
          },
          {
            "item": "kubejs:rune_mana"
          },
          {
            "item": "kubejs:rune_lust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:pollidisiac"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "item": "kubejs:rune_lust"
          },
          {
            "item": "kubejs:rune_fire"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:rafflowsia"
        },
        "ingredients": [
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/black"
          },
          {
            "item": "kubejs:rune_earth"
          },
          {
            "item": "kubejs:rune_pride"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "mythicbotany:raindeletia"
        },
        "ingredients": [
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/magenta"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "item": "kubejs:rune_water"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:rannuncarpus"
        },
        "ingredients": [
          {
            "tag": "botania:petals/orange"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "tag": "botania:petals/yellow"
          },
          {
            "item": "kubejs:rune_earth"
          },
          {
            "item": "botania:redstone_root"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:reikarlily"
        },
        "ingredients": [
          {
            "tag": "botania:petals/light_blue"
          },
          {
            "tag": "botania:petals/light_blue"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "item": "kubejs:rune_pride"
          },
          {
            "item": "kubejs:rune_sloth"
          },
          {
            "item": "kubejs:rune_envy"
          },
          {
            "item": "botania:life_essence"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:rosa_arcana"
        },
        "ingredients": [
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/pink"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/lime"
          },
          {
            "item": "kubejs:rune_mana"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:serenitian"
        },
        "ingredients": [
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "item": "kubejs:rune_mana"
          },
          {
            "item": "kubejs:rune_sloth"
          },
          {
            "item": "kubejs:rune_greed"
          },
          {
            "item": "botania:life_essence"
          },
          {
            "item": "minecraft:wither_rose"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:spectranthemum"
        },
        "ingredients": [
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "item": "kubejs:rune_envy"
          },
          {
            "item": "kubejs:rune_water"
          },
          {
            "item": "botania:redstone_root"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:spectrolus"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "tag": "botania:petals/white"
          },
          {
            "item": "kubejs:rune_winter"
          },
          {
            "item": "kubejs:rune_air"
          },
          {
            "item": "botania:pixie_dust"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:tangleberrie"
        },
        "ingredients": [
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/cyan"
          },
          {
            "tag": "botania:petals/gray"
          },
          {
            "tag": "botania:petals/light_gray"
          },
          {
            "item": "kubejs:rune_air"
          },
          {
            "item": "kubejs:rune_earth"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:thermalily"
        },
        "ingredients": [
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "item": "kubejs:rune_earth"
          },
          {
            "item": "kubejs:rune_fire"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:tigerseye"
        },
        "ingredients": [
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/brown"
          },
          {
            "tag": "botania:petals/orange"
          },
          {
            "tag": "botania:petals/lime"
          },
          {
            "item": "kubejs:rune_autumn"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "extrabotany:tinkleflower"
        },
        "ingredients": [
          {
            "tag": "botania:petals/yellow"
          },
          {
            "tag": "botania:petals/red"
          },
          {
            "tag": "botania:petals/brown"
          },
          {
            "tag": "botania:petals/blue"
          },
          {
            "item": "kubejs:rune_earth"
          },
          {
            "item": "kubejs:rune_water"
          }
        ]
    })
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "botania:vinculotus"
        },
        "ingredients": [
          {
            "tag": "botania:petals/black"
          },
          {
            "tag": "botania:petals/black"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/purple"
          },
          {
            "tag": "botania:petals/green"
          },
          {
            "item": "kubejs:rune_water"
          },
          {
            "item": "kubejs:rune_sloth"
          },
          {
            "item": "kubejs:rune_lust"
          }
        ]
    })
    event.shaped("extrabotany:shootingguardian_boots", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_winter",
        A: "extrabotany:aerialite",
        Z: "botania:manasteel_boots"
    })
    event.shaped("botania:terrasteel_leggings", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_winter",
        A: "botania:terrasteel_ingot",
        Z: "botania:manasteel_boots"
    })
    event.shaped("extrabotany:shootingguardian_legs", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_autumn",
        A: "extrabotany:aerialite",
        Z: "botania:manasteel_leggings"
    })
    event.shaped("botania:terrasteel_leggings", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_autumn",
        A: "botania:terrasteel_ingot",
        Z: "botania:manasteel_leggings"
    })
    event.shaped("extrabotany:shootingguardian_chest", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_summer",
        A: "extrabotany:aerialite",
        Z: "botania:manasteel_chestplate"
    })
    event.shaped("botania:terrasteel_chestplate", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_summer",
        A: "botania:terrasteel_ingot",
        Z: "botania:manasteel_chestplate"
    })
    event.shaped("extrabotany:shootingguardian_helm", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_spring",
        A: "extrabotany:aerialite",
        Z: "botania:manasteel_helmet"
    })
    event.shaped("botania:terrasteel_helmet", [
        "LRL",
        "AZA",
        " A "
    ], {
        L: "botania:livingwood_twig",
        R: "kubejs:rune_spring",
        A: "botania:terrasteel_ingot",
        Z: "botania:manasteel_helmet"
    })
})