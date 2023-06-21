// Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde ese número hasta 0 utilizando un bucle `while`.

let numero = prompt("Ingresa un número");
let contador = numero;

while (contador >= 0) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador--;
}
