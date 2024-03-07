const apiKey = "7b967eb4a38c75af8267aa001ed5239f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchPlace = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img");

const cloudy = "Clouds";
const sunny = "Clear";
const drizzle = "Drizzle";
const haze = "Mist";
const rainy = "Rain";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        alert ('Check your city name again');
    }
    else{
        var data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "cloudy.png";
        document.querySelector(".weather-desc").innerHTML = cloudy;
    } 
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "sunny.png";
        document.querySelector(".weather-desc").innerHTML = sunny;
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "drizzle.png";
        document.querySelector(".weather-desc").innerHTML = drizzle;
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "haze.png";
        document.querySelector(".weather-desc").innerHTML = haze;
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "rainy.png";
        document.querySelector(".weather-desc").innerHTML = rainy;
    }}}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchPlace.value);
})