package com.ci.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.ci.engine.Engine;
@Component
public class Vehicle {
	@Value("Car")
	private String model;
	@Autowired
	private Engine e;
	@Value("12")
	private int id;
	public Vehicle(String model, Engine e, int id) {
		super();
		this.model = model;
		this.e = e;
		this.id = id;
	}
	
	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Vehicle [model=" + model + ", e=" + e + ", id=" + id + "]";
	}
	
}
