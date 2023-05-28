/* eslint-disable arrow-body-style */
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const checkStringLength = (str, maxLength) => str.length <= maxLength;

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

function checkDuplicate(arr){
  let result = false;
  for(let i = 0; i < arr.length;i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      result = true;
      break;
    }
  }
  return result;
}

export {getRandomInteger, getRandomElement, checkStringLength,
  isEscapeKey, isEnterKey,
  checkDuplicate};
