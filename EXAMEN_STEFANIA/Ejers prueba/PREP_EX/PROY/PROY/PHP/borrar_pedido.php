<?php


	require ('modelo.php');
	require ('conexion.php');
	$idPedido = $_POST["idPedido"];

	$bd= new base();
	$ped_borrar= new pedidos($idPedido,'','');
	$respuesta=$ped_borrar->borrar($bd->link);

	header('Content-Type: application/json');

	
	echo json_encode($respuesta);

 


?>