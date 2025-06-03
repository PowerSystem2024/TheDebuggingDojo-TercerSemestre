function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function jugar() {
    let rondas = 0;
    let victoriasJugador = 0;
    let victoriasPC = 0;

    while (rondas < 3) {
        let jugador = prompt("Elige: 1 piedra, 2 papel, 3 tijera");
        let pc = randomInt(1, 3);
        console.log("El número que eligió la PC es: " + pc);

        if (jugador == 1) {
            alert("Elegiste piedra");
        } else if (jugador == 2) {
            alert("Elegiste papel");
        } else if (jugador == 3) {
            alert("Elegiste tijera");
        } else {
            alert("Elección inválida, cuenta como derrota");
            jugador = null;
        }

        if (jugador && pc === parseInt(jugador)) {
            alert("EMPATE");
        } else if (jugador == 1 && pc == 3) {
            alert("¡GANASTE! La PC eligió tijera");
            victoriasJugador++;
        } else if (jugador == 2 && pc == 1) {
            alert("¡GANASTE! La PC eligió piedra");
            victoriasJugador++;
        } else if (jugador == 3 && pc == 2) {
            alert("¡GANASTE! La PC eligió papel");
            victoriasJugador++;
        } else {
            alert(
                "¡PERDISTE! La PC eligió " +
                (pc == 1 ? "piedra" : pc == 2 ? "papel" : "tijera")
            );
            victoriasPC++;
        }

        rondas++;
    }

    let mensajeFinal = "Resultado final después de 3 rondas:\n";
    mensajeFinal += "Tus victorias: " + victoriasJugador + "\n";
    mensajeFinal += "Victorias de la PC: " + victoriasPC + "\n";
    if (victoriasJugador > victoriasPC) {
        mensajeFinal += "¡GANASTE EL JUEGO!";
    } else if (victoriasPC > victoriasJugador) {
        mensajeFinal += "¡PERDISTE EL JUEGO! ;(";
    } else {
        mensajeFinal += "¡EMPATE!";
    }
    alert(mensajeFinal);
}

window.onload = jugar;