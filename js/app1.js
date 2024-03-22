// Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.
console.log('Bienvenido - Le ayudaremos saber el mayor de dos numeros');

let num1 = parseFloat(prompt ('Digite el primer numero '));
let num2 = parseFloat(prompt ('Digite el segundo numero '));

if(num1>num2){
    console.log(`${num1} es mayor que ${num2}`);
}else if (num2>num1) {
    console.log(`${num2} es mayor que ${num1}`);
} else {
    console.log(`Ambos numeros son iguales`);
}

