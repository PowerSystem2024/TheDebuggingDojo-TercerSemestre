# database/connection.py
import psycopg2
from psycopg2 import pool
import os
from dotenv import load_dotenv

load_dotenv()

class DatabaseConnection:
    __connection_pool = None

    @classmethod
    def initialize(cls):
        """Configura el pool de conexiones usando variables de entorno"""
        cls.__connection_pool = psycopg2.pool.SimpleConnectionPool(
            minconn=1,
            maxconn=10,
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            host=os.getenv('DB_HOST'),
            port=os.getenv('DB_PORT')
        )

    @classmethod
    def get_connection(cls):
        """Obtiene una conexión del pool"""
        return cls.__connection_pool.getconn()

    @classmethod
    def return_connection(cls, connection):
        """Devuelve una conexión al pool"""
        cls.__connection_pool.putconn(connection)

    @classmethod
    def close_all_connections(cls):
        """Cierra todas las conexiones del pool"""
        cls.__connection_pool.closeall()

# Inicializar el pool al importar el módulo
DatabaseConnection.initialize()