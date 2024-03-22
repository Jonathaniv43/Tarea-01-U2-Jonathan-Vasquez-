/* Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
"Vuelva a intentarlo" */
let rand;
let adivinar;

rand = Math.floor(Math.random() * 10) + 1;

do {
    adivinar = parseInt(prompt('Ingrese un número del 1 al 10, o 0 para salir'));
    igualdad = (adivinar === rand)
    switch (adivinar) {
        case 0:
            break;

        default:
            if (igualdad) {
                console.log('¡Buen trabajo! Has adivinado el número.');
            } else {
                console.log('Vuelva a intentarlo');
                console.log(`El número aleatorio era: ${rand} ` );
            }
            break;
    }
    
} while (adivinar !== 0);

console.log(`Vuelva Pronto`);
