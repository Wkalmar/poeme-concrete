const splitIntoSentences = (articleContent) => {
    let sentences = [];
    let currentSentence = "";

    for (let i = 0; i < articleContent.length; i++) {
      let currentChar = articleContent[i];

      if (currentChar === '.' || currentChar === '!' || currentChar === '?') {
        currentSentence += currentChar;
        const hasNextChar = i + 1 < articleContent.length;
        if (hasNextChar && articleContent[i + 1] ==='”') {
          i++;
          currentSentence += articleContent[i];
        }
        sentences.push(currentSentence.trim());

        currentSentence = "";
      } else {
        currentSentence += currentChar;
      }
    }

    if (currentSentence.length > 0) {
      sentences.push(currentSentence.trim());
    }

    return sentences
        .map(cleanString)
        .map(collapseWhitespace);
  }

const cleanString = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9') ||
        ' ,.!?;:“-”()’'.includes(char)
      ) {
        result += char;
      }
    }

    return result;
  }

const collapseWhitespace = (str) => {
    let result = '';
    let lastCharWasSpace = false;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ' || str[i] === '\t' || str[i] === '\n') {
        if (!lastCharWasSpace) {
          result += ' ';
          lastCharWasSpace = true;
        }
      } else {
        result += str[i];
        lastCharWasSpace = false;
      }
    }

    return result.trim();
  }


export default splitIntoSentences;
