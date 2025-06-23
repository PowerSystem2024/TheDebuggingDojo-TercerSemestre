# src/main.py
from src.services.cliente_service import ClienteService

from src.services.mozo_service import MozoService
from src.services.menu_services import MenuService
from src.services.mesa_services import MesaService


def mostrar_menu_principal():
    print("\n=== RESTAURANTE ===")
    print("1. Registrar cliente")
    print("2. Asignar mesa")
    print("3. Ver menú")
    print("4. Listar clientes")
    print("5. Listar mesas disponibles")
    print("6. Salir")


def main():
    cliente_service = ClienteService()
    mesa_service = MesaService()
    mozo_service = MozoService()
    menu_service = MenuService()

    while True:
        mostrar_menu_principal()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            print("\n--- REGISTRAR CLIENTE ---")
            nombre = input("Nombre: ")
            telefono = input("Teléfono: ")
            cliente_id = cliente_service.registrar_cliente(nombre, telefono)
            if cliente_id:
                print(f"Cliente registrado con ID: {cliente_id}")

        elif opcion == "2":  # Asignar mesa
            print("\n--- ASIGNACIÓN AUTOMÁTICA DE MESA ---")
            try:
                personas = int(input("¿Para cuántas personas? "))

                resultado = mesa_service.asignar_mesa_automatica(personas)

                if 'error' in resultado:
                    print(f"\n✖ {resultado['error']}")
                else:
                    print(f"\n✔ {resultado['mensaje']}")
                    print(f"   Capacidad: {resultado['capacidad']} personas")

            except ValueError:
                print("Error: Ingrese un número válido de personas")

        elif opcion == "3":
            print("\n--- MENÚ ---")
            menu = menu_service.obtener_menu()
            categorias = {}
            for item in menu:
                if item['categoria'] not in categorias:
                    categorias[item['categoria']] = []
                categorias[item['categoria']].append(item)

            for categoria, items in categorias.items():
                print(f"\n{categoria.upper()}:")
                for item in items:
                    print(f"  {item['nombre']} - ${item['precio']:.2f}")
                    print(f"    {item['descripcion']}")

        elif opcion == "4":
            print("\n--- CLIENTES REGISTRADOS ---")
            clientes = cliente_service.listar_clientes()
            if clientes:
                for cliente in clientes:
                    print(f"ID: {cliente['id']} | Nombre: {cliente['nombre']} | Tel: {cliente['telefono']}")
            else:
                print("No hay clientes registrados")

        elif opcion == "5":  # Ver mesas disponibles
            print("\n--- MESAS DISPONIBLES ---")
            mesas = mesa_service.obtener_mesas_disponibles()
            if mesas:
                print("Número | Capacidad")
                print("------------------")
                for numero, capacidad in mesas:
                    print(f"{numero:6} | {capacidad:8}")
            else:
                print("No hay mesas disponibles actualmente")

        elif opcion == "6":
            print("Saliendo del sistema...")
            break

        else:
            print("Opción no válida. Intente nuevamente.")


if __name__ == "__main__":
    main()