window.onload = function () {
  
    //pinto todos los usuarios
    pintar_usuarios();

// EVENTOS: los botones de los modales
    $("#ensenyar_nuevo").click(function(){
        $("#modal-nuevo").show();
    });

    $("#crear_nuevo").click(function(){
        añadir_usuario();
    });

    $("#cancelar_nuevo").click(function(){
        $("#modal-nuevo").hide();
    });

    $("#cancelar_mod").click(function(){
        $("#modal-mod").hide();
    });


}// fin funcion onload


function añadir_usuario(){

    var cliente_nuevo = { 
        dni:$('#dni_nuevo').val(),
        nombre:$('#nombre_nuevo').val(),
        direccion:$('#direccion_nuevo').val(),
        email:$('#email_nuevo').val() 
 };
$.ajax({
    url:"PHP/nuevo_cliente.php",
    type:"POST",
    data: cliente_nuevo,
    dataType: "json",
}).done(function(datos){
    console.log(datos);
    if(datos){
        alert("El cliente se ha insertado correctamente");
        var usuario="<div class='row'><div class='lista-elemento cliente-dni'>"+cliente_nuevo.dni+"</div><div class='lista-elemento'>"+cliente_nuevo.nombre+"</div>";
        usuario +="<div class='lista-operaciones'><div class='boton editar'>Editar</div><div class='boton borrar' class='borro_usuario'>Borrar</div></div></div>";
        $(".contenido").append(usuario);
        $('.boton.borrar').click(function () {  //para borrar, obtengo el evento del boton y borro "this"
        borrar_usuario($(this).parent().parent());});
        $('.boton.editar').click(function(){
            $('#modal-mod').show();
            buscar_usuario($(this).parent().parent());
        });   
        $("#modal-nuevo").hide();
    }else{
        alert("Error");
    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
     console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});

}


function borrar_usuario(usuario){
   
    var cliente_borrar = { 
        dni:usuario.find(".cliente-dni").text(),
   };
   console.log(cliente_borrar);
   if(confirm("Seguro que desea borrar usuario "+ usuario.find(".cliente-dni").text())){
  

        $.ajax({
            url:"PHP/borrar_cliente.php",
            type:"POST",
            data: cliente_borrar,
            dataType:"json",
        }).done(function(respuesta){
            if(respuesta){
               usuario.remove();
               alert("Usuario borrado correctamente");
            }else{
                alert("Fallo al borrar");
            }
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
        });
   }

}

function pintar_usuarios(){

    $.ajax({
        url:"PHP/todos_clientes.php",
        type:"POST",
        dataType:"json",
        success: function(lista_clientes){
          
            for(var cliente in lista_clientes) {
                var usuario="<div class='row'><div class='lista-elemento cliente-dni'>"+lista_clientes[cliente].dni+"</div><div class='lista-elemento cliente-nombre'>"+lista_clientes[cliente].nombre+"</div>";
                usuario +="<div class='lista-operaciones'><div class='boton editar'>Editar</div><div class='boton borrar' class='borro_usuario'>Borrar</div></div></div>";
                $(".contenido").append(usuario);
            }

            $('.boton.borrar').click(function () {  //para borrar, obtengo el evento del boton y borro "this"
                borrar_usuario($(this).parent().parent());
            });
            $('.boton.editar').click(function(){
                console.log("editar");
                $('#modal-mod').show();
                buscar_usuario($(this).parent().parent());
                fila_modificar=$(this).parent().parent();
            });
            $('.boton.modificar').click(function(){
                console.log("modificar");
                modificar_usuario($(this).parent().parent());
            });
        },
        error: function( jqXHR, textStatus, errorThrown ) {
             console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
        }

    });
}

function buscar_usuario(usuario){
    var cliente_buscar = { 
        dni:usuario.find(".cliente-dni").text()
   };
   $.ajax({
    url:"PHP/buscar_cliente.php",
    type:"POST",
    data: cliente_buscar,
    dataType:"json",
}).done(function(datos){
    console.log(datos);
    $("#dni_mod").val(datos.dniCliente);
    $("#nombre_mod").val(datos.nombre);
    $("#direccion_mod").val(datos.direccion);
    $("#email_mod").val(datos.email);

}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});


}

function modificar_usuario(fila_modificar){
 //me he guardado fila_modificar para qeu cuando se edite la bd, pueda modificar los datos de la web
    console.log(fila_modificar.find(".cliente-nombre").text());
    
    var cliente_mod = { 
        dni:$('#dni_mod').val(),
        nombre:$('#nombre_mod').val(),
        direccion:$('#direccion_mod').val(),
        email:$('#email_mod').val() 
 };
$.ajax({
    url:"PHP/mod_cliente.php",
    type:"POST",
    data: cliente_mod,
    dataType:"json",
}).done(function(respuesta){

    if(respuesta){
        
        alert("El cliente se ha modificado correctamente");
        fila_modificar.find(".cliente-nombre").text($('#nombre_mod').val());
        $("#modal-mod").hide();
    
    }else{
        alert("Error");
    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
     console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});

}













