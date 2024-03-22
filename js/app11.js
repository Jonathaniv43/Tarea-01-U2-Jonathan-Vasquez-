//Determinar si una palabra empieza con mayúscula o no.

const palabra = prompt('Ingrese la palabra a revisar')

for (let i = 0; i< 1; i++) {
    let inicial = palabra.charAt(i)
    if (inicial.charAt(i).toUpperCase()=== inicial.charAt(i)){
       console.log(`La palabra "${palabra}" Empieza con mayúscula`); 
    }else{
        console.log(`La palabra "${palabra}" NO empieza con mayúscula`);
    }
    }