/*
Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12.

*/

const numero = parseInt(prompt(`Ingrese el numero del cual desea conocer su tabla de multiplicacion`))
let cont = 1
let multiplicacion

while (cont <= 12) {
    multiplicacion = numero * cont;
    console.log(`La multiplicacion de ${numero} * ${cont} es igual a ${multiplicacion} `);
    cont ++;
}