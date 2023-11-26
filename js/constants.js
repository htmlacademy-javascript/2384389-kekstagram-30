export const MAX_HASHTAGS_COUNT = 5;
export const VALID_HASHTAG = /^#[a-zа-яё1-9]{1,19}$/i;
export const DEFAULT_SCALE = 100;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const CHENGE_STEP_SCALE = 25;
export const EFFECT = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
export const OPTION_EFFECT_SLIDER = {
  [EFFECT.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [  EFFECT.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [  EFFECT.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [  EFFECT.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [  EFFECT.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [  EFFECT.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};
export const EFFECT_TO_FILTER = {
  [  EFFECT.DEFAULT]: {
    style: 'none',
    unit: '',
  },
  [  EFFECT.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [  EFFECT.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [  EFFECT.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [  EFFECT.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [  EFFECT.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};
export const REMOVE_MESSAGE_TIMEOUT = 5000;
export const FILE_TYPES = ['jpeg', 'jpg', 'png'];
export const SUBMIT_BUTTON_CARTION = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Опубликовать',
};
export const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};
export const MAX_RANDOM_FILTER = 10;
export const COMMENTS_AMOUNT_SHOW = 5;
export const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';
export const SERVER_ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
};
export const TEXT_ERROR = {
  GET: 'Не удалось загрузить данные. Попробуйте еще раз',
  POST: 'Не удалось отправить данные.',
};
