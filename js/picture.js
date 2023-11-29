import { COMMENTS_AMOUNT_SHOW } from './constants.js';

const bigPhotoElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePhotoButtonElement = bigPhotoElement.querySelector('.big-picture__cancel');
const totalCountCommentsElement = document.querySelector('.social__comment-total-count');
const commentContainerElement = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.social__comment-shown-count');
const commentLoaderElement = document.querySelector('.social__comments-loader');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsAmountShown = 0;
let comments = [];

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
    commentLoaderElement.classList.add('hidden');
    commentsAmountShown = comments.length;
  } else {
    commentLoaderElement.classList.remove('hidden');
  }

  const fragmentContainerComment = document.createDocumentFragment();
  for (let i = 0; i < commentsAmountShown; i++) {
    const commentNewElement = createComment(comments[i]);
    fragmentContainerComment.appendChild(commentNewElement);
  }
  commentContainerElement.innerHTML = '';
  commentContainerElement.appendChild(fragmentContainerComment);
  commentCountElement.textContent = commentsAmountShown;
  totalCountCommentsElement.textContent = comments.length;
};

const onCommentLoaderClick = () => renderComments();

const hidePhoto = () => {
  commentsAmountShown = 0;
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
};

const onClosePhotoButtonClick = () => {
  hidePhoto();
};

function onEscapeKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidePhoto();
  }
}

const renderPicture = ({ url, description, likes }) => {
  bigPhotoElement.querySelector('.big-picture__img img').src = url;
  bigPhotoElement.querySelector('.big-picture__img img').alt = description;
  bigPhotoElement.querySelector('.likes-count').textContent = likes;
  bigPhotoElement.querySelector('.social__caption').textContent = description;
};

const showPicture = (pictureData) => {
  bigPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  comments = pictureData.comments;
  if (comments.length > 0) {
    renderComments();
  }
  document.addEventListener('keydown', onEscapeKeydown);
  renderPicture(pictureData);
};

closePhotoButtonElement.addEventListener('click', onClosePhotoButtonClick);
commentLoaderElement.addEventListener('click', onCommentLoaderClick);

export { showPicture };
