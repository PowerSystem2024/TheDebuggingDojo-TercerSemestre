export class Computadora {

static contadorComputadora = 0;

constructor(
nombre,
Monitor,
Teclado,
Raton,

){
this.idComputadora = ++Computadora.contadorComputadora;
this.nombre = nombre;
this.Monitor = Monitor;
this.Teclado = Teclado;
this.Raton = Raton;


}

toString() {
    return `${this.idComputadora}, ${this.nombre}, ${this.Monitor}, ${this.Teclado}, ${this.Raton}`;

}

}