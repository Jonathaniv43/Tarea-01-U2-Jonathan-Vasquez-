/*
    29. Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
vacío debe devolver cero.
*/

let array = [90,100,90]
    // array = []  //  Arreglo vacío
let suma = 0
let promedio = 0


    if (array.length === 0){
        promedio = 0
        

    }else{
        for (let i = 0; i < array.length; i++) {
        suma += array[i]
        }      
    promedio = suma/array.length
    
    }

console.log(`El promedio del arreglo es ${promedio.toFixed(2)}%`);