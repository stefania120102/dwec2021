function pintoTabla(){
var tabla = document.createElement("table");

var numero=1;
for(var i=0; i< 100;i++){
    var fila=document.createElement("tr");
    for(var j=0;j<100;j++){
        var celda =document.createElement("td");
        var texto=document.createTextNode(numero);
        celda.appendChild(texto);
        fila.appendChild(celda);
        
        if(esCasiPrimo(numero)){
        celda.style.backgroundColor="yellow";  
        } //CAMBIA EL FONDO A COLOR AMARILLO
        
        numero++;
    }
    tabla.appendChild(fila);


}
document.body.appendChild(tabla);//importante para hacer esto hay que ponerle un onload en el body del html y meterlo en una function
}

function esCasiPrimo(  n  ){
    
    var oportunidad=0;
    for(i=2;i<n;i++){
        if(n%i==0){
            oportunidad++;
            if(oportunidad>1){
                return false;
            }
        }
    }
    
    if(oportunidad==1)
        return true;
    else
        return false;
}
