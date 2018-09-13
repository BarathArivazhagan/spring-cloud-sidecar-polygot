

 FROM openjdk:8-jdk-alpine as final
 ADD target/sidecar-*.jar app.jar
 ENTRYPOINT ["java","-jar","app.jar"]








