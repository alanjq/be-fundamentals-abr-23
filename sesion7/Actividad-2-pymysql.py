# Conexión a MySQL con pymysql
# Instalar paquete necesario: pip install pymysql
import pymysql

# Datos de la conexión
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = 'root-23!'
DB_NAME = 'libreria'
DB_PORT = 3306

# Ejecutar queries
def run_query (query = ''):
    conn = pymysql.connect(host=DB_HOST, port=DB_PORT, user=DB_USER, passwd=DB_PASS, db=DB_NAME, charset='utf8')

    cursor = conn.cursor()
    cursor.execute(query=query)
    data =''

    # Devuelve el resultado en queries
    if query.startswith('SELECT'):
        data = cursor.fetchall()

    # Confirma los cambios en insert
    if query.startswith('INSERT'):
        conn.commit()
        data = conn.insert_id()

    cursor.close()
    conn.close()

    return data

# Método genérico para insertar
def insert_author (name, lastname):
    statement = "INSERT INTO author (name, lastname) VALUES( '"+ name + "','" + lastname+"')"
    print('insert ok',run_query(statement))

# Insertar en tabla: author
# Insertar en tabla: book

# Traer todos los libros
# QUERY = "SHOW tables"
# print(run_query(QUERY))

# Insertar un author en la BD
insert_author(name="Jorge", lastname="Chavez")
