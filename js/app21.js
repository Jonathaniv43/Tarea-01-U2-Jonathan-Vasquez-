/*
 21. Crear una función que reciba un número entero y muestre un error si el tipo de dato
pasado es de otro tipo.
*/

let numero = {};

numero = null;
numero = 1;

if (typeof(numero)!== 'number'){
    console.log(`El tipo del dato "NO" es un numero`);
}else{
    console.log(`El tipo de datos "SI" es un numero`);
}