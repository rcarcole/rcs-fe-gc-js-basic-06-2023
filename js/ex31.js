// Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
// condición `if` y una función auxiliar para verificar si un número es primo.

let numero = prompt("Ingrese un número:");

function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= numero; i++) {
  if (esPrimo(i)) {
    console.log(i + " es primo.");
  }
}
