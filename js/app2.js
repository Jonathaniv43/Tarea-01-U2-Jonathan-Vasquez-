// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.
console.log('Le ayudaremos a conocer el mayor de tres numeros');
const num1 = parseFloat(prompt('Ingrese el primer numero'))
const num2 = parseFloat(prompt('Ingrese el segundo numero'))
const num3 = parseFloat(prompt('Ingrese el tercer numero'))

if (num1<num2){
    if (num2<num3) {
        console.log(`${num3} es el mayor`);
    }
    else{
        console.log(`${num2} es el mayor`);
    }
}else{
    if (num1<num3) {
        console.log(`${num3} es el mayor`);
    }
    else{
        console.log(`${num1} es el mayor`);
    }
}