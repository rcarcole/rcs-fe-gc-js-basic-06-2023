// Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
// consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
// acumuladora.

let palabra = prompt("Ingrese una palabra:");
let palabraInvertida = "";
let i = palabra.length - 1;

while (i >= 0) {
  palabraInvertida += palabra[i];
  i--;
}

console.log("La palabra invertida es: " + palabraInvertida);
