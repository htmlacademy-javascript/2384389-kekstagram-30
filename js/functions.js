function checksStringLength(string, length) {
  return string.length <= length;
}

checksStringLength('проверяемая строка', 20);
checksStringLength('проверяемая строка', 18);
checksStringLength('проверяемая строка', 10);

function checksPalindrome(string) {
  const newString = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= newString.length; i++) {
    if (newString.at(i) !== newString.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

checksPalindrome('топот');
checksPalindrome('ДовОд');
checksPalindrome('Кекс');
checksPalindrome('Лёша на полке клопа нашёл ');

function collectsNumbers(enteredString) {
  const string = enteredString.toString();
  let result = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

collectsNumbers('2023 год');
collectsNumbers('ECMAScript 2022');
collectsNumbers('1 кефир, 0.5 батона');
collectsNumbers('агент 007');
collectsNumbers('а я томат');
