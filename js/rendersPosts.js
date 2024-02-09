import {PICTURE_COUNT} from './data.js';
import {createPhotoDescriptions} from './createPhotoDescriptions.js';

const pictures = document.querySelector('.pictures');
const pictureLinkTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

createPhotoDescriptions(PICTURE_COUNT).forEach(({url, comments, likes}) => {
  const pictureLink = pictureLinkTemplate.cloneNode(true);

  pictureLink.querySelector('.picture__img').src = url;
  pictureLink.querySelector('.picture__comments').append(comments.length);
  pictureLink.querySelector('.picture__likes').textContent = likes;

  pictures.append(pictureLink);
});


