async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML =
      `⛅️ ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
  } else {
    document.getElementById("weatherResult").innerHTML =
      "City not found. Please try again.";
  }
}