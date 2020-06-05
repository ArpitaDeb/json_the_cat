const fetchBreedDescription = function (breedName, callback) {
  const request = require('request');
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log('Request Error:', error);
      callback(error, null);
    }
    console.log(response.statusCode);
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'the requested breed is not found');
    } else {
      callback(null, data[0]['description']);
    }
  });
};
module.exports = { fetchBreedDescription };