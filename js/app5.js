/*Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
las vocales.*/

const vocales = ['a','e','i','o','u'];
const fraseIngresada = prompt('Ingrese la frase a Comprobar')
let frase = fraseIngresada.toLowerCase();
let letra;
let contador = [0,0,0,0,0];

for (let i = 0; i < frase.length; i++) {
    letra = frase.charAt(i)
    if (letra === 'a' ||letra === 'e' || letra ==='i'|| letra ==='o' ||letra === 'u')
    {
        switch (letra) {
            case 'a': 
                contador[0] ++;
                break;
            case 'e': 
                contador[1] ++;
                break;
            case 'i': 
                contador[2] ++;
                break;
            case 'o': 
                contador[3] ++;
                break;
            case 'u': 
                contador[4] ++;
                break;
            default:
                break;
        }
    }
    
    
}
console.log(`${fraseIngresada} contine las siguientes vocales`);
console.log(`La vocal "a" se repite ${contador[0]} veces`);
console.log(`La vocal "e" se repite ${contador[1]} veces`);
console.log(`La vocal "i" se repite ${contador[2]} veces`);
console.log(`La vocal "o" se repite ${contador[3]} veces`);
console.log(`La vocal "u" se repite ${contador[4]} veces`);