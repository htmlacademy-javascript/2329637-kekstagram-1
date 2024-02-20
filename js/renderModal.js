import {renderComment} from './renderComment.js';
import {isEscapeKey} from './util.js';
import {commentsList} from './renderComment.js';

const bigPictureModal = document.querySelector('.big-picture');
const modalButtonClose = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const commentsCount = document.querySelector('.comments-count');
const socialCommentsCount = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');
const commentsLoaderButton = document.querySelector('.comments-loader');
const picture = document.querySelector('.big-picture__img').querySelector('img');
let numberOfComments = 5;
let allCommentsCount = 0;
let commentsArray = [];

/**
 * Функция создаёт обработчик событий, который закрывает модальное окно при клике на элемене с классом 'big-picture__cancel'
 */
const onModalClose = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  modalButtonClose.removeEventListener('click', onModalClose);
  numberOfComments = 5;
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
    numberOfComments = 5;
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

  allCommentsCount = commentsCount.textContent = comments.length.toString();
  commentsArray = comments.slice();

  bigPictureModal.classList.remove('hidden');
  modalButtonClose.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onEscModalClose);
  picture.src = url;
  socialCaption.textContent = description;
  likesCount.textContent = likes.toString();
  document.body.classList.add('modal-open');

  commentsList.innerHTML = '';

  comments.slice(0, numberOfComments).forEach((item) => {
    renderComment(item);
  });

  socialCommentsCount.textContent = `${socialComments.childElementCount} из ${allCommentsCount} комментариев`;
};

commentsLoaderButton.addEventListener('click', () => {
  numberOfComments += 5;
  commentsList.innerHTML = '';
  commentsArray.slice(0, numberOfComments).forEach((item) => {
    renderComment(item);
  });
  socialCommentsCount.textContent = `${socialComments.childElementCount} из ${allCommentsCount} комментариев`;
});
