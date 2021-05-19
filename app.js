// setInterval(function(){
//     console.log('something ....')
// },1000)

// function timer(){
//     console.log('running ....')
// }

// setInterval(timer,1000)

// setTimeout(function(){
//     console.log('running')
// },1000)

// var a = setInterval(function(){
//     console.log('running')
// },1000)
// clearInterval(a)
// setTimeout(function(){
//     clearInterval(a)
// },4000)


var min = 0
var sec = 0
var msec = 0
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliseconds = document.getElementById('msec')
var interval;


function start(){
    interval =  setInterval(function(){
        msec++
        miliseconds.innerHTML = msec
        if(msec >= 100){
            sec++
            seconds.innerHTML = sec
            msec = 0
        
        }
        else if(sec >= 60 ){
            min++
            minutes.innerHTML = min
            sec = 0
        }
    },10)
    var b = document.getElementById('str').disabled = true  
}


function pause(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0
    msec = 0
    minutes.innerHTML = min
    seconds.innerHTML = sec
    miliseconds.innerHTML = msec
}