// . Crea un programa que solicite al usuario ingresar un número y determine si es divisible
// entre 3.


let numero = prompt('Ingresa un número y te diré si es divisible por 3: ');

if (numero % 3 === 0) {
    alert('El número es divisible por 3');
} else{
    alert('No es divisible');
}