import {EFFECT, EFFECT_TO_FILTER, OPTION_EFFECT_SLIDER} from './constants.js';
import {getPreview} from './scale.js';
import {DEFOULT_SCALE} from './constants.js';

const imageUpload = document.querySelector('.img-upload');
const sliderContainer = imageUpload.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider'); //слайдер
const effectElementContainer = imageUpload.querySelector('.effects__list'); //список эффектов
const previewPicture = imageUpload.querySelector('.img-upload__preview img');
const effectLevel = imageUpload.querySelector('.effect-level__value');
const defaultRadio = imageUpload.querySelector('#effect-none');

//функция для отрисовки эффекта
const renderEffect = ({style, unit}) => {
  previewPicture.style.filter = `${style}(${effectLevel.value}${unit})`;
};

//функция для настройки параметров слайдера
const getSlider = ({min, max, step}) => {
  noUiSlider.create(slider, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  slider.noUiSlider.on('update', () => {
    effectLevel.value = slider.noUiSlider.get(); //текущее значение слайдера
    renderEffect(EFFECT_TO_FILTER[document.querySelector('.effects__radio:checked').value]);
  });
};

const updateSlider = ({min, max, step}) => {
  slider.noUiSlider.updateOptions({
    range: {min, max},
    start: max,
    step,
  });
};

//вызывает стартовое значение слайдера
getSlider({min:0, max:100, step:1});

const resetImage = () => {
  previewPicture.style = '';
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const setDefaultEffect = () => {
  hideSlider();
  resetImage();
  getPreview(DEFOULT_SCALE);
};

const checkDefaultRadio = () => {
  defaultRadio.checked = true;
};

const resetEffect = () => {
  setDefaultEffect();
  checkDefaultRadio();
};

effectElementContainer.addEventListener('change', (evt) => {
  if (evt.target.value === EFFECT.DEFAULT) {
    setDefaultEffect();
  } else {
    showSlider();
    updateSlider(OPTION_EFFECT_SLIDER[evt.target.value]);
    renderEffect(EFFECT_TO_FILTER[evt.target.value]);
  }
});

export {resetEffect};
