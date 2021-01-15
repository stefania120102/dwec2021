<?php

	require ('modelo.php');

	$dni = $_POST["dni"];

	$bd= new base();
	$nuevo_cliente= new cliente($dni,'','','','');
	$datos=$nuevo_cliente->buscar($bd->link);

	header('Content-Type: application/json');

	
	
	echo json_encode($datos);

 


?>