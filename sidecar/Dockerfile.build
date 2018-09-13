
# Builder stage
FROM maven:3.5-jdk-8 as builder
WORKDIR /opt
COPY . /opt
RUN mvn clean install


# Final stage

FROM openjdk:8-jdk-alpine as final
COPY --from=builder  /opt/target/sidecar-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
