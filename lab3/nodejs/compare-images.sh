#!/bin/bash

echo "Building basic image..."
docker build -t ts-docker-basic -f Dockerfile.basic .

echo -e "\nBuilding multi-stage image..."
docker build -t ts-docker-multistage -f Dockerfile.multistage .

echo -e "\nBuilding distroless image..."
docker build -t ts-docker-distroless -f Dockerfile.distroless .

echo -e "\nImage sizes comparison:"
docker images | grep ts-docker 