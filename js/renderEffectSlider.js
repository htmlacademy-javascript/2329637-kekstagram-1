import {FILTER_EFFECTS} from './data.js';

const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
export const imgUploadPreview = document.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const effectsList = document.querySelector('.effects__list');
export const originalEffectRadio = effectsList.querySelector('#effect-none');
const chromeEffectRadio = effectsList.querySelector('#effect-chrome');
const sepiaEffectRadio = effectsList.querySelector('#effect-sepia');
const marvinEffectRadio = effectsList.querySelector('#effect-marvin');
const phobosEffectRadio = effectsList.querySelector('#effect-phobos');
const heatEffectRadio = effectsList.querySelector('#effect-heat');

let currentFilterClass;
let currentFilterEffect;
let currentFilterUnit;

/**
 * Функция удаляет классы фильтров, сбрасывает значение слайдера и скрывает его
 */
export const resetSlide = () => {
  imgUploadPreview.classList.remove(currentFilterClass);
  imgUploadPreview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
};

/**
 * Функция добавляет слайдер эффектов
 */
export const renderEffectSlider = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    connect: 'lower',
    start: 100,
  });

  /**
   * Функция для смены эффектов фотографии
   * @param evt
   */
  const changeEffectClass = (evt) => {
    sliderContainer.classList.remove('hidden');
    imgUploadPreview.classList.remove(currentFilterClass);
    currentFilterClass = FILTER_EFFECTS[evt.target.value].className;
    currentFilterEffect = FILTER_EFFECTS[evt.target.value].effect;
    currentFilterUnit = FILTER_EFFECTS[evt.target.value].unit;
    imgUploadPreview.classList.add(currentFilterClass);
  };

  effectSlider.noUiSlider.on('update', () => {
    effectValue.value = effectSlider.noUiSlider.get();
    imgUploadPreview.style.filter = `${currentFilterEffect}(${effectValue.value}${currentFilterUnit})`;
  });

  chromeEffectRadio.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      changeEffectClass(evt);
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        connect: 'lower',
        start: 1,
        step: 0.1,
      });
    }
  });

  sepiaEffectRadio.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      changeEffectClass(evt);
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        connect: 'lower',
        start: 1,
        step: 0.1,
      });
    }
  });

  marvinEffectRadio.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      changeEffectClass(evt);
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        connect: 'lower',
        start: 100,
        step: 1,
      });
    }
  });

  phobosEffectRadio.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      changeEffectClass(evt);
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        connect: 'lower',
        start: 3,
        step: 0.1,
      });
    }
  });

  heatEffectRadio.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      changeEffectClass(evt);
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        connect: 'lower',
        start: 3,
        step: 0.1,
      });
    }
  });

  originalEffectRadio.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      resetSlide();
    }
  });
};

