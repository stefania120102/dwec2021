$.validator.setDefaults({
    submitHandler: function() {
        alert("Enviado");
        anyado_datos();
    }
});


$(document).ready(function(){
    console.log("ok");

    $('#boton_modal').on("click" , function(){
        $('#dato_modal').show();
    });

    $('#c_modal').on("click", function(){
        $('#dato_modal').hide();
    });
    listar_datos();

    $('#enviar_hora').on("click", function(){;
        validar();
    });

    $('.destaco').on("click", function(){
        $('.destaco').removeClass('destaco');
        $('.destaco').addClass('destacado');
    })

    $('select[name=icono]').on("click", function(){
        var seleccion = $(this).val();
        console.log(seleccion);
        if(seleccion == "n"){
            $('#i_icono').text("");
            $('#i_icono').append("<img src='img/1.svg'>");
        }else if(seleccion == "s"){
            $('#i_icono').text("");
            $('#i_icono').append("<img src='img/2.svg'>");
        }else if(seleccion == "e"){
            $('#i_icono').text("");
            $('#i_icono').append("<img src='img/3.svg'>");
        }else if(seleccion == "o"){
            $('#i_icono').text("");
            $('#i_icono').append("<img src='img/4.svg'>");
        }
    });
});

function validar(){
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
     }, "Value must not equal arg.");

    $('#datos_form').validate({
        rules: {
            temp:{
                required: true,
                max: 50,
            },
            f:{
                required: true,
                min: 0,
            }, //fuerza
            icono: {
                valueNotEquals: 'nada',
            }

        },
        messages: {
            temp:{
                required: 'No puede dejar este campo vacío',
                max: 'La máxima  temperatura es 50 grados'

            },
            f: {
                required: 'No puedes dejar este campo vacío' , 
                min: 'La fuerza no puede ser menos de 0 ',
            },
            icono: {
                valueNotEquals: 'Por favor, selecciona algo',
            },

        },
    }); 
}


function listar_datos(){
    $.ajax({
        dataType: 'json',
        url: 'php/listo_datos.php',
        type: 'POST'

    }).done(function(array_datos){
        for (const i in array_datos) {
            console.log("ok listar");
            var div_datos =  "<div class = 'dato'> " + array_datos[i].hora;
            div_datos += "<span class = 'temp'> Temperatrura: " + array_datos[i].temp + "º</span>";
            div_datos += "<span class = 'viento'> Viento";
            switch (array_datos[i].dir) {
                case "n":
                    div_datos += "<img  src='img/1.svg'>";                    
                    break;
                case "s":
                    div_datos += "<img  src='img/2.svg'>"; 
                    break;
                case "e":
                    div_datos += "<img  src='img/3.svg'>"; 
                    break;
                case "o":
                    div_datos += "<img  src='img/4.svg'>"; 
                    break;
            }

            div_datos += array_datos[i].fza + " Km/h<span>";
            div_datos += "<button class='destaco'>Destacar</button>";
            div_datos += "</div>";

            $('#lista_datos').append(div_datos);
        }

    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
   });
}

function anyado_datos(){
    var hoy = new Date();
    var hora = hoy.toLocaleTimeString();

    var datos= {
        hora:hora,
        temp:$('#temp').val(),
        dir:$('#viento').val(),
        fza:$('#fuerza').val()
    }
    console.log(datos);

    $.ajax({
        data:datos,
        type: 'POST',
        dataType: 'json',
        url: 'php/anyado_dato.php'

    }).done(function(data){
        if(data == "true"){
            alert("Todo ha salido correcto = " + data);
            console.log(data);
            var div_nuevo = "<div class='dato'> " + datos.hora;
            div_nuevo += "<span class='temp'> Temperatrura: " + datos.temp + "º</span>";
            div_nuevo += "<span class='viento'> Viento";
            switch (datos.dir) {
                case "n":
                    div_nuevo += "<img  src='img/1.svg'>";                    
                    break;
                case "s":
                    div_nuevo += "<img  src='img/2.svg'>"; 
                    break;
                case "e":
                    div_nuevo += "<img  src='img/3.svg'>"; 
                    break;
                case "o":
                    div_nuevo += "<img  src='img/4.svg'>"; 
                    break;
            }

            div_nuevo += datos.fza + " Km/h<span>";
            div_nuevo += "<button class='destaco'>Destacar</button>";
            div_nuevo += "</div>";

            $('#lista_datos').append(div_nuevo);

        }else{
            alert("Ups... Lo siento, algo ha salido mal = " + data);
            console.log(data);
        }

    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
   });
}