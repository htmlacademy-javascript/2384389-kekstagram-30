//import { getPhotos } from './data.js';
//import { AMOUNT_PHOTO } from './constants.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { loadData } from './api.js';
import { showErrorMessage } from './utils.js';
//import './scale.js';

const bootstrap = async () => {
  try {
    const pictures = await loadData();

    renderGallery(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();

// const photos = getPhotos(AMOUNT_PHOTO);
// console.log(photos);


