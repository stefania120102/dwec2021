function esPrimo(numero){

    var primo = true;

    i=2;

    do{
        if(numero%i==0){//si es divisible --esto es el resto que es igual a 0
            primo = false;

        }
        i++;
        
    }while(i<numero);
    return primo;

}


function esPalindromo(numero){

    var palindromo = true;
    var splitNumero = numero.split("");

    var reversaNum = numero.split("");
     reversaNum.reverse();

    //console.log(splitNumero);
  
    //console.log(reversaNum);

    for(i=0; i<numero.length;i++){
        //console.log(splitNumero[i] + " " + reversaNum[i]);
        if(splitNumero[i] != reversaNum[i]){
            palindromo = false;
            //console.log("entro en if");
        }
    }
    return palindromo;

}

function calcular(){
    var respuesta = new Array();
    var limite = document.getElementById("limite").value;

    //console.log(limite);
    for(x=2; x <limite;x++ ){
        if(esPrimo(x)&& esPalindromo(x.toString())){
           // console.log(x + "Cumple las condiciones");
            respuesta.push(x);//guardo en el string resultado


        }
    }
    //console.log(respuesta);
    var confirmacion= confirm("Hay " + respuesta.length + " resultados del 2 al " + limite + ". Quieres verlos en pantalla? ");
    console.log(confirmacion);
    if(confirmacion){
        
    document.write(respuesta.join(" , "));
    }




}