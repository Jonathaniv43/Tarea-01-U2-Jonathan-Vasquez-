/*
    19. Usando for, crear un programa que determine si un número es perfecto o no, (se dice
que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).
*/
console.log('Verificación de un número perfecto');
const num = parseInt(prompt('Ingrese el número para verificar si es perfecto'));
let divisores = [];
let suma = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        divisores.push(i);
    }
}

for (let k = 0; k < divisores.length; k++) {
    suma += divisores[k];
}

if (suma === num) {
    console.log(`El número ${num} ES perfecto.`);
} else {
    console.log(`El número ${num} NO es perfecto.`);
}
