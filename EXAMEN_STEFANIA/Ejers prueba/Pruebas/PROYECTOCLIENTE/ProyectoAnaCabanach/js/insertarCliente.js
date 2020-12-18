$(document).ready (function () {
    $("#crear").click(function(){
       var dato=$('#nuevosDatos').serialize();
      console.log(dato);
        $.ajax({
            url:"php/insertarCliente.php",
            type:"POST",
            data: dato,
            success:function(e){
                //si todo ha ido bien e devuelve 1
                if(e==1){
                    alert("El cliente ha sido añadido correctamente");
                    $("#tablaClientes").append("<tr><td id='dni' name='dni'>"+dato.dniCliente+"</td><td>"+dato.nombre+"</td><td><button class='editar'>Editar</button><button class='borrar'>Borrar</button></td></tr>");
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
