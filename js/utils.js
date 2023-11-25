// //функция для получения чисел по порядку
// // const createIdGenerator = () => {
// //   let lastGeneratedId = 0;
// //   return () => {
// //     lastGeneratedId += 1;
// //     return lastGeneratedId;
// //   };
// // };

// //функция для получения случайных чисел:
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// //функция для получения рандомного элемента массива:
// const getRandomArrayElement = (item) =>
//   item[getRandomInteger(0, item.length - 1)];

// //функция для получения рандомного уникального значения:
// const getUniqueRandomInteger = (a, b) => {
//   const arr = [];
//   return function () {
//     let flag = true;
//     let randomInteger;
//     while (flag) {
//       randomInteger = getRandomInteger(a, b);
//       if (!arr.includes(randomInteger)) {
//         arr.push(randomInteger);
//         flag = false;
//         return randomInteger;
//       }
//     }
//   };
// };

// export { getRandomInteger, getRandomArrayElement, getUniqueRandomInteger };
import {REMOVE_MESSAGE_TIMEOUT} from './constants.js';

const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.appendChild(errorMessageElement);

  setTimeout(() => {
    errorMessageElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}


export {showErrorMessage, debounce};
