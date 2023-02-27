package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import engine.Engine;
import vehicle.Vehicle;
@Configuration
public class VehicleConfig {
	@Bean
	public Engine engine() {
		return new Engine("R8");
	}
	@Bean
	public Vehicle vehicle() {
		return new Vehicle(engine(), 101, "Audi");
	}
}
