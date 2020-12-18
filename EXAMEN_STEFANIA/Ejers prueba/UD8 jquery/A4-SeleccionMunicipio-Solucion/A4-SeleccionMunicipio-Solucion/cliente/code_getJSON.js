$( document ).ready(function() {
    console.log( "ready!" );

    $.getJSON("../servidor/cargaProvinciasJSON.php", function(){console.log( "suceed" )}) // no paso nada, devuelve todas las provincias
        	.done(function(response){
    				$.each(response, function(key, value){  //para iterar .each busco tag provincia
                        $("#provincias").append('<option value="'+key+'">'+value+'</option>');  // para select, añado las options con su value
    		      });
    	   });


    $("#provincias").change(function(){   // dentro del ready, cuando cambia el select
		nombre_provincia = $( "#provincias option:selected" ).text();   // recojo lo seleccionado
		codigo_provincia = $( "#provincias option:selected").val(); //nos devuelve el value
		$("#titulo").html(nombre_provincia+" "+codigo_provincia); //escribe en el titulo nombre + valor
        var provinciaJSON= { "provincia": codigo_provincia }; //crea como array
        console.log(provinciaJSON); //muestra {provincia: 21}
		$.getJSON("../servidor/cargaMunicipiosJSON.php",provinciaJSON)
    		  .done(function(response){
                        console.log("response="+response);
    					$("#municipio").html(''); // borro lo que hay en el select
                        $.each(response, function(key, value){   //para cada respuesta 
                    		console.log("valor="+value);
                            $("#municipio").append('<option value="'+key+'">'+value+'</option>'); // añado al selsect
    					});	
    				})
    	});
   		$("#seleccion").html("Respuesta :"); // Si cambio provincia, borro el texto

	$("#municipio").change(function(){  //evento cambio select municipio, cambio texto
		nombre_provincia_sel = $( "#provincias option:selected" ).text();   // recojo lo seleccionado
		 nombre_municipio_sel = $( "#municipio option:selected" ).text();   // recojo lo seleccionado
    	$("#seleccion").html("Provincia :"+nombre_provincia_sel+" -  Municipio :"+nombre_municipio_sel);
    	console.log("cambio texto");
	});

});