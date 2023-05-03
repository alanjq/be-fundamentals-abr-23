"""
Instalar paquetes necesarios:
pip install fastapi
pip install uvicorn
"""

from fastapi import FastAPI
app = FastAPI()

@app.get("/hello")
def hello():
  return {"Hello world!"}
