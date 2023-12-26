/* eslint-disable no-console */
// Проверка на палиндром
const isPalindrome = (word) => {
  const tempWord = word.toLowerCase().replaceAll(' ', '');
  let palindrome = '';
  for (let i = tempWord.length - 1; i >= 0; i--) {
    palindrome += tempWord.at(i);
  }

  return tempWord === palindrome;
};

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

// Извлекает числа из строки
const getNumbers = (string) => {
  string += '';
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string.at(i))) {
      number += string.at(i);
    }
  }
  number = number.replaceAll(' ', '');

  switch (number === '') {
    case true:
      return NaN;

    case false:
      return +number;
  }
};

console.log(getNumbers('2023 год')); // 2023
console.log(getNumbers('ECMAScript 2022')); // 2022
console.log(getNumbers('1 кефир, 0.5 батона')); // 105
console.log(getNumbers('агент 007')); // 7
console.log(getNumbers('а я томат')); // NaN
console.log(getNumbers(2023)); // 2023
console.log(getNumbers(-1)); // 1
console.log(getNumbers(1.5)); // 15


// Добавляет символы в начале строки
const padString = (string, minLength, pad) => {
  const compensation = minLength - string.length;

  if (compensation <= 0) {
    return string;
  }

  return pad.slice(0, compensation % pad.length) + pad.repeat(compensation / pad.length) + string;
};

console.log(padString('1', 2, '0')); // '01'
console.log(padString('1', 4, '0')); // '0001'
console.log(padString('q', 4, 'werty')); // 'werq'
console.log(padString('q', 4, 'we')); // 'wweq'
console.log(padString('qwerty', 4, '0')); // 'qwerty'

// Проверяет длину строки
const checkStringLength = (string, length) => (string.length <= length);

console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false
