$(document).ready(function(){
	$("#modalCliente").hide();

	$("#modalPedidos").hide();


	$("#verCajaCliente").click(function(){
		$("#modalCliente").show();
	});
	
	$("#cancelarCliente").click(function(){
		$("#modalCliente").hide();
		//alert("Operación cancelada");
	});

	$("#verCajaPedidos").click(function(){
		$("#modalPedidos").show();
	});
	
	$("#cancelarPedido").click(function(){
		$("#modalPedidos").hide();
		//alert("Operación cancelada");
	});
	/*$("#cerrar").click(function(){
		$("#modalCliente").hide();
	});*/

});