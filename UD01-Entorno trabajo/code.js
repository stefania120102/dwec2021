var tablero = new Array;
tablero[0] = ["_","_","_"];
tablero[1] = ["_","o","_"];
tablero[2] = ["_","_","_"];

console.log(tablero);


function pinto_tablero(){

    for(i=0;i<tablero.length; i++){
        for(j=0;j<tablero.length;j++){
            var id_casilla = "casilla_" + i + j;
            document.getElementById(id_casilla).value=tablero[i][j];
            //AQUI FALTA UN IF
        }
    
    }
    //con esto recorro la matriz
}
//pinto barra baja en todas las casillas


/*function pinto_tablero(){  
            document.getElementById("casilla_00").value=tablero[0][0];
}
pinta un barra baja*/

function leoTablero(){
 //leer todos los valores de los inputs y meterlos en tablero

for(i=0;i<tablero.length;i++){
    for(j=0;j<tablero.length;j++){
        var id_casilla = "casilla_" + i + j;
        tablero[i][j] = document.getElementById(id_casilla).value;


        if((tablero[i][j] != "O") && (tablero != "_")){
            tablero[i][j] ="X";
        } 
    }   
}

console.log(tablero);
compruebaGanador();
tiradaMaquina();
compruebaGanador();
  //  var valor_01 = document.getElementById("casilla_01").value;
  //  console.log(valor_01);
  //  recoje valor de solo el 01
}

function tiradaMaquina(){
    //aleatorio para añadir 0

    jugada_x = Math.floor(Math.random() * 3);
    jugada_y = Math.floor(Math.random() * 3);

    console.log("jugadax" + jugada_x + "jugaday" + jugada_y) ;
    if(tablero[jugada_x][jugada_y] == "_"){
        tablero[jugada_x][jugada_y] = "O";
        pinto_tablero();

    }else{
        
        tiradaMaquina();
       
    }


    /*document.getElementById("casilla_aleatoria").value = tablero[aleatorio_o][aleatorio_o];
    tablero.replace("_", "o");*/
}

function compruebaGanador(){
    //comprobar si fila 1 2 y 3 son iguals para completar la diagonal

    if((tablero[0][0] == tablero[1][0]) && (tablero[1][0] == tablero[2][0])  && (tablero[0][0] != "_")){
        alert("Has ganado");
        location.reload();
    }

    if((tablero[0][1] == tablero[1][1]) && (tablero[1][1] == tablero[2][1])  && (tablero[0][1] != "_")){
        alert("Has ganado");
        location.reload();
    }

    if((tablero[0][2] == tablero[1][2]) && (tablero[1][2] == tablero[2][2])  && (tablero[0][2] != "_")){
        alert("Has ganado");
        location.reload();
    }

    if((tablero[0][0] == tablero[1][1]) && (tablero[1][1] == tablero[2][2])  && (tablero[0][0] != "_")){
        alert("Has ganado");
        location.reload();
    }

    if((tablero[0][2] == tablero[1][1]) && (tablero[1][1] == tablero[2][0])  && (tablero[0][2] != "_")){
        alert("Has ganado");
        location.reload();
    }
    
}
