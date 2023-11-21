import {MAX_HASHTAGS_COUNT} from './constants.js';
import {VALID_HASHTAG} from './constants.js';
const form = document.querySelector('.img-upload__form');
const hachtags = form.querySelector('.text__hashtags');

const ErrorText = {
  INVALID_HASHTAG: 'Введён неправильный хэш-тег',
  INVALID_HASHTAGS_COUNT: `Максимум ${MAX_HASHTAGS_COUNT} хэш-тэгов`,
  NOT_UNIQUE: 'Хэштеги не должны повторяться'
};

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

const isValid = () => pristine.validate();

const resetValidation = () => pristine.reset();

export {isValid, resetValidation};
