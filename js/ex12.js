// Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre
// en la consola si ha aprobado (calificación mayor o igual a 70) o no.


let calificacion = prompt('Ingresa tu calificación, si es igual o superior a 70 has aprobado.');

if (calificacion >= 70){
    alert('Has aprobado, campeón.');
} else {
    alert('Has suspendido.');
}