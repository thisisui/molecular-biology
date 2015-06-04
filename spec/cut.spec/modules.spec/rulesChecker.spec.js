var rulesChecker = require('../../../apps/cut/modules/rulesChecker.js')();

exports.prepareSimple = function (test) {
    test.expect(1);
    test.deepEqual(rulesChecker.prepare('AGCCGA'), ['AGCCGA']);
    test.done();
};

exports.prepareWithOneSpecificLetter = function (test) {
    test.expect(2);
    test.deepEqual(rulesChecker.prepare('AGCCGB'), ['AGCCGC', 'AGCCGG', 'AGCCGT']);
    test.equal(rulesChecker.prepare('AGCCGB').length, 3);
    test.done();
};

exports.prepareWithManySpecificLetters = function (test) {
    test.expect(5);
    test.deepEqual(rulesChecker.prepare('AGCCRR'), ['AGCCAA', 'AGCCAG', 'AGCCGA', 'AGCCGG']);
    test.equal(rulesChecker.prepare('AGCCRR').length, 4);
    test.equal(rulesChecker.prepare('RRRR').length, 16);
    test.equal(rulesChecker.prepare('NNNN').length, 256);
    test.equal(rulesChecker.prepare('ABDA').length, 18);
    test.done();
};