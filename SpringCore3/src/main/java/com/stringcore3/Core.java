package com.stringcore3;

import org.springframework.stereotype.Component;

@Component
public class Core {
	private String name;
	private String place;
	private String college;
	 
	 
	public Core() {
		
	}


	public Core(String name, String place, String college) {
		super();
		this.name = name;
		this.place = place;
		this.college = college;
	}
	
	
}
