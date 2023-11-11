// function checksStringLength(string, length) {
//   return string.length <= length;
// }

// checksStringLength('проверяемая строка', 20);
// checksStringLength('проверяемая строка', 18);
// checksStringLength('проверяемая строка', 10);

// function checksPalindrome(string) {
//   const newString = string.replaceAll(' ', '').toLowerCase();
//   for (let i = 0; i <= newString.length; i++) {
//     if (newString.at(i) !== newString.at(-i - 1)) {
//       return false;
//     }
//   }
//   return true;
// }

// checksPalindrome('топот');
// checksPalindrome('ДовОд');
// checksPalindrome('Кекс');
// checksPalindrome('Лёша на полке клопа нашёл ');

// function collectsNumbers(enteredString) {
//   const string = enteredString.toString();
//   let result = '';
//   for (let i = 0; i <= string.length; i++) {
//     if (!Number.isNaN(parseInt(string[i], 10))) {
//       result += string[i];
//     }
//   }
//   return parseInt(result, 10);
// }

// collectsNumbers('2023 год');
// collectsNumbers('ECMAScript 2022');
// collectsNumbers('1 кефир, 0.5 батона');
// collectsNumbers('агент 007');
// collectsNumbers('а я томат');

//

const getMinutes = function (data) {
  let arr = data.split(':');
  let minutes = Number(arr[0]) * 60 + Number(arr[1]);
  return minutes;
};

let checkTime = (startDay, endDay, startMeeting, lengthMeeting) => {
  let minutesStartDay = getMinutes(startDay);
  let minutesEndDay = getMinutes(endDay);
  let minutesStartMeeting = getMinutes(startMeeting);
  let endMeeting = minutesStartMeeting + lengthMeeting;

  if (minutesStartDay <= minutesStartMeeting && minutesEndDay >= endMeeting) {
    return true;
  }
  return false;
};

console.log(checkTime('08:00', '17:30', '14:00', 90)); // true
console.log(checkTime('8:0', '10:0', '8:0', 120)); // true
console.log(checkTime('08:00', '14:30', '14:00', 90)); // false
console.log(checkTime('14:00', '17:30', '08:0', 90)); // false
console.log(checkTime('8:00', '17:30', '08:00', 900)); // false
