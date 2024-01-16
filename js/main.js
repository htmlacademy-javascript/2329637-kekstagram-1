const PICTURE_COUNT = 25;
const MAX_LIKE_NUMBER = 200;
const MIN_LIKE_NUMBER = 15;
const AVATAR_COUNT = 6;
const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы деламете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const descriptions = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
  'Описание фотографии 4',
  'Описание фотографии 5',
  'Описание фотографии 6',
  'Описание фотографии 7',
  'Описание фотографии 8',
];
const userNames = [
  'Святополк',
  'Неждан',
  'Любава',
  'Архип',
  'Агафья',
  'Ратибор',
  'Всеволод',
];

/**
 * Функция-замыкание для создания независимых идентификаторов
 * @param lastId
 * @returns {function(): number}
 */
const createIdGenerator = (lastId = 0) => () => ++lastId;

const generateIdPhoto = createIdGenerator();
const generateIdUrl = createIdGenerator();
const generateIdComment = createIdGenerator();

/**
 * Функция вычисляет случайное число в заданом диапазоне от 'a' до 'b'
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * Функция возвращает случайнай элемент массива
 * @param array
 * @returns {*}
 */
const getRandomArrayItem = (array) => array[getRandomInteger(0, userNames.length - 1)];

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
const createObjectPhotoDescription = () => ({
  id: generateIdPhoto(),
  url: `photos/${generateIdUrl()}.jpg`,
  description: `${getRandomArrayItem(descriptions)}`,
  likes: `${getRandomInteger(MIN_LIKE_NUMBER, MAX_LIKE_NUMBER)}`,
  comments: createComments(),
});

/**
 * Функция возвращает массив, состоящий из объектов
 * @param number
 * @returns {*[]}
 */
const createArrayPhotoDescriptions = (number) => {
  const arrayContent = [];

  for (let i = 1 ; i <= number ; i++) {
    arrayContent.push(createObjectPhotoDescription());
  }
  return arrayContent;
};

createArrayPhotoDescriptions(PICTURE_COUNT);
