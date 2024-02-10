const pictures = document.querySelector('.pictures');
const pictureLinkTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

/**
 * Функция генерирует фотографии пользователей на основе массива данных
 * @param picturesList {array}
 */

export const renderPosts = (picturesList) => {
  picturesList.forEach(({url, comments, likes}) => {
    const pictureLink = pictureLinkTemplate.cloneNode(true);

    pictureLink.querySelector('.picture__img').src = url;
    pictureLink.querySelector('.picture__comments').append(comments.length);
    pictureLink.querySelector('.picture__likes').textContent = likes;

    pictures.append(pictureLink);
  });
};


