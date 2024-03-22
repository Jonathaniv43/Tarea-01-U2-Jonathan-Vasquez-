/*27. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares, pista: utilizar reduce().*/

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
let pares = arreglo.reduce((resultado, numero) => {
    if (numero % 2 === 0) {
        resultado.push(numero);
    }
    return resultado;
}, []);

console.log(pares);