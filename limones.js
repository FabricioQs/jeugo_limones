let canvas= document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20
const ALTURA_PERSONAJE=60
const ANCHO_PERSONAJE=40
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;


let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=0;
let puntaje=0;
let vidas=3;
let velocidadCaida=200;
let intervalo;

function iniciar(){
    intervalo= setInterval(bajarLimon,velocidadCaida);
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje (){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda (){
    personajeX=personajeX-20;
    actualizarPantalla();

}

function moverDerecha (){
    personajeX=personajeX+20;
    actualizarPantalla();
    
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();  
    dibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon (){
    ctx.fillStyle="green";
    ctx.fillRect(limonX, limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarLimon (){
    limonY =limonY+10;
    dibujarLimon();
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado (){

    if(limonX+ANCHO_LIMON>personajeX && limonX < personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON>personajeY && limonY < personajeY+ALTURA_PERSONAJE
    ){
       aparecerLimon();
       puntaje=puntaje+1
       mostrarEnSpan("txtPuntaje",puntaje);

       if (puntaje===3){
        velocidadCaida=150;
       } else if (puntaje===6){
         velocidadCaida=100;
       } else if (puntaje===10){
        clearInterval(intervalo);
        alert ("Felicidades Tienes los limones, ahora te falta la sal y el tequila")
       }
    }
}

function detectarPiso (){
    if(limonY+ALTURA_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1
        mostrarEnSpan("txtVidas",vidas);

        if (vidas==0){
            clearInterval(intervalo);
            alert("GAME OVER")
        }
    }

}


function aparecerLimon (){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}

function reiniciar(){

    clearInterval(intervalo);

    vidas=3;
    puntaje=0;
    velocidadCaida=200;

    mostrarEnSpan("txtVidas",vidas);
    mostrarEnSpan("txtPuntaje",puntaje);

    personajeX=canvas.width/2;
    limonY=0;

    iniciar();
}


