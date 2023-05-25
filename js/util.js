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

export {getRandomInteger, getRandomElement, checkStringLength};
