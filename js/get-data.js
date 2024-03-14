import {renderPosts} from './render-posts.js';

const errorDownload = document.querySelector('.error-download');
const errorDownloadTitle = errorDownload.querySelector('.error-download__title');
const closeErrorDownload = (evt) => {
  if (evt.target === errorDownload) {
    errorDownload.classList.add('hidden');
    errorDownload.removeEventListener('click', closeErrorDownload);
  }
};

const showErrorDownload = (message) => {
  errorDownload.classList.remove('hidden');
  errorDownloadTitle.textContent = message;
  errorDownload.addEventListener('click', closeErrorDownload);
};

export const getData = () => {
  fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          'При загрузке данных с сервер ' +
          'произошла ошибка, пожалуйста, обновите страницу'
        );
      }
      return response.json();
    })
    .then((data) => renderPosts(data))
    .catch((error) => {
      showErrorDownload(error.message);
    });
};
