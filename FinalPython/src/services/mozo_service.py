from src.database.connection import DatabaseConnection
import random


class MozoService:
    def __init__(self):
        self.db = DatabaseConnection()

    def asignar_mozo(self):
        try:
            with self.db.get_connection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT id, nombre FROM mozos WHERE disponible = TRUE"
                    )
                    mozos = cursor.fetchall()

                    if mozos:
                        mozo = random.choice(mozos)
                        # Actualizar estado
                        cursor.execute(
                            "UPDATE mozos SET disponible = FALSE WHERE id = %s",
                            (mozo[0],)
                        )
                        return {"id": mozo[0], "nombre": mozo[1]}
                    return None
        except Exception as e:
            print(f"Error al asignar mozo: {e}")
            return None