export const AMOUNT_PHOTO = 25;
export const MIN_AMOUNT_LIKES = 15;
export const MAX_AMOUNT_LIKES = 200;
export const AMOUNT_AVATAR = 6;
export const MAX_COMMENTS = 30;
export const MIN_COMMENTS = 0;
export const MAX_ID_COMMENTS = 999;
export const COMMENTATORS_NAMES = ['Мария','Семен','Патриция','Гоша','Есения','Илья', 'Даня', 'Ева', 'Джон', 'Марфа'];
export const COMMENTS_LINE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
export const DESCRIPTION = [
  'Будь собой, никто не сможет сделать это лучше',
  'Твори, вдохновляйся, мечтай',
  'Путешествие – это та вещь, купив которую вы станете только богаче',
  'Нет оправдания лени, но я все еще ищу',
  'Это не мамины гены, это я',
  'Ваше время ограничено, не тратьте его, живя чужой жизнью — Стив Джобс',
  'Сделай любовь своим девизом',
  'Улыбайтесь шире, смейтесь чаще',
  'Будущее зависит от того, что вы делаете сегодня',
  'Путешествия украшают жизнь',
  'Раз в год отправляйся туда, где ты ещё ни разу не был',
  'Места, которые вы посещаете, изменяют вас',
];
export const MAX_HASHTAGS_COUNT = 5;
export const VALID_HASHTAG = /^#[a-zа-яё1-9]{1,19}$/i;

export const DEFOULT_SCALE = 100;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const CHENGE_STEP_SCALE = 25;

// export {
//   AMOUNT_PHOTO,
//   MIN_AMOUNT_LIKES,
//   MAX_AMOUNT_LIKES,
//   AMOUNT_AVATAR,
//   MAX_COMMENTS,
//   MIN_COMMENTS,
//   MAX_ID_COMMENTS,
//   COMMENTATORS_NAMES,
//   COMMENTS_LINE,
//   DESCRIPTION,
//   MAX_HASHTAGS_COUNT,
//   VALID_HASHTAG,
//   DEFOULT_SCALE,
//   MAX_SCALE,
//   MIN_SCALE,
//   CHENGE_STEP_SCALE
// };

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
export const FILTER_ENUM = {
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

// export {
//   EFFECT,
//   EFFECT_TO_FILTER,
//   OPTION_EFFECT_SLIDER,
//   REMOVE_MESSAGE_TIMEOUT,
//   FILE_TYPES,
//   SUBMIT_BUTTON_CARTION,
//   FILTER_ENUM,
//   MAX_RANDOM_FILTER,
//   COMMENTS_AMOUNT_SHOW,
// };
