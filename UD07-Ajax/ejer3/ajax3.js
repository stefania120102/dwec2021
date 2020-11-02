function enviar_peticion(accion){
    //...ajax...

    var conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function(){
        if(conexion.readyState == 4 && conexion.status == 200){
        //var objeto_response=JSON.parse(conexion.responseText);
        
        document.getElementById("respuesta").innerText = conexion.responseText
        //console.log(objeto_response.accion);

        }
    };
    conexion.open("POST" , "UD07-3AJAX.php", true);
    conexion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    conexion.send('accion=' + accion);
}