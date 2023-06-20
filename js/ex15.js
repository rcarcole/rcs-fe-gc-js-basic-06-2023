// Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
// año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
// entre 400)

let anyo = prompt('Ingresa un año y el programa determinará si es un año bisiesto o no.');

if ((anyo % 4 === 0 && anyo % 100 !== 0) || anyo % 400 === 0) {
    console.log("Es bisiesto");
  } else {
    console.log("No es bisiesto");
  }