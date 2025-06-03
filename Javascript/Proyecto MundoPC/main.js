import {Raton} from './Raton.js';
import {Teclado} from './Teclado.js';
import {Computadora} from "./Computadora.js"
import {Monitor} from './Monitor.js';
import {Orden} from './Orden.js';



const raton = new Raton("usb", "hp");
const teclado = new Teclado("jbl");
const monitor = new Monitor("lg", 24);
const computadora = new Computadora("computadora", monitor, teclado, raton);

const orden = new Orden();
orden.agregarComputadora(computadora);
console.log(orden.mostrarOrden());
 

function mostrarInfoDispositivo(dispositivo) {
    if (dispositivo instanceof Raton) {
        console.log("Es un Raton:");
    } else if (dispositivo instanceof Teclado) {
        console.log("Es un Teclado:");
    } else if (dispositivo instanceof Monitor) {
        console.log("Es un Monitor:");
    } else if (dispositivo instanceof Computadora) {
        console.log("Es una Computadora:");
    } else {
        console.log("Tipo desconocido:");
    }

    console.log(dispositivo.toString());
} 

mostrarInfoDispositivo(raton);
mostrarInfoDispositivo(teclado);
mostrarInfoDispositivo(monitor);
mostrarInfoDispositivo(computadora);


/*¿Qué pasa con la clase Orden?

Con respecto a la clase Orden, si bien no hemos creado un método interno que utilice instanceof directamente, se beneficia indirectamente del polimorfismo. 
La clase Orden almacena objetos de tipo Computadora. La clase Computadora, y a su vez las clases Monitor, Teclado, y Raton que contiene, tienen su propio método toString().
Cuando el método mostrarOrden() de la clase Orden llama a computadora.toString(), se activa la implementación específica del método toString() de la clase Computadora.
Si la implementación de toString() en Computadora llama a los toString() de sus componentes, se manifiesta el comportamiento polimórfico de cada uno.*/