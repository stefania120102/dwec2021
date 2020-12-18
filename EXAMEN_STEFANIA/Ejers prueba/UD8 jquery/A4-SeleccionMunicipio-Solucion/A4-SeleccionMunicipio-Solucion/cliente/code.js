


$( document ).ready(function() {
    console.log( "ready!" );

    $.ajax({
    	url: "../servidor/cargaProvinciasJSON.php",  // no paso nada, devuelve todas las provincias
    	type: "post",
    	dataType: "json",
    	success: function(response){
                for (var key in response) {
                     $("#provincias").append('<option value="'+key+'">'+response[key]+'</option>'); 
                } 
    	},
    });

    $("#provincias").change(function(){   // dentro del ready, cuando cambia el select
		console.log("cambio municipio");
		nombre_provincia = $( "#provincias option:selected" ).text();   // recojo lo seleccionado
		codigo_provincia = $( "#provincias option:selected").val();
		$("#titulo").html(nombre_provincia+" "+codigo_provincia);
		var json_provincia= { "provincia" : codigo_provincia };
        console.log(json_provincia);
		$.ajax({                                // llamada ajax
    		url: "../servidor/cargaMunicipiosJSON.php", // paso en post "provincia=codigo provincia", devuelce lista municipios
    		type: "post",
    		data: json_provincia,  // ojo, aunque ponga xml se pasa parametro con el igual
    		dataType: "json",
    		success: function(response){
                        console.log("success");
    					$("#municipio").html(''); // borro lo que hay en el select
                        for (var key in response) {
    						$("#municipio").append('<option value="'+key+'">'+response[key]+'</option>'); // añado al selsect
    					}
    					
    				},
    	});
   		$("#seleccion").html("Respuesta :"); // Si cambio provincia, borro el texto
	});

	$("#municipio").change(function(){  //evento cambio select municipio, cambio texto
		nombre_provincia_sel = $( "#provincias option:selected" ).text();   // recojo lo seleccionado
		 nombre_municipio_sel = $( "#municipio option:selected" ).text();   // recojo lo seleccionado
    	$("#seleccion").html("Provincia :"+nombre_provincia_sel+" -  Municipio :"+nombre_municipio_sel);
    	console.log("cambio texto");
	});

});

