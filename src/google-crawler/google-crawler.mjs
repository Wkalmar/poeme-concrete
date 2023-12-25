/*global console*/
import https from 'https';

import extractLinks from './links-extractor.mjs';

const url = 'https://www.google.com/search?q=russian+war+crimes&tbs=qdr:w';

const performSearch = () => {
  https.get(url, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      return extractLinks(data);
    });

  }).on('error', err => {
    console.error(err);
  });
}

export default performSearch;
