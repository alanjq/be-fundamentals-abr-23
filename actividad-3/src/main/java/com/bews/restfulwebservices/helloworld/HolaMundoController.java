package com.bews.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

	@GetMapping(path = "/hola-mundo")
	public String holaMundo() {
		return "Hola Mundo";
	}
	
	@GetMapping(path = "/hola-mundo-bean")
	public HolaMundoBean holaMundoBean() {
		return new HolaMundoBean("Hola Mundo bean");
	}
	
	@GetMapping(path = "/hola-mundo/saludo/{nombre}")
	public HolaMundoBean holaMundoSaludo(@PathVariable String nombre) {
		return new HolaMundoBean(String.format("Hola Mundo, %s",  nombre));
	}
}
