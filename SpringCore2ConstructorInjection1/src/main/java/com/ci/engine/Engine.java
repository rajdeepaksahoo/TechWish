package com.ci.engine;

import org.springframework.stereotype.Component;

@Component
public class Engine {
	private String brand;

	public Engine(String brand) {
		super();
		this.brand = brand;
	}

	public Engine() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
