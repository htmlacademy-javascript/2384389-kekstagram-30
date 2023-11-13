import { getPhotos } from './data.js';
import { AMOUNT_PHOTO } from './constants.js';
import { renderGallery } from './gallery.js';


const photos = getPhotos(AMOUNT_PHOTO);
console.log(photos);

renderGallery(photos);
