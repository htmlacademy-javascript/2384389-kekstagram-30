import {resetEffect} from './effects.js';
import {isValid, resetValidation} from './validation.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const body = form.querySelector('body');
const buttonCansel = form.querySelector('.img-upload__cancel');
const imagePreview = document.querySelector('.img-upload__preview img');

const openForm = () => {
  resetEffect();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeForm = () => {
  form.reset();
  resetValidation();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileField.value = '';
  removeEventListenerEsc();
};

const onDocumentEscKeydown = (evt) => {
  if (evt.target.name !== 'hashtags' && evt.target.name !== 'description') {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeForm();
    }
  }
};

document.addEventListener('keydown', onDocumentEscKeydown);

const removeEventListenerEsc = () => {
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

const renderImageModal = () => {
  const fileImage = fileField.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
};

const onUploadInputChange = () => {
  renderImageModal();
  openForm();
};

const onUploadInputClick = () => {
  closeForm();
};

form.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

fileField.addEventListener('change', onUploadInputChange);
buttonCansel.addEventListener('click', onUploadInputClick);
