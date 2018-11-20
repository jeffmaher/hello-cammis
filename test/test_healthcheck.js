'use strict';

const healthcheck = require('../lib/healthcheck');
const assert = require('assert');

describe('Test healthcheck functionality', function() {
  describe('test healthcheck',function() {
    it('returns healthy', function(done) {
        let output = healthcheck();
        let expected = {message: 'healthy'};
        assert.deepEqual(expected, output);
        done();
    });
  });
});
