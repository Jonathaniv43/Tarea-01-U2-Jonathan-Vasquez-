// Escriba un programa que pida un número y diga si es divisible por 2.

console.log(`Comprobacion de un numero divisible por 2`);
const num = parseFloat(prompt('Ingrese el numero que desea saber si es divisible por 2'))

if (num%2 === 0) {
    console.log(`${num} es divisible por 2`);
}else{
    console.log(`${num} no es divisible por 2`);
}