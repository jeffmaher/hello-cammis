'use strict';

const axios = require('axios');

const helloSolo = (name, callback) => {
  callback(`Hello ${name}!`);
};

module.exports = {
  helloSolo: helloSolo
};
