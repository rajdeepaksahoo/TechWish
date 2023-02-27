package com.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.spring.mark.Mark;
@Component
public class Student {

	@Value("123")
	private int roll;

	@Value("Xyz")
	private String name;
	@Autowired
	@Qualifier("student1")
	private Mark m;
	
	Student(){
		
	}
	
	public Student(int roll, String name, Mark m) {
		super();
		this.roll = roll;
		this.name = name;
		this.m = m;
	}
	@Override
	public String toString() {
		return "Student [roll=" + roll + ", name=" + name + ", m=" + m.mark() + "]";
	}
	
}
