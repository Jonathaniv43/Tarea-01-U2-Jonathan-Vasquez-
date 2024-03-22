//Escribir un programa que escriba en pantalla los divisores de un número dado.

const num = parseInt(prompt('Ingrese el numero para obtener sus divisores'))
let divisores = []

for (let i = 0; i <= num; i++) {
    if (num%i === 0){
        divisores.push(i);
    }
    
}
console.log(`los divisores de ${num} son ${divisores}`);