# spring-cloud-sidecar-sample
This project contains samples demonstrating the usage of side car polygot

<table>


 <tr>
    <th style="text-align:left">Name</th>
    <th style="text-align:left">Port</th> 
    <th style="text-align:left">Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/eureka-server"> eureka-server</a></td>
    <td>9000</td>
    <td>Eureka server - service registration server</td>
  </tr>
  <tr>
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/csstore-microservice">csstore-microservice</a></td>
    <td>9001</td>
    <td>Service discovery microservice registered with eureka server</td>
  </tr>
  <tr>
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/msstore-microservice">msstore-microservice</a></td>
    <td>9002</td>
    <td>Service discovery microservice registered with eureka server</td>
  </tr>
  <tr>
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/zuul-proxy">zuul-proxy</a></td>
    <td>9005</td>
    <td>Zuul proxy for routering and filtering</td>
  </tr>
</table>


## How to build and run ?

 * Download/Clone the repository : 
   
   ```
   ./mvnw clean install

   ```

 * To run the application :

	  ```
	  docker-compose up

	  ```

## How to test the application : 

Use zuul proxy to route to respective microservices. 

zuul route definition : 

```
zuul:
  routes:
    msstore :       
        path: /msstore/**
        url: http://localhost:9002
    csstore: 
        path: /csstore/**
        url: http://localhost:9001

```
<div>
	<span>Navigate to http://localhost:9005/msstore for msstore </span><br>
    <span>Navigate to http://localhost:9005/csstore for csstore </span>
</div>



