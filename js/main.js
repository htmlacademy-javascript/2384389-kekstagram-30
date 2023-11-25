//import './scale.js';
//import { getPhotos } from './data.js';
//import { AMOUNT_PHOTO } from './constants.js';
import { renderGallery } from './gallery.js';
import { showErrorMessage } from './utils.js';
import { loadData, sendData } from './api.js';
import { initFilter } from './filters.js';
import './form.js';


const bootstrap = async () => {
  try {
    const pictures = await loadData();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();











// const bootstrap = async () => {
//   try {
//     const pictures = await loadData();

//     renderGallery(pictures);
//   } catch (error) {
//     showErrorMessage();
//   }
// };

// bootstrap();
