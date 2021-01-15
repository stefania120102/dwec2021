<?php


	require ('modelo.php');
	require ('conexion.php');
	$dni = $_POST["dni"];

	$bd= new base();
	$nuevo_cliente= new cliente($dni,'','','','');
	$respuesta=$nuevo_cliente->borrar($bd->link);

	header('Content-Type: application/json');

	
	echo json_encode($respuesta);

 


?>