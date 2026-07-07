export { searchCity };
import { displayCityErrorModal, displayLocationErrorModal } from '../index.js';
import { renderCardInfo } from './info-card.js';

const weatherURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const searchParameters =
  '?unitGroup=us&include=current&key=JDQB2WBBRDYYNJ86RAA53DSZE&contentType=json';

const searchBar = document.querySelector('form');

searchBar.addEventListener('submit', function (e) {
  e.preventDefault();
  const targetCity = document.getElementById('search-bar').value;
  console.log(searchCity(targetCity));
});

async function searchCity(city) {
  try {
    const response = await fetch(weatherURL + city + searchParameters);
    const weatherData = await response.json();
    locateCountry(weatherData);
    return weatherData;
  } catch (error) {
    displayCityErrorModal(city);
  }
}

async function locateCountry(weatherData) {
  const lat = weatherData.latitude.toString();
  const lon = weatherData.longitude.toString();

  try {
    const response = await fetch(
      'https://us1.locationiq.com/v1/reverse?key=pk.cb063cdfbe3c30ebcfb03592ec14313a&lat=' +
        lat +
        '&lon=' +
        lon +
        '&format=json'
    );
    const locationData = await response.json();
    renderCardInfo(weatherData, locationData);
    console.log(locationData);
  } catch (error) {
    displayLocationErrorModal();
  }
}
