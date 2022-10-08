// - [ ] need a form input for user to search for a city, and show the current+5dayforecast
// - [ ] after searching for a city, it should saved under the form to be searched again// WHEN I view current weather conditions for that city
// - [ ] we need the `city name`, `the date`, `an icon`weather conditions,
// the temperature, the humidity, and the wind speed ^^
// - [ ] 5-day forecast that displays the date, an icon, the temperature, the wind speed, and the humidity
// - [ ] Search has to be repeatable

//get some containers
var nowBox = $("#current");
var foreBox = $("#forecast");
var searchF = $(".form-group")
var savBox = $("#saved")
var btn = $(".btn");
var cityBox = $("#cities")
//fom user, press button, 
$(function saveCity() {
    $(btn).on("click", function (event) {
        event.preventDefault(); // so won't refresh
        var cityName = cityBox.val().trim();
        var fetchCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=3&appid=62a0c9b6ffbd35cd6b887afaa5e015c1"
        console.log(cityName);
        // localStorage.setItem(id, toSave);
        $.ajax({
            url: fetchCity,
            method: 'GET',
        }).then(function (city) {
            var lon = (city[0].lon);
            var lat = (city[0].lat);
            var name = (city[0].name);
            console.log('test')
            console.log(city);
            console.log(city[0].lon);
            console.log(city[0].lat);
            localStorage.setItem(name, [lon, lat])
        });



    })
});

//lets fetch some data
//using the geo api within openweather to translate city name to long/lat
//so we can feed it into another fetch for the current and 5 day
