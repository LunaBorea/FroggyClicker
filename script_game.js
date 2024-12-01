import enemies from "./enemies.js"
import swords from "./upgrades.js"

const EnemyName = document.querySelector(".frogTitle")
const clicks = document.getElementById('counterclick')
const element = document.getElementById("countervalue")
const kills = document.getElementById("frogLevelKills")
const gold = document.getElementById("goldAmount")
let counter = 10
let enemyKills = 0
let goldIngots = 0
let damagePerHit = 1
let enemy = 0

    // level1 frog

function frogClick(){  
    if(counter > 0){
        counter -= damagePerHit
    }
    element.innerHTML = counter + ' HP'
    if(counter <= 0){
        frogKills()
    }
    
}

// function for enemy Level One gold

function EnemygoldDrop(){
    const randomgold = Math.floor(Math.random() * enemies[enemy].stats.gold.length)

    const goldDropped = enemies[enemy].stats.gold[randomgold]
    goldIngots += goldDropped
    gold.innerHTML = `${goldIngots}`
}

// function for frog kills
function frogKills(){
    enemyKills++
    const enemyObject = enemies[enemy]
    if(enemyKills >= enemyObject.count){
        enemy++
        enemyKills = 0
    }
    EnemygoldDrop()
    respawnEnemy()
}

// function for respawning enemies

function respawnEnemy(){
    const enemyObject = enemies[enemy]
    counter = enemyObject.stats.hp
    clicks.src = enemyObject.img
    element.innerHTML = `${counter} HP`
    kills.innerHTML = `${enemyKills}/${enemyObject.count} ☠`
    EnemyName.innerHTML = enemyObject.name
}

// swordupgrade

let costForSwordUpgrade = 15

const swordType = document.querySelectorAll(".swordType")
const swordUpgradeButton = document.getElementById("swordUpgrade-btn")
const swordGoldDisplay = document.getElementById("swordGold")

// function for sword upgrade

let swordLevel = 0

function swordUpgrade(){
    if(goldIngots >= costForSwordUpgrade){
        swordLevel++
        damagePerHit++
        goldIngots -= costForSwordUpgrade
        costForSwordUpgrade = Math.floor(costForSwordUpgrade * 2)
        gold.innerHTML = goldIngots
        swordGoldDisplay.innerHTML = costForSwordUpgrade
        swordType.forEach(sword => {
            sword.innerHTML = `${swords[swordLevel].swordtype}`
        })
    } else {
        alert("You dont have enough Gold")
    }
    
}

// mercenary upgrade

const mercAmount = document.getElementById("mercAmount")
const merButton = document.getElementById("mercButton")
const mercGold = document.getElementById("mercCost")

let costForMerc = 50
let mercBoughts = 0
let mercDamagePerSec = 0
let mercInterval


function mercenaryUpgrade(){
    if(goldIngots >= costForMerc){
        clearInterval(mercInterval)
        mercDamagePerSec++
        goldIngots -= costForMerc
        gold.innerHTML = goldIngots
        costForMerc = Math.floor(costForMerc * 1.5)
        mercGold.innerHTML = costForMerc
        mercInterval = setInterval(mercenaryInterval, 1000)
        mercBoughts++
        mercAmount.innerHTML = mercBoughts
    }
    else{
        alert("You dont have enough gold")
    }
}

// function for starting interval after bought upgrade

function mercenaryInterval(){
    counter -= mercDamagePerSec
    element.innerHTML = counter + ' HP'
    if(counter <= 0){
        frogKills()
    }
}

merButton.addEventListener("click", mercenaryUpgrade)
swordUpgradeButton.addEventListener("click", swordUpgrade)
clicks.addEventListener("click", frogClick)