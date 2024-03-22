import {renderPosts} from './render-posts.js';
import {debounce} from './util.js';

const pictures = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');
const filterForm = imgFilters.querySelector('.img-filters__form');
const buttonFilterDefault = imgFilters.querySelector('#filter-default');
const buttonFilterRandom = imgFilters.querySelector('#filter-random');
const buttonFilterDiscussed = imgFilters.querySelector('#filter-discussed');
let currentFilter = buttonFilterDefault;

/**
 * Функция очищает текущий список постов
 */
const removePictures = () => {
  const picturesList = pictures.querySelectorAll('.picture');
  picturesList.forEach((item) => item.remove());
};

/**
 * Функция добавляет класс визуального отображения текущего фильтра
 * @param evt
 */
const changeCurrentFilterClass = (evt) => {
  currentFilter.classList.remove('img-filters__button--active');
  currentFilter = evt.target;
  currentFilter.classList.add('img-filters__button--active');
};

const applyFilter = (dataArray) => {
  removePictures();
  renderPosts(dataArray);
};

export const initFilter = (data) => {
  imgFilters.classList.remove('img-filters--inactive');

  const sortPosts = (evt) => {
    let dataArray = data.slice();
    if (evt.target === buttonFilterRandom) {
      dataArray = dataArray
        .sort(() => Math.random() - 0.5)
        .slice(0,10);
    } else if (evt.target === buttonFilterDiscussed) {
      dataArray = dataArray
        .sort((a,b) => b.comments.length - a.comments.length);
    }
    applyFilter(dataArray);
  };

  const debouncedSortFilteredPosts = debounce(sortPosts, 500);

  const onClickApplyFilter = (evt) => {
    if (evt.target !== currentFilter) {
      changeCurrentFilterClass(evt);
      debouncedSortFilteredPosts(evt);
    }
  };

  filterForm.addEventListener('click', onClickApplyFilter);
};

