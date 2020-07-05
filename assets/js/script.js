
var cityEntryEl = document.querySelector("#form-control");



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
                var temp = data.main.temp;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;


                // created i to append nested api icon
                var icon = document.createElement("i");
                icon.classList = "bigIcon"

                //nested api for weather icon
                var iconUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityID + '&appid=' + key;
                var weatherIcon = fetch(iconUrl).then(function(response){
                    return response.json().then(function(data){
                        //log weather from nested API call
                        console.log("data.weather[0].icon", data.weather[0].icon);

                        

                        



                        
                    })
                }) 
               

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
            
            
                // create five day forecast
                var fiveDayUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityID + "&appid=" + key;
                // fetch 5 day data
                fetch(fiveDayUrl).then(response => response.json())
                    //.then(response => return response.json())
                    .then(function(data){
                    // log data as an array
                    console.log(data);

                    //create constant to use for loop
                    const list = data.list;
    
                    //loop over first 5 days
                    for (var i=0; i < list.length && i < 33; i+=8) {
                     
                    // create object with searched cityID
                    var fiveDayCard = document.createElement("div");
                    fiveDayCard.classList = "dayCard";
                    fiveDayCard.id = 'smallCard';
    
                    //create span to hold the cityID
                    var fiveDayCity = document.createElement("span");
                    fiveDayCity.classList = "futureDate";
    
                    // add input city to generated five day results div
                    fiveDayCity.textContent = (cityID);
                    fiveDayCard.appendChild(fiveDayCity);

                    // create span to hold new date
                    var fiveDate = document.createElement("span");
                    fiveDate.classList = "fiveDayDateBox"

                    //format each day date
                    var fiveDayDate = list[i].dt_txt;
                    //add date to generated span
                    fiveDate.textContent = fiveDayDate;
                    // append date span to card
                    fiveDayCard.appendChild(fiveDate);
        


                    
                   

                    


            
                    
                
                    var fiveTemp = list[i].main.temp;
                    var fiveHumidity = list[i].main.humidity;
                    var fiveWindSpeed = list[i].wind.speed;
                    var fiveWeatherIcon = list[i].weather[0].icon;
                    console.log(fiveWeatherIcon);
    
                    // test if this is working
                    console.log(fiveTemp);
                    console.log(fiveHumidity);
                    console.log(fiveWindSpeed); 
    
                    //create span to hold city weather icon
                    // var fiveDayWeather = document.createElement("i");
                    // fiveDayWeather.classList = "smallWeather";
                    // fiveDayWeather.innerHTML = 
                    // fiveDayCard.appendChild(fiveDayWeather);
                            
    
                    //create span to hold temperature
                    var fiveDayTemp = document.createElement("p");
                    fiveDayTemp.classList = "smallTemp"
                    fiveDayTemp.textContent = "Temperature: " + fiveTemp;
                    fiveDayCard.appendChild(fiveDayTemp);
    
                    //create span to hold humidity
                    var fiveDayHumidity = document.createElement("p");
                    fiveDayHumidity.classList = "smallHumidity";
                    fiveDayHumidity.textContent = "Humidity: " + fiveHumidity;
                    fiveDayCard.appendChild(fiveDayHumidity);

                    //create span to hold windspeed
                    var fiveDayWindSpeed = document.createElement("p");
                    fiveDayWindSpeed.classList = "smallWindSpeed";
                    fiveDayWindSpeed.textContent = "Wind Speed: " + fiveWindSpeed;
                    fiveDayCard.appendChild(fiveDayWindSpeed);
    
                    // append five card to col
                    fiveDayForecast.appendChild(fiveDayCard);

                   

                    
                    
                    //closes for loop
                    }; 
                // closes fetch     
                });           
            // closes return response      
            });
        //closes if statement
        } else {
        alert("Error");
        };
        
    
    // store all data by city name to recall
    // and turn into string....
    localStorage.setItem(cityID, getWeather.toString());
    // closes the fetch
    });
    
    
    
// close getWeather
};
  

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