
# Builder stage
FROM maven:3.5-jdk-8 as builder
WORKDIR /opt
COPY . /opt
RUN mvn clean install


# Final stage

FROM openjdk:8-jdk-alpine as final
# best practice is not to use root user
RUN adduser -D demo 
USER demo
COPY --from=builder  /opt/target/zuul-proxy-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
