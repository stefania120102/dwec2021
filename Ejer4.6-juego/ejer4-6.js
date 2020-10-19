/* Se pinta el primer circulo
Al hacer click, solo en ese circulo, cambia a otro circulo
Al tardar mas de tres segundos, sale el mensaje de fin de juego
Se realiza el cronómetro */
 /* Para pintar el circulo de rojo, fijate en la case "objetivo" 
 de la hoja de estilo. Para añadir una clase a un elemento del DOM:
 document.getElementById(id_circulo).className="objetivo"; */

 //objetivo del css hará que se pinte el circulo
 //var tabla = new Array;

    var secuencia = new Array(9);

 function pintoCirculoRojo(){
    for(var i=0;i<aleatorio;i++){
        var id_circulo ="circulo_"+i;
         
        
    }
    var aleatorio = Math.floor(Math.random() * 8);
    var circuloAleatorio = "circulo_"+aleatorio;
    document.getElementById(circuloAleatorio).className="objetivo";
    
 }
