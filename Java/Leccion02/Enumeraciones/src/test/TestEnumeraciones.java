package test;

import enumeraciones.Dias;
import enumeraciones.Continentes;


public class TestEnumeraciones {
    public static void main(String[] args) {
        // Descomentar esta parte para ver los dias de la semana
        
        //System.out.println("Dia 1 = " + Dias.LUNES );
        
        indicarDiaSemana(Dias.LUNES); // Las enumeraciónes se tratan como cadenas
        indicarDiaSemana(Dias.MIERCOLES);
        indicarDiaSemana(Dias.JUEVES);
        indicarDiaSemana(Dias.VIERNES);
        indicarDiaSemana(Dias.SABADO);
        indicarDiaSemana(Dias.DOMINGO);
        
        
        System.out.println("");
        System.out.println("");
        // Descomentar esta parte para ver los continentes
        /*
        System.out.println("Cuarto Continente : "+Continentes.EUROPA);
        System.out.println("Numero de paises del cuarto continente: "+Continentes.EUROPA.getPaises());
        System.out.println("Numero de Habitantes del cuarto continente: "+Continentes.EUROPA.getHabitantes());
        */
        datosContinentes(Continentes.AFRICA);
        datosContinentes(Continentes.AMERICA);
        datosContinentes(Continentes.ASIA);
        datosContinentes(Continentes.EUROPA);
        datosContinentes(Continentes.OCEANIA);
        
    }
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana: LUNES");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana: MARTES");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana: MIERCOLES");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana: JUEVES");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana: VIERNES");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana: SABADO");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana: DOMINGO");
                break;
            default:
                System.out.println("No corresponde a un dia de la semana.");
                break;
        }
    }
    
    private static void datosContinentes(Continentes continentes){
        switch(continentes){
            case AFRICA:
                System.out.println("Primer Continente:");
                System.out.println(Continentes.AFRICA);
                System.out.println("Numero de paises: "+Continentes.AFRICA.getPaises());
                System.out.println("Numero de Habitantes: "+Continentes.AFRICA.getHabitantes());
                break;
            case AMERICA:
                System.out.println("Segundo Continente:");
                System.out.println(Continentes.AMERICA);
                System.out.println("Numero de paises: "+Continentes.AMERICA.getPaises());
                System.out.println("Numero de Habitantes: "+Continentes.AMERICA.getHabitantes());
                break;
            case ASIA:
                System.out.println("Tercer Continente:");
                System.out.println(Continentes.ASIA);
                System.out.println("Numero de paises: "+Continentes.ASIA.getPaises());
                System.out.println("Numero de Habitantes: "+Continentes.ASIA.getHabitantes());
                break;
            case EUROPA:
                System.out.println("Cuarto Continente:");
                System.out.println(Continentes.EUROPA);
                System.out.println("Numero de paises: "+Continentes.EUROPA.getPaises());
                System.out.println("Numero de Habitantes: "+Continentes.EUROPA.getHabitantes());
                break;
            case OCEANIA:
                System.out.println("Quinto Continente:");
                System.out.println(Continentes.OCEANIA);
                System.out.println("Numero de paises: "+Continentes.OCEANIA.getPaises());
                System.out.println("Numero de Habitantes: "+Continentes.OCEANIA.getHabitantes());
                break;
            default:
                System.out.println("No corresponde a un Continente.");
                break;
        }
    }
}
