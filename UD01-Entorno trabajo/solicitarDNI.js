/*  Realiza un programa que cada 20
     segundos (mediante setInterval) 
     solicite un DNI hasta que alguien 
     le escriba la cadena “-1”.  En ese
      momento, el programa debe mostrar 
      seguidas las letras de todos los DNIs 
      introducidos. */

    function solicitaDni(){

        function letraDNI(numeroDni){
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            return letras[numeroDni%23];
        }

    }