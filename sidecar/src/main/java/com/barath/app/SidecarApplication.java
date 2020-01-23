package com.barath.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.sidecar.EnableSidecar;

/**
 * The Class SidecarApplication.
 * @author barath.arivazhagan
 * 
 */
@SpringBootApplication
@EnableSidecar
@EnableDiscoveryClient
public class SidecarApplication {

	/**
	 * The main method.
	 *
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(SidecarApplication.class, args);
	}
}
