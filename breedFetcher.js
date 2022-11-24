
console.log(process.argv);



const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}` , (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Example homepage.

  // body is a string
  // console.log(typeof body);

const data = JSON.parse(body);
// console.log(data);

console.log(data[0].description);



});



// if statement inside function if breed name not found
// return error using if statement    
    //  if(err) {
    //   console.error(err);
    // }
