var enzymes = require('../../../apps/cut/config/enzymes.js')();

exports.getSequence = function (test) {
    test.expect(2);
    test.equal(enzymes.getSequence('ABC/BCA'), 'ABCBCA');
    test.equal(enzymes.getSequence('ABC/NNA'), 'ABCNNA');
    test.done();
};