/*
31. Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].
*/


let array = [1,2,3,4,55,100,12]

function invertirArreglo(array) {
    return array.reverse();
    
}

const nuevoArreglo = invertirArreglo(array)
console.log(nuevoArreglo);