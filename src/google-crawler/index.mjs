/*global exports*/
import performSearch from './google-crawler';

exports.handler = async () => {
    const links = performSearch();

    const response = {
      statusCode: 200,
      body: JSON.stringify(links),
    };
    return response;
  };
