# Spring Boot Demo App

An example spring boot java application that is dockerized with a multi stage dockerfile to remove the need for java locally to run it

## Setup

### Docker Maven
```bash
docker build . -f Dockerfile.maven -t springboot-demo
```

### Docker Gradle
```bash
docker build . -f Dockerfile.gradle -t springboot-demo
```

### Maven

Tested on the following versions:

```bash
$ mvn -version
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: /usr/local/Cellar/maven/3.6.3_1/libexec
Java version: 15.0.1, vendor: N/A, runtime: /usr/local/Cellar/openjdk/15.0.1/libexec/openjdk.jdk/Contents/Home
Default locale: en_DE, platform encoding: UTF-8
OS name: "mac os x", version: "11.0.1", arch: "x86_64", family: "mac"

$ java --version
java 15.0.1 2020-10-20
Java(TM) SE Runtime Environment (build 15.0.1+9-18)
Java HotSpot(TM) 64-Bit Server VM (build 15.0.1+9-18, mixed mode, sharing)
```
building jar:

```bash
mvn package
```

### Gradle

Tested on the following versions

```bash
$ gradle -version

------------------------------------------------------------
Gradle 6.7.1
------------------------------------------------------------

Build time:   2020-11-16 17:09:24 UTC
Revision:     2972ff02f3210d2ceed2f1ea880f026acfbab5c0

Kotlin:       1.3.72
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.8 compiled on May 10 2020
JVM:          15.0.1 (Oracle Corporation 15.0.1+9)
OS:           Mac OS X 11.0.1 x86_64

$ java --version
java 15.0.1 2020-10-20
Java(TM) SE Runtime Environment (build 15.0.1+9-18)
Java HotSpot(TM) 64-Bit Server VM (build 15.0.1+9-18, mixed mode, sharing)
```

building JAR:
```bash
gradle build
```


## Run Application

### Docker
```bash
docker run -p 8080:8080 springboot-demo
```

### Java Maven
```bash
java -jar target/springboot-demo-0.0.1.jar
```

### Java Gradle
```bash
java -jar  build/libs/springboot-demo-0.0.1.jar
```
