<?php  
class base 
{ 
    private $link;

    public function __construct() 
    { 
    if (!isset($this->link)){    
        $this->link = new mysqli('localhost', 'root', '', 'virtualmarket'); 

        if ( $this->link->connect_errno ) 
        { 
            echo "Fallo al conectar a MySQL: ". $this->_db->connect_error; 
            return;     
        } 

        $this->link->set_charset('utf-8'); 
    }
    }
    public function __get($var){         
        if (property_exists(__CLASS__, $var)){   
            return $this->$var;         
        }         
        return NULL;     
    } 
}  

class cliente 
{     
    private $dniCliente  ;
    private $nombre;
    private $direccion;
    private $email;
    private $pwd;
    
   

    public function __construct($dniCliente,$nombre,$direccion,$email,$pwd) 
    { 
    $this->dniCliente=$dniCliente;
    $this->nombre=$nombre;
    $this->direccion=$direccion;
    $this->email=$email;
    $this->pwd=$pwd;
       
    } 
    public function validar ($link){
        $consul="SELECT * FROM clientes where nombre='".$this->nombre."' and pwd='".$this->pwd."'";
        $result = $link->query($consul);
        return $result->fetch_array();
               
    }
    public function buscar ($link){
        $consul="SELECT * FROM clientes where dniCliente='".$this->dniCliente."'";
        $result = $link->query($consul);
        return $result->fetch_assoc();
               
    }
    public function insertar ($link){
        
        $consul="INSERT INTO clientes VALUES ('$this->dniCliente', '$this->nombre', '$this->direccion', '$this->email', '11111');";
        $respuesta = $link->query($consul);
        return $respuesta;

    }

    public function modificar ($link){
        $consul=" UPDATE clientes SET nombre = '$this->nombre', direccion = '$this->direccion', email = '$this->email' WHERE clientes.dniCliente = '$this->dniCliente';"; 
        $respuesta = $link->query($consul);
        return $respuesta;

    }




    public function borrar ($link){
        
        $consul="DELETE FROM clientes WHERE dniCliente = '$this->dniCliente'";
        $respuesta = $link->query($consul);
        return $respuesta;
    }
    



    public function sesion (){
        $_SESSION['nombre']=$this->nombre;
        $_SESSION['dni']=$this->dniCliente;
               
    } 
     public function __set($var, $valor){
             if (property_exists(__CLASS__, $var)){   
                $this->$var = $valor;           
            } else   echo "No existe el atributo $var.";    
        }    
     public function __get($var){         
        if (property_exists(__CLASS__, $var)){   
            return $this->$var;         
        }         
        return NULL;     
    } 

}
class producto{
    private $idProducto;
    private $nombre;
    private $origen;
    private $marca;
    private $categoria;
    private $peso;
    private $precio;
    private $foto;

    public function __construct($idProducto,$nombre,$origen,$marca,$categoria,$peso,$precio,$foto) 
    { 
    $this->idProducto=$idProducto;
    $this->nombre=$nombre;
    $this->origen=$origen;
    $this->marca=$marca;
    $this->categoria=$categoria;
    $this->peso=$peso;
    $this->precio=$precio;
    $this->foto=$foto;
       
    } 
    public function consultar ($link){
        $cond="SELECT * FROM productos where idProducto='$this->idProducto'";
    $result=$link->query($cond);
    $row = $result->fetch_array();
    $this->nombre=$row['nombre'];
    $this->origen=$row['origen'];
    $this->marca=$row['marca'];
    $this->categoria=$row['categoria'];
    $this->peso=$row['peso'];
    $this->precio=$row['precio'];
    $this->foto=$row['foto'];
    }
    public function __set($var, $valor){
             if (property_exists(__CLASS__, $var)){   
                $this->$var = $valor;           
            } else   echo "No existe el atributo $var.";    
        }    
     public function __get($var){         
        if (property_exists(__CLASS__, $var)){   
            return $this->$var;         
        }         
        return NULL;     
    } 
}
class carrito{
    private $total;
    private $id;
    private $nombre;
    private $precio;
    private $cantidad;
    public function __construct() 
    { 
       
    } 
    public function vercookie (){
    $this->id=$_COOKIE['cid'];
    $this->nombre=$_COOKIE['cnombre'];
    $this->precio=$_COOKIE['cprecio'];
    $this->cantidad=$_COOKIE['ccantidad'];
    
    }
    public function actualizar($cantidades){
        foreach ($cantidades as  $i=>$valor )  {
              
            $this->cantidad[$i]=$valor;
            setcookie('ccantidad['.$i.']',$valor,time()+36000 );  
        }
    }
    public function anadir($fid,$fnombre,$fprecio,$fcantidad){
        $this->total=$this->total+1;
        $total=$this->total;        
        setcookie('ctotal',$total, time()+36000);
        setcookie('cid['.$total.']',$fid, time()+36000);
        $this->id[$total]=$fid;
        setcookie('cnombre['.$total.']',$fnombre, time()+36000);
        $this->nombre[$total]=$fnombre;
        setcookie('cprecio['.$total.']',$fprecio, time()+36000);
        $this->precio[$total]=$fprecio;
        setcookie('ccantidad['.$total.']',$fcantidad, time()+36000);
        $this->cantidad[$total]=$fcantidad;
    }
    public function __set($var, $valor){
             if (property_exists(__CLASS__, $var)){   
                $this->$var = $valor;           
            } else   echo "No existe el atributo $var.";    
        }    
     public function __get($var){         
        if (property_exists(__CLASS__, $var)){   
            return $this->$var;         
        }         
        return NULL;     
    } 
    function borrarc(){
        $variable=$_COOKIE['cid'];
        foreach ($variable as $key => $value)   {        
            setcookie('cid['.$key.']',"", time()-36000);
            setcookie('cnombre['.$key.']',"", time()-36000);
            setcookie('cprecio['.$key.']',"", time()-36000);
            setcookie('ccantidad['.$key.']',"", time()-36000);  
        }
    setcookie('ctotal',"", time()-36000);
    }
    function cestahtml ($tipo){
        $StringHtml="<TABLE><TR><TH>Id</TH><TH >Nombre</TH><TH>Precio</TH><TH>Cantidad</TH><TH>Importe</TH></TR>";
        $suma=0;
        $importe=0;
        foreach ($this->id as $i=>$valor) {
             if ($this->cantidad[$i]>0) {     
                $importe=$this->precio[$i]*$this->cantidad[$i];
                $suma+=$importe;
                $StringHtml.="<TR><TD>".$this->id[$i]."</TD><TD >".$this->nombre[$i]."</TD><TD>".$this->precio[$i]."</TD><TD>";
                if ($tipo==0) {
                $StringHtml.=$this->cantidad[$i];
                }else{
                    $StringHtml.="<input type='number' name='mcantidad[$i]' value='".$this->cantidad[$i]."'>";
                }
                $StringHtml.="</TD><TD>$importe</TD></TR>";
            }
        }
        $StringHtml.="<TR><TD></TD><TD ></TD><TD></TD><TD>TOTAL</TD><TD>$suma</TD></TR></table><br>";
        return $StringHtml;
    }

} 
class pedidos
{
    private $idPedido;
    private $fecha;
    private $dniCliente;

    function __construct($idPedido,$fecha,$dniCliente){
        $this->idPedido=$idPedido;
        $this->fecha=$fecha;
        $this->dniCliente=$dniCliente;

    }
  
    function nuevoid($link){
        $cons= "SELECT max(idPedido) as maxim FROM pedidos ";
      
    $result=$link->query($cons);
    If ($fila= $result->fetch_assoc())
        $this->idPedido=$fila['maxim']+1;
    else $this->idPedido=0;
  
    }


    function insertar ($link){
      
        $cons = "insert into pedidos (idPedido, fecha, dniCliente) values ('$this->idPedido','$this->fecha','$this->dniCliente')";
        $result=$link->query ($cons);
        return $this->idPedido;
    }



    public function buscar ($link){
        $consul="SELECT * FROM pedidos where idPedido='".$this->idPedido."'";
        $result = $link->query($consul);
        return $result->fetch_assoc();
               
    }

    public function modificar ($link){
        $consul=" UPDATE pedidos SET fecha = '$this->fecha', dniCliente = '$this->dniCliente' WHERE pedidos.idPedido = '$this->idPedido';"; 
        $respuesta = $link->query($consul);
        return $respuesta;
    }

    

    public function borrar ($link){
        
        $consul="DELETE FROM pedidos WHERE idPedido = '$this->idPedido'";
        $respuesta = $link->query($consul);
        return $respuesta;
    }


    public function __set($var, $valor){
             if (property_exists(__CLASS__, $var)){   
                $this->$var = $valor;           
            } else   echo "No existe el atributo $var.";    
        }    
    public function __get($var){         
        if (property_exists(__CLASS__, $var)){   
            return $this->$var;         
        }         
        return NULL;     
    } 
}


class lineas{
    private $idPedido;
    private $nlinea;
    private $idProducto;
    private $cantidad;

    function __construct($idPedido,$nlinea,$idProducto,$cantidad){
        $this->idPedido=$idPedido;
        $this->nlinea=$nlinea;
        $this->idProducto=$idProducto;
        $this->cantidad=$cantidad;
       
    }
    public function __set($var, $valor){
             if (property_exists(__CLASS__, $var)){   
                $this->$var = $valor;           
            } else   echo "No existe el atributo $var.";    
        }    
    public function __get($var){         
        if (property_exists(__CLASS__, $var)){   
            return $this->$var;         
        }         
        return NULL;     
    } 
    function insertar ($link){
        $cons = "insert into lineaspedidos (idPedido, nlinea , idProducto,cantidad) values ($this->idPedido, $this->nlinea, $this->idProducto, $this->cantidad)";

        $result=$link->query($cons);
        return $result;
    }
    function borrar ($link){
        $cons = "DELETE FROM lineaspedidos WHERE idPedido = '$this->idPedido' AND nlinea = '$this->nlinea'";
            $result=$link->query($cons);
            return $result;
    }

    
}
?> 