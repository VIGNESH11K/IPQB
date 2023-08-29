const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const apiKey = "YOUR_API_KEY";

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        displayError();
    }
}

function displayWeather(data) {
    weatherInfo.innerHTML = `
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Conditions: ${data.weather[0].description}</p>
    `;
}

function displayError() {
    weatherInfo.textContent = "City not found. Please try again.";
}
