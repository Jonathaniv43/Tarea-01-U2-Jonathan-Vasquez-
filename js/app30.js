/*
30. Crear una función que tome como parámetro un arreglo de números, retornar el número
menor, si es un número negativo mostrar su valor absoluto.
*/

let numeros = [1, 2, 3, 4, 6, 7,-1,-2];

function verificarMenor(numeros) {
    let menor = numeros[0]; 
    

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    
    // Si el número menor es negativo, mostrar su valor absoluto
    if (menor < 0) {
        menor = Math.abs(menor);
    }
    
    return menor;
}

const numeroMenor = verificarMenor(numeros);

console.log(`El menor valor es ${numeroMenor}`);