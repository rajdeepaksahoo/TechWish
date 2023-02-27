package com.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.spring.mark.Mark;
@Component
public class Student1 implements Mark {
	private int roll;
	private String name;
	public Student1() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student1(int roll, String name) {
		super();
		this.roll = roll;
		this.name = name;
	}
	
	

	public int mark() {
		return 50;
	}
	
}
