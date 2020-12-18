window.onload = function () {

    //pinto todos los pedidos
    pintar_pedidos();

// EVENTOS: los botones de los modales
    $("#anadir_pedido").click(function(){
        $("#modal-nuevo").show();
        relleno_select_clientes();
    });

    $("#enviar_pedido").click(function(){
        añadir_pedido();
    });

    $("#cancelar_nuevo").click(function(){
        $("#modal-nuevo").hide();
    });

    $("#cancelar_mod").click(function(){
        $("#modal-mod").hide();
    });


}// fin funcion onload



function añadir_pedido(){

    var pedido_nuevo = { 
        fecha:$('#fecha_nuevo').val(),
        dni:$('#cliente option:selected').val() 
        };
        console.log(pedido_nuevo)
$.ajax({
    url:"PHP/nuevo_pedido.php",
    type:"POST",
    data: pedido_nuevo,
    dataType:"json",
}).done(function(datos){
    console.log(datos);
    if(datos!=false){
        alert("El pedido se ha insertado correctamente");
       
        var fila="<div class='row'><div class='lista-elemento pedido-id'>"+datos+"</div><div class='lista-elemento cliente-dni'>"+pedido_nuevo.dni+"</div><div class='lista-elemento pedido-fecha'>"+pedido_nuevo.fecha+"</div>";
        fila +="<div class='lista-operaciones'><div class='boton redondo detalle'>&Congruent;</div><div class='boton editar'>Editar</div><div class='boton borrar' class='borro_usuario'>Borrar</div></div></div>";
        $(".contenido").append(fila)
        $('.boton.borrar').click(function () {  //para borrar, obtengo el evento del boton y borro "this"
            borrar_pedido($(this).parent().parent());
        });
        $('.boton.editar').click(function(){
            console.log("editar");
            $('#modal-mod').show();
            buscar_pedido($(this).parent().parent());
            fila_modificar=$(this).parent().parent();
        });
        $('.boton.modificar').click(function(){
            console.log("modificar");
            modificar_pedido($(this).parent().parent());
        });
        $('.boton.detalle').click(function () {  //para borrar, obtengo el evento del boton y borro "this"
            pedido_detalle($(this).parent().parent());
        });
        $("#cliente").remove();
        $("#modal-nuevo").hide();
    }else{
        alert("Error");
    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
     console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});

}


function borrar_pedido(ped_borrar){
    var pedido_borrar = { 
        idPedido:ped_borrar.find(".pedido-id").text(),
   };
   if(confirm("Seguro que desea borrar pedido "+ped_borrar.find(".pedido-id").text())){ 
        $.ajax({
            url:"PHP/borrar_pedido.php",
            type:"POST",
            data: pedido_borrar,
            dataType:"json",
        }).done(function(respuesta){
            if(respuesta){
                ped_borrar.remove();
               alert("Usuario borrado correctamente");
            }else{
                alert("Fallo al borrar");
            }
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
        });
    }
}



function pintar_pedidos(){

    $.ajax({
        url:"PHP/todos_pedidos.php",
        type:"POST",
        dataType:"json",
        success: function(lista_pedidos){
            for(var pedido in lista_pedidos) {
                var fila="<div class='row'><div class='lista-elemento pedido-id'>"+lista_pedidos[pedido].idPedido+"</div><div class='lista-elemento cliente-dni'>"+lista_pedidos[pedido].dni+"</div><div class='lista-elemento pedido-fecha'>"+lista_pedidos[pedido].fecha+"</div>";
                fila +="<div class='lista-operaciones'><div class='boton redondo detalle'>&Congruent;</div><div class='boton editar'>Editar</div><div class='boton borrar' class='borro_usuario'>Borrar</div></div></div>";
                $(".contenido").append(fila)
            }

            $('.boton.borrar').click(function () {  //para borrar, obtengo el evento del boton y borro "this"
                borrar_pedido($(this).parent().parent());
            });
            $('.boton.editar').click(function(){
                console.log("editar");
                $('#modal-mod').show();
                buscar_pedido($(this).parent().parent());
                fila_modificar=$(this).parent().parent();
            });
            $('.boton.modificar').click(function(){
                console.log("modificar");
                modificar_pedido($(this).parent().parent());
            });
            $('.boton.detalle').click(function () {  //detalle de las lineas de pedido
                pedido_detalle($(this).parent().parent());
            });

        },
        error: function( jqXHR, textStatus, errorThrown ) {
             console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
        }

    });
}

function buscar_pedido(pedido){ // para modificar, busco los datos y los relleno
    var pedido_buscar = { 
        idPedido:pedido.find(".pedido-id").text()
   };
   $.ajax({
    url:"PHP/buscar_pedido.php",
    type:"POST",
    data: pedido_buscar,
    dataType:"json",
}).done(function(datos){
    console.log(datos);
    $("#mod-id").val(datos.idPedido);
    $("#mod-fecha").val(datos.fecha);
    $("#mod-dniCliente").val(datos.dniCliente);
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});


}

function modificar_pedido(fila){

    console.log(fila.find(".pedido-id").text());
    
    var pedido_mod = { 
        idPedido:$('#mod-id').val(),
        fecha:$('#mod-fecha').val(),
        dniCliente:$('#mod-dniCliente').val(),
 };
$.ajax({
    url:"PHP/mod_pedido.php",
    type:"POST",
    data: pedido_mod,
    dataType:"json",
}).done(function(respuesta){

    if(respuesta){
        alert("El cliente se ha modificado correctamente");
        fila_modificar.find(".cliente-dni").text($('#mod-dniCliente').val());
        fila_modificar.find(".pedido-fecha").text($('#mod-fecha').val());
        console.log( fila_modificar);
        $("#modal-mod").hide();
    
    }else{
        alert("Error");
    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
     console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});


}



function pedido_detalle(pedido){
    console.log(pedido.find(".pedido-id").text());
    var idP = { 
        idPedido:pedido.find(".pedido-id").text()
   };

   $.ajax({
    url:"PHP/lineas_pedido.php",
    type:"POST",
    data: idP,
    dataType:"json",
}).done(function(lista_lineas){
    console.log( $(".lineasPedido"));
    
    $(".lineasPedido").remove();

    var cabecera="<div class='lineasPedido row cabecera'><div class='lista-elemento lineaPedidos-id'>Linea</div><div class='lista-elemento linea-producto'>Cantidad</div><div class='lista-elemento lineas-prod'>Producto</div><div class='lista-elemento'>Acciones</div>";
    $(pedido).after("<div class='lineasPedido row row-detalle'><div class='lista-operaciones'><div class='boton redondo detalle'>+</div></div></div>")
    for(var i in lista_lineas) {
        var fila="<div class='lineasPedido row row-detalle'><div class='lista-elemento lineaPedidos-id'>"+lista_lineas[i].nlinea+"</div><div class='lista-elemento linea-producto'>"+lista_lineas[i].cantidad+"</div><div class='lista-elemento lineas-prod'>"+lista_lineas[i].producto+"</div>";
        fila +="<div class='lista-operaciones'><div class='boton borrar linea' class='borro_linea'>Borrar</div></div></div>";
        $(pedido).after(fila); // añado las lineas del pedido despues del pedido
    }
    $(pedido).after(cabecera);
    $('.boton.borrar.linea').click(function () {  //para borrar, obtengo el evento del boton y borro "this"
    borrar_linea($(this).parent().parent(), pedido.find(".pedido-id").text()); // le paso la linea y el id del pedido
});
    

}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( );
});

}


function borrar_linea(linea_borrar,pedido_borrar){
    var l_borrar = { 
        idPedido:pedido_borrar,
        idLinea:linea_borrar.find(".lineaPedidos-id").text(), // id de la linea
   };
   console.log(l_borrar);
   if(confirm("Seguro que desea borrar linea pedido")){ 
        $.ajax({
            url:"PHP/borrar_linea.php",
            type:"POST",
            data: l_borrar,
            dataType:"json",
        }).done(function(respuesta){
            if(respuesta){
                console.log(linea_borrar);
                linea_borrar.remove();
                alert("Linea borrado correctamente");
            }else{
                alert("Fallo al borrar");
            }
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
        });
    }
}


function relleno_select_clientes(){

    $.ajax({
        url:"PHP/todos_clientes.php",
        type:"POST",
        dataType:"json",
        success: function(lista_clientes){
            var select = "<select id='cliente'>";
            for(var cliente in lista_clientes) {
                var option="<option id='dniCliente_nuevo' value='"+lista_clientes[cliente].dni+"'>"+lista_clientes[cliente].nombre+"</div>";
                select+=option;
            }
            select += "</select>";
            $("#div-clientes").append(select);

        },
        error: function( jqXHR, textStatus, errorThrown ) {
             console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
        }

    });
}















