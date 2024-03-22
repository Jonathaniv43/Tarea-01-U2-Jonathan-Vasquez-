/*Crear un programa que determine si un string introducido por un usuario inicia con un
número o con una letra. */


let dato
dato = prompt(`Ingrese un dato a verificar entre numero o string`);
console.log(typeof(dato)) ;


if (!isNaN(parseFloat(dato.charAt(0))) ){
    console.log(`Es Dato Numerico `);
}else{
    console.log(`Es dato tipo String "Letra"`);
}

