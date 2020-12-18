<?php

class Bd	
{
	private $link;
	function __construct()
	{
		if (!isset ($this->link)) {
			$this->link= new mysqli('localhost', 'root', '', 'virtualmarket2');
			if ( $this->link->connect_errno ){ 
			$dato= "Fallo al conectar a MySQL: ". $link->connect_error; 
 			
			}else $this->link->set_charset('utf-8'); 
		}
	}
	function __get($var){
		return $this->$var;
	}
}
class Cliente
{
		private $dniCliente;
		private $nombre;
		private $direccion;
		private $email;
		private $pwd;
		private $administrador;

		static function getAll($link){
			$consulta="SELECT * FROM clientes";
			return $result=$link->query($consulta);
		}

		function __construct($dni, $nombre, $direccion,$email,$pwd, $administrador){
			$this->dniCliente=$dni;
			$this->nombre=$nombre;
			$this->direccion=$direccion;
			$this->email=$email;
			$this->pwd=$pwd;
			$this->administrador=$administrador;
		}
		function buscar ($link){
			$consulta="SELECT * FROM clientes where  dniCliente='$this->dniCliente'";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
		function autenticar ($link){
			$consulta="SELECT nombre FROM clientes where dniCliente='$this->dniCliente' and pwd='$this->pwd'";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
		function buscarAdministrador ($link){
			$consulta="SELECT administrador FROM clientes where administrador = 0";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
}

class Producto
{
		private $idProducto;
		private $nombre;
		private $origen;
		private $foto;
		private $marca;
		private $categoria;
		private $peso;
		private $unidades;
		private $volumen;
		private $precio;

		static function getAll($link){
			$consulta="SELECT * FROM productos";
			return $result=$link->query($consulta);
		}
		function __construct($idProducto, $nombre, $origen,$foto,$marca, $categoria, $peso, $unidades, $volumen, $precio){
			$this->idProducto=$idProducto;
			$this->nombre=$nombre;
			$this->origen=$origen;
			$this->foto=$foto;
			$this->marca=$marca;
			$this->categoria=$categoria;
			$this->peso=$peso;
			$this->unidades=$unidades;
			$this->volumen=$volumen;
			$this->precio=$precio;
		}
		function buscarP ($link){
			$consulta="SELECT * FROM productos where idProducto='$this->idProducto'";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
}

class LineaPedidos
{
		private $idPedido;
		private $nlinea;
		private $idProducto;
		private $cantidad;


		static function getAll($link){
			$consulta="SELECT * FROM lineaspedidos";
			return $result=$link->query($consulta);
		}
		function __construct($idPedido, $nlinea, $idProducto,$cantidad){
			$this->idPedido=$idPedido;
			$this->nlinea=$nlinea;
			$this->idProducto=$idProducto;
			$this->cantidad=$cantidad;

		}
		function buscarL ($link){
			$consulta="SELECT * FROM lineaspedidos where idPedido='$this->idPedido'";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
}

class Pedidos
{
		private $idPedido;
		private $fecha;
		private $dirEntrega;
		private $nTarjeta;
		private $fechaCaducidad;
		private $matriculaRepartidor;
		private $dniCliente;


		static function getAll($link){
			$consulta="SELECT * FROM pedidos";
			return $result=$link->query($consulta);
		}
		function __construct($idPedido, $fecha, $dirEntrega,$nTarjeta, $fechaCaducidad, $matriculaRepartidor,$dniCliente){
			$this->idPedido=$idPedido;
			$this->fecha=$fecha;
			$this->dirEntrega=$dirEntrega;
			$this->nTarjeta=$nTarjeta;
			$this->fechaCaducidad=$fechaCaducidad;
			$this->matriculaRepartidor=$matriculaRepartidor;
			$this->dniCliente=$dniCliente;

		}
		function buscarP ($link){
			$consulta="SELECT * FROM pedidos where idPedido='$this->idPedido'";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
}