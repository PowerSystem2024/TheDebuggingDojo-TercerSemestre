// Obtener referencias a las tres torres del DOM
const towers = {
  A: document.getElementById("A"),
  B: document.getElementById("B"),
  C: document.getElementById("C")
};

// Array para almacenar los discos
let disks = [];
let numberOfDisks = 3; // Valor predeterminado

// Referencias al input y output de cantidad de discos
const numDisksInput = document.getElementById("numDisks");
const numDisksValueOutput = document.getElementById("numDisksValue"); // Nuevo elemento para el valor

// Crear un disco visual con una clase basada en su tamaño
function createDisk(size) {
  const div = document.createElement("div");
  div.className = `disk disk${size}`; // Agrega clase con el tamaño
  return div;
}

// Configurar el estado inicial del juego
function setup() {
  // Obtener y validar la cantidad de discos desde el input
  numberOfDisks = parseInt(numDisksInput.value);
  numDisksValueOutput.value = numberOfDisks; // Actualizar el valor mostrado
  
  if (isNaN(numberOfDisks) || numberOfDisks < 3) { // Validar que sea un número válido
    numberOfDisks = 3; // Revertir al valor predeterminado si es inválido
    numDisksInput.value = 3;
  }

  disks = []; // Vaciar el array de discos

  // Crear discos de mayor a menor
  for (let i = numberOfDisks; i >= 1; i--) {
    disks.push(createDisk(i));
  }

  Object.values(towers).forEach(tower => tower.innerHTML = ""); // Limpiar torres
  disks.forEach(disk => towers.A.appendChild(disk)); // Añadir discos a la torre A
}

// Mover un disco de una torre a otra con animación (demora de 600ms)
async function moveDisk(from, to) {
  return new Promise(resolve => {
    setTimeout(() => {
      const disk = towers[from].lastElementChild;
      if (disk) {
        // Mantener la clase de tamaño para la animación
        const sizeClass = Array.from(disk.classList).find(cls => cls.startsWith('disk'));
        disk.classList.remove(sizeClass);
        void disk.offsetWidth; // Forzar reflow (necesario para la animación)
        disk.classList.add(sizeClass);
        // Mover disco al final de la torre de destino
        towers[to].appendChild(disk);
      }
      resolve();
    }, 600);
  });
}

// Algoritmo recursivo de Torres de Hanoi
async function hanoi(n, from, to, aux) {
  if (n === 1) {
    await moveDisk(from, to); // Caso base: mover 1 disco
  } else {
    await hanoi(n - 1, from, aux, to); // Paso 1
    await moveDisk(from, to);          // Paso 2
    await hanoi(n - 1, aux, to, from); // Paso 3
  }
}

// Iniciar el juego (invocado por el botón Iniciar)
async function startHanoi() {
  setup(); // Configurar según cantidad de discos
  await hanoi(numberOfDisks, "A", "C", "B"); // Resolver el problema
}

// Reiniciar el juego (invocado por el botón Reiniciar)
function reset() {
  setup(); // Reinicia el estado
}

// Evento que se ejecuta cuando se carga completamente la página
document.addEventListener('DOMContentLoaded', () => {
    setup(); // Configuración inicial
    numDisksInput.addEventListener('input', setup); // Actualiza en tiempo real al mover el slider
});