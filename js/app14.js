/*14. Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt.*/

const max= parseInt(prompt('Ingrese el valor maximo'))
let cont = 1;

while (cont<=max) {
    console.log(`${cont}`);
    cont+= 2;
}