import {MAX_HASHTAGS_COUNT} from './constants.js';
import {VALID_HASHTAG} from './constants.js';

const ErrorText = {
  INVALID_HASHTAG: 'Введён неправильный хэш-тег',
  INVALID_HASHTAGS_COUNT: `Максимум ${MAX_HASHTAGS_COUNT} хэш-тэгов`,
  NOT_UNIQUE: 'Хэштеги не должны повторяться'
};

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const body = form.querySelector('body');
const buttonCansel = form.querySelector('.img-upload__cancel');
const hachtags = form.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});


const normalizeHashtags = (stringTags) => stringTags.trim().split(' ').filter(Boolean);

//const verifyValidTags = (value) => normalizeHashtags(value).every((tag) => VALID_HASHTAG.test(tag));


const verifyValidTags = (value) => {
  const tagsString = normalizeHashtags(value);
  let resultValidVerify = true;
  for (let i = 0; i < tagsString.length; i++) {
    const element = VALID_HASHTAG.test(tagsString[i]);
    if (element === false) {
      resultValidVerify = false;
      break;
    }
  }
  return resultValidVerify;
};


const verifyTagsCount = (value) => normalizeHashtags(value).length <= MAX_HASHTAGS_COUNT;


const verifyTagUnique = (value) => {
  const lowerCaseTags = normalizeHashtags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const onDocumentEscKeydown = (evt) => {
  if (evt.target.name !== 'hashtags' && evt.target.name !== 'description') {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeForm();
    }
  }
};

const closeForm = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileField.value = '';
  removeEventListenerEsc();
};

document.addEventListener('keydown', onDocumentEscKeydown);

const removeEventListenerEsc = () => {
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

const onUploadInputChange = () => {
  openForm();

};

const onUploadInputClick = () => {
  closeForm();

};

pristine.addValidator(
  hachtags,
  verifyTagsCount,
  ErrorText.INVALID_HASHTAGS_COUNT,
  3,
  true
);

pristine.addValidator(
  hachtags,
  verifyTagUnique,
  ErrorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hachtags,
  verifyValidTags,
  ErrorText.INVALID_HASHTAG,
  1,
  true
);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

fileField.addEventListener('change', onUploadInputChange);
buttonCansel.addEventListener('click', onUploadInputClick);
