var assert = require('assert');
var enzymes = require('../../../apps/cut/config/enzymes.js')();

describe('Enzymes', function () {
    describe('get sequence method', function () {
        it('should get sequence', function (done) {
            assert.equal(enzymes.getSequence('ABC/BCA'), 'ABCBCA');
            assert.equal(enzymes.getSequence('ABC/NNA'), 'ABCNNA');
            done();
        });
    });
});