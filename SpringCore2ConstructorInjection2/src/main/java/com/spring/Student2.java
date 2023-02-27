package com.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.spring.mark.Mark;
@Component
public class Student2 implements Mark {
	private int roll;
	private String name;
	
	  
	  Student2(int roll, String name) {
		super();
		this.roll = roll;
		this.name = name;
	}
	public Student2() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int mark() {
		return 80;
	}
	@Override
	public String toString() {
		return "Student1 [roll=" + roll + ", name=" + name + ", mark()=" + mark() + "]";
	}
}
