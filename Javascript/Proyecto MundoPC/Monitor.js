export class Monitor  {

    static contadorMonitor = 0;

    constructor(marca,tamanio){
        this.idMonitor = ++Monitor.contadorMonitor;
        this.marca = marca;
        this.tamanio = tamanio;
    
    }

     get getIdMonitor() {
        return this.idMonitor;}

    toString() {
        return `Monitor [ID: ${this.idMonitor}, Marca: ${this.marca}, Tamaño  ${this.tamanio}];`
    }

}