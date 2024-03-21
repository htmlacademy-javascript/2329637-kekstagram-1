import {renderPosts} from './render-posts.js';
import {getData} from './api.js';
import {showErrorDownload} from './alert-modals.js';
import {throttle} from './util.js';

const pictures = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');
const buttonFilterDefault = imgFilters.querySelector('#filter-default');
const buttonFilterRandom = imgFilters.querySelector('#filter-random');
const buttonFilterDiscussed = imgFilters.querySelector('#filter-discussed');
let currentFilter = buttonFilterDefault;

/**
 * Функция добавляет класс визуального отображения текущего фильтра
 * @param button
 */
const changeCurrentFilter = (button) => {
  currentFilter.classList.remove('img-filters__button--active');
  currentFilter = button;
  currentFilter.classList.add('img-filters__button--active');
};

/**
 * Функция делает блок с фильтрами видимым
 */
export const showFilter = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

/**
 * Функция делает блок с фильтрами невидимым
 */
export const hideFilter = () => {
  imgFilters.classList.add('img-filters--inactive');
};

/**
 * Функция очищает текущий список постов
 */
const removePictures = () => {
  const picturesList = pictures.querySelectorAll('.picture');
  picturesList.forEach((item) => item.remove());
};

/**
 * Функция отображения постов по-умолчанию
 * @param button
 */
const onClickRenderDefault = (button) => {
  removePictures();
  changeCurrentFilter(button);
  getData()
    .then((data) => {
      renderPosts(data);
      showFilter();
    })
    .catch((error) => {
      showErrorDownload(error.message);
      hideFilter();
    });
};
/**
 * Функция отображения 10 случайных постов
 * @param button
 */
const onClickRenderRandom = (button) => {
  let dataArray;
  removePictures();
  changeCurrentFilter(button);
  getData()
    .then((data) => {
      dataArray = data.sort(() => Math.random() - 0.5).slice(0,10);
    })
    .then(() => renderPosts(dataArray))
    .then(() => showFilter())
    .catch((error) => {
      showErrorDownload(error.message);
      hideFilter();
    });
};
/**
 * Функция отображения постов, отсортированных в порядке убывания количества комментариев
 * @param button
 */
const onClickRenderDiscussed = (button) => {
  let dataArray;
  removePictures();
  changeCurrentFilter(button);
  getData()
    .then((data) => {
      dataArray = data.sort((a,b) => b.comments.length - a.comments.length);
    })
    .then(() => renderPosts(dataArray))
    .then(() => showFilter())
    .catch((error) => {
      showErrorDownload(error.message);
      hideFilter();
    });
};

buttonFilterDefault.addEventListener('click', throttle((evt) => onClickRenderDefault(evt.target), 300));
buttonFilterRandom.addEventListener('click', throttle((evt) => onClickRenderRandom(evt.target), 300));
buttonFilterDiscussed.addEventListener('click', throttle((evt) => onClickRenderDiscussed(evt.target), 300));
