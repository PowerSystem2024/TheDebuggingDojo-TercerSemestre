import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in); // Objeto para leer entrada de usuario
        
        while (true) { // Bucle principal de la app
            System.out.println("===== Calculadora =====");
            mostrarMenu();

            try {
                int opcion = Integer.parseInt(teclado.nextLine()); // Se lee  la opción ingresada
                
                if (opcion >= 1 && opcion <= 4) {
                    procesarOperacion(opcion, teclado); // Ejecutamos la operación solicitada
                } else if (opcion == 5) {
                    System.out.println("===== Fin =====");
                    break; // Salimos del bucle
                } else {
                    System.out.println("Opción no válida: " + opcion);
                }
                
                System.out.println(); // Espacio visual antes de repetir menú
            } catch (Exception e) {
                // Si ocurre un error al ingresar un valor no numérico
                System.out.println("Error: Entrada incorrecta. Detalle: " + e.getMessage());
                System.out.println();
            }
        }

        teclado.close(); 
    }

    // Imprime las opciones disponibles para el usuario
    private static void mostrarMenu() {
        System.out.println("""
                Seleccione una opción:
                1. Sumar
                2. Restar
                3. Multiplicar
                4. Dividir
                5. Salir
                """);
        System.out.print("Ingrese una opción: ");
    }

    // Solicita los números al usuario y realiza la operación elegida
    private static void procesarOperacion(int opcion, Scanner teclado) {
        System.out.print("Ingrese el primer número: ");
        double numeroA = Double.parseDouble(teclado.nextLine());

        System.out.print("Ingrese el segundo número: ");
        double numeroB = Double.parseDouble(teclado.nextLine());

        double resultado;

        switch (opcion) {
            case 1 -> { // Suma
                resultado = numeroA + numeroB;
                System.out.println("El resultado de la suma es: " + resultado);
            }
            case 2 -> { // Resta
                resultado = numeroA - numeroB;
                System.out.println("El resultado de la resta es: " + resultado);
            }
            case 3 -> { // Multiplicación
                resultado = numeroA * numeroB;
                System.out.println("El resultado de la multiplicación es: " + resultado);
            }
            case 4 -> { // División
                if (numeroB == 0) {
                    System.out.println("Error: No se puede dividir por cero.");
                } else {
                    resultado = numeroA / numeroB;
                    System.out.println("El resultado de la división es: " + resultado);
                }
            }
            default -> System.out.println("La opción seleccionada no es válida.");
        }
    }
}
