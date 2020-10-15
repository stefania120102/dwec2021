/*function capturar()
{
 document.write(document.getElementById(nombre));
 // Obtenemos el valor por el Nombre
}
capturar(); */

var separarEmail = "";
var cad="Ana:Cabanach:640162078:ana@gmail.com:46115";
var tfo;
//cad=cad.toUpperCase(); mayusculas
alert(cad);
splitTodosCampos=cad.split(":");

nombre=splitTodosCampos[0];
apellido=splitTodosCampos[1];
telf=splitTodosCampos[2];
email=splitTodosCampos[3];
codPos=splitTodosCampos[4];
split1Campo=splitTodosCampos[5];
//alert("Datos: " + splitTodosCampos);
alert("Nombre: " + nombre);

alert("Apellido: " + apellido);
alert("Teléfono: " + telf);
alert("Email: " + email);
alert("Código postal: " + codPos);
//tfo=splitTodosCampos[2];
//Cambio en el telefono los números 3 por 9s
//tfo=tfo.replace("2","9");
//alert(tfo);
//Muestro el quinto numero del telefono


var tipoEmail = email.substring("@");
alert("Tipo email: " + tipoEmail);//asi NO.

//alert(tfo.charAt(4));
//alert("Bienvenido al CEED CV");