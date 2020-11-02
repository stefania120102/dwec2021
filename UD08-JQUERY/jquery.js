$(document).ready(function() {
    //Aquí van todas las acciones del documento.
    //console.log("jquery ok");
    $("#esconder").click(function(){
        //console.log("esconder");
        $("article").hide(); //esconder
    })

    //Aquí van todas las acciones del documento.
    $("#ensenar").click(function(){
        $("article").show(); //muestro
    })

    //Aquí van todas las acciones del documento.
    $("#anado").click(function(){
        $("section").append("<article>Esto es un article dentro de section<br></article>"); //añadir
    })

    //Aquí van todas las acciones del documento.

    $("#quito").click(function(){
        $("article:last-child").remove(); //eliminar
    })
});