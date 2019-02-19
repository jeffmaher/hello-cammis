'use strict';

const v1healthcheck = require('../lib/routes/v1/healthcheck/healthcheck');
const assert = require('assert');

describe('Test healthcheck functionality', function() {
  describe('test healthcheck v1',function() {
    it('returns healthy', function(done) {
        let output = v1healthcheck();
        let expected = {message: 'healthy'};
        assert.deepEqual(expected, output);
        done();
    });
  });
});
