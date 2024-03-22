/*
    17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario.
*/

const num1 = parseInt(prompt('Ingrese el primer digito'))
const num2 = parseInt(prompt('Ingrese el segundo digito'))

let cont = num1;
let suma = 0;

if (num1<num2){
    while (cont<=num2) {
        if(cont %2 === 0){
            suma += cont;
        }
        cont++;
    }
}else{
    cont = num2
    while (cont<=num1) {
        if(cont %2 === 0){
            suma += cont;
        }
        cont++;
    }
}

console.log(`La suma total de los numeros pares entre ${num1} y ${num2} es igual a ${suma}`);