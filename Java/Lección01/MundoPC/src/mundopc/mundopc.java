package mundopc;

import ar.com.system2025.mundopc.*;

public class mundopc {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); // Impostar la clase.
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        // Creamos otros objetos de diferente marca:
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); // Inicializamos el arreglo vacío.
        Orden orden2 = new Orden(); // Una nueva lista para el objeto orden2.
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadoraVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadoraVarias);
       
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        
// Crear más objetos de tipo computadora con todos sus elementos y completar una lista en el objeto orden1 que llegue a los 10 elementos.
// Probar de esta manera los métodos al máximo rendimiento.
    }
}
