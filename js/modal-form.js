import {isEscapeKey} from './util.js';
import {removeScaleControlListeners, resetControlValue, addScaleControlListeners} from './scale-control.js';
import {initEffectSlider, resetSlider} from './effect-slider.js';
import {resetForm, validateForm} from './validate.js';
import {sendData} from './send-data.js';

const effectValue = document.querySelector('.effect-level__value');
const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('#upload-select-image');
const uploadFile = imgUpload.querySelector('#upload-file');
const uploadCloseButton = imgUpload.querySelector('#upload-cancel');
const overlay = imgUpload.querySelector('.img-upload__overlay');

/**
 * Функция закрывает модальное окно при клике на элемене с идентификатором '#upload-cancel'
 */
const onClickModalClose = () => {
  closeModal();
};

/**
 * Функция закрывает модальное окно при нажатии клавиши Escape
 * @param evt
 */
const onEscModalClose = (evt) => {
  if (isEscapeKey(evt)) {
    const errorModal = document.querySelector('.error');
    if (!errorModal) {
      if (!evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
        closeModal();
      }
    }
  }
};

/**
 * Функция закрытия модального окна
 */
function closeModal() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  removeScaleControlListeners();
  resetSlider();
  uploadForm.reset();
  resetForm();
  uploadCloseButton.removeEventListener('click', onClickModalClose);
  document.body.removeEventListener('keydown', onEscModalClose);
}

const setModalFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      const formData = new FormData(evt.target);

      sendData(onSuccess, formData);
    }
  });
};

/**
 * Функция инициализирует модальное окно загрузки нового изображения
 */
export const initModalForm = () => {
  uploadFile.addEventListener('change', () => {
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');

    uploadCloseButton.addEventListener('click', onClickModalClose);
    document.body.addEventListener('keydown', onEscModalClose);
    effectValue.value = '';
    resetControlValue();
    addScaleControlListeners();
  });

  setModalFormSubmit(closeModal);

  initEffectSlider();
};

