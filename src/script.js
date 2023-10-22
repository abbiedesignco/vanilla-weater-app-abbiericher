function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemperature");
  let cityElement = document.querySelector("#currentCity");
  let descriptionElement = document.querySelector("#currentDescription");
  let humidityElement = document.querySelector("currentHumidity");
  let windElement = document.querySelector("currentWind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement = response.data.weather[0].description;
  humidityElement = response.data.main.humidity;
  windElement = Math.round(response.data.wind.speed);
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=Montreal&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
