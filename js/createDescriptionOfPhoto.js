import {MIN_LIKE_NUMBER} from './data.js';
import {MAX_LIKE_NUMBER} from './data.js';
import {descriptions} from './data.js';
import {generateIdPhoto} from './data.js';
import {generateIdUrl} from './data.js';
import {createComments} from './createComments.js';
import {getRandomInteger} from './util.js';
import {getRandomArrayItem} from './util.js';

/**
 * Функция возвращает объект, описывающий фотографию опубликованную пользователем
 * @returns {{
 *    comments:
 *      {
 *        name: string,
 *        id: string,
 *        avatar: string,
 *        message: string
 *      }[],
 *    description: string,
 *    id: number,
 *    url: string,
 *    likes: string
 *  }}
 */
const createDescriptionOfPhoto = () => ({
  id: generateIdPhoto(),
  url: `photos/${generateIdUrl()}.jpg`,
  description: `${getRandomArrayItem(descriptions)}`,
  likes: `${getRandomInteger(MIN_LIKE_NUMBER, MAX_LIKE_NUMBER)}`,
  comments: createComments(),
});

export {createDescriptionOfPhoto};
