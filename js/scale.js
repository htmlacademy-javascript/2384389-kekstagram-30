import {
  MAX_SCALE,
  MIN_SCALE,
  CHENGE_STEP_SCALE
} from './constants.js';

const scaleElement = document.querySelector('.img-upload__scale');
const scaleButtonSmallerElement = scaleElement.querySelector('.scale__control--smaller');
const scaleButtonBiggerElement = scaleElement.querySelector('.scale__control--bigger');
const scaleControlValueElement = scaleElement.querySelector('.scale__control--value');
const previewPictureElement = document.querySelector('.img-upload__preview img');

const getPreview = (value) => {
  scaleControlValueElement.value = `${value}%`;
  previewPictureElement.style.transform = `scale(${value / 100})`;
};

const enlargeScale = () => {
  if (parseInt(scaleControlValueElement.value, 10) < MAX_SCALE) {
    const newValueScale = parseInt(scaleControlValueElement.value, 10) + CHENGE_STEP_SCALE;
    getPreview(newValueScale);
  }
};

const lowerScale = () => {
  if (parseInt(scaleControlValueElement.value, 10) > MIN_SCALE) {
    const newValueScale = parseInt(scaleControlValueElement.value, 10) - CHENGE_STEP_SCALE;
    getPreview(newValueScale);
  }
};

const onButtonBiggerClick = () => {
  enlargeScale();
};

const onButtonSmallerClick = () => {
  lowerScale();
};

scaleButtonBiggerElement.addEventListener('click', onButtonBiggerClick);
scaleButtonSmallerElement.addEventListener('click', onButtonSmallerClick);

export { getPreview };
