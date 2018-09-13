
FROM openjdk:8-jdk-alpine as final
ADD target/csstore-microservice-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

