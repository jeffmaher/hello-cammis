'use strict';

const axios = require('axios');

// Setup URL based on configuration
var soloMode = false; // Temp setup for running this without hello-cammis-data
const helloCammisDataHost = process.env.HELLO_CAMMIS_DATA_HOST;
const helloCammisDataPort = process.env.HELLO_CAMMIS_DATA_PORT;
if(helloCammisDataHost === undefined || helloCammisDataPort === undefined) {
  // console.log("[ERROR] HELLO_CAMMIS_DATA_HOST or HELLO_CAMMIS_DATA_PORT env variables not defined");
  // process.exit() 
  soloMode = true;
};
const helloCammisBaseUrl = `http://${helloCammisDataHost}:${helloCammisDataPort}`;



// Get a greeting for a name, gotten from hello-cammis-data
const hello = (name, callback, errorCallback) => {
  if(soloMode) {
    callback(`Hello ${name}!`);
  }
  else {
    let url = `${helloCammisBaseUrl}/hello/${name}`;
    console.log(`hello: Sending request to '${url}'`);
  
    axios.get(url)
      .then( response => {
        let greeting = response.data["hello"];
        console.log(`hello: Got back greeting: '${greeting}`);
        callback(greeting);
      })
      .catch( response => {
        console.log("hello: An error happened");
        errorCallback();
      });
  }
  
};

module.exports = hello;
