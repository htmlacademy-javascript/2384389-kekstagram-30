import { COMMENTS_AMOUNT_SHOW } from './constants.js';

let commentsAmountShown = 0;

let comments = [];

const bigPhoto = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const buttonBigPhotoClose = bigPhoto.querySelector('.big-picture__cancel');

const totalCommentCount = document.querySelector('.social__comment-total-count');
const commentContainer = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-shown-count');
const commentLoader = document.querySelector('.social__comments-loader');

const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {

  commentsAmountShown += COMMENTS_AMOUNT_SHOW;

  if (commentsAmountShown >= comments.length) {
    commentLoader.classList.add('hidden');
    commentsAmountShown = comments.length;

  } else {
    commentLoader.classList.remove('hidden');
  }

  const fragmentContainerComment = document.createDocumentFragment();
  for (let i = 0; i < commentsAmountShown; i++) {
    const commentNewElement = createComment(comments[i]);
    fragmentContainerComment.appendChild(commentNewElement);
  }

  commentContainer.innerHTML = '';
  commentContainer.appendChild(fragmentContainerComment);

  commentCount.textContent = commentsAmountShown;
  totalCommentCount.textContent = comments.length;
};

const onCommentsLoader = () => renderComments();


const hidePhoto = () => {
  commentsAmountShown = 0;
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

  comments = pictureData.comments;
  if (comments.length > 0) {
    renderComments();
  }

  document.addEventListener('keydown', isEscapeKey);

  renderPicture(pictureData);
};

buttonBigPhotoClose.addEventListener('click', onCloseButtonBigPhoto);
commentLoader.addEventListener('click', onCommentsLoader);

export { showPicture };
