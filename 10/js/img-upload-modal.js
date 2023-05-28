import {isEscapeKey} from './util.js';
import {onScaleDecreaseClick, onScaleIncreaseClick, resetPhotoScale} from './photo-scale.js';
import {resetFilters} from './photo-filters.js';

const form = document.querySelector('#upload-select-image');
const uploadInput = form.querySelector('#upload-file');
const formElement = form.querySelector('.img-upload__overlay');
const closeFormElement = form.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('input.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const scaleDecreaseButton = form.querySelector('.scale__control--smaller');
const scaleIncreaseButton = form.querySelector('.scale__control--bigger');

const onUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPopup();
  }
};

function openUploadPopup () {
  formElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal_open');

  scaleDecreaseButton.addEventListener('click', onScaleDecreaseClick);
  scaleIncreaseButton.addEventListener('click', onScaleIncreaseClick);

  closeFormElement.addEventListener('click', closeUploadPopup);
  document.addEventListener('keydown', onUploadEscKeydown);
}

function closeUploadPopup () {
  formElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal_open');

  uploadInput.value = '';
  hashtagInput.value = '';
  descriptionInput.value = '';

  scaleDecreaseButton.removeEventListener('click', onScaleDecreaseClick);
  scaleIncreaseButton.removeEventListener('click', onScaleIncreaseClick);

  resetPhotoScale();
  resetFilters();

  closeFormElement.removeEventListener('click', closeUploadPopup);
  document.removeEventListener('keydown', onUploadEscKeydown);
}

uploadInput.addEventListener('change', () => {
  openUploadPopup();
});
