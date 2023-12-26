// Проверка на палиндром
const isPalindrome = (word) => {
  const tempWord = word.toLowerCase().replaceAll(' ', '');
  let palindrome = '';
  for (let i = tempWord.length - 1; i >= 0; i--) {
    palindrome += tempWord.at(i);
  }

  return tempWord === palindrome;
}

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
}

// Добавляет символы в начале строки
const padString = (string, minLength, pad) => {
  const compensation = minLength - string.length;

  if (compensation <= 0) {
    return string;
  }

  return pad.slice(0, compensation % pad.length) + pad.repeat(compensation / pad.length) + string;
}

// Проверяет длину строки
const checkStringLength = (string, length) => (string.length <= length);

