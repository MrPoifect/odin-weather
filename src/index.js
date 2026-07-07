import './ui-styles.css';
import './info-styles.css';
import { searchCity } from './modules/api.js';
export { displayCityErrorModal, displayLocationErrorModal };

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


