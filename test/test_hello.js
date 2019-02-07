'use strict';

// Set some environment variables
process.env.HELLO_CAMMIS_DATA_HOST = "localhost";
process.env.HELLO_CAMMIS_DATA_PORT = "8000";

// Imports
const hello = require('../lib/hello');
const assert = require('assert');
const http = require("http");
const express = require('express');

// Run a mock hello-cammis-data
const mockHelloCammisData = express();
const httpServer = http.createServer(mockHelloCammisData);
mockHelloCammisData.get('/hello/*', (req, res) => res.send({"hello":"Hey there test!"}));

describe('Test hello functionality', function() {
  beforeEach( () => {
    httpServer.listen(process.env.HELLO_CAMMIS_DATA_PORT);
  });
  afterEach( () => {
    httpServer.close();
  });

  describe('test hello cammis',function() {
    it('returns hello cammis', function(done) {
      let expected = "Hey there test!";
      hello('anything', greeting => {
        assert.deepEqual(expected, greeting);
        done();
      }, () => assert(false));
    });
  });
});
