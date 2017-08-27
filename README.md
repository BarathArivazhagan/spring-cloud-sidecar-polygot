# spring-cloud-sidecar-sample
This project contains samples demonstrating the usage of side car polygot

<table>


 <tr>
    <th style="text-align:left">Name</th>
    <th style="text-align:left">Port</th> 
    <th style="text-align:left">Description</th>
  </tr>
  <tr>
    <td>eureka-server</td>
    <td>9000</td>
    <td>Eureka server - service registration server</td>
  </tr>
  <tr>
    <td>csstore-microservice</td>
    <td>9001</td>
    <td>Service discovery microservice registered with eureka server</td>
  </tr>
  <tr>
    <td>msstore-microservice</td>
    <td>9002</td>
    <td>Service discovery microservice registered with eureka server</td>
  </tr>
</table>


## How to build and run ?

 * Download/Clone the repository : 
   Run maven build: 

   ```
   ./mvnw clean install

   ```

 * To run the application :

  ```
  docker-compose up
  
  ```