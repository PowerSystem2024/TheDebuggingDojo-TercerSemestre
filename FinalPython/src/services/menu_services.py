from src.database.connection import DatabaseConnection


class MenuService:
    def __init__(self):
        self.db = DatabaseConnection()

    def obtener_menu(self):
        try:
            with self.db.get_connection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""
                        SELECT id, nombre, descripcion, precio, categoria 
                        FROM menu_items 
                        ORDER BY categoria, nombre
                    """)
                    return cursor.fetchall()
        except Exception as e:
            print(f"Error al obtener menú: {e}")
            return []

    def agregar_item(self, nombre, descripcion, precio, categoria):
        try:
            with self.db.get_connection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        """INSERT INTO menu_items 
                        (nombre, descripcion, precio, categoria) 
                        VALUES (%s, %s, %s, %s) RETURNING id""",
                        (nombre, descripcion, precio, categoria)
                    )
                    return cursor.fetchone()[0]
        except Exception as e:
            print(f"Error al agregar ítem: {e}")
            return None