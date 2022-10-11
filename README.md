# WeatherApp


A simple web app that fetches data from open weather api's current weather and 5 day forecast based on user's specified city.

After a search user can click on the generated button for a previous search to access that location again. They can also hover over a weather icon for more info on the condition.

***
- [X] need a form input for user to search for a city, and show the current+5dayforecast
- [X] after searching for a city, it should saved under the form to be searched again// WHEN I view current weather conditions for that city
- [X] we need the `city name`, `the date`, `an icon`weather conditions,the `temperature`, the `humidity`, and the `wind speed`
- [X] 5-day forecast that displays the date, an icon, the temperature, the wind speed, and the humidity
- [X] Search has to be repeatable
- [ ] Error message when empty/or when fetch is 404'd

***
## Method
I had first implemented the button with an eventlistener to take in and initiate the fetch based on the user input. 

Then I parsed out the information that we need, and dynamically generated the html elements to store the conditions in the premade containers to display a city's condition and the time of the data that was collected.

I had also chosen to include the weather condition as the title of the icons, so that when user hovers over it, it provides some additional clarity for the user. 

I also create an additional button with a specific ID so that we can re-execute the search again when the user select that button.


***
## Demo Links / Media
*(feel free to click on the gif to go to deployed site)*
[<img src="./demo.gif" alt='sample'>](https://draconmarius.github.io/WeatherApp/) 

## Technologies Used
> JavaScript
> jQuery
> bootstrap
> openWeather.API

## License
> MIT

---

## Contact
Feel free to contact me @ the following:

[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/DraconMarius) 

[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](https://www.linkedin.com/in/mari-ma-70771585/)  

[Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)
