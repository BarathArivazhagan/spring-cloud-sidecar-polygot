package com.barath.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The Class Application.
 * @author barath.arivazhagan
 */
@SpringBootApplication
@EnableDiscoveryClient
@RestController
public class Application {

	/**
	 * The main method.
	 *
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	/**
	 * Home.
	 *
	 * @return the string
	 */
	@GetMapping("/")
	public String home(){
		return "WELCOME TO COSTCO STORE ";
	}
}
