var tablero = new Array;
tablero[0] = ["_","_","_"];
tablero[1] = ["_","_","_"];
tablero[2] = ["_","_","_"];

console.log(tablero);


function pinto_tablero(){

    for(i=0;i<=2; i++){
        for(j=0;j<=2;j++){
            var id_casilla = "casilla_" + i + j;
            document.getElementById(id_casilla).value=tablero[i][j];
        }
    
    }
    //con esto recorro la matriz
}
//pinto barra baja en todas las casillas


/*function pinto_tablero(){  
            document.getElementById("casilla_00").value=tablero[0][0];
}
pinta un barra baja*/

function jugada(){
 //leer todos los valores de los inputs y meterlos en tablero



  //  var valor_01 = document.getElementById("casilla_01").value;
  //  console.log(valor_01);
  //  recoje valor de solo el 01
}

function tiradaMaquia(){
    //aleatorio para añadir 0
    var aleatorio_o = Math.floor(Math.random() * 2);
    document.getElementById("casilla_aleatoria").value = tablero[aleatorio_o][aleatorio_o];
    tablero.replace("_", "o");
}

function comprobarJugador(){
    //comprobar si fila 1 2 y 3 son iguals para completar la diagonal
}
