function añadirNumero(){
    var nuevoElemento= document.createElement("li");//esto era el UL antes  Crear elemento
    var texto=document.createTextNode(Math.floor(Math.random()));           //Relleno el elemneto
    nuevoElemento.appendChild(texto);                                       //añado el texto al uevo leemento
    document.getElementById("miLista").appendChild(nuevoElemento);          //añado el elemento hijo al elemento padre


}