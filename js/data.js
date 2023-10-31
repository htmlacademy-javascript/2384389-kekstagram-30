import {getRandomInteger, getRandomArrayElement, getUniqueRandomInteger} from './utils.js';
import {
  MIN_AMOUNT_LIKES,
  MAX_AMOUNT_LIKES,
  AMOUNT_AVATAR,
  MAX_COMMENTS,
  MIN_COMMENTS,
  MAX_ID_COMMENTS,
  COMMENTATORS_NAMES,
  COMMENTS_LINE,
  DESCRIPTION
} from './constants.js';

let amountPhoto = 25;

const getCommentId = getUniqueRandomInteger(1, MAX_ID_COMMENTS);

//функция для сборки информации о комментариях:
const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AMOUNT_AVATAR)}.svg`,
  message: getRandomArrayElement(COMMENTS_LINE),
  name: getRandomArrayElement(COMMENTATORS_NAMES),
});

const getComments = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getComment());
  }
  return arr;
};

const getPhotoId = getUniqueRandomInteger(1, amountPhoto);
const getImageId = getUniqueRandomInteger(1, amountPhoto);

//функция для сборки данных о фото:
const getPhotoInfo = () =>({
  id: getPhotoId(),
  url: `photos/${getImageId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_AMOUNT_LIKES, MAX_AMOUNT_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotos = (n) => {
  amountPhoto = n;
  const photos = [];
  for (let i = 0; i < n; i++) {
    photos.push(getPhotoInfo());
  }
  return photos;
};

export {getPhotos};
