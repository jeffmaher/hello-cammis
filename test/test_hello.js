'use strict';

const hello = require('../lib/hello');
const assert = require('assert');

describe('Test hello functionality', function() {
  describe('test hello cammis',function() {
    it('returns hello cammis', function(done) {
        let output = hello('CAMMIS');
        let expected = {message: 'Hello CAMMIS'};
        assert.deepEqual(expected, output);
        done();
    });
  });
});
