import { Effect, EffectToFilter, OtionEffectSlider } from './constants.js';

const imageUploadElement = document.querySelector('.img-upload');
const sliderContainerElement = imageUploadElement.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainerElement.querySelector('.effect-level__slider');
const effectContainerElement = imageUploadElement.querySelector('.effects__list');
const previewPictureElement = imageUploadElement.querySelector('.img-upload__preview img');
const effectLevelElement = imageUploadElement.querySelector('.effect-level__value');
const defaultRadioElement = imageUploadElement.querySelector('#effect-none');

const renderEffect = ({style, unit}) => {
  previewPictureElement.style.filter = `${style}(${effectLevelElement.value}${unit})`;
};

const getSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', () => {
    effectLevelElement.value = sliderElement.noUiSlider.get();
    renderEffect(EffectToFilter[document.querySelector('.effects__radio:checked').value]);
  });
};

const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    start: max,
    step,
  });
};

getSlider({min:0, max:100, step:1});

const resetImage = () => {
  previewPictureElement.style.filter = '';
};

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const setDefaultEffect = () => {
  hideSlider();
  resetImage();
};

const checkDefaultRadio = () => {
  defaultRadioElement.checked = true;
};

const resetEffect = () => {
  setDefaultEffect();
  checkDefaultRadio();
};

effectContainerElement.addEventListener('change', (evt) => {
  if (evt.target.value === Effect.DEFAULT) {
    setDefaultEffect();
  } else {
    showSlider();
    updateSlider(OtionEffectSlider[evt.target.value]);
    renderEffect(EffectToFilter[evt.target.value]);
  }
});

export { resetEffect };
