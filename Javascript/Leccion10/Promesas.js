// ===============================
// Clase: Promesas en JavaScript 
// Cómo funcionan las promesas, resolver, rechazar y uso de .then() y .catch() 
// ===============================

let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true; // Cambiar a false para obtener el resultado "Se produjo un error"
    if (expresion) {
        resolver('Resolvió correctamente');
    } else {
        rechazar('Se produjo un error');
    }
});

// ========== 10.2 Promesas: La práctica con la función .then ==========

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

// ========== 10.3 Promesas: La práctica con la función .catch ==========

//  Ejecuta la promesa y, si se resuelve exitosamente, muestra el resultado
//miPromesa
//  .then(valor => console.log(valor)) 

// Si la promesa falla, entra al catch y muestra el error
//  .catch(error => console.log(error)); 

// ========== 10.4 Función setTimeout y Promesas ==========
// Arreglamos un error. Uso de setTimeout dentro de una promesa para simular una tarea asincrónica
let promesa = new Promise((Resolver) => {
    setTimeout(() => Resolver('Saludos desde promesa, callback, funcion flecha y setTimeout'), 3000);
    // Espera 3 segundos y luego resuelve la promesa
});

// El llamado a la promesa
//promesa.then(valor => console.log(valor));

// ========== 10.5 Palabra async con promesas ==========
// async indica que una funcion regresa a promesa 
async function miFuncionConPromesa() {
    return 'Saludos con promesas y async';
}

// Llamado a la función y manejo de la promesa
//miFuncionConPromesa().then(valor => console.log(valor));

// ========== 10.6 Palabra await y async con promesas ==========
// ========== 10.6 Palabra await y async con promesas ==========
// ========== 10.6 Promesas con async y await + console.log directo ==========
// ========== 10.6 Promesas con async y await + console.log directo ==========
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    //console.log(await miPromesa); // Mostramos directamente el resultado
}

funcionConPromesaYAwait();

// ========== 10.7 Promesas con await, async y setTimeout ==========
//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log (' Inicio Funcion');
        setTimeout(() => resolver('Promesa con await y Timeout'), 3000);
        console.log (' Final Funcion');
    });

    console.log(await miPromesa);
}

//Llamamos a la función
funcionConPromesaAwaitTimeout();
