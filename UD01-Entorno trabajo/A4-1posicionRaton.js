/*1) Haz un programa que mediante eventos y el uso
 del objeto event, te muestre en todo momento la 
 posición actual del ratón en pantalla. Para 
 mostrarlo modificaremos de forma dinámica un 
 elemento XHTML (Ejemplo, un <p>) que nos muestre
  la posición actual del ratón.*/

  /*function mostrarMensaje(evento){
      if(evento.type =="keyup"){
          alert(evento.keycode);
      }
      else if(evento.type=="click")
      alert(evento.clientX+ "" + evento.clientY);
  }
  document.getElementById()*/

 // document.getElementById("valor raton").innerHTML=" ";
  function mostrarPosicion(evento){
      console.log(evento)
      document.getElementById("valorRaton").innerHTML="Posición X: " + evento.clientX + "<br>Posición Y: "+evento.clientY;
  }
  document.onmousemove=mostrarPosicion;
