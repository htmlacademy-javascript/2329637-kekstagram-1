import {userNames} from './data.js';

/**
 * Функция-замыкание для создания независимых идентификаторов
 * @param lastId
 * @returns {function(): number}
 */
const createIdGenerator = (lastId = 0) => () => ++lastId;

/**
 * Функция вычисляет случайное число в заданом диапазоне от 'a' до 'b'
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * Функция возвращает случайнай элемент массива
 * @param array
 * @returns {*}
 */
const getRandomArrayItem = (array) => array[getRandomInteger(0, userNames.length - 1)];

export {getRandomArrayItem};
export {createIdGenerator};
