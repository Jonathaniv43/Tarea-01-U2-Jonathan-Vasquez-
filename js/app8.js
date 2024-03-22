/* Crear un programa que determine si un número introducido en un Prompt es divisible
por 5 o no, mostrar el resultado con console.log. */

console.log('-¿Es el numero Divisible entre 5?-');
const num = parseInt(prompt(`Ingrese el numero a comprobar`))

if (num%5 == 0 ) {
    console.log(`${num} es divisible por 5`);
    
}else{
    console.log(`${num} no es divisible por 5`);
}