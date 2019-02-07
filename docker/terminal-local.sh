#!/bin/sh

docker run -it --rm -p 3000:3000 -v "$(pwd)":"/hello-cammis" cadhcscammis/hello-cammis sh