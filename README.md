# spring-cloud-sidecar-polygot-demo
This project contains demonstrates the usage of netflix`s side car polygot.
Spring cloud side car helps to register non jvm applications in eureka service registration server and available as part of service discovery. 

> <b> Note: </b> Branches 1.x.x/2.x.x versions makes it compatible with spring boot versions 1.x.x/2.x.x.
> Kindly choose branch w.r.t spring boot release versions.

![side car](images/sidecar.png)


#### Compatability Matrix

choose the branch based on below versions.

<table>
 <tr>
    <th style="text-align:left">Branch/Version</th>
    <th style="text-align:left">Spring Boot</th>
    <th style="text-align:left">Spring Cloud</th>
    <th style="text-align:left">Node Js</th>
  </tr>
  <tr>
    <td>master</td>
    <td>2.1.5.RELEASE</td>
    <td>Greenwich.SR1</td>
    <td>12.4.0</td>
  </tr>
  <tr>
    <td>2.1.4</td>
    <td>2.1.4.RELEASE</td>
    <td>Greenwich.RELEASE</td>
     <td>12.4.0</td>
  </tr>
  <tr>
    <td>2.1.2</td>
    <td>2.1.2.RELEASE</td>
    <td>Greenwich.RC2</td>
     <td>10.16.0</td>
  </tr>
  <tr>
    <td>2.0.3</td>
    <td>2.0.3.RELEASE</td>
    <td>Finchley.RELEASE</td>
     <td>8.16.0</td>
  </tr>
  <tr>
    <td>1.5.6</td>
    <td>1.5.6.RELEASE</td>
    <td>Dalston.SR3</td>
     <td>8.16.0</td>
  </tr>
  
</table>

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
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/sidecar">sidecar</a></td>
    <td>9004</td>
    <td>Side car proxy for routing and filtering to wstore node app</td>
  </tr>
   <tr>
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/wstore-node-express">wstore-node-express</a></td>
    <td>3000</td>
    <td>Node express (non jvm ) application </td>
  </tr>
  <tr>
    <td><a href="https://github.com/BarathArivazhagan/spring-cloud-sidecar-sample/tree/master/zuul-proxy">zuul-proxy</a></td>
    <td>9005</td>
    <td>Zuul proxy for routing and filtering</td>
  </tr>
</table>


## How to build and run ?

 * Download/Clone the repository : 
   
   ```sh
  $ git clone https://github.com/BarathArivazhagan/spring-cloud-sidecar-polygot.git
  $ cd spring-cloud-sidecar-polygot
   ```
 * Maven build : 
   
   ```sh
   $ ./mvnw clean install
   ```
 * Docker image build : 
   
   ```sh
   # Note change the docker images as per your image name in docker compose file
   $ docker-compose build 
   ```
 * To run the application :

  ```sh
  $ docker-compose up
  ```

## How to test the application ? 

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

## Service Urls:
<table>
  <tr>
    <td><a href="http://localhost:9005/msstore">http://localhost:9005/msstore</a></td><td>msstore</td>
  </tr>
   <tr>
    <td><a href="http://localhost:9005/csstore">http://localhost:9005/csstore</a></td><td>csstore</td>
  </tr>
   <tr>
    <td><a href="http://localhost:9004/wstore/home">http://localhost:9005/csstore</a></td><td>wstore</td>
  </tr>
</table>


## Side car route definition 

```
zuul:
  routes:
    wstore: 
      path: /wstore/**
      url: http://localhost:3000

sidecar:
  port: 3000
  health-uri: http://localhost:3000/health

```

### Notes : 


<b>sidecar.port</b> : Port must be same as the non jvm port <br>
<b>sidecar.health-uri</b>: non jvm application should expose this url with json message {"STATUS" : "UP"} to indicate sidecar the app is UP.

## How to test sidecar ? 

<div>
   Navigate to <a href="http://localhost:9004/wstore/home">http://localhost:9004/wstore/home</a> --> sidecar routes to non jvm(nodejs app)  
</div>

## Why Zuul as well as side car ? 

yes, thats right. `@EnableSideCar` includes `@EnableZuulProxy`,so side car can act as zuul proxy itself. 
In order to provide separate proxy for side car(non jvm) based applications, this repo contains two proxies

<i>zuul-proxy</i> : provides proxy to jvm based applications. <br>
<i>sidecar </i> : provides proxy to non jvm based applications.



## How to rebuild the project after the changes? 

```
$ docker-compose build
```



## References 


* http://cloud.spring.io/spring-cloud-netflix/spring-cloud-netflix.html



