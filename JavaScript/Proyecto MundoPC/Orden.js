import { log } from "console";

export class Orden{
static contadorOrden = 0;

    constructor(){
        this.idOrden = ++Orden.contadorOrden;
        this.computadoras = [];
     
    }

  agregarComputadora(computadora){
   this.computadoras.push(computadora);
   this.contadorOrden++;
   }
   
   mostrarOrden(){
    let computadorasOrden = "";
    for(let computadora of this.computadoras){
        computadorasOrden += "\n" + computadora.toString() + " ";
    }
    return `Orden: ${this.idOrden}, Computadoras: ${computadorasOrden}`;
   
}

}