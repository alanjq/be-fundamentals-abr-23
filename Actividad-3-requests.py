# Peticiones REST
# Instalar paquete necesario: python -m pip install requests
import requests

# Lo que vamos a consumir
url = "https://jsonplaceholder.typicode.com/todos/1"

response = requests.get(url=url)
datos = response.json()

print("Titulo: "+ datos['title'])
