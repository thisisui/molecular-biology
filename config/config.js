module.exports = function () {

    return {
        nucleobase: {
            cache: ['A', 'G', 'T', 'C', 'U'],
            A: {
                name: 'adenine',
                complementary: 'T',
                complementaryAlt: 'U'
            },
            G: {
                name: 'guanine',
                complementary: 'C'
            },
            T: {
                name: 'thymine',
                complementary: 'A'
            },
            C: {
                name: 'cytosine',
                complementary: 'G'
            },
            U: {
                name: 'uracil',
                complementary: 'G'
            }
        },
        triplets: {
            UUU: 'F',
            UUC: 'F',

            UUA: 'L',
            UUG: 'L',
            CUU: 'L',
            CUC: 'L',
            CUA: 'L',
            CUG: 'L',

            AUU: 'I',
            AUC: 'I',
            AUA: 'I',

            AUG: 'M',

            GUU: 'V',
            GUC: 'V',
            GUA: 'V',
            GUG: 'V',

            UCU: 'S',
            UCC: 'S',
            UCA: 'S',
            UCG: 'S',

            CCU: 'P',
            CCC: 'P',
            CCA: 'P',
            CCG: 'P',

            ACU: 'T',
            ACC: 'T',
            ACA: 'T',
            ACG: 'T',

            GCU: 'A',
            GCC: 'A',
            GCA: 'A',
            GCG: 'A',

            UAU: 'Y',
            UAC: 'Y',

            UAA: 'STOP',
            UAG: 'STOP',

            CAU: 'H',
            CAC: 'H',

            CAA: 'Q',
            CAG: 'Q',

            AAU: 'N',
            AAC: 'N',

            AAA: 'K',
            AAG: 'K',

            GAU: 'D',
            GAC: 'D',

            GAA: 'E',
            GAG: 'E',

            UGU: 'C',
            UGC: 'C',

            UGA: 'STOP',

            UGG: 'W',

            CGU: 'R',
            CGC: 'R',
            CGA: 'R',
            CGG: 'R',

            AGU: 'S',
            AGC: 'S',

            AGA: 'R',
            AGG: 'R',

            GGU: 'G',
            GGC: 'G',
            GGA: 'G',
            GGG: 'G'
        },
        aminoacid: {
            cache: [],
            F: {
                abbr: 'phe',
                name: 'phenylanine',
                codons: ['UUU', 'UUC']
            },
            L: {
                abbr: 'leu',
                name: 'leucine',
                codons: ['CUU', 'CUC', 'CUA', 'CUG', 'UUA', 'UUG']
            },
            I: {
                abbr: 'iso',
                name: 'isoleucine',
                codons: ['AUU', 'AUC', 'AUA']
            },
            M: {
                abbr: 'met',
                name: 'methionine',
                codons: ['AUG']
            },
            V: {
                abbr: 'val',
                name: 'valine',
                codons: ['GUU', 'GUC', 'GUA', 'GUG']
            },
            S: {
                abbr: 'ser',
                name: 'serine',
                codons: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC']
            },
            P: {
                abbr: 'pro',
                name: 'proline',
                codons: ['CCU', 'CCC', 'CCA', 'CCG']
            },
            T: {
                abbr: 'thr',
                name: 'threonine',
                codons: ['ACU', 'ACC', 'ACA', 'ACG']
            },
            A: {
                abbr: 'ala',
                name: 'alanine',
                codons: ['GCU', 'GCC', 'GCA', 'GCG']
            },
            Y: {
                abbr: 'tyr',
                name: 'tyrosine',
                codons: ['UAU', 'UAC']
            },
            H:{
                abbr: 'his',
                name: 'histidine',
                codons: ['CAU', 'CAC']
            },
            Q:{
                abbr: 'glu',
                name: 'glutamine',
                codons: ['CAA', 'CAG']
            },
            N:{
                abbr: 'asn',
                name: 'asparagine',
                codons: ['AAU', 'AAC']
            },
            K:{
                abbr: 'lys',
                name: 'lysine',
                codons: ['AAA', 'AAG']
            },
            D:{
                abbr: 'asp',
                name: 'aspartic acid',
                codons: ['GAU', 'GAC']
            },
            E:{
                abbr: 'glu',
                name: 'glutamic acid',
                codons: ['GAA', 'GAG']
            },
            C:{
                abbr: 'cys',
                name: 'cysteine',
                codons: ['UGU', 'UGC']
            },
            W:{
                abbr: 'trp',
                name: 'tryptophan',
                codons: ['UGG']
            },
            R:{
                abbr: 'arg',
                name: 'arginine',
                codons: ['AAU', 'AAC','CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']
            },
            G:{
                abbr: 'gly',
                name: 'glycine',
                codons: ['GGU', 'GGC','GGA','GGG']
            }
        },
        DNA: {
            // 1000000 - 436ms-503ms / 99ms-129ms // after removing function for creating init from range - 77ms-108ms//moving length from config 55-65//moved length into object 28ms-41ms
            // 10000000 - 4259ms-4557ms / 1094ms-1185ms
            // 20000000 - 8154ms-8664ms / 2143ms-2290ms
            // 50000000 - 26911ms-27397ms / after update - no array in complementary checking 10602ms-11162ms (17684ms)
            stringLength: 10000000
        }
    }
};