const apiKey = "096c2b0f2703437eaad134447242904";
const apiURL = "http://api.weatherapi.com/v1/current.json?key=096c2b0f2703437eaad134447242904&q=Dublin";
const insertWeather = document.getElementById("insertWeather");
const insertTempC = document.getElementById("insertTempC");
const weatherButton = document.getElementById("weatherButton");

function callWeather(){
    try{
        fetch(apiURL, {mode: 'cors'})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response);
            const weatherType = (response.current.condition.text);
            const weatherTempC = (response.current.feelslike_c);
            insertWeather.innerHTML= weatherType;
            insertTempC.innerHTML= weatherTempC;
        })
    }
    catch{
        console.error("didn't work");
    }

}

weatherButton.addEventListener("click", () => {
    callWeather();
})









