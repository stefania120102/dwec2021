<?php

$base = include("bd.php");

if($base){
    $consulta = "SELECT nlinea,idProducto,cantidad FROM lineasPedidos";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        while($row = $resultado-> fetch_array()){
            $nlinea=$row['nlinea'];
            $idProducto= $row['idProducto'];
            $cantidad= $row['cantidad'];
            ?>
            <div class="clientes">     
                <tr><td class="nlinea"><?php echo $nlinea."   "?></td><td><?php echo $idProducto."   "?></td><td><?php echo $cantidad."   "?><button class='borrar'>Borrar</button></tr>
            </div>
            <?php

        }
    }
}
?>