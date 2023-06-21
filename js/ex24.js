// . Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.

let numero = prompt("Ingresa un numero");
let i = 0;
let sumatorio = 0;
while (i < numero.length) {
    sumatorio += parseInt(numero.charAt(i));
    i++;
}
console.log('La suma de todos los dígitos de tu número es: ' +sumatorio);