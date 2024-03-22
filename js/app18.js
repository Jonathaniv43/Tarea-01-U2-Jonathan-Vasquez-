/* 18. Todos los ejercicios de while anteriores los debe replicar con el ciclo for.*/

let opcion = parseInt(prompt(`Elija una Opcion:\n1.numeros 1-N aumentando 1 en 1\n2.numeros de 1-N aumentando de 2 en 2\n3.numeros 1-N disminuyendo 1 en 1\n4.tablas de multiplicación\n5. suma numeros pares entre N y M `));
let max


switch (opcion) {
    case 1:

        max= parseInt(prompt('Ingrese el valor maximo'))

        for (let i = 1; i <= max; i++) {
            console.log(`${i}`);
            
        } 
            
        break;
    case 2:
        max= parseInt(prompt('Ingrese el valor maximo'))

        for (let i = 1; i <= max; i+=2) {
            console.log(`${i}`);
            
        } 
        
        break;
    case 3:
        max= parseInt(prompt('Ingrese el valor maximo'))

        for (let i = max; i >= 1; i--) {
            console.log(`${i}`);
            
        } 
       
        break;
    case 4:
        const numero = parseInt(prompt(`Ingrese el numero del cual desea conocer su tabla de multiplicacion`))
        let multiplicacion
        for (let i = 1; i <= 12; i++) {
            multiplicacion = numero * i;
            console.log(`La multiplicacion de ${numero} * ${i} es igual a ${multiplicacion} `);
            
        }
        break;
    case 5:
        const num1 = parseInt(prompt('Ingrese el primer digito'))
        const num2 = parseInt(prompt('Ingrese el segundo digito'))
        let sumaPares =0;
        if(num1<num2){
            for (let i = num1; i <= num2; i++) {
                if (i%2 === 0){
                    sumaPares += i;

                }
            }
         }else{
            for (let i = num2; i <= num1; i++) {
                if (i%2 === 0){
                    sumaPares += i;

                }
            }
         }
        console.log(`La suma total de los numeros pares entre ${num1} y ${num2} es igual a ${sumaPares}`);
        break;
    default:
        console.log(`Opcion no valida`);
        break;
}

