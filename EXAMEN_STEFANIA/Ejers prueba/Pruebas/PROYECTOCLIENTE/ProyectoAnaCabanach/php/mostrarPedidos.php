<?php

$base = include("bd.php");

if($base){
    $consulta = "SELECT idPedido,dniCliente, fecha FROM pedidos";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        while($row = $resultado-> fetch_array()){
            $idPedido= $row['idPedido'];
            $dni=$row['dniCliente'];
            $fecha= $row['fecha'];
            ?>  
                <tr>
                    <td><?php echo $idPedido?>&nbsp;</td>
                    <td><?php echo $dni?>&nbsp;</td>
                    <td><?php echo $fecha?></td>

                    <td><button id="detalle">Detalle</button>
                    <button class="editar">Editar</button>
                    <button class="borrar">Borrar</button></td>
                </tr>
            <?php

        }
    }
}
?>