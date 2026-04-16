# Container Quick Start with Podman
<!-- TOC -->

- [Container Quick Start with Podman](#container-quick-start-with-podman)
  - [Podman \& Podman Desktop](#podman--podman-desktop)
  - [Start Podman](#start-podman)
  - [Pull First Image](#pull-first-image)
  - [Verify Pull Image](#verify-pull-image)
  - [Starting a container](#starting-a-container)
  - [Pull web server image](#pull-web-server-image)
  - [Delete Container](#delete-container)
  - [Back to Table of Content](#back-to-table-of-content)

<!-- /TOC -->

## Podman & Podman Desktop

- Podman (https://podman.io/)

  ![](../images/lab1/podman1.png)

  Podman is a daemonless, open source, Linux native tool designed to make it easy to find, run, build, share and deploy applications using Open Containers Initiative (OCI) Containers and Container Images. Podman provides a command line interface (CLI) familiar to anyone who has used the Docker Container Engine. Most users can simply alias Docker to Podman (alias docker=podman) without any problems. Similar to other common Container Engines (Docker, CRI-O, containerd), Podman relies on an OCI compliant Container Runtime (runc, crun, runv, etc) to interface with the operating system and create the running containers. This makes the running containers created by Podman nearly indistinguishable from those created by any other common container engine.

  Containers under the control of Podman can either be run by root or by a non-privileged user. Podman manages the entire container ecosystem which includes pods, containers, container images, and container volumes using the libpod library. Podman specializes in all of the commands and functions that help you to maintain and modify OCI container images, such as pulling and tagging. It allows you to create, run, and maintain those containers and container images in a production environment.

  There is a RESTFul API to manage containers. We also have a remote Podman client that can interact with the RESTFul service. We currently support clients on Linux, Mac, and Windows. The RESTFul service is only supported on Linux.

  If you are completely new to containers, we recommend that you check out the Introduction. For power users or those coming from Docker, check out our Tutorials. For advanced users and contributors, you can get very detailed information about the Podman CLI by looking at our Commands page. Finally, for Developers looking at how to interact with the Podman API, please see our API documentation Reference.

  - 

- Podman Desktop (https://podman-desktop.io/)
  
  ![](../images/lab1/podman2.webp)
  
  Podman Desktop is an innovative desktop tool that brings the power of containers and Kubernetes to your computer, making it easy to create, manage, and run containerized applications visually. Intuitive interfaces and smart integration with the most important container technologies, support for Mac, Windows and Linux, Podman Desktop helps you to use containers, pods and Kubernetes on your local machine.

  As you read through this documentation, you'll learn how to:

  - Install and set up Podman Desktop on your system
  - The basics about Podman and how to create a machine
  - How to migrate from Docker and what to look for
  - Create and manage containers, registries and pods
  - Setting up, running and troubleshooting Compose
  - How to deploy containers to Kubernetes using Kind, Lima, Minikube or OpenShift
  - And many more details about the general extension mechanism as well as working with LLMs and AI Lab.

## Start Podman

- Open Podman Desktop
  
  To open `Podman Desktop`, launch it from your Applications folder (macOS), Start Menu (Windows), or by running podman-desktop in a terminal (Linux). 

- Podman Desktop provides an intuitive `dashboard` for managing containers, pods, and images, acting as a GUI alternative to Docker Desktop. It allows users to initialize Podman machines, manage Kubernetes resources, and leverage extensions for extended functionality. It works seamlessly across Windows, macOS, and Linux, displaying real-time status. 
  
  ![](../images/lab1/lab1-1.png)

## Pull First Image

- navigate to the Images tab in the left-hand sidebar. From here, you can pull images from registries, build new images from a Containerfile, and view details, tags, or history for existing local images. Use the top-right "Pull" button to download new images by name. 
  
  ![](../images/lab1/lab1-2.png)

- Click Pull Image Button, 
  
  ![](../images/lab1/lab1-3.png)

- Enter the image name, `quay.io/podman/hello`
- Click Pull image.
  
  ![](../images/lab1/lab1-4.png)

- Wait until download complete.
  
  ![](../images/lab1/lab1-5.png)

- Click Done.

## Verify Pull Image

- View the pulled image on the same page. (Images)
  
  ![](../images/lab1/lab1-6.png)

- Optional: Click the name of the image to view its summary.

- Optional: View the history of the image or inspect the image.

## Starting a container

- Go to the Images component page.

- Click the Run Image icon corresponding to the image you want to run. Select, `quay.io/podman/hello`
  
  ![](../images/lab1/lab1-7.png)

- Review or edit the container configuration details.
  
  - Set Container name: `my-container`
    
  ![](../images/lab1/lab1-8.png)

- Click `Start Container`. The Container Details page opens.

  ![](../images/lab1/lab1-9.png)

- Select the `Logs` tab to view the program running.
  
  ![](../images/lab1/lab1-10.png)
  
- Click `Containers` tab in left menu, select `running` tab. There are no containers currently running.
  
  ![](../images/lab1/lab1-11.png)
 
  ![](../images/lab1/lab1-12.png)

- select `Stopped` tab. There will be a `my-container` container.
  
  ![](../images/lab1/lab1-13.png)

- Click start icon again. (while in the `Stopped` tab)
  
  ![](../images/lab1/lab1-14.png)

- Click `my-container` at column Name, to view Container Detail and select Logs tab. Verify that the container is running again. 

  ![](../images/lab1/lab1-15.png)

  ![](../images/lab1/lab1-16.png)

## Pull web server image

- Back to Images tab, click Pull 
  
  ![](../images/lab1/lab1-17.png)

- In image to pull, type `httpd`, wait auto image suggestions.

  ![](../images/lab1/lab1-18.png)

- select `docker.io/httpd`, click Pull Image

  ![](../images/lab1/lab1-19.png)

- Back to Images tab, verify new image pull to your machine.

  ![](../images/lab1/lab1-20.png)

- click `Run` icon at new image (httpd).

  ![](../images/lab1/lab1-22.png)

- In Run Image page, Basic tab, set
  
  - Container name: `my-web-container`
  
    ![](../images/lab1/lab1-23.png)
  
  -  Local port for 80/tcp: `8080`

    ![](../images/lab1/lab1-24.png)

- Click `start container`, change to Logs tab, view apache http server start logs.

  ![](../images/lab1/lab1-25.png)

- Click Containers menu, view `my-web-container` running port 8080.

  ![](../images/lab1/lab1-26.png)

- Click context menu (3 dot) at `my-web-container` and select Open Browser, check web server output.

  ![](../images/lab1/lab1-27.png)

  ![](../images/lab1/lab1-28.png)

## Delete Container

- Delete container by click delete container icon of `my-web-container` in Containers tab.

  ![](../images/lab1/lab1-29.png)

- Confirm delete  

  ![](../images/lab1/lab1-30.png)    

- repeat with `my-container` container, Check that there are no containers left in the Containers tab.

  ![](../images/lab1/lab1-31.png) 

## Back to Table of Content
- [Introduction to Container Technology with Podman](../README.md)