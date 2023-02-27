package com.ci.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ci.vehicle.Vehicle;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext("com");
		Vehicle v = context.getBean(Vehicle.class);
		System.out.println(v);
	}

}
