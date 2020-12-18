<?php

    include("bd.php");
        $dni = $_POST['dni'];

            $consulta="DELETE FROM 'clientes' WHERE 'dniCliente'='$this->dniCliente'";
            echo mysqli_query($conex,$consulta); 
        
?>