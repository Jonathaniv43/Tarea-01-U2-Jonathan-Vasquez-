/*20. La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla:*/


function multiply(a, b){
    return a * b

}
let a = parseFloat(prompt(`Ingrese el primer numero `))
let b = parseFloat(prompt(`Ingrese el segundo numero `))


const multiplicacion = multiply(a,b)
console.log(`EL resultado de esa multiplicacion es ${multiplicacion} `);