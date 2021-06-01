// Случайное целое число в заданном диапазоне, включительно
const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min); // округление вверх до ближайшего большего целого числа
  max = Math.floor(max); // округление вниз до ближайшего меньшего целого числа
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются, округляем и добавляем нижнюю границу диапазона
};

getRandomInteger(2, 10);

// Случайное дробное число в заданном диапазоне, включительно
const getRandomFloat = function (min, max, decimalPlaces) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return (Math.random() * (max - min + 1) + min).toFixed(decimalPlaces);
};

getRandomFloat(2.67, 4.36, 3);
