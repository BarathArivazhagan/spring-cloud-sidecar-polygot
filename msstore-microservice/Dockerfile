FROM openjdk:8-jdk-alpine as final
ADD target/msstore-microservice-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

