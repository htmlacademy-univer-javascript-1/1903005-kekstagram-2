import { checkDuplicate } from './util.js';

const MAX_HASHTAGS_COUNT = 5;
// const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const reHashtag = /^#[a-zа-яЁё0-9]{1,19}$/;

const form = document.querySelector('#upload-select-image');
const hashtagInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

//Валидация хэш-тега картинки

function validateHashtagDuplicate (value) {
  const splitted = value.split(/\s+/);
  return ! checkDuplicate(splitted);
}

pristine.addValidator(
  hashtagInput,
  validateHashtagDuplicate,
  'Не должно быть повторяющихся тегов', 1, true
);

function validateHashtagCount (value) {
  const splitted = value.split(/\s+/);
  return splitted.length <= MAX_HASHTAGS_COUNT;
}

pristine.addValidator(
  hashtagInput,
  validateHashtagCount,
  `Хэштегов не должно быть больше ${MAX_HASHTAGS_COUNT}`, 2, true
);

function validateHashtagRight (value) {
  value = value.toLowerCase();
  const splitted = value.split(/\s+/);
  let isHashtagRight = true;
  splitted.forEach((element) => {
    isHashtagRight = isHashtagRight && reHashtag.test(element);
  });
  if (value === '') {
    return true;
  }
  return isHashtagRight;
}

pristine.addValidator(
  hashtagInput,
  validateHashtagRight,
  'Хэштег должен выглядеть как хэштег', 3, true
);

//Валидация описания картинки

function validateDescription (value) {
  const splitted = value.split(/\s+/);
  return splitted.length <= MAX_DESCRIPTION_LENGTH;
}

pristine.addValidator(
  descriptionInput,
  validateDescription,
  `Описание не должно превышать ${MAX_DESCRIPTION_LENGTH} слов`, 2, false
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});
