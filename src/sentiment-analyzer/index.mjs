/*global console */
import boostSentencesContainingGraphicWords from "./whitelist.mjs";

export const handler = async (article) => {
    console.trace(`entered sentiment analyzer. article ${article}`);
    try {
        const data = performSentimentAnalysis(article);
        console.trace(`sentiment analysis result: ${JSON.stringify(data)}`);
        boostSentencesContainingGraphicWords(data);
        const negativeSentences = extractMostGraphicSentences(data);
        negativeSentences.forEach(sentence => {
            console.trace(`extracted ${sentence.Text}`);
        });
        return negativeSentences;
    }
    catch (err) {
        console.log(err);
    }
}

function performSentimentAnalysis(article) {
    const sentences = article.split(/[.!?]/).filter(Boolean);

    return sentences.map(_ => new {
        SentimentPolarity: '-',
        SentimentValue: 0.51,
        Magnitude: 0.76,
        Text: _
    });
}

function extractMostGraphicSentences(data) {
    const coreSentences = data.CoreSentences;
    const negativeSentences = coreSentences.filter(sentence => {
        return sentence.SentimentPolarity === '-' && sentence.SentimentValue > 0.5 && sentence.Magnitude > 0.75;
    });
    return negativeSentences;
}


