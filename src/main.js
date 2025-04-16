import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();

  const inputEl = input.value.toLowerCase().trim();

  if (!inputEl.length) {
    return;
  }

  showLoader();

  getImagesByQuery(inputEl)
    .then(response => createGallery(response.hits))
    .catch(error => console.error('Вибачте, щось пішло не так.', error.message))
    .finally(() => hideLoader());
});
