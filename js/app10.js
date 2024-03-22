/*Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
determine si el triángulo es válido o no.
*/

console.log('Verificacion de un Triángulo');
const angulo1 = parseInt(prompt('Ingrese el primer angulo del triangulo'))
const angulo2 = parseInt(prompt('Ingrese el segundo angulo del triangulo'))
const angulo3 = parseInt(prompt('Ingrese el tercer angulo del triangulo'))

const  suma =  () =>  angulo1+angulo2+angulo3


if (suma(angulo1,angulo2,angulo3) === 180){
    console.log(`El triángulo con los ángulos  ${angulo1},${angulo2},${angulo3} "ES VALIDO"`);
} else{
    console.log(`El triángulo con los ángulos  ${angulo1},${angulo2},${angulo3} "NO ES VALIDO"`);
}