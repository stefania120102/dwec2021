var conexion;
function funcion_ajax() {
    conexion = new XMLHttpRequest(); //1 Creamos este objeto
    conexion.onreadystatechange = function() { 
        if(conexion.readyState == 4){ //si la conexion ha terminado TMB && conexion.status==200
            //console.log(conexion.responseText);
            if(conexion.status ==200){ //si la conexion ha ido correcta
            var objeto_response=JSON.parse(conexion.responseText); //Lo pasamos a objeto (aqui se pasa como array)
            
            var miSelect = document.createElement("select"); //aqui creamos el elmento select de html

            for(var i in objeto_response.provincias) { //llama al objeto que se llama provincias (el array se llama provincias)
            //console.log(i.nom); Muestra el for - aqui saldria el indice que es 0, 1 y 2
                console.log(objeto_response.provincias[i].nom); //aqui mostraria los nombre de las provincias
                var option_provincia = document.createElement("option"); //nos crea el option de html
                option_provincia.setAttribute("value",objeto_response.provincias[i].cp); //modificamos los atributos de cada option con el valor de cp
                option_provincia.innerText = objeto_response.provincias[i].nom; //innerText casi lo mismo que innerHTML
                miSelect.appendChild(option_provincia);//aqui estamos creando cada uno de los select
                //lo que hace el appendChild es crear los option dentro de el elemento miSelect
                //aplica el nodo hijo al nodo padre
            }
            miSelect.addEventListener("change" , function(){ 
                //console.log(miSelect.options);
                //console.log(miSelect);
                //document.getElementById("cp").innerText = miSelect.options[this.selectedIndex].value; //el cp tiene q sert igual a
                document.getElementById("cp").innerText = this.value;
            } );

            document.getElementById("contenido").appendChild(miSelect); //aplica el select dentro del id 'contenido' y lo muestra con el document

        
            }
        }
        
    };
    conexion.open('GET','provincias.json',true); // true para que sea asincrono
    conexion.send();
}

