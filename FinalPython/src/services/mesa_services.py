from src.database.connection import DatabaseConnection


class MesaService:
    def __init__(self):
        self.db = DatabaseConnection()

    def obtener_mesas_disponibles(self):
        """Obtiene mesas disponibles con formato mejorado"""
        try:
            with self.db.get_connection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""
                        SELECT numero, capacidad 
                        FROM mesas 
                        WHERE disponible = TRUE
                        ORDER BY capacidad, numero
                    """)
                    return cursor.fetchall()
        except Exception as e:
            print(f"Error al obtener mesas: {e}")
            return []

    def asignar_mesa_automatica(self, personas):
        """Asigna automáticamente la mesa más adecuada"""
        try:
            with self.db.get_connection() as conn:
                with conn.cursor() as cursor:
                    # Busca la mesa más pequeña que pueda acomodar al grupo
                    cursor.execute("""
                        SELECT numero, capacidad 
                        FROM mesas 
                        WHERE disponible = TRUE AND capacidad >= %s
                        ORDER BY capacidad, numero
                        LIMIT 1
                    """, (personas,))

                    mesa = cursor.fetchone()
                    if mesa:
                        numero, capacidad = mesa
                        # Marcar como ocupada
                        cursor.execute(
                            "UPDATE mesas SET disponible = FALSE WHERE numero = %s",
                            (numero,)
                        )
                        conn.commit()
                        return {
                            'numero': numero,
                            'capacidad': capacidad,
                            'mensaje': f"Mesa {numero} asignada (para {capacidad} personas)"
                        }
                    return {
                        'error': "No hay mesas disponibles para ese tamaño de grupo"
                    }
        except Exception as e:
            print(f"Error al asignar mesa: {e}")
            return {'error': str(e)}