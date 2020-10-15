/* Se pinta el primer circulo
Al hacer click, solo en ese circulo, cambia a otro circulo
Al tardar mas de tres segundos, sale el mensaje de fin de juego
Se realiza el cronómetro */
 /* Para pintar el circulo de rojo, fijate en la case "objetivo" 
 de la hoja de estilo. Para añadir una clase a un elemento del DOM:
 document.getElementById(id_circulo).className="objetivo"; */

 //objetivo del css hará que se pinte el circulo
 //var tabla = new Array;
 //tabla[0]=["_","_","_"],["_","_","_"],["_","_","_"];


 function pintoCirculoRojo(){
    aleatorio = Math.floor(Math.random() * 8);
     for(var i=0;i<aleatorio;i++){
         var id_circulo ="circulo_"+i;
            document.getElementById(id_circulo).className="objetivo";
         
     }
 }

 function circuloAleatorio(){
    
     var idAleatorio ="circulo_"+aleatorio;
    return idAleatorio;
 }