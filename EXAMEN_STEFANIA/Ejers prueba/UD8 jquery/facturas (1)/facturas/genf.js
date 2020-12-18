$(document).ready(function(){
    console.log("jquery ok");
    relleno_select();
    $("#producto").change(function(){
        var producto_sel=$("#producto :selected").val();
         $("#puni").val(producto_sel);
    });
    $("#anyadir").click(function(){
        $("#tabla tbody").append("<tr><td>"+$("#producto :selected").text()+"</td><td>"+$("#cantidad").val()+"</td><td>"+$("#puni").val()+"</td><td class='precio_fila'>"+($("#cantidad").val()*$("#puni").val())+"<td><button class='borrar'>Borrar</button></td></tr>");
        $(".borrar").click(function(){
            $(this).parent().parent().remove();
            recalcular()
        });
        recalcular()      
    });
});

function recalcular(){
    var base=0;
    $(".precio_fila").each(function(){
        base+=parseFloat($(this).text());
    });
    $("#base").text(base);
    $("#iva").text(base*(0.21));
	$("#total").text(base*(1.21));
}


function relleno_select(){
    $.ajax({
        url : 'productos.json',
        type : 'POST',
        dataType : 'json',
        success : function(datos) { 
            for(i=0;i<datos.productos.length;i++){
                $("#producto").append("<option value='"+datos.productos[i].precio+"'>"+datos.productos[i].name+"</option>")
            }
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            alert('Petición realizada');
        }
    });
}