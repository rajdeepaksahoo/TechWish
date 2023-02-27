package vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import engine.Engine;

@Component
public class Vehicle {
	Engine e;
	private int id;
	private String model;
	
	@Autowired
	public Vehicle(Engine e, int id, String model) {
		super();
		this.e = e;
		this.id = id;
		this.model = model;
	}

	@Override
	public String toString() {
		return "Vehicle [e=" + e + ", id=" + id + ", model=" + model + "]";
	}
	
	
}
