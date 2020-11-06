$(document).ready(function(){

    $.ajax({
        url: '../servidor/cargaprovinciasJSON.php',
        type: 'POST',
        dataType: 'json', 
        success: function(respuesta) {
            console.log(respuesta); //hasta aqui ver si funciona
            for(var key in respuesta){
                //console.log(key + " - " +respuesta[key]);
                $("#provincias").append("<option value = ' " + key +"'>" + respuesta[key] + "</option>"); //añade a el id provincias (mirar html)
            }  
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
});

$("#provincias").change(function(){
    var codigo_provincia = $("#provincias option:selected").val();
     //console.log(codigo_provincia);
    var dato_enviar = { "provincia" : codigo_provincia}; //si quiere psarle mas de un dato pon (  ,"pueblo"   ) por ej

    $.ajax({
        url: '../servidor/cargaMunicipiosJSON.php',
        type: 'POST',
        data: dato_enviar,
        dataType: 'json', 
        success: function(respuesta) {
            console.log(respuesta); //hasta aqui ver si funciona
            for(var key in respuesta){
                console.log(key +" - " +respuesta[key]);
                $("#municipio").append("<option value = ' " + key +"'>" + respuesta[key] + "</option>"); //añade a el id provincias (mirar html)
            }
            
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });

    $("municipio").change(function(){
        var nom_provincia = $("#provincias option:selected").text();
        var nom_municipio = $("#municipio option:selected").text();
        $("#seleccion").html("Provincia: " + nom_provincia + ",  Municipio: " + nom_municipio); //modifica
    });


});
//cuando "change" --> llamada AJAX a cargoMunicipiosJSON.php pasandole la key
/*modificar el DOM
modificar ajax
modificar jquery*/