var assert = require('assert');
var recognitor = require('../../../apps/cut/modules/recognitor.js')();

describe('Recognitor', function () {
    describe('recognize sequence method', function () {
        it('should recognize sequence', function (done) {
            assert.equal(recognitor.recognizeSequence('ABC', 'BC'), 1);
            done();
        });

        it('should return zero', function (done) {
            assert.equal(recognitor.recognizeSequence('AAA', 'B'), 0);
            done();
        });
    });
});