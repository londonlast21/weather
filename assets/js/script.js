// //
// //var cityFormEl = document.querySelector("#city-form");
var cityEntryEl = document.querySelector("#form-control");


var getWeather = function(cityID) {
    var key = 'b2fb04acd10970e7fa65712d42f4e333';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)
    .then(function(response) {
        //returns weather for city as an array
        return response.json()})
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            //catch any errors
        });
    }

  

// when search button is clicked, search or alert
// section works//
var getCity = function(event) {
    var cityName = cityEntryEl.value.trim();
    if (cityName) {
        getWeather(cityName);
        
    } else {
        // if form-control is empty
        alert("Please enter a city");
    }
    
   
}

// create div innerhtml is variable
// append variableto col-4


//create div with temp, humidity, widspeed, and uv index values for selected city
// create 5 card divs and append to right hand column; each care with date, icon of weather, temp, humidity
// localStorage key-value pair of city & weather results(jsonified)

// onclick event listener for search bar
btn.addEventListener("click", getCity);