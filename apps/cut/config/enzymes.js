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
            'MluI-HF®': {
                sequence: 'ACGCGT'
            },
            'HpyCH4IV': {
                sequence: 'A/CGT'
            },
            'HpyCH4III': {
                sequence: 'ACN/GT'
            }
            //todo give next enzymes here
        },
        getSequence: function (sequence) {
            return sequence.replace('/', '');
        }
    }
};