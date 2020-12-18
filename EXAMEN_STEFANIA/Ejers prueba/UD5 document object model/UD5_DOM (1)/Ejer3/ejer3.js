// Creamos 100 checkbox con numeros aleatorios
function crearCheckbox(){
	for(i=0;i<100;i++)
	{
		var valorAleatorio=Math.random();
		// Creamos el checkbox con value aleatorio
		var checkbox = document.createElement('input');
		var salto = document.createElement('br');
		checkbox.type = "checkbox";
		checkbox.name = "name";
		checkbox.value = valorAleatorio;
		checkbox.id = "id"+i;
		// Al lado del checkbox tenemos un label con el mismo valor aleatorio
		var label = document.createElement('label');
		label.appendChild(document.createTextNode(valorAleatorio));
		// Anexamos checbox y etiqueta al body
		document.body.appendChild(salto);
		document.body.appendChild(checkbox);
		document.body.appendChild(label);	
	}
	
}


function marcarTodos(){
	for(i=0;i<100;i++)
	{
		var checkbox = document.getElementById("id"+i);
		checkbox.checked=1;
		
	}
}

function desmarcarTodos(){
	for(i=0;i<100;i++)
	{
		var checkbox2 = document.getElementById("id"+i);
		checkbox2.checked=0;

	}
}

