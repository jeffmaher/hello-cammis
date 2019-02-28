#!/bin/sh


docker run -it --rm -v "$(pwd)":"/hello-cammis" hello-cammis npm install && docker run -it --rm -p 3000:3000 -v "$(pwd)":"/hello-cammis" -e HELLO_CAMMIS_DATA_HOST="host.docker.internal" -e HELLO_CAMMIS_DATA_PORT="8000" hello-cammis
