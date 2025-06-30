// Llamamos dos funciones que están declaradas más abajo

mostrarMensaje();
mostrarOtroMensaje();

function mostrarMensaje() {
  console.log("Esta es la primera función");
}

function mostrarOtroMensaje() {
  console.log("Esta es la segunda función");
}

// Callback: función que se pasa como parámetro y se ejecuta dentro de otra
let mostrarResultado = function imprimirTexto(texto) {
  console.log(texto);
};

function sumarNumeros(num1, num2, callback) {
  let resultado = num1 + num2;
  callback(`El resultado de la suma es: ${resultado}`);
}

// Llamada a la función sumar, y cuando termina, muestra el resultado con el callback
sumarNumeros(7, 4, mostrarResultado);

// Ejemplo de llamada asíncrona con setTimeout (espera un tiempo y luego ejecuta)
function saludoDemorado() {
  console.log("Hola! Este saludo aparece después de 3 segundos");
}

setTimeout(saludoDemorado, 3000); // Se ejecuta en 3 segundos

// setTimeout usando función anónima (sin nombre)
setTimeout(function () {
  console.log("Este mensaje aparece después de 4 segundos");
}, 4000);

// Mismo ejemplo, pero con una función flecha, que es más breve
setTimeout(() => console.log("Mensaje después de 5 segundos"), 5000);

// setInterval: repite una función cada cierto tiempo, en este caso cada segundo
let mostrarHora = () => {
  let ahora = new Date();
  console.log(
    `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`
  );
};

setInterval(mostrarHora, 1000); // Ejecuta la función cada 1 segundo