import {isEscapeKey} from './util.js';

const COMMENTS_PER_LOAD = 5;

const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const loadCommentsButton = bigPicture.querySelector('.social__comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const closeBigPictureElement= bigPicture.querySelector('.big-picture__cancel');

let pictureComments;

//Обработчик закрытия по нажатию кнопки
const onBigPictureEscKeyDown =(evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

//Обработчик закрытия по клику
const onCloseBigPictureClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const openBigPicture = (pictureData) => {
  //Заполняем данные каждой фотографии пользователя
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;

  //"Загружаем" коммантарии на страницу
  pictureComments = pictureData.comments.slice();
  loadMoreComments(pictureComments);

  //Скрытие кнопки добавления комментариев, если комментариев мало
  if (pictureComments.length > COMMENTS_PER_LOAD) {
    loadCommentsButton.classList.remove('hidden');
  }
  //Классы отображения/скрытия окна
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  //Обработчики закрытия окна и появления кнопки отображения комментариев
  closeBigPictureElement.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onBigPictureEscKeyDown);
  loadCommentsButton.addEventListener('click', loadMoreComments);
};

function loadMoreComments() {
  const currentCommentsCount = commentsList.children.length;
  //Проверка количества отображенных комментариев после обновления
  const commentsCountAfterAdding = pictureComments.length > COMMENTS_PER_LOAD + currentCommentsCount
    ? COMMENTS_PER_LOAD + currentCommentsCount
    : pictureComments.length;
  //Скрытие кнопки если все комментарии отображены после обновления
  if (commentsCountAfterAdding === pictureComments.length) {
    loadCommentsButton.classList.add('hidden');
  }

  //Обновляем сообщение о количестве комментариев
  commentsCount.innerHTML = '';
  commentsCount.insertAdjacentHTML('beforeend', `
  ${commentsCountAfterAdding} из <span className="comments-count">${pictureComments.length}</span> комментариев`);

  // Вставляем комментарии в тег
  for (let i = currentCommentsCount; i < commentsCountAfterAdding; i++) {
    commentsList.insertAdjacentHTML('beforeend', `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${pictureComments[i].avatar}"
            alt="${pictureComments[i].name}"
            width="35" height="35">
        <p class="social__text">${pictureComments[i].message}</p>
    </li>`);
  }
}

function closeBigPicture() {
  //Классы отображения/скрытия окна
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  //Очищение комментариев
  commentList.innerHTML = '';

  //Обработчики закрытия окна и появления кнопки отображения комментариев
  closeBigPictureElement.removeEventListener('click', onCloseBigPictureClick);
  document.removeEventListener('keydown', onBigPictureEscKeyDown);
  loadCommentsButton.removeEventListener('click', loadMoreComments);
}

export {openBigPicture};
