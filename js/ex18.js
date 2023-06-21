// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

let numero = prompt('Ingresa un número');
let suma = 0;
let contador = 1;

do {
  suma += contador;
  contador++;
} while (contador <= numero);
console.log('La suma de todos los números naturales que le preceden a tu número es: ' +suma);