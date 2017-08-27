FROM java
MAINTAINER BARATH
EXPOSE 9005
ADD target/sidecar-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]