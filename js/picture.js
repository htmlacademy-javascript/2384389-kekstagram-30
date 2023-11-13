import { renderComment, showCommentCount } from './comment.js';

const bigPhoto = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const buttonBigPhotoClose = bigPhoto.querySelector('.big-picture__cancel');

const hidePhoto = () => {
  bigPhoto.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', isEscapeKey);
};

const onCloseButtonBigPhoto = () => {
  hidePhoto();
};

const isEscapeKey = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidePhoto();
  }
};

const renderPicture = ({ url, description, likes }) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.big-picture__img img').alt = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;
};

const showPicture = (pictureData) => {
  bigPhoto.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  renderComment(pictureData.comments);

  showCommentCount();

  document.addEventListener('keydown', isEscapeKey);

  renderPicture(pictureData);
};

buttonBigPhotoClose.addEventListener('click', onCloseButtonBigPhoto);

export { showPicture };
