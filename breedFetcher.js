
// console.log(process.argv);


const fetchBreedDescription = function(breedName, callback) {


  const request = require('request');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Example homepage.

    // body is a string

    if (error) {
      callback(error)
      return console.log(error);
    }

    const data = JSON.parse(body);
    // console.log("Print data info", data);
    // console.log(typeof body);

    if (!data.length) {
      return callback("Breed does not exist")
    }



    callback(null, data[0].description)
    // console.log(data[0].description);


  });
};

module.exports = { fetchBreedDescription };


// if statement inside function if breed name not found
// return error using if statement
// if(err) {
// console.error(err);
// }
