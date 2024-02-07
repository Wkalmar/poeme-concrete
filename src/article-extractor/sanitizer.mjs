const sanitize = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9') ||
        char === ' ' ||
        '()",.-?!«»'.includes(char)
      ) {
        result += char;
      }
    }

    return result;
  }

export default sanitize