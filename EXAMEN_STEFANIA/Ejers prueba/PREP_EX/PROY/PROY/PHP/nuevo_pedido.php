<?php

	require ('conexion.php');
	require ('modelo.php');
	
	$fecha = $_POST["fecha"];
	$dni = $_POST["dni"];


	$bd= new base();
	
	$nuevo_pedido= new pedidos('',$fecha,$dni);
	$id=$nuevo_pedido->nuevoid($bd->link);
	$result=$nuevo_pedido->insertar($bd->link);



	header('Content-Type: application/json');	
	echo json_encode($result);


	mysqli_close($link); 



?>