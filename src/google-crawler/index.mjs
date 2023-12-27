import performSearch from './google-crawler.mjs';

export const handler = async () => {
    const links = performSearch();

    const response = {
      statusCode: 200,
      body: JSON.stringify(links),
    };
    return response;
  };