/* eslint-disable arrow-body-style */
import {getRandomInteger, getRandomElement} from './util.js';

const MAX_PHOTO_COUNT = 5;
const MAX_COMMENT_COUNT = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Виталик',
  'Настя',
  'Петя',
  'Владислав',
  'Вениамин',
  'Jack'
];

const createComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `../img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const createPhoto = () => {
  return {
    id: getRandomInteger(1, 25),
    url: `../photos/${getRandomInteger(1, 25)}.jpg`,
    description: 'NICE',
    likes: getRandomInteger(1, 25),
    comments: Array.from({length: getRandomInteger(1, MAX_COMMENT_COUNT)}, createComment)
  };
};

const createPhotos = () => Array.from({length: MAX_PHOTO_COUNT},
  createPhoto);

export {createPhotos};
