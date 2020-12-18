window.onload = function () {
    $(".borrar").click(function(){
        alert("Esta seguro de eliminar este campo");
        var fila_borrar = $(this).parent().parent();
         console.log(fila_borrar);   
         var dato = { 
            dni:fila_borrar.find('#dni').text(),
        };
        console.log(dato);
    
         $.ajax({
             url:"php/borrar.php",
             type:"POST",
             data: dato,
             success:function(e){
                //si todo ha ido bien e devuelve 1
                if(e==1){
                 alert("El cliente ha sido borrado correctamente");
                fila_borrar.remove(); 
                }else{
                  alert("Error al borrar");
                } 
            }
         }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
         });

    });

}
