FROM openjdk:8-jdk-alpine
ADD target/config-server-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]