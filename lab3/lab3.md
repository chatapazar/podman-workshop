# Build and Manage Container Image
<!-- TOC -->

- [Build and Manage Container Image](#build-and-manage-container-image)
  - [Clone Example from GitHub](#clone-example-from-github)
  - [Build Container with Multi-Stage](#build-container-with-multi-stage)
  - [Build Python Container](#build-python-container)
  - [Build Node.JS Container](#build-nodejs-container)
  - [Build Java Container](#build-java-container)
  - [Back to Table of Content](#back-to-table-of-content)

<!-- /TOC -->

## Clone Example from GitHub

- Check your git on machine

- type below command or copy and paste to your terminal.
  
  ```
  git --version
  ```

  example output
  
  ```ssh
  $ git --version
  $ git version 2.40.1
  ```

- Create your directory for source code (50 MB).

- Run the git clone command to get source code from --> https://github.com/chatapazar/podman-workshop.git

- type below command or copy and paste to your terminal.
  
  ```
  cd <your directory>
  git clone https://github.com/chatapazar/podman-workshop.git
  ```

  example output

  ![](../images/lab3/lab3-1.png)

- Review clone folder

- type below command or copy and paste to your terminal. `(Change your command if you are using the Windows OS. such as from ll --> dir)`
  
  ```
  cd <your directory>/podman-workshop
  ll
  ```

  example output

  ![](../images/lab3/lab3-2.png)

- Open Clone Folder (podman-workshop) with Visual Studio Code (VS Code) or your editor.
  
  ![](../images/lab3/lab3-3.png)

## Build Container with Multi-Stage

Since the purpose of this lab is to introduce how to build containers for each programming language, the lab has prepared source code and uses a multi-stage build method. This avoids having to build the application in each language on the machine where the lab will be held, thereby reducing the problems associated with preparing the environment.

  ![](../images/lab3/multi-stage.jpg)

## Build Python Container

- Review source code, From VSCode, go to podman-workshop > lab3 > python
  
- Review file podman-workshop > lab3 > python > backend > app.py, check port = 8080 and render template `index.html`
  
  ![](../images/lab3/lab3-4.png)

- Review file podman-workshop > lab3 > python > backend > templates > index.html, check body is `Hello from Flask!`, 

- [Flask](https://github.com/pallets/flask) 
  
  Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. It began as a simple wrapper around Werkzeug and Jinja, and has become one of the most popular Python web application frameworks.

  Flask offers suggestions, but doesn't enforce any dependencies or project layout. It is up to the developer to choose the tools and libraries they want to use. There are many extensions provided by the community that make adding new functionality easy.

  ![](../images/lab3/lab3-5.png)   

- Review file podman-workshop > lab3 > python > backend > requirements.txt,  
  
  A requirements.txt file is a plain-text document used in Python development to list all the external libraries (dependencies) a project needs to run. It ensures that any developer or deployment system can recreate the exact same environment by installing the correct versions of these packages. 

  ![](../images/lab3/lab3-6.png)

- Review file podman-workshop > lab3 > python > backend > Dockerfile  

  ![](../images/lab3/lab3-7.png)

- Edit Dockerfile in Stage 1 with below code.
  
  - used `python:3.9` as builder image 
  
  - set work directory as `/app`

  - copy source code from backend folder to /app (represent with `.`) 
  
  - install depencies in requirements.txt
  
  ```
  # ------------------- Stage 1: Build Stage ------------------------------
  FROM python:3.9 AS backend-builder

  # Set the working directory to /app
  WORKDIR /app

  # Copy the contents of the backend directory into the container at /app
  COPY backend/ .

  # Install dependencies specified in requirements.txt
  RUN pip install --no-cache-dir -r requirements.txt
  ```

- Edit Dockerfile in Stage 2 with below code.
  
  - used `python:3.9-slim` as runtime image 
  
  - set work directory as `/app`

  - copy the built dependencies from the backend-builder stage 

  - Copy the application code from the backend-builder stage

  - expose port 8080
  
  - set default command to run `python app.py`
  
  ```
  # ------------------- Stage 2: Final Stage ------------------------------

  # Use a slim Python 3.9 image as the final base image
  FROM python:3.9-slim

  # Set the working directory to /app
  WORKDIR /app

  # Copy the built dependencies from the backend-builder stage
  COPY --from=backend-builder /usr/local/lib/python3.9/site-packages/ /usr/local/lib/python3.9/site-packages/

  # Copy the application code from the backend-builder stage
  COPY --from=backend-builder /app /app

  # Expose port 8080 for the Flask application
  EXPOSE 8080

  # Define the default command to run the application
  CMD ["python", "app.py"]
  ```

- Review final Dockerfile 

  ![](../images/lab3/lab3-8.png)  

- build image with podman, open your terminal (command prompt/powershell)

- type below command or copy and paste to your terminal.
  
  ```
  cd <your directory>/podman-workshop/lab3/python
  podman build -f Dockerfile -t my-python .
  ```

  example output

  ![](../images/lab3/lab3-9.png)  

- `Note:` Since there is no base image on the local machine, pulling the image will take time. This can reduce build time by pulling a pre-built image.
  
- Check images `my-python` after build

- type below command or copy and paste to your terminal.
  
  ```
  podman images
  ```

  example output

  ![](../images/lab3/lab3-10.png)  

- Run Container with podman run 

- type below command or copy and paste to your terminal.
  
  ```
  podman run -d -p 8080:8080 --name my-python-app localhost/my-python
  ```

- Check container process.

- type below command or copy and paste to your terminal.
  
  ```
  podman ps
  ```
  example output

  ![](../images/lab3/lab3-11.png)

- Open Browser to `http://locahost:8080`

  example output
  
  ![](../images/lab3/lab3-12.png)

- Stop and remove container

- type below command or copy and paste to your terminal.
  
  ```
  podman stop my-python-app
  podman rm my-python-app
  ```
  example output    

  ![](../images/lab3/lab3-13.png)

- Check container process.

- type below command or copy and paste to your terminal.
  
  ```
  podman ps
  ```
  example output

  ![](../images/lab3/lab3-14.png)                

## Build Node.JS Container

## Build Java Container

## Back to Table of Content

- [Introduction to Container Technology with Podman](../README.md)