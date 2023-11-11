import {getPhotos} from './data.js';
import {AMOUNT_PHOTO} from './constants.js';
import {renderThumbnails} from './thumbnail.js';

const photos = getPhotos(AMOUNT_PHOTO);
console.log(photos);
renderThumbnails(photos);
