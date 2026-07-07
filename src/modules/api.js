export { searchCity };
import { displayErrorModal } from '../index.js';
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
    renderCardInfo(weatherData);
    return weatherData;
  } catch (error) {
    displayErrorModal(city);
  }
}
