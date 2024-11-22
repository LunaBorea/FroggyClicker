import enemies from "./enemies.js"

const clicks = document.getElementById('counterclick')
const element = document.getElementById("countervalue")
const kills = document.getElementById("frogLevelKills")
const gold = document.getElementById("goldAmount")
let counter = 10
let enemyKills = 0
let goldIngots = 0

    // level1 frog

function frogClick(){  
    if(counter > 0){
        counter--
    }
    element.innerHTML = counter + ' HP'
    if(counter == 0){
        frogKills()
        goldDrop()
    }
}

// function for frog kills
function frogKills(){
    if(counter == 0){
        enemyKills++
        kills.innerHTML = `${enemyKills}/10 ☠`
    }
    // spawn level 2 frog
    if(enemyKills >= 10){
        const enemyLevelTwo = enemies[1]

        counter = enemyLevelTwo.stats.hp
        clicks.src = "/images/level2frog.jpg"
        kills.innerHTML = `${enemyKills}/25 ☠`
        frogClick()
    }
    else{
        respawnEnemiesLevelOne()
    }
}

// function for respawning enemies level 1

function respawnEnemiesLevelOne(){
    const enemyLevelOne = enemies[0]
    counter = enemyLevelOne.stats.hp
    clicks.src = "/images/frog.png"
    element.innerHTML = `${counter} HP`
}

// function for gold drop

function goldDrop(){
    const randomgoldlevelone = Math.floor(Math.random() * enemies[0].stats.gold.length)
    gold.innerHTML = `${randomgoldlevelone}`
}

clicks.addEventListener("click", frogClick)







