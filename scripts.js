

const apiKey = "096c2b0f2703437eaad134447242904";
const apiURL = "http://api.weatherapi.com/v1/current.json?key=096c2b0f2703437eaad134447242904&q=Cape Town";


fetch(apiURL, {mode: 'cors'})
.then(function(response) {
    console.log(response.json());
});