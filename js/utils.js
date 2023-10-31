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

export {getRandomInteger, getRandomArrayElement, getUniqueRandomInteger};
