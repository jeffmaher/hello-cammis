[![Maintainability](https://api.codeclimate.com/v1/badges/81eb79567ccf864d53cc/maintainability)](https://codeclimate.com/github/ca-mmis/hello-cammis/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/81eb79567ccf864d53cc/test_coverage)](https://codeclimate.com/github/ca-mmis/hello-cammis/test_coverage)

# hello-cammis
A small nodejs api for hello world, used for testing and POC with PATS IAC

## Setup Instructions

In order to run this project, you'll need to have an instance of [hello-cammis-data](https://github.com/ca-mmis/hello-cammis-data) running that it can connect to. The following environment var

## Local Development Docker Convenience Scripts

These all assume that hello-cammis-data is running on `localhost` at port `8000`.

- Building Image: `sh docker/build-local.sh`
- Running App Server: `sh docker/run-local.sh`
- Running Terminal: `sh docker/terminal-local.sh`

## Running Docker Image

`docker run -p 3000:3000 -e HELLO_CAMMIS_DATA_HOST="<url>" -e HELLO_CAMMIS_DATA_PORT="<port>" cadhcscammis/hello-cammis`

### Optional environmental flags:
 
- `-e PORT=<port>`: Desired port number, will need to correspond to `-p` above





