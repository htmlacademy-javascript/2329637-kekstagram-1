import {isEscapeKey} from './util.js';
import {removeScaleControl, resetControlValue, scaleControl} from './scaleControl.js';
import {resetSlider} from './renderEffectSlider.js';
import {pristine} from './validateForm.js';

const effectValue = document.querySelector('.effect-level__value');
const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('#upload-select-image');
const uploadFile = imgUpload.querySelector('#upload-file');
const uploadCloseButton = imgUpload.querySelector('#upload-cancel');
const overlay = imgUpload.querySelector('.img-upload__overlay');

/**
 * Функция закрытия модального окна
 */
const closeModal = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  removeScaleControl();
  resetSlider();
  uploadForm.reset();
  pristine.reset();
};

/**
 * Функция закрывает модальное окно при клике на элемене с идентификатором '#upload-cancel'
 */
const onModalClose = () => {
  closeModal();
  uploadCloseButton.removeEventListener('click', onModalClose);
};

/**
 * Функция закрывает модальное окно при нажатии клавиши Escape
 * @param evt
 */
const onEscModalClose = (evt) => {
  if (isEscapeKey(evt)) {
    if (!evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
      closeModal();
      document.body.removeEventListener('click', onEscModalClose);
    }

    evt.stopPropagation();
  }
};

/**
 * Функция открывает модальное окно загрузки нового изображения
 */
export const renderModalForm = () => {
  uploadFile.addEventListener('change', () => {
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');

    uploadCloseButton.addEventListener('click', onModalClose);
    document.addEventListener('keydown', onEscModalClose);
    effectValue.value = '';
    resetControlValue();
    scaleControl();
  });
};
