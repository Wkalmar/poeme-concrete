/*global describe, it*/
import expect from 'expect.js'

import sanitize from '../article-extractor/sanitizer.mjs';

describe('sanitize', () => {

    it('removes non-alphanumeric characters', () => {
      expect(sanitize('abc123!@#')).to.be('abc123!');
    });

    it('keeps whitespace', () => {
      expect(sanitize('abc 123')).to.be('abc 123');
    });

    it('keeps punctuation', () => {
      expect(sanitize('abc,.-?!')).to.be('abc,.-?!');
    });

    it('handles empty string', () => {
      expect(sanitize('')).to.be('');
    });

    it('removes unwanted punctuation', () => {
      expect(sanitize('#!@$')).to.be('!');
    });

  });