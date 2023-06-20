// Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos.

let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");
let num3 = prompt("Ingrese el tercer número");

if (num1 > num2 && num1 > num3) {
    alert("El primer número es el mayor");
}
else if (num2 > num1 && num2 > num3) {
    alert("El segundo número es el mayor");
}
else if (num3 > num1 && num3 > num2) {
    alert("El tercer número es el mayor");
}
else {
    alert("Los números son iguales");
}

