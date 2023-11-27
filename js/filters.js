import { renderGallery } from './gallery.js';
import { debounce, getRandomIndex } from './utils.js';
import { FilterEnum, MAX_RANDOM_FILTER } from './constants.js';

const filtersElement = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const rundomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');

const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,

  [FilterEnum.RANDOM]: (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while(randomIndexList.length < max) {
      const index = getRandomIndex(0, data.length);
      if(!randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },

  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length)
};

const setActiveButton = (evt) => {
  const currentActiveElement = filterForm.querySelector('.img-filters__button--active');
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
  if (evt.target === defaultButton) {
    debounceRepaint(FilterEnum.DEFAULT, data);
  } else if (evt.target === rundomButton) {
    debounceRepaint(FilterEnum.RANDOM, data);
  } else if (evt.target === discussedButton) {
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
