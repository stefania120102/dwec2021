<?php

    include("bd.php");
        $fecha = $_POST['fecha'];
        $nombre = $_POST['nombre'];

            $consulta="INSERT INTO pedidos (fecha,nombre) VALUES ('$fecha','$nombre')";
            echo mysqli_query($conex,$consulta); 
        }

?>