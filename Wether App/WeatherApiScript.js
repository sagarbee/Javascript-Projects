const apiKey = "ab7670a2e6c9d6501681921401e8fa4d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    // `___ ` ->`` called backtick
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    document.querySelector(".weather").innerHTML = data.weather[0].main;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    
    
}

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.querySelector(".search input");

    searchButton.addEventListener("click", () => {
        const city = searchInput.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            console.log("Please enter a city name.");
        }
    });
});
