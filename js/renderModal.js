import {renderComment} from './renderComment.js';
import {isEscapeKey} from './util.js';
import {commentsList} from './renderComment.js';

const bigPictureModal = document.querySelector('.big-picture');
const modalButtonClose = bigPictureModal.querySelector('.big-picture__cancel');
const likesCount = bigPictureModal.querySelector('.likes-count');
const socialCaption = bigPictureModal.querySelector('.social__caption');
const socialCommentCount = bigPictureModal.querySelector('.social__comment-count');
const commentsLoader = bigPictureModal.querySelector('.comments-loader');
const picture = bigPictureModal.querySelector('.big-picture__img').querySelector('img');

/**
 * Функция создаёт обработчик событий, который закрывает модальное окно при клике на элемене с классом 'big-picture__cancel'
 */
const onModalClose = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  modalButtonClose.removeEventListener('click', onModalClose);
};

/**
 * Функция создаёт обработчик событий, который закрывает модальное окно при нажатии клавиши Escape
 * @param evt
 */
const onEscModalClose = (evt) => {
  if (isEscapeKey(evt)) {
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscModalClose);
  }
};

/**
 * Функция отображает модальное окно с информацией на основе выбранной миниатюры
 * @param url {string}
 * @param comments {array}
 * @param likes {number}
 * @param description {string}
 */
export const renderModal = ({url, comments, likes, description}) => {
  bigPictureModal.classList.remove('hidden');
  modalButtonClose.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onEscModalClose);

  picture.src = url;
  socialCaption.textContent = description;
  likesCount.textContent = likes.toString();

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  commentsList.innerHTML = '';

  comments.forEach((item) => {
    renderComment(item);
  });
};
