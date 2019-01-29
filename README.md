[![Maintainability](https://api.codeclimate.com/v1/badges/81eb79567ccf864d53cc/maintainability)](https://codeclimate.com/github/ca-mmis/hello-cammis/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/81eb79567ccf864d53cc/test_coverage)](https://codeclimate.com/github/ca-mmis/hello-cammis/test_coverage)

# hello-cammis
A small nodejs api for hello world, used for testing and POC with PATS IAC


# Building Docker Image Locally
docker build -t hello_cammis .

# Running Docker Image Locally
docker run -it --rm  --name {image_name} -p 3000:3000 hello_cammis

##Optional environmental flags:
-e PORT = #### (desired port number, will need to correspond to -p above)
