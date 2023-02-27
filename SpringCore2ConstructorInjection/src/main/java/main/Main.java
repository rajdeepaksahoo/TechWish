package main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import vehicle.Vehicle;

public class Main {
	public static void main(String... args) {
//		ApplicationContext ac = new AnnotationConfigApplicationContext(VehicleConfig.class);
//		Object v = ac.getBean("vehicleConfig");
//		System.out.println(v.toString());
		
		ApplicationContext ac = new AnnotationConfigApplicationContext("config","engine");
//		((AnnotationConfigApplicationContext)ac).refresh();
		Vehicle v = ac.getBean(Vehicle.class);
		System.out.println(v.toString());
	}
}
	
