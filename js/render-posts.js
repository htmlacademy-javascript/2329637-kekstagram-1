import {renderModalBigPicture} from './modal-big-picture.js';

const pictures = document.querySelector('.pictures');
const pictureLinkTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

/**
 * Функция генерирует фотографии пользователей на основе объекта данных, полученных с сервера
 * @param picturesList {object}
 */

export const renderPosts = (picturesList) => {
  picturesList.forEach(({url, comments, likes, description}) => {
    const pictureLink = pictureLinkTemplate.cloneNode(true);

    pictureLink.querySelector('.picture__img').src = url;
    pictureLink.querySelector('.picture__comments').append(comments.length);
    pictureLink.querySelector('.picture__likes').textContent = likes;

    pictureLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderModalBigPicture({url, comments, likes, description});
    });

    pictures.append(pictureLink);
  });
};
