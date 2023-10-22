function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemperature");
  let cityElement = document.querySelector("#currentCity");
  let descriptionElement = document.querySelector("#currentDescription");
  let humidityElement = document.querySelector("#currentHumidity");
  let windElement = document.querySelector("#currentWind");
  let dateElement = document.querySelector("#currentDate");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement = response.data.weather[0].description;
  humidityElement = response.data.main.humidity;
  windElement = Math.round(response.data.wind.speed);
  dateElement = formatDate(response.dt * 1000);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let city = "Paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=Montreal&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
