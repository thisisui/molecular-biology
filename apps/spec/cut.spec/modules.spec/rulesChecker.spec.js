var assert = require('assert');
var rulesChecker = require('./../../../cut/modules/rulesChecker.js')();

describe('Rules Checker', function () {
    describe('prepare method', function () {
        it('should prepare simple sequence', function (done) {
            assert.deepEqual(rulesChecker.prepare('AGCCGA'), ['AGCCGA']);
            done();
        });

        it('should prepare sequence with one specific letter', function (done) {
            assert.deepEqual(rulesChecker.prepare('AGCCGB'), ['AGCCGC', 'AGCCGG', 'AGCCGT']);
            assert.equal(rulesChecker.prepare('AGCCGB').length, 3);
            done();
        });

        xit('should prepare sequence with many specific letters', function (done) {
            assert.deepEqual(rulesChecker.prepare('AGCCRR'), ['AGCCAA', 'AGCCAG', 'AGCCGA', 'AGCCGG']);
            assert.equal(rulesChecker.prepare('AGCCRR').length, 4);
            assert.equal(rulesChecker.prepare('RRRR').length, 16);
            assert.equal(rulesChecker.prepare('NNNN').length, 256);
            done();
        })
    });
});