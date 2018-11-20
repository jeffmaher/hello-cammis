FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD [ "npm", "start" ]
