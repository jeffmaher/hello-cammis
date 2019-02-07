FROM node:10.13-alpine
WORKDIR /hello-cammis
COPY . .
RUN npm install
CMD [ "npm", "start" ]
