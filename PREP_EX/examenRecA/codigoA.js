$.validator.setDefaults({
    submitHandler: function() {
        alert("Enviado");
        anyado_municipio();
    }
});

$(document).ready(function(){
    // console.log("funcionaa");
    listo_municipios();

    $('#a_modal').on("click", function(){
        $('#modal').show();
    });

    $('#c_modal').on("click", function(){
        $('#modal').hide();
    });

    $('#enviar_municipio').on("click", function(){
        validar();
        $('#modal').hide();
    });

    $('.municipio').on("click", function(){
    $('.municipio').removeClass("municipio").addClass("destacado"); 
    });

    $('select[name=cielo]').on("click", function(){
        var valor_seleccion = $(this).val();
        if(valor_seleccion==0){
            $('#imagen_icono').text("");
            $('#imagen_icono').append("<img src='img/sol.png'>");
        }else if (valor_seleccion == 1) {
            $('#imagen_icono').text("");
            $('#imagen_icono').append("<img src='img/nubes.png'>");
        } else if (valor_seleccion == 2) {
            $('#imagen_icono').text("");
            $('#imagen_icono').append("<img src='img/lluvia.png'>");
        }else if (valor_seleccion == 3) {
            $('#imagen_icono').text("");
            $('#imagen_icono').append("<img src='img/nieve.png'>");
        }
    });
});

function validar(){
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
     }, "Value must not equal arg.");

    $('#municipio_form').validate({
        rules:{
            nombre:{
                required: true,
                maxlength: 20,
            },
            fecha: {
                required: true,
                digits: true,
                max:2019,
                },
            cielo:{
                valueNotEquals: "nada",
                // required: true,
            },
            maxima:{
                required:true,
                maxlength:50,

            },
            minima:{
                required:true,
                min: -40,

            }

        },
        messages: {
            nombre:{
                required: "Este campo no puede estar vacío",
                maxlength: "El municipio tiene que tener menos de 20 caracteres",
            },
            fecha: {
                required: "indica la fecha",
                digits: "Introduce valores",
                max: "Fecha minima 2019"
            },
            cielo:{
                valueNotEquals: "Por favor selecciona algo",
                // required: "Selecciona algo por favor",
            },
            maxima:{
                required: "Este campo no puede estar vacío",
                maxlength: "Debo ser menor de 50..."
            },
            minima:{
                required: "Este campo no puede estar vacío",
                min: "La temperatura debe ser mayor de -40",
            },
        },


    });
}

function listo_municipios(){

    $.ajax(
    {
        url: 'php/listo_municipio.php',
        type: 'POST',
        dataType: 'json'

    }).done(function(array_datos){
        for (var i in array_datos) {
            var div_datos = "<div class=municipio> ["+array_datos[i].fecha+"] - ["+array_datos[i].n+"]";
            switch (array_datos[i].c) {
                case 0:
                    div_datos += "<img src='img/sol.png'>";
                    break;
                case 1:
                    div_datos += "<img src='img/nubes.png'>";
                    break;
                case 2:
                    div_datos += "<img src='img/lluvia.png'>";
                    break;
                case 3:
                    div_datos += "<img src='img/nieve.png'>";
                    break;
            }
            div_datos += "<span class='max'> Max: ["+array_datos[i].max+"] </span>";
            div_datos += "<span class='min'> Min: ["+array_datos[i].min+"] </span>";
            div_datos += "</div>";

            $('#municipios').append(div_datos);
        }
    });

};


function anyado_municipio(){
    var hoy = new Date();
    var hora= hoy.toLocaleTimeString();
    var dia = hoy.toLocaleDateString();
    var fecha = hora + ' ' + dia;

    datos = {
        n:$('#municipio').val(),
        c:$('.icono:selected').val(),
        max:$('#max').val(),
        min:$('#min').val(),
        fecha:fecha
    }
    console.log(datos);


    $.ajax(
    {
        url: 'php/anyado_municipio.php',
        data: datos,
        type: 'POST',
        dataType: 'json'
    }).done(function(data){
        if(data){
            alert("Todo correcto petición realizada -" + datos.fecha);
            console.log('true');
            var div_nuevo = "<div class='municipio'> ["+datos.fecha+"] - ["+datos.n+"]";
            switch (datos.c) {
                case 0:
                    div_datos += "<img src='img/sol.png'>";
                    break;
                case 1:
                    div_datos += "<img src='img/nubes.png'>";
                    break;
                case 2:
                    div_datos += "<img src='img/lluvia.png'>";
                    break;
                case 3:
                    div_datos += "<img src='img/nieve.png'>";
                    break;
            }
            div_nuevo += "<span class='max'> Max: ["+datos.max+"] </span>";
            div_nuevo += "<span class='min'> Min: ["+datos.min+"] </span>";
            div_nuevo += "</div>";

            $('#municipios').append(div_nuevo);

        }else{
            alert('Ha habido un error');
            console.log('false');
        }
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log("Lo siento hubo un error");
    });
}