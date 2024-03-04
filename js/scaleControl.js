import {imgUploadPreview} from './renderEffectSlider.js';

const scale = document.querySelector('.scale');
const controlValue = scale.querySelector('.scale__control--value');
const controlSmaller = scale.querySelector('.scale__control--smaller');
const controlBigger = scale.querySelector('.scale__control--bigger');
const controlStep = Number(controlValue.step);
let currentControlValue = parseInt(controlValue.value, 10);

/**
 * Функция устанавливает значение масштаба по умолчанию
 */
export const resetControlValue = () => {
  currentControlValue = 100;
};

/**
 * Функция изменяет масштаб при клике на величину changeValue
 * @param changeValue
 */
const onControlChange = (changeValue) => {

  if (currentControlValue + changeValue >= 25 &&
      currentControlValue + changeValue <= 100) {

    currentControlValue += changeValue;
    controlValue.value = `${currentControlValue}%`;
    imgUploadPreview.style.transform = `scale(${currentControlValue / 100})`;
  }
};
/**
 * Функция уменьшает масштаб на величину controlStep
 */
const controlSmallerHandler = () => onControlChange(-controlStep);
/**
 * Функция увеличивает масштаб на величину controlStep
 */
const controlBiggerHandler = () => onControlChange(controlStep);

/**
 * Функция добавляет обработчики событий на элементы управления масштабом
 */
export const scaleControl = () => {
  controlSmaller.addEventListener('click', controlSmallerHandler);
  controlBigger.addEventListener('click', controlBiggerHandler);
};

/**
 * Функция удаляет обработчики событий элементов управления масштаба
 */
export const removeScaleControl = () => {
  controlSmaller.removeEventListener('click', controlSmallerHandler);
  controlBigger.removeEventListener('click', controlBiggerHandler);
  imgUploadPreview.style.removeProperty('transform');
};
