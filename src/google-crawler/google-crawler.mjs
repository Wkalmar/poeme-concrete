/*global console*/
import extractLinks from './links-extractor.mjs';

const url = 'https://www.google.com/search?q=russian+war+crimes&tbs=qdr:w';

const performSearch = async () => {
  console.trace('entered performSearch');
  try {
    const res = await fetch(url);

    console.trace('entered crawler callback');

    let data = await res.text();

    console.trace('retrieved all data');
    return extractLinks(data);

  } catch (err) {
    console.error(err);
  }
}

export default performSearch;
