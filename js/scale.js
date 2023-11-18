import {
  DEFOULT_SCALE,
  MAX_SCALE,
  MIN_SCALE,
  CHENGE_STEP_SCALE
} from './constants.js';

const scale = document.querySelector('.img-upload__scale');
const scaleButtonSmaller = scale.querySelector('.scale__control--smaller');
const scaleButtonBigger = scale.querySelector('.scale__control--bigger');
const scaleControlValue = scale.querySelector('.scale__control--value');
const previewPicture = document.querySelector('.img-upload__preview img');

const getPreview = (value) => {
  scaleControlValue.value = `${value}%`;
  previewPicture.style.transform = `scale(${value / 100})`;
};

const enlargeScale = () => {
  if (parseInt(scaleControlValue.value, 10) < MAX_SCALE) {
    const newValueScale = parseInt(scaleControlValue.value, 10) + CHENGE_STEP_SCALE;
    getPreview(newValueScale);
  }
};

const lowerScale = () => {
  if (parseInt(scaleControlValue.value, 10) > MIN_SCALE) {
    const newValueScale = parseInt(scaleControlValue.value, 10) - CHENGE_STEP_SCALE;
    getPreview(newValueScale);
  }
};

const onButtonBiggerClick = () => {
  enlargeScale();
};

const onButtonSmallerClick = () => {
  lowerScale();
};

getPreview(DEFOULT_SCALE);

scaleButtonBigger.addEventListener('click', onButtonBiggerClick);
scaleButtonSmaller.addEventListener('click', onButtonSmallerClick);
