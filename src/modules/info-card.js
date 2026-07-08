export { renderCardInfo, globalWData, displaySpinner};
import { unitToggle } from '../index.js';
import cloudy from '../icons/weather-cloudy.svg';
import fog from '../icons/weather-fog.svg';
import nightPartlyCloudy from '../icons/weather-night-partly-cloudy.svg';
import night from '../icons/weather-night.svg';
import partlyCloudy from '../icons/weather-partly-cloudy.svg';
import rainy from '../icons/weather-rainy.svg';
import snowy from '../icons/weather-snowy.svg';
import clearDay from '../icons/weather-sunny.svg';
import windy from '../icons/weather-windy.svg';

let globalWData = null;
let globalLData = null;

function renderCardInfo(weatherData, locationData) {
  const wData = weatherData;
  const lData = locationData;
  globalWData = weatherData;

  const weatherResults = document.getElementById('weather-results');
  const conditionTxt = document.getElementById('condition');
  const cityTxt = document.getElementById('city');
  const countryTxt = document.getElementById('country');
  const tempTxt = document.getElementById('temp');
  const feelsLikeTxt = document.getElementById('temp-feel');
  const windSpeedTxt = document.getElementById('wind-speed');
  const humidityTxt = document.getElementById('humidity');

  let location = lData.address.county;
  const condition = wData.currentConditions.conditions;
  const country = lData.address.country;
  const currentTemp = wData.currentConditions.temp;
  const feelsLike = wData.currentConditions.feelslike;
  const windSpeed = wData.currentConditions.windspeed;
  const humidity = wData.currentConditions.humidity;

  if (lData.address.city != undefined) {
    location = lData.address.city;
  }

  if (lData.address.suburb != undefined) {
    location = lData.address.suburb;
  }

  if (lData.address.town != undefined) {
    location = lData.address.town;
  }

  if (lData.address.village != undefined) {
    location = lData.address.village;
  }

  conditionTxt.textContent = condition;
  cityTxt.textContent = location;
  countryTxt.textContent = country;
  windSpeedTxt.textContent = Math.round(windSpeed);
  humidityTxt.textContent = Math.round(humidity);
  tempTxt.textContent = Math.round(currentTemp);
  feelsLikeTxt.textContent = Math.round(feelsLike);

  if (unitToggle.checked) {
    tempTxt.textContent = Math.round(convertToCelsius(currentTemp));
    feelsLikeTxt.textContent = Math.round(convertToCelsius(feelsLike));
  }
  weatherResults.style.display = "block";
  displayWeatherIcon();
  const spinner = document.getElementById("loader");
  spinner.style.display = "none";
}

function convertToCelsius(input) {
  const result = ((input - 32) * 5) / 9;
  return result;
}

function displayWeatherIcon() {
  const icon = document.getElementById('icon');
  icon.style.display = "block";
  switch (globalWData.currentConditions.icon) {
    case 'snow':
      icon.src = '../icons/weather-snowy.svg';
      break;

    case 'rain':
      icon.src = rainy;
      break;

    case 'fog':
      icon.src = fog;
      break;

    case 'wind':
      icon.src = windy;
      break;

    case 'cloudy':
      icon.src = cloudy;
      break;

    case 'partly-cloudy-day':
      icon.src = partlyCloudy;
      break;

    case 'partly-cloudy-night':
      icon.src = nightPartlyCloudy;
      break;

    case 'clear-day':
      icon.src = clearDay;
      break;

    case 'clear-night':
      icon.src = night;
  }
}


function displaySpinner() {
  const spinner = document.getElementById("loader");
  spinner.style.display = "inline-block";
}