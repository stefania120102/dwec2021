<?php

	require ('modelo.php');
	require ('conexion.php');

	$idPedido = $_POST["idPedido"];

	$bd= new base();
	$pedido= new pedidos($idPedido,'','');
	$datos=$pedido->buscar($bd->link);

	header('Content-Type: application/json');

	
	
	echo json_encode($datos);

 


?>