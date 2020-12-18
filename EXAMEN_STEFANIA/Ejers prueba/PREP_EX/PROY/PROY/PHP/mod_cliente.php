<?php


	require ('modelo.php');
	require ('conexion.php');
	$dni = $_POST["dni"];
	$nombre = $_POST["nombre"];
	$direccion = $_POST["direccion"];
	$email = $_POST["email"];

	$bd= new base();
	$nuevo_cliente= new cliente($dni,$nombre,$direccion,$email,'1111');
	$result=$nuevo_cliente->modificar($bd->link);


	header('Content-Type: application/json');	
	echo json_encode($result);

	mysqli_close($link); 
 



?>