const FilterEffect = {
  chrome: {
    className: 'effects__preview--chrome',
    effect: 'grayscale', //(0..1), step = 0.1
    unit: '',
    updateOption: {
      range: {
        min: 0,
        max: 1,
      },
      connect: 'lower',
      start: 1,
      step: 0.1,
    },
  },

  sepia: {
    className: 'effects__preview--sepia',
    effect: 'sepia', //(0..1), step = 0.1
    unit: '',
    updateOption: {
      range: {
        min: 0,
        max: 1,
      },
      connect: 'lower',
      start: 1,
      step: 0.1,
    },
  },

  marvin: {
    className: 'effects__preview--marvin',
    effect: 'invert', //(0..100%), step = 1%
    unit: '%',
    updateOption: {
      range: {
        min: 0,
        max: 100,
      },
      connect: 'lower',
      start: 100,
      step: 1,
    },
  },

  phobos: {
    className: 'effects__preview--phobos',
    effect: 'blur', //(0..3px), step = 0.1px
    unit: 'px',
    updateOption: {
      range: {
        min: 0,
        max: 3,
      },
      connect: 'lower',
      start: 3,
      step: 0.1,
    },
  },

  heat: {
    className: 'effects__preview--heat',
    effect: 'brightness', //(1..3), step = 0.1
    unit: '',
    updateOption: {
      range: {
        min: 1,
        max: 3,
      },
      connect: 'lower',
      start: 3,
      step: 0.1,
    },
  },
};

const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const uploadSelectImage = document.querySelector('#upload-select-image');

let currentFilterClass;
let currentFilterEffect;
let currentFilterUnit;

/**
 * Функция удаляет классы фильтров, сбрасывает значение слайдера и скрывает его
 */
export const resetSlider = () => {
  imgUploadPreview.classList.remove(currentFilterClass);
  imgUploadPreview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  effectValue.value = '';
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
    currentFilterClass = FilterEffect[evt.target.value].className;
    currentFilterEffect = FilterEffect[evt.target.value].effect;
    currentFilterUnit = FilterEffect[evt.target.value].unit;
    imgUploadPreview.classList.add(currentFilterClass);
  };

  uploadSelectImage.addEventListener('change', (evt) => {
    if (evt.target.type === 'radio') {
      if (evt.target.value === 'none') {
        resetSlider();
      } else {
        changeEffectClass(evt);
        effectSlider.noUiSlider.updateOptions(FilterEffect[evt.target.value].updateOption);
      }
    }
  });

  effectSlider.noUiSlider.on('update', () => {
    effectValue.value = effectSlider.noUiSlider.get();
    imgUploadPreview.style.filter = `${currentFilterEffect}(${effectValue.value}${currentFilterUnit})`;
  });
};

