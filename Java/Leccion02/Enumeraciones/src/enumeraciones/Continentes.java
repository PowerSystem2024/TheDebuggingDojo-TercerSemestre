
package enumeraciones;

public enum Continentes {
    AFRICA(54, "1540 Millones"),
    AMERICA(35, "1030 Millones"),
    ASIA(49, "4750 Millones"),
    EUROPA(44, "750 Millones"),
    OCEANIA(14, "45 Millones");
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }

    //MÉTODO GET
    public int getPaises() {
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
    
}
