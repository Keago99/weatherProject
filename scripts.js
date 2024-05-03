const apiKey = "096c2b0f2703437eaad134447242904";
const apiURL = "http://api.weatherapi.com/v1/current.json?key=096c2b0f2703437eaad134447242904&q=";
const insertWeather = document.getElementById("insertWeather");
const insertTempC = document.getElementById("insertTempC");
const weatherButton = document.getElementById("weatherButton");
const insertLocation = document.getElementById("insertLocation");
const picture = document.getElementById("weatherPic");
var newAPIURL = "";

function decidePicture(){
    switch (insertWeather.innerText){
        default:
            console.log("normal")
            break;
        case "Clear":
            picture.src = "clear-sky.png";
            break;
        case "Partly cloudy":
            picture.src = "clear-sky.png";
            break;
        case "Cloudy":
            picture.src = "clouds.png";
            break;
        case "Sunny":
            picture.src = "sun.png";
            break;
        case "Light rain":
            picture.src = "rainy-day.png";
            break;
        case "Rain":
            picture.src = "rainy-day.png";
            break;
    }
}

function callWeather(){

    // Simplfying a .then() route for this apicall
    fetch(newAPIURL, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
        const weatherType = (response.current.condition.text);
        const weatherTempC = (response.current.feelslike_c);
        const locationName = (response.location.name);
        insertWeather.innerHTML= weatherType;
        insertTempC.innerHTML= weatherTempC;
        insertLocation.innerHTML = locationName;
        decidePicture();
    })
    .catch(function(err){
        alert("the error iz: " + err);
    });
}

function amendCall(){
    const locationText = document.getElementById("locationText").value;
    if (locationText == null)
    {
        alert("Null");
    }
    else if (locationText == ""){
        alert("please enter a location");
    }
    else{
        newAPIURL = (apiURL + locationText);
    }
}



weatherButton.addEventListener("click", () => {
    amendCall();
    callWeather();
})











