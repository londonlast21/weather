
var cityEntryEl = document.querySelector("#form-control");

// var addCity = function(){
    
// }

// function to get data for cityID from API
var getWeather = function(cityID) {
    
    var key = 'b2fb04acd10970e7fa65712d42f4e333';
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID+ '&appid=' + key;
    // fetch API for everything else
    fetch(apiUrl).then(function(response) {
        if (response.ok) {


              // create object with searched cityID
              var cityRecord = document.createElement("button");
              cityRecord.classList = "cityHistoryLink";
              cityRecord.id = 'btn-2';
              //create span to hold the cityID
              var addCityRecord = document.createElement("span");
              addCityRecord.classList = "searchedCity";
              // add input city to searched results col
              addCityRecord.textContent = (cityID);
              cityRecord.appendChild(addCityRecord);
              // append city name below search bar
              search.appendChild(cityRecord);
            

            return response.json().then(function(data){
                // log data as an array
                console.log(data);
                // main content var

                //icon for weather
               // var weatherIcon = 

                var temp = data.main.temp;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;

                // nested api for uv index
                var uvLat = data.coord.lat;
                var uvLon = data.coord.lon;
                var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" + uvLat + "&lon=" + uvLon;
                var uvIndex = fetch(uvUrl).then(function(response){
                    return response.json().then(function(data){
                        //log uv index from nested api call
                        //redefine finalIndex value
                        var finalIndex = data.value;
                        
                        // create div to hold uvindex
                        var cityUvIndex = document.createElement("p")
                        cityUvIndex.textContent = "UV Index: " + finalIndex;
                        
                        if (finalIndex > 7){
                            cityUvIndex.classList = "danger";
                        }
                        else if (finalIndex < 4){
                            cityUvIndex.classList = "safe";
                        }
                        else {
                            cityUvIndex.classList = "moderate";
                        }
                        cityWeather.appendChild(cityUvIndex);
                    });

                });
                
                // create div and add to results column
                var addCity = document.createElement("div");
                addCity.classList = "list-item flex-row justify-space-between align-center";
                
                // create span to hold city name & style
                var addCityData = document.createElement("span");
                addCityData.classList = "cityTitle";
                // add input city to results col
                addCityData.textContent = (cityID);
                // append addCityData to addCity container
                addCity.appendChild(addCityData);

                // add today's date
                var todayDate = document.createElement("p")
                todayDate.classList = "today"
                var todayNow = new Date();
                todayDate.textContent = (todayNow.getMonth()+1)+'-'+todayNow.getDate()+'-'+todayNow.getFullYear();
                // add date to results column below cityID
                addCity.appendChild(todayDate);

                
                // create object
                var cityWeather = document.createElement("div");
                cityWeather.classList = "largeCard";

                //create content divs
                
                // create div to hold temp
                var cityTemp = document.createElement("p");
                cityTemp.textContent = "Temperature: " + temp;
                cityWeather.appendChild(cityTemp);

                // create div to hold humidity
                var cityHumidity = document.createElement("p");
                cityHumidity.textContent = "Humidity: " + humidity;
                cityWeather.appendChild(cityHumidity);

                // create div to hold wind speed
                var cityWindSpeed = document.createElement("p");
                cityWindSpeed.textContent = "Wind Speed: " + windSpeed;
                cityWeather.appendChild(cityWindSpeed);

                
            
                 

                // append cityWeather tab to results column
                addCity.appendChild(cityWeather)
                // append city name below search bar
                currentWeather.appendChild(addCity);

                

                // clear input field
               // chosenCity.textContent = "";    
                
        });
        } else {
        alert("Error")
        }
        
    })
    // store all data by city name to recall
    // and turn into string....
    localStorage.setItem(cityID, getWeather.toString());

    // clear input fields
    
    
}
  

// working: when search button is clicked, go to apisearch or alert
var getCity = function(event) {

    // first clear all old data from results column
    currentWeather.textContent = "";

    
    // get city name from text Input form
    var cityName = cityEntryEl.value.trim();
    if (cityName) {
        getWeather(cityName);

        // clear input
        //.textContent = "hih";
        
        
    } else {
        // if form-control is empty
        alert("Please enter a city");
        
    }

    

    
   
}


//create div with temp, humidity, widspeed, and uv index values for selected city
// create 5 card divs and append to right hand column; each care with date, icon of weather, temp, humidity
// localStorage key-value pair of city & weather results(jsonified)

// onclick event listener for search bar
btn.addEventListener("click", getCity);

