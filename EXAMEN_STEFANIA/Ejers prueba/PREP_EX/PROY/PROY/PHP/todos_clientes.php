<?php
	require ('conexion.php');
	$result = mysqli_query($link,"SELECT * FROM clientes");


    while($row = mysqli_fetch_array($result))
    {
		$objeto = new stdClass();
		$objeto->dni = $row["dniCliente"];
		$objeto->nombre = $row["nombre"];
		$datos[]=$objeto;
	}

	header('Content-Type: application/json');
	echo json_encode($datos);

	mysqli_free_result($result); 
	mysqli_close($link); 


?>