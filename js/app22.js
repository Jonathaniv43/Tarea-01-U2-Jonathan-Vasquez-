/*
22. Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio
*/

let array = [1,2,3,4,5,6]
let i = 0;
console.log('____Usando While________\n');
while (i < array.length ) {
    console.log(array[i]);
    i++;
}
console.log('____Usando For________\n');

for (let k = 0; k < array.length; k++) {
    console.log(array[k]);
    
}
console.log('____Usando forEach________\n');
array.forEach(numero => {
    console.log(numero);
});

console.log('____Sumando 1 a Cada uno________\n');
array.forEach(numero => {
    console.log(numero+1);
});

console.log('____Duplicando en arreglo & Sumando 1 a Cada uno________\n');
let nuevoArreglo = []
for (let j = 0; j < array.length; j++) {
let nuevoDato = array[j]+1;
nuevoArreglo.push(nuevoDato)
}
console.log(nuevoArreglo);

console.log('____Calcular promedio________\n');
let suma

function encontrarPromedio(array) {
    let suma = 0;
    array.forEach(element => {
       
            suma += element
        
    });
    return suma / array.length;
}

const promedio = encontrarPromedio(array);
console.log(`El promedio es ${promedio}`);

    
