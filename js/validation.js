import { MAX_HASHTAGS_COUNT, VALID_HASHTAG, ErrorText } from './constants.js';

const formElement = document.querySelector('.img-upload__form');
const hachtagElement = formElement.querySelector('.text__hashtags');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const normalizeHashtags = (stringTags) => stringTags.trim().split(' ').filter(Boolean);

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
  hachtagElement,
  verifyTagsCount,
  ErrorText.INVALID_HASHTAGS_COUNT,
  3,
  true
);

pristine.addValidator(
  hachtagElement,
  verifyTagUnique,
  ErrorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hachtagElement,
  verifyValidTags,
  ErrorText.INVALID_HASHTAG,
  1,
  true
);

const isValid = () => pristine.validate();

const resetValidation = () => pristine.reset();

export { isValid, resetValidation };
