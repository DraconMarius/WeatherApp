// - [ ] need a form input for user to search for a city, and show the current+5dayforecast
// - [ ] after searching for a city, it should saved under the form to be searched again// WHEN I view current weather conditions for that city
// - [ ] we need the `city name`, `the date`, `an icon`weather conditions,
// the temperature, the humidity, and the wind speed ^^
// - [ ] 5-day forecast that displays the date, an icon, the temperature, the wind speed, and the humidity
// - [ ] Search has to be repeatable

//get some containers
var nameBox = $("#cityN");
var nowCon = $("#nowCond");
var futCon = $("#futCond")
var nowBox = $("#current");
var foreBox = $("#forecast");
var searchF = $(".form-group");
var savBox = $("#saved");
var btn = $(".savebtn");
var cityBox = $("#cities");
var goTime = false;
//fom user press button 
$(function saveCity() {
    $(btn).on("click", function (event) {
        event.preventDefault(); // so won't refresh
        var cityName = cityBox.val().trim();
        var fetchWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=62a0c9b6ffbd35cd6b887afaa5e015c1&units=imperial&"
        var fetchCW = ""
        console.log(cityName);
        // localStorage.setItem(id, toSave);
        $.when($.ajax({
            url: fetchWeather,
            method: 'GET',
        }).then(function (city) {
            console.log(city);
            var dt = eval(city.dt * 1000);
            var date = new Date(dt);
            var feh = (city.main.temp);
            var name = (city.name);
            var wind = (city.wind.speed);
            var hum = (city.main.humidity);
            var icon = (city.weather[0].icon);
            var weather = (city.weather[0].main);
            //clearing condition
            nowCon.empty();
            //display condition
            nameBox.text(name); //name
            var displayD = $("<p>"); //date of retrieval
            displayD.text("sysTime: " + date.toLocaleString());
            nameBox.append(displayD);
            var cTemp = $("<li class='list-group-item' id= 'cTemp'></li>");
            cTemp.text("Temp: " + feh + " F");
            nowCon.append(cTemp);
            var cWind = $("<li class='list-group-item' id= 'cWind'></li>");
            cWind.text("Wind: " + wind + " MPH");
            nowCon.append(cWind);
            var cHum = $("<li class='list-group-item' id= 'cHum'></li>");
            cHum.text("Humidity: " + hum + " %");
            nowCon.append(cHum);
            //deciding what icon to show based on weather
            var iconURL = $("<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png' class='col-4'></img>");
            nowCon.prepend(iconURL);


            //adding button for recall
            var recallBtn = $("<btn class='btn btn-info mw-100 col-12'>" + city.name + "</btn>");
            recallBtn.attr("data-citi", name);
            recallBtn.text(name);
            $(savBox).append(recallBtn);
            console.log('test')
            console.log(date.toLocaleString());
            console.log(feh);
            // console.log(city);
            // localStorage.setItem(name, [name, lon, lat]);
            // console.log(JSON.stringify(lon));
            // console.log(JSON.stringify(lat));
            // $.ajax({
            //     url:
            // })
            // }).then(function (city) {//might as well make the button for recall here
            //then get the next
        }));



    })
});

//lets fetch some data
//using the geo api within openweather to translate city name to long/lat
//so we can feed it into another fetch for the current and 5 day
