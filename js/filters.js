import { renderGallery } from "./gallery";
import { debounce } from "./utils";

const filtersElement = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const rundomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');

const FILTER_ENUM = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const MAX_RANDOM_FILTER = 10;

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));

const filterHandlers = {
  [FILTER_ENUM.DEFAULT]: (data) => data,

  [FILTER_ENUM.RANDOM]: (data) => {
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

  [FILTER_ENUM.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length)
};

const repaint = (evt, filter, data) => {
  const filterData = filterHandlers[filter](data);
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());

  renderGallery(filterData);

  const currentActiveElement = filterForm.querySelector('.img-filters__button--active');
  currentActiveElement.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');

};

const debounceRepaint = debounce(repaint);

const initFilter = (data) => {
  filtersElement.classList.remove('img-filters--inactive');
  defaultButton.addEventListener('click', (evt) => {
    debounceRepaint(evt, FILTER_ENUM.DEFAULT, data);
  });

  rundomButton.addEventListener('click', (evt) => {
    debounceRepaint(evt, FILTER_ENUM.RANDOM, data);
  });

  discussedButton.addEventListener('click', (evt) => {
    debounceRepaint(evt, FILTER_ENUM.DISCUSSED, data);
  });

};

export {initFilter};
