$(document).ready (function () {
    $("#crear").click(function(){
       var dato=$('#nuevosPedidos').serialize();
      console.log(dato);
        $.ajax({
            url:"php/insertarPedidos.php",
            type:"POST",
            data: dato,
            success:function(e){
                //si todo ha ido bien e devuelve 1
                if(e==1){
                    alert("El pedido ha sido añadido correctamente");
                    $("#tablaPedidos").append("<tr><td>"+dato.fecha+"</td><td>"+dato.nombre+"</td><td><button class='detalle'>Detalles<button><button class='editar'>Editar</button><button class='borrar'>Borrar</button></td></tr>");
                }else{
                    alert("Error al insertar");
                }
            }
        }).fail(function( jqXHR, textStatus, errorThrown ) {
                console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
            
        });

        return false;
    });
});
