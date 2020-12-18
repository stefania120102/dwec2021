window.onload = function () {
    lista_datos();
}

function lista_datos(){
$.ajax({
    url:"php/detalle.php",
    type:"GET",
    data:'virtualmarket',
}).done(function(respuesta){
    console.log(respuesta);
    for(var i in respuesta){
        console.log(i);
        console.log('hola');
        $(".contenido").append("<tr><td>"+respuesta[i].dniCliente+"</td><td>"+respuesta[i].nombre+"</td><td>"+respuesta[i].direccion+"</td></tr>");
    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;

}