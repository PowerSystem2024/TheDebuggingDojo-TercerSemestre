package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    // Los bloques se ejecutan antes del constructor
    // Bloque de inicialización
    static{ 
        System.out.println("Inicialización Bloque Estático.");
        ++Persona.contadorPersona; //no hace falta la classe, podriamos dejar solo ++contadorPersonas;
        // idPersona = 10; // No funciona porque no es estático
    }
    
    // Bloque de inicialización no estático (contexto dinámico)
    {
    System.out.println("Inicialización Bloque NO Estático.");
    this.idPersona = Persona.contadorPersona++;
    }
    
    public Persona(){
        System.out.println("Ejecución del constructor");
        
    }
    
    public int getIdPersona(){
        return  this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}