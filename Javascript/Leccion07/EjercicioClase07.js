let buscando = false; // Bandera para indicar si una búsqueda está en curso
const contenedorTablerosSoluciones = document.getElementById("todasLasSoluciones"); // Contenedor donde se mostrarán todas las soluciones encontradas

async function resolver() {
    const n = parseInt(document.getElementById("nInput").value); // Obtener el valor ingresado por el usuario
    if (n < 8) {
        alert("El valor mínimo de N es 8"); // Mostrar alerta si el número es menor que 8
        return;
    }

    if (buscando) {
        alert("Ya hay una búsqueda en curso. Por favor, espere a que termine."); // Evitar búsquedas simultáneas
        return;
    }

    buscando = true; // Marcar que se está ejecutando una búsqueda

    // Actualizar estado en pantalla y limpiar tableros anteriores
    document.getElementById("estado").textContent = "Buscando soluciones...";
    document.getElementById("tablero").innerHTML = ''; // Limpiar tablero principal
    document.getElementById("arreglo").textContent = ''; // Limpiar lista de soluciones anteriores
    contenedorTablerosSoluciones.innerHTML = ''; // Limpiar contenedor de tableros de soluciones

    const soluciones = []; // Array para almacenar las soluciones válidas
    const tablero = Array(n).fill(-1); // Representación del tablero, -1 indica sin reina
    const contenedorPrincipal = document.getElementById("tablero"); // Contenedor visual del tablero principal

    // Configurar el tamaño del tablero visual según el valor de N
    contenedorPrincipal.style.gridTemplateColumns = `repeat(${n}, 50px)`;
    contenedorPrincipal.style.gridTemplateRows = `repeat(${n}, 50px)`;

    // Iniciar la búsqueda recursiva de soluciones
    await encontrarTodasLasSoluciones(0, tablero, n, soluciones, contenedorPrincipal);

    // Mostrar cuántas soluciones se encontraron
    document.getElementById("estado").textContent = `Se encontraron ${soluciones.length} soluciones.`;

    mostrarListaIndicesSoluciones(soluciones); // Mostrar los índices de cada solución

    buscando = false; // Marcar que la búsqueda ha finalizado
}

async function encontrarTodasLasSoluciones(fila, tablero, n, soluciones, contenedorPrincipal) {
    if (buscando === false) return; // Detener la búsqueda si la bandera fue desactivada

    if (fila === n) {
        soluciones.push([...tablero]); // Guardar una copia de la solución encontrada
        mostrarSolucionVisual(tablero, n); // Mostrar la solución de forma visual
        return;
    }

    for (let col = 0; col < n; col++) {
        if (esValido(tablero, fila, col)) { // Verificar si se puede colocar una reina
            tablero[fila] = col; // Colocar reina en esa posición
            dibujarTablero(tablero, contenedorPrincipal); // Dibujar tablero actual
            await esperar(50); // Esperar 50 ms para ver la animación

            await encontrarTodasLasSoluciones(fila + 1, tablero, n, soluciones, contenedorPrincipal); // Recursión: siguiente fila

            tablero[fila] = -1; // Backtracking: quitar reina
            dibujarTablero(tablero, contenedorPrincipal); // Redibujar tablero sin la reina
            await esperar(50); // Esperar para visualizar el retroceso
        }
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // Función para pausar por una cantidad de milisegundos
}

function esValido(tablero, fila, col) {
    for (let i = 0; i < fila; i++) {
        // Verifica si hay conflictos en columna o diagonales
        if (
            tablero[i] === col || // misma columna
            tablero[i] - i === col - fila || // diagonal descendente
            tablero[i] + i === col + fila    // diagonal ascendente
        ) {
            return false; // Posición no válida
        }
    }
    return true; // Posición válida
}

function dibujarTablero(tablero, contenedor) {
    const n = tablero.length;
    contenedor.innerHTML = ""; // Limpiar el contenido anterior del tablero

    for (let fila = 0; fila < n; fila++) {
        for (let col = 0; col < n; col++) {
            const div = document.createElement("div");
            div.classList.add("casilla"); // Clase común para todas las casillas
            div.classList.add((fila + col) % 2 === 0 ? "blanco" : "negro"); // Alternar colores del tablero

            if (tablero[fila] === col) div.textContent = "♕"; // Colocar reina si corresponde
            contenedor.appendChild(div); // Agregar casilla al tablero
        }
    }
}

function mostrarSolucionVisual(solucion, n) {
    const divSolucion = document.createElement("div");
    divSolucion.classList.add("solucion"); // Contenedor de una solución

    // Título de la solución
    divSolucion.innerHTML = `<h3>Solución ${contenedorTablerosSoluciones.children.length + 1}</h3>`;

    const divTableroSolucion = document.createElement("div");
    divTableroSolucion.classList.add("solucion-tablero"); // Clase para el tablero individual de la solución

    // Establecer tamaño de grilla del tablero
    divTableroSolucion.style.gridTemplateColumns = `repeat(${n}, 30px)`;
    divTableroSolucion.style.gridTemplateRows = `repeat(${n}, 30px)`;

    for (let fila = 0; fila < n; fila++) {
        for (let col = 0; col < n; col++) {
            const casilla = document.createElement("div");
            casilla.classList.add("casilla"); // Clase común
            casilla.classList.add((fila + col) % 2 === 0 ? "blanco" : "negro"); // Color de fondo

            if (solucion[fila] === col) casilla.textContent = "♕"; // Colocar reina
            divTableroSolucion.appendChild(casilla); // Agregar casilla al tablero
        }
    }

    divSolucion.appendChild(divTableroSolucion); // Agregar tablero al contenedor

    // Agregar información textual de la solución (índices)
    divSolucion.innerHTML += `<p><strong>Índices (fila:columna):</strong> ${solucion.map((col, fila) => `${fila + 1}:${col + 1}`).join(', ')}</p>`;

    contenedorTablerosSoluciones.appendChild(divSolucion); // Agregar la solución al contenedor general
}

function mostrarListaIndicesSoluciones(soluciones) {
    const arregloElement = document.getElementById("arreglo"); // Elemento donde se mostrarán los índices de las soluciones
    arregloElement.textContent = JSON.stringify(
        soluciones.map(sol => sol.map(index => index + 1)) // Convertir los índices de base 0 a base 1
    );
}