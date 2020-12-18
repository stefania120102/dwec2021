window.onload = function () {
    lista_datos();
    select();
}

function lista_datos(){
$.ajax({
    url:"php/mostrarPedidos.php",
}).done(function(respuesta){

        $("#tablaPedidos").append(respuesta);
    
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;
}

function select(){
    $.ajax({
        url:"php/select.php",
    }).done(function(respuesta){

            $("#select").append(respuesta);
        
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;
}

