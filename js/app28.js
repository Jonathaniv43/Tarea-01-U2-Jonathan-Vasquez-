/*
28. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal.
*/

const dato = prompt(`Ingrese palabras separadas por comas para convertirla en arreglo`);
const palabras = dato.split(',');

function palabrasConVocal(palabras) {
       const vocales = ['a', 'e', 'i', 'o', 'u'];
       const nuevoArreglo = [];
   
       for (let palabra of palabras) {
           // Convertir la primera letra de la palabra a minúscula
           const primeraLetra = palabra.charAt(0).toLowerCase();
           // Verificar si la primera letra es una vocal
           if (vocales.includes(primeraLetra)) {
               nuevoArreglo.push(palabra);
           }
       }
   
       return nuevoArreglo;
   }

   const resultado = palabrasConVocal(palabras);
   console.log(resultado);
