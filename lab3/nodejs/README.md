Prerequisites:
- Docker installed on your machine
- Node.js 22.x (if you want to run the app locally)

## Project Structure 

This repository contains three Dockerfile variants:

- `Dockerfile.basic` - A basic development setup (NOT production ready)
  - Simple single-stage build
  - Includes all dependencies (including dev dependencies)
  - Larger image size
  - Good for development and testing

- `Dockerfile.multistage` - A production-ready multi-stage build
  - Separates build and runtime environments
  - Excludes dev dependencies from final image
  - Significantly smaller image size
  - Recommended for most production use cases

- `Dockerfile.distroless` - Advanced security-focused build
  - Uses Google's distroless base image
  - Minimal attack surface
  - Smallest possible image size
  - Best for high-security requirements


Run `./compare-images.sh` to see the size difference between the three images.

Run `docker run -p 3000:3000 ts-docker-basic` to start the basic image.

Run `docker run -p 3000:3000 ts-docker-multistage` to start the multi-stage image.

Run `docker run -p 3000:3000 ts-docker-distroless` to start the distroless image.