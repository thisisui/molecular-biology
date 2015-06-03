var enzymes = require('./../apps/cut/config/enzymes.js')();

exports.getSequence = function(test){
    test.expect(1);
    test.equal(enzymes.getSequence('ABC/BCA'), 'ABCBCA');
    test.done();
};