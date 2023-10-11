function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-today");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&appid=${apiKey}&units=metric`;
console.log(apiUrl);
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
