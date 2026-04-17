# Container lifecycle Management,  Network & Storage
<!-- TOC -->

- [Container lifecycle Management,  Network \& Storage](#container-lifecycle-management--network--storage)
  - [Podman Pod](#podman-pod)
  - [Pod for PgAdmin and Postgresql](#pod-for-pgadmin-and-postgresql)
  - [Test pgAdmin --\> PostgreSQL](#test-pgadmin----postgresql)
  - [Challenge!!! Try to stop and test query again!!!](#challenge-try-to-stop-and-test-query-again)
  - [Why does Podman automatically create a volume? (Optional)](#why-does-podman-automatically-create-a-volume-optional)
  - [Back to Table of Content](#back-to-table-of-content)

<!-- /TOC -->

## Podman Pod

A Podman pod is a group of one or more OCI containers that share the same network, IP address, port mappings, and volume mounts, functioning similarly to a Kubernetes pod. Designed for local development and simplified management, pods allow related containers (e.g., an app and its database) to be started, stopped, and managed as a single unit. 

Key aspects of Podman pods include:

- Shared Resources: Containers within a pod communicate via localhost because they share the same network namespace.

- Infra Container: Each pod utilizes a small, "pause" container to hold the namespaces, allowing the pod to stay alive even if application containers restart.

- Kubernetes Compatibility: Podman can generate Kubernetes-style YAML definitions for pods using podman generate kube, facilitating an easy transition to Kubernetes.

- Management Commands: Pods are managed using the podman pod command set, which includes create, start, stop, ps (list), and rm (remove).

- Easy Setup: You can create an empty pod using podman pod create or start a container in a new pod using podman run --pod new:podname. 

Pods are ideal when you need to tightly couple containerized services, whereas running standalone containers is better for independent services.

  ![](../images/lab4/lab4-1.png)

## Pod for PgAdmin and Postgresql

`PostgreSQL` is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

`pgAdmin` is the most popular, open-source, and feature-rich graphical user interface (GUI) tool used to manage, develop, and administer PostgreSQL databases. It simplifies database operations for both novices and experts, offering functionalities like SQL querying, table visualization, data manipulation, and server monitoring through a web-based or desktop interface.

  ![](../images/lab4/lab4-2.png)

- Create pod for manage pgAdmin container and PostgreSQL container

- type below command or copy and paste to your terminal.
  
  ```
  podman pod create --name sql-pod -p 9876:80 -p 5432:5432
  ```

  example output

  ![](../images/lab4/lab4-5.png)

- Create PostgreSQL container in pod sql-pod

- type below command or copy and paste to your terminal.
  
  ```
  podman run -d --pod sql-pod --name postgres-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=mypassword docker.io/library/postgres:latest
  ```

  example output

  ![](../images/lab4/lab4-6.png)

- Create pgAdmin container in pod sql-pod

- type below command or copy and paste to your terminal.
  
  ```
  podman run -d --pod sql-pod --name pgadmin-ui -e PGADMIN_DEFAULT_EMAIL=admin@example.com -e PGADMIN_DEFAULT_PASSWORD=adminpass docker.io/dpage/pgadmin4:latest
  ```

  example output

  ![](../images/lab4/lab4-7.png)

- Check container and pod 

- type below command or copy and paste to your terminal.
  
  ```
  podman ps
  podman pod ps
  ```

  example output

  ![](../images/lab4/lab4-8.png)

- Test Stop pod!

- type below command or copy and paste to your terminal.
  
  ```
  podman pod stop sql-pod
  podman pod ps
  podman ps
  ```

  example output

  ![](../images/lab4/lab4-9.png)

- Test Start pod!

- type below command or copy and paste to your terminal.
  
  ```
  podman pod start sql-pod
  podman pod ps
  podman ps
  ```

  example output

  ![](../images/lab4/lab4-10.png)

- View pod in podman desktop

  ![](../images/lab4/lab4-11.png)

  ![](../images/lab4/lab4-12.png)  
  
## Test pgAdmin --> PostgreSQL

- Open your browser and go to http://localhost:9876.
- Log in with the credentials (admin@example.com / adminpass).

  ![](../images/lab4/lab4-13.png)  

- Click Add New Server
  
  ![](../images/lab4/lab4-14.png)    

- In General Tab, set Name: `localhost`
  
  ![](../images/lab4/lab4-15.png)  

- In Connectin Tab, set Host name/address : `localhost`

- set Port : `5432`

- set Maintenance database : `postgres`

- set username: `admin`
  
- set password: `mypassword`

- Click Save. 

  ![](../images/lab4/lab4-16.png)  

  ![](../images/lab4/lab4-18.png)

- In Object Explorer, go to localhost > databases > postgres, right click on postgres database, select query tool

  ![](../images/lab4/lab4-19.png)

- Create Table and Insert Example Data (with below sql command)

  ```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );

  INSERT INTO users (name, email) VALUES 
  ('Alice', 'alice@example.com'),
  ('Bob', 'bob@example.com');
  ```

- Click Execute script 

  ![](../images/lab4/lab4-20.png)

- Go to `users` table, select view > All Rows

  ![](../images/lab4/lab4-21.png)

- View output in query tool

  ![](../images/lab4/lab4-22.png)        

- Open Podman Desktop, View Volumes menu, check Podman automatically createห anonymous volumes.  

  ![](../images/lab4/lab4-23.png)  

  ![](../images/lab4/lab4-24.png)  
  
## Challenge!!! Try to stop and test query again!!!

- Stop pod and Start pod again

- Check existing table and data by `select * from users;`

## Why does Podman automatically create a volume? (Optional)

- `Podman Image-Defined Volumes`

    If a Containerfile/Dockerfile contains a VOLUME instruction, Podman will automatically create anonymous volumes for those paths when the container is created, unless you explicitly map them to a different source. 

  ![](../images/lab4/lab4-3.png)

  ![](../images/lab4/lab4-4.png)
    
## Back to Table of Content
- [Introduction to Container Technology with Podman](../README.md)