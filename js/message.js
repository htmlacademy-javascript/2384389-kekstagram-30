const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const arrorMessageElement = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onDocumentClick);
};

const onCloseButtonClick = () => {
  hideMessage();

};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();

};

const showMessage = (element, buttonClass) => {
  document.body.append(element);
  element.querySelector(buttonClass).addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onDocumentClick);
};

const showSuccessMessage = () => {
  showMessage(successMessageElement, '.success__button');
};

const showErrorMessage = () => {
  showMessage(arrorMessageElement, '.error__button');
};

export {showSuccessMessage, showErrorMessage};

