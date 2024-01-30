import { calculateSentiment } from "./utils.mjs"

const extractMostColorfulSentences = (data, sentenceCount) => {
    return data.flat()
        .sort((a, b) =>
            calculateSentiment(b.SentimentValue, b.Magnitude) - calculateSentiment(a.SentimentValue, a.Magnitude))
        .slice(0, sentenceCount)
        .map(item => item.Text)
}

export default extractMostColorfulSentences;