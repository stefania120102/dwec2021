window.onload = function () {
    //document.getElementById("genero_peli").addEventListener("change",anyado);
    lista_datos();
	$("#abrir_modal").click(function(){
		$("#modal").show();
    });
    $("#cerrar_modal").click(function(){
        $("#modal").hide();
    });

    $("#enviar_carta").click(function(){
        anyadir_dato();
        var elemento=document.getElementById("peliculas");
        elemento.submit();
    });
    anyadir_dato();
}

function lista_datos(){
$.ajax({
    url:"php/listo_peliculas.php", // no paso ningun dato, solo recojo
    type:"POST",
    dataType:"json",
}).done(function(respuesta){
    console.log(respuesta); // array de objetos, lo itero y pinto una fila por cada objeto
    for(var i in respuesta){
        console.log(i);

        $("#lista_pelis").append("<tr><td> ID: "+respuesta[i].id+"</td></tr><tr><td>"+respuesta[i].titulo+"</td></tr>");

        console.log(respuesta[i].genero)

    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;

}

function anyadir_dato(){
    var objeto_dato = {   //monto un objeto con los datos de la fila a insertar en la BD
            titulo:$('#titulo').val(),
            anyo:$('#anyo').val(),
            director:$('#director').val(),
            genero:$('#genero_peli option:selected').val(),
            actor1:$('#actor1').val(),
            actor2:$('#actor2').val()
            };
    console.log(objeto_dato);
    
    $.ajax({
        url:"php/envio_pelicula.php",
        type:"POST",
        data: objeto_dato, // paso el dato por el post
        dataType:"json",
    }).done(function(respuesta){
        console.log(respuesta);  // recojo la respuesta, que sera true o false
       if(respuesta){
            $("#lista").append("<tr><td>"+objeto_dato.titulo+"</td><td>"+objeto_dato.director+"</td><td>"+objeto_dato.actor1+"</td></tr>");
            console.log(objeto_dato.genero);
            //alert("Dato insertado correctamente !!!!");//si es correcta, inserto los datos en una fila nueva
        }else{ 
            alert("Error en la insercion"); //si no es correcta no inserto nada
        } 
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}

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
            var escanyos = parseInt(options[i].getAttribute("escanyos")); //quiero el valor de escanyos
            console.log(escanyos);
            partido.style.display= "inline-block"; // para poder modificar anchura
            partido.style.width= (escanyos*2)+"px"; // ancho = escaños * 2
            partido.textContent= options[i].text; //Texto
            partido.style.backgroundColor=options[i].value; //color
            partido.addEventListener("click", function(){ //gestiono evento para borrar
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