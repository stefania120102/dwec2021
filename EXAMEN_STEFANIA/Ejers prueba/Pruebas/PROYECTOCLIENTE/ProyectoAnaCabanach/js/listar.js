window.onload = function () {
    lista_datos();
}

function lista_datos(){
    
    $.ajax({
        url:"php/mostrar.php",
    }).done(function(respuesta){

            $("#tablaClientes").append(respuesta);
        
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;
}
