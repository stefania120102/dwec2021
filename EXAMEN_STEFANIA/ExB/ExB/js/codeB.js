window.onload = function () {
    //document.getElementById("genero_peli").addEventListener("change",anyado);
    lista_cartas();

	$("#abrir_modal").click(function(){
		$("#modal_nueva_carta").show();
    });
    $("#cerrar_modal").click(function(){
        $("#modal_nueva_carta").hide();
    });

    console.log("jquery ok");
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
       }, "Value must not equal arg.");

    $("#enviar_carta").click(function(){
        anyadir_carta();
        var elemento=document.getElementById("carta");
        elemento.submit();
    });


}

function validar(evento){
    $.validator.setDefaults({
        submitHandler: function() {
            alert("submitted! (skipping validation for cancel button)");
        }
    });
    

    evento.preventDefault();
    $("#carta").validate({
		rules: {
            radioButton: {
                required: true,
            },
            checkBox: {
                required: true
            },
            selector: { valueNotEquals: "" }
            
        },
        messages: {
            radioButton: "Selecciona un radio button, por favor",
            checkBox: "Seleccina un checkBox",

        }
            
    })
}

function lista_cartas(){
$.ajax({
    url:"php/listo_cartas.php",
    type: "POST",
    dataType:"json",
}).done(function(respuesta){
    console.log(respuesta);
    // var fecha = document.getElementById("cartas");
    for(var i in respuesta){
        console.log(i);

        $("#cartas").append("<div class ='carta' id ='cartas'> <input class='fecha_carta' id = 'fecha_carta' type='hidden' value='"+respuesta[i].fecha+"'>" + respuesta[i].regalo1 + " - " + respuesta[i].estrellas1 + " - " + respuesta[i].regalo2 + " - " + respuesta[i].estrellas2 + " - " + respuesta[i].regalo3 + " - " + respuesta[i].estrellas3 + " - <button id='btn_borrar'>Borrar</button></div>");

    }
    
    //getElementById("fecha_carta").value;
    
    // console.log(fecha);
    // fecha.addEventListener("mouseenter"),function(){
    //     document.getElementById("fecha").innerHTML = "Fecha: " + fecha;
    // }
    // fecha.addEventListener("mouseleave"),function(){
    //     document.getElementById("fecha").innerHTML = "";
    // }
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;

}

function anyadir_carta(){
    var objeto_dato = {
            fecha:$('.fecha_carta').val(),
            regalo1:$('#regalo1').val(),
            regalo2:$('#regalo2').val(),
            regalo3:$('#regalo3').val(),
            pref1:$('.preferencia1:checked').val(),
            pref2:$('.preferencia2:checked').val(),
            pref3:$('.preferencia3:checked').val()
            };
    console.log(objeto_dato);
    
    $.ajax({
        url:"php/envio_carta.php",
        type:"POST",
        data: objeto_dato,
        dataType:"json",
    }).done(function(respuesta){
        console.log(respuesta);
       if(respuesta){
            $("#cartas").append("<div class ='cartas' id ='cartas'> <input class='fecha_carta' id = 'fecha_carta' type='hidden' value='"+objeto_dato.fecha+"'>"+ objeto_dato.regalo1 + " - " + objeto_dato.pref1 + " - " + objeto_dato.regalo2 + " - " + objeto_dato.pref2 + " - " + objeto_dato.regalo3 +" - " + objeto_dato.pref3 + " - <button id='btn_borrar'>Borrar</button></div>");
            console.log(objeto_dato.genero);
        }else{ 
            alert("Error en la insercion");
        } 
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}

