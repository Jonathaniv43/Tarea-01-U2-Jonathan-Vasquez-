/*
15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt.
*/

const max= parseInt(prompt('Ingrese el valor maximo'))
let cont = max;

while (cont>=1) {
    console.log(`${cont}`);
    cont--;
}