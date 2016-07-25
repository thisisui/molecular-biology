var assert = require('assert');
var recognitor = require('./../../../cut/modules/recognitor.js')();

describe('Recognitor', function () {
    describe('recognize sequence method', function () {
        it('should recognize sequence', function (done) {
            assert.equal(recognitor.recognizeSequence('ABC', 'BC').length, 1);
            done();
        });

        it('should return zero', function (done) {
            assert.equal(recognitor.recognizeSequence('AAA', 'B').length, 0);
            done();
        });

        it('should recognize cut on ends', function (done) {
            assert.equal(recognitor.recognizeSequence('AAATTT', 'TTAA').length, 1);
            done();
        });

        it('should return index of cut', function (done) {
            assert.equal(recognitor.recognizeSequence('AAATTT', 'ATT')[0].index, 2);
            assert.equal(recognitor.recognizeSequence('ATAT', 'AT')[0].index, 0);
            assert.equal(recognitor.recognizeSequence('ATAT', 'AT')[1].index, 2);
            done();
        });
    });
});