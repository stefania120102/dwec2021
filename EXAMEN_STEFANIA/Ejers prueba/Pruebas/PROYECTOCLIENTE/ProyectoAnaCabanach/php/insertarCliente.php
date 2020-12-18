<?php

    include("bd.php");
    
        $dni = $_POST['dni'];
        $nombre = $_POST['nombre'];
        $direccion = $_POST['direccion'];
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];
        $administrador = $_POST['administrador'];

        if(strlen($dni)>=1 && strlen($nombre)>=1 && strlen($direccion)>=1 && strlen($email)>=1){
                $consulta="INSERT INTO clientes (dniCliente,nombre,direccion,email,pwd,administrador) VALUES ('$dni','$nombre','$direccion','$email','$pwd','$administrador')";
                echo mysqli_query($conex,$consulta); 
        }

?>