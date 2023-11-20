import { getPhotos } from './data.js';
import { AMOUNT_PHOTO } from './constants.js';
import { renderGallery } from './gallery.js';
import './form.js';
//import './scale.js';


const photos = getPhotos(AMOUNT_PHOTO);
console.log(photos);

renderGallery(photos);
