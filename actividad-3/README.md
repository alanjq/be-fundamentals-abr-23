# Actividad 3
Servicio web Restful

> Se recomienda abrir este archivo en el IDE eclipse

Para ejecutar, seleccionar el archivo `RestfulWebServicesApplication.java` y hacer clic en `run` en las herramientas de eclipse.

Abrir el navegador en la siguiente dirección.

`localhost:8080/`

Las url disponibles se encuentran en el archivo `HolaMundoController.java` en las anotaciones con el nombre `@GetMapping`. Por ejemplo, para 

```java
@GetMapping(path = "/hola-mundo")
```

la URL sería la siguiente.

`localhost:8080/hola-mundo`