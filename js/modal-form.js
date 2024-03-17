import {removeScaleControlListeners, resetControlValue, addScaleControlListeners} from './scale-control.js';
import {initEffectSlider, resetSlider} from './effect-slider.js';
import {resetForm, validateForm} from './validate.js';
import {sendData} from './api.js';
import {addHandler, removeHandler} from './event-dispatcher.js';
import {showMessageModal, templateMessageSuccessModal, templateMessageErrorModal} from './alert-modals.js';

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
  removeHandler(closeModal);
}

const setModalFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      const formData = new FormData(evt.target);

      sendData(formData)
        .then(() => {
          onSuccess();
          showMessageModal(templateMessageSuccessModal);
        })
        .catch(() => {
          showMessageModal(templateMessageErrorModal);
        });
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
    effectValue.value = '';
    resetControlValue();
    addScaleControlListeners();
    addHandler(closeModal);
  });
  setModalFormSubmit(closeModal);

  initEffectSlider();
};

