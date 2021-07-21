const MIN = 1;
const MAX = 100;

const getRandomInteger = function (min = MIN, max = MAX) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomIndex = function (array) {
  return getRandomInteger(0, array.length - 1);
};

const getRandomElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
};

const shuffle = function (array) {
  let j, temp;
  for(let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomIndex, getRandomElement, shuffle, isEscEvent};
