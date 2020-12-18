$(document).ready(function(){
    console.log("juery ok");
    cargo_preguntas(); // cargo las preguntas por ajax
    $("#ok").on("click",function(){  // si ok
        compruebo_preguntas(); // compruebo preguntas
        clearTimeout(temporizador); // paro temporizador
    });
    $("#borrar").on("click",function(){ // borrar todo
        $("#preguntas").html(""); // limpio articles
        $("#acertadas").html("");
        cargo_preguntas(); // cargo preguntas de nuevo
    });
    var temp=0;
    var temporizador = setInterval(function(){   // creo el temporizador
        temp++;   // aumento el temp y lo saco por pantalla.
        $("#tiempo").html("Tiempo :"+temp);
    },100); // cada decima de segundo
});

function cargo_preguntas(){
      $.ajax({    //llamada ajax, recojo preguntas.json
        url: "preguntas.json",
        type: "POST",
        dataType: "json",
    })
    .done(function(datos){
            for (i=0;i<datos.preguntas.length; i++){ // añado un id para cambiar color 
                $("#preguntas").append("<div id='pregunta"+i+"'>"+datos.preguntas[i].pregunta +"</div>");
                $.each(datos.preguntas[i].respuesta, function(key, value){ //itero por clave-valor
                    var radio="<input type='radio' class='respuesta"+i+"' name='respuesta"+i+"' value='"+key+"'>"+key+" = "+ value+" </input>";
                    $("#preguntas").append(radio);   //añado una clase para buscar el :checked
                });
            }        
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
   });
}
function compruebo_preguntas(){
     $.ajax({  //llamada ajax, recojo preguntas.json 
        url: "preguntas.json",
        type: "POST",
        dataType: "json",
    })
    .done(function(datos){
        var correctas=0;
        for (i=0;i<datos.preguntas.length; i++){
            var correcta = datos.preguntas[i].correcta; //correcta
            var elegida = $(".respuesta"+i+":checked").val(); //elegido
            if(correcta == elegida ){
                $("#pregunta"+i).css({"background-color" : "green"}); //fondo verde
                correctas ++;
            }else{
                $("#pregunta"+i).css({"background-color" : "red"});
            }
        };
        $("#acertadas").html("Acertadas :"+correctas);
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
   });
}