window.onload = function () {
    $("#detalle").click(function(){
    lista_datos();
    });
}

function lista_datos(){
    $.ajax({
        url:"php/mostrarLineasPedido.php",
    }).done(function(respuesta){

            $("#lineasPedidos").append(respuesta);
        
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}