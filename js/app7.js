/*Crear un programa que determine si un número introducido en un Prompt es par o
no, la respuesta será mostrada en la consola.*/

console.log('El Numero es Par o Impar');
const num =  parseInt(prompt('Ingrese el mumero '))

if (num % 2 === 0) {
    console.log(`${num} es par`);
}else{
    console.log(`${num} es impar`);
}