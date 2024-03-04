export const PICTURE_COUNT = 25;
export const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const descriptions = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
  'Описание фотографии 4',
  'Описание фотографии 5',
  'Описание фотографии 6',
  'Описание фотографии 7',
  'Описание фотографии 8',
];

export const userNames = [
  'Святополк',
  'Неждан',
  'Любава',
  'Архип',
  'Агафья',
  'Ратибор',
  'Всеволод',
];

export const HASH_TAG_REGULAR = /^#[a-zа-яё0-9]{1,19}$/i;

export const FILTER_EFFECTS = {
  chrome: {
    className: 'effects__preview--chrome',
    effect: 'grayscale', //(0..1), step = 0.1
    unit: '',
  },
  sepia: {
    className: 'effects__preview--sepia',
    effect: 'sepia', //(0..1), step = 0.1
    unit: '',
  },
  marvin: {
    className: 'effects__preview--marvin',
    effect: 'invert', //(0..100%), step = 1%
    unit: '%',
  },
  phobos: {
    className: 'effects__preview--phobos',
    effect: 'blur', //(0..3px), step = 0.1px
    unit: 'px',
  },
  heat: {
    className: 'effects__preview--heat',
    effect: 'brightness', //(1..3), step = 0.1
    unit: '',
  },
};
