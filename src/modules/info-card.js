export { renderCardInfo };

function renderCardInfo(weatherData, locationData) {
  const conditionTxt = document.getElementById('condition');
  const cityTxt = document.getElementById('city');
  const countryTxt = document.getElementById("country");
  const tempTxt = document.getElementById('temp');
  const feelsLikeTxt = document.getElementById('temp-feel');
  const windSpeedTxt = document.getElementById('wind-speed');
  const humidityTxt = document.getElementById('humidity');


  const condition = weatherData.currentConditions.conditions;
  const location = locationData.address.city;
  const country = locationData.address.country;
  const currentTemp = weatherData.currentConditions.temp;
  const feelsLike = weatherData.currentConditions.feelslike;
  const windSpeed = weatherData.currentConditions.windspeed;
  const humidity = weatherData.currentConditions.humidity;

  conditionTxt.textContent = condition;
  cityTxt.textContent = capitalizeFirstLetter(location);
  countryTxt.textContent = country;
  tempTxt.textContent = Math.round(currentTemp);
  feelsLikeTxt.textContent = Math.round(feelsLike);
  windSpeedTxt.textContent = Math.round(windSpeed);
  humidityTxt.textContent = Math.round(humidity);
}

function capitalizeFirstLetter(val) {
  const str = String(val).toLowerCase();
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

