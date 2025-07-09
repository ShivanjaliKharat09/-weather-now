async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "a144df4b812ebaecc3ea3bbb57694ce9"; // Replace with your OpenWeatherMap API key
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
