/*
25. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
un color introducido por el usuario a través de un prompt se encuentra dentro del array o
no.
*/

const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

const color = prompt(`Ingrese el color a verificar`)


if(array.includes(color.toLowerCase())){
    console.log(`El color ${color} "ESTA" incluido dentro del arreglo`);
}else{
    console.log(`El color ${color} "NO"  esta incluido dentro del arreglo`);
}