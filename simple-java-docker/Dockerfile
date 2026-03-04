# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-alpine
# Set the working directory in the container
WORKDIR /app
# Copy the current directory contents into the container at /app
COPY . /app
# Compile the Java application
RUN javac src/Main.java
# Run the Java application
CMD ["java", "-cp", "src", "Main"]
