import { createPhotos } from './data.js';
import { openBigPicture } from './big-picture.js';

const userPhotos = createPhotos();

const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesListFragment = document.createDocumentFragment();
const picturesSection = document.createElement('section');
const pictureList = document.querySelector('.pictures');

userPhotos.forEach((pictureData) => {
  const pictureElement = photoTemplate.cloneNode(true);
  const pictureImg = pictureElement.querySelector('.picture__img');

  pictureImg.src = pictureData.url;
  pictureImg.dataset.pictureData = JSON.stringify(pictureData);

  pictureElement.querySelector('.picture__likes').textContent = pictureData.likes;
  pictureElement.querySelector('.picture__comments').textContent = pictureData.comments.length;

  picturesListFragment.appendChild(pictureElement);
});

picturesSection.appendChild(picturesListFragment);
pictureList.appendChild(picturesSection);

pictureList.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.nodeName === 'IMG') {
    openBigPicture(JSON.parse(target.dataset.pictureData));
  }
});
