

document.addEventListener("keydown", setScramble);
document.addEventListener("keyup", start);
let timer = document.getElementById("time");
let scramble = document.getElementById("scramble");
let aos = document.getElementById("aos");



let tiempo = 0;
let intervalo;
let running = false;

function start(evento)
{
  if(evento.keyCode == 32 && running == false)
  {
      intervalo = setInterval(function() {
        tiempo += 0.01;
        timer.innerHTML = tiempo.toFixed(2);
      }, 10);
      running = true;

    }
    else{
      running = false;
    }

    if(evento.keyCode == 32 && running == false){
      clearInterval(intervalo);

    }
    
    if(evento.keyCode == 32 && running == false &&  timer.textContent !== '0.00') {
    
        times.push(parseFloat(timer.textContent));
        tiempo = 0;
        console.log(times);
        lastScramble = scramble.textContent;
        console.log(lastScramble);
        //json

        var hoy = new Date();
        var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

        // var fechaCompleta = fecha + ": " + hora;
        tiempos.push( 
            {
              "time": parseFloat(timer.textContent),
              "scramble": scramble.textContent
            }
          )
          
        console.log(tiempos);
    }  
}

function setScramble(evento) {

    if(evento.keyCode == 50){

        scramble.innerHTML = new Scrambo().type(222).get();
    }

}


// SAVING TIMES


var hoy = new Date();
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

var fechaCompleta = fecha + ": " + hora;

let times = [];

let tiempos = [{


    
}]


