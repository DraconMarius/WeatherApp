// - [X] need a form input for user to search for a city, and show the current+5dayforecast
// - [X] after searching for a city, it should saved under the form to be searched again// WHEN I view current weather conditions for that city
// - [X] we need the `city name`, `the date`, `an icon`weather conditions,
// the temperature, the humidity, and the wind speed ^^
// - [X] 5-day forecast that displays the date, an icon, the temperature, the wind speed, and the humidity
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
        var fetchWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=62a0c9b6ffbd35cd6b887afaa5e015c1&units=imperial"
        var fetchFuture = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=62a0c9b6ffbd35cd6b887afaa5e015c1&units=imperial"
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
            var iconURL = $("<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png' class='min-vw-15 mx-auto d-block' title='Current Weather: " + weather + "'></img>");
            nowCon.prepend(iconURL);
            //adding button for recall
            var recallBtn = $("<btn class='btn btn-info mw-100 col-12'>" + city.name + "</btn>");
            recallBtn.attr("data-citi", name);
            recallBtn.text(name);
            $(savBox).append(recallBtn);
            // console.log('test')
            // console.log(date.toLocaleString());
            // console.log(feh);
            // console.log(city);
            // localStorage.setItem(name, [name, lon, lat]);
            // console.log(JSON.stringify(lon));
            // console.log(JSON.stringify(lat));
            // $.ajax({
            //     url:
            // })
            // fetching 5 day forecast.
        }).then($.ajax({
            url: fetchFuture,
            method: 'GET',
        }).then(function (forecast) {
            // console.log(forecast);
            // clear container;
            futCon.empty();
            var aux = 1;
            // displayD.text("sysTime: " + date.toLocaleString());
            for (var i = 0; i < forecast.list.length; i++) {
                var dt = eval(forecast.list[i].dt * 1000);
                console.log(dt);
                var T = new Date(dt);
                console.log(T); //we then use getMonth + 1 cuz apparently it counts from 0 index)
                var date = ("<div class='text-center'>" + (T.getMonth() + 1) + "/" + T.getDate() + "</div>");
                console.log(date); // to display 5-day forecast dates
                var feh = $("<li class='list-group-item'>Temp: " + forecast.list[i].main.temp + " F</li>");
                var wind = $("<li class='list-group-item'>Wind: " + forecast.list[i].wind.speed + " MPH</li>");
                var hum = $("<li class='list-group-item'>Hum :" + forecast.list[i].main.humidity + " %</li>");
                var icon = (forecast.list[i].weather[0].icon);
                var cond = (forecast.list[i].weather[0].main);
                var iconURL = $("<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png' class = 'min-vw-15 mx-auto d-block' title='Day " + aux + " Weather: " + cond + "'></img>");
                var card = $("<p class ='card mh-100 h-auto d-inline-block align-items-center justify-content-center'></p>");
                // card.attr("data-day", aux);
                card.append(iconURL);
                card.append(date);
                card.append(feh);
                card.append(wind);
                card.append(hum);
                card.prepend(iconURL);
                futCon.append(card);
                aux++;
                i = i + 7;



            }

        })

        ))
    });



});

//lets fetch some data
//using the geo api within openweather to translate city name to long/lat
//so we can feed it into another fetch for the current and 5 day
