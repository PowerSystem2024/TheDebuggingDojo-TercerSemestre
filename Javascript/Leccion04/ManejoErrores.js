'use strict'; 


try {

    let x = 10; 
    //miFuncion(); // Se captura el error de la función 
    throw 'Mi error'; //Maneja tipo String 
}
catch ( error ){
    console.log( typeof(error) ); 
}
finally {
    console.log('Termina la revision de errores'); 
}

let resultado = 5; 

try {
    //y = 5; 
    if (if NaN(resultado)) throw 'No es un numero'; 
    else if( resultado === '' ) throw'Es cadena vacia'
    else if(resultado >= 0) throw'Valor positivo'; 
    else if(resultado <= 0) throw'Valor negativo'; 
}

catch(error){
    console.log(error); 
    console.log(error.name); 
    console.log(error.message); 
}
finally{
    console.log('Terminamos la revisión de errores 2'); 

}