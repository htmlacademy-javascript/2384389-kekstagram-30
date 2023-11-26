import { REMOVE_MESSAGE_TIMEOUT } from './constants.js';

const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.appendChild(errorMessageElement);
  setTimeout(() => {
    errorMessageElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));

export { showErrorMessage, debounce, getRandomIndex };
