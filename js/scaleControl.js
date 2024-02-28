const scale = document.querySelector('.scale');
const controlValue = scale.querySelector('.scale__control--value');
const controlSmaller = scale.querySelector('.scale__control--smaller');
const controlBigger = scale.querySelector('.scale__control--bigger');
let currentControlValue = parseInt(controlValue.value, 10);

export const resetControlValue = () => {
  currentControlValue = 100;
};

const onControlValueIncrement = () => {
  if ((currentControlValue + 25) <= 100) {
    currentControlValue += 25;
    controlValue.value = `${currentControlValue}%`;
  }
};

const onControlValueDecrement = () => {
  if ((currentControlValue - 25) >= 25) {
    currentControlValue -= 25;
    controlValue.value = `${currentControlValue}%`;
  }
};

export const scaleControl = () => {
  controlSmaller.addEventListener('click', onControlValueDecrement);
  controlBigger.addEventListener('click', onControlValueIncrement);
};

export const removeScaleControl = () => {
  controlSmaller.removeEventListener('click', onControlValueDecrement);
  controlBigger.removeEventListener('click', onControlValueIncrement);
};
