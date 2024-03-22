/*24. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
introducido por el usuario a través de un prompt.
*/
const tamaño = parseInt(prompt(`Ingrese cuantos numeros random desea generar`))
let  array = []

for (let i = 0; i < tamaño; i++) {
   let numero = Math.floor(Math.random()*100)
   array.push(numero);
    
}

console.log(array);

