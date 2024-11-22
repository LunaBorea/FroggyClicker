const clicks = document.getElementById('counterclick')
const element = document.getElementById("countervalue")
const kills = document.getElementById("frogLevelKills")
let counter = 10
let enemyKills = 0


    // level1 frog

function frogClick(){  
    if(counter > 0){
        counter--
    }
    element.innerHTML = counter + ' HP'
    if(counter == 0){
        frogKills()
    }
}

// function for frog kills

function frogKills(){
    if(counter == 0){
        enemyKills++
        kills.innerHTML = `${enemyKills}/10 ☠`
    }
    if(enemyKills >= 10){
        counter = 20
        clicks.src = "/images/level2frog.jpg"
        kills.innerHTML = `${enemyKills}/25 ☠`
        frogClick()
    }
    else{
        respawnEnemies()
    }
}

// function for respawning enemies level 1

function respawnEnemies(){
    counter = 10
    clicks.src = "/images/frog.png"
    element.innerHTML = `${counter} HP`
}


// spawn level 2 frog

function spawnLevel2Frog(){
    counter = 20
    clicks.src = "/images/level2frog.jpg"
}


clicks.addEventListener("click", frogClick)







