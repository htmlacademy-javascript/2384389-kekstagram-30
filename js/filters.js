import { renderGallery } from './gallery.js';
import { debounce, getRandomIndex } from './utils.js';
import { FilterEnum, MAX_RANDOM_FILTER } from './constants.js';

const filtersElement = document.querySelector('.img-filters');
const filterFormElement = document.querySelector('.img-filters__form');
const defaultButtonElement = filterFormElement.querySelector('#filter-default');
const randomButtonElement = filterFormElement.querySelector('#filter-random');
const discussedButtonElement = filterFormElement.querySelector('#filter-discussed');

const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,

  [FilterEnum.RANDOM]: (data) => {
    const randomPhotos = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while(randomPhotos.length < max) {
      const index = getRandomIndex(0, data.length);
      if(!randomPhotos.includes(index)) {
        randomPhotos.push(index);
      }
    }
    return randomPhotos.map((index) => data[index]);
  },

  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length)
};

const setActiveButton = (evt) => {
  const currentActiveElement = filterFormElement.querySelector('.img-filters__button--active');
  currentActiveElement.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const repaint = (filter, data) => {
  const filterData = filterHandlers[filter](data);
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
  renderGallery(filterData);
};

const debounceRepaint = debounce(repaint);

const onButtonClick = (evt, data) => {
  setActiveButton(evt);
  if (evt.target === defaultButtonElement) {
    debounceRepaint(FilterEnum.DEFAULT, data);
  } else if (evt.target === randomButtonElement) {
    debounceRepaint(FilterEnum.RANDOM, data);
  } else if (evt.target === discussedButtonElement) {
    debounceRepaint(FilterEnum.DISCUSSED, data);
  }
};

const initFilter = (data) => {
  filtersElement.classList.remove('img-filters--inactive');
  filtersElement.addEventListener('click', (evt) => {
    onButtonClick(evt, data);
  });
};

export { initFilter };
