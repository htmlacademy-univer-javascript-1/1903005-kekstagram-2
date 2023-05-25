function getRandom(a, b){
  const diff = Math.abs(a - b);
  const min = Math.min(a, b);
  const rand = Math.floor(Math.random() * (diff + 1));
  return rand + min;
};

const getRandomElement = (elements) => elements[getRandom(0, elements.length - 1)];

const isLong = (str, maxLength) => str.length <= maxLength;

export {getRandom, getRandomElement, isLong};
