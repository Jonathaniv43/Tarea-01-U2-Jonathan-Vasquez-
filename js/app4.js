// 4. Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const fraseIngresada= prompt('Ingrese la frase a comprobar')
let frase = fraseIngresada.toLowerCase();
const letra = 'a';
let cont = 0;

for (let i = 0; i < frase.length; i++) {
    if (letra === frase.charAt(i)){
        cont ++;
    }
    
}
console.log(`La frase ${fraseIngresada} contiene ${cont} letras "a"`);