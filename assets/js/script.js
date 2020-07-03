// //
// //var cityFormEl = document.querySelector("#city-form");
var cityEntryEl = document.querySelector("#form-control");

// when search button is clicked
var getCity = function(event) {
    var cityName = cityEntryEl.value.trim();
    if (cityName) {
        getWeather(cityName);
        cityEntyEl.value="";
    } else {
        alert("Please enter a city");
    }
    
   
}

// create div innerhtml is variable
// append variableto col-4


//dynamically create 'cityName' div and append to search container
//create div with temp, humidity, widspeed, and uv index values for selected city
// create 5 card divs and append to right hand column; each care with date, icon of weather, temp, humidity
// localStorage key-value pair of city & weather results(jsonified)

// onclick event listener for search bar
btn.addEventListener("click", getCity);