var turnoClicks=0;
var nuevoCirculo = "";
var contador = 0;
var circuloID = "";
var cronoContador = 0;
var contadorRestoTiempo = 30;
var tiempoRestado = 0;

function restarTiempo() {
    if (contadorRestoTiempo > 5) {
        contadorRestoTiempo--;
    }
    return contadorRestoTiempo;
}


function numeroCalcular() {
    var numAleatorio = Math.floor(Math.random() * 9);
    nuevoCirculo = "circulo_" + numAleatorio;
    console.log(nuevoCirculo);
    return nuevoCirculo;
}

var circuloID = numeroCalcular();
var cronoInterval = cronometro();

function pintoCirculoRojo() {
    document.getElementById(circuloID).className = "objetivo";
    tiempoRestado = restarTiempo();
    limpiarCronometro(cronoInterval, tiempoRestado);
    clicarNuevoCirculo();
}

function borrarColorRojo() {
    document.getElementById(circuloID).removeEventListener("click", borrarColorRojo);
    document.getElementById(circuloID).removeAttribute("class");
    console.log('borrando' + circuloID);
    contador = 0;
    circuloID = numeroCalcular();
    pintoCirculoRojo();
}

function clicarNuevoCirculo() {
    document.getElementById(circuloID).addEventListener("click", borrarColorRojo);
    turnoClicks++;
    document.getElementById('cronometro').innerHTML = "Turno: " +turnoClicks;
}

function cronometro() {
    crono = setInterval(function () {
        limpiarCronometro(crono, tiempoRestado);
    }, 100);
}

function limpiarCronometro(crono, tiempoDisminuido) {
    contador++;
    cronoContador++;

    console.log(contador);
    if (contador == tiempoDisminuido) {
        clearInterval(crono);
        alert("Has perdido, tenías " + tiempoDisminuido + " decimas de segundos para seleccionar el círculo");
        document.getElementById(circuloID).removeEventListener("click", borrarColorRojo);
        document.getElementById(circuloID).removeAttribute("class");
        console.log("Se ha borrado el interval y se ha eliminado el listener")
        document.getElementById('cronometro').innerHTML = "Tiempo total: " + cronoContador + 
        " decimas de segundo<br> Has hecho "+ turnoClicks + " turnos";
    }



}