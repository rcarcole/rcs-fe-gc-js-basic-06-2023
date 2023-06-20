// Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
// 1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
// corresponde a "Lunes", 2 corresponde a "Martes", etc.).


let dia = prompt("Ingresa un número del 1 al 7");

switch (dia) {
  case "1":
    alert("Lunes");
    break;
  case "2":
    alert("Martes");
    break;
  case "3":
    alert("Miércoles");
    break;
  case "4":
    alert("Jueves");
    break;
  case "5":
    alert("Viernes");
    break;
  case "6":
    alert("Sábado");
    break;
  case "7":
    alert("Domingo");
    break;
  default:
    alert("El número ingresado no és válido");
    break;
}
