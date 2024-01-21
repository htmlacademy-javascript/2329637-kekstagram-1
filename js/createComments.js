import {commentMessages, userNames} from './data.js';
import {createIdGenerator, getRandomInteger, getRandomArrayItem} from './util.js';

const AVATAR_COUNT = 6;

const generateIdComment = createIdGenerator();

/**
 * Функция возвращает массив комментариев из сгенерированных объектов
 * @returns {[
 *    {
 *      name: string,
 *      id: string,
 *      avatar: string,
 *      message: string
 *    },
 *  ]}
 */
export const createComments = () => {
  const arrayComments = [];

  for (let i = 1; i <= getRandomInteger(1,5);i++) {
    arrayComments
      .push(
        {
          id: `${generateIdComment()}`,
          avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}`,
          message: `${getRandomArrayItem(commentMessages)}`,
          name: `${getRandomArrayItem(userNames)}`,
        },
      );
  }

  return arrayComments;
};
