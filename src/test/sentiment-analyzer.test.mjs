/*global describe, it*/
import expect from 'expect.js'

import boostSentencesContainingGraphicWords from "../sentiment-analyzer/whitelist.mjs";

const testData = {
    CoreSentences: [
      {Text: 'This is a normal sentence', SentimentValue: 0.5, Magnitude: 0.5},
      {Text: 'This sentence contains the word torture', SentimentValue: 0.2, Magnitude: 0.2},
      {Text: 'Another regular sentence here', SentimentValue: 0.4, Magnitude: 0.4},
      {Text: 'This sentence contains the words children abduction', SentimentValue: 0.2, Magnitude: 0.2},
    ]
  };


describe('boostSentencesContainingGraphicWords', () => {
    it('boosts sentiment for sentences containing whitelisted words', () => {
        boostSentencesContainingGraphicWords(testData);
        expect(testData.CoreSentences[1].SentimentValue).to.be.within(0.4, 0.4001);
        expect(testData.CoreSentences[1].Magnitude).to.be.within(0.4, 0.4001);
        expect(testData.CoreSentences[3].SentimentValue).to.be.within(0.6, 0.6001);
        expect(testData.CoreSentences[3].Magnitude).to.be.within(0.6, 0.6001);
    });

    it('leaves other sentences unchanged', () => {
        boostSentencesContainingGraphicWords(testData);
        expect(testData.CoreSentences[0].SentimentValue).to.be(0.5);
        expect(testData.CoreSentences[0].Magnitude).to.be(0.5);
        expect(testData.CoreSentences[2].SentimentValue).to.be(0.4);
        expect(testData.CoreSentences[2].Magnitude).to.be(0.4);
    });

  });