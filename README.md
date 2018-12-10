# hello-cammis
A small nodejs api for hello world, used for testing and POC with PATS IAC


# Building Docker Image Locally
docker build -t hello_cammis .

# Running Docker Image Locally
docker run -it --rm  --name {image_name} -p 3000:3000 hello_cammis

##Optional environmental flags:
-e PORT = #### (desired port number, will need to correspond to -p above)


Test
