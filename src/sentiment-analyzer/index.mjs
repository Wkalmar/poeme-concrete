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
    const sentences = splitTextIntoSentences(article);

    return sentences.map(_ =>
        {
            return {
                SentimentPolarity: '-',
                SentimentValue: 0.31,
                Magnitude: 0.56,
                Text: _
            }
        });
}

function splitTextIntoSentences(text) {
    const sentenceEndings = /([.!?])\s*(?=\p{Lu})/gu;
    const sentences = text.split(sentenceEndings).filter(Boolean);

    let result = [];
    for (let i = 0; i < sentences.length; i++) {
      if (sentenceEndings.test(sentences[i])) {
        result[result.length - 1] += sentences[i];
      } else {
        result.push(sentences[i]);
      }
    }

    return result;
  }

function extractMostGraphicSentences(data) {
    const negativeSentences = data.filter(sentence => {
        return sentence.SentimentPolarity === '-' && sentence.SentimentValue > 0.5 && sentence.Magnitude > 0.75;
    });
    return negativeSentences;
}


