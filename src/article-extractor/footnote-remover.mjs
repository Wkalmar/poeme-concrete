const removeFootnotes = (str) => {

  let inFootnote = false;
  let result = '';

  for (let i = 0; i < str.length; i++) {

    if (str[i] === '[') {
      inFootnote = true;
      continue;
    }

    if (str[i] === ']') {
      inFootnote = false;
      continue;
    }

    if (!inFootnote) {
      result += str[i];
    }
  }

  return result;
}

export default removeFootnotes;