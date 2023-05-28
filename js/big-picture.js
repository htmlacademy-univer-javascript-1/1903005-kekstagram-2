import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');

const closeBigPictureElement= document.querySelector('.big-picture__cancel');

const onBigPictureEscKeyDown =(evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onCloseBigPictureClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const openBigPicture = (pictureData) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length.toString();
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;

  const commentsList = bigPicture.querySelector('.social__comments');
  pictureData.comments.forEach((commentData) => {
    commentsList.insertAdjacentHTML('beforeend', `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${commentData.avatar}"
            alt="${commentData.name}"
            width="35" height="35">
        <p class="social__text">${commentData.message}</p>
    </li>`);
  });

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeBigPictureElement.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onBigPictureEscKeyDown);
};

function closeBigPicture() {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  commentList.innerHTML = '';

  closeBigPictureElement.removeEventListener('click', onCloseBigPictureClick);
  document.removeEventListener('keydown', onBigPictureEscKeyDown);
}

export {openBigPicture};
