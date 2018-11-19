const hello = require('../lib/hello');
const assert = require('assert');

describe('Test hello functionality', function() {
  describe('test hello cammis',function() {
    it('returns hello cammis', function(done) {
        let output = hello('CAMMIS');
        let desired = {message: "Hello CAMMIS"};
        assert.deepEqual(desired, output);
        done();
    });

    it('returns emtpy hello in message', function(done) {
        let output = hello('CAMMIS');
        let desired = {message: "Hello "};
        assert.deepEqual(desired, output);
        done();
    });
  });
});
