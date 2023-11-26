import { renderThumbnails } from './thumbnail.js';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const pictures = [];

const renderGallery = (data) => {
  pictures.length = 0;
  pictures.push(...data.slice());
  renderThumbnails(pictures, container);
};

container.addEventListener('click', (evt) => {
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
