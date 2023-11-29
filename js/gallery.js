import { renderThumbnails } from './thumbnail.js';
import { showPicture } from './picture.js';

const containerElement = document.querySelector('.pictures');

const pictures = [];

const renderGallery = (data) => {
  pictures.length = 0;
  pictures.push(...data.slice());
  renderThumbnails(pictures, containerElement);
};

containerElement.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-photo-id]');
  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const thumbnailId = +thumbnail.dataset.photoId;
  const pictureData = pictures.find(({ id }) => id === thumbnailId);
  showPicture(pictureData);
});

export { renderGallery };
