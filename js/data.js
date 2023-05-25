/* eslint-disable arrow-body-style */
import {getRandomInteger, getRandomElement} from './util.js';
const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Виталик',
  'Настя',
  'Петя',
  'Владислав',
  'Вениамин',
  'Jack'
];

const createPhoto = () => {
  return {
    id: getRandomInteger(1, 25),
    url: '',
    description: 'NICE',
    likes: getRandomInteger(1, 25),
    comments: {
      id: getRandomInteger(1, 1000),
      avatar: `../img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomElement(comments),
      name: getRandomElement(names)
    }
  };
};

const createPhotos = () => Array.from({length: 4},
  createPhoto);

export {createPhotos};
