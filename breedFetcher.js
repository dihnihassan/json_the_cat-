
console.log(process.argv);



const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Example homepage.

  // body is a string

  if (error) {
    return console.log("This is an error", error);
  }

  const data = JSON.parse(body);
  // console.log("Print data info", data);
  // console.log(typeof body);

  if (!data.length) {
    return console.log("Breed does not exist");
  }



  console.log(data[0].description);


});



// if statement inside function if breed name not found
// return error using if statement
// if(err) {
// console.error(err);
// }
