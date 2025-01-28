const whitelist = [
    'civilian',
    'torture',
    'execut',
    'prison',
    'pow',
    'mutilat',
    'corps',
    'rape',
    'loot',
    'ecocid',
    'starv',
    'illegal',
    'hospital',
    'medic',
    'child',
    'abduct',
    'genocid',
    'shield',
    'war',
    'atrocit',
    'kill',
    'injur',
    'human',
    'destroy',
    'unarm',
    'helples'
]

const boostSentencesContainingGraphicWords = (data) => {
    data.forEach(item => {
        whitelist.forEach(word => {
            if(item.Text.includes(word)) {
            item.SentimentValue += 0.2;
            item.Magnitude += 0.2;
            }
        });
    });
}

export default boostSentencesContainingGraphicWords