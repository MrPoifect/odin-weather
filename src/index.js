import './ui-styles.css';
import './info-styles.css';
import { searchCity } from './modules/api.js';
import { globalWData } from './modules/info-card.js';
export { displayCityErrorModal, displayLocationErrorModal, unitToggle };

// console.log(searchCity("London"));

function displayCityErrorModal(city) {
  const container = document.getElementById('container');
  const modal = document.getElementById('error-modal');

  const errorText = document.getElementById('error-text');
  errorText.textContent = `No city named "${city}" found`;

  const closeBtn = document.getElementById('close-btn');
  closeBtn.textContent = 'Close';

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.showModal();
}

function displayLocationErrorModal(city) {
  const container = document.getElementById('container');
  const modal = document.getElementById('error-modal');

  const errorText = document.getElementById('error-text');
  errorText.textContent = `Error with "LocationIQ" API`;

  const closeBtn = document.getElementById('close-btn');
  closeBtn.textContent = 'Close';

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.showModal();
}

const unitToggle = document.getElementById('unit-toggle');

unitToggle.addEventListener('change', function () {
  if (this.checked) {
    changeUnitToCelsius();
  } else {
    changeUnitToFahrenheit();
  }
});

function changeUnitToCelsius() {
  const unitSections = document.getElementsByClassName('temp-icon');
  const tempTxt = document.getElementById('temp');
  const temp = tempTxt.textContent;
  const tempFeelTxt = document.getElementById('temp-feel');
  const tempFeel = tempFeelTxt.textContent;

  for (const section of unitSections) {
    section.textContent = '°C';
  }

  tempTxt.textContent = Math.round(((temp - 32) * 5) / 9);
  tempFeelTxt.textContent = Math.round(((tempFeel - 32) * 5) / 9);
  // tempFeelTxt.textContent = (Math.round((tempFeel * 9/5) + 32));
}

function changeUnitToFahrenheit() {
  const unitSections = document.getElementsByClassName('temp-icon');
  const tempTxt = document.getElementById('temp');
  const temp = tempTxt.textContent;
  const tempFeelTxt = document.getElementById('temp-feel');
  const tempFeel = tempFeelTxt.textContent;

  for (const section of unitSections) {
    section.textContent = '°F';
  }

  tempTxt.textContent = Math.round(globalWData.currentConditions.temp);
  tempFeelTxt.textContent = Math.round(globalWData.currentConditions.feelslike);
}
