// /* eslint-disable no-console */
// /**
//  * Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево
//  * @param word {string}
//  * @returns {boolean}
//  */
// const isPalindrome = (word) => {
//   const tempWord = word.toLowerCase().replaceAll(' ', '');
//   let palindrome = '';
//   for (let i = tempWord.length - 1; i >= 0; i--) {
//     palindrome += tempWord.at(i);
//   }
//
//   return tempWord === palindrome;
// };
//
// console.log(isPalindrome('топот')); // true
// console.log(isPalindrome('ДовОд')); // true
// console.log(isPalindrome('Кекс')); // false
// console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
//
// /**
//  * Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
//  * @param string {string|number}
//  * @returns {number}
//  */
// const getNumbers = (string) => {
//   string += '';
//   let number = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!Number.isNaN(Number(string.at(i)))) {
//       number += string.at(i);
//     }
//   }
//   number = number.replaceAll(' ', '');
//
//   return number === '' ? NaN : +number;
// };
//
// console.log(getNumbers('2023 год')); // 2023
// console.log(getNumbers('ECMAScript 2022')); // 2022
// console.log(getNumbers('1 кефир, 0.5 батона')); // 105
// console.log(getNumbers('агент 007')); // 7
// console.log(getNumbers('а я томат')); // NaN
// console.log(getNumbers(2023)); // 2023
// console.log(getNumbers(-1)); // 1
// console.log(getNumbers(1.5)); // 15
//
// /**
//  * Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
//  * @param string {string}
//  * @param minLength {number}
//  * @param pad {string}
//  * @returns {string}
//  */
// const padString = (string, minLength, pad) => {
//   const compensation = minLength - string.length;
//
//   return compensation <= 0 ? string : (pad.slice(0, compensation % pad.length) + pad.repeat(compensation / pad.length) + string);
// };
//
// console.log(padString('1', 2, '0')); // '01'
// console.log(padString('1', 4, '0')); // '0001'
// console.log(padString('q', 4, 'werty')); // 'werq'
// console.log(padString('q', 4, 'we')); // 'wweq'
// console.log(padString('qwerty', 4, '0')); // 'qwerty'
//
// /**
//  * Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.
//  * @param string {string}
//  * @param length {number}
//  * @returns {boolean}
//  */
// const checkStringLength = (string, length) => (string.length <= length);
//
// console.log(checkStringLength('проверяемая строка', 20)); // true
// console.log(checkStringLength('проверяемая строка', 18)); // true
// console.log(checkStringLength('проверяемая строка', 10)); // false
