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
   frogKills()
}
function frogKills(){
    if(counter == 0){
        respawnEnemies()
        enemyKills += 1
    }
    else if(enemyKills < 10){
        kills.innerHTML = `${enemyKills}/10 ☠`
    }
    else if(enemyKills >= 10){
        counter = 20
        clicks.src = "/images/level2frog.jpg"
        kills.innerHTML = `${enemyKills}/25 ☠`
        frogClick()
    }
}

function respawnEnemies(){
    counter = 11
    clicks.src = "/images/frog.png"
    frogClick()

}


// level 2 frog

// function spawnLevel2Frog(){
//     if(enemyKills == 10){
//         enemyKills = 0
//         spawnLevel2Frog()
//         kills.innerHTML = `${enemyKills}/25 ☠`
//     }
//     respawnEnemies()
// }


clicks.addEventListener("click", frogClick)







