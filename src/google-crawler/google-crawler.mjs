/*global console*/
import https from 'https';

import extractLinks from './links-extractor.mjs';

const url = 'https://www.google.com/search?q=russian+war+crimes&tbs=qdr:w';

const performSearch = () => {
  console.trace('entered performSearch');
  https.get(url, res => {
    console.trace('entered crawler callback');
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.trace('retrieved all data');
      return extractLinks(data);
    });

  }).on('error', err => {
    console.error(err);
  });
}

export default performSearch;
