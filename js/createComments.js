import {AVATAR_COUNT} from './data.js';
import {generateIdComment} from './data.js';
import {commentMessages} from './data.js';
import {userNames} from './data.js';
import {getRandomInteger} from './util.js';
import {getRandomArrayItem} from './util.js';

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
const createComments = () => {
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

export {createComments};
