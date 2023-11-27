import { resetEffect } from './effects.js';
import { isValid, resetValidation } from './validation.js';
import { sendData } from './api.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import { DEFAULT_SCALE, FILE_TYPES, SubmytButtonCaption } from './constants.js';
import { getPreview } from './scale.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonCancel = form.querySelector('.img-upload__cancel');
const imagePreview = document.querySelector('.img-upload__preview img');
const submitButton = form.querySelector('.img-upload__submit');
const effectsPreview = form.querySelectorAll('.effects__preview ');

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  if (isDisabled) {
    submitButton.textContent = SubmytButtonCaption.SUBMITTING;
  } else {
    submitButton.textContent = SubmytButtonCaption.IDLE;
  }
};

const openForm = () => {
  resetEffect();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  getPreview(DEFAULT_SCALE);
  addEventListenerEsc();
};

const closeForm = () => {
  form.reset();
  resetValidation();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileField.value = '';
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
  const fileImage = fileField.files[0];
  if (fileImage && isValidType(fileImage)) {
    imagePreview.src = URL.createObjectURL(fileImage);
    effectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url('${imagePreview.src}')`;
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

const sendForm = async (formElement) => {
  if (!isValid()) {
    return;
  }

  try {
    toggleSubmitButton(true);
    await sendData(new FormData(formElement));
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

fileField.addEventListener('change', onUploadInputChange);
buttonCancel.addEventListener('click', onUploadInputClick);
form.addEventListener('submit', onFormSubmit);

export { closeForm };
