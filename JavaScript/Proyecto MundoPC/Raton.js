import { DispositivoEntrada } from "./DispositivoEntrada.js";

export class Raton extends DispositivoEntrada{

static contadorRaton = 0;

constructor(tipoEntrada,Marca){
    super(tipoEntrada,Marca);
    this.idRaton = ++Raton.contadorRaton;
}
toString() {
  return `Raton [ID: ${this.idRaton}, Marca: ${this.marca}];`}
}