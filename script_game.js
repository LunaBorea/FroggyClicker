const clicks = document.getElementById('counterclick')
const element = document.getElementById("countervalue")
const kills = document.getElementById("frogLevelKills")
let counter = 10

function frogClick(){  
    if(counter > 0){
        counter--
    }
    element.innerHTML = counter + ' HP'
   changeFrog()
   frogKills()
}
function changeFrog(){
    if(counter == 0){
    clicks.src = "/images/frog1dead.jpg"
    }
    
}
function frogKills(){
    let enemyKills = 0
    if(counter == 0){
        enemyKills++
    }
    kills.innerHTML = enemyKills  + "/10 ☠"
}

function enemyRespawn(){
    clicks.src = "/images/frog.png"
    counter = 10
}

changeFrog.addEventListener("click", enemyRespawn)
clicks.addEventListener("click", frogClick)







