/*global describe, it*/
import expect from 'expect.js'

import extractMostColorfulSentences from '../reducer/poem-selector.mjs'

describe('extractMostColorfulSentences', () => {
    it('should return sentence text based on magnitude and sentiment', () => {
        const data = [
            [{
                "Text": "The dog is on the table.",
                "SentimentValue": 0.9,
                "Magnitude": 0.1 //1.13
            },
            {
                "Text": "The cat is on the table.",
                "SentimentValue": 0.7,
                "Magnitude": 0.2 //1.109
            }],
            [{
                "Text": "The rat is on the table.",
                "SentimentValue": 0.5,
                "Magnitude": 0.3 //0.99
            },
            {
                "Text": "The mouse is on the table.",
                "SentimentValue": 0.3,
                "Magnitude": 0.4 //0.75
            }],
            [{
                "Text": "The elephant is on the table.",
                "SentimentValue": 0.5,
                "Magnitude": 0.5 //1.26
            }]
        ]
        const sentenceCount = 2
        const expected = [
            "The elephant is on the table.",
            "The dog is on the table."
        ]
        const actual = extractMostColorfulSentences(data, sentenceCount)
        expect(actual).to.eql(expected)
    })
})