/* Función para seleccionar el personaje del jugador */
function seleccionarPersonajeJugador() {
    // Crear una lista de objetos que representan los personajes disponibles
    // Cada objeto tiene un `id` que coincide con el ID del input en el HTML y un `nombre` para mostrar al usuario
    const personajes = [
        { id: 'zuko', nombre: 'Zuko' },
        { id: 'katara', nombre: 'Katara' },
        { id: 'aang', nombre: 'Aang' },
        { id: 'toph', nombre: 'Toph' }
    ];

    // Buscar cuál personaje fue seleccionado (input tipo radio marcado como "checked")
    // `find` retorna el primer personaje cuyo ID esté marcado como seleccionado en el HTML
    const personajeSeleccionado = personajes.find(personaje => document.getElementById(personaje.id).checked);

    // Verifica si se encontró un personaje seleccionado
    if (personajeSeleccionado) {
        // Mostrar mensaje con el nombre del personaje en mayúsculas si se seleccionó uno
        alert(`¡SELECCIONASTE A ${personajeSeleccionado.nombre.toUpperCase()} COMO TU PERSONAJE!`);
    } else {
        // Mostrar mensaje de error si no se seleccionó ningún personaje
        alert('¡NO SELECCIONASTE NINGÚN PERSONAJE!');
    }
}

/* Asignar evento al botón de selección de personaje */
// Obtener el botón con ID 'boton-personaje' desde el HTML
const botonPersonajeJugador = document.getElementById('boton-personaje');

// Añadir un "escuchador de eventos" al botón
// Cuando el botón es clicado, se ejecuta la función `seleccionarPersonajeJugador`
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
