const MAX_OFFERS = 10;
const DEFAULT_VALUE = 'any';

const priceRange = {
  'low': {
    'start': 0,
    'end': 10000,
  },
  'middle': {
    'start': 10000,
    'end': 50000,
  },
  'high': {
    'start': 50000,
    'end': Infinity,
  },
};

// const filters = document.querySelectorAll('.map-filter, .map-checkbox';
const filters = Array.from(document.querySelectorAll('.map-filter, .map-checkbox'));

const filterRules = {
  'housing-type': (data, filter) => filter.value === data.offer.type, // совпадают ли выбранные значения фильтра и фичи в описании отеля
  'housing-price': (data, filter) => data.offer.price >= priceRange[filter.value].start && data.offer.price < priceRange[filter.value].end, // в какой диапазон цен (больше 'start' и меньше 'end') попадает цена отеля
  'housung-rooms': (data, filter) => filter.value === data.offer.rooms.toString(),
  'housing-guests': (data, filter) => filter.value === data.offer.guests.toString(),
  'housing-features':  (data, filter) => {
    const checkedFeatures = Array.from(filter.querySelectorAll('input[type="checkbox"]:checked'));
    checkedFeatures.every((checkbox) =>
      data.offer.features.some((feature) =>
        feature === checkbox.value)); // сравниваем каждый выбранный чекбокс через метод some);
  },
};

const filterOffers = (data) => {
  let filteredData = [];
  let i = 0;
  let result;

  while (i < data.length && filteredData.length <= MAX_OFFERS) {
    result = filters.every((filter) =>
      filter.value === DEFAULT_VALUE ? true : filterRules[filter.id](data[i], filter));

    if (result) {
      filteredData = filteredData.push(data[i]);
    }

    i++;
  }

  return filteredData;
};

export {filterOffers};
