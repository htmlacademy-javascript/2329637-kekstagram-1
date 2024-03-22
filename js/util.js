/**
 * Функция для проверки нажатия клавиши Escape. Возвращает true, если была нажата клавиша Escape
 * @param evt
 * @returns {boolean}
 */
export const isEscapeKey = (evt) => evt.key === 'Escape';

/**
 * Функция создаёт задержку выполнения переданной функции callback до тех пор, пока не пройдёт timeoutDelay времени без повторых вызовов
 * @param callback
 * @param timeoutDelay
 * @returns {(function(...[*]): void)|*}
 */
export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
