/* import enemies from './enemies.js' */

let counter = 10

function frogClick(){  
    const element = document.getElementById("countervalue")
    if(counter > 0){
        counter--
    }
    element.innerHTML = counter + ' HP'
    frogDead()
}

function frogDead(){
    const click = document.getElementById('counterclick')
    if(counter == 0){
        click.src = "/images/frog1dead.jpg"
    }
}




