module.exports = function () {
    return {
        config: {
            'AclI': {
                sequence: 'AA/CGTT'
            },
            'HindIII HindIII-HF®': {
                sequence: 'A/AGCTT'
            },
            'SspI SspI-HF®': {
                sequence: 'AAT/ATT'
            },
            'MluCI Tsp509I': {
                sequence: '/AATT'
            },
            'PciI': {
                sequence: 'A/CATGT'
            },
            'AgeI AgeI-HF® AgeI-HF® RE-Mix®': {
                sequence: 'A/CCGGT'
            },
            'SexAI': {
                sequence: 'A/CCWGGT'
            },
            'MluI': {
                sequence: 'A/CGCGT'
            },
            'HpyCH4IV': {
                sequence: 'A/CGT'
            },
            'HpyCH4III': {
                sequence: 'ACN/GT'
            }
            //todo give next enzymes here
        },
        rules: {
            'B': ['C', 'G', 'T'],
            'D': ['A', 'G', 'T'],
            'H': ['A', 'C', 'T'],
            'K': ['G', 'T'],
            'M': ['A', 'C'],
            'N': ['A', 'C', 'G', 'T'],
            'R': ['A', 'G'],
            'S': ['C', 'G'],
            'V': ['A', 'C', 'G'],
            'W': ['A', 'T'],
            'Y': ['C', 'T']
        },
        rulesShort: 'BDHKMNRSVWY',
        getSequence: function (sequence) {
            return sequence.replace('/', '');
        }
    };
};