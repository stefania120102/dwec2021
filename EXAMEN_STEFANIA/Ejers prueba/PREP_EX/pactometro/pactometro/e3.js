var total=0; // suma total de escaños
window.onload = function(){
    document.getElementById("partido").addEventListener("change",anyado_partido);
    document.getElementById("limpiar").addEventListener("click",function(){
        total=0;
        document.getElementById("panel").innerHTML="";
        document.getElementById("total").innerHTML="";
    });
}
function anyado_partido(){
    var options=document.getElementsByTagName("option");
    var partido = document.createElement('span');
    for(var i=0; i<options.length;i++){ //buscando el option seleccionado
        if(options[i].selected){  // para recoger el atributo escanyos del elegido
            var escanyos = parseInt(options[i].getAttribute("escanyos"));
            console.log(escanyos);
            partido.style.display= "inline-block"; // para poder modificar anchura
            partido.style.width= (escanyos*2)+"px"; // ancho = escaños * 2
            partido.textContent= options[i].text; //Texto
            partido.style.backgroundColor=options[i].value; //color
            partido.addEventListener("click", function(){ // gestiono evento para borrar
                this.remove();
                total-=escanyos;
                document.getElementById("total").innerHTML="TOTAL :"+total;
            } );
            partido.addEventListener("mouseenter",function(){ //cuando entra raton
                document.getElementById("escanyos_partido").innerHTML="Escaños :"+escanyos;
            })
            partido.addEventListener("mouseleave",function(){ //cuando sale raton
                document.getElementById("escanyos_partido").innerHTML="";
            })
            document.getElementById("panel").appendChild(partido); // lo añado
            total += escanyos;
            document.getElementById("total").innerHTML="TOTAL :"+total;
        }
    }
}