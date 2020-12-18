<?php
	require ('conexion.php');
	require ('modelo.php');
	$idPedido = $_POST["idPedido"];
	$result = mysqli_query($link,"SELECT L.idPedido, L.nlinea, P.nombre, L.cantidad FROM lineaspedidos L, productos P WHERE L.idProducto = P.idProducto AND L.idPedido =" . $idPedido);
	$nfilas = $result->num_rows;

    while($row = mysqli_fetch_array($result))
    {
		$objeto = new stdClass();

		$objeto->nlinea = $row["nlinea"];
		$objeto->producto = $row["nombre"];
		$objeto->cantidad = $row["cantidad"];
		$datos[]=$objeto;
	}

	if($nfilas!=0){
		header('Content-Type: application/json');
		echo json_encode($datos);
	}else{
		echo "true";
	}
	mysqli_free_result($result); 
	mysqli_close($link); 


?>