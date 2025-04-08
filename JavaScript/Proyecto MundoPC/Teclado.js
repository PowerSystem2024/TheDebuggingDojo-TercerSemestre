import { DispositivoEntrada } from "./DispositivoEntrada.js";

export class Teclado extends DispositivoEntrada{

static contadorTeclado = 0;

constructor(marca) {
    super('Teclado', marca); 
    this.idTeclado = ++Teclado.contadorTeclado;
}

    toString() {
        return `Teclado [ID: ${this.idTeclado}, Marca: ${this.marca}];`
    }

}