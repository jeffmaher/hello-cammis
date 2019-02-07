'use strict';

const express = require('express');
const app = express();
const hello = require('./lib/hello');
const healthcheck = require('./lib/healthcheck');
const PORT = process.env.PORT || 3000;
const axios = require('axios');


app.get(['/', '/hello'], (req,res) => {
  hello('CAMMIS', greeting => {
    // Success
    res.send({"message:": greeting});
    res.status(200);
  }, () => {
    // Failure
    res.send("Error processing request");
    res.status(500);
  });
});

app.get('/health', (req,res) => {
  // TODO Add a ping to hello-cammis-data
  // TODO split into alive and readiness check for K8S
  res.send(healthcheck());
  res.status(200)
});


app.listen(PORT, () => console.log(`Hello CAMMIS listening on port ${PORT}!`));
