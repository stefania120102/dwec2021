function creoCheckbox(){
    for(var i=0;i<100;i++){
    var chbx= document.createElement("input");
    var salto=document.createElement("br");
    chbx.type="checkbox";
    chbx.name="michbox";
    //chbx.value=10;
    //chbx.checked=true;//marcar todos
    var etiqueta = document.createElement("label");
    var texto= document.createTextNode(Math.random());//aqui despues de cada check aparecera un número
    etiqueta.appendChild(texto);

    document.body.appendChild(chbx);
    document.body.appendChild(etiqueta);
    document.body.appendChild(salto);
}
    document.getElementById("creaCheckbox").onclick= creoCheckbox;
  
}

function todo(){//marca todos los check
    var ckboxs = document.getElementsByTagName("input");
    console.log(ckboxs);
    for(j=0;j<ckboxs.length;j++){
        ckboxs[j].checked=true;
    }

}

function desmarcar(){//desmarca los checkbox
    var ckboxs = document.getElementsByTagName("input");
    console.log(ckboxs);
    for(j=0;j<ckboxs.length;j++){
        ckboxs[j].checked=false;
    }

}