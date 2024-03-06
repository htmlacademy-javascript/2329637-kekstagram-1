import {descriptions} from './data.js';
import {createComments} from './create-comments.js';
import {createIdGenerator, getRandomInteger, getRandomArrayItem} from './util.js';

const MAX_LIKE_NUMBER = 200;
const MIN_LIKE_NUMBER = 15;

const generateIdPhoto = createIdGenerator();
const generateIdUrl = createIdGenerator();

/**
 * Функция возвращает объект, описывающий фотографию опубликованную пользователем
 * @returns {{comments: {name: string, id: string, avatar: string, message: string}[], description: string, id: number, url: string, likes: string}}
 */
export const createDescriptionOfPhoto = () => ({
  id: generateIdPhoto(),
  url: `photos/${generateIdUrl()}.jpg`,
  description: `${getRandomArrayItem(descriptions)}`,
  likes: `${getRandomInteger(MIN_LIKE_NUMBER, MAX_LIKE_NUMBER)}`,
  comments: createComments(),
});
