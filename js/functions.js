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

let checkTime = (startDay, endDay, startMeeting, lengthMeeting) => {
  let arrStartDay = startDay.split(':');
  let minutesStartDay = Number(arrStartDay[0]) * 60 + Number(arrStartDay[1]);

  let arrEndDay = endDay.split(':');
  let minutesEndDay = Number(arrEndDay[0]) * 60 + Number(arrEndDay[1]);

  let arrStartMeeting = startMeeting.split(':');
  let minutesStartMeeting = Number(arrStartMeeting[0]) * 60 + Number(arrStartMeeting[1]);

  let lengthDay = minutesEndDay - minutesStartDay;

  let endMeeting = minutesStartMeeting + lengthMeeting;

  if (lengthDay < lengthMeeting) {
    return false;
  }
  if (minutesStartDay <= minutesStartMeeting && minutesEndDay >= endMeeting) {
    return true;
  } else {
    return false;
  }
};

// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false

checkTime('8:00', '17:30', '14:00', 90);
