// Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
// de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.


let numero = prompt("Ingrese un número:");
let factorial = 1;

for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

console.log("El factorial de " + numero + " es: " + factorial);
