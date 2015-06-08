
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_X0kAmc, __expression_XEzqkV, __block_AQxke2;
    var store = require('/Users/limefactory/Desktop/WebProjects/molecular-biology/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_X0kAmc = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/plasmidSequence.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_XEzqkV = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/plasmidSequence.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_AQxke2 = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/plasmidSequence.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_dxv7sg = function(id, obj) {
        // console.log('__intro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        (typeof obj === 'object' || typeof obj === 'function') &&
            Object.defineProperty && Object.defineProperty(obj, '__instrumented_miss', {enumerable: false, writable: true});
        obj.__instrumented_miss = obj.__instrumented_miss || [];
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (obj.length === 0) {
                // console.log('interim miss: ', id);
                obj.__instrumented_miss[id] = true;
            } else {
                obj.__instrumented_miss[id] = false;
            }
        }
        return obj;
    };
    function isProbablyChainable(obj, id) {
        return obj &&
            obj.__instrumented_miss[id] !== undefined &&
            'number' === typeof obj.length;
    }
    __extro_rS5Hw4 = function(id, obj) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/plasmidSequence.js');
        // console.log('__extro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (isProbablyChainable(obj, id) && obj.length === 0 && obj.__instrumented_miss[id]) {
                // if the call was not a "constructor" - i.e. it did not add things to the chainable
                // and it did not return anything from the chainable, it is a miss
                // console.log('miss: ', id);
            } else {
                fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
            }
            obj.__instrumented_miss[id] = undefined;
        } else {
            fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
        }
        return obj;
    };
};
////////////////////////

// Instrumented Code
{
    __statement_X0kAmc(0);
    module.exports = function () {
        __block_AQxke2(0);
        {
            __statement_X0kAmc(1);
            this.getSequence = function () {
                __block_AQxke2(1);
                return __expression_XEzqkV(2), (__expression_XEzqkV(3), (__expression_XEzqkV(4), (__expression_XEzqkV(5), (__expression_XEzqkV(6), (__expression_XEzqkV(7), (__expression_XEzqkV(8), (__expression_XEzqkV(9), (__expression_XEzqkV(10), (__expression_XEzqkV(11), (__expression_XEzqkV(12), (__expression_XEzqkV(13), (__expression_XEzqkV(14), (__expression_XEzqkV(15), (__expression_XEzqkV(16), (__expression_XEzqkV(17), (__expression_XEzqkV(18), (__expression_XEzqkV(19), (__expression_XEzqkV(20), (__expression_XEzqkV(21), (__expression_XEzqkV(22), (__expression_XEzqkV(23), (__expression_XEzqkV(24), (__expression_XEzqkV(25), (__expression_XEzqkV(26), (__expression_XEzqkV(27), (__expression_XEzqkV(28), (__expression_XEzqkV(29), (__expression_XEzqkV(30), (__expression_XEzqkV(31), (__expression_XEzqkV(32), (__expression_XEzqkV(33), (__expression_XEzqkV(34), (__expression_XEzqkV(35), (__expression_XEzqkV(36), (__expression_XEzqkV(37), (__expression_XEzqkV(38), (__expression_XEzqkV(39), (__expression_XEzqkV(40), (__expression_XEzqkV(41), (__expression_XEzqkV(42), (__expression_XEzqkV(43), (__expression_XEzqkV(44), (__expression_XEzqkV(45), (__expression_XEzqkV(46), (__expression_XEzqkV(47), (__expression_XEzqkV(48), (__expression_XEzqkV(49), (__expression_XEzqkV(50), (__expression_XEzqkV(51), (__expression_XEzqkV(52), (__expression_XEzqkV(53), (__expression_XEzqkV(54), (__expression_XEzqkV(55), (__expression_XEzqkV(56), (__expression_XEzqkV(57), (__expression_XEzqkV(58), (__expression_XEzqkV(59), (__expression_XEzqkV(60), (__expression_XEzqkV(61), (__expression_XEzqkV(62), (__expression_XEzqkV(63), (__expression_XEzqkV(64), (__expression_XEzqkV(65), (__expression_XEzqkV(66), (__expression_XEzqkV(67), (__expression_XEzqkV(68), (__expression_XEzqkV(69), (__expression_XEzqkV(70), (__expression_XEzqkV(71), (__expression_XEzqkV(72), (__expression_XEzqkV(73), (__expression_XEzqkV(74), (__expression_XEzqkV(75), (__expression_XEzqkV(76), (__expression_XEzqkV(77), (__expression_XEzqkV(78), (__expression_XEzqkV(79), (__expression_XEzqkV(80), (__expression_XEzqkV(81), (__expression_XEzqkV(82), (__expression_XEzqkV(83), (__expression_XEzqkV(84), (__expression_XEzqkV(85), (__expression_XEzqkV(86), (__expression_XEzqkV(87), (__expression_XEzqkV(88), (__expression_XEzqkV(89), (__expression_XEzqkV(90), (__expression_XEzqkV(91), (__expression_XEzqkV(92), (__expression_XEzqkV(93), (__expression_XEzqkV(94), (__expression_XEzqkV(95), 'GCGATCGCGGCTCCCGACATCTTGGACCATTAGCTCCACAGGTATCTTCTTCCCTCTAGTGGTCATAACAGCAGCTTCAG' + 'CTACCTCTCAATTTCAATCGTTGCGTTACACACACAAAAAACCAACACACATCCATCTTCGATGGATAGCGATTTTATTA') + 'TCTAACTGCTGATCGAGTGTAGCCAGATCTCAATGCATACTTTGTACGTTCAAAATACAATGCAGTAGATATATTTATGC') + 'ATATTACATATAATACATATCACATAGGAAGCAACAGGCGCGTTGGACTTTTAATTTTCGAGGACCGCGAATCCTTACAT') + 'CACACCCAATCCCCCACAAGTGATCCCCCACACACCATAGCTTCAAAATGTTTCTACTCCTTTTTTACTCTTCCAGATTT') + 'TCTCGGACTCCGCGCATCGCCGTACCACTTCAAAACACCCAAGCACAGCATACTAAATTTCCCCTCTTTCTTCCTCTAGG') + 'GTGTCGTTAATTACCCGTACTAAAGGTTTGGAAAAGAAAAAAGAGACCGCCTCGTTTCTTTTTCTTCGTCGAAAAAGGCA') + 'ATAAAAATTTTTATCACGTTTCTTTTTCTTGAAAATTTTTTTTTTTGATTTTTTTCTCTTTCGATGACCTCCCATTGATA') + 'TTTAAGTTAATAAACGGTCTTCAATTTCTCAAGTTTCAGTTTCATTTTTCTTGTTCTATTACAACTTTTTTTACTTCTTG') + 'CTCATTAGAAAGAAAGCATAGCAATCTAATCTAAGTTTTAATTACAAAAGATCTTTGTCGATCCTACCATCCACTCGACA') + 'CACCCGCCAGCGGCCGCAGGAGGTACAAAAAATGTCTCATCACCATCACCATCACACGGCACTGACTGAAGGCGCAAAAC') + 'TGTTCGAGAAAGAAATCCCATATATCACTGAGCTGGAAGGTGACGTTGAAGGTATGAAGTTTATCATCAAGGGTGAAGGC') + 'ACCGGTGACGCGAGCGTCGGTAAAGTGGATGCTCAGTTCATTTGTACCACGGGCGACGTTCCGGTTCCGTGGAGCACGCT') + 'GGTCACCACGCTGACGTATGGTGCTCAGTGCTTTGCCAAGTATCCGCGCCACATTGCGGATTTCTTCAAAAGCTGCATGC') + 'CGGAAGGTTACGTCCAAGAGCGCACCATCACCTTTGAGGGTGATGGCGTGTTCAAGACCCGTGCGGAAGTCACCTTTGAA') + 'AATGGCAGCGTGTACAACCGTGTAAAACTGAACGGCCAGGGTTTCAAGAAGGACGGCCACGTGCTGGGCAAAAATCTGGA') + 'GTTTAACTTTACCCCTCATTGTTTGTACATTTGGGGTGACCAAGCGAATCATGGCCTGAAGAGCGCGTTCAAAATCATGC') + 'ATGAGATCACCGGCTCCAAAGAGGATTTCATTGTTGCCGATCACACCCAAATGAATACCCCGATTGGTGGTGGTCCGGTG') + 'CACGTGCCGGAGTACCACCACATTACGTATCATGTTACCCTGTCTAAAGACGTCACCGATCACCGTGACCATTTGAACAT') + 'TGTTGAGGTGATCAAGGCAGTTGACCTGGAGACGTACCGGCTGGTGCCCAGAGGCTCTATGAATTCGAACTCCTCCTGCA') + 'CGGTACCGCGATATCTACCTCGAGGTTTCTAGAAGTTGTCTCCTCCTGCACTGACTGACTGATACAATCGATTTCTGGAT') + 'CCGCAGGCCTCTGCTAGCTTGACTGACTGAGATACAGCGTACCTTCAGCTCATCATGTAATTAGTTATGTCACGCTTACA') + 'TTCACGCCCTCCCCCCACATCCGCTCTAACCGAAAAGGAAGGAGTTAGACAACCTGAAGTCTAGGTCCCTATTTATTTTT') + 'TTATAGTTATGTTAGTATTAAGAACGTTATTTATATTTCAAATTTTTCTTTTTTTTCTGTACAGACGCGTGTACGCATGT') + 'AACATTATACTGAAAACCTTGCTTGAGAAGGTTTTGGGACGCTCGAAGGCTTTAATTTGCGGCCAAAGCAAGTAAAACCT') + 'CTACAAATGTGGTATTGGCCCATCTCTATCGGTATCGTAGCATAACCCCTTGGGGCCTCTAAACGGGTCTTGAGGGGTTT') + 'TTTGTGCCCCTCGGGCCGGATTGCTATCTACCGGCATTGGCGCAGAAAAAAATGCCTGATGCGACGCTGCGCGTCTTATA') + 'CTCCCACATATGCCAGATTCAGCAACGGATACGGCTTCCCCAACTTGCCCACTTCCATACGTGTCCTCCTTACCAGAAAT') + 'TTATCCTTAAGGTCGTCAGCTATCCTGCAGGTCAATTCATCATTTTTTTTTTATTCTTTTTTTTGATTTCGGTTTCTTTG') + 'AAATTTTTTTGATTCGGTAATCTCCGAACAGAAGGAAGAACGAAGGAAGGAGCACAGACTTAGATTGGTATATATACGCA') + 'TATGTAGTGTTGAAGAAACATGAAATTGCCCAGTATTCTTAACCCAACTGTACAGAACAAAAACCTGCAGAAAACGAAGA') + 'TAAATCATGTCGAAAGCTACATATAAGGAACGTGCTGCTACTCATCCTAGTCCTGTTGCTGCCAAGCTATTTAATATCAT') + 'GCACGAAAAGCAAACAAACTTGTGTGCTTCATTGGATGTTCGTACCACCAAGGAATTACTGGAGTTAGTTGAAGCATTAG') + 'GTCCCAAAATTTGTTTACTAAAAACACATGTGGATATTTTGACTGATTTTTCTATGGAGGGCACAGTTAAGCCGCTAAAG') + 'GCATTATCCGCCAAGTACAATTTTTTACTCTTCGAAGACAGAAAATTTGCTGACATTGGTAATACAGTCAAATTGCAGTA') + 'CTCTGCGGGTGTATACAGAATAGCAGAATGGGCAGACATTACGAATGCACACGGTGTGGTGGGCCCAGGTATTGTTAGCG') + 'GTTTGAAGCAGGCGGCAGAAGAAGTAACAAAGGAACCTAGAGGTCTTTTGATGTTAGCAGAATTGTCATGCAAGGGCTCC') + 'CTATCTACTGGAGAATATACTAAGGGTACTGTTGACATTGCGAAGAGCGACAAAGATTTTGTTATCGGCTTTATTGCTCA') + 'AAGAGACATGGGTGGAAGAGATGAAGGTTACGATTGGTTGATTATGACACCCGGTGTGGGTTTAGATGACAAGGGAGACG') + 'CATTGGGTCAACAGTATAGAACCGTGGATGATGTGGTCTCTACAGGATCTGACATTATTATTGTTGGAAGAGGACTATTT') + 'GCAAAGGGAAGGGATGCTAAGGTAGAGGGTGAACGTTACAGAAAAGCAGGCTGGGAAGCATATTTGAGAAGATGCGGCCA') + 'GCAAAACTAAAAAACTGTATTATAAGTAAATGCATGTATACTAAACTCACAAATTAGAGCTTCAATTTAATTATATCAGT') + 'TATTACCCCCTGCAGGCGATCTCTCGATTTCGATCAAGACATTCCTTTAATGGTCTTTTCTGGACACCACTAGGGGTCAG') + 'AAGTAGTTCATCAAACTTTCTTCCCTCCCTAATCTCATTGGTTACCTTGGGCTATCGAAACTTAATTAACCAGTCAAGTC') + 'AGCTACTTGGCGAGATCGACTTGTCTGGGTTTCGACTACGCTCAGAATTGCGTCAGTCAAGTTCGATCTGGTCCTTGCTA') + 'TTGCACCCGTTCTCCGATTACGAGTTTCATTTAAATCATGTGAGCAAAAGGCCAGCAAAAGGCCAGGAACCGTAAAAAGG') + 'CCGCGTTGCTGGCGTTTTTCCATAGGCTCCGCCCCCCTGACGAGCATCACAAAAATCGACGCTCAAGTCAGAGGTGGCGA') + 'AACCCGACAGGACTATAAAGATACCAGGCGTTTCCCCCTGGAAGCTCCCTCGTGCGCTCTCCTGTTCCGACCCTGCCGCT') + 'TACCGGATACCTGTCCGCCTTTCTCCCTTCGGGAAGCGTGGCGCTTTCTCATAGCTCACGCTGTAGGTATCTCAGTTCGG') + 'TGTAGGTCGTTCGCTCCAAGCTGGGCTGTGTGCACGAACCCCCCGTTCAGCCCGACCGCTGCGCCTTATCCGGTAACTAT') + 'CGTCTTGAGTCCAACCCGGTAAGACACGACTTATCGCCACTGGCAGCAGCCACTGGTAACAGGATTAGCAGAGCGAGGTA') + 'TGTAGGCGGTGCTACAGAGTTCTTGAAGTGGTGGCCTAACTACGGCTACACTAGAAGAACAGTATTTGGTATCTGCGCTC') + 'TGCTGAAGCCAGTTACCTTCGGAAAAAGAGTTGGTAGCTCTTGATCCGGCAAACAAACCACCGCTGGTAGCGGTGGTTTT') + 'TTTGTTTGCAAGCAGCAGATTACGCGCAGAAAAAAAGGATCTCAAGAAGATCCTTTGATCTTTTCTACGGGGTCTGACGC') + 'TCAGTGGAACGAAAACTCACGTTAAGGGATTTTGGTCATGAGATTATCAAAAAGGATCTTCACCTAGATCCTTTTAAATT') + 'AAAAATGAAGTTTTAAATCAATCTAAAGTATATATGAGTAAACTTGGTCTGACAGTTACCAATGCTTAATCAGTGAGGCA') + 'CCTATCTCAGCGATCTGTCTATTTCGTTCATCCATAGTTGCATTTAAATTTCCGAACTCTCCAAGGCCCTCGTCGGAAAA') + 'TCTTCAAACCTTTCGTCCGATCCATCTTGCAGGCTACCTCTCGAACGAACTATCGCAAGTCTCTTGGCCGGCCTTGCGCC') + 'TTGGCTATTGCTTGGCAGCGCCTATCGCCAGGTATTACTCCAATCCCGAATATCCGAGATCGGGATCACCCGAGAGAAGT') + 'TCAACCTACATCCTCAATCCCGATCTATCCGAGATCCGAGGAATATCGAAATCGGGGCGCGCCAACGAAGCATCTGTGCT') + 'TCATTTTGTAGAACAAAAATGCAACGCGAGAGCGCTAATTTTTCAAACAAAGAATCTGAGCTGCATTTTTACAGAACAGA') + 'AATGCAACGCGAAAGCGCTATTTTACCAACGAAGAATCTGTGCTTCATTTTTGTAAAACAAAAATGCAACGCGAGAGCGC') + 'TAATTTTTCAAACAAAGAATCTGAGCTGCATTTTTACAGAACAGAAATGCAACGCGAGAGCGCTATTTTACCAACAAAGA') + 'ATCTATACTTCTTTTTTGTTCTACAAAAATGCATCCCGAGAGCGCTATTTTTCTAACAAAGCATCTTAGATTACTTTTTT') + 'TCTCCTTTGTGCGCTCTATAATGCAGTCTCTTGATAACTTTTTGCACTGTAGGTCCGTTAAGGTTAGAAGAAGGCTACTT') + 'TGGTGTCTATTTTCTCTTCCATAAAAAAAGCCTGACTCCACTTCCCGCGTTTACTGATTACTAGCGAAGCTGCGGGTGCA') + 'TTTTTTCAAGATAAAGGCATCCCCGATTATATTCTATACCGATGTGGATTGCGCATACTTTGTGAACAGAAAGTGATAGC') + 'GTTGATGATTCTTCATTGGTCAGAAAATTATGAACGGTTTCTTCTATTTTGTCTCTATATACTACGTATAGGAAATGTTT') + 'ACATTTTCGTATTGTTTTCGATTCACTCTATGAATAGTTCTTACTACAATTTTTTTGTCTAAAGAGTAATACTAGAGATA') + 'AACATAAAAAATGTAGAGGTCGAGTTTAGATGCAAGTTCAAGGAGCGAAAGGTGGATGGGTAGGTTATATAGGGATATAG') + 'CACAGAGATATATAGCAAAGAGATACTTTTGAGCAATGTTTGTGGAAGCGGTATTCGCAATATTTTAGTAGCTCGTTACA') + 'GTCCGGTGCGTTTTTGGTTTTTTGAAAGTGCGTCTTCAGAGCGCTTTTGGTTTTCAAAAGCGCTCTGAAGTTCCTATACT') + 'TCCTAGAGAATAGGAACTTCGGAATAGGAACTTCAAAGCGTTTCCGAAAACGAGCGCTTCCGAAAATGCAACGCGAGCTG') + 'CGCACATACAGCTCACTGTTCACGTCGCACCTATATCTGCGTGTTGCCTGTATATATATATACATGAGAAGAACGGCATA') + 'GTGCGTGTTTATGCTTAAATGCGTACTTATATGCGTCTATTTATGTAGGATGAAAGGTAGTCTAGTACCTCCTGTGATAT') + 'TATCCCATTCCATGCGGGGTATCGTATGCTTCCTTCAGCACTACCCTTTAGCTGTTCTATATGCTGCCACTCCTCAATTG') + 'GATTAGTCTCATCCTTCAATGCTATCATTTCCTTTGATATTGGATCATACGGCGCGCCTGGTGTACCGAGAACGATCCTC') + 'TCAGTGCGAGTCTCGACGATCCATATCGTTGCTTGGCAGTCAGCCAGTCGGAATCCAGCTTGGGACCCAGGAAGTCCAAT') + 'CGTCAGATATTGTACTCAAGCCTGGTCACGGCAGCGTACCGATCTGTTTAAACCTAGATATTGATAGTCTGATCGGTCAA') + 'CGTATAATCGAGTCCTAGCTTTTGCAAACATCTATCAAGAGACAGGATCAGCAGGAGGCTTTCGCATGATTGAACAAGAT') + 'GGATTGCACGCAGGTTCTCCGGCGGCTTGGGTGGAGAGGCTATTCGGCTATGACTGGGCACAACAGACAATCGGCTGCTC') + 'TGATGCCGCCGTGTTCCGGCTGTCAGCGCAGGGGCGTCCGGTTCTTTTTGTCAAGACCGACCTGTCCGGTGCCCTGAATG') + 'AACTGCAAGACGAGGCAGCGCGGCTATCGTGGCTGGCGACGACGGGCGTTCCTTGCGCGGCTGTGCTCGACGTTGTCACT') + 'GAAGCGGGAAGGGACTGGCTGCTATTGGGCGAAGTGCCGGGGCAGGATCTCCTGTCATCTCACCTTGCTCCTGCCGAGAA') + 'AGTATCCATCATGGCTGATGCAATGCGGCGGCTGCATACGCTTGATCCGGCTACCTGCCCATTCGACCACCAAGCGAAAC') + 'ATCGCATCGAGCGAGCACGTACTCGGATGGAAGCCGGTCTTGTCGATCAGGATGATCTGGACGAAGAGCATCAGGGGCTC') + 'GCGCCAGCCGAACTGTTCGCCAGGCTCAAGGCGTCTATGCCCGACGGCGAGGATCTCGTCGTGACCCACGGCGATGCCTG') + 'CTTGCCGAATATCATGGTGGAAAATGGCCGCTTTTCTGGATTCATCGACTGTGGCCGTCTGGGTGTGGCGGACCGCTATC') + 'AGGACATAGCGTTGGCTACCCGTGATATTGCTGAAGAGCTTGGCGGCGAATGGGCTGACCGCTTCCTTGTGCTTTACGGT') + 'ATCGCCGCGCCCGATTCGCAGCGCATCGCCTTCTATCGCCTTCTTGACGAGTTCTTCTGACCGATTCTAGGTGCATTGGC') + 'GCAGAAAAAAATGCCTGATGCGACGCTGCGCGTCTTATACTCCCACATATGCCAGATTCAGCAACGGATACGGCTTCCCC') + 'AACTTGCCCACTTCCATACGTGTCCTCCTTACCAGAAATTTATCCTTAAGGTCGTTTAAACTCGACTCTGGCTCTATCGA') + 'ATCTCCGTCGTTTCGAGCTTACGCGAACAGCCGTGGCGCTCATTTGCTCGTCGGGCATCGAATCTCGTCAGCTATCGTCA') + 'GCTTACCTTTTTGGCA');
            };
        }
        return __expression_XEzqkV(96), this;
    };
}