
function miFuncion() {
  console.log("Saludos desde mi función");
}

miFuncion();


let myFuncion = function () {
  console.log("Saludos desde la función anónima");
};


let miFuncionFlecha = () => {
  console.log("Saludos desde mi función flecha");
};

// Llamamos a la función flecha que definimos recién
miFuncionFlecha();


const saludar = () => console.log("Saludos a todos desde esta función flecha");

saludar();


const saludar2 = () => {
  return "Saludar desde la función flecha dos";
};

console.log(saludar2());

// Función flecha, devuelve el texto sin escribir "return"
const saludar3 = () => "Saludar desde la función flecha tres";

console.log(saludar3());

// Si queremos que devuelva un objeto, hay que poner paréntesis para que no se confunda
const regresaObjeto = () => ({ nombre: "Tomas", apellido: "Mariana" });

console.log(regresaObjeto());

// Función flecha que recibe un dato e imprime
const funcionesParametros = (mensaje) => console.log(mensaje);

funcionesParametros("Saludos desde esta función con parámetros");

// Lo mismo que antes, pero con la forma clásica (function)
const funcionesParametrosClasica = function (mensaje) {
  console.log(mensaje);
};

funcionesParametrosClasica("Saludos desde la función clásica");

// Si la función flecha tiene solo un parámetro, podés sacar los paréntesis
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros("Otra forma de trabajar con función flecha");

// Función flecha con dos parámetros
const funcionConParametros2 = (op1, op2) => {
  let resultado = op1 + op2;
  return resultado;
};

console.log(funcionConParametros2(3, 5));