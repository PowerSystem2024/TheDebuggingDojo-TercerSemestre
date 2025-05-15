//Argumentos Variables//
package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Gonzalo", "Juarez", 6, 7, 8, 9);
    }
    
    private static void variosParametros(String nombre, String apellido, int ...numeros){
        // se puede poner mas argumentos pero los variables van siempre al final.
        System.out.println("Nombre: "+nombre);
        System.out.println("Apellido: "+apellido);
        //System.out.println("Nombre y Apellido: "+nombre+" "+apellido);
        imprimirNumeros(numeros);
    }
    
    private static void imprimirNumeros(int ...numeros){ 
        // los e puntos es porque no se sabe la cantidad de valores que tendra el arreglo
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: "+numeros[i]);
        }
    }
}
