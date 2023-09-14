# Conexión a MySQL usando MySQLdb
# Instalar paquete necesario: pip install MySQL
import MySQLdb

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = 'root-23!'
DB_NAME = 'libreria'

def run_query(query = ''):
    datos = [DB_HOST, DB_USER, DB_PASS, DB_NAME]

    # Conectarse a la base de datos
    conn = MySQLdb.Connect(*datos)
    # conn = pymysql.connect(datos)
    cursor = conn.cursor() # Crear un cursor
    cursor.execute(query) # Ejecutar la consulta

    if query.upper().startswith('SELECT'):
        data = cursor.fetchAll() # Traer los resultados
    else:
        conn.commit() # Hacer efectiva la escritura de datos
        data = None
    
    # Cerrar el cursor y la conexión
    cursor.close()
    conn.close()

    return data

# Llamar a la función
print(run_query('SHOW tables'))

# Método genérico para insertar
def insert_author (name, lastname):
    statement = "INSERT INTO author (name, lastname) VALUES( '"+ name + "','" + lastname+"')"
    print('insert ok',run_query(statement))

# Insertar un author en la BD
insert_author(name="Jorge", lastname="Chavez")
