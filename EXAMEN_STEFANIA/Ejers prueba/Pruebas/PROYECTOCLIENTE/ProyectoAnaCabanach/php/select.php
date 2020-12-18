<?php

$baseD = include("bd.php");

if($baseD){
    $consulta = "SELECT nombre FROM clientes";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        while($ln = $resultado-> fetch_array()){
            $nombre= $ln['nombre'];
            ?>
                    <option class="nombre" name="nombre" id="nombre"> <?php echo $nombre?> </option>
            <?php
        }
    }
}
?>