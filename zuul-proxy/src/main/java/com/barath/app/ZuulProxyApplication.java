package com.barath.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

/**
 * The Class ZuulProxyApplication.
 */
@SpringBootApplication
@EnableZuulProxy
@EnableDiscoveryClient
public class ZuulProxyApplication {

	/**
	 * The main method.
	 *
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(ZuulProxyApplication.class, args);
	}
}
