const AMOUNT_PHOTO = 25;
const MIN_AMOUNT_LIKES = 15;
const MAX_AMOUNT_LIKES = 200;
const AMOUNT_AVATAR = 6;
const MAX_COMMENTS = 30;
const MIN_COMMENTS = 0;
const MAX_ID_COMMENTS = 999;
const COMMENTATORS_NAMES = ['Мария','Семен','Патриция','Гоша','Есения','Илья', 'Даня', 'Ева', 'Джон', 'Марфа'];
const COMMENTS_LINE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION = [
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

//функция для получения чисел по порядку
// const createIdGenerator = () => {
//   let lastGeneratedId = 0;
//   return () => {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// };

//функция для получения случайных чисел:
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция для получения рандомного элемента массива:
const getRandomArrayElement = (item) =>
  item[getRandomInteger(0, item.length - 1)];

//функция для получения рандомного уникального значения:
const getUniqueRandomInteger = (a, b) => {
  const arr = [];
  return function () {
    let flag = true;
    let randomInteger;
    while (flag) {
      randomInteger = getRandomInteger(a, b);
      if (!arr.includes(randomInteger)) {
        arr.push(randomInteger);
        flag = false;
        return randomInteger;
      }
    }
  };
};

const getCommentId = getUniqueRandomInteger(1, MAX_ID_COMMENTS);

//функция для сборки информации о комментариях:
const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AMOUNT_AVATAR)}.svg`,
  message: getRandomArrayElement(COMMENTS_LINE),
  name: getRandomArrayElement(COMMENTATORS_NAMES),
});

const getComments = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getComment());
  }
  return arr;
};

const getPhotoId = getUniqueRandomInteger(1, AMOUNT_PHOTO);
const getImageId = getUniqueRandomInteger(1, AMOUNT_PHOTO);

//функция для сборки данных о фото:
const getPhotoInfo = () =>({
  id: getPhotoId(),
  url: `photos/${getImageId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_AMOUNT_LIKES, MAX_AMOUNT_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotos = (n) => {
  const photos = [];
  for (let i = 0; i < n; i++) {
    photos.push(getPhotoInfo());
  }
  return photos;
};
console.log(getPhotos(AMOUNT_PHOTO));
