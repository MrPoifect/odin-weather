export { renderCardInfo, globalWData};
import { unitToggle } from '../index.js';

let globalWData = null
let globalLData = null

function renderCardInfo(weatherData, locationData) {
  const wData = weatherData;
  const lData = locationData;
  globalWData = weatherData;


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

  //convert to celsius based on toggle
  // if (unitToggle.checked) {
  //   currentTemp = convertToCelsius(currentTemp);
  //   feelsLike = convertToCelsius(feelsLike);
  // }

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

  console.log(location);
}

function convertToCelsius(input) {
  const result = ((input - 32) * 5 / 9);
  return result;
}
