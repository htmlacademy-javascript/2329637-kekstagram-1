import {isEscapeKey} from './util.js';

const templateMessageSuccessModal = document
  .querySelector('#success')
  .content
  .querySelector('.success');
const messageSuccessModal = templateMessageSuccessModal.cloneNode(true);
const buttonCloseSuccess = messageSuccessModal.querySelector('.success__button');

const templateMessageErrorModal = document
  .querySelector('#error')
  .content
  .querySelector('.error');
const messageErrorModal = templateMessageErrorModal.cloneNode(true);
const buttonCloseError = messageErrorModal.querySelector('.error__button');

const onCloseSuccess = (evt) => {
  if (evt.target === messageSuccessModal || evt.target === buttonCloseSuccess) {
    messageSuccessModal.removeEventListener('click', onCloseSuccess);
    document.body.removeChild(messageSuccessModal);
  }
};

const onEscCloseSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    document.body.removeEventListener('keydown', onEscCloseSuccess);
    document.body.removeChild(messageSuccessModal);
  }
};

const showMessageSuccess = () => {
  messageSuccessModal.addEventListener('click', onCloseSuccess);
  document.body.addEventListener('keydown', onEscCloseSuccess);

  document.body.appendChild(messageSuccessModal);
};

const onCloseError = (evt) => {
  if (evt.target === messageErrorModal || evt.target === buttonCloseError) {
    messageErrorModal.removeEventListener('click', onCloseError);
    document.body.removeChild(messageErrorModal);
  }
};

const onEscCloseError = (evt) => {
  if (isEscapeKey(evt)) {
    document.body.removeEventListener('keydown', onEscCloseError);
    document.body.removeChild(messageErrorModal);
  }
};

const showMessageError = () => {
  messageErrorModal.addEventListener('click', onCloseError);
  document.body.addEventListener('keydown', onEscCloseError);

  document.body.appendChild(messageErrorModal);
};

// const showMessageModal = (template) => {
//   const messageModal = template.cloneNode(true);
//   const buttonClose = messageModal.querySelector('button');
//
//   const closeModal = () => {
//     document.body.removeChild(messageModal);
//     removeEventListeners();
//   };
//
//
//   const onCloseModal = (evt) => {
//     if (evt.target === messageModal || evt.target === buttonClose) {
//       closeModal();
//     }
//   };
//
//   const onEscCloseModal = (evt) => {
//     if (isEscapeKey(evt)) {
//       closeModal();
//     }
//   };
//   const removeEventListeners = () => {
//     messageModal.removeEventListener('click', onCloseModal);
//     document.body.removeEventListener('keydown', onEscCloseModal);
//   };
//
//   messageModal.addEventListener('click', onCloseModal);
//   document.body.addEventListener('keydown', onEscCloseModal);
//
//   document.body.appendChild(messageModal);
// };

export const sendData = (onSuccess, formData) => {

  fetch(
    'https://28.javascript.htmlacademy.pro/kekstagra',
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
        showMessageSuccess();
        // showMessageModal(templateMessageSuccessModal);
      }
    })
    .catch(() => {
      showMessageError();
      // showMessageModal(templateMessageErrorModal)
    });
};
