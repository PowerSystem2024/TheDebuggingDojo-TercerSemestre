from pelicula import Pelicula
from catalogo_peliculas import CatalogoPeliculas

def mostrar_menu():
    """
    Muestra el menú de opciones.
    """
    print("\n=== CATÁLOGO DE PELÍCULAS ===")
    print("1) Agregar película")
    print("2) Listar películas")
    print("3) Eliminar archivo de películas")
    print("4) Salir")
    
def main():
    """
    Función principal que contiene el menú con 4 opciones:
    1) Agregar película
    2) Listar películas
    3) Eliminar archivo de películas
    4) Salir
    """
    opcion = None
    
    while opcion != 4:
        mostrar_menu()
        try:
            opcion = int(input("Ingrese una opción (1-4): "))
            
            if opcion == 1:
                nombre_pelicula = input("Ingrese el nombre de la película: ")
                pelicula = Pelicula(nombre_pelicula)
                CatalogoPeliculas.agregar_pelicula(pelicula)
            elif opcion == 2:
                CatalogoPeliculas.listar_peliculas()
            elif opcion == 3:
                CatalogoPeliculas.eliminar()
            elif opcion == 4:
                print("¡Hasta la próxima!")
            else:
                print("Opción no válida. Intente de nuevo.")
        except Exception as e:
            print(f"Ocurrió un error: {e}")
            opcion = None

if __name__ == '__main__':
    main()
