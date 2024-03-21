const imgUploadPreview = document.querySelector('.img-upload__preview');
const scale = document.querySelector('.scale');
const controlValue = scale.querySelector('.scale__control--value');
const controlSmaller = scale.querySelector('.scale__control--smaller');
const controlBigger = scale.querySelector('.scale__control--bigger');
const CONTROL_STEP = 25;
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
const updateControlValue = (changeValue) => {

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
const onControlSmaller = () => updateControlValue(-CONTROL_STEP);
/**
 * Функция увеличивает масштаб на величину controlStep
 */
const onControlBigger = () => updateControlValue(CONTROL_STEP);

/**
 * Функция добавляет обработчики событий на элементы управления масштабом
 */
export const addScaleControlListeners = () => {
  controlSmaller.addEventListener('click', onControlSmaller);
  controlBigger.addEventListener('click', onControlBigger);
};

/**
 * Функция удаляет обработчики событий элементов управления масштаба
 */
export const removeScaleControlListeners = () => {
  controlSmaller.removeEventListener('click', onControlSmaller);
  controlBigger.removeEventListener('click', onControlBigger);
  imgUploadPreview.style.removeProperty('transform');
};
