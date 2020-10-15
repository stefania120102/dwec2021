/*  Realiza un programa que cada 20
     segundos (mediante setInterval) 
     solicite un DNI hasta que alguien 
     le escriba la cadena “-1”.  En ese
      momento, el programa debe mostrar 
      seguidas las letras de todos los DNIs 
      introducidos. */


    tiempo();
    function tiempo(){
        //setInterval(mensaje,20000);
        var intervalo = setInterval("pedirNumero();",2000);
    }

    function pedirNumero(){
        var dni = "0";
        var dni = prompt("Dime dni ");
        if(dni != "-1"){//entre comillas porque el prompt es un string
            var letDNI = letraDNI(dni); 
            letrasDNI.push(letDNI);
            //console.log(dni);
            //console.log(letrasDNI);
        }else{
            clearTimeout(intervalo);
            console.log("acabado");
            //for(i= 0;i<letrasDNI.length;i++){
                //alert(letrasDNI[i]);

           // }
            var dnisUnidos = letrasDNI.join(",");
            alert(dnisUnidos);
            }
       
    }

    
    function letraDNI(numeroDni){
         var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
         return letras[numeroDni%23];
     }

    //var letrasDNI = new Array;
    var letrasDNI = [];