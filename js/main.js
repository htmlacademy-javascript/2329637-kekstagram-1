const PICTURE_COUNT = 25;
const MAX_LIKE_NUMBER = 200;
const MIN_LIKE_NUMBER = 15;
const AVATAR_COUNT = 6;
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы деламете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
  'Описание фотографии 4',
  'Описание фотографии 5',
  'Описание фотографии 6',
  'Описание фотографии 7',
  'Описание фотографии 8',
];
const USER_NAMES = [
  'Святополк',
  'Неждан',
  'Любава',
  'Архип',
  'Агафья',
  'Ратибор',
  'Всеволод',
];

const arrayContent = [];

const generateIdPhoto = createIdGenerator();
const generateIdUrl = createIdGenerator();
const generateIdComment = createIdGenerator();

/**
 * Функция для создания массива, состоящего из объектов
 * @param number {object}
 */
function arrayGenerator(number) {
  for (let i = 1 ; i <= number ; i++) {
    arrayContent.push(createPhotoDescriptionObject());
  }
}

/**
 * Функция-замыкание для создания идентификатора
 * @returns {function(): number}
 */
function createIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

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
 * Функция создаёт объект из сгенерированных значений свойств
 * @returns {
 *  {
 *    comments: {name: string,
 *               id: string,
 *               avatar: string,
 *               message: string},
 *    description: string,
 *    id: number,
 *    url: string,
 *    likes: string
 *  }
 * }
 */
function createPhotoDescriptionObject() {
  return {
    id: generateIdPhoto(),
    url: `photos/${generateIdUrl()}.jpg`,
    description: `${DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]}`,
    likes: `${getRandomInteger(MIN_LIKE_NUMBER,MAX_LIKE_NUMBER)}`,
    comments: {
      id: `${generateIdComment()}`,
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}`,
      message: `${COMMENT_MESSAGES[getRandomInteger(0, COMMENT_MESSAGES.length - 1)]}`,
      name: `${USER_NAMES[getRandomInteger(0, USER_NAMES.length - 1)]}`,
    },
  };
}

arrayGenerator(PICTURE_COUNT);
