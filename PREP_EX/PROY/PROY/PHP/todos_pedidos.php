<?php
	require ('conexion.php');
	$result = mysqli_query($link,"SELECT * FROM pedidos");


    while($row = mysqli_fetch_array($result))
    {
		$objeto = new stdClass();
		$objeto->idPedido = $row["idPedido"];
		$objeto->dni = $row["dniCliente"];
		$objeto->fecha = $row["fecha"];
		$datos[]=$objeto;
	}

	header('Content-Type: application/json');
	echo json_encode($datos);

	mysqli_free_result($result); 
	mysqli_close($link); 


?>