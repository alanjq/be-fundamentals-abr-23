package com.bews.restfulwebservices.helloworld;

public class HolaMundoBean {
	private String mensaje;
	
	public HolaMundoBean (String mensaje) {
		this.setMensaje(mensaje);
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
	@Override
	public String toString() {
		return "HolaMundoBean [ensaje=" + mensaje + "]";
	}

}
