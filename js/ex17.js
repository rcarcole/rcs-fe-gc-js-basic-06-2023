// Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde 2 hasta ese número utilizando un bucle `while`.


let numero = prompt("Ingresa un numero:");
let contador = 2;

console.log("Numeros pares de 2 a ", numero);

while (contador <= numero) {
  console.log(contador);
  contador += 2;
}
