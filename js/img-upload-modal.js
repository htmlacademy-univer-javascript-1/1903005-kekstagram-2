import {isEscapeKey} from './util.js';
import {onScaleDecreaseClick, onScaleIncreaseClick, resetPhotoScale} from './photo-scale.js';
import {resetFilters} from './photo-filters.js';

const form = document.querySelector('#upload-select-image');
const uploadInput = form.querySelector('#upload-file');
const formElement = form.querySelector('.img-upload__overlay');
const closeFormElement = form.querySelector('#upload-cancel');
const scaleDecreaseButton = form.querySelector('.scale__control--smaller');
const scaleIncreaseButton = form.querySelector('.scale__control--bigger');
const hashtagInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

const onUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPopup();
  }
};

function openForm () {
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

  closeFormElement.removeEventListener('click', closeUploadPopup);
  document.removeEventListener('keydown', onUploadEscKeydown);

  scaleDecreaseButton.removeEventListener('click', onScaleDecreaseClick);
  scaleIncreaseButton.removeEventListener('click', onScaleIncreaseClick);

  resetPhotoScale();
  resetFilters();
}

uploadInput.addEventListener('change', () => {
  openForm();
});

hashtagInput.addEventListener('focus',
  document.removeEventListener('keydown', onUploadEscKeydown)
);
hashtagInput.addEventListener('blur',
  document.addEventListener('keydown', onUploadEscKeydown)
);

descriptionInput.addEventListener('focus',
  document.removeEventListener('keydown', onUploadEscKeydown)
);
descriptionInput.addEventListener('blur',
  document.addEventListener('keydown', onUploadEscKeydown)
);
