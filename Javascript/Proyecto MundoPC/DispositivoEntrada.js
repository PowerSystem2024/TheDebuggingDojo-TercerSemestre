export class DispositivoEntrada {

constructor(tipoDeEntrada, marca) {
    this.tipoDeEntrada = tipoDeEntrada;
    this.marca = marca;
     }

    get getTipoDeEntrada() {
        return this.tipoDeEntrada;}

    get getMarca() {
        return this.marca;}

    set setTipoDeEntrada(tipoDeEntrada){
        this.tipoDeEntrada = tipoDeEntrada;
    }

    set setMarca(marca){
     this.marca = marca;
    }



}