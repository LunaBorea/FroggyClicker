import enemies from "./enemies.js"

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
        EnemygoldDrop()
    }
    
}

// function for enemy Level One gold

function EnemygoldDrop(){
    const randomgoldlevelone = Math.floor(Math.random() * enemies[0].stats.gold.length)

    const goldDropped = enemies[enemy].stats.gold[randomgoldlevelone]
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

function swordUpgrade(){
    if(goldIngots >= costForSwordUpgrade){
        damagePerHit++
        goldIngots -= costForSwordUpgrade
        costForSwordUpgrade = Math.floor(costForSwordUpgrade * 2)
        gold.innerHTML = goldIngots
        swordGoldDisplay.innerHTML = costForSwordUpgrade
        swordType.forEach(sword => {
            sword.innerHTML = "Stone"
        })
    } else {
        alert("You dont have enough Gold")
    }
    
}


swordUpgradeButton.addEventListener("click", swordUpgrade)
clicks.addEventListener("click", frogClick)








