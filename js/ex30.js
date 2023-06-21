// . Crea un programa que solicite al usuario ingresar un número y luego determine si es un
// número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
// `while`, una condición `if` y una variable acumuladora.

let numero = parseInt(prompt("Ingrese un número:"));
let sumatorio = 0;
let divisor = 1;

while (divisor < numero) {
  if (numero % divisor === 0) {
    sumatorio += divisor;
  }
  divisor++;
}

if (sumatorio === numero) {
  console.log(numero + " es un número perfecto.");
} else {
  console.log(numero + " no es un número perfecto.");
}
