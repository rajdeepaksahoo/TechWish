package main;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import beanClass.Spring1;
public class MainSpring {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml"); 
		Spring1 s1 = (Spring1)	context.getBean("Spring1",Spring1.class);
		System.out.println(s1);
	}

}
