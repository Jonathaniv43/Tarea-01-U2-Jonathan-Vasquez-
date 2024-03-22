/*
    13. Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt.
*/

const max= parseInt(prompt('Ingrese el valor maximo'))
let cont = 1;

while (cont<=max) {
    console.log(`${cont}`);
    cont++;
}