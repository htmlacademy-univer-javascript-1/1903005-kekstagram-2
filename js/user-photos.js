import { createPhotos } from './data.js';

const userPhotos = createPhotos();

const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesListFragment = document.createDocumentFragment();
const picturesSection = document.createElement('section');

userPhotos.forEach(({url, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent =likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(photoElement);
});

picturesSection.appendChild(picturesListFragment);
document.querySelector('.pictures').appendChild(picturesSection);
