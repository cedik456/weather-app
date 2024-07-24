
const apiKey = "f3a74f507a95746ba7af9ce90377c89d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Rain"){
      weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Snow"){
      weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main === "Drizzle"){
      weatherIcon.src = "images/Drizzle.png";
    }
    else if(data.weather[0].main === "Wind"){
      weatherIcon.src = "images/wind.png";
    }
    else if(data.weather[0].main === "Mist"){
      weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main === "Clear"){
      weatherIcon.src = "images/clear.png";
    }
    else{
      weatherIcon.src = "data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><text x='0' y='20' font-size='20'>❓</text></svg>";
    }

}


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});





