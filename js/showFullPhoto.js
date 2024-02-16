import {bigPictureModal} from './util.js';
import {modalButtonClose} from './util.js';
import {modalClose} from './util.js';

const pictures = document.querySelector('.pictures');

export const addAddListenerModalOpen = () => {
  pictures.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      evt.preventDefault();
      bigPictureModal.classList.remove('hidden');
      modalButtonClose.addEventListener('click', modalClose);

      const picture = bigPictureModal.querySelector('.big-picture__img').querySelector('img');
      const likesCount = bigPictureModal.querySelector('.likes-count');

      picture.src = evt.target.src;
      picture.alt = evt.target.alt;
      likesCount.textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
    }
  });
};
