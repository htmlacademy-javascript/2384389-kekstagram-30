export const MAX_HASHTAGS_COUNT = 5;
export const VALID_HASHTAG = /^#[a-zа-яё1-9]{1,19}$/i;
export const DEFAULT_SCALE = 100;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const CHENGE_STEP_SCALE = 25;
export const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
export const OtionEffectSlider = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};
export const EffectToFilter = {
  [Effect.DEFAULT]: {
    style: 'none',
    unit: '',
  },
  [Effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};
export const REMOVE_MESSAGE_TIMEOUT = 5000;
export const FILE_TYPES = ['jpeg', 'jpg', 'png'];
export const SubmytButtonCaption = {
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
export const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};
export const TextError = {
  GET: 'Не удалось загрузить данные. Попробуйте еще раз',
  POST: 'Не удалось отправить данные.',
};
export const ErrorText = {
  INVALID_HASHTAG: 'Введён неправильный хэш-тег',
  INVALID_HASHTAGS_COUNT: `Максимум ${MAX_HASHTAGS_COUNT} хэш-тэгов`,
  NOT_UNIQUE: 'Хэштеги не должны повторяться'
};
