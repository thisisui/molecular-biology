var assert = require('assert');
var plasmidSequence = require('../../../apps/cut/config/plasmidSequence.js')();

describe('Plasmid sequence', function () {
    describe('getSequence method', function () {
        it('should return string', function (done) {
            assert.equal(typeof plasmidSequence.getSequence(), 'string');
            done();
        });
    });
});