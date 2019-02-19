'use strict';

const axios = require('axios');

const helloSolo = (name, callback) => {
  callback(`Hello, welcome ${name}!`);
};

const helloApi = async (name, config, callback) => {
  let url = `${config.helloCammisDataUrl}/hello/${name}`;
  console.log(url)
  console.log(`hello: Sending request to '${url}'`);

   await axios
    .get(url)
    .then( response => {
      let greeting = response.data["hello"];
      console.log(`hello: Got back greeting: '${greeting}`);
      callback(greeting);
    })
    .catch( error => {
      console.log("hello: An error happened",error);
    });
};


module.exports = {
  helloSolo: helloSolo,
  helloApi: helloApi
};
