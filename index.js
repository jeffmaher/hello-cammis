'use strict';

const express = require('express');
const app = express();
const hello = require('./lib/hello');
const healthcheck = require('./lib/healthcheck');
const PORT = process.env.PORT || 3000;


app.get('/', (req,res) => {
  res.send(hello('CAMMIS'));
  res.status(200)
});

app.get('/hello', (req,res) => {
  res.send(hello('CAMMIS'));
  res.status(200)
});

app.get('/health', (req,res) => {
  res.send(healthcheck());
  res.status(200)
});


app.listen(PORT, () => console.log(`Hello CAMMIS listening on port ${PORT}!`));
