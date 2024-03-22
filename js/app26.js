/*
26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).
*/

const dato = prompt(`Ingrese palabras separadas por comas para convertirla en arreglo`)
let array = []

array = dato.split(',')

console.log(array);

