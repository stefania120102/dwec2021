<?php
$n = $_POST["n"];
$cielo = $_POST["c"];
$fecha = $_POST["fecha"];
$max = $_POST["max"];
$min = $_POST["min"];


$numeroAleatorio = rand(0, 10);
$respuesta = ($numeroAleatorio % 2 == 0)? "true" : "false";

  echo  json_encode($respuesta);

?>