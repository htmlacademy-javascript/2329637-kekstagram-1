import {isEscapeKey} from './util.js';

const templateMessageSuccessModal = document
  .querySelector('#success')
  .content
  .querySelector('.success');

const templateMessageErrorModal = document
  .querySelector('#error')
  .content
  .querySelector('.error');

const showMessageModal = (template) => {
  const messageModal = template.cloneNode(true);
  const buttonClose = messageModal.querySelector('button');

  const closeModal = ()=>{
    document.body.removeChild(messageModal);
    removeEventListeners();
  };

  const onClickModalClose = (evt) => {
    if (evt.target === messageModal || evt.target === buttonClose) {
      closeModal();
    }
  };

  const onEscCloseModal = (evt) => {
    if (isEscapeKey(evt)) {
      closeModal();
    }
  };

  function removeEventListeners() {
    messageModal.removeEventListener('click', onClickModalClose);
    document.body.removeEventListener('keydown', onEscCloseModal);
  }

  messageModal.addEventListener('click', onClickModalClose);
  document.body.addEventListener('keydown', onEscCloseModal);

  document.body.appendChild(messageModal);
};

export const sendData = (onSuccess, formData) => {

  fetch(
    'https://28.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if(!response.ok) {
        throw new Error();
      } else {
        onSuccess();
        showMessageModal(templateMessageSuccessModal);
      }
    })
    .catch(() => {
      showMessageModal(templateMessageErrorModal);
    });
};
