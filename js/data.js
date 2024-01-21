import {createIdGenerator} from './util.js';

export const PICTURE_COUNT = 25;
export const MAX_LIKE_NUMBER = 200;
export const MIN_LIKE_NUMBER = 15;
export const AVATAR_COUNT = 6;
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

export const generateIdPhoto = createIdGenerator();
export const generateIdUrl = createIdGenerator();
export const generateIdComment = createIdGenerator();
