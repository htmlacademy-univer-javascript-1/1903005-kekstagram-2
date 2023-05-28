const PHOTO_SCALE_STEP = 25;
const PHOTO_SCALE_DEFAULT = 100;

const scaleInput = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview');

let photoScaleValue = PHOTO_SCALE_DEFAULT;

const setScaleAttribute = () => photoPreview.setAttribute('style',
  `transform:scale(${photoScaleValue/100})`
);

const onScaleDecreaseClick = () => {
  if (photoScaleValue === 25) {
    return;
  }

  photoScaleValue = photoScaleValue - PHOTO_SCALE_STEP;
  scaleInput.value =`${photoScaleValue}%`;
  setScaleAttribute();
};

const onScaleIncreaseClick = () => {
  if (photoScaleValue === 100) {
    return;
  }

  photoScaleValue = photoScaleValue + PHOTO_SCALE_STEP;
  scaleInput.value = `${photoScaleValue}%`;
  setScaleAttribute();
};

const resetPhotoScale = () => {
  photoScaleValue = PHOTO_SCALE_DEFAULT;
  scaleInput.value = `${photoScaleValue}%`;
  setScaleAttribute();
};

export {onScaleDecreaseClick, onScaleIncreaseClick, resetPhotoScale};
