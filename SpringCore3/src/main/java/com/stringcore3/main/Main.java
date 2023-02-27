package com.stringcore3.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.stringcore3.Core;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext("com");
		Core c = context.getBean(Core.class);
		System.out.println(c);
	}

}
