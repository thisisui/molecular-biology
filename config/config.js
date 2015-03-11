module.exports = function () {

    return {
        nucleobase: {
            cache: ['A', 'G', 'T', 'C', 'U'],
            A: {
                name: 'adenine',
                complementary: 'T'
            },
            G: {
                name: 'guanine',
                complementary: 'C'
            },
            T: {
                name: 'thymine',
                complementary: 'A',
                complementaryAlt: 'U'
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
        aminoacid: {
            cache: [],
            I: {
                name: 'isoleucine',
                codons: ['ATT', 'ATC', 'ATA']
            },
            L: {
                name: 'leucine',
                codons: ['CTT', 'CTC', 'CTA', 'CTG', 'TTA', 'TTG']
            },
            V: {
                name: 'valine',
                codons: ['GTT', 'GTC', 'GTA', 'GTG']
            },
            F: {
                name: 'phenylalanine',
                codons: ['TTT', 'TTC']
            },
            M: {
                name: 'methionine',
                codons: ['ATG']
            }
        },
        DNA: {
            // 1000000 - 436ms-503ms / 99ms-129ms // after removing function for creating init from range - 77ms-108ms//moving length from config 55-65//moved length into object 28ms-41ms
            // 10000000 - 4259ms-4557ms / 1094ms-1185ms
            // 20000000 - 8154ms-8664ms / 2143ms-2290ms
            // 50000000 - 26911ms-27397ms / after update - no array in complementary checking 10602ms-11162ms (17684ms)
            stringLength: 1000000
        }
    }
};