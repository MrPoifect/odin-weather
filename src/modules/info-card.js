export { renderCardInfo };

function renderCardInfo(weatherData) {
  const conditionTxt = document.getElementById('condition');
  const cityTxt = document.getElementById('city');
  const tempTxt = document.getElementById('temp');
  const feelsLikeTxt = document.getElementById('temp-feel');
  const windSpeedTxt = document.getElementById('wind-speed');
  const humidityTxt = document.getElementById('humidity');

  const condition = weatherData.currentConditions.conditions;
  const location = weatherData.resolvedAddress;
  const currentTemp = weatherData.currentConditions.temp;
  const feelsLike = weatherData.currentConditions.feelslike;
  const windSpeed = weatherData.currentConditions.windspeed;
  const humidity = weatherData.currentConditions.humidity;

  conditionTxt.textContent = condition;
  cityTxt.textContent = capitalizeFirstLetter(location);
  tempTxt.textContent = Math.round(currentTemp);
  feelsLikeTxt.textContent = Math.round(feelsLike);
  windSpeedTxt.textContent = Math.round(windSpeed);
  humidityTxt.textContent = Math.round(humidity);
}

function capitalizeFirstLetter(val) {
  const str = String(val).toLowerCase();
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
