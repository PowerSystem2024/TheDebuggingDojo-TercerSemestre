import os
from dotenv import load_dotenv
from database.connection import DatabaseConnection

# Cargar variables de entorno
load_dotenv()


def test_connection():
    print("\n=== Probando conexión a PostgreSQL ===")
    conn = None
    try:
        conn = DatabaseConnection.get_connection()
        cursor = conn.cursor()

        # Test 1: Versión de PostgreSQL
        cursor.execute("SELECT version();")
        print("✔ Versión de PostgreSQL:", cursor.fetchone()[0])

        # Test 2: Listar tablas
        cursor.execute("""
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        """)
        print("✔ Tablas existentes:", [t[0] for t in cursor.fetchall()])

        # Test 3: Conexión con .env
        print("✔ Variables de entorno:",
              f"DB={os.getenv('DB_NAME')}",
              f"USER={os.getenv('DB_USER')}")

    except Exception as e:
        print("✖ Error de conexión:", e)
    finally:
        if conn:
            DatabaseConnection.return_connection(conn)
        print("=== Prueba completada ===\n")


test_connection()