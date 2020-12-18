<?php
foreach ($product as $key => $value);

echo $product['dniCliente']."<br><br>";
echo "<b>".$product['nombre']."</b><br><br>";
echo ": ".$product['dirección']."<br>";
echo ": ".$product['email']."<br>";
echo ": ".$product['pwd']."<br>";
echo ": ".$product['administrador']."<br>";

echo "Cantidad<input type='number' name='cantidad' value=1><br>";
echo "<input type='submit' src='vistas/verCarrito.php' value='Comprar'><br>";
