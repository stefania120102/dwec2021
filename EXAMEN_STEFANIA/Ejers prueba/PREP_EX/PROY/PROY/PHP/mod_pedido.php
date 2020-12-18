<?php


	require ('modelo.php');
	require ('conexion.php');
	$idPedido = $_POST["idPedido"];
	$fecha = $_POST["fecha"];
	$dniCliente = $_POST["dniCliente"];

	$bd= new base();
	$mod_pedido= new pedidos($idPedido,$fecha,$dniCliente);
	$result=$mod_pedido->modificar($bd->link);


	header('Content-Type: application/json');	
	echo json_encode($result);

	mysqli_close($link); 
 



?>