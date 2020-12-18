<?php
session_start();
include "vistas/inicio.html";
if (isset($_SESSION['nombre'])){
	require "modelo.php";
	$link=new Bd;
	$cli= new Cliente($_GET['dniCliente'],'','','','','');
	$product=$cli->buscar($link->link);
	require "vistas/verDetalle.php";
	
	require "vistas/mensaje.php";
	$link->link->close();
}else {
	$product="Es necesario estar registrado<br>";
	require "vistas/mensaje.php";
}
header('Content-Type: application/json');	
echo json_encode($product);
include "vistas/fin.html";