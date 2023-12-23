import performSearch from './google-crawler';

exports.handler = async (event) => {
    const links = performSearch();

    const response = {
      statusCode: 200,
      body: JSON.stringify(links),
    };
    return response;
  };
