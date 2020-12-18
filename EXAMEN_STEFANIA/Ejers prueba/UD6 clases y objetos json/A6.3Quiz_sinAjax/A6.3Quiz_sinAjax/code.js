var quiz='{"preguntas":[{"id":"0","enunciado": "Cuantos son 10/2?", "respuestas":{"a":"5","b":"6","c":"9"}, "correcta":"a" },{"id":"1","enunciado": "Cuantos son 33/3?", "respuestas":{"a":"5","b":"6","c":"11"}, "correcta":"c" }, {"id":"2","enunciado": "Cuantos son 3*2?", "respuestas":{"a":"5","b":"6","c":"11","d":"6"}, "correcta":"d" }]}';
var objeto_quiz = JSON.parse(quiz);

function cargoPreguntas(){
        var div_preguntas = document.getElementById("preguntas");

        objeto_quiz.preguntas.forEach(function(pregunta){ //recorro array de preguntas
            
            var div_pregunta = document.createElement("div"); // cada pregunta en un div
            div_pregunta.innerText = pregunta.enunciado;

            Object.keys(pregunta.respuestas).forEach(function(key) {
               
                var div_respuesta= document.createElement("div");
                var input_respuesta=document.createElement("input");
                input_respuesta.setAttribute('type','radio'); 
                input_respuesta.setAttribute('value',key); // de valor la clave
                input_respuesta.setAttribute('name',pregunta.id); //nombre el id de la pregunta
                div_respuesta.appendChild(input_respuesta);
                var label_pregunta = document.createElement('label');
                label_pregunta.innerText=key+") "+pregunta.respuestas[key];
                div_respuesta.append(label_pregunta);
                div_pregunta.appendChild(div_respuesta);        
                })
            div_preguntas.appendChild(div_pregunta);
           
        });
}

function comprobarRespuestas(){

    var respuestas = document.getElementsByTagName("input");
    var todo_correcto=true;

    for(x=0;x<respuestas.length;x++){
            if(respuestas[x].checked){
                var id_pregunta = respuestas[x].name; //en el name guardo el id de la pregunta
                var respuesta_correcta = objeto_quiz.preguntas[id_pregunta].correcta; //el id coincide con la posicion del array
                var respuesta_elegida = respuestas[x].value;  // valor del input elegido
                if(respuesta_correcta != respuesta_elegida){
                    todo_correcto=false;
                }                        
            }
    }
    if(todo_correcto){
        alert ("Correcto!!");
    }else{
        alert("Incorrecto");
    }
}





    
