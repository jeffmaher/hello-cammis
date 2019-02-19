'use strict';
// Imports
const assert = require('assert');
const express = require('express');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const v1hello = require('../lib/routes/v1/hello/hello');
const v2hello = require('../lib/routes/v2/hello/hello');
const mock = new MockAdapter(axios);

describe('Test hello functionality', function() {
  describe('v1 hello cammis',() => {

    it('soloMode - it returns hello :name', (done) => {
      let expected = "Hello test!";
      v1hello.helloSolo('test', greeting => {
        assert.deepEqual(expected, greeting);
        done();
      });
    });
  });

  describe('v2 hello cammis', () => {

    beforeEach(() => {
      mock.onGet('/hello/test').reply(200, {
          hello: "Hey there test!"
      });
    });

    it('solo_mode - it returns hello :name', (done) => {
      let expected = "Hello, welcome test!";
      v2hello.helloSolo('test', greeting => {
        assert.deepEqual(expected, greeting);
        done();
      });
    });
    it('returns Hey there test!', (done) => {
      let config = {
        helloCammisDataUrl: ""
      };
      let expected = "Hey there test!";
        v2hello.helloApi('test', config, greeting => {
          assert.deepEqual(expected, greeting);
        });
      done();
    });
  });
});
