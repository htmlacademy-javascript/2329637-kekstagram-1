import {addHandler, removeHandler} from './event-dispatcher.js';

const errorDownload = document.querySelector('.error-download');
const errorDownloadTitle = errorDownload.querySelector('.error-download__title');

export const showErrorDownload = (message) => {
  const closeModal = () => {
    errorDownload.classList.add('hidden');
    errorDownload.removeEventListener('click', closeErrorDownload);
    removeHandler(closeModal);
  };
  function closeErrorDownload(evt) {
    if (evt.target === errorDownload) {
      closeModal();
    }
  }

  addHandler(closeModal);
  errorDownload.classList.remove('hidden');
  errorDownloadTitle.textContent = message;
  errorDownload.addEventListener('click', closeErrorDownload);
};

export const templateMessageSuccessModal = document
  .querySelector('#success')
  .content
  .querySelector('.success');

export const templateMessageErrorModal = document
  .querySelector('#error')
  .content
  .querySelector('.error');

export const showMessageModal = (template) => {
  const messageModal = template.cloneNode(true);
  const buttonClose = messageModal.querySelector('button');

  function onClickModalClose (evt) {
    if (evt.target === messageModal || evt.target === buttonClose) {
      closeModal();
    }
  }

  function closeModal () {
    removeHandler(closeModal);
    messageModal.removeEventListener('click', onClickModalClose);
    messageModal.remove();
  }

  messageModal.addEventListener('click', onClickModalClose);
  addHandler(closeModal);

  document.body.appendChild(messageModal);
};
