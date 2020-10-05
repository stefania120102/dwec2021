/*  Haz un programa que cuando se presione una tecla, calcule 
cuantos DNIs de 4 cifras (del 0001 al 9999) tienen esa letra y
 te mostrará los DNIs y sus letras en un elemento
  XHTML(Ejemplo, un <p>).*/

  document.onkeydown=calcularDNI;
  
  function calcularDNI(evento){
      console.log(evento.key);
      for(i=0;i<9999;i++){
          if(letraDNI(i)==evento.key){
              document.getElementById("resultado").innerHTML += i + " ; " ;  //IMPORTANTE += para añadirlo 
          }

      };
  }

  function letraDNI(numeroDni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    return letras[numeroDni%23];
}