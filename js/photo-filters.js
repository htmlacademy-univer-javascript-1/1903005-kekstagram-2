const DEFAULT_FILTER_VALUE = 100;
const Filters = {
  none: {
    effect: '',
    minValue: 0,
    maxValue: 100,
    step: 1,
    filter: '',
    measurement: '',
    hideFilter: true
  },
  chrome: {
    effect: 'chrome',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    filter: 'grayscale',
    measurement: '',
    hideFilter: false
  },
  sepia: {
    effect: 'sepia',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    filter: 'sepia',
    measurement: '',
    hideFilter: false
  },
  marvin: {
    effect: 'marvin',
    minValue: 0,
    maxValue: 100,
    step: 1,
    filter: 'invert',
    measurement: '%',
    hideFilter: false
  },
  phobos: {
    effect: 'phobos',
    minValue: 0,
    maxValue: 3,
    step: 0.1,
    filter: 'blur',
    measurement: 'px',
    hideFilter: false
  },
  heat: {
    effect: 'heat',
    minValue: 1,
    maxValue: 3,
    step: 0.1,
    filter: 'brightness',
    measurement: '',
    hideFilter: false
  }
};

const photoPreview = document.querySelector('.img-upload__preview');
const effectLevelValue = document.querySelector('.effect-level__value');
const levelSliderElement = document.querySelector('.effect-level__slider');
const effectsRadioList = document.querySelector('.img-upload__effects');

let currentFilter = Filters.none;
let currentFilterClass = '';
let currentFilterValue = DEFAULT_FILTER_VALUE;

levelSliderElement.classList.add('visually-hidden');

noUiSlider.create(levelSliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const changeFilter = (effect) => {
  if (currentFilterClass !== '') {
    photoPreview.classList.remove(currentFilterClass);
  }

  currentFilter = effect;
  currentFilterValue = effect.maxValue;

  if (effect.effect !== '') {
    currentFilterClass = `effects__preview--${effect.effect}`;
    photoPreview.classList.add(currentFilterClass);
  }

  if (effect.filter !== Filters.none.filter) {
    photoPreview.style['filter'] = `${effect.filter}(${effect.maxValue}${effect.measurement})`;
  }
  else {
    photoPreview.style['filter'] = '';
  }

  effectLevelValue.value = currentFilterValue;

  if (effect.hideFilter) {
    levelSliderElement.classList.add('visually-hidden') ;
  } else {
    levelSliderElement.classList.remove('visually-hidden');
  }

  levelSliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.minValue,
      max: effect.maxValue
    },
    start: effect.maxValue,
    step: effect.step
  });
};

const changeFilterValue = (value) => {
  currentFilterValue = value;
  photoPreview.style['filter'] = `${currentFilter.filter}(${value}${currentFilter.measurement})`;
};

const onEffectsRadioChange = (evt) => {
  const value = evt.target.value;
  changeFilter(Filters[value]);
};

const resetRadiosValue = () => {
  const filterRadios = effectsRadioList.querySelectorAll('.effects__radio');
  filterRadios.forEach((element) => {
    element.checked = false;
  });
  filterRadios[0].checked = true;
};

const resetFilters = () => {
  changeFilter(Filters.none);
  resetRadiosValue();
};

effectsRadioList.addEventListener('change', onEffectsRadioChange);

levelSliderElement.noUiSlider.on('update', () => {
  const levelSliderValue = levelSliderElement.noUiSlider.get();
  effectLevelValue.value = levelSliderValue;
  changeFilterValue(levelSliderValue);
});

export {resetFilters};
