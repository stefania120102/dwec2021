
function enviar_peticion(accion){

    conexion = new XMLHttpRequest();
        conexion.onreadystatechange = function(){
                if(conexion.readyState == 4){
                    if(conexion.status == 200){     
                        console.log(conexion.responseText);
                        document.getElementById("respuesta").innerText=conexion.responseText
                    }
                }
        };
    conexion.open("POST","UD09-2AJAX.php",true);
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send('accion='+accion);



}