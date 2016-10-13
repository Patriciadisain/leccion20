
function callbackPromedio (numero1, numero2,numero3,callback){
		return callback ((numero1+numero2+numero3)/3);
}
// probar que el promedio funciona con "algo"
callbackPromedio(20,10,30,function(algo){
	alert("EL promedio es: "+algo);
})


// ejercicios 2


var conteoSegundos = 1;
function segundero (){
	setInterval(function() {		
			document.getElementById("titulo").innerHTML=conteoSegundos++;
		 },1000);
}

// Llamada a la función
segundero();