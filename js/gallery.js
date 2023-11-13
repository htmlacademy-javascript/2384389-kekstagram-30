import { renderThumbnails } from './thumbnail.js';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (getPictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-photo-id]');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = +thumbnail.dataset.photoId;
    const pictureData = getPictures.find(({ id }) => id === thumbnailId);

    showPicture(pictureData);
  });

  renderThumbnails(getPictures, container);
};

export { renderGallery };
