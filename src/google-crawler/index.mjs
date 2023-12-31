/*global console*/
import performSearch from './google-crawler.mjs';

export const handler = async () => {
    console.trace('entered index module');
    let links = [];
    try {
      links = await performSearch();
    }
    catch (err) {
      console.error(err);
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(links),
    };
    return response;
  };