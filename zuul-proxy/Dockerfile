FROM openjdk:8-jdk-alpine as final
ADD target/zuul-proxy-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
