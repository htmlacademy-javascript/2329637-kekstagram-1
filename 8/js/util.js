/**
 * Функция-замыкание для создания независимых идентификаторов
 * @param lastId
 * @returns {function(): number}
 */
export const createIdGenerator = (lastId = 0) => () => ++lastId;

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
export const getRandomArrayItem = (array) => array[getRandomInteger(0, array.length - 1)];

/**
 * Функция для проверки нажатия клавиши Escape. Возвращает true, если была нажата клавиша Escape
 * @param evt
 * @returns {boolean}
 */
export const isEscapeKey = (evt) => evt.key === 'Escape';
