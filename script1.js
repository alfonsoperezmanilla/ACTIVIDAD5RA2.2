var posY;
var can;
var contexto;
var direccion;
var sum1 = 450;
var sum2 = 50;
window.onload = function() {
    can = document.getElementById("lienzo1");
    contexto = can.getContext("2d");
    posY=50;
    direccion = 0;
    setInterval("dibujar()",2);
}

function dibujar() {

    if(posY<sum1 && direccion == 0){
        posY = posY + 0.5;
        
    }
    if(posY==sum1){
        direccion = 1;
        sum2 = sum2 + 25;
    }

    if(posY>sum2 && direccion == 1){
        posY = posY - 0.5;
        
    }
    if(posY==sum2){
        direccion=0;
        sum1 = sum1 - 25;
    }





    can.width = can.width; // limpia el canvas
    contexto.strokeStyle = "#000000";
    contexto.fillStyle = "blue";
    contexto.beginPath();
    contexto.arc(550,posY,50,0,Math.PI*2,true);
    contexto.closePath();
    contexto.stroke();
    contexto.fill();
}