#!/bin/sh
# Builds Docker image and enters a terminal session inside the container.

docker build -t ca-mmis/hello-cammis . && docker run -it --rm -v "$(pwd)":/hello-cammis ca-mmis/hello-cammis sh
