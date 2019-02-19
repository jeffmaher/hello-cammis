'use strict';

const check_solo = require('../config/check_solo');
const assert = require('assert');

describe('Test check_solo function', function() {
  describe('true if url provided',function() {
    it('', (done) => {
        let output = check_solo("http://test_url");
        let expected = {message: 'healthy'};
        assert.equal(false, output);
        done();
    });
  });
  describe('false if url not provided',function() {
    it('', (done) => {
        let output = check_solo(false);
        assert.equal(true, output);
        done();
    });
  });
});
