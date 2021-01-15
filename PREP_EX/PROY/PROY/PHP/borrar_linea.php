<?php


	require ('modelo.php');
	require ('conexion.php');
	$idPedido = $_POST["idPedido"];
	$idLinea = $_POST["idLinea"];

	$bd= new base();
	$linea_borrar= new lineas($idPedido,$idLinea,'','');
	$respuesta=$linea_borrar->borrar($bd->link);

	header('Content-Type: application/json');

	
	echo json_encode($respuesta);
	mysqli_close($link); 

 


?>