import { resetEffect } from './effects.js';
import { isValid, resetValidation } from './validation.js';
import { sendData } from './api.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import { DEFAULT_SCALE, FILE_TYPES, SubmytButtonCaption } from './constants.js';
import { getPreview } from './scale.js';

const formElement = document.querySelector('.img-upload__form');
const fileFieldElement = formElement.querySelector('.img-upload__input');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const buttonCancelElement = formElement.querySelector('.img-upload__cancel');
const imagePreviewElement = document.querySelector('.img-upload__preview img');
const submitButtonElement = formElement.querySelector('.img-upload__submit');
const effectsPreviewElement = formElement.querySelectorAll('.effects__preview ');

const toggleSubmitButton = (isDisabled) => {
  submitButtonElement.disabled = isDisabled;
  if (isDisabled) {
    submitButtonElement.textContent = SubmytButtonCaption.SUBMITTING;
  } else {
    submitButtonElement.textContent = SubmytButtonCaption.IDLE;
  }
};

const openForm = () => {
  resetEffect();
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  getPreview(DEFAULT_SCALE);
  addEventListenerEsc();
};

const closeForm = () => {
  formElement.reset();
  resetValidation();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  fileFieldElement.value = '';
  removeEventListenerEsc();
};

const isErrorMessegeExists = () => Boolean(document.querySelector('.error'));

const onDocumentEscKeydown = (evt) => {
  if (evt.target.name !== 'hashtags' && evt.target.name !== 'description' && !isErrorMessegeExists()) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeForm();
    }
  }
};

function addEventListenerEsc () {
  document.addEventListener('keydown', onDocumentEscKeydown);
}

function removeEventListenerEsc () {
  document.removeEventListener('keydown', onDocumentEscKeydown);
}

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const renderImageModal = () => {
  const fileImage = fileFieldElement.files[0];
  if (fileImage && isValidType(fileImage)) {
    imagePreviewElement.src = URL.createObjectURL(fileImage);
    effectsPreviewElement.forEach((preview) => {
      preview.style.backgroundImage = `url('${imagePreviewElement.src}')`;
    });
  }
};

const onUploadInputChange = () => {
  renderImageModal();
  openForm();
};

const onUploadInputClick = () => {
  closeForm();
};

const sendForm = async (formItem) => {
  if (!isValid()) {
    return;
  }

  try {
    toggleSubmitButton(true);
    await sendData(new FormData(formItem));
    toggleSubmitButton(false);
    showSuccessMessage();
    closeForm();
  } catch {
    toggleSubmitButton(false);
    showErrorMessage();
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

fileFieldElement.addEventListener('change', onUploadInputChange);
buttonCancelElement.addEventListener('click', onUploadInputClick);
formElement.addEventListener('submit', onFormSubmit);

export { closeForm };
