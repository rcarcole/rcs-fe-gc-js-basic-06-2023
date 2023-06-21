// Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.


let numero = parseInt(prompt("Ingresa un número"));
let contadorDivisores = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    contadorDivisores++;
  }
}

if (contadorDivisores === 2) {
  console.log(numero + " es primo.");
} else {
  console.log(numero + " no es primo.");
}
