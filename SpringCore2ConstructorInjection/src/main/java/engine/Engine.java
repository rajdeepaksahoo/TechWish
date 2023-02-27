package engine;

import org.springframework.stereotype.Component;

@Component
public class Engine {
	
	String model;

	public Engine(String model) {
		super();
		this.model = model;
	}
	
	
}
