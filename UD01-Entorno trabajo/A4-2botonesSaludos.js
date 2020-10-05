/*2) Realizar un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. 
Al hacer click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos 
muestre un alert con “Hola”. El botón “Parar Saludos” parará esa secuencia.*/

function inicio(){
    document.getElementById("comenzar").onclick= comenzarSaludos;
    document.getElementById("parar").onclick= pararSaludos;  
}

var estado= 0;

function comenzarSaludos(){
    if(estado==0){
        estado= setInterval("alert('Hola');", 5000);
    }else{
        alert("Ya hay un saludo en marcha");
    } 
}

function pararSaludos(){
   
    if(estado==0){
        alert("No hay nada que parar");
    }else{
        clearInterval(estado);
        estado=0;
    }
}