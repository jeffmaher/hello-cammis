# hello-cammis

Helm Chart for deploying [hello-cammis](https://github.com/ca-mmis/hello-cammis) to a Kubernetes cluster.

## Setup Instructions

### Dependencies

- Kubernetes Cluster
- Tiller installed into your Kubernetes Cluster
- Helm configured to Tiller in your Kubernetes Cluster

### Steps

1. Navigate into the base of this directory via a terminal
1. Add the `cammis` Helm repo: `helm repo add cammis https://<GitHub personal access token>:@raw.githubusercontent.com/ca-mmis/cammis-helm/master/`
1. Install Helm dependencies: `helm dep up .`
1. Deploy (Kubernetes Deployment and Service): `helm install . -n hello-cammis`
1. Verify:
    - `helm ls`
    - `kubectl get all`
    - Go to: `http://<cluster url>:3000` (get from `kubectl get svc`)
1. Delete: `helm delete --purge hello-cammis`

## hello-cammis Local Development

This chart can be used to enable local development of hello-cammis by install all the dependencies needed. To get setup for local development, do the following:

1. Install Docker for Desktop
1. Enable Kubernetes
1. Install Helm
1. Add the `cammis` Helm repo: `helm repo add cammis https://<GitHub personal access token>:@raw.githubusercontent.com/ca-mmis/cammis-helm/master/`
1. Move into this directory
1. Install Helm dependencies: `helm dep up .`
1. Install all the dependencies: `helm install . -n hello-cammis --set tags.localDev=true --set global.helloCammis.servicePort=<port you aren't going to use>`
1. For your local installation of the hello-cammis code, set the following for environment variables:
    - `HELLO_CAMMIS_DATA_HOST`: `localhost`
    - `HELLO_CAMMIS_DATA_PORT`: `8000`

