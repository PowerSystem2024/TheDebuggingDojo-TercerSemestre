let buscando = false; // Bandera para indicar si una búsqueda está en curso
const contenedorTablerosSoluciones = document.getElementById("todasLasSoluciones"); // Referencia al contenedor de soluciones

async function resolver() {
    const n = parseInt(document.getElementById("nInput").value);
    if (n < 8) {
        alert("El valor mínimo de N es 8");
        return;
    }

    if (buscando) {
        alert("Ya hay una búsqueda en curso. Por favor, espere a que termine.");
        return;
    }

    buscando = true; // Establecer la bandera a true al iniciar la búsqueda

    document.getElementById("estado").textContent = "Buscando soluciones...";
    document.getElementById("tablero").innerHTML = ''; // Limpiar el tablero principal
    document.getElementById("arreglo").textContent = '';
    contenedorTablerosSoluciones.innerHTML = ''; // Limpiar las soluciones anteriores

    const soluciones = [];
    const tablero = Array(n).fill(-1);
    const contenedorPrincipal = document.getElementById("tablero");

    contenedorPrincipal.style.gridTemplateColumns = `repeat(${n}, 50px)`;
    contenedorPrincipal.style.gridTemplateRows = `repeat(${n}, 50px)`;

    await encontrarTodasLasSoluciones(0, tablero, n, soluciones, contenedorPrincipal);

    document.getElementById("estado").textContent = `Se encontraron ${soluciones.length} soluciones.`;
    // La función mostrarTodasLasSoluciones ahora solo actualiza la lista de índices
    mostrarListaIndicesSoluciones(soluciones);

    buscando = false; // Restablecer la bandera cuando la búsqueda termina
}

async function encontrarTodasLasSoluciones(fila, tablero, n, soluciones, contenedorPrincipal) {
    if (buscando === false) { // Comprobar la bandera en cada paso recursivo
        return; // Detener la búsqueda si se inició una nueva
    }

    if (fila === n) {
        soluciones.push([...tablero]);
        // En lugar de dibujar en el tablero principal, creamos un nuevo tablero para la solución
        mostrarSolucionVisual(tablero, n);
        return;
    }

    for (let col = 0; col < n; col++) {
        if (esValido(tablero, fila, col)) {
            tablero[fila] = col;
            dibujarTablero(tablero, contenedorPrincipal); // Mostrar el progreso en el tablero principal
            await esperar(50); // Reducir un poco la espera para ver el flujo

            await encontrarTodasLasSoluciones(fila + 1, tablero, n, soluciones, contenedorPrincipal);

            tablero[fila] = -1;
            dibujarTablero(tablero, contenedorPrincipal); // Mostrar el backtracking
            await esperar(50);
        }
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function esValido(tablero, fila, col) {
    for (let i = 0; i < fila; i++) {
        if (
            tablero[i] === col ||
            tablero[i] - i === col - fila ||
            tablero[i] + i === col + fila
        ) {
            return false;
        }
    }
    return true;
}

function dibujarTablero(tablero, contenedor) {
    const n = tablero.length;
    contenedor.innerHTML = "";
    for (let fila = 0; fila < n; fila++) {
        for (let col = 0; col < n; col++) {
            const div = document.createElement("div");
            div.classList.add("casilla");
            div.classList.add((fila + col) % 2 === 0 ? "blanco" : "negro");
            if (tablero[fila] === col) div.textContent = "♕";
            contenedor.appendChild(div);
        }
    }
}

function mostrarSolucionVisual(solucion, n) {
    const divSolucion = document.createElement("div");
    divSolucion.classList.add("solucion");
    divSolucion.innerHTML = `<h3>Solución ${contenedorTablerosSoluciones.children.length + 1}</h3>`;

    const divTableroSolucion = document.createElement("div");
    divTableroSolucion.classList.add("solucion-tablero");
    divTableroSolucion.style.gridTemplateColumns = `repeat(${n}, 30px)`;
    divTableroSolucion.style.gridTemplateRows = `repeat(${n}, 30px)`;

    for (let fila = 0; fila < n; fila++) {
        for (let col = 0; col < n; col++) {
            const casilla = document.createElement("div");
            casilla.classList.add("casilla");
            casilla.classList.add((fila + col) % 2 === 0 ? "blanco" : "negro");
            if (solucion[fila] === col) casilla.textContent = "♕";
            divTableroSolucion.appendChild(casilla);
        }
    }

    divSolucion.appendChild(divTableroSolucion);
    divSolucion.innerHTML += `<p><strong>Índices (fila:columna):</strong> ${solucion.map((col, fila) => `${fila + 1}:${col + 1}`).join(', ')}</p>`;
    contenedorTablerosSoluciones.appendChild(divSolucion);
}

function mostrarListaIndicesSoluciones(soluciones) {
    const arregloElement = document.getElementById("arreglo");
    arregloElement.textContent = JSON.stringify(soluciones.map(sol => sol.map(index => index + 1)));
}