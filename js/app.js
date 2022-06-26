
window.addEventListener('DOMContentLoaded', event => {
//Кнопки

const minUp = document.getElementById('minute-up')
const minDown = document.getElementById('minute-down')
const secUp = document.getElementById('second-up')
const secDown = document.getElementById('second-down')
const startPause = document.getElementById('start-pause')
const stop = document.getElementById('stop')

//Значения

let minute = document.getElementById('minute') //.innerHTML
let second = document.getElementById('second') //.innerHTML

//Код Кнопок вверх и вниз

minUp.onclick = () => {
    if(minute.innerHTML < 60){
        minute.innerHTML++
    } else {
        minute.innerHTML = 60
    }
}
minDown.onclick = () => {
    if(minute.innerHTML > 0){
        minute.innerHTML--
    } else {
        minute.innerHTML = 0
    }
}
secUp.onclick = () => {
    if(second.innerHTML < 60){
        second.innerHTML++
    } else {
        second.innerHTML = 60
    }
}
secDown.onclick = () => {
    if(second.innerHTML > 0){
        second.innerHTML--
    } else {
        second.innerHTML = 0
    }
}
 // код кнопок старт, стоп и пауза

let millisecond = 0, 
    interval


startPause.onclick = () => {
    clearInterval(interval)
    interval = setInterval( () =>{
        if (startPause.innerHTML === 'Pause'){
            //милисекунды
            if (millisecond >= 1) {
                millisecond--
                console.log("hi");
            //секунды
            } else if (second.innerHTML > 0) {
                second.innerHTML--
                millisecond = 100
                console.log("hi2")
            //Минуты
            } else if (minute.innerHTML > 0 || second.innerHTML === 0) {
                minute.innerHTML--
                second.innerHTML = 59
                millisecond = 100
                console.log("hi3")
            } else if (millisecond === 0 || second.innerHTML === 0 || minute.innerHTML === 0){
                clearInterval(interval)
                startPause.innerHTML = 'Start'
            }

            stop.onclick = () => {
                minute.innerHTML = 0
                second.innerHTML = 0
                millisecond = 0
                clearInterval(interval)
                startPause.innerHTML = 'Start'
            }
        }
    }, 10)

    if (startPause.innerText === 'Start') {
        startPause.innerHTML = 'Pause'
    } else {
        startPause.innerHTML = 'Start'
    }
}

stop.onclick = () => {
    minute.innerHTML = 0
    second.innerHTML = 0
    millisecond = 0
}

})