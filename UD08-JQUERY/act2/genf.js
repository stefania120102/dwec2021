$(document).ready(function(){
    console.log("jquery ok");

    relleno_select();

    $("#producto").change(function(){

        var producto_sel = $("#producto :selected").val(); //val para el valor y selected buscar era pseudo calse? .text para el nombre
        console.log(producto_sel);
        $("#puni").val(producto_sel);
        
    });

    $("#anyadir").click(function(){
        $("#tabla tbody").append("<tr> <td> " + $("#producto :selected").text() + "</td><td>  " + $("#cantidad").val() + "</td><td>"+ $("#puni").val() +"</td><td> "+$("#cantidad").val()*$("#puni").val()+"</td><td><button class = 'borrar'> Borrar</button> </td></tr>");
        
        $(".borrar").click(function(){

            console.log($(this).parent().parent());
            $(this).parent().parent().remove();
        });
    
    });

});

function relleno_select(){
    $.ajax({
        url: 'productos.json',
        type: 'POST',
        dataType: 'json', 
        success: function(datos) {
            //console.log(datos);
            for(var i=0 ; i < datos.productos.length; i++){
                $("#producto").append("<option value = ' " + datos.productos[i].precio + "'>" +  datos.productos[i].name + "</option>");
                //datos.productos[1].precio; el precio 1
            }
            
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            alert('Peticion realizada')
        }
    });
}

/*var conexion;
function function_ajax() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function() {
        if(conexion.readyState == 4 && conexion.status == 200){
            var objeto_response = JSON.parse(conexion.responseText);

            var miSelect = document.createElement("select");

            for(var i in objeto_response.producto) {
                console.log(objeto_response.producto[i].name);
                var option_producto = ;
            }
        }
        
    }
    
}*/