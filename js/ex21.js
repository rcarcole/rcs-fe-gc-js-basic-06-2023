// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`.

let numero = prompt("Ingresa un número");
let multiplicacion = 1;
let contador = 1;

do {
multiplicacion *= contador;
contador++;
} while (contador <= numero);

console.log("Resultado de la multiplicación de todos los números enteros positivos menores o iguales es: ", multiplicacion);
