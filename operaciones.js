//Desarrollador 2
function suma(a, b){
	return a+b;
}
// Desarrollador 3
function resta(a, b) {
    return a - b;
}
// Desarrollador 1
function multiplicacion(a, b) {
    return a * b;
}

// Desarrollador 4
function division(a, b) {
    return a / b;
}
// Desarrollador 1
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}
//Desarrollador 2
function raizCuadrada(n){
	return Math.sgrt(n);
}

// Desarrollador 4
function porcentaje(n, porcentaje) {
    return (n * porcentaje) / 100;
}
// Desarrollador 1
function promedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma / numeros.length;
}

// Desarrollador 4
function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
} 
// Desarrollador 3
function maximo(numeros) {
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}
//Desarrollador 2
function minimo(nuemeros)[
	let min = numero[0];
	for(let i =1;< numeros.lengeth; i++){
		if(numeros[i] < min){
			min = numeros[i];
		}
	}
	return min;
}
// Desarrollador 3


console.log(suma(2, 3)); 


console.log(resta(5, 3)); 


console.log(multiplicacion(2, 3));


