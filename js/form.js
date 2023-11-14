const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const body = form.querySelector('body');
const buttonCansel = form.querySelector('.img-upload__cancel');


// const pristine = new Pristine(form, {
//   classTo: 'img-upload__field-wrapper',
//   errorClass: 'img-upload__field-wrapper--error',
//   errorTextParent: 'img-upload__field-wrapper',
// });


const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileField.value = '';
};

const onUploadInputChange = () => {
  openForm();
};

const onUploadInputClick = () => {
  closeForm();
};

fileField.addEventListener('change', onUploadInputChange);
buttonCansel.addEventListener('click', onUploadInputClick);
