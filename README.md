
## Code Climate
[![Maintainability](https://api.codeclimate.com/v1/badges/81eb79567ccf864d53cc/maintainability)](https://codeclimate.com/github/ca-mmis/hello-cammis/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/81eb79567ccf864d53cc/test_coverage)](https://codeclimate.com/github/ca-mmis/hello-cammis/test_coverage)

## Sonarcloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=alert_status)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=code_smells)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=sqale_index)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=bugs)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=coverage)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=security_rating)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ca-mmis_hello-cammis&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ca-mmis_hello-cammis)

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
